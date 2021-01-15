class ContentDelegate {

/**
 * Return a <span class='object_link'><a href="ContentIterator.html" title="Toybox::Media::ContentIterator (class)">ContentIterator</a></span> object for the
 * @param 
 * @returns  Toybox::Media::ContentIterator 
*/
public function getContentIterator() { }


/**
 * Respond to a user ad click.
 * @param adContext
 * @returns  Object 
*/
public function onAdAction(adContext) { }


/**
 * Handle a CustomButton being selected in the Media Player.
 * @param button
 * @returns  Object 
*/
public function onCustomButton(button) { }


/**
 * Respond to a command to change repeat mode.
 * @param 
 * @returns  Object 
*/
public function onRepeat() { }


/**
 * Respond to a command to turn shuffle on or off.
 * @param 
 * @returns  Object 
*/
public function onShuffle() { }


/**
 * Handle a notification from a system that a song has been played.
 * @param contentRefId
 * @param  songEvent
 * @param  playbackPosition
 * @returns  Object 
*/
public function onSong(contentRefId, songEvent, playbackPosition) { }


/**
 * Respond to a thumbs-down action.
 * @param contentRefId
 * @returns  Object 
*/
public function onThumbsDown(contentRefId) { }


/**
 * Respond to a thumbs-up action.
 * @param contentRefId
 * @returns  Object 
*/
public function onThumbsUp(contentRefId) { }


/**
 * Reset the <span class='object_link'><a href="ContentIterator.html" title="Toybox::Media::ContentIterator (class)">ContentIterator</a></span> to the beginning
 * @param 
 * @returns  Toybox::Media::ContentIterator 
*/
public function resetContentIterator() { }


}

