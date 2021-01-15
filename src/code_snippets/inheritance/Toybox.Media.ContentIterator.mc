class ContentIterator {

/**
 * Determine if the the current track can be skipped.
 * @param 
 * @returns  Toybox::Lang::Boolean 
*/
public function canSkip() { }


/**
 * Get the current media content object.
 * @param 
 * @returns  Toybox::Media::Content 
*/
public function get() { }


/**
 * Get the current media content playback profile.
 * @param 
 * @returns  Toybox::Media::PlaybackProfile 
*/
public function getPlaybackProfile() { }


/**
 * Get the next media content object.
 * @param 
 * @returns  Toybox::Media::Content 
*/
public function next() { }


/**
 * Get the next media content object without incrementing the iterator.
 * @param 
 * @returns  Toybox::Media::Content 
*/
public function peekNext() { }


/**
 * Get the previous media content object without decrementing the iterator.
 * @param 
 * @returns  Toybox::Media::Content 
*/
public function peekPrevious() { }


/**
 * Get the previous media content object.
 * @param 
 * @returns  Toybox::Media::Content 
*/
public function previous() { }


/**
 * Get the current repeat state.
 * @param 
 * @returns  Toybox::Lang::Number 
*/
public function repeatMode() { }


/**
 * Determine if playback is currently set to shuffle.
 * @param 
 * @returns  Toybox::Lang::Boolean 
*/
public function shuffling() { }


}

