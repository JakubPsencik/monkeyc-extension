class PlaybackProfile {

/**
 * Defines if the current song is skipped if a thumbs-down operation is given.
 * @type Toybox::Lang::Boolean
*/
public var attemptSkipAfterThumbsDown;


/**
 * Playback controls that should be rendered in the player.
 * @type Toybox::Lang::Array
*/
public var playbackControls;


/**
 * The number of seconds a song must play to trigger a “played” notification.
 * @type Toybox::Lang::Number
*/
public var playbackNotificationThreshold;


/**
 * The colors for the media player.
 * @type Toybox::Media::PlayerColors
*/
public var playerColors;


/**
 * Defines if the system notifies the app when each song is played.
 * @type Toybox::Lang::Boolean
*/
public var requirePlaybackNotification;


/**
 * The amount of time a song must be played so that pressing back restarts the
 * @type Toybox::Lang::Number
*/
public var skipPreviousThreshold;


}

