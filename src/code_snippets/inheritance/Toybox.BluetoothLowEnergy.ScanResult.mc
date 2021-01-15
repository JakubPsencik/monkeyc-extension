class ScanResult {

/**
 * Gets the Advertised Appearance of the sensor.
 * @param 
 * @returns  Toybox::Lang::Number 
*/
public function getAppearance() { }


/**
 * Gets the advertised device name.
 * @param 
 * @returns  Toybox::Lang::String 
*/
public function getDeviceName() { }


/**
 * Gets Manufacturer Specific Data for a given Manufacturer.
 * @param manufacturerId
 * @returns  Toybox::Lang::ByteArray 
*/
public function getManufacturerSpecificData(manufacturerId) { }


/**
 * Gets an iterator over all of the Manufacturer Specific Data AD Entries in
 * @param 
 * @returns  Toybox::BluetoothLowEnergy::Iterator 
*/
public function getManufacturerSpecificDataIterator() { }


/**
 * Gets the Raw Data that was retrieved in the advertising packet.
 * @param 
 * @returns  Toybox::Lang::ByteArray 
*/
public function getRawData() { }


/**
 * Gets the received signal strength indication (RSSI) value of the received
 * @param 
 * @returns  Toybox::Lang::Number 
*/
public function getRssi() { }


/**
 * Gets Service Data for a specific UUID.
 * @param uuid
 * @returns  Toybox::Lang::ByteArray 
*/
public function getServiceData(uuid) { }


/**
 * Gets service UUIDs advertised by the device.
 * @param 
 * @returns  Toybox::BluetoothLowEnergy::Iterator 
*/
public function getServiceUuids() { }


/**
 * Determines if another scan result represents the same device as another.
 * @param other
 * @returns  Boolean 
*/
public function isSameDevice(other) { }


}

