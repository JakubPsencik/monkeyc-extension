class Dc {

/**
 * Erase the screen using the background color.
 * @param 
 * @returns  Object 
*/
public function clear() { }


/**
 * Reset the drawable area to the full area of the Dc.
 * @param 
 * @returns  Object 
*/
public function clearClip() { }


/**
 * Draw an arc.
 * @param x
 * @param  y
 * @param  r
 * @param  attr
 * @param  degreeStart
 * @param  degreeEnd
 * @returns  Object 
*/
public function drawArc(x, y, r, attr, degreeStart, degreeEnd) { }


/**
 * Draw a bitmap to the screen.
 * @param x
 * @param  y
 * @param  bitmap
 * @returns  Object 
*/
public function drawBitmap(x, y, bitmap) { }


/**
 * Draw a circle around a point.
 * @param x
 * @param  y
 * @param  radius
 * @returns  Object 
*/
public function drawCircle(x, y, radius) { }


/**
 * Draw an ellipse around a point.
 * @param x
 * @param  y
 * @param  a
 * @param  b
 * @returns  Object 
*/
public function drawEllipse(x, y, a, b) { }


/**
 * Draw a line between two points.
 * @param x1
 * @param  y1
 * @param  x2
 * @param  y2
 * @returns  Object 
*/
public function drawLine(x1, y1, x2, y2) { }


/**
 * Draw a point on the screen.
 * @param x
 * @param  y
 * @returns  Object 
*/
public function drawPoint(x, y) { }


/**
 * Draw a rectangle.
 * @param x
 * @param  y
 * @param  width
 * @param  height
 * @returns  Object 
*/
public function drawRectangle(x, y, width, height) { }


/**
 * Draw a rounded rectangle.
 * @param x
 * @param  y
 * @param  width
 * @param  height
 * @param  radius
 * @returns  Object 
*/
public function drawRoundedRectangle(x, y, width, height, radius) { }


/**
 * Draw text at the given location.
 * @param x
 * @param  y
 * @param  font
 * @param  text
 * @param  justification
 * @returns  Object 
*/
public function drawText(x, y, font, text, justification) { }


/**
 * Fill a circle with the foreground color.
 * @param x
 * @param  y
 * @param  radius
 * @returns  Object 
*/
public function fillCircle(x, y, radius) { }


/**
 * Fill an ellipse with the foreground color.
 * @param x
 * @param  y
 * @param  a
 * @param  b
 * @returns  Object 
*/
public function fillEllipse(x, y, a, b) { }


/**
 * Fill a polygon with the foreground color.
 * @param pts
 * @returns  Object 
*/
public function fillPolygon(pts) { }


/**
 * Fill a rectangle with the foreground color.
 * @param x
 * @param  y
 * @param  width
 * @param  height
 * @returns  Object 
*/
public function fillRectangle(x, y, width, height) { }


/**
 * Fill a rounded rectangle with the foreground color.
 * @param x
 * @param  y
 * @param  width
 * @param  height
 * @param  radius
 * @returns  Object 
*/
public function fillRoundedRectangle(x, y, width, height, radius) { }


/**
 * Get the height of a font.
 * @param font
 * @returns  Toybox::Lang::Number 
*/
public function getFontHeight(font) { }


/**
 * Get the height of the display region that is available to the app.
 * @param 
 * @returns  Toybox::Lang::Number 
*/
public function getHeight() { }


/**
 * Get the width and height of a String.
 * @param text
 * @param  font
 * @returns  Toybox::Lang::Array 
*/
public function getTextDimensions(text, font) { }


/**
 * Get the width of a String.
 * @param text
 * @param  font
 * @returns  Toybox::Lang::Number 
*/
public function getTextWidthInPixels(text, font) { }


/**
 * Get the width of the display region that is available to the app.
 * @param 
 * @returns  Toybox::Lang::Number 
*/
public function getWidth() { }


/**
 * Apply a clipping region to the Dc.
 * @param x
 * @param  y
 * @param  width
 * @param  height
 * @returns  Object 
*/
public function setClip(x, y, width, height) { }


/**
 * Set the current foreground and background colors.
 * @param foreground
 * @param  background
 * @returns  Object 
*/
public function setColor(foreground, background) { }


/**
 * Set the width of a line.
 * @param width
 * @returns  Object 
*/
public function setPenWidth(width) { }


}

