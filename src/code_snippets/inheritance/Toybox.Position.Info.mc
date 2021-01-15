class Info {

/**
 * The positional accuracy.
 * @type Toybox::Lang::Number
*/
public var accuracy;


/**
 * The elevation above mean sea level in meters (m).
 * @type Toybox::Lang::Float
*/
public var altitude;


/**
 * The true north referenced heading in radians.
 * @type Toybox::Lang::Float
*/
public var heading;


/**
 * The latitude and longitude of the position.
 * @type Toybox::Position::Location
*/
public var position;


/**
 * The horizontal speed in meters per second (mps).
 * @type Toybox::Lang::Float
*/
public var speed;


/**
 * The GPS time stamp of the obtained <span class='object_link'><a href="Location.html" title="Toybox::Position::Location (class)">Location</a></span>
 * @type Toybox::Time::Moment
*/
public var when;


}

