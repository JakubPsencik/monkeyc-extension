class SyncDelegate {

/**
 * Check if a sync is needed.
 * @param 
 * @returns  Toybox::Lang::Boolean 
*/
public function isSyncNeeded() { }


/**
 * Called when a sync is started by the system.
 * @param 
 * @returns  Object 
*/
public function onStartSync() { }


/**
 * Called when an active sync is cancelled.
 * @param 
 * @returns  Object 
*/
public function onStopSync() { }


}

