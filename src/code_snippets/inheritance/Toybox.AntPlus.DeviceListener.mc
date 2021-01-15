class DeviceListener {

/**
 * Callback when battery status is received.
 * @param data
 * @returns  Object 
*/
public function onBatteryStatusUpdate(data) { }


/**
 * Callback when device state is updated.
 * @param data
 * @returns  Object 
*/
public function onDeviceStateUpdate(data) { }


/**
 * Callback when manufacturer&#39;s information is received.
 * @param data
 * @returns  Object 
*/
public function onManufacturerInfoUpdate(data) { }


/**
 * Callback when ANT message is received.
 * @param msg
 * @returns  Object 
*/
public function onMessage(msg) { }


/**
 * Callback when product information is received.
 * @param data
 * @returns  Object 
*/
public function onProductInfoUpdate(data) { }


/**
 * After sending a manufacturer message or page request this will be called to
 * @param status
 * @param  sentMesgData
 * @returns  Object 
*/
public function onSentMessage(status, sentMesgData) { }


}

