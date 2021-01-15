class CipherBasedMessageAuthenticationCode {

/**
 * Return the digest of the authentication code.
 * @param 
 * @returns  Toybox::Lang::ByteArray 
*/
public function digest() { }


/**
 * A new instance of CipherBasedMessageAuthenticationCode.
 * @param options
 * @returns  CipherBasedMessageAuthenticationCode 
*/
public function initialize(options) { }


/**
 * Continue the computation of the CMAC by consuming the next chunk of data.
 * @param message
 * @returns  Object 
*/
public function update(message) { }


}

