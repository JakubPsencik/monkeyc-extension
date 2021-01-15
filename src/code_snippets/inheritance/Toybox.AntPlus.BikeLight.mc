class BikeLight {

/**
 * The <span class='object_link'><a href="../AntPlus.html#LIGHT_MODE_AUTO-constant" title="Toybox::AntPlus::LIGHT_MODE_AUTO (constant)">LIGHT_MODE_*</a></span> mode of the light.
 * @param 
 * @returns  Toybox::Lang::Number 
*/
public function mode() { }


/**
 * The <span class='object_link'><a href="../AntPlus.html#LIGHT_TYPE_HEADLIGHT-constant" title="Toybox::AntPlus::LIGHT_TYPE_HEADLIGHT (constant)">LIGHT_TYPE_*</a></span> type of the light.
 * @param 
 * @returns  Toybox::Lang::Number 
*/
public function type() { }


/**
 * Get a list of the standard and custom light modes that a bike light
 * @param 
 * @returns  Toybox::Lang::Array 
*/
public function getCapableModes() { }


/**
 * Constructor.
 * @param 
 * @returns  BikeLight 
*/
public function initialize() { }


/**
 * Tell this light to enter a new mode.
 * @param mode
 * @returns  Object 
*/
public function setMode(mode) { }


}

