class CustomButton {

/**
 * Called by the system to draw the button in the Media Player.
 * @param image
 * @param  highlighted
 * @returns  Toybox::WatchUi::BitmapResource 
*/
public function getImage(image, highlighted) { }


/**
 * Called by the system to determine if the current state of the button.
 * @param 
 * @returns  Toybox::Lang::Number 
*/
public function getState() { }


/**
 * Called by the system to draw the name of the button.
 * @param state
 * @returns  Toybox::Lang::String 
*/
public function getText(state) { }


}

