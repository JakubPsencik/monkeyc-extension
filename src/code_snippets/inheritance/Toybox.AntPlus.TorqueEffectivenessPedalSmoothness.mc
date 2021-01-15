class TorqueEffectivenessPedalSmoothness {

/**
 * Left pedal smoothness if separate is supported, else it is the combined
 * @param 
 * @returns  Toybox::Lang::Float 
*/
public function leftOrCombinedPedalSmoothness() { }


/**
 * Left torque effectiveness.
 * @param 
 * @returns  Toybox::Lang::Float 
*/
public function leftTorqueEffectiveness() { }


/**
 * Right pedal smoothness (%).
 * @param 
 * @returns  Toybox::Lang::Float 
*/
public function rightPedalSmoothness() { }


/**
 * Right torque effectiveness.
 * @param 
 * @returns  Toybox::Lang::Float 
*/
public function rightTorqueEffectiveness() { }


/**
 * Define if pedal smoothness is separate.
 * @param 
 * @returns  Toybox::Lang::Boolean 
*/
public function separatePedalSmoothnessSupport() { }


}

