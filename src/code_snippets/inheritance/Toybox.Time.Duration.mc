class Duration {

/**
 * Add a <span class='object_link'><a href="Moment.html" title="Toybox::Time::Moment (class)">Moment</a></span> or another Duration to a Duration.
 * @param time
 * @returns  Toybox::Time::Duration, Toybox::Time::Moment 
*/
public function add(time) { }


/**
 * Determine if a Duration is shorter or longer than another Duration.
 * @param duration
 * @returns  Toybox::Lang::Number 
*/
public function compare(duration) { }


/**
 * Divide a Duration by a value.
 * @param value
 * @returns  Toybox::Time::Duration 
*/
public function divide(value) { }


/**
 * Determine if a Duration is longer than another Duration.
 * @param duration
 * @returns  Toybox::Lang::Boolean 
*/
public function greaterThan(duration) { }


/**
 * Creates a Duration object.
 * @param value
 * @returns  Toybox::Time::Duration 
*/
public function initialize(value) { }


/**
 * Determine if a Duration is shorter than another Duration.
 * @param duration
 * @returns  Toybox::Lang::Boolean 
*/
public function lessThan(duration) { }


/**
 * Multiply a Duration by a value.
 * @param value
 * @returns  Toybox::Time::Duration 
*/
public function multiply(value) { }


/**
 * Get the absolute difference between two Duration objects.
 * @param duration
 * @returns  Toybox::Time::Duration 
*/
public function subtract(duration) { }


/**
 * Get the value of a Duration.
 * @param 
 * @returns  Toybox::Lang::Number 
*/
public function value() { }


}

