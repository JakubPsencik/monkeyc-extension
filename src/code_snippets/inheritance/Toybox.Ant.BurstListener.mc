class BurstListener {

/**
 * Callback when a burst reception completes successfully.
 * @param burstPayload
 * @returns  Object 
*/
public function onReceiveComplete(burstPayload) { }


/**
 * Callback when a burst reception fails over the air.
 * @param errorCode
 * @returns  Object 
*/
public function onReceiveFail(errorCode) { }


/**
 * Callback when a burst transmission completes successfully.
 * @param 
 * @returns  Object 
*/
public function onTransmitComplete() { }


/**
 * Callback when a burst transmission fails over the air.
 * @param errorCode
 * @returns  Object 
*/
public function onTransmitFail(errorCode) { }


}

