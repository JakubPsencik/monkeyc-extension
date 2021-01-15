class DeviceConfig {

/**
 * The unique device number (ANT-id).
 * @type Object
*/
public var deviceNumber;


/**
 * A 1-Byte device type identifier.
 * @type Object
*/
public var deviceType;


/**
 * The Message period that the sensor uses.
 * @type Object
*/
public var messagePeriod;


/**
 * A 128 bit network key.
 * @type Object
*/
public var networkKey128Bit;


/**
 * A 64 bit network key.
 * @type Object
*/
public var networkKey64Bit;


/**
 * The radio frequency that the sensor operates on.
 * @type Object
*/
public var radioFrequency;


/**
 * The proximity threshold bin.
 * @type Object
*/
public var searchThreshold;


/**
 * High Priority search timeout that a receiving channel will wait for in
 * @type Object
*/
public var searchTimeoutHighPriority;


/**
 * The low Priority search timeout that a receiving channel will wait for in
 * @type Object
*/
public var searchTimeoutLowPriority;


/**
 * The manufacturer-specific transport type and extended device number.
 * @type Object
*/
public var transmissionType;


/**
 * The constructor for the device configuration object.
 * @type DeviceConfig
*/
public var initialize;


}

