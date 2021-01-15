class FitnessEquipment {

/**
 * Control the fitness Equipment Note: Setting a value related to a specific
 * @param setting
 * @param  data
 * @returns  Object 
*/
public function controlEquipment(setting, data) { }


/**
 * Get the current training data from the FE.
 * @param 
 * @returns  Toybox::AntPlus::FitnessEquipmentData 
*/
public function getEquipmentData() { }


/**
 * Get the resistance percentage setting of the fitness equipment for basic
 * @param 
 * @returns  Toybox::AntPlus::ResistanceSettings 
*/
public function getResistanceSettings() { }


/**
 * Get the wind and track resistance simulation settings.
 * @param 
 * @returns  Toybox::AntPlus::SimulationSettings 
*/
public function getSimulationSettings() { }


/**
 * Get the target power setting of the fitness equipment for target power
 * @param 
 * @returns  Toybox::AntPlus::TargetPowerSettings 
*/
public function getTargetPowerSettings() { }


/**
 * Get the current training mode and supported modes of the fitness equipment.
 * @param 
 * @returns  Toybox::AntPlus::FitnessEquipmentMode 
*/
public function getTrainerMode() { }


/**
 * Get the user configuration settings of the fitness equipment for simulation
 * @param 
 * @returns  Toybox::AntPlus::UserSettings 
*/
public function getUserSettings() { }


/**
 * The Constructor for the FitnessEquipment object.
 * @param listener
 * @returns  FitnessEquipment 
*/
public function initialize(listener) { }


/**
 * Set the trainer mode.
 * @param mode
 * @returns  Object 
*/
public function setTrainerMode(mode) { }


}

