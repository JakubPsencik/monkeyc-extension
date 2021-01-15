class ServiceDelegate {

/**
 * The callback method that is triggered when an activity is completed.
 * @param activity
 * @returns  Object 
*/
public function onActivityCompleted(activity) { }


/**
 * A callback method that is triggered in the background when a fitness goal
 * @param goalType
 * @returns  Object 
*/
public function onGoalReached(goalType) { }


/**
 * The callback method that is triggered in the background when an OAuth
 * @param 
 * @returns  Object 
*/
public function onOAuthResponse() { }


/**
 * The callback method that is triggered in the background at the configured
 * @param 
 * @returns  Object 
*/
public function onSleepTime() { }


/**
 * The callback method that is triggered in the background when a step goal is
 * @param 
 * @returns  Object 
*/
public function onSteps() { }


/**
 * A callback method that is triggered in the background when time-based
 * @param 
 * @returns  Object 
*/
public function onTemporalEvent() { }


/**
 * A callback method that is triggered in the background at the configured
 * @param 
 * @returns  Object 
*/
public function onWakeTime() { }


}

