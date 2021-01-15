class Selectable {

/**
 * The default state of a Selectable object.
 * @type Toybox::Lang::Object
*/
public var stateDefault;


/**
 * The disabled state of a Selectable object.
 * @type Toybox::Lang::Object
*/
public var stateDisabled;


/**
 * The highlighted state of a Selectable object.
 * @type Toybox::Lang::Object
*/
public var stateHighlighted;


/**
 * The selected state of a Selectable object.
 * @type Toybox::Lang::Object
*/
public var stateSelected;


/**
 * Draw the Selectable to the device context (<span class='object_link'><a href="../Graphics/Dc.html" title="Toybox::Graphics::Dc (class)">Dc</a></span>).
 * @type Object
*/
public var draw;


/**
 * Get the current state of a Selectable object.
 * @type Toybox::Lang::Symbol
*/
public var getState;


/**
 * A new instance of Selectable.
 * @type Selectable
*/
public var initialize;


/**
 * Set the current state of a Selectable object.
 * @type Object
*/
public var setState;


}

