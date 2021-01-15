class Session {

/**
 * Add a lap to the current recording.
 * @param 
 * @returns  Toybox::Lang::Boolean 
*/
public function addLap() { }


/**
 * Create a new <span class='object_link'><a href="../FitContributor/Field.html" title="Toybox::FitContributor::Field (class)">Field</a></span>.
 * @param name
 * @param  fieldId
 * @param  type
 * @param  options
 * @returns  Toybox::FitContributor::Field 
*/
public function createField(name, fieldId, type, options) { }


/**
 * Complete the Session by discarding the recorded data.
 * @param 
 * @returns  Toybox::Lang::Boolean 
*/
public function discard() { }


/**
 * Check if recording is active for this Session.
 * @param 
 * @returns  Toybox::Lang::Boolean 
*/
public function isRecording() { }


/**
 * Complete the session by storing the FIT file on the file system.
 * @param 
 * @returns  Toybox::Lang::Boolean 
*/
public function save() { }


/**
 * Set the listener for Session timer events.
 * @param listener
 * @returns  Object 
*/
public function setTimerEventListener(listener) { }


/**
 * Begin recording a FIT file on the system.
 * @param 
 * @returns  Toybox::Lang::Boolean 
*/
public function start() { }


/**
 * Stop recording a FIT file on the system.
 * @param 
 * @returns  Toybox::Lang::Boolean 
*/
public function stop() { }


}

