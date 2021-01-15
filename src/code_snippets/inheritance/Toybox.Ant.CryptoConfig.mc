class CryptoConfig {

/**
 * The division factor of the encryption counter.
 * @type Object
*/
public var decimationRate;


/**
 * The unique 4 byte identifier of the encrypted master or the negotiating
 * @type Object
*/
public var encryptionId;


/**
 * The 128-bit encryption key used to encrypt/decrypt ANT packets.
 * @type Object
*/
public var encryptionKey;


/**
 * The (optional) user information String to be sent to the master channel on
 * @type Object
*/
public var userInfoString;


/**
 * A new instance of CryptoConfig.
 * @type CryptoConfig
*/
public var initialize;


}

