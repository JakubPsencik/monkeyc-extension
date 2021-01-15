class RunningDynamicsData {

/**
 * Filtered instantaneous cadence (0 - 255 strides/min).
 * @param 
 * @returns  Integer 
*/
public function cadence() { }


/**
 * Filtered instantaneous ground contact balance (0 - 100%, 0.03125%
 * @param 
 * @returns  Float 
*/
public function groundContactBalance() { }


/**
 * Filtered instantaneous ground contact time (0 - 2047 ms).
 * @param 
 * @returns  Integer 
*/
public function groundContactTime() { }


/**
 * Filtered instantaneous stance time percentage (0 - 100%, 0.25% precision).
 * @param 
 * @returns  Float 
*/
public function stanceTime() { }


/**
 * Step count (rolls over!) (0 - 127 steps).
 * @param 
 * @returns  Integer 
*/
public function stepCount() { }


/**
 * Step Length (0 - 8191 mm).
 * @param 
 * @returns  Integer 
*/
public function stepLength() { }


/**
 * Filtered instantaneous vertical oscillation (0 - 2047 mm, 0.25mm
 * @param 
 * @returns  Float 
*/
public function verticalOscillation() { }


/**
 * Vertical ratio (0 - 100%, 0.03125% precision).
 * @param 
 * @returns  Float 
*/
public function verticalRatio() { }


/**
 * True if walking, False if running.
 * @param 
 * @returns  Boolean 
*/
public function walkingFlag() { }


}

