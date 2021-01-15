class Content {

/**
 * Get the underlying ContentRef object.
 * @param 
 * @returns  Toybox::Media::ContentRef 
*/
public function getContentRef() { }


/**
 * Get the metadata for this object.
 * @param 
 * @returns  Toybox::Media::ContentMetadata 
*/
public function getMetadata() { }


/**
 * Get the playback start position for media content.
 * @param 
 * @returns  Toybox::Lang::Number 
*/
public function getPlaybackStartPosition() { }


/**
 * The MediaContent constructor.
 * @param contentRef
 * @param  metadata
 * @returns  Content 
*/
public function initialize(contentRef, metadata) { }


/**
 * Set the metadata for this object.
 * @param metadata
 * @returns  Object 
*/
public function setMetadata(metadata) { }


}

