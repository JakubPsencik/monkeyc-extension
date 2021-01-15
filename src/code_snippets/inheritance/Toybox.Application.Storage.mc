class Storage {

/**
 * Clear the object store for the application.
 * @param 
 * @returns  Object 
*/
public function clearValues() { }


/**
 * Delete the given key from the object store.
 * @param key
 * @returns  Object 
*/
public function deleteValue(key) { }


/**
 * Get the data associated with a given key from the object store.
 * @param key
 * @returns  Toybox::Lang::Object 
*/
public function getValue(key) { }


/**
 * Store the given data in the object.
 * @param key
 * @param  value
 * @returns  Object 
*/
public function setValue(key, value) { }


}

