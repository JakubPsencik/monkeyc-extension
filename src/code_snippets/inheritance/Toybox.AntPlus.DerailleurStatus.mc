class DerailleurStatus {

/**
 * Current gear index (for front derailleur 0 - 6,
 * @param 
 * @returns  Integer 
*/
public function gearIndex() { }


/**
 * Number of gears installed (1 - 7, {Toybox::AntPlus::MAX_GEARS_INVALID } =
 * @param 
 * @returns  Integer 
*/
public function gearMax() { }


/**
 * Current gear size (number of teeth, 0 - 255).
 * @param 
 * @returns  Integer 
*/
public function gearSize() { }


/**
 * Number of invalid inboard shifts (0 - 255).
 * @param 
 * @returns  Integer 
*/
public function invalidInboardShiftCount() { }


/**
 * Number of invalid outboard shifts (0 - 255).
 * @param 
 * @returns  Integer 
*/
public function invalidOutboardShiftCount() { }


/**
 * Number of shift failures (0 - 255).
 * @param 
 * @returns  Integer 
*/
public function shiftFailureCount() { }


}

