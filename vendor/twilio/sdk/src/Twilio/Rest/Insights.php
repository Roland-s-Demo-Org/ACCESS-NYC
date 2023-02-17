<?php

/**
 * This code was generated by
 * \ / _    _  _|   _  _
 * | (_)\/(_)(_|\/| |(/_  v1.0.0
 * /       /
 */

namespace Twilio\Rest;

use Twilio\Domain;
use Twilio\Exceptions\TwilioException;
use Twilio\Rest\Insights\V1;

/**
 * @property \Twilio\Rest\Insights\V1 $v1
 * @property \Twilio\Rest\Insights\V1\SettingList $settings
 * @property \Twilio\Rest\Insights\V1\AnnotationList $annotation
 * @property \Twilio\Rest\Insights\V1\CallList $calls
 * @property \Twilio\Rest\Insights\V1\CallSummariesList $callSummaries
 * @property \Twilio\Rest\Insights\V1\ConferenceList $conferences
 * @property \Twilio\Rest\Insights\V1\RoomList $rooms
 * @method \Twilio\Rest\Insights\V1\SettingContext settings()
 * @method \Twilio\Rest\Insights\V1\AnnotationContext annotation(string $callSid)
 * @method \Twilio\Rest\Insights\V1\CallContext calls(string $sid)
 * @method \Twilio\Rest\Insights\V1\ConferenceContext conferences(string $conferenceSid)
 * @method \Twilio\Rest\Insights\V1\RoomContext rooms(string $roomSid)
 */
class Insights extends Domain {
    protected $_v1;

    /**
     * Construct the Insights Domain
     *
     * @param Client $client Client to communicate with Twilio
     */
    public function __construct(Client $client) {
        parent::__construct($client);

        $this->baseUrl = 'https://insights.twilio.com';
    }

    /**
     * @return V1 Version v1 of insights
     */
    protected function getV1(): V1 {
        if (!$this->_v1) {
            $this->_v1 = new V1($this);
        }
        return $this->_v1;
    }

    /**
     * Magic getter to lazy load version
     *
     * @param string $name Version to return
     * @return \Twilio\Version The requested version
     * @throws TwilioException For unknown versions
     */
    public function __get(string $name) {
        $method = 'get' . \ucfirst($name);
        if (\method_exists($this, $method)) {
            return $this->$method();
        }

        throw new TwilioException('Unknown version ' . $name);
    }

    /**
     * Magic caller to get resource contexts
     *
     * @param string $name Resource to return
     * @param array $arguments Context parameters
     * @return \Twilio\InstanceContext The requested resource context
     * @throws TwilioException For unknown resource
     */
    public function __call(string $name, array $arguments) {
        $method = 'context' . \ucfirst($name);
        if (\method_exists($this, $method)) {
            return \call_user_func_array([$this, $method], $arguments);
        }

        throw new TwilioException('Unknown context ' . $name);
    }

    protected function getSettings(): \Twilio\Rest\Insights\V1\SettingList {
        return $this->v1->settings;
    }

    protected function contextSettings(): \Twilio\Rest\Insights\V1\SettingContext {
        return $this->v1->settings();
    }

    protected function getAnnotation(): \Twilio\Rest\Insights\V1\AnnotationList {
        return $this->v1->annotation;
    }

    /**
     * @param string $callSid The call_sid
     */
    protected function contextAnnotation(string $callSid): \Twilio\Rest\Insights\V1\AnnotationContext {
        return $this->v1->annotation($callSid);
    }

    protected function getCalls(): \Twilio\Rest\Insights\V1\CallList {
        return $this->v1->calls;
    }

    /**
     * @param string $sid The sid
     */
    protected function contextCalls(string $sid): \Twilio\Rest\Insights\V1\CallContext {
        return $this->v1->calls($sid);
    }

    protected function getCallSummaries(): \Twilio\Rest\Insights\V1\CallSummariesList {
        return $this->v1->callSummaries;
    }

    protected function getConferences(): \Twilio\Rest\Insights\V1\ConferenceList {
        return $this->v1->conferences;
    }

    /**
     * @param string $conferenceSid Conference SID.
     */
    protected function contextConferences(string $conferenceSid): \Twilio\Rest\Insights\V1\ConferenceContext {
        return $this->v1->conferences($conferenceSid);
    }

    protected function getRooms(): \Twilio\Rest\Insights\V1\RoomList {
        return $this->v1->rooms;
    }

    /**
     * @param string $roomSid The SID of the Room resource.
     */
    protected function contextRooms(string $roomSid): \Twilio\Rest\Insights\V1\RoomContext {
        return $this->v1->rooms($roomSid);
    }

    /**
     * Provide a friendly representation
     *
     * @return string Machine friendly representation
     */
    public function __toString(): string {
        return '[Twilio.Insights]';
    }
}