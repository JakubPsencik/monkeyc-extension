class Descriptor {

/**
 * Retrieves the Descriptors Characteristic.
 * @param 
 * @returns  Toybox::BluetoothLowEnergy::Characteristic 
*/
public function getCharacteristic() { }


/**
 * Returns the UUID of the Descriptor.
 * @param 
 * @returns  Toybox::BluetoothLowEnergy::Uuid 
*/
public function getUuid() { }


/**
 * Requests a read operation on the descriptor.
 * @param 
 * @returns  Object 
*/
public function requestRead() { }


/**
 * Requests a write operation.
 * @param value
 * @returns  Object 
*/
public function requestWrite(value) { }


}

