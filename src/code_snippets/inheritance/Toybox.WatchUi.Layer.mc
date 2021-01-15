class Layer {

/**
 * Get the <span class='object_link'><a href="../Graphics/Dc.html" title="Toybox::Graphics::Dc (class)">Graphics.Dc</a></span> to draw on.
 * @param 
 * @returns  Object 
*/
public function getDc() { }


/**
 * Layer identifier, can be <code>null</code>.
 * @param 
 * @returns  Toybox::Lang::Number 
*/
public function getId() { }


/**
 * Get X-axis absolute draw offset relative to the screen origin.
 * @param 
 * @returns  Toybox::Lang::Number 
*/
public function getX() { }


/**
 * Get Y-axis absolute draw offset relative to the screen origin.
 * @param 
 * @returns  Toybox::Lang::Number 
*/
public function getY() { }


/**
 * Create a layer with initial options.
 * @param options
 * @returns  Layer 
*/
public function initialize(options) { }


/**
 * <code>true</code> if the layer is visible otherwise <code>false</code>.
 * @param 
 * @returns  Toybox::Lang::Boolean 
*/
public function isVisible() { }


/**
 * Set draw offset relative to the screen origin.
 * @param x
 * @param  y
 * @returns  Object 
*/
public function setLocation(x, y) { }


/**
 * Set visibility of the layer, if the layer hasn&#39;t been added to a view,
 * @param visible
 * @returns  Object 
*/
public function setVisible(visible) { }


/**
 * Set X-axis absolute draw offset relative to the screen origin.
 * @param x
 * @returns  Object 
*/
public function setX(x) { }


/**
 * Set Y-axis absolute draw offset relative to the screen origin.
 * @param y
 * @returns  Object 
*/
public function setY(y) { }


}

