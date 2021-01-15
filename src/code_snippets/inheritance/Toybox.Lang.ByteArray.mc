class ByteArray {

/**
 * Add a byte to the end of a ByteArray.
 * @param byte
 * @returns  Toybox::Lang::ByteArray 
*/
public function add(byte) { }


/**
 * Add a ByteArray or an <span class='object_link'><a href="Array.html" title="Toybox::Lang::Array (class)">Array</a></span> of bytes to the end of a
 * @param array
 * @returns  Toybox::Lang::ByteArray 
*/
public function addAll(array) { }


/**
 * Decodes a portion of the array to a number based on a specified format.
 * @param format
 * @param  options
 * @returns  Toybox::Lang::Number, ... 
*/
public function decodeNumber(format, options) { }


/**
 * Encodes a number into the byte array.
 * @param value
 * @param  format
 * @param  options
 * @returns  Object 
*/
public function encodeNumber(value, format, options) { }


/**
 * Test if an Object instance is equal to another instance of an Object.
 * @param object
 * @returns  Toybox::Lang::Boolean 
*/
public function equals(object) { }


/**
 * Get a hash code value for a ByteArray.
 * @param 
 * @returns  Toybox::Lang::Number 
*/
public function hashCode() { }


/**
 * Get the index of a byte within the ByteArray.
 * @param byte
 * @returns  Toybox::Lang::Number 
*/
public function indexOf(byte) { }


/**
 * Remove a byte from a ByteArray.
 * @param byte
 * @returns  Toybox::Lang::Boolean 
*/
public function remove(byte) { }


/**
 * Remove bytes from a ByteArray.
 * @param byte
 * @returns  Toybox::Lang::Boolean 
*/
public function removeAll(byte) { }


/**
 * Return a new ByteArray that contains the elements of a source ByteArray in
 * @param 
 * @returns  Toybox::Lang::ByteArray 
*/
public function reverse() { }


/**
 * Get the size of a ByteArray.
 * @param 
 * @returns  Toybox::Lang::Number 
*/
public function size() { }


/**
 * Get a new ByteArray containing a portion of an existing ByteArray.
 * @param startIndex
 * @param  endIndex
 * @returns  Toybox::Lang::ByteArray 
*/
public function slice(startIndex, endIndex) { }


/**
 * Convert a ByteArray to a String.
 * @param 
 * @returns  Toybox::Lang::String 
*/
public function toString() { }


}

