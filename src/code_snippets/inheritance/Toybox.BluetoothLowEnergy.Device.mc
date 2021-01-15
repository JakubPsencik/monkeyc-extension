class Device {

/**
 * Retrieves the Name of the sensor according to the device name that  is
 * @param 
 * @returns  Toybox::Lang::String 
*/
public function getName() { }


/**
 * Retrieves the service with a specified UUID.
 * @param uuid
 * @returns  Toybox::BluetoothLowEnergy::Service 
*/
public function getService(uuid) { }


/**
 * Retrieves an Iterator over the services provided by the device.
 * @param 
 * @returns  Toybox::BluetoothLowEnergy::Iterator 
*/
public function getServices() { }


/**
 * Gets the connected status of the device.
 * @param 
 * @returns  Toybox::Lang::Boolean 
*/
public function isConnected() { }


}

