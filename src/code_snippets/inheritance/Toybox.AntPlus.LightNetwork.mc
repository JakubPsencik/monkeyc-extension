class LightNetwork {

/**
 * Get a list of lights in the network.
 * @param 
 * @returns  Toybox::Lang::Array 
*/
public function getBikeLights() { }


/**
 * Get the light network mode.
 * @param 
 * @returns  Toybox::Lang::Number 
*/
public function getNetworkMode() { }


/**
 * Get the light network state.
 * @param 
 * @returns  Toybox::Lang::Number 
*/
public function getNetworkState() { }


/**
 * Constructor for the LightNetwork object.
 * @param listener
 * @returns  LightNetwork 
*/
public function initialize(listener) { }


/**
 * Bring all headlights under the control of whichever light network mode has
 * @param 
 * @returns  Object 
*/
public function restoreHeadlightsNetworkModeControl() { }


/**
 * Bring all taillights under the control of whichever light network mode has
 * @param 
 * @returns  Object 
*/
public function restoreTaillightsNetworkModeControl() { }


/**
 * Tell all headlights to enter the same mode.
 * @param mode
 * @returns  Object 
*/
public function setHeadlightsMode(mode) { }


/**
 * Tell all taillights to enter the same mode.
 * @param mode
 * @returns  Object 
*/
public function setTaillightsMode(mode) { }


/**
 * A signal switch for right and left singals.
 * @param left
 * @returns  Object 
*/
public function toggleSignalLight(left) { }


}

