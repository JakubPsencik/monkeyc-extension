class Characteristic {

/**
 * Retrieves the Descriptor with a specified UUID.
 * @param uuid
 * @returns  Toybox::BluetoothLowEnergy::Descriptor 
*/
public function getDescriptor(uuid) { }


/**
 * Retrieves an Iterator over the <span class='object_link'><a href="Descriptor.html" title="Toybox::BluetoothLowEnergy::Descriptor (class)">Descriptors</a></span>
 * @param 
 * @returns  Toybox::BluetoothLowEnergy::Iterator 
*/
public function getDescriptors() { }


/**
 * Retrieves the Characteristic&#39;s Service.
 * @param 
 * @returns  Toybox::BluetoothLowEnergy::Service 
*/
public function getService() { }


/**
 * Return the UUID of the Characteristic.
 * @param 
 * @returns  Toybox::BluetoothLowEnergy::Uuid 
*/
public function getUuid() { }


/**
 * Requests a read operation on the characteristic.
 * @param 
 * @returns  Object 
*/
public function requestRead() { }


/**
 * Requests a write operation.
 * @param value
 * @param  options
 * @returns  Object 
*/
public function requestWrite(value, options) { }


}

