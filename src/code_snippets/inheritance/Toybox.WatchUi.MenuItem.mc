class MenuItem {

/**
 * Get a MenuItem identifier.
 * @param 
 * @returns  Toybox::Lang::Symbol 
*/
public function getId() { }


/**
 * Get a MenuItem label.
 * @param 
 * @returns  Toybox::Lang::String 
*/
public function getLabel() { }


/**
 * Get a MenuItem substring label.
 * @param 
 * @returns  Toybox::Lang::String 
*/
public function getSubLabel() { }


/**
 * A new instance of MenuItem.
 * @param label
 * @param  subLabel
 * @param  identifier
 * @param  options
 * @returns  MenuItem 
*/
public function initialize(label, subLabel, identifier, options) { }


/**
 * Set a MenuItem label.
 * @param label
 * @returns  Object 
*/
public function setLabel(label) { }


/**
 * Set a MenuItem substring label.
 * @param subLabel
 * @returns  Object 
*/
public function setSubLabel(subLabel) { }


}

