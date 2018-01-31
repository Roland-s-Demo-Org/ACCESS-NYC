<?php
/*
	Plugin Name: StatCollector
	Description: Collects information from Drools and saved results
	Author:      Blue State Digital
*/

namespace StatCollector;

if (!defined('WPINC')) {
	die; //no direct access
}
require plugin_dir_path( __FILE__ ) . 'settings.php';

add_action( 'drools_request', '\StatCollector\drools_request', 10, 2 );
add_action( 'drools_response', '\StatCollector\drools_response', 10, 2 );
add_action( 'results_sent', '\StatCollector\results_sent', 10, 5 );
add_action( 'peu_data', '\StatCollector\peu_data', 10, 3 );

function drools_request( $data, $uid ) {
	$db = _get_db();
	$db->insert("requests", [
		"uid" => $uid,
		"data"=>json_encode($data),
	]);
}

function drools_response( $response, $uid ) {
	$db = _get_db();
	$db->insert("responses", [
		"uid" => $uid,
		"data"=>json_encode($response),
	]);
}

function results_sent( $type, $to, $uid, $url=NULL, $message=NULL ) {
	$db = _get_db();
	$db->insert("messages", [
		"uid" => $uid,
		"msg_type"=>strtolower($type),
		"address"=>$to,
		"url"=>$url,
		"message"=>$message
	]);
}

function peu_data( $staff, $client, $uid ) {
	if ( empty($uid) ) {
		return;
	}
	$db = _get_db();

	if ( ! empty($staff) ) {
		$db->insert("peu_staff", [
			"uid" => $uid,
			"data" => json_encode( $staff )
		]);
	}
	if ( ! empty($client) ) {
		$db->insert("peu_client", [
			"uid" => $uid,
			"data" => json_encode( $client )
		]);
	}
}


function _get_db(){
	if ( empty(get_option('statc_host')) ||
		 empty(get_option('statc_database')) ||
		 empty(get_option('statc_user')) ||
		 empty(get_option('statc_password')) ) {
		error_log("StatCollector is missing database connection information. Cannot log");
		return new MockDb();
	}

	$db = new \wpdb(get_option('statc_user'),
					get_option('statc_password'),
					get_option('statc_database'),
					get_option('statc_host'));
	$db->show_errors();

	if ( get_option('statc_bootstrapped') !== '3' ) {
		__bootstrap( $db );
	}
	return $db;
}

function __bootstrap( $db ){
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
	
	// we will just let this fail if the columns exist
	// from previous migrations. But silence the error
	$db->hide_errors();
	$db->query(
		"ALTER TABLE messages
			ADD url VARCHAR(512) DEFAULT NULL AFTER date,
			ADD message TEXT DEFAULT NULL AFTER url"
	);
	$db->show_errors();
	

	update_option('statc_bootstrapped', 3);
}

class MockDb {
	public function insert( $table, $args ) {
		return;
	}
	public function query( $q ) {
		return;
	}
}