class History {

/**
 * Number of active minutes.
 * @type Toybox::ActivityMonitor::ActiveMinutes
*/
public var activeMinutes;


/**
 * The calories for the day in kilocalories (kCal).
 * @type Toybox::Lang::Number
*/
public var calories;


/**
 * The distance for the day in centimeters (cm).
 * @type Toybox::Lang::Number
*/
public var distance;


/**
 * The number of floors climbed for the day.
 * @type Toybox::Lang::Number
*/
public var floorsClimbed;


/**
 * Floors climbed goal for the day.
 * @type Toybox::Lang::Number
*/
public var floorsClimbedGoal;


/**
 * The number of floors descended for the day.
 * @type Toybox::Lang::Number
*/
public var floorsDescended;


/**
 * A <span class='object_link'><a href="../Time/Moment.html" title="Toybox::Time::Moment (class)">Moment</a></span> object representing the start time of the
 * @type Toybox::Time::Moment
*/
public var startOfDay;


/**
 * The step goal for the day in number of steps.
 * @type Toybox::Lang::Number
*/
public var stepGoal;


/**
 * The step count for the day in number of steps.
 * @type Toybox::Lang::Number
*/
public var steps;


}

