class AudioContentProviderApp {

/**
 * Get a <span class='object_link'><a href="../Media/ContentDelegate.html" title="Toybox::Media::ContentDelegate (class)">ContentDelegate</a></span> for use by the
 * @param args
 * @returns  Toybox::Media::ContentDelegate 
*/
public function getContentDelegate(args) { }


/**
 * Get the initial view for configuring playback.
 * @param 
 * @returns  Toybox::Lang::Array 
*/
public function getPlaybackConfigurationView() { }


/**
 * Get audio provider icon information.
 * @param 
 * @returns  Toybox::Media::ProviderIconInfo 
*/
public function getProviderIconInfo() { }


/**
 * Get the initial view for configuring sync.
 * @param 
 * @returns  Toybox::Lang::Array 
*/
public function getSyncConfigurationView() { }


/**
 * This method will be removed in Connect IQ 6.0.0
 * @param 
 * @returns  Toybox::Media::SyncDelegate 
*/
public function getSyncDelegate() { }


/**
 * The AudioContentProviderApp constructor.
 * @param 
 * @returns  AudioContentProviderApp 
*/
public function initialize() { }


}

