class Drawable {

/**
 * The clip height of the Drawable object.
 * @type Toybox::Lang::Number
*/
public var height;


/**
 * The ID used to identify the Drawable object.
 * @type Toybox::Lang::String
*/
public var identifier;


/**
 * The absolute, on-screen x-coordinate of the Drawable object.
 * @type Toybox::Lang::Number
*/
public var locX;


/**
 * The absolute, on-screen y-coordinate of the Drawable object.
 * @type Toybox::Lang::Number
*/
public var locY;


/**
 * The clip width of the Drawable object.
 * @type Toybox::Lang::Number
*/
public var width;


/**
 * Draw an object to the device context (<span class='object_link'><a href="../Graphics/Dc.html" title="Toybox::Graphics::Dc (class)">Dc</a></span>).
 * @type Object
*/
public var draw;


/**
 * A new instance of Drawable.
 * @type Drawable
*/
public var initialize;


/**
 * Set the on-screen location for a Drawable object.
 * @type Object
*/
public var setLocation;


/**
 * Set the size of a Drawable object.
 * @type Object
*/
public var setSize;


}

