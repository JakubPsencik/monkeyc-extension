class WatchFace {

/**
 * A new instance of WatchFace.
 * @param 
 * @returns  WatchFace 
*/
public function initialize() { }


/**
 * The device is entering low power mode.
 * @param 
 * @returns  Object 
*/
public function onEnterSleep() { }


/**
 * The device is exiting low power mode.
 * @param 
 * @returns  Object 
*/
public function onExitSleep() { }


/**
 * Update a portion of the screen.
 * @param dc
 * @returns  Object 
*/
public function onPartialUpdate(dc) { }


}

