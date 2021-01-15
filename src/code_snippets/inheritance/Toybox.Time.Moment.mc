class Moment {

/**
 * Add a <span class='object_link'><a href="Duration.html" title="Toybox::Time::Duration (class)">Duration</a></span> to a Moment.
 * @param duration
 * @returns  Toybox::Time::Moment 
*/
public function add(duration) { }


/**
 * Determine if a Moment is before or after another Moment.
 * @param moment
 * @returns  Toybox::Lang::Number 
*/
public function compare(moment) { }


/**
 * Determine if a Moment is greater than another Moment.
 * @param moment
 * @returns  Toybox::Lang::Boolean 
*/
public function greaterThan(moment) { }


/**
 * Creates a Moment object.
 * @param seconds
 * @returns  Toybox::Time::Moment 
*/
public function initialize(seconds) { }


/**
 * Determine if a Moment is less than another Moment.
 * @param moment
 * @returns  Toybox::Lang::Boolean 
*/
public function lessThan(moment) { }


/**
 * Subtract a <span class='object_link'><a href="Duration.html" title="Toybox::Time::Duration (class)">Duration</a></span> or <span class='object_link'><a href="" title="Toybox::Time::Moment (class)">Moment</a></span> from a Moment.
 * @param subtrahend
 * @returns  Toybox::Time::Duration, Toybox::Time::Moment 
*/
public function subtract(subtrahend) { }


/**
 * Get the UTC value of a Moment.
 * @param 
 * @returns  Toybox::Lang::Number 
*/
public function value() { }


}

