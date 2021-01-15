class AppBase {

/**
 * Check if application trial messages are allowed.
 * @param 
 * @returns  Toybox::Lang::Boolean 
*/
public function allowTrialMessage() { }


/**
 * This method will be removed in Connect IQ 4.0.0
 * @param 
 * @returns  Object 
*/
public function clearProperties() { }


/**
 * This method will be removed in Connect IQ 4.0.0
 * @param key
 * @returns  Object 
*/
public function deleteProperty(key) { }


/**
 * Return user defined glance view for content preview purpose.
 * @param 
 * @returns  Toybox::Lang::Array 
*/
public function getGlanceView() { }


/**
 * Override to provide a <span class='object_link'><a href="../WatchUi/View.html" title="Toybox::WatchUi::View (class)">WatchUi.View</a></span> for a goal that
 * @param goalType
 * @returns  Toybox::Lang::Array 
*/
public function getGoalView(goalType) { }


/**
 * Override to provide the initial <span class='object_link'><a href="../WatchUi/View.html" title="Toybox::WatchUi::View (class)">WatchUi.View</a></span> and
 * @param 
 * @returns  Toybox::Lang::Array 
*/
public function getInitialView() { }


/**
 * Get the data associated with a given key from the object store.
 * @param key
 * @returns  Toybox::Lang::Object 
*/
public function getProperty(key) { }


/**
 * Get a <span class='object_link'><a href="../System/ServiceDelegate.html" title="Toybox::System::ServiceDelegate (class)">ServiceDelegate</a></span> to run background
 * @param 
 * @returns  Toybox::Lang::Array 
*/
public function getServiceDelegate() { }


/**
 * Get a <span class='object_link'><a href="../Communications/SyncDelegate.html" title="Toybox::Communications::SyncDelegate (class)">SyncDelegate</a></span> object that
 * @param 
 * @returns  Toybox::Communications::SyncDelegate 
*/
public function getSyncDelegate() { }


/**
 * Override to return the number of days remaining in the trial.
 * @param 
 * @returns  Toybox::Lang::Number 
*/
public function getTrialDaysRemaining() { }


/**
 * Check if the application is in trial mode.
 * @param 
 * @returns  Toybox::Lang::Boolean 
*/
public function isTrial() { }


/**
 * This method will be removed in Connect IQ 3.0.0
 * @param 
 * @returns  Object 
*/
public function loadProperties() { }


/**
 * The callback method that is triggered in the background when the app is
 * @param 
 * @returns  Object 
*/
public function onAppInstall() { }


/**
 * The callback method that is triggered in the background when the app is
 * @param 
 * @returns  Object 
*/
public function onAppUpdate() { }


/**
 * Handle data passed from a ServiceDelegate to the application.
 * @param data
 * @returns  Object 
*/
public function onBackgroundData(data) { }


/**
 * Called when the application settings have been changed by Garmin Connect
 * @param 
 * @returns  Object 
*/
public function onSettingsChanged() { }


/**
 * Method called at startup to allow handling of app initialization.
 * @param state
 * @returns  Object 
*/
public function onStart(state) { }


/**
 * Override to handle application cleanup upon termination.
 * @param state
 * @returns  Object 
*/
public function onStop(state) { }


/**
 * This method will be removed in Connect IQ 3.0.0
 * @param 
 * @returns  Object 
*/
public function saveProperties() { }


/**
 * Store the given data in the object.
 * @param key
 * @param  value
 * @returns  Object 
*/
public function setProperty(key, value) { }


/**
 * Validate a property being stored.
 * @param key
 * @param  value
 * @returns  Object 
*/
public function validateProperty(key, value) { }


}

