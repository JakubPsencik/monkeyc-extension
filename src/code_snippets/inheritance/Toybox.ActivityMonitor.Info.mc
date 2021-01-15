class Info {

/**
 * The number of active minutes for the current day.
 * @type Toybox::ActivityMonitor::ActiveMinutes
*/
public var activeMinutesDay;


/**
 * The number of active minutes for the current week.
 * @type Toybox::ActivityMonitor::ActiveMinutes
*/
public var activeMinutesWeek;


/**
 * The value of the active minutes goal for the current week.
 * @type Toybox::Lang::Number
*/
public var activeMinutesWeekGoal;


/**
 * The calories burned so far for the current day in kilocalories (kCal).
 * @type Toybox::Lang::Number
*/
public var calories;


/**
 * The distance since midnight for the current day in centimeters (cm).
 * @type Toybox::Lang::Number
*/
public var distance;


/**
 * The number of floors climbed for the current day.
 * @type Toybox::Lang::Number
*/
public var floorsClimbed;


/**
 * The current floor climb goal.
 * @type Toybox::Lang::Number
*/
public var floorsClimbedGoal;


/**
 * The number of floors descended for the current day.
 * @type Toybox::Lang::Number
*/
public var floorsDescended;


/**
 * This member will be removed in Connect IQ 4.0.0
 * @type Toybox::Lang::Boolean
*/
public var isSleepMode;


/**
 * The vertical distance of floors climbed in meters (m).
 * @type Toybox::Lang::Float
*/
public var metersClimbed;


/**
 * The vertical distance of floors descended in meters (m).
 * @type Toybox::Lang::Float
*/
public var metersDescended;


/**
 * The current level of the move bar between
 * @type Toybox::Lang::Number
*/
public var moveBarLevel;


/**
 * The step goal for the current day in number of steps.
 * @type Toybox::Lang::Number
*/
public var stepGoal;


/**
 * The step count since midnight for the current day in number of steps.
 * @type Toybox::Lang::Number
*/
public var steps;


}

