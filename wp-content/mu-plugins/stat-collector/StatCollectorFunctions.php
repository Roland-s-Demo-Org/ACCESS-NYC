<?php

namespace StatCollector;

function drools_request($data, $uid) {
  $db = _get_db();
  $result = $db->query($db->prepare("
    INSERT into requests (uid, data) VALUES (%s, %s)",
    $uid,
    json_encode($data)
  ));

  if($result === false){
    // print the error
    error_log('STAT COLLECTOR ERROR ' . $db->last_error.json_encode($data));
  }
}

function drools_response($response, $uid) {
  $db = _get_db();
  $result = $db->query($db->prepare("
    INSERT into responses (uid, data) VALUES (%s, %s)",
    $uid,
    json_encode($response)
  ));

  if($result === false){
    // print the error
    error_log('STAT COLLECTOR ERROR ' . $db->last_error.json_encode($response));
  }
}

function results_sent($type, $to, $uid, $url = null, $message = null) {
  $db = _get_db();
  $result = $db->query($db->prepare("
    INSERT into messages (uid, msg_type, address, url, message)
      VALUES (%s, %s, %s, %s, %s)",
    $uid,
    strtolower($type),
    $to,
    $url,
    $message
  ));

  if($result === false){
    // print the error
    $request_parameters =  array($type, $to, $uid, $url, $message);
    error_log('STAT COLLECTOR ERROR '
              . $db->last_error.json_encode($request_parameters));
  }
}

function peu_data($staff, $client, $uid) {
  if (empty($uid)) {
    return;
  }
  $db = _get_db();

  if (! empty($staff)) {
    $result = $db->query($db->prepare("
      INSERT into peu_staff (uid, data) VALUES (%s, %s)",
      $uid,
      json_encode($staff)
    ));

    if($result === false){
      // print the error
      $request_parameters =  array($staff, $client, $uid);
      error_log('STAT COLLECTOR ERROR '
                . $db->last_error.json_encode($request_parameters));
    }
  }
  if (! empty($client)) {
    $result = $db->query($db->prepare("
      INSERT into peu_client (uid, data) VALUES (%s, %s)",
      $uid,
      json_encode($client)
    ));
    if($result === false){
      // print the error
      $request_parameters =  array($staff, $client, $uid);
      error_log('STAT COLLECTOR ERROR '
                . $db->last_error.json_encode($request_parameters));
    }
  }
}

function response_update() {
  $uid = $_POST['GUID'];
  $url = $_POST['url'];
  $programs = $_POST['programs'];
  if (empty($uid) || empty($url) || empty($programs)) {
    wp_send_json(["status" => "fail","message" => "missing values"]);
    return wp_die();
  }

  $db = _get_db();
  $result = $db->query($db->prepare("
    INSERT into response_update (uid, url, program_codes) VALUES (%s, %s, %s)",
    $uid,
    $url,
    $programs
  ));

  if($result === false){
    // print the error
    $request_parameters =  array($uid, $url, $programs);
    error_log('STAT COLLECTOR ERROR '
              . $db->last_error.json_encode($request_parameters));
  }

  wp_send_json(["status" => "ok"]);
  wp_die();
}

function _get_db() {
  $host = get_option('statc_host');
  $database = get_option('statc_database');
  $user = get_option('statc_user');
  $password = get_option('statc_password');
  $bootstrapped = get_option('statc_bootstrapped');

  $host = (!empty($host)) ? $host : $_ENV['STATC_HOST'];
  $database = (!empty($database)) ? $database : $_ENV['STATC_DATABASE'];
  $user = (!empty($user)) ? $user : $_ENV['STATC_USER'];
  $password = (!empty($password)) ? $password : $_ENV['STATC_PASSWORD'];
  $bootstrapped = (!empty($bootstrapped)) ? $bootstrapped : $_ENV['STATC_BOOTSTRAPPED'];

  if (empty($host) || empty($database) || empty($user) || empty($password)) {
    error_log('StatCollector is missing database connection information. Cannot log');
    return new MockDatabase();
  }

  // establish a new database connection
  $db = new \wpdb($user, $password, $database, $host);
  $db->suppress_errors();
  $db->show_errors();

  if ($bootstrapped !== '5') {
    __bootstrap($db);
  }
  return $db;
}

function __bootstrap($db) {
  $db->query(
    "CREATE TABLE IF NOT EXISTS messages (
       id INT(11) NOT NULL AUTO_INCREMENT,
       uid VARCHAR(13) DEFAULT NULL,
       msg_type VARCHAR(10) DEFAULT NULL,
       address VARCHAR(255) NOT NULL,
       date DATETIME DEFAULT NOW(),
       url VARCHAR(512) DEFAULT NULL,
       message TEXT DEFAULT NULL,
       PRIMARY KEY(id)
     ) ENGINE=InnoDB"
  );
  $db->query(
    "CREATE TABLE IF NOT EXISTS requests (
       id INT(11) NOT NULL AUTO_INCREMENT,
       uid VARCHAR(13) DEFAULT NULL,
       data MEDIUMBLOB NOT NULL,
       date DATETIME DEFAULT NOW(),
       PRIMARY KEY(id)
     ) ENGINE=InnoDB"
  );
  $db->query(
    "CREATE TABLE IF NOT EXISTS responses (
       id INT(11) NOT NULL AUTO_INCREMENT,
       uid VARCHAR(13) DEFAULT NULL,
       data MEDIUMBLOB NOT NULL,
       date DATETIME DEFAULT NOW(),
       PRIMARY KEY(id)
     ) ENGINE=InnoDB"
  );
  $db->query(
    "CREATE TABLE IF NOT EXISTS peu_staff (
       id INT(11) NOT NULL AUTO_INCREMENT,
       uid VARCHAR(13) DEFAULT NULL,
       data MEDIUMBLOB NOT NULL,
       date DATETIME DEFAULT NOW(),
       PRIMARY KEY(id)
     ) ENGINE=InnoDB"
  );
  $db->query(
    "CREATE TABLE IF NOT EXISTS peu_client (
       id INT(11) NOT NULL AUTO_INCREMENT,
       uid VARCHAR(13) DEFAULT NULL,
       data MEDIUMBLOB NOT NULL,
       date DATETIME DEFAULT NOW(),
       PRIMARY KEY(id)
     ) ENGINE=InnoDB"
  );
  $db->query(
    "CREATE TABLE IF NOT EXISTS response_update (
       id INT(11) NOT NULL AUTO_INCREMENT,
       uid VARCHAR(13) DEFAULT NULL,
       url MEDIUMBLOB NOT NULL,
       program_codes VARCHAR(256) DEFAULT NULL,
       PRIMARY KEY(id)
     ) ENGINE=InnoDB"
  );

  // we will just let this fail if the columns exist
  // from previous migrations. But silence the error
  $db->hide_errors();
  $db->query(
    "ALTER TABLE messages
     ADD url VARCHAR(512) DEFAULT NULL AFTER date,
     ADD message TEXT DEFAULT NULL AFTER url"
  );
  $db->query(
    "ALTER TABLE response_update
     ADD date DATETIME DEFAULT NOW() AFTER program_codes"
  );
  $db->show_errors();

  update_option('statc_bootstrapped', 5);
}
