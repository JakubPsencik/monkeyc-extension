class CustomMenu {

/**
 * Add a CustomMenuItem to a CustomMenu.
 * @param item
 * @returns  Object 
*/
public function addItem(item) { }


/**
 * Draw the CustomMenu footer.
 * @param dc
 * @returns  Object 
*/
public function drawFooter(dc) { }


/**
 * Draw the CustomMenu foreground.
 * @param dc
 * @returns  Object 
*/
public function drawForeground(dc) { }


/**
 * Draw the CustomMenu title.
 * @param dc
 * @returns  Object 
*/
public function drawTitle(dc) { }


/**
 * A new instance of CustomMenu.
 * @param itemHeight
 * @param  backgroundColor
 * @param  options
 * @returns  CustomMenu 
*/
public function initialize(itemHeight, backgroundColor, options) { }


/**
 * Set the background color.
 * @param color
 * @returns  Object 
*/
public function setBackgroundColor(color) { }


/**
 * Set the footer drawable.
 * @param drawable
 * @returns  Object 
*/
public function setFooter(drawable) { }


/**
 * Set the foreground drawable.
 * @param drawable
 * @returns  Object 
*/
public function setForeground(drawable) { }


/**
 * Set the title drawable.
 * @param drawable
 * @returns  Object 
*/
public function setTitle(drawable) { }


}

