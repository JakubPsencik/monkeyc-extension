class InputDelegate {

/**
 * A touch screen hold event has occurred.
 * @param clickEvent
 * @returns  Toybox::Lang::Boolean 
*/
public function onHold(clickEvent) { }


/**
 * A physical button has been pressed and released.
 * @param keyEvent
 * @returns  Toybox::Lang::Boolean 
*/
public function onKey(keyEvent) { }


/**
 * A physical button has been pressed down.
 * @param keyEvent
 * @returns  Toybox::Lang::Boolean 
*/
public function onKeyPressed(keyEvent) { }


/**
 * A physical button has been released.
 * @param keyEvent
 * @returns  Toybox::Lang::Boolean 
*/
public function onKeyReleased(keyEvent) { }


/**
 * A touch screen release event has occurred.
 * @param clickEvent
 * @returns  Toybox::Lang::Boolean 
*/
public function onRelease(clickEvent) { }


/**
 * The state of a <span class='object_link'><a href="Selectable.html" title="Toybox::WatchUi::Selectable (class)">Selectable</a></span> has changed.
 * @param selectableEvent
 * @returns  Toybox::Lang::Boolean 
*/
public function onSelectable(selectableEvent) { }


/**
 * A touch screen swipe event has occurred.
 * @param swipeEvent
 * @returns  Toybox::Lang::Boolean 
*/
public function onSwipe(swipeEvent) { }


/**
 * A screen tap event has occurred.
 * @param clickEvent
 * @returns  Toybox::Lang::Boolean 
*/
public function onTap(clickEvent) { }


}

