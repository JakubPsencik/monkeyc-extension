class Message {

/**
 * The Unique device number (ANT-id).
 * @type Object
*/
public var deviceNumber;


/**
 * A 1-Byte device type identifier.
 * @type Object
*/
public var deviceType;


/**
 * Number of data bytes in the data payload (not including any extended data
 * @type Object
*/
public var length;


/**
 * The Data Type Identifier.
 * @type Object
*/
public var messageId;


/**
 * The Received Signal Strength Indication.
 * @type Object
*/
public var rssi;


/**
 * The time stamp of received message generated off of a 32.768 kHz clock.
 * @type Object
*/
public var timestamp;


/**
 * The manufacturer-specific transport type and extended device number.
 * @type Object
*/
public var transmissionType;


/**
 * Get the ANT data packet.
 * @type Toybox::Lang::Array
*/
public var getPayload;


/**
 * Set the ANT data packet.
 * @type Object
*/
public var setPayload;


}

