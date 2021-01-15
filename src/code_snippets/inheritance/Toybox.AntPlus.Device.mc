class Device {

/**
 * Retrieve battery status for provided component identifier.
 * @param identifier
 * @returns  Toybox::AntPlus::BatteryStatus 
*/
public function getBatteryStatus(identifier) { }


/**
 * Retrieve a list of known component identifiers for this Device.
 * @param 
 * @returns  Toybox::Lang::Array 
*/
public function getComponentIdentifiers() { }


/**
 * Retrieve the state of the device.
 * @param 
 * @returns  Toybox::AntPlus::DeviceState 
*/
public function getDeviceState() { }


/**
 * Retrieve manufacturer information for provided component identifier.
 * @param identifier
 * @returns  Toybox::AntPlus::ManufacturerInfo 
*/
public function getManufacturerInfo(identifier) { }


/**
 * Retrieve product information for provided component identifier.
 * @param identifier
 * @returns  Toybox::AntPlus::ProductInfo 
*/
public function getProductInfo(identifier) { }


/**
 * Send Manufacturer Message.
 * @param message
 * @returns  Object 
*/
public function sendManufacturerMessage(message) { }


/**
 * Send Page request Request 2 broadcast pages from connected sensor.
 * @param pageNumber
 * @returns  Object 
*/
public function sendPageRequest(pageNumber) { }


}

