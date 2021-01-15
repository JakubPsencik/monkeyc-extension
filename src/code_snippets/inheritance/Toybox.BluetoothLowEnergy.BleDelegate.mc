class BleDelegate {

/**
 * BleDelegate constructor.
 * @param 
 * @returns  BleDelegate 
*/
public function initialize() { }


/**
 * After enabling notifications or indications on a characteristic by enabling
 * @param characteristic
 * @param  value
 * @returns  Object 
*/
public function onCharacteristicChanged(characteristic, value) { }


/**
 * After requesting a read operation on a characteristic using
 * @param characteristic
 * @param  status
 * @param  value
 * @returns  Object 
*/
public function onCharacteristicRead(characteristic, status, value) { }


/**
 * After requesting a write operation on a characteristic using
 * @param characteristic
 * @param  status
 * @returns  Object 
*/
public function onCharacteristicWrite(characteristic, status) { }


/**
 * After pairing a device this will be called after the connection is made.
 * @param device
 * @param  state
 * @returns  Object 
*/
public function onConnectedStateChanged(device, state) { }


/**
 * After requesting a read operation on a descriptor using
 * @param descriptor
 * @param  status
 * @param  value
 * @returns  Object 
*/
public function onDescriptorRead(descriptor, status, value) { }


/**
 * After requesting a write operation on a descriptor using
 * @param descriptor
 * @param  status
 * @returns  Object 
*/
public function onDescriptorWrite(descriptor, status) { }


/**
 * After Registering a UUID this callback will notify of the result of the
 * @param uuid
 * @param  status
 * @returns  Object 
*/
public function onProfileRegister(uuid, status) { }


/**
 * If a scan is running this will be called when new ScanResults are received.
 * @param scanResults
 * @returns  Object 
*/
public function onScanResults(scanResults) { }


/**
 * When the state of scanning is modified the system will call this function
 * @param scanState
 * @param  status
 * @returns  Object 
*/
public function onScanStateChange(scanState, status) { }


}

