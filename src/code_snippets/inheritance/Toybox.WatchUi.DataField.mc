class DataField {

/**
 * Retrieve <span class='object_link'><a href="../Activity/Info.html" title="Toybox::Activity::Info (class)">Activity.Info</a></span> in a DataField.
 * @param info
 * @returns  Object 
*/
public function compute(info) { }


/**
 * Create a new custom FIT <span class='object_link'><a href="../FitContributor/Field.html" title="Toybox::FitContributor::Field (class)">Field</a></span>.
 * @param name
 * @param  fieldId
 * @param  type
 * @param  options
 * @returns  Toybox::FitContributor::Field 
*/
public function createField(name, fieldId, type, options) { }


/**
 * Get the current Data Field background color.
 * @param 
 * @returns  Toybox::Lang::Number 
*/
public function getBackgroundColor() { }


/**
 * Get the screen regions that are obscured.
 * @param 
 * @returns  Toybox::Lang::Number 
*/
public function getObscurityFlags() { }


/**
 * A new instance of DataField.
 * @param 
 * @returns  DataField 
*/
public function initialize() { }


/**
 * The device has transitioned to the next multisport leg.
 * @param 
 * @returns  Object 
*/
public function onNextMultisportLeg() { }


/**
 * A lap event has occurred.
 * @param 
 * @returns  Object 
*/
public function onTimerLap() { }


/**
 * The activity timer is paused.
 * @param 
 * @returns  Object 
*/
public function onTimerPause() { }


/**
 * The current activity has ended.
 * @param 
 * @returns  Object 
*/
public function onTimerReset() { }


/**
 * The activity time has resumed.
 * @param 
 * @returns  Object 
*/
public function onTimerResume() { }


/**
 * The activity timer has started.
 * @param 
 * @returns  Object 
*/
public function onTimerStart() { }


/**
 * The activity timer has stopped.
 * @param 
 * @returns  Object 
*/
public function onTimerStop() { }


/**
 * The current workout step is complete.
 * @param 
 * @returns  Object 
*/
public function onWorkoutStepComplete() { }


}

