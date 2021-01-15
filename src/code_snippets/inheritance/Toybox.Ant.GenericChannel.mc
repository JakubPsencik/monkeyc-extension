class GenericChannel {

/**
 * Close a generic ANT Channel.
 * @param 
 * @returns  Object 
*/
public function close() { }


/**
 * Disable encryption on this channel.
 * @param 
 * @returns  Object 
*/
public function disableEncryption() { }


/**
 * Set the encryption configuration and enable encryption on this channel.
 * @param configuration
 * @returns  Object 
*/
public function enableEncryption(configuration) { }


/**
 * Get the current ANT channel configuration.
 * @param 
 * @returns  Toybox::Ant::DeviceConfig 
*/
public function getDeviceConfig() { }


/**
 * Constructor for the generic channel.
 * @param listener
 * @param  channelAssignment
 * @returns  GenericChannel 
*/
public function initialize(listener, channelAssignment) { }


/**
 * Open a generic ANT Channel.
 * @param 
 * @returns  Toybox::Lang::Boolean 
*/
public function open() { }


/**
 * Release the generic ANT Channel back to the system.
 * @param 
 * @returns  Object 
*/
public function release() { }


/**
 * Send an acknowledge message.
 * @param data
 * @returns  Object 
*/
public function sendAcknowledge(data) { }


/**
 * Send a broadcast message.
 * @param data
 * @returns  Object 
*/
public function sendBroadcast(data) { }


/**
 * Send an <span class='object_link'><a href="../Lang/Array.html" title="Toybox::Lang::Array (class)">Array</a></span> of <span class='object_link'><a href="Message.html" title="Toybox::Ant::Message (class)">Messages</a></span> as a
 * @param burstData
 * @returns  Object 
*/
public function sendBurst(burstData) { }


/**
 * Set the <span class='object_link'><a href="BurstListener.html" title="Toybox::Ant::BurstListener (class)">BurstListener</a></span> for burst events.
 * @param listener
 * @returns  Object 
*/
public function setBurstListener(listener) { }


/**
 * Set the current ANT channel configuration.
 * @param configuration
 * @returns  Object 
*/
public function setDeviceConfig(configuration) { }


}

