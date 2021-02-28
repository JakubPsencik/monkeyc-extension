module Toybox {

    module Activity {

        public class Info {

            /**
            * The altitude above mean sea level in meters (m).
            * @type Toybox::Lang::Float
            */
            public var altitude;


            /**
            * The ambient pressure in Pascals (Pa).
            * @type Toybox::Lang::Float
            */
            public var ambientPressure;


            /**
            * The average cadence during the current activity in revolutions per minute
            * @type Toybox::Lang::Number
            */
            public var averageCadence;


            /**
            * The average swim stroke distance from the previous interval in meters (m).
            * @type Toybox::Lang::Float
            */
            public var averageDistance;


            /**
            * The average heart rate during the current activity in beats per minute
            * @type Toybox::Lang::Number
            */
            public var averageHeartRate;


            /**
            * The average power during the current activity in Watts (W).
            * @type Toybox::Lang::Number
            */
            public var averagePower;


            /**
            * The average speed during the current activity in meters per second (mps).
            * @type Toybox::Lang::Float
            */
            public var averageSpeed;


            /**
            * The current bearing in radians.
            * @type Toybox::Lang::Float
            */
            public var bearing;


            /**
            * The bearing from the starting location to the destination in radians.
            * @type Toybox::Lang::Float
            */
            public var bearingFromStart;


            /**
            * The calories burned throughout the current activity in kilocalories (kcal).
            * @type Toybox::Lang::Number
            */
            public var calories;


            /**
            * The current cadence in revolutions per minute (rpm).
            * @type Toybox::Lang::Number
            */
            public var currentCadence;


            /**
            * The true north referenced heading in radians.
            * @type Toybox::Lang::Float
            */
            public var currentHeading;


            /**
            * The current heart rate in beats per minute (bpm).
            * @type Toybox::Lang::Number
            */
            public var currentHeartRate;


            /**
            * The current location.
            * @type Toybox::Position::Location
            */
            public var currentLocation;


            /**
            * The current GPS accuracy.
            * @type Toybox::Lang::Number
            */
            public var currentLocationAccuracy;


            /**
            * The current power in Watts (W).
            * @type Toybox::Lang::Number
            */
            public var currentPower;


            /**
            * The current speed in meters per second (mps).
            * @type Toybox::Lang::Float
            */
            public var currentSpeed;


            /**
            * The distance to the destination in meters (m).
            * @type Toybox::Lang::Float
            */
            public var distanceToDestination;


            /**
            * The distance to the next point in meters (m).
            * @type Toybox::Lang::Float
            */
            public var distanceToNextPoint;


            /**
            * The elapsed distance of the current activity in meters (m).
            * @type Toybox::Lang::Float
            */
            public var elapsedDistance;


            /**
            * Elapsed time of the current activity in milliseconds (ms).
            * @type Toybox::Lang::Number
            */
            public var elapsedTime;


            /**
            * The elevation at the destination in meters (m).
            * @type Toybox::Lang::Float
            */
            public var elevationAtDestination;


            /**
            * The elevation at the next point in meters (m).
            * @type Toybox::Lang::Float
            */
            public var elevationAtNextPoint;


            /**
            * The current energy expenditure in kilocalories per minute (kcals/min).
            * @type Toybox::Lang::Float
            */
            public var energyExpenditure;


            /**
            * The current front bicycle derailleur index.
            * @type Toybox::Lang::Number
            */
            public var frontDerailleurIndex;


            /**
            * The front bicycle derailleur maximum index.
            * @type Toybox::Lang::Number
            */
            public var frontDerailleurMax;


            /**
            * The front bicycle derailleur gear size in number of teeth.
            * @type Toybox::Lang::Number
            */
            public var frontDerailleurSize;


            /**
            * The maximum cadence recorded during the current activity in revolutions per
            * @type Toybox::Lang::Number
            */
            public var maxCadence;


            /**
            * The maximum heart rate recorded during the current activity in beats per
            * @type Toybox::Lang::Number
            */
            public var maxHeartRate;


            /**
            * The maximum power recorded during the current activity in Watts (W).
            * @type Toybox::Lang::Number
            */
            public var maxPower;


            /**
            * The maximum speed recorded during the current activity in meters per second
            * @type Toybox::Lang::Float
            */
            public var maxSpeed;


            /**
            * The mean sea level barometric pressure in Pascals (Pa).
            * @type Toybox::Lang::Float
            */
            public var meanSeaLevelPressure;


            /**
            * The name of the destination.
            * @type Toybox::Lang::String
            */
            public var nameOfDestination;


            /**
            * The name of the next point.
            * @type Toybox::Lang::String
            */
            public var nameOfNextPoint;


            /**
            * The distance to the nearest point on the current course in meters (m).
            * @type Toybox::Lang::Float
            */
            public var offCourseDistance;


            /**
            * The raw ambient pressure in Pascals (Pa).
            * @type Toybox::Lang::Float
            */
            public var rawAmbientPressure;


            /**
            * The current front bicycle derailleur index.
            * @type Toybox::Lang::Number
            */
            public var rearDerailleurIndex;


            /**
            * The rear bicycle derailleur maximum index.
            * @type Toybox::Lang::Number
            */
            public var rearDerailleurMax;


            /**
            * The rear bicycle derailleur gear size in number of teeth.
            * @type Toybox::Lang::Number
            */
            public var rearDerailleurSize;


            /**
            * The starting location of the current activity.
            * @type Toybox::Position::Location
            */
            public var startLocation;


            /**
            * The starting time of the current activity.
            * @type Toybox::Time::Moment
            */
            public var startTime;


            /**
            * The swim stroke type from the previous length.
            * @type Toybox::Lang::Number
            */
            public var swimStrokeType;


            /**
            * The SWOLF score from the previous length.
            * @type Toybox::Lang::Number
            */
            public var swimSwolf;


            /**
            * The recording timer state.
            * @type Toybox::Lang::Number
            */
            public var timerState;


            /**
            * The current Timer value in milliseconds (ms).
            * @type Toybox::Lang::Number
            */
            public var timerTime;


            /**
            * The total ascent during the current activity in meters (m).
            * @type Toybox::Lang::Float
            */
            public var totalAscent;


            /**
            * The total descent during the current activity in meters (m).
            * @type Toybox::Lang::Float
            */
            public var totalDescent;


            /**
            * The current track in radians.
            * @type Toybox::Lang::Float
            */
            public var track;


            /**
            * The Training Effect score of the current activity.
            * @type Toybox::Lang::Float
            */
            public var trainingEffect;


        }


    }

    module ActivityMonitor {

        public class ActiveMinutes {

            /**
            * The total number of moderate activity minutes recorded by the device.
            * @type Toybox::Lang::Number
            */
            public var moderate;


            /**
            * The total number of active minutes recorded by the device.
            * @type Toybox::Lang::Number
            */
            public var total;


            /**
            * The total number of vigorous activity minutes recorded by the device.
            * @type Toybox::Lang::Number
            */
            public var vigorous;


        }


        public class HeartRateIterator {

            /**
            * Get the maximum heart rate contained in this iterator.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function getMax() { }


            /**
            * Get the minimum heart rate contained in this iterator.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function getMin() { }


            /**
            * Get the next entry in the iterator.
            * @param 
            * @returns  Toybox::ActivityMonitor::HeartRateSample 
            */
            public function next() { }


        }


        public class HeartRateSample {

            /**
            * Heart rate in beats per minute (bpm).
            * @type Toybox::Lang::Number
            */
            public var heartRate;


            /**
            * The time of the heart rate sample.
            * @type Toybox::Time::Moment
            */
            public var when;


        }


        public class History {

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


        public class Info {

            /**
            * The altitude above mean sea level in meters (m).
            * @type Toybox::Lang::Float
            */
            public var altitude;


            /**
            * The ambient pressure in Pascals (Pa).
            * @type Toybox::Lang::Float
            */
            public var ambientPressure;


            /**
            * The average cadence during the current activity in revolutions per minute
            * @type Toybox::Lang::Number
            */
            public var averageCadence;


            /**
            * The average swim stroke distance from the previous interval in meters (m).
            * @type Toybox::Lang::Float
            */
            public var averageDistance;


            /**
            * The average heart rate during the current activity in beats per minute
            * @type Toybox::Lang::Number
            */
            public var averageHeartRate;


            /**
            * The average power during the current activity in Watts (W).
            * @type Toybox::Lang::Number
            */
            public var averagePower;


            /**
            * The average speed during the current activity in meters per second (mps).
            * @type Toybox::Lang::Float
            */
            public var averageSpeed;


            /**
            * The current bearing in radians.
            * @type Toybox::Lang::Float
            */
            public var bearing;


            /**
            * The bearing from the starting location to the destination in radians.
            * @type Toybox::Lang::Float
            */
            public var bearingFromStart;


            /**
            * The calories burned throughout the current activity in kilocalories (kcal).
            * @type Toybox::Lang::Number
            */
            public var calories;


            /**
            * The current cadence in revolutions per minute (rpm).
            * @type Toybox::Lang::Number
            */
            public var currentCadence;


            /**
            * The true north referenced heading in radians.
            * @type Toybox::Lang::Float
            */
            public var currentHeading;


            /**
            * The current heart rate in beats per minute (bpm).
            * @type Toybox::Lang::Number
            */
            public var currentHeartRate;


            /**
            * The current location.
            * @type Toybox::Position::Location
            */
            public var currentLocation;


            /**
            * The current GPS accuracy.
            * @type Toybox::Lang::Number
            */
            public var currentLocationAccuracy;


            /**
            * The current power in Watts (W).
            * @type Toybox::Lang::Number
            */
            public var currentPower;


            /**
            * The current speed in meters per second (mps).
            * @type Toybox::Lang::Float
            */
            public var currentSpeed;


            /**
            * The distance to the destination in meters (m).
            * @type Toybox::Lang::Float
            */
            public var distanceToDestination;


            /**
            * The distance to the next point in meters (m).
            * @type Toybox::Lang::Float
            */
            public var distanceToNextPoint;


            /**
            * The elapsed distance of the current activity in meters (m).
            * @type Toybox::Lang::Float
            */
            public var elapsedDistance;


            /**
            * Elapsed time of the current activity in milliseconds (ms).
            * @type Toybox::Lang::Number
            */
            public var elapsedTime;


            /**
            * The elevation at the destination in meters (m).
            * @type Toybox::Lang::Float
            */
            public var elevationAtDestination;


            /**
            * The elevation at the next point in meters (m).
            * @type Toybox::Lang::Float
            */
            public var elevationAtNextPoint;


            /**
            * The current energy expenditure in kilocalories per minute (kcals/min).
            * @type Toybox::Lang::Float
            */
            public var energyExpenditure;


            /**
            * The current front bicycle derailleur index.
            * @type Toybox::Lang::Number
            */
            public var frontDerailleurIndex;


            /**
            * The front bicycle derailleur maximum index.
            * @type Toybox::Lang::Number
            */
            public var frontDerailleurMax;


            /**
            * The front bicycle derailleur gear size in number of teeth.
            * @type Toybox::Lang::Number
            */
            public var frontDerailleurSize;


            /**
            * The maximum cadence recorded during the current activity in revolutions per
            * @type Toybox::Lang::Number
            */
            public var maxCadence;


            /**
            * The maximum heart rate recorded during the current activity in beats per
            * @type Toybox::Lang::Number
            */
            public var maxHeartRate;


            /**
            * The maximum power recorded during the current activity in Watts (W).
            * @type Toybox::Lang::Number
            */
            public var maxPower;


            /**
            * The maximum speed recorded during the current activity in meters per second
            * @type Toybox::Lang::Float
            */
            public var maxSpeed;


            /**
            * The mean sea level barometric pressure in Pascals (Pa).
            * @type Toybox::Lang::Float
            */
            public var meanSeaLevelPressure;


            /**
            * The name of the destination.
            * @type Toybox::Lang::String
            */
            public var nameOfDestination;


            /**
            * The name of the next point.
            * @type Toybox::Lang::String
            */
            public var nameOfNextPoint;


            /**
            * The distance to the nearest point on the current course in meters (m).
            * @type Toybox::Lang::Float
            */
            public var offCourseDistance;


            /**
            * The raw ambient pressure in Pascals (Pa).
            * @type Toybox::Lang::Float
            */
            public var rawAmbientPressure;


            /**
            * The current front bicycle derailleur index.
            * @type Toybox::Lang::Number
            */
            public var rearDerailleurIndex;


            /**
            * The rear bicycle derailleur maximum index.
            * @type Toybox::Lang::Number
            */
            public var rearDerailleurMax;


            /**
            * The rear bicycle derailleur gear size in number of teeth.
            * @type Toybox::Lang::Number
            */
            public var rearDerailleurSize;


            /**
            * The starting location of the current activity.
            * @type Toybox::Position::Location
            */
            public var startLocation;


            /**
            * The starting time of the current activity.
            * @type Toybox::Time::Moment
            */
            public var startTime;


            /**
            * The swim stroke type from the previous length.
            * @type Toybox::Lang::Number
            */
            public var swimStrokeType;


            /**
            * The SWOLF score from the previous length.
            * @type Toybox::Lang::Number
            */
            public var swimSwolf;


            /**
            * The recording timer state.
            * @type Toybox::Lang::Number
            */
            public var timerState;


            /**
            * The current Timer value in milliseconds (ms).
            * @type Toybox::Lang::Number
            */
            public var timerTime;


            /**
            * The total ascent during the current activity in meters (m).
            * @type Toybox::Lang::Float
            */
            public var totalAscent;


            /**
            * The total descent during the current activity in meters (m).
            * @type Toybox::Lang::Float
            */
            public var totalDescent;


            /**
            * The current track in radians.
            * @type Toybox::Lang::Float
            */
            public var track;


            /**
            * The Training Effect score of the current activity.
            * @type Toybox::Lang::Float
            */
            public var trainingEffect;


        }


    }

    module ActivityRecording {

        public class Session {

            /**
            * Add a lap to the current recording.
            * @param 
            * @returns  Toybox::Lang::Boolean 
            */
            public function addLap() { }


            /**
            * Create a new <span class='object_link'><a href="../FitContributor/Field.html" title="Toybox::FitContributor::Field (class)">Field</a></span>.
            * @param name
            * @param  fieldId
            * @param  type
            * @param  options
            * @returns  Toybox::FitContributor::Field 
            */
            public function createField(name, fieldId, type, options) { }


            /**
            * Complete the Session by discarding the recorded data.
            * @param 
            * @returns  Toybox::Lang::Boolean 
            */
            public function discard() { }


            /**
            * Check if recording is active for this Session.
            * @param 
            * @returns  Toybox::Lang::Boolean 
            */
            public function isRecording() { }


            /**
            * Complete the session by storing the FIT file on the file system.
            * @param 
            * @returns  Toybox::Lang::Boolean 
            */
            public function save() { }


            /**
            * Set the listener for Session timer events.
            * @param listener
            * @returns  Object 
            */
            public function setTimerEventListener(listener) { }


            /**
            * Begin recording a FIT file on the system.
            * @param 
            * @returns  Toybox::Lang::Boolean 
            */
            public function start() { }


            /**
            * Stop recording a FIT file on the system.
            * @param 
            * @returns  Toybox::Lang::Boolean 
            */
            public function stop() { }


        }


    }

    module Ant {

        public class BurstListener {

            /**
            * Callback when a burst reception completes successfully.
            * @param burstPayload
            * @returns  Object 
            */
            public function onReceiveComplete(burstPayload) { }


            /**
            * Callback when a burst reception fails over the air.
            * @param errorCode
            * @returns  Object 
            */
            public function onReceiveFail(errorCode) { }


            /**
            * Callback when a burst transmission completes successfully.
            * @param 
            * @returns  Object 
            */
            public function onTransmitComplete() { }


            /**
            * Callback when a burst transmission fails over the air.
            * @param errorCode
            * @returns  Object 
            */
            public function onTransmitFail(errorCode) { }


        }


        public class BurstPayload {

            /**
            * Add a <span class='object_link'><a href="Message.html" title="Toybox::Ant::Message (class)">Message</a></span> object to the end of the burst data.
            * @param message
            * @returns  Object 
            */
            public function add(message) { }


            /**
            * Return the number of burst <span class='object_link'><a href="Message.html" title="Toybox::Ant::Message (class)">Message</a></span> objects contained
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function getSize() { }


            /**
            * Constructor for the BurstPayload object.
            * @param 
            * @returns  BurstPayload 
            */
            public function initialize() { }


        }


        public class BurstPayloadIterator {

            /**
            * Constructor for the BurstPayloadIterator object.
            * @param newBurstPayload
            * @returns  BurstPayloadIterator 
            */
            public function initialize(newBurstPayload) { }


            /**
            * Return the next message in the <span class='object_link'><a href="BurstPayload.html" title="Toybox::Ant::BurstPayload (class)">BurstPayload</a></span>
            * @param 
            * @returns  Toybox::Lang::Array 
            */
            public function next() { }


        }


        public class ChannelAssignment {

            /**
            * Defines the type of channel.
            * @type Object
            */
            public var channelType;


            /**
            * Defines the type of network the channel should operate under.
            * @type Object
            */
            public var network;


            /**
            * Constructor for the channel object.
            * @type ChannelAssignment
            */
            public var initialize;


            /**
            * See if background scanning is enabled for the channel assignment.
            * @type Toybox::Lang::Boolean
            */
            public var isBackgroundScanEnabled;


            /**
            * Set background scan to be enabled or disabled.
            * @type Toybox::Lang::Boolean
            */
            public var setBackgroundScan;


        }


        public class CryptoConfig {

            /**
            * The division factor of the encryption counter.
            * @type Object
            */
            public var decimationRate;


            /**
            * The unique 4 byte identifier of the encrypted master or the negotiating
            * @type Object
            */
            public var encryptionId;


            /**
            * The 128-bit encryption key used to encrypt/decrypt ANT packets.
            * @type Object
            */
            public var encryptionKey;


            /**
            * The (optional) user information String to be sent to the master channel on
            * @type Object
            */
            public var userInfoString;


            /**
            * A new instance of CryptoConfig.
            * @type CryptoConfig
            */
            public function initialize();


        }


        public class DeviceConfig {

            /**
            * The unique device number (ANT-id).
            * @type Object
            */
            public var deviceNumber;


            /**
            * A 1-Byte device type identifier.
            * @type Object
            */
            public var deviceType;


            /**
            * The Message period that the sensor uses.
            * @type Object
            */
            public var messagePeriod;


            /**
            * A 128 bit network key.
            * @type Object
            */
            public var networkKey128Bit;


            /**
            * A 64 bit network key.
            * @type Object
            */
            public var networkKey64Bit;


            /**
            * The radio frequency that the sensor operates on.
            * @type Object
            */
            public var radioFrequency;


            /**
            * The proximity threshold bin.
            * @type Object
            */
            public var searchThreshold;


            /**
            * High Priority search timeout that a receiving channel will wait for in
            * @type Object
            */
            public var searchTimeoutHighPriority;


            /**
            * The low Priority search timeout that a receiving channel will wait for in
            * @type Object
            */
            public var searchTimeoutLowPriority;


            /**
            * The manufacturer-specific transport type and extended device number.
            * @type Object
            */
            public var transmissionType;


            /**
            * The constructor for the device configuration object.
            * @type DeviceConfig
            */
            public var initialize;


        }


        public class EncryptionInvalidSettingsException {

            /**
            * Constructor.
            * @param 
            * @returns  EncryptionInvalidSettingsException 
            */
            public function initialize() { }


        }


        public class GenericChannel {

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


        public class Message {

            /**
            * The Unique device number (ANT-id).
            * @type Object
            */
            public var deviceNumber;


            /**
            * A 1-Byte device type identifier.
            * @type Object
            */
            public var deviceType;


            /**
            * Number of data bytes in the data payload (not including any extended data
            * @type Object
            */
            public var length;


            /**
            * The Data Type Identifier.
            * @type Object
            */
            public var messageId;


            /**
            * The Received Signal Strength Indication.
            * @type Object
            */
            public var rssi;


            /**
            * The time stamp of received message generated off of a 32.768 kHz clock.
            * @type Object
            */
            public var timestamp;


            /**
            * The manufacturer-specific transport type and extended device number.
            * @type Object
            */
            public var transmissionType;


            /**
            * Get the ANT data packet.
            * @type Toybox::Lang::Array
            */
            public var getPayload;


            /**
            * Set the ANT data packet.
            * @type Object
            */
            public var setPayload;


        }


        public class UnableToAcquireChannelException {

            /**
            * Constructor.
            * @param 
            * @returns  UnableToAcquireChannelException 
            */
            public function initialize() { }


        }


        public class UnableToAcquireEncryptedChannelException {

            /**
            * Constructor.
            * @param 
            * @returns  UnableToAcquireEncryptedChannelException 
            */
            public function initialize() { }


        }


    }

    module AntPlus {

        public class AntPlusNotAllowedException {

            /**
            * AntPlusNotAllowedException constructor.
            * @param msg
            * @returns  AntPlusNotAllowedException 
            */
            public function initialize(msg) { }


        }


        public class BatteryStatus {

            /**
            * The <span class='object_link'><a href="../AntPlus.html#BATT_STATUS_CNT-constant" title="Toybox::AntPlus::BATT_STATUS_CNT (constant)">BATT_STATUS_*</a></span> value of the battery.
            * @type Toybox::Lang::Number
            */
            public var batteryStatus;


            /**
            * The voltage, -1 is invalid.
            * @type Toybox::Lang::Float
            */
            public var batteryVoltage;


            /**
            * The operating time in seconds.
            * @type Toybox::Lang::Number
            */
            public var operatingTime;


            /**
            * Constructor.
            * @type BatteryStatus
            */
            public var initialize;


        }


        public class BikeCadence {

            /**
            * Returns the most recent BikeCadenceInfo.
            * @param 
            * @returns  BikeCadenceInfo 
            */
            public function getCadenceInfo() { }


            /**
            * The initializer for the device object takes an extension of the
            * @param listener
            * @returns  BikeCadence 
            */
            public function initialize(listener) { }


        }


        public class BikeCadenceInfo {

            /**
            * Cadence (rpm).
            * @param 
            * @returns  Toybox::Lang::Integer 
            */
            public function cadence() { }


        }


        public class BikeCadenceListener {

            /**
            * Constructor.
            * @param 
            * @returns  BikeCadenceListener 
            */
            public function initialize() { }


            /**
            * Callback when cadence data is updated.
            * @param data
            * @returns  Object 
            */
            public function onBikeCadenceUpdate(data) { }


        }


        public class BikeLight {

            /**
            * The <span class='object_link'><a href="../AntPlus.html#LIGHT_MODE_AUTO-constant" title="Toybox::AntPlus::LIGHT_MODE_AUTO (constant)">LIGHT_MODE_*</a></span> mode of the light.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function mode() { }


            /**
            * The <span class='object_link'><a href="../AntPlus.html#LIGHT_TYPE_HEADLIGHT-constant" title="Toybox::AntPlus::LIGHT_TYPE_HEADLIGHT (constant)">LIGHT_TYPE_*</a></span> type of the light.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function type() { }


            /**
            * Get a list of the standard and custom light modes that a bike light
            * @param 
            * @returns  Toybox::Lang::Array 
            */
            public function getCapableModes() { }


            /**
            * Constructor.
            * @param 
            * @returns  BikeLight 
            */
            public function initialize() { }


            /**
            * Tell this light to enter a new mode.
            * @param mode
            * @returns  Object 
            */
            public function setMode(mode) { }


        }


        public class BikePower {

            /**
            * Get the current calculated crank cadence.
            * @param 
            * @returns  Toybox::AntPlus::CalculatedCadence 
            */
            public function getCalculatedCadence() { }


            /**
            * Retrieve the current calculated power.
            * @param 
            * @returns  Toybox::AntPlus::CalculatedPower 
            */
            public function getCalculatedPower() { }


            /**
            * Retrieve the current calculated wheel distance.
            * @param 
            * @returns  Toybox::AntPlus::CalculatedWheelDistance 
            */
            public function getCalculatedWheelDistance() { }


            /**
            * Retrieve the current calculated wheel speed.
            * @param 
            * @returns  Toybox::AntPlus::CalculatedWheelSpeed 
            */
            public function getCalculatedWheelSpeed() { }


            /**
            * Retrieve the current pedal power balance.
            * @param 
            * @returns  Toybox::AntPlus::PedalPowerBalance 
            */
            public function getPedalPowerBalance() { }


            /**
            * Retrieve the current torque effectiveness and pedal smoothness.
            * @param 
            * @returns  Toybox::AntPlus::TorqueEffectivenessPedalSmoothness 
            */
            public function getTorqueEffectivenessPedalSmoothness() { }


            /**
            * The Constructor for the BikePower object.
            * @param listener
            * @returns  BikePower 
            */
            public function initialize(listener) { }


        }


        public class BikePowerListener {

            /**
            * Constructor.
            * @param 
            * @returns  BikePowerListener 
            */
            public function initialize() { }


            /**
            * Callback when calculated cadence is updated (max freq 1Hz).
            * @param data
            * @returns  Object 
            */
            public function onCalculatedCadenceUpdate(data) { }


            /**
            * Callback when calculated power is updated (max freq 1Hz).
            * @param data
            * @returns  Object 
            */
            public function onCalculatedPowerUpdate(data) { }


            /**
            * Callback when calculated wheel distance is updated (max freq 1Hz).
            * @param data
            * @returns  Object 
            */
            public function onCalculatedWheelDistanceUpdate(data) { }


            /**
            * Callback when calculated wheel speed is updated (max freq 1Hz).
            * @param data
            * @returns  Object 
            */
            public function onCalculatedWheelSpeedUpdate(data) { }


            /**
            * Callback when power balance is updated (max freq 1Hz).
            * @param data
            * @returns  Object 
            */
            public function onPedalPowerBalanceUpdate(data) { }


            /**
            * Callback when torque effectiveness &amp; pedal smoothness are updated (max
            * @param data
            * @returns  Object 
            */
            public function onPedalPowerBalanceUpdate(data) { }


        }


        public class BikeRadar {

            /**
            * Retrieves information on the current list of tracked targets.
            * @param 
            * @returns  Toybox::Lang::Array 
            */
            public function getRadarInfo() { }


            /**
            * The Constructor for the BikeRadar class.
            * @param listener
            * @returns  BikeRadar 
            */
            public function initialize(listener) { }


        }


        public class BikeRadarListener {

            /**
            * Constructor.
            * @param 
            * @returns  BikeRadarListener 
            */
            public function initialize() { }


            /**
            * Callback when radar data is updated.
            * @param data
            * @returns  Object 
            */
            public function onBikeRadarUpdate(data) { }


        }


        public class BikeSpeed {

            /**
            * getSpeedInfo - Returns the most recent BikeSpeedInfo.
            * @param 
            * @returns  BikeSpeedInfo 
            */
            public function getSpeedInfo() { }


            /**
            * The initializer for the device object takes an extension of the
            * @param listener
            * @returns  BikeSpeed 
            */
            public function initialize(listener) { }


        }


        public class BikeSpeedCadence {

            /**
            * getSpeedCadenceInfo - Returns the most recent BikeSpeedCadenceInfo.
            * @param 
            * @returns  BikeSpeedCadenceInfo 
            */
            public function getSpeedCadenceInfo() { }


            /**
            * The initializer for the device object takes an extension of the
            * @param listener
            * @returns  BikeSpeedCadence 
            */
            public function initialize(listener) { }


        }


        public class BikeSpeedCadenceInfo {

            /**
            * Cadence (rpm).
            * @param 
            * @returns  Toybox::Lang::Integer 
            */
            public function cadence() { }


            /**
            * Distance (m).
            * @param 
            * @returns  Toybox::Lang::Float 
            */
            public function distance() { }


            /**
            * Speed (m/s).
            * @param 
            * @returns  Toybox::Lang::Float 
            */
            public function speed() { }


        }


        public class BikeSpeedCadenceListener {

            /**
            * Constructor.
            * @param 
            * @returns  BikeSpeedCadenceListener 
            */
            public function initialize() { }


            /**
            * Callback when speed / cadence data is updated.
            * @param data
            * @returns  Object 
            */
            public function onBikeSpeedCadenceUpdate(data) { }


        }


        public class BikeSpeedInfo {

            /**
            * Distance (m).
            * @param 
            * @returns  Toybox::Lang::Float 
            */
            public function distance() { }


            /**
            * Speed (m/s).
            * @param 
            * @returns  Toybox::Lang::Float 
            */
            public function speed() { }


        }


        public class BikeSpeedListener {

            /**
            * Constructor.
            * @param 
            * @returns  BikeSpeedListener 
            */
            public function initialize() { }


            /**
            * Callback when speed data is updated.
            * @param data
            * @returns  Object 
            */
            public function onBikeSpeedUpdate(data) { }


        }


        public class CalculatedCadence {

            /**
            * Average crank cadence calculated from the sensor data in rounds per minute
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function cadence() { }


            /**
            * The <span class='object_link'><a href="../AntPlus.html#BIKE_POWER_SENSOR_TYPE_CNT-constant" title="Toybox::AntPlus::BIKE_POWER_SENSOR_TYPE_CNT (constant)">BIKE_POWER_SENSOR_TYPE_*</a></span>
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function powerSensorType() { }


        }


        public class CalculatedPower {

            /**
            * The average power calculated from the sensor data in watts (W).
            * @param 
            * @returns  Toybox::Lang::Float 
            */
            public function power() { }


            /**
            * The <span class='object_link'><a href="../AntPlus.html#BIKE_POWER_SENSOR_TYPE_CNT-constant" title="Toybox::AntPlus::BIKE_POWER_SENSOR_TYPE_CNT (constant)">BIKE_POWER_SENSOR_TYPE_*</a></span>
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function powerSensorType() { }


        }


        public class CalculatedWheelDistance {

            /**
            * The accumulated distance calculated from sensor data in meters (m).
            * @param 
            * @returns  Toybox::Lang::Float 
            */
            public function distance() { }


        }


        public class CalculatedWheelSpeed {

            /**
            * The average speed calculated from the sensor data in meters per second
            * @param 
            * @returns  Toybox::Lang::Float 
            */
            public function speed() { }


        }


        public class CommonData {

            /**
            * The Component Identifier.
            * @type Toybox::Lang::Number
            */
            public var identifier;


            /**
            * Number of components in the system.
            * @type Toybox::Lang::Number
            */
            public var numComponents;


        }


        public class DerailleurStatus {

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


        public class DeviceConfig {

            /**
            * The unique device number (ANT-id).
            * @type Object
            */
            public var deviceNumber;


            /**
            * A 1-Byte device type identifier.
            * @type Object
            */
            public var deviceType;


            /**
            * The Message period that the sensor uses.
            * @type Object
            */
            public var messagePeriod;


            /**
            * A 128 bit network key.
            * @type Object
            */
            public var networkKey128Bit;


            /**
            * A 64 bit network key.
            * @type Object
            */
            public var networkKey64Bit;


            /**
            * The radio frequency that the sensor operates on.
            * @type Object
            */
            public var radioFrequency;


            /**
            * The proximity threshold bin.
            * @type Object
            */
            public var searchThreshold;


            /**
            * High Priority search timeout that a receiving channel will wait for in
            * @type Object
            */
            public var searchTimeoutHighPriority;


            /**
            * The low Priority search timeout that a receiving channel will wait for in
            * @type Object
            */
            public var searchTimeoutLowPriority;


            /**
            * The manufacturer-specific transport type and extended device number.
            * @type Object
            */
            public var transmissionType;


            /**
            * The constructor for the device configuration object.
            * @type DeviceConfig
            */
            public var initialize;


        }


        public class DeviceListener {

            /**
            * Callback when battery status is received.
            * @param data
            * @returns  Object 
            */
            public function onBatteryStatusUpdate(data) { }


            /**
            * Callback when device state is updated.
            * @param data
            * @returns  Object 
            */
            public function onDeviceStateUpdate(data) { }


            /**
            * Callback when manufacturer&#39;s information is received.
            * @param data
            * @returns  Object 
            */
            public function onManufacturerInfoUpdate(data) { }


            /**
            * Callback when ANT message is received.
            * @param msg
            * @returns  Object 
            */
            public function onMessage(msg) { }


            /**
            * Callback when product information is received.
            * @param data
            * @returns  Object 
            */
            public function onProductInfoUpdate(data) { }


            /**
            * After sending a manufacturer message or page request this will be called to
            * @param status
            * @param  sentMesgData
            * @returns  Object 
            */
            public function onSentMessage(status, sentMesgData) { }


        }


        public class DeviceState {

            /**
            * The current Device ID being tracked/searched for.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function deviceNumber() { }


            /**
            * The state of the device as an <span class='object_link'><a href="../AntPlus.html#DEVICE_STATE_CLOSED-constant" title="Toybox::AntPlus::DEVICE_STATE_CLOSED (constant)">DEVICE_STATE_*</a></span> value.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function state() { }


        }


        public class FitnessEquipment {

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


        public class FitnessEquipmentData {

            /**
            * The elapsed distance calculated by the trainer since reset Range is always
            * @param 
            * @returns  Toybox::Lang::Float 
            */
            public function feDistance() { }


            /**
            * The heart rate calculated by the trainer.
            * @param 
            * @returns  Toybox::Lang::Integer 
            */
            public function feHeartRate() { }


            /**
            * The speed calculated by the trainer.
            * @param 
            * @returns  Toybox::Lang::Float 
            */
            public function feSpeed() { }


        }


        public class FitnessEquipmentListener {

            /**
            * Constructor.
            * @param 
            * @returns  FitnessEquipmentListener 
            */
            public function initialize() { }


            /**
            * Callback when fitness equipment data is updated.
            * @param data
            * @returns  Object 
            */
            public function onFitnessEquipmentUpdate(data) { }


        }


        public class FitnessEquipmentMode {

            /**
            * Flag for basic resistance training mode support.
            * @param 
            * @returns  Toybox::Lang::Boolean 
            */
            public function basicResistanceSupported() { }


            /**
            * The current training mode of the fitness equipment.
            * @param 
            * @returns  Toybox::Lang::Integer 
            */
            public function mode() { }


            /**
            * Flag for simulation training mode support.
            * @param 
            * @returns  Toybox::Lang::Boolean 
            */
            public function simulationSupported() { }


            /**
            * Flag for target power training mode support.
            * @param 
            * @returns  Toybox::Lang::Boolean 
            */
            public function targetPowerSupported() { }


        }


        public class LightNetwork {

            /**
            * Get a list of lights in the network.
            * @param 
            * @returns  Toybox::Lang::Array 
            */
            public function getBikeLights() { }


            /**
            * Get the light network mode.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function getNetworkMode() { }


            /**
            * Get the light network state.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function getNetworkState() { }


            /**
            * Constructor for the LightNetwork object.
            * @param listener
            * @returns  LightNetwork 
            */
            public function initialize(listener) { }


            /**
            * Bring all headlights under the control of whichever light network mode has
            * @param 
            * @returns  Object 
            */
            public function restoreHeadlightsNetworkModeControl() { }


            /**
            * Bring all taillights under the control of whichever light network mode has
            * @param 
            * @returns  Object 
            */
            public function restoreTaillightsNetworkModeControl() { }


            /**
            * Tell all headlights to enter the same mode.
            * @param mode
            * @returns  Object 
            */
            public function setHeadlightsMode(mode) { }


            /**
            * Tell all taillights to enter the same mode.
            * @param mode
            * @returns  Object 
            */
            public function setTaillightsMode(mode) { }


            /**
            * A signal switch for right and left singals.
            * @param left
            * @returns  Object 
            */
            public function toggleSignalLight(left) { }


        }


        public class LightNetworkListener {

            /**
            * Constructor.
            * @param 
            * @returns  LightNetworkListener 
            */
            public function initialize() { }


            /**
            * Callback when a bike light&#39;s data is updated (max freq. 1Hz).
            * @param data
            * @returns  Object 
            */
            public function onBikeLightUpdate(data) { }


            /**
            * Callback when the light network state changes.
            * @param data
            * @returns  Object 
            */
            public function onLightNetworkStateUpdate(data) { }


        }


        public class ManufacturerInfo {

            /**
            * The Hardware revision.
            * @type Toybox::Lang::Number
            */
            public var hwRevision;


            /**
            * The Manufacturer ID.
            * @type Toybox::Lang::Number
            */
            public var manufacturerId;


            /**
            * The Model number.
            * @type Toybox::Lang::Number
            */
            public var modelNumber;


            /**
            * Constructor.
            * @type ManufacturerInfo
            */
            public var initialize;


        }


        public class PedalPowerBalance {

            /**
            * Pedal power percent (%).
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function pedalPowerPercent() { }


            /**
            * Indicates the pedal contribution.
            * @param 
            * @returns  Toybox::Lang::Boolean 
            */
            public function rightPedalIndicator() { }


        }


        public class ProductInfo {

            /**
            * The serial number.
            * @type Toybox::Lang::Number
            */
            public var serial;


            /**
            * The main software revision.
            * @type Toybox::Lang::Number
            */
            public var swRevisionMain;


            /**
            * The supplemental software revision.
            * @type Toybox::Lang::Number
            */
            public var swRevisionSupplemental;


            /**
            * Constructor.
            * @type ProductInfo
            */
            public var initialize;


        }


        public class RadarTarget {

            /**
            * Indicates the distance to the target in metres (m).
            * @param 
            * @returns  Toybox::Lang::Float 
            */
            public function range() { }


            /**
            * Indicates the speed of the target in metres per second (m/s).
            * @param 
            * @returns  Toybox::Lang::Float 
            */
            public function speed() { }


            /**
            * The <span class='object_link'><a href="../AntPlus.html#THREAT_LEVEL_VEHICLE_FAST_APPROACHING-constant" title="Toybox::AntPlus::THREAT_LEVEL_VEHICLE_FAST_APPROACHING (constant)">THREAT_LEVEL_*</a></span>
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function threat() { }


            /**
            * The <span class='object_link'><a href="../AntPlus.html#THREAT_SIDE_LEFT-constant" title="Toybox::AntPlus::THREAT_SIDE_LEFT (constant)">THREAT_SIDE_*</a></span> threat position.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function threatSide() { }


        }


        public class ResistanceSettings {

            /**
            * The resistance percentage of the fitness equipment.
            * @param 
            * @returns  Toybox::Lang::Float 
            */
            public function basicResistance() { }


        }


        public class RunningDynamics {

            /**
            * Use getRunningDynamics() to get the most current running dynamics.
            * @param 
            * @returns  RunningDynamicsData 
            */
            public function getRunningDynamics() { }


            /**
            * Use getSensorPosition() to retrieve the position of the sensor on the body.
            * @param 
            * @returns  SensorPosition 
            */
            public function getSensorPosition() { }


            /**
            * Constructor for the RunningDynamics object takes an extension of the
            * @param listener
            * @returns  RunningDynamics 
            */
            public function initialize(listener) { }


        }


        public class RunningDynamicsData {

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


        public class RunningDynamicsListener {

            /**
            * Constructor.
            * @param 
            * @returns  RunningDynamicsListener 
            */
            public function initialize() { }


            /**
            * Callback when running dynamics are updated (max freq 1Hz).
            * @param data
            * @returns  Object 
            */
            public function onRunningDynamicsUpdate(data) { }


            /**
            * Callback when sensor position is updated (max freq 1Hz).
            * @param data
            * @returns  Object 
            */
            public function onSensorPositionUpdate(data) { }


        }


        public class SensorPosition {

            /**
            * AntPlus.BODY_LOCATION_*.
            * @param 
            * @returns  Integer 
            */
            public function bodyLocation() { }


            /**
            * AntPlus.SENSOR_ORIENTATION_*.
            * @param 
            * @returns  Integer 
            */
            public function orientation() { }


        }


        public class Shifting {

            /**
            * Get current shifting system status Will not provide status for Shimano
            * @param 
            * @returns  ShiftingStatus 
            */
            public function getShiftingStatus() { }


            /**
            * Constructor for the Shifting object.
            * @param listener
            * @returns  Shifting 
            */
            public function initialize(listener) { }


        }


        public class ShiftingListener {

            /**
            * Constructor.
            * @param 
            * @returns  ShiftingListener 
            */
            public function initialize() { }


            /**
            * Callback when shifting system status is changed.
            * @param data
            * @returns  Object 
            */
            public function onShiftingUpdate(data) { }


        }


        public class ShiftingStatus {

            /**
            * Front derailleur status.
            * @param 
            * @returns  DerailleurStatus 
            */
            public function frontDerailleur() { }


            /**
            * Rear derailleur status.
            * @param 
            * @returns  DerailleurStatus 
            */
            public function rearDerailleur() { }


        }


        public class SimulationSettings {

            /**
            * The simulated draft factor setting for simulation mode A draft factor of 0
            * @param 
            * @returns  Toybox::Lang::Float 
            */
            public function draftFactor() { }


            /**
            * The slope (grade) setting of the simulated track.
            * @param 
            * @returns  Toybox::Lang::Float 
            */
            public function slope() { }


            /**
            * The simulated surface resistance coefficient for simulation mode.
            * @param 
            * @returns  Toybox::Lang::Float 
            */
            public function surfaceResistance() { }


            /**
            * The simulated wind resistance coefficient setting for simulation mode Wind
            * @param 
            * @returns  Toybox::Lang::Float 
            */
            public function windResistance() { }


            /**
            * The simulated wind speed setting for simulation mode.
            * @param 
            * @returns  Toybox::Lang::Float 
            */
            public function windSpeed() { }


        }


        public class TargetPowerSettings {

            /**
            * The target power set for the Fitness Equipment.
            * @param 
            * @returns  Toybox::Lang::Float 
            */
            public function targetPower() { }


        }


        public class TorqueEffectivenessPedalSmoothness {

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


        public class UserSettings {

            /**
            * The bike weight set for simulation training mode.
            * @param 
            * @returns  Toybox::Lang::Float 
            */
            public function bikeWeight() { }


            /**
            * The gear ratio set for simulation training mode.
            * @param 
            * @returns  Toybox::Lang::Float 
            */
            public function gearRatio() { }


            /**
            * The user weight set for simulation training mode.
            * @param 
            * @returns  Toybox::Lang::Float 
            */
            public function userWeight() { }


            /**
            * The wheel diameter set for simulation training mode.
            * @param 
            * @returns  Toybox::Lang::Float 
            */
            public function wheelDiameter() { }


        }


    }

    module Application {

        public class AppBase {

            /**
            * Check if application trial messages are allowed.
            * @param 
            * @returns  Toybox::Lang::Boolean 
            */
            public function allowTrialMessage() { }


            /**
            * This method will be removed in Connect IQ 4.0.0
            * @param 
            * @returns  Object 
            */
            public function clearProperties() { }


            /**
            * This method will be removed in Connect IQ 4.0.0
            * @param key
            * @returns  Object 
            */
            public function deleteProperty(key) { }


            /**
            * Return user defined glance view for content preview purpose.
            * @param 
            * @returns  Toybox::Lang::Array 
            */
            public function getGlanceView() { }


            /**
            * Override to provide a <span class='object_link'><a href="../WatchUi/View.html" title="Toybox::WatchUi::View (class)">WatchUi.View</a></span> for a goal that
            * @param goalType
            * @returns  Toybox::Lang::Array 
            */
            public function getGoalView(goalType) { }


            /**
            * Override to provide the initial <span class='object_link'><a href="../WatchUi/View.html" title="Toybox::WatchUi::View (class)">WatchUi.View</a></span> and
            * @param 
            * @returns  Toybox::Lang::Array 
            */
            public function getInitialView() { }


            /**
            * Get the data associated with a given key from the object store.
            * @param key
            * @returns  Toybox::Lang::Object 
            */
            public function getProperty(key) { }


            /**
            * Get a <span class='object_link'><a href="../System/ServiceDelegate.html" title="Toybox::System::ServiceDelegate (class)">ServiceDelegate</a></span> to run background
            * @param 
            * @returns  Toybox::Lang::Array 
            */
            public function getServiceDelegate() { }


            /**
            * Get a <span class='object_link'><a href="../Communications/SyncDelegate.html" title="Toybox::Communications::SyncDelegate (class)">SyncDelegate</a></span> object that
            * @param 
            * @returns  Toybox::Communications::SyncDelegate 
            */
            public function getSyncDelegate() { }


            /**
            * Override to return the number of days remaining in the trial.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function getTrialDaysRemaining() { }


            /**
            * Check if the application is in trial mode.
            * @param 
            * @returns  Toybox::Lang::Boolean 
            */
            public function isTrial() { }


            /**
            * This method will be removed in Connect IQ 3.0.0
            * @param 
            * @returns  Object 
            */
            public function loadProperties() { }


            /**
            * The callback method that is triggered in the background when the app is
            * @param 
            * @returns  Object 
            */
            public function onAppInstall() { }


            /**
            * The callback method that is triggered in the background when the app is
            * @param 
            * @returns  Object 
            */
            public function onAppUpdate() { }


            /**
            * Handle data passed from a ServiceDelegate to the application.
            * @param data
            * @returns  Object 
            */
            public function onBackgroundData(data) { }


            /**
            * Called when the application settings have been changed by Garmin Connect
            * @param 
            * @returns  Object 
            */
            public function onSettingsChanged() { }


            /**
            * Method called at startup to allow handling of app initialization.
            * @param state
            * @returns  Object 
            */
            public function onStart(state) { }


            /**
            * Override to handle application cleanup upon termination.
            * @param state
            * @returns  Object 
            */
            public function onStop(state) { }


            /**
            * This method will be removed in Connect IQ 3.0.0
            * @param 
            * @returns  Object 
            */
            public function saveProperties() { }


            /**
            * Store the given data in the object.
            * @param key
            * @param  value
            * @returns  Object 
            */
            public function setProperty(key, value) { }


            /**
            * Validate a property being stored.
            * @param key
            * @param  value
            * @returns  Object 
            */
            public function validateProperty(key, value) { }


        }


        public class AudioContentProviderApp {

            /**
            * Get a <span class='object_link'><a href="../Media/ContentDelegate.html" title="Toybox::Media::ContentDelegate (class)">ContentDelegate</a></span> for use by the
            * @param args
            * @returns  Toybox::Media::ContentDelegate 
            */
            public function getContentDelegate(args) { }


            /**
            * Get the initial view for configuring playback.
            * @param 
            * @returns  Toybox::Lang::Array 
            */
            public function getPlaybackConfigurationView() { }


            /**
            * Get audio provider icon information.
            * @param 
            * @returns  Toybox::Media::ProviderIconInfo 
            */
            public function getProviderIconInfo() { }


            /**
            * Get the initial view for configuring sync.
            * @param 
            * @returns  Toybox::Lang::Array 
            */
            public function getSyncConfigurationView() { }


            /**
            * This method will be removed in Connect IQ 6.0.0
            * @param 
            * @returns  Toybox::Media::SyncDelegate 
            */
            public function getSyncDelegate() { }


            /**
            * The AudioContentProviderApp constructor.
            * @param 
            * @returns  AudioContentProviderApp 
            */
            public function initialize() { }


        }


        public class ObjectStoreAccessException {

            /**
            * Constructor.
            * @param 
            * @returns  ObjectStoreAccessException 
            */
            public function initialize() { }

        }


        module Properties {

            public class InvalidKeyException {

                /**
                * InvalidKeyException constructor.
                * @param 
                * @returns  InvalidKeyException 
                */
                public function initialize() { }

            }
        }
    }

    module Storage {

    }

    module Attention {

        public class ToneProfile {

            /**
            * The duration of the vibration in milliseconds (ms).
            * @type Object
            */
            public var duration;


            /**
            * The frequency of the tone in hertz (hz).
            * @type Object
            */
            public var frequency;


            /**
            * Create a new ToneProfile.
            * @type ToneProfile
            */
            public var initialize;


        }


        public class VibeProfile {

            /**
            * The strength of the vibration.
            * @type Object
            */
            public var dutyCycle;


            /**
            * Length of the vibration in milliseconds (ms).
            * @type Object
            */
            public var length;


            /**
            * Create a new VibeProfile.
            * @type VibeProfile
            */
            public var initialize;


        }


    }

    module Background {

        public class ExitDataSizeLimitException {

            /**
            * Constructor.
            * @param 
            * @returns  ExitDataSizeLimitException 
            */
            public function initialize() { }


        }


        public class InvalidBackgroundTimeException {

            /**
            * Constructor.
            * @param msg
            * @returns  InvalidBackgroundTimeException 
            */
            public function initialize(msg) { }


        }


        public class MessageSizeLimitException {

            /**
            * Constructor.
            * @param 
            * @returns  MessageSizeLimitException 
            */
            public function initialize() { }


        }


    }

    module BluetoothLowEnergy {

        public class BleDelegate {

            /**
            * BleDelegate constructor.
            * @param 
            * @returns  BleDelegate 
            */
            public function initialize() { }


            /**
            * After enabling notifications or indications on a characteristic by enabling
            * @param characteristic
            * @param  value
            * @returns  Object 
            */
            public function onCharacteristicChanged(characteristic, value) { }


            /**
            * After requesting a read operation on a characteristic using
            * @param characteristic
            * @param  status
            * @param  value
            * @returns  Object 
            */
            public function onCharacteristicRead(characteristic, status, value) { }


            /**
            * After requesting a write operation on a characteristic using
            * @param characteristic
            * @param  status
            * @returns  Object 
            */
            public function onCharacteristicWrite(characteristic, status) { }


            /**
            * After pairing a device this will be called after the connection is made.
            * @param device
            * @param  state
            * @returns  Object 
            */
            public function onConnectedStateChanged(device, state) { }


            /**
            * After requesting a read operation on a descriptor using
            * @param descriptor
            * @param  status
            * @param  value
            * @returns  Object 
            */
            public function onDescriptorRead(descriptor, status, value) { }


            /**
            * After requesting a write operation on a descriptor using
            * @param descriptor
            * @param  status
            * @returns  Object 
            */
            public function onDescriptorWrite(descriptor, status) { }


            /**
            * After Registering a UUID this callback will notify of the result of the
            * @param uuid
            * @param  status
            * @returns  Object 
            */
            public function onProfileRegister(uuid, status) { }


            /**
            * If a scan is running this will be called when new ScanResults are received.
            * @param scanResults
            * @returns  Object 
            */
            public function onScanResults(scanResults) { }


            /**
            * When the state of scanning is modified the system will call this function
            * @param scanState
            * @param  status
            * @returns  Object 
            */
            public function onScanStateChange(scanState, status) { }


        }


        public class Characteristic {

            /**
            * Retrieves the Descriptor with a specified UUID.
            * @param uuid
            * @returns  Toybox::BluetoothLowEnergy::Descriptor 
            */
            public function getDescriptor(uuid) { }


            /**
            * Retrieves an Iterator over the <span class='object_link'><a href="Descriptor.html" title="Toybox::BluetoothLowEnergy::Descriptor (class)">Descriptors</a></span>
            * @param 
            * @returns  Toybox::BluetoothLowEnergy::Iterator 
            */
            public function getDescriptors() { }


            /**
            * Retrieves the Characteristic&#39;s Service.
            * @param 
            * @returns  Toybox::BluetoothLowEnergy::Service 
            */
            public function getService() { }


            /**
            * Return the UUID of the Characteristic.
            * @param 
            * @returns  Toybox::BluetoothLowEnergy::Uuid 
            */
            public function getUuid() { }


            /**
            * Requests a read operation on the characteristic.
            * @param 
            * @returns  Object 
            */
            public function requestRead() { }


            /**
            * Requests a write operation.
            * @param value
            * @param  options
            * @returns  Object 
            */
            public function requestWrite(value, options) { }


        }


        public class Descriptor {

            /**
            * Retrieves the Descriptors Characteristic.
            * @param 
            * @returns  Toybox::BluetoothLowEnergy::Characteristic 
            */
            public function getCharacteristic() { }


            /**
            * Returns the UUID of the Descriptor.
            * @param 
            * @returns  Toybox::BluetoothLowEnergy::Uuid 
            */
            public function getUuid() { }


            /**
            * Requests a read operation on the descriptor.
            * @param 
            * @returns  Object 
            */
            public function requestRead() { }


            /**
            * Requests a write operation.
            * @param value
            * @returns  Object 
            */
            public function requestWrite(value) { }


        }


        public class DeviceConfig {

            /**
            * The unique device number (ANT-id).
            * @type Object
            */
            public var deviceNumber;


            /**
            * A 1-Byte device type identifier.
            * @type Object
            */
            public var deviceType;


            /**
            * The Message period that the sensor uses.
            * @type Object
            */
            public var messagePeriod;


            /**
            * A 128 bit network key.
            * @type Object
            */
            public var networkKey128Bit;


            /**
            * A 64 bit network key.
            * @type Object
            */
            public var networkKey64Bit;


            /**
            * The radio frequency that the sensor operates on.
            * @type Object
            */
            public var radioFrequency;


            /**
            * The proximity threshold bin.
            * @type Object
            */
            public var searchThreshold;


            /**
            * High Priority search timeout that a receiving channel will wait for in
            * @type Object
            */
            public var searchTimeoutHighPriority;


            /**
            * The low Priority search timeout that a receiving channel will wait for in
            * @type Object
            */
            public var searchTimeoutLowPriority;


            /**
            * The manufacturer-specific transport type and extended device number.
            * @type Object
            */
            public var transmissionType;


            /**
            * The constructor for the device configuration object.
            * @type DeviceConfig
            */
            public var initialize;


        }


        public class DevicePairException {

        }


        public class InvalidRequestException {

        }


        public class HeartRateIterator {

            /**
            * Get the maximum heart rate contained in this iterator.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function getMax() { }


            /**
            * Get the minimum heart rate contained in this iterator.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function getMin() { }


            /**
            * Get the next entry in the iterator.
            * @param 
            * @returns  Toybox::ActivityMonitor::HeartRateSample 
            */
            public function next() { }


        }


        public class ProfileRegistrationException {

        }


        public class ScanResult {

            /**
            * Gets the Advertised Appearance of the sensor.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function getAppearance() { }


            /**
            * Gets the advertised device name.
            * @param 
            * @returns  Toybox::Lang::String 
            */
            public function getDeviceName() { }


            /**
            * Gets Manufacturer Specific Data for a given Manufacturer.
            * @param manufacturerId
            * @returns  Toybox::Lang::ByteArray 
            */
            public function getManufacturerSpecificData(manufacturerId) { }


            /**
            * Gets an iterator over all of the Manufacturer Specific Data AD Entries in
            * @param 
            * @returns  Toybox::BluetoothLowEnergy::Iterator 
            */
            public function getManufacturerSpecificDataIterator() { }


            /**
            * Gets the Raw Data that was retrieved in the advertising packet.
            * @param 
            * @returns  Toybox::Lang::ByteArray 
            */
            public function getRawData() { }


            /**
            * Gets the received signal strength indication (RSSI) value of the received
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function getRssi() { }


            /**
            * Gets Service Data for a specific UUID.
            * @param uuid
            * @returns  Toybox::Lang::ByteArray 
            */
            public function getServiceData(uuid) { }


            /**
            * Gets service UUIDs advertised by the device.
            * @param 
            * @returns  Toybox::BluetoothLowEnergy::Iterator 
            */
            public function getServiceUuids() { }


            /**
            * Determines if another scan result represents the same device as another.
            * @param other
            * @returns  Boolean 
            */
            public function isSameDevice(other) { }


        }


        public class Service {

            /**
            * Retrieves the Characteristic with a specified UUID.
            * @param uuid
            * @returns  Toybox::BluetoothLowEnergy::Characteristic 
            */
            public function getCharacteristic(uuid) { }


            /**
            * Retrieves an Iterator over the Characteristics in a Service.
            * @param 
            * @returns  Toybox::BluetoothLowEnergy::Iterator 
            */
            public function getCharacteristics() { }


            /**
            * Retrieves the Service&#39;s Device.
            * @param 
            * @returns  Toybox::BluetoothLowEnergy::Device 
            */
            public function getDevice() { }


            /**
            * Returns the UUID of the service.
            * @param 
            * @returns  Toybox::BluetoothLowEnergy::Uuid 
            */
            public function getUuid() { }


        }


        public class Uuid {

            /**
            * Compares the Uuid to another object for equality.
            * @param other
            * @returns  Toybox::Lang::Boolean 
            */
            public function equals(other) { }


            /**
            * Retrieve a hash code of the UUID.
            * @param 
            * @returns  Object 
            */
            public function hashCode() { }


            /**
            * Convert UUID to a Little Endian Byte Array.
            * @param 
            * @returns  Toybox::Lang::ByteArray 
            */
            public function toByteArray() { }


            /**
            * Convert a UUID to a String.
            * @param 
            * @returns  Toybox::Lang::String 
            */
            public function toString() { }


        }


        public class UuidFormatException {

        }


    }

    module Communications {

        public class ConnectionListener {

            /**
            * Callback when a communications operation completes.
            * @param 
            * @returns  Object 
            */
            public function onComplete() { }


            /**
            * Callback when a communications operation error occurs.
            * @param 
            * @returns  Object 
            */
            public function onError() { }


        }


        public class MailboxIterator {

            /**
            * Get the next message from the mailbox.
            * @param 
            * @returns  Object 
            */
            public function next() { }


        }


        public class Message {

            /**
            * The Unique device number (ANT-id).
            * @type Object
            */
            public var deviceNumber;


            /**
            * A 1-Byte device type identifier.
            * @type Object
            */
            public var deviceType;


            /**
            * Number of data bytes in the data payload (not including any extended data
            * @type Object
            */
            public var length;


            /**
            * The Data Type Identifier.
            * @type Object
            */
            public var messageId;


            /**
            * The Received Signal Strength Indication.
            * @type Object
            */
            public var rssi;


            /**
            * The time stamp of received message generated off of a 32.768 kHz clock.
            * @type Object
            */
            public var timestamp;


            /**
            * The manufacturer-specific transport type and extended device number.
            * @type Object
            */
            public var transmissionType;


            /**
            * Get the ANT data packet.
            * @type Toybox::Lang::Array
            */
            public var getPayload;


            /**
            * Set the ANT data packet.
            * @type Object
            */
            public var setPayload;


        }


        public class OAuthMessage {

            /**
            * An HTTP response code (positive value) or BLE error code (negative value).
            * @type Toybox::Lang::Number
            */
            public var responseCode;


            /**
            * Constructor.
            * @type OAuthMessage
            */
            public var initialize;


        }


        public class PhoneAppMessage {

            /**
            * Constructor.
            * @type PhoneAppMessage
            */
            public var initialize;


        }


        public class SyncDelegate {

            /**
            * Check if a sync is needed.
            * @param 
            * @returns  Toybox::Lang::Boolean 
            */
            public function isSyncNeeded() { }


            /**
            * Called when a sync is started by the system.
            * @param 
            * @returns  Object 
            */
            public function onStartSync() { }


            /**
            * Called when an active sync is cancelled.
            * @param 
            * @returns  Object 
            */
            public function onStopSync() { }


        }


    }

    module Cryptography {

        public class Cipher {

            /**
            * Decrypt data with the key, depending on how the cipher was initialized.
            * @param ciphertext
            * @returns  Toybox::Lang::ByteArray 
            */
            public function decrypt(ciphertext) { }


            /**
            * Encrypt data with the key, depending on how the cipher was initialized.
            * @param plaintext
            * @returns  Toybox::Lang::ByteArray 
            */
            public function encrypt(plaintext) { }


            /**
            * A new instance of Cipher.
            * @param options
            * @returns  Cipher 
            */
            public function initialize(options) { }


        }


        public class CipherBasedMessageAuthenticationCode {

            /**
            * Return the digest of the authentication code.
            * @param 
            * @returns  Toybox::Lang::ByteArray 
            */
            public function digest() { }


            /**
            * A new instance of CipherBasedMessageAuthenticationCode.
            * @param options
            * @returns  CipherBasedMessageAuthenticationCode 
            */
            public function initialize(options) { }


            /**
            * Continue the computation of the CMAC by consuming the next chunk of data.
            * @param message
            * @returns  Object 
            */
            public function update(message) { }


        }


        public class Hash {

            /**
            * Get the current digest of the message that has been hashed.
            * @param 
            * @returns  Toybox::Lang::ByteArray 
            */
            public function digest() { }


            /**
            * A new instance of Hash.
            * @param options
            * @returns  Hash 
            */
            public function initialize(options) { }


            /**
            * Continue hashing of a message by consuming the next chunk of data.
            * @param message
            * @returns  Object 
            */
            public function update(message) { }


        }


        public class HashBasedMessageAuthenticationCode {

            /**
            * Return the digest of the authentication code.
            * @param 
            * @returns  Toybox::Lang::ByteArray 
            */
            public function digest() { }


            /**
            * A new instance of HashBasedMessageAuthenticationCode.
            * @param options
            * @returns  HashBasedMessageAuthenticationCode 
            */
            public function initialize(options) { }


            /**
            * Continue computation of the HMAC by consuming the next chunk of data.
            * @param message
            * @returns  Object 
            */
            public function update(message) { }


        }


        public class InvalidBlockSizeException {

            /**
            * A new instance of InvalidBlockSizeException.
            * @param msg
            * @returns  InvalidBlockSizeException 
            */
            public function initialize(msg) { }


        }


        public class Properties {

            /**
            * InvalidKeyException constructor.
            * @param 
            * @returns  InvalidKeyException 
            */
            public function initialize() { }


        }


        public class KeyAgreement {

            /**
            * Add a public <span class='object_link'><a href="Key.html" title="Toybox::Cryptography::Key (class)">Key</a></span> to KeyAgreement.
            * @param key
            * @returns  Object 
            */
            public function addKey(key) { }


            /**
            * Generate a shared secret for the KeyAgreement.
            * @param 
            * @returns  Toybox::Lang::ByteArray 
            */
            public function generateSecret() { }


            /**
            * A new instance of KeyAgreement.
            * @param options
            * @returns  KeyAgreement 
            */
            public function initialize(options) { }


        }


        public class KeyPair {

            /**
            * Get the private key.
            * @param 
            * @returns  Toybox::Cryptography::Key 
            */
            public function getPrivateKey() { }


            /**
            * Get the public key.
            * @param 
            * @returns  Toybox::Cryptography::Key 
            */
            public function getPublicKey() { }


            /**
            * Returns a new instance of KeyPair.
            * @param options
            * @returns  KeyPair 
            */
            public function initialize(options) { }


        }


    }

    module FitContributor {

        public class Field {

            /**
            * Set the value to write to this Field.
            * @param input
            * @returns  Object 
            */
            public function setData(input) { }


        }


    }

    module Graphics {

        public class BufferedBitmap {

            /**
            * Get the Dc to draw on the buffered bitmap.
            * @param 
            * @returns  Toybox::Graphics::Dc 
            */
            public function getDc() { }


            /**
            * <code>null</code> if this surface uses the system palette.
            * @param 
            * @returns  Toybox::Lang::Array 
            */
            public function getPalette() { }


            /**
            * A new instance of BufferedBitmap.
            * @param options
            * @returns  BufferedBitmap 
            */
            public function initialize(options) { }


            /**
            *   
            * @param palette
            * @returns  Object 
            */
            public function setPalette(palette) { }


        }


        public class Dc {

            /**
            * Erase the screen using the background color.
            * @param 
            * @returns  Object 
            */
            public function clear() { }


            /**
            * Reset the drawable area to the full area of the Dc.
            * @param 
            * @returns  Object 
            */
            public function clearClip() { }


            /**
            * Draw an arc.
            * @param x
            * @param  y
            * @param  r
            * @param  attr
            * @param  degreeStart
            * @param  degreeEnd
            * @returns  Object 
            */
            public function drawArc(x, y, r, attr, degreeStart, degreeEnd) { }


            /**
            * Draw a bitmap to the screen.
            * @param x
            * @param  y
            * @param  bitmap
            * @returns  Object 
            */
            public function drawBitmap(x, y, bitmap) { }


            /**
            * Draw a circle around a point.
            * @param x
            * @param  y
            * @param  radius
            * @returns  Object 
            */
            public function drawCircle(x, y, radius) { }


            /**
            * Draw an ellipse around a point.
            * @param x
            * @param  y
            * @param  a
            * @param  b
            * @returns  Object 
            */
            public function drawEllipse(x, y, a, b) { }


            /**
            * Draw a line between two points.
            * @param x1
            * @param  y1
            * @param  x2
            * @param  y2
            * @returns  Object 
            */
            public function drawLine(x1, y1, x2, y2) { }


            /**
            * Draw a point on the screen.
            * @param x
            * @param  y
            * @returns  Object 
            */
            public function drawPoint(x, y) { }


            /**
            * Draw a rectangle.
            * @param x
            * @param  y
            * @param  width
            * @param  height
            * @returns  Object 
            */
            public function drawRectangle(x, y, width, height) { }


            /**
            * Draw a rounded rectangle.
            * @param x
            * @param  y
            * @param  width
            * @param  height
            * @param  radius
            * @returns  Object 
            */
            public function drawRoundedRectangle(x, y, width, height, radius) { }


            /**
            * Draw text at the given location.
            * @param x
            * @param  y
            * @param  font
            * @param  text
            * @param  justification
            * @returns  Object 
            */
            public function drawText(x, y, font, text, justification) { }


            /**
            * Fill a circle with the foreground color.
            * @param x
            * @param  y
            * @param  radius
            * @returns  Object 
            */
            public function fillCircle(x, y, radius) { }


            /**
            * Fill an ellipse with the foreground color.
            * @param x
            * @param  y
            * @param  a
            * @param  b
            * @returns  Object 
            */
            public function fillEllipse(x, y, a, b) { }


            /**
            * Fill a polygon with the foreground color.
            * @param pts
            * @returns  Object 
            */
            public function fillPolygon(pts) { }


            /**
            * Fill a rectangle with the foreground color.
            * @param x
            * @param  y
            * @param  width
            * @param  height
            * @returns  Object 
            */
            public function fillRectangle(x, y, width, height) { }


            /**
            * Fill a rounded rectangle with the foreground color.
            * @param x
            * @param  y
            * @param  width
            * @param  height
            * @param  radius
            * @returns  Object 
            */
            public function fillRoundedRectangle(x, y, width, height, radius) { }


            /**
            * Get the height of a font.
            * @param font
            * @returns  Toybox::Lang::Number 
            */
            public function getFontHeight(font) { }


            /**
            * Get the height of the display region that is available to the app.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function getHeight() { }


            /**
            * Get the width and height of a String.
            * @param text
            * @param  font
            * @returns  Toybox::Lang::Array 
            */
            public function getTextDimensions(text, font) { }


            /**
            * Get the width of a String.
            * @param text
            * @param  font
            * @returns  Toybox::Lang::Number 
            */
            public function getTextWidthInPixels(text, font) { }


            /**
            * Get the width of the display region that is available to the app.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function getWidth() { }


            /**
            * Apply a clipping region to the Dc.
            * @param x
            * @param  y
            * @param  width
            * @param  height
            * @returns  Object 
            */
            public function setClip(x, y, width, height) { }


            /**
            * Set the current foreground and background colors.
            * @param foreground
            * @param  background
            * @returns  Object 
            */
            public function setColor(foreground, background) { }


            /**
            * Set the width of a line.
            * @param width
            * @returns  Object 
            */
            public function setPenWidth(width) { }


        }


        public class InvalidBitmapResourceException {

            /**
            * Constructor.
            * @param msg
            * @returns  InvalidBitmapResourceException 
            */
            public function initialize(msg) { }


        }


        public class InvalidPaletteException {

            /**
            * Constructor.
            * @param msg
            * @returns  InvalidPaletteException 
            */
            public function initialize(msg) { }


        }


    }

    module Lang {

        public class Array {

            /**
            * Add an Object to the end of an Array.
            * @param object
            * @returns  Toybox::Lang::Array 
            */
            public function add(object) { }


            /**
            * Add an Array of Objects to the end of an Array.
            * @param array
            * @returns  Toybox::Lang::Array 
            */
            public function addAll(array) { }


            /**
            * Get the index of an Object within the Array.
            * @param object
            * @returns  Toybox::Lang::Number 
            */
            public function indexOf(object) { }


            /**
            * Remove an Object from an Array.
            * @param object
            * @returns  Toybox::Lang::Boolean 
            */
            public function remove(object) { }


            /**
            * Remove Objects from an Array.
            * @param object
            * @returns  Toybox::Lang::Boolean 
            */
            public function removeAll(object) { }


            /**
            * Return a new Array that contains the elements of a source Array in reverse
            * @param 
            * @returns  Toybox::Lang::Array 
            */
            public function reverse() { }


            /**
            * Get the size of an Array.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function size() { }


            /**
            * Get a new Array containing a portion of an existing Array.
            * @param startIndex
            * @param  endIndex
            * @returns  Toybox::Lang::Array 
            */
            public function slice(startIndex, endIndex) { }


            /**
            * Convert an Array to a String.
            * @param 
            * @returns  Toybox::Lang::String 
            */
            public function toString() { }


        }


        public class Boolean extends Object {
            public function test(byte) { }
        }


        public class ByteArray {

            /**
            * Add a byte to the end of a ByteArray.
            * @param byte
            * @returns  Toybox::Lang::ByteArray 
            */
            public function add(byte) { }


            /**
            * Add a ByteArray or an <span class='object_link'><a href="Array.html" title="Toybox::Lang::Array (class)">Array</a></span> of bytes to the end of a
            * @param array
            * @returns  Toybox::Lang::ByteArray 
            */
            public function addAll(array) { }


            /**
            * Decodes a portion of the array to a number based on a specified format.
            * @param format
            * @param  options
            * @returns  Toybox::Lang::Number, ... 
            */
            public function decodeNumber(format, options) { }


            /**
            * Encodes a number into the byte array.
            * @param value
            * @param  format
            * @param  options
            * @returns  Object 
            */
            public function encodeNumber(value, format, options) { }


            /**
            * Test if an Object instance is equal to another instance of an Object.
            * @param object
            * @returns  Toybox::Lang::Boolean 
            */
            public function equals(object) { }


            /**
            * Get a hash code value for a ByteArray.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function hashCode() { }


            /**
            * Get the index of a byte within the ByteArray.
            * @param byte
            * @returns  Toybox::Lang::Number 
            */
            public function indexOf(byte) { }


            /**
            * Remove a byte from a ByteArray.
            * @param byte
            * @returns  Toybox::Lang::Boolean 
            */
            public function remove(byte) { }


            /**
            * Remove bytes from a ByteArray.
            * @param byte
            * @returns  Toybox::Lang::Boolean 
            */
            public function removeAll(byte) { }


            /**
            * Return a new ByteArray that contains the elements of a source ByteArray in
            * @param 
            * @returns  Toybox::Lang::ByteArray 
            */
            public function reverse() { }


            /**
            * Get the size of a ByteArray.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function size() { }


            /**
            * Get a new ByteArray containing a portion of an existing ByteArray.
            * @param startIndex
            * @param  endIndex
            * @returns  Toybox::Lang::ByteArray 
            */
            public function slice(startIndex, endIndex) { }


            /**
            * Convert a ByteArray to a String.
            * @param 
            * @returns  Toybox::Lang::String 
            */
            public function toString() { }


        }

        public class Char {

            /**
            * Convert a Char to lowercase.
            * @param 
            * @returns  Toybox::Lang::Char 
            */
            public function toLower() { }


            /**
            * Convert a Char to a Number.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function toNumber() { }


            /**
            * Convert a Char to a String.
            * @param 
            * @returns  Toybox::Lang::String 
            */
            public function toString() { }


            /**
            * Convert a Char to uppercase.
            * @param 
            * @returns  Toybox::Lang::Char 
            */
            public function toUpper() { }


        }


        public class Dictionary {

            /**
            * Retrieve a value from a Dictionary for a given key.
            * @param key
            * @returns  Toybox::Lang::Object 
            */
            public function get(key) { }


            /**
            * Determine whether a key exists within a Dictionary.
            * @param key
            * @returns  Toybox::Lang::Boolean 
            */
            public function hasKey(key) { }


            /**
            * Determine whether a Dictionary is empty.
            * @param 
            * @returns  Toybox::Lang::Boolean 
            */
            public function isEmpty() { }


            /**
            * Retrieve the keys in the Dictionary.
            * @param 
            * @returns  Toybox::Lang::Array 
            */
            public function keys() { }


            /**
            * Place a value in the Dictionary with a given key.
            * @param key
            * @param  value
            * @returns  Object 
            */
            public function put(key, value) { }


            /**
            * Delete an item from a Dictionary.
            * @param key
            * @returns  Object 
            */
            public function remove(key) { }


            /**
            * Retrieve the number of elements in a Dictionary.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function size() { }


            /**
            * Convert a Dictionary to a String.
            * @param 
            * @returns  Toybox::Lang::String 
            */
            public function toString() { }


            /**
            * Retrieve the values in the Dictionary.
            * @param 
            * @returns  Toybox::Lang::Array 
            */
            public function values() { }


        }


        public class Double {

            /**
            * Get the absolute value of a Double.
            * @param 
            * @returns  Toybox::Lang::Double 
            */
            public function abs() { }


            /**
            * Test if an Object instance is equal to another instance of an Object.
            * @param object
            * @returns  Toybox::Lang::Boolean 
            */
            public function equals(object) { }


            /**
            * Format a Double using a formatting String.
            * @param format
            * @returns  Toybox::Lang::String 
            */
            public function format(format) { }


            /**
            * Convert a Double to a Double.
            * @param 
            * @returns  Toybox::Lang::Double 
            */
            public function toDouble() { }


            /**
            * Convert a Double to a Float.
            * @param 
            * @returns  Toybox::Lang::Float 
            */
            public function toFloat() { }


            /**
            * Convert a Double to a Long.
            * @param 
            * @returns  Toybox::Lang::Long 
            */
            public function toLong() { }


            /**
            * Convert a Double to a Number.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function toNumber() { }


            /**
            * Convert a Double to a String.
            * @param 
            * @returns  Toybox::Lang::String 
            */
            public function toString() { }


        }


        public class EncryptionInvalidSettingsException {

            /**
            * Constructor.
            * @param 
            * @returns  EncryptionInvalidSettingsException 
            */
            public function initialize() { }


        }


        public class Float {

            /**
            * Get the absolute value of a Float.
            * @param 
            * @returns  Toybox::Lang::Float 
            */
            public function abs() { }


            /**
            * Format a Float using a formatting String.
            * @param format
            * @returns  Toybox::Lang::String 
            */
            public function format(format) { }


            /**
            * Convert a Float to a Double.
            * @param 
            * @returns  Toybox::Lang::Double 
            */
            public function toDouble() { }


            /**
            * Convert a Float to a Float.
            * @param 
            * @returns  Toybox::Lang::Float 
            */
            public function toFloat() { }


            /**
            * Convert a Float to a Long.
            * @param 
            * @returns  Toybox::Lang::Long 
            */
            public function toLong() { }


            /**
            * Convert a Float to a Number.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function toNumber() { }


        }


        public class InvalidOptionsException {

            /**
            * InvalidOptionsException constructor.
            * @param msg
            * @returns  InvalidOptionsException 
            */
            public function initialize(msg) { }


        }


        public class InvalidValueException {

            /**
            * A new instance of InvalidValueException.
            * @param msg
            * @returns  InvalidValueException 
            */
            public function initialize(msg) { }


        }


        public class Long {

            /**
            * Get the absolute value of a Long.
            * @param 
            * @returns  Toybox::Lang::Long 
            */
            public function abs() { }


            /**
            * Test if an Object instance is equal to another instance of an Object.
            * @param object
            * @returns  Toybox::Lang::Boolean 
            */
            public function equals(object) { }


            /**
            * Format a Long using a formatting String.
            * @param format
            * @returns  Toybox::Lang::String 
            */
            public function format(format) { }


            /**
            * Convert a Long to a Double.
            * @param 
            * @returns  Toybox::Lang::Double 
            */
            public function toDouble() { }


            /**
            * Convert a Long to a Float.
            * @param 
            * @returns  Toybox::Lang::Float 
            */
            public function toFloat() { }


            /**
            * Convert a Long to a Long.
            * @param 
            * @returns  Toybox::Lang::Long 
            */
            public function toLong() { }


            /**
            * Convert a Long to a Number.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function toNumber() { }


            /**
            * Convert a Long to a String.
            * @param 
            * @returns  Toybox::Lang::String 
            */
            public function toString() { }


        }


        public class Method {

            /**
            * Get a hash code value for a Method.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function hashCode() { }


            /**
            * Method Constructor.
            * @param aClass
            * @param  aMethod
            * @returns  Method 
            */
            public function initialize(aClass, aMethod) { }


            /**
            * Invoke a Method.
            * @param parameters
            * @returns  Toybox::Lang::Object 
            */
            public function invoke(parameters) { }


        }


        public class Number {

            /**
            * Get the absolute value of a Number.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function abs() { }


            /**
            * Format a Number using a formatting String.
            * @param format
            * @returns  Toybox::Lang::String 
            */
            public function format(format) { }


            /**
            * Convert a Number to a Char.
            * @param 
            * @returns  Toybox::Lang::Char 
            */
            public function toChar() { }


            /**
            * Convert a Number to a Double.
            * @param 
            * @returns  Toybox::Lang::Double 
            */
            public function toDouble() { }


            /**
            * Convert a Number to a Float.
            * @param 
            * @returns  Toybox::Lang::Float 
            */
            public function toFloat() { }


            /**
            * Convert a Number to a Long.
            * @param 
            * @returns  Toybox::Lang::Long 
            */
            public function toLong() { }


            /**
            * Convert a Number to a Number.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function toNumber() { }


        }

        public class OperationNotAllowedException {

            /**
            * OperationNotAllowedException constructor.
            * @param msg
            * @returns  OperationNotAllowedException 
            */
            public function initialize(msg) { }


        }


        public class SerializationException {

            /**
            * A new instance of SerializationException.
            * @param msg
            * @returns  SerializationException 
            */
            public function initialize(msg) { }


        }


        public class StorageFullException {

            /**
            * StorageFullException constructor.
            * @param msg
            * @returns  StorageFullException 
            */
            public function initialize(msg) { }


        }


        public class String {

            /**
            * Test if an Object instance is equal to another instance of an Object.
            * @param object
            * @returns  Toybox::Lang::Boolean 
            */
            public function equals(object) { }


            /**
            * Determine if the specified String exists in a String.
            * @param string
            * @returns  Toybox::Lang::Number 
            */
            public function find(string) { }


            /**
            * Get a hash code value for a String.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function hashCode() { }


            /**
            * Get the number of characters in a String.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function length() { }


            /**
            * Create a new String that contains the contents of the current String from a
            * @param startIndex
            * @param  endIndex
            * @returns  Toybox::Lang::String 
            */
            public function substring(startIndex, endIndex) { }


            /**
            * Convert a String to an Array of Char objects.
            * @param 
            * @returns  Toybox::Lang::Array 
            */
            public function toCharArray() { }


            /**
            * Convert a String to a Double.
            * @param 
            * @returns  Toybox::Lang::Double 
            */
            public function toDouble() { }


            /**
            * Convert a String to a Float.
            * @param 
            * @returns  Toybox::Lang::Float 
            */
            public function toFloat() { }


            /**
            * Convert a String to a Long.
            * @param 
            * @returns  Toybox::Lang::Long 
            */
            public function toLong() { }


            /**
            * Convert a String to a Long using a specified base.
            * @param base
            * @returns  Toybox::Lang::Long 
            */
            public function toLongWithBase(base) { }


            /**
            * Convert a String to lowercase.
            * @param 
            * @returns  Toybox::Lang::String 
            */
            public function toLower() { }


            /**
            * Convert a String to a Number.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function toNumber() { }


            /**
            * Convert a String to a Number using a specified base.
            * @param base
            * @returns  Toybox::Lang::Number 
            */
            public function toNumberWithBase(base) { }


            /**
            * Convert a String to a String.
            * @param 
            * @returns  Toybox::Lang::String 
            */
            public function toString() { }


            /**
            * Convert a String to uppercase.
            * @param 
            * @returns  Toybox::Lang::String 
            */
            public function toUpper() { }


            /**
            * Convert a String to an Array of Number objects.
            * @param 
            * @returns  Toybox::Lang::Array 
            */
            public function toUtf8Array() { }


        }


        public class Symbol {

            /**
            * Convert a Symbol to a Number.
            * @param 
            * @returns  Number 
            */
            public function toNumber() { }


            /**
            * Convert a Symbol to a String.
            * @param 
            * @returns  String 
            */
            public function toString() { }


        }


        public class SymbolNotAllowedException {

            /**
            * SymbolNotAllowedException constructor.
            * @param msg
            * @returns  SymbolNotAllowedException 
            */
            public function initialize(msg) { }


        }


        public class UnexpectedTypeException {

            /**
            * UnexpectedTypeException constructor.
            * @param message
            * @param  unused1
            * @param  unused2
            * @returns  UnexpectedTypeException 
            */
            public function initialize(message, unused1, unused2) { }


        }


        public class ValueOutOfBoundsException {

            /**
            * A new instance of ValueOutOfBoundsException.
            * @param msg
            * @returns  ValueOutOfBoundsException 
            */
            public function initialize(msg) { }


        }


        public class WeakReference {

            /**
            * Get the Object referenced by the WeakReference.
            * @param 
            * @returns  Toybox::Lang::Object 
            */
            public function get() { }


            /**
            * Determine whether a WeakReference is still alive.
            * @param 
            * @returns  Toybox::Lang::Boolean 
            */
            public function stillAlive() { }


        }


    }

    module Math {

        public class Filter {

            /**
            * Apply the Filter to an Array of samples.
            * @param data
            * @returns  Object 
            */
            public function apply(data) { }


            /**
            * Initialize the filter.
            * @param dictionary
            * @returns  Filter 
            */
            public function initialize(dictionary) { }


        }


        public class FirFilter {

            /**
            *   
            * @param data
            * @returns  Object 
            */
            public function apply(data) { }


            /**
            * Initialize the FIR filter.
            * @param dictionary
            * @returns  FirFilter 
            */
            public function initialize(dictionary) { }


        }


        public class IirFilter {

            /**
            *   
            * @param data
            * @returns  Object 
            */
            public function apply(data) { }


            /**
            * Initialize the IIR filter.
            * @param dictionary
            * @returns  IirFilter 
            */
            public function initialize(dictionary) { }


        }


    }

    module Media {

        public class ActiveContent {

            /**
            * Get the playback start position for media content.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function getPlaybackStartPosition() { }


            /**
            * The MediaContent constructor.
            * @param contentRef
            * @param  metadata
            * @param  playbackStartPos
            * @returns  ActiveContent 
            */
            public function initialize(contentRef, metadata, playbackStartPos) { }


        }


        public class AlbumArt {

            /**
            * The image format of the album art.
            * @type Toybox::Lang::Number
            */
            public var image_format;


            /**
            * Byte offset of the album art image within the audio file.
            * @type Toybox::Lang::Number
            */
            public var image_offset;


        }


        public class AudioFormat {

            /**
            * The bit rate of the audio.
            * @type Toybox::Lang::Number
            */
            public var bitRate;


            /**
            * The number of channels.
            * @type Toybox::Lang::Number
            */
            public var numChannels;


            /**
            * The sample rate of the audio in Hz.
            * @type Toybox::Lang::Number
            */
            public var sampleRate;


        }


        public class CacheStatistics {

            /**
            * The capacity of the media cache.
            * @type Toybox::Lang::Long
            */
            public var capacity;


            /**
            * The current size of the media cache.
            * @type Toybox::Lang::Long
            */
            public var size;


        }


        public class AudioContentProviderApp {

            /**
            * Get a <span class='object_link'><a href="../Media/ContentDelegate.html" title="Toybox::Media::ContentDelegate (class)">ContentDelegate</a></span> for use by the
            * @param args
            * @returns  Toybox::Media::ContentDelegate 
            */
            public function getContentDelegate(args) { }


            /**
            * Get the initial view for configuring playback.
            * @param 
            * @returns  Toybox::Lang::Array 
            */
            public function getPlaybackConfigurationView() { }


            /**
            * Get audio provider icon information.
            * @param 
            * @returns  Toybox::Media::ProviderIconInfo 
            */
            public function getProviderIconInfo() { }


            /**
            * Get the initial view for configuring sync.
            * @param 
            * @returns  Toybox::Lang::Array 
            */
            public function getSyncConfigurationView() { }


            /**
            * This method will be removed in Connect IQ 6.0.0
            * @param 
            * @returns  Toybox::Media::SyncDelegate 
            */
            public function getSyncDelegate() { }


            /**
            * The AudioContentProviderApp constructor.
            * @param 
            * @returns  AudioContentProviderApp 
            */
            public function initialize() { }


        }


        public class ContentDelegate {

            /**
            * Return a <span class='object_link'><a href="ContentIterator.html" title="Toybox::Media::ContentIterator (class)">ContentIterator</a></span> object for the
            * @param 
            * @returns  Toybox::Media::ContentIterator 
            */
            public function getContentIterator() { }


            /**
            * Respond to a user ad click.
            * @param adContext
            * @returns  Object 
            */
            public function onAdAction(adContext) { }


            /**
            * Handle a CustomButton being selected in the Media Player.
            * @param button
            * @returns  Object 
            */
            public function onCustomButton(button) { }


            /**
            * Respond to a command to change repeat mode.
            * @param 
            * @returns  Object 
            */
            public function onRepeat() { }


            /**
            * Respond to a command to turn shuffle on or off.
            * @param 
            * @returns  Object 
            */
            public function onShuffle() { }


            /**
            * Handle a notification from a system that a song has been played.
            * @param contentRefId
            * @param  songEvent
            * @param  playbackPosition
            * @returns  Object 
            */
            public function onSong(contentRefId, songEvent, playbackPosition) { }


            /**
            * Respond to a thumbs-down action.
            * @param contentRefId
            * @returns  Object 
            */
            public function onThumbsDown(contentRefId) { }


            /**
            * Respond to a thumbs-up action.
            * @param contentRefId
            * @returns  Object 
            */
            public function onThumbsUp(contentRefId) { }


            /**
            * Reset the <span class='object_link'><a href="ContentIterator.html" title="Toybox::Media::ContentIterator (class)">ContentIterator</a></span> to the beginning
            * @param 
            * @returns  Toybox::Media::ContentIterator 
            */
            public function resetContentIterator() { }


        }


        public class ContentIterator {

            /**
            * Determine if the the current track can be skipped.
            * @param 
            * @returns  Toybox::Lang::Boolean 
            */
            public function canSkip() { }


            /**
            * Get the current media content object.
            * @param 
            * @returns  Toybox::Media::Content 
            */
            public function get() { }


            /**
            * Get the current media content playback profile.
            * @param 
            * @returns  Toybox::Media::PlaybackProfile 
            */
            public function getPlaybackProfile() { }


            /**
            * Get the next media content object.
            * @param 
            * @returns  Toybox::Media::Content 
            */
            public function next() { }


            /**
            * Get the next media content object without incrementing the iterator.
            * @param 
            * @returns  Toybox::Media::Content 
            */
            public function peekNext() { }


            /**
            * Get the previous media content object without decrementing the iterator.
            * @param 
            * @returns  Toybox::Media::Content 
            */
            public function peekPrevious() { }


            /**
            * Get the previous media content object.
            * @param 
            * @returns  Toybox::Media::Content 
            */
            public function previous() { }


            /**
            * Get the current repeat state.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function repeatMode() { }


            /**
            * Determine if playback is currently set to shuffle.
            * @param 
            * @returns  Toybox::Lang::Boolean 
            */
            public function shuffling() { }


        }


        public class ContentMetadata {

            /**
            * The album title.
            * @type Toybox::Lang::String
            */
            public var album;


            /**
            * The name of the artist.
            * @type Toybox::Lang::String
            */
            public var artist;


            /**
            * The genre.
            * @type Toybox::Lang::String
            */
            public var genre;


            /**
            * The track title.
            * @type Toybox::Lang::String
            */
            public var title;


            /**
            * The track number.
            * @type Toybox::Lang::Number
            */
            public var trackNumber;


        }


        public class ContentRef {

            /**
            * Get the media content type.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function getContentType() { }


            /**
            * Get the content ref ID.
            * @param 
            * @returns  Toybox::Lang::Object 
            */
            public function getId() { }


            /**
            * The ContentRef constructor.
            * @param id
            * @param  type
            * @returns  ContentRef 
            */
            public function initialize(id, type) { }


        }


        public class ContentRefIterator {

            /**
            * Get the next <span class='object_link'><a href="ContentIterator.html" title="Toybox::Media::ContentIterator (class)">ContentIterator</a></span>.
            * @param 
            * @returns  Toybox::Media::ContentRefIterator 
            */
            public function next() { }


        }


        public class CustomButton {

            /**
            * Called by the system to draw the button in the Media Player.
            * @param image
            * @param  highlighted
            * @returns  Toybox::WatchUi::BitmapResource 
            */
            public function getImage(image, highlighted) { }


            /**
            * Called by the system to determine if the current state of the button.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function getState() { }


            /**
            * Called by the system to draw the name of the button.
            * @param state
            * @returns  Toybox::Lang::String 
            */
            public function getText(state) { }


        }


        public class PlaybackProfile {

            /**
            * Defines if the current song is skipped if a thumbs-down operation is given.
            * @type Toybox::Lang::Boolean
            */
            public var attemptSkipAfterThumbsDown;


            /**
            * Playback controls that should be rendered in the player.
            * @type Toybox::Lang::Array
            */
            public var playbackControls;


            /**
            * The number of seconds a song must play to trigger a “played” notification.
            * @type Toybox::Lang::Number
            */
            public var playbackNotificationThreshold;


            /**
            * The colors for the media player.
            * @type Toybox::Media::PlayerColors
            */
            public var playerColors;


            /**
            * Defines if the system notifies the app when each song is played.
            * @type Toybox::Lang::Boolean
            */
            public var requirePlaybackNotification;


            /**
            * The amount of time a song must be played so that pressing back restarts the
            * @type Toybox::Lang::Number
            */
            public var skipPreviousThreshold;


        }


        public class PlayerColors {

            /**
            * The background color for the media player.
            * @type Object
            */
            public var backgroundColor;


            /**
            * The foreground color for the media player.
            * @type Object
            */
            public var foregroundColor;


            /**
            * The border color behind the currently selected icon.
            * @type Object
            */
            public var highlightBorderColor;


            /**
            * The fill color behind the currently selected icon.
            * @type Object
            */
            public var highlightFillColor;


            /**
            * The color of the progress bar for total time.
            * @type Object
            */
            public var progressBarBackgroundColor;


            /**
            * The color of the progress bar for elapsed time.
            * @type Object
            */
            public var progressBarForegroundColor;


            /**
            * The color of the text in the media player.
            * @type Object
            */
            public var textColor;


        }


        public class ProviderIconInfo {

            /**
            * The ProviderIconInfo constructor.
            * @param icon
            * @param  accentColor
            * @returns  ProviderIconInfo 
            */
            public function initialize(icon, accentColor) { }


        }


        public class SyncDelegate {

            /**
            * Check if a sync is needed.
            * @param 
            * @returns  Toybox::Lang::Boolean 
            */
            public function isSyncNeeded() { }


            /**
            * Called when a sync is started by the system.
            * @param 
            * @returns  Object 
            */
            public function onStartSync() { }


            /**
            * Called when an active sync is cancelled.
            * @param 
            * @returns  Object 
            */
            public function onStopSync() { }


        }


        public class SystemButton {

            /**
            * Called by the system to draw the button in the Media Player.
            * @param image
            * @param  state
            * @param  highlighted
            * @returns  Toybox::WatchUi::BitmapResource, Toybox::Lang::Number 
            */
            public function getImage(image, state, highlighted) { }


            /**
            * A new instance of SystemButton.
            * @param type
            * @param  options
            * @returns  SystemButton 
            */
            public function initialize(type, options) { }


        }


    }

    module PersistedContent {

        public class Course {

            /**
            * Get a unique serializable id.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function getId() { }


            /**
            * Get a readable name for the content.
            * @param 
            * @returns  Toybox::Lang::String 
            */
            public function getName() { }


            /**
            * Remove a course.
            * @param 
            * @returns  Object 
            */
            public function remove() { }


            /**
            * Get a system intent for the content.
            * @param 
            * @returns  Toybox::System::Intent 
            */
            public function toIntent() { }


        }


        public class HeartRateIterator {

            /**
            * Get the maximum heart rate contained in this iterator.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function getMax() { }


            /**
            * Get the minimum heart rate contained in this iterator.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function getMin() { }


            /**
            * Get the next entry in the iterator.
            * @param 
            * @returns  Toybox::ActivityMonitor::HeartRateSample 
            */
            public function next() { }


        }


        public class Route {

            /**
            * Get a unique serializable id.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function getId() { }


            /**
            * Get a readable name for the content.
            * @param 
            * @returns  Toybox::Lang::String 
            */
            public function getName() { }


            /**
            * Remove a route.
            * @param 
            * @returns  Object 
            */
            public function remove() { }


            /**
            * Get a system intent for the content.
            * @param 
            * @returns  Toybox::System::Intent 
            */
            public function toIntent() { }


        }


        public class Track {

            /**
            * Get a unique serializable id.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function getId() { }


            /**
            * Get a readable name for the content.
            * @param 
            * @returns  Toybox::Lang::String 
            */
            public function getName() { }


            /**
            * Remove a track.
            * @param 
            * @returns  Object 
            */
            public function remove() { }


            /**
            * Get a system intent for the content.
            * @param 
            * @returns  Toybox::System::Intent 
            */
            public function toIntent() { }


        }


        public class Waypoint {

            /**
            * Get a unique serializable id.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function getId() { }


            /**
            * Get a readable name for the content.
            * @param 
            * @returns  Toybox::Lang::String 
            */
            public function getName() { }


            /**
            * Remove a waypoint.
            * @param 
            * @returns  Object 
            */
            public function remove() { }


            /**
            * Get a system intent for the content.
            * @param 
            * @returns  Toybox::System::Intent 
            */
            public function toIntent() { }


        }


        public class Workout {

            /**
            * Get a unique serializable id.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function getId() { }


            /**
            * Get a readable name for the content.
            * @param 
            * @returns  Toybox::Lang::String 
            */
            public function getName() { }


            /**
            * Remove a workout.
            * @param 
            * @returns  Object 
            */
            public function remove() { }


            /**
            * Get a system intent for the content.
            * @param 
            * @returns  Toybox::System::Intent 
            */
            public function toIntent() { }


        }


    }

    module PersistedLocations {

    }

    module Position {

        public class Info {

            /**
            * The altitude above mean sea level in meters (m).
            * @type Toybox::Lang::Float
            */
            public var altitude;


            /**
            * The ambient pressure in Pascals (Pa).
            * @type Toybox::Lang::Float
            */
            public var ambientPressure;


            /**
            * The average cadence during the current activity in revolutions per minute
            * @type Toybox::Lang::Number
            */
            public var averageCadence;


            /**
            * The average swim stroke distance from the previous interval in meters (m).
            * @type Toybox::Lang::Float
            */
            public var averageDistance;


            /**
            * The average heart rate during the current activity in beats per minute
            * @type Toybox::Lang::Number
            */
            public var averageHeartRate;


            /**
            * The average power during the current activity in Watts (W).
            * @type Toybox::Lang::Number
            */
            public var averagePower;


            /**
            * The average speed during the current activity in meters per second (mps).
            * @type Toybox::Lang::Float
            */
            public var averageSpeed;


            /**
            * The current bearing in radians.
            * @type Toybox::Lang::Float
            */
            public var bearing;


            /**
            * The bearing from the starting location to the destination in radians.
            * @type Toybox::Lang::Float
            */
            public var bearingFromStart;


            /**
            * The calories burned throughout the current activity in kilocalories (kcal).
            * @type Toybox::Lang::Number
            */
            public var calories;


            /**
            * The current cadence in revolutions per minute (rpm).
            * @type Toybox::Lang::Number
            */
            public var currentCadence;


            /**
            * The true north referenced heading in radians.
            * @type Toybox::Lang::Float
            */
            public var currentHeading;


            /**
            * The current heart rate in beats per minute (bpm).
            * @type Toybox::Lang::Number
            */
            public var currentHeartRate;


            /**
            * The current location.
            * @type Toybox::Position::Location
            */
            public var currentLocation;


            /**
            * The current GPS accuracy.
            * @type Toybox::Lang::Number
            */
            public var currentLocationAccuracy;


            /**
            * The current power in Watts (W).
            * @type Toybox::Lang::Number
            */
            public var currentPower;


            /**
            * The current speed in meters per second (mps).
            * @type Toybox::Lang::Float
            */
            public var currentSpeed;


            /**
            * The distance to the destination in meters (m).
            * @type Toybox::Lang::Float
            */
            public var distanceToDestination;


            /**
            * The distance to the next point in meters (m).
            * @type Toybox::Lang::Float
            */
            public var distanceToNextPoint;


            /**
            * The elapsed distance of the current activity in meters (m).
            * @type Toybox::Lang::Float
            */
            public var elapsedDistance;


            /**
            * Elapsed time of the current activity in milliseconds (ms).
            * @type Toybox::Lang::Number
            */
            public var elapsedTime;


            /**
            * The elevation at the destination in meters (m).
            * @type Toybox::Lang::Float
            */
            public var elevationAtDestination;


            /**
            * The elevation at the next point in meters (m).
            * @type Toybox::Lang::Float
            */
            public var elevationAtNextPoint;


            /**
            * The current energy expenditure in kilocalories per minute (kcals/min).
            * @type Toybox::Lang::Float
            */
            public var energyExpenditure;


            /**
            * The current front bicycle derailleur index.
            * @type Toybox::Lang::Number
            */
            public var frontDerailleurIndex;


            /**
            * The front bicycle derailleur maximum index.
            * @type Toybox::Lang::Number
            */
            public var frontDerailleurMax;


            /**
            * The front bicycle derailleur gear size in number of teeth.
            * @type Toybox::Lang::Number
            */
            public var frontDerailleurSize;


            /**
            * The maximum cadence recorded during the current activity in revolutions per
            * @type Toybox::Lang::Number
            */
            public var maxCadence;


            /**
            * The maximum heart rate recorded during the current activity in beats per
            * @type Toybox::Lang::Number
            */
            public var maxHeartRate;


            /**
            * The maximum power recorded during the current activity in Watts (W).
            * @type Toybox::Lang::Number
            */
            public var maxPower;


            /**
            * The maximum speed recorded during the current activity in meters per second
            * @type Toybox::Lang::Float
            */
            public var maxSpeed;


            /**
            * The mean sea level barometric pressure in Pascals (Pa).
            * @type Toybox::Lang::Float
            */
            public var meanSeaLevelPressure;


            /**
            * The name of the destination.
            * @type Toybox::Lang::String
            */
            public var nameOfDestination;


            /**
            * The name of the next point.
            * @type Toybox::Lang::String
            */
            public var nameOfNextPoint;


            /**
            * The distance to the nearest point on the current course in meters (m).
            * @type Toybox::Lang::Float
            */
            public var offCourseDistance;


            /**
            * The raw ambient pressure in Pascals (Pa).
            * @type Toybox::Lang::Float
            */
            public var rawAmbientPressure;


            /**
            * The current front bicycle derailleur index.
            * @type Toybox::Lang::Number
            */
            public var rearDerailleurIndex;


            /**
            * The rear bicycle derailleur maximum index.
            * @type Toybox::Lang::Number
            */
            public var rearDerailleurMax;


            /**
            * The rear bicycle derailleur gear size in number of teeth.
            * @type Toybox::Lang::Number
            */
            public var rearDerailleurSize;


            /**
            * The starting location of the current activity.
            * @type Toybox::Position::Location
            */
            public var startLocation;


            /**
            * The starting time of the current activity.
            * @type Toybox::Time::Moment
            */
            public var startTime;


            /**
            * The swim stroke type from the previous length.
            * @type Toybox::Lang::Number
            */
            public var swimStrokeType;


            /**
            * The SWOLF score from the previous length.
            * @type Toybox::Lang::Number
            */
            public var swimSwolf;


            /**
            * The recording timer state.
            * @type Toybox::Lang::Number
            */
            public var timerState;


            /**
            * The current Timer value in milliseconds (ms).
            * @type Toybox::Lang::Number
            */
            public var timerTime;


            /**
            * The total ascent during the current activity in meters (m).
            * @type Toybox::Lang::Float
            */
            public var totalAscent;


            /**
            * The total descent during the current activity in meters (m).
            * @type Toybox::Lang::Float
            */
            public var totalDescent;


            /**
            * The current track in radians.
            * @type Toybox::Lang::Float
            */
            public var track;


            /**
            * The Training Effect score of the current activity.
            * @type Toybox::Lang::Float
            */
            public var trainingEffect;


        }


        public class Location {

            /**
            * Get a <span class='object_link'><a href="" title="Toybox::Position::Location (class)">Location</a></span> object that is offset from the
            * @param angle
            * @param  distance
            * @returns  Toybox::Position::Location 
            */
            public function getProjectedLocation(angle, distance) { }


            /**
            * Create a Location based on a set of coordinates.
            * @param options
            * @returns  Location 
            */
            public function initialize(options) { }


            /**
            * Get a Location object&#39;s coordinates in degrees.
            * @param 
            * @returns  Toybox::Lang::Array 
            */
            public function toDegrees() { }


            /**
            * Get a String representation a Location object&#39;s coordinates.
            * @param format
            * @returns  Toybox::Lang::String 
            */
            public function toGeoString(format) { }


            /**
            * Get a location object&#39;s coordinates in radians.
            * @param 
            * @returns  Toybox::Lang::Array 
            */
            public function toRadians() { }


        }


    }

    module Sensor {

        public class AccelerometerData {

            /**
            * The <span class='object_link'><a href="../Lang/Array.html" title="Toybox::Lang::Array (class)">Array</a></span> of pitch values as <span class='object_link'><a href="../Lang/Float.html" title="Toybox::Lang::Float (class)">Floats</a></span> in degrees.
            * @type Toybox::Lang::Array
            */
            public var pitch;


            /**
            * The <span class='object_link'><a href="../Lang/Array.html" title="Toybox::Lang::Array (class)">Array</a></span> of vector power values as
            * @type Toybox::Lang::Array
            */
            public var power;


            /**
            * The <span class='object_link'><a href="../Lang/Array.html" title="Toybox::Lang::Array (class)">Array</a></span> of roll values as <span class='object_link'><a href="../Lang/Float.html" title="Toybox::Lang::Float (class)">Floats</a></span> in degrees.
            * @type Toybox::Lang::Array
            */
            public var roll;


            /**
            * The <span class='object_link'><a href="../Lang/Array.html" title="Toybox::Lang::Array (class)">Array</a></span> of x axis values as <span class='object_link'><a href="../Lang/Number.html" title="Toybox::Lang::Number (class)">Numbers</a></span> in millig-units.
            * @type Toybox::Lang::Array
            */
            public var x;


            /**
            * The <span class='object_link'><a href="../Lang/Array.html" title="Toybox::Lang::Array (class)">Array</a></span> of y axis values as <span class='object_link'><a href="../Lang/Number.html" title="Toybox::Lang::Number (class)">Numbers</a></span> in millig-units.
            * @type Toybox::Lang::Array
            */
            public var y;


            /**
            * The <span class='object_link'><a href="../Lang/Array.html" title="Toybox::Lang::Array (class)">Array</a></span> of z axis values as <span class='object_link'><a href="../Lang/Number.html" title="Toybox::Lang::Number (class)">Numbers</a></span> in millig-units.
            * @type Toybox::Lang::Array
            */
            public var z;


        }


        public class HeartRateData {

            /**
            * The most recent beat-to-beat interval data as an <span class='object_link'><a href="../Lang/Array.html" title="Toybox::Lang::Array (class)">Array</a></span> of <span class='object_link'><a href="../Lang/Number.html" title="Toybox::Lang::Number (class)">Number</a></span> objects in milliseconds (ms).
            * @type Toybox::Lang::Array
            */
            public var heartBeatIntervals;


        }


        public class Info {

            /**
            * The altitude above mean sea level in meters (m).
            * @type Toybox::Lang::Float
            */
            public var altitude;


            /**
            * The ambient pressure in Pascals (Pa).
            * @type Toybox::Lang::Float
            */
            public var ambientPressure;


            /**
            * The average cadence during the current activity in revolutions per minute
            * @type Toybox::Lang::Number
            */
            public var averageCadence;


            /**
            * The average swim stroke distance from the previous interval in meters (m).
            * @type Toybox::Lang::Float
            */
            public var averageDistance;


            /**
            * The average heart rate during the current activity in beats per minute
            * @type Toybox::Lang::Number
            */
            public var averageHeartRate;


            /**
            * The average power during the current activity in Watts (W).
            * @type Toybox::Lang::Number
            */
            public var averagePower;


            /**
            * The average speed during the current activity in meters per second (mps).
            * @type Toybox::Lang::Float
            */
            public var averageSpeed;


            /**
            * The current bearing in radians.
            * @type Toybox::Lang::Float
            */
            public var bearing;


            /**
            * The bearing from the starting location to the destination in radians.
            * @type Toybox::Lang::Float
            */
            public var bearingFromStart;


            /**
            * The calories burned throughout the current activity in kilocalories (kcal).
            * @type Toybox::Lang::Number
            */
            public var calories;


            /**
            * The current cadence in revolutions per minute (rpm).
            * @type Toybox::Lang::Number
            */
            public var currentCadence;


            /**
            * The true north referenced heading in radians.
            * @type Toybox::Lang::Float
            */
            public var currentHeading;


            /**
            * The current heart rate in beats per minute (bpm).
            * @type Toybox::Lang::Number
            */
            public var currentHeartRate;


            /**
            * The current location.
            * @type Toybox::Position::Location
            */
            public var currentLocation;


            /**
            * The current GPS accuracy.
            * @type Toybox::Lang::Number
            */
            public var currentLocationAccuracy;


            /**
            * The current power in Watts (W).
            * @type Toybox::Lang::Number
            */
            public var currentPower;


            /**
            * The current speed in meters per second (mps).
            * @type Toybox::Lang::Float
            */
            public var currentSpeed;


            /**
            * The distance to the destination in meters (m).
            * @type Toybox::Lang::Float
            */
            public var distanceToDestination;


            /**
            * The distance to the next point in meters (m).
            * @type Toybox::Lang::Float
            */
            public var distanceToNextPoint;


            /**
            * The elapsed distance of the current activity in meters (m).
            * @type Toybox::Lang::Float
            */
            public var elapsedDistance;


            /**
            * Elapsed time of the current activity in milliseconds (ms).
            * @type Toybox::Lang::Number
            */
            public var elapsedTime;


            /**
            * The elevation at the destination in meters (m).
            * @type Toybox::Lang::Float
            */
            public var elevationAtDestination;


            /**
            * The elevation at the next point in meters (m).
            * @type Toybox::Lang::Float
            */
            public var elevationAtNextPoint;


            /**
            * The current energy expenditure in kilocalories per minute (kcals/min).
            * @type Toybox::Lang::Float
            */
            public var energyExpenditure;


            /**
            * The current front bicycle derailleur index.
            * @type Toybox::Lang::Number
            */
            public var frontDerailleurIndex;


            /**
            * The front bicycle derailleur maximum index.
            * @type Toybox::Lang::Number
            */
            public var frontDerailleurMax;


            /**
            * The front bicycle derailleur gear size in number of teeth.
            * @type Toybox::Lang::Number
            */
            public var frontDerailleurSize;


            /**
            * The maximum cadence recorded during the current activity in revolutions per
            * @type Toybox::Lang::Number
            */
            public var maxCadence;


            /**
            * The maximum heart rate recorded during the current activity in beats per
            * @type Toybox::Lang::Number
            */
            public var maxHeartRate;


            /**
            * The maximum power recorded during the current activity in Watts (W).
            * @type Toybox::Lang::Number
            */
            public var maxPower;


            /**
            * The maximum speed recorded during the current activity in meters per second
            * @type Toybox::Lang::Float
            */
            public var maxSpeed;


            /**
            * The mean sea level barometric pressure in Pascals (Pa).
            * @type Toybox::Lang::Float
            */
            public var meanSeaLevelPressure;


            /**
            * The name of the destination.
            * @type Toybox::Lang::String
            */
            public var nameOfDestination;


            /**
            * The name of the next point.
            * @type Toybox::Lang::String
            */
            public var nameOfNextPoint;


            /**
            * The distance to the nearest point on the current course in meters (m).
            * @type Toybox::Lang::Float
            */
            public var offCourseDistance;


            /**
            * The raw ambient pressure in Pascals (Pa).
            * @type Toybox::Lang::Float
            */
            public var rawAmbientPressure;


            /**
            * The current front bicycle derailleur index.
            * @type Toybox::Lang::Number
            */
            public var rearDerailleurIndex;


            /**
            * The rear bicycle derailleur maximum index.
            * @type Toybox::Lang::Number
            */
            public var rearDerailleurMax;


            /**
            * The rear bicycle derailleur gear size in number of teeth.
            * @type Toybox::Lang::Number
            */
            public var rearDerailleurSize;


            /**
            * The starting location of the current activity.
            * @type Toybox::Position::Location
            */
            public var startLocation;


            /**
            * The starting time of the current activity.
            * @type Toybox::Time::Moment
            */
            public var startTime;


            /**
            * The swim stroke type from the previous length.
            * @type Toybox::Lang::Number
            */
            public var swimStrokeType;


            /**
            * The SWOLF score from the previous length.
            * @type Toybox::Lang::Number
            */
            public var swimSwolf;


            /**
            * The recording timer state.
            * @type Toybox::Lang::Number
            */
            public var timerState;


            /**
            * The current Timer value in milliseconds (ms).
            * @type Toybox::Lang::Number
            */
            public var timerTime;


            /**
            * The total ascent during the current activity in meters (m).
            * @type Toybox::Lang::Float
            */
            public var totalAscent;


            /**
            * The total descent during the current activity in meters (m).
            * @type Toybox::Lang::Float
            */
            public var totalDescent;


            /**
            * The current track in radians.
            * @type Toybox::Lang::Float
            */
            public var track;


            /**
            * The Training Effect score of the current activity.
            * @type Toybox::Lang::Float
            */
            public var trainingEffect;


        }


        public class SensorData {

            /**
            * An <span class='object_link'><a href="AccelerometerData.html" title="Toybox::Sensor::AccelerometerData (class)">AccelerometerData</a></span> object.
            * @type Object
            */
            public var accelerometerData;


            /**
            * A <span class='object_link'><a href="HeartRateData.html" title="Toybox::Sensor::HeartRateData (class)">HeartRateData</a></span> object.
            * @type Object
            */
            public var heartRateData;


        }


        public class TooManySensorDataListenersException {

            /**
            * Constructor.
            * @param msg
            * @returns  TooManySensorDataListenersException 
            */
            public function initialize(msg) { }


        }


    }

    module SensorHistory {

        public class SensorHistoryIterator {

            /**
            * Get the maximum <span class='object_link'><a href="SensorSample.html" title="Toybox::SensorHistory::SensorSample (class)">SensorSample</a></span> data
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function getMax() { }


            /**
            * Get the minimum <span class='object_link'><a href="SensorSample.html" title="Toybox::SensorHistory::SensorSample (class)">SensorSample</a></span> data
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function getMin() { }


            /**
            * Get the <span class='object_link'><a href="../Time/Moment.html" title="Toybox::Time::Moment (class)">Moment</a></span> of the newest
            * @param 
            * @returns  Toybox::Time::Moment 
            */
            public function getNewestSampleTime() { }


            /**
            * Get the <span class='object_link'><a href="../Time/Moment.html" title="Toybox::Time::Moment (class)">Moment</a></span> of the oldest
            * @param 
            * @returns  Toybox::Time::Moment 
            */
            public function getOldestSampleTime() { }


            /**
            * Get the next <span class='object_link'><a href="SensorSample.html" title="Toybox::SensorHistory::SensorSample (class)">SensorSample</a></span> entry in
            * @param 
            * @returns  Toybox::SensorHistory::SensorSample 
            */
            public function next() { }


        }


        public class SensorSample {

            /**
            * The Sensor sample.
            * @type Toybox::Lang::Number, Toybox::Lang::Float
            */
            public var data;


            /**
            * The time of the Sensor sample.
            * @type Toybox::Time::Moment
            */
            public var when;


        }


    }

    module SensorLogging {

        public class SensorLogger {

            /**
            * Get statistics for the data gathered in the current session.
            * @param 
            * @returns  SensorLoggingStats 
            */
            public function getStats() { }


            /**
            * A new instance of SensorLogger.
            * @param options
            * @returns  SensorLogger 
            */
            public function initialize(options) { }


        }


        public class SensorLoggingStats {

            /**
            * The total number of logged samples.
            * @type Toybox::Lang::Number
            */
            public var sampleCount;


            /**
            * The total number of seconds of logged data.
            * @type Toybox::Lang::Number
            */
            public var samplePeriod;


            /**
            * A new instance of SensorLoggingStats.
            * @type SensorLoggingStats
            */
            public var initialize;


        }


    }

    module StringUtil {

        public class InvalidHexStringException {

            /**
            * A new instance of InvalidHexStringException.
            * @param msg
            * @returns  InvalidHexStringException 
            */
            public function initialize(msg) { }


        }


    }

    module System {

        public class AppNotInstalledException {

            /**
            * AppNotInstalledException constructor.
            * @param 
            * @returns  AppNotInstalledException 
            */
            public function initialize() { }


        }


        public class ClockTime {

            /**
            * The daylight savings time offset.
            * @type Toybox::Lang::Number
            */
            public var dst;


            /**
            * The hour of the day based on a 24-hour clock.
            * @type Toybox::Lang::Number
            */
            public var hour;


            /**
            * The minute of the current hour.
            * @type Toybox::Lang::Number
            */
            public var min;


            /**
            * The second of the current minute.
            * @type Toybox::Lang::Number
            */
            public var sec;


            /**
            * The time offset from UTC in seconds.
            * @type Toybox::Lang::Number
            */
            public var timeZoneOffset;


        }


        public class ConnectionInfo {

            /**
            * The state of the connection.
            * @type Toybox::Lang::Number
            */
            public var state;


        }


        public class DeviceSettings {

            /**
            * The activity tracking setting mode.
            * @type Toybox::Lang::Boolean
            */
            public var activityTrackingOn;


            /**
            * The number of alarms set on the device.
            * @type Toybox::Lang::Number
            */
            public var alarmCount;


            /**
            * Indicates if any communication channel is connected and available for use.
            * @type Toybox::Lang::Boolean
            */
            public var connectionAvailable;


            /**
            * The state of connections available to the device.
            * @type Toybox::Lang::Dictionary
            */
            public var connectionInfo;


            /**
            * The distance unit setting mode.
            * @type Toybox::Lang::Number
            */
            public var distanceUnits;


            /**
            * The Do Not Disturb setting mode.
            * @type Toybox::Lang::Boolean
            */
            public var doNotDisturb;


            /**
            * The elevation unit setting mode.
            * @type Toybox::Lang::Number
            */
            public var elevationUnits;


            /**
            * The current firmware version of the device.
            * @type Toybox::Lang::Array
            */
            public var firmwareVersion;


            /**
            * The first day of the week.
            * @type Toybox::Lang::Number
            */
            public var firstDayOfWeek;


            /**
            * The height unit setting mode.
            * @type Toybox::Lang::Number
            */
            public var heightUnits;


            /**
            * The physical buttons supported by the device.
            * @type Toybox::Lang::Number
            */
            public var inputButtons;


            /**
            * The clock mode mode.
            * @type Toybox::Lang::Boolean
            */
            public var is24Hour;


            /**
            * Indicates if widget glances are enabled on the device.
            * @type Toybox::Lang::Boolean
            */
            public var isGlanceModeEnabled;


            /**
            * The availability of a touch screen on the device.
            * @type Toybox::Lang::Boolean
            */
            public var isTouchScreen;


            /**
            * The Connect IQ version supported by the device.
            * @type Toybox::Lang::Array
            */
            public var monkeyVersion;


            /**
            * The number of active notifications.
            * @type Toybox::Lang::Number
            */
            public var notificationCount;


            /**
            * The pace unit setting mode.
            * @type Toybox::Lang::Number
            */
            public var paceUnits;


            /**
            * The part number of the device.
            * @type Toybox::Lang::String
            */
            public var partNumber;


            /**
            * The phone connection status mode.
            * @type Toybox::Lang::Boolean
            */
            public var phoneConnected;


            /**
            * This flag indicates whether the device screen requires burn-in protection.
            * @type Toybox::Lang::Boolean
            */
            public var requiresBurnInProtection;


            /**
            * The height of the device screen in pixels.
            * @type Toybox::Lang::Number
            */
            public var screenHeight;


            /**
            * The screen shape of the device.
            * @type Toybox::Lang::Number
            */
            public var screenShape;


            /**
            * The width of the device screen in pixels.
            * @type Toybox::Lang::Number
            */
            public var screenWidth;


            /**
            * The language being used by the system.
            * @type Toybox::Lang::Number
            */
            public var systemLanguage;


            /**
            * The temperature unit setting mode.
            * @type Toybox::Lang::Number
            */
            public var temperatureUnits;


            /**
            * The tone setting mode.
            * @type Object
            */
            public var tonesOn;


            /**
            * A unique alphanumeric device identifier.
            * @type Toybox::Lang::String
            */
            public var uniqueIdentifier;


            /**
            * The vibration setting mode.
            * @type Toybox::Lang::Boolean
            */
            public var vibrateOn;


            /**
            * The weight unit setting mode.
            * @type Toybox::Lang::Number
            */
            public var weightUnits;


        }


        public class Intent {

            /**
            *   
            * @type Object
            */
            public var arguments;


            /**
            *   
            * @type Object
            */
            public var uri;


            /**
            * Create an Intent.
            * @type Intent
            */
            public var initialize;


        }


        public class PreviousOperationNotCompleteException {

            /**
            * PreviousOperationNotCompleteException constructor.
            * @param msg
            * @returns  PreviousOperationNotCompleteException 
            */
            public function initialize(msg) { }


        }


        public class ServiceDelegate {

            /**
            * The callback method that is triggered when an activity is completed.
            * @param activity
            * @returns  Object 
            */
            public function onActivityCompleted(activity) { }


            /**
            * A callback method that is triggered in the background when a fitness goal
            * @param goalType
            * @returns  Object 
            */
            public function onGoalReached(goalType) { }


            /**
            * The callback method that is triggered in the background when an OAuth
            * @param 
            * @returns  Object 
            */
            public function onOAuthResponse() { }


            /**
            * The callback method that is triggered in the background at the configured
            * @param 
            * @returns  Object 
            */
            public function onSleepTime() { }


            /**
            * The callback method that is triggered in the background when a step goal is
            * @param 
            * @returns  Object 
            */
            public function onSteps() { }


            /**
            * A callback method that is triggered in the background when time-based
            * @param 
            * @returns  Object 
            */
            public function onTemporalEvent() { }


            /**
            * A callback method that is triggered in the background at the configured
            * @param 
            * @returns  Object 
            */
            public function onWakeTime() { }


        }


        public class SensorLoggingStats {

            /**
            * The total number of logged samples.
            * @type Toybox::Lang::Number
            */
            public var sampleCount;


            /**
            * The total number of seconds of logged data.
            * @type Toybox::Lang::Number
            */
            public var samplePeriod;


            /**
            * A new instance of SensorLoggingStats.
            * @type SensorLoggingStats
            */
            public var initialize;


        }


        public class UnexpectedAppTypeException {

            /**
            * UnexpectedAppTypeException constructor.
            * @param msg
            * @returns  UnexpectedAppTypeException 
            */
            public function initialize(msg) { }


        }


    }

    module Test {

        public class AssertException {

            /**
            * A new instance of AssertException.
            * @param message
            * @returns  AssertException 
            */
            public function initialize(message) { }


        }


        public class SensorLogger {

            /**
            * Get statistics for the data gathered in the current session.
            * @param 
            * @returns  SensorLoggingStats 
            */
            public function getStats() { }


            /**
            * A new instance of SensorLogger.
            * @param options
            * @returns  SensorLogger 
            */
            public function initialize(options) { }


        }


    }

    module Time {

        public class Duration {

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


    }

    module Gregorian {

        public class Info {

            /**
            * The altitude above mean sea level in meters (m).
            * @type Toybox::Lang::Float
            */
            public var altitude;


            /**
            * The ambient pressure in Pascals (Pa).
            * @type Toybox::Lang::Float
            */
            public var ambientPressure;


            /**
            * The average cadence during the current activity in revolutions per minute
            * @type Toybox::Lang::Number
            */
            public var averageCadence;


            /**
            * The average swim stroke distance from the previous interval in meters (m).
            * @type Toybox::Lang::Float
            */
            public var averageDistance;


            /**
            * The average heart rate during the current activity in beats per minute
            * @type Toybox::Lang::Number
            */
            public var averageHeartRate;


            /**
            * The average power during the current activity in Watts (W).
            * @type Toybox::Lang::Number
            */
            public var averagePower;


            /**
            * The average speed during the current activity in meters per second (mps).
            * @type Toybox::Lang::Float
            */
            public var averageSpeed;


            /**
            * The current bearing in radians.
            * @type Toybox::Lang::Float
            */
            public var bearing;


            /**
            * The bearing from the starting location to the destination in radians.
            * @type Toybox::Lang::Float
            */
            public var bearingFromStart;


            /**
            * The calories burned throughout the current activity in kilocalories (kcal).
            * @type Toybox::Lang::Number
            */
            public var calories;


            /**
            * The current cadence in revolutions per minute (rpm).
            * @type Toybox::Lang::Number
            */
            public var currentCadence;


            /**
            * The true north referenced heading in radians.
            * @type Toybox::Lang::Float
            */
            public var currentHeading;


            /**
            * The current heart rate in beats per minute (bpm).
            * @type Toybox::Lang::Number
            */
            public var currentHeartRate;


            /**
            * The current location.
            * @type Toybox::Position::Location
            */
            public var currentLocation;


            /**
            * The current GPS accuracy.
            * @type Toybox::Lang::Number
            */
            public var currentLocationAccuracy;


            /**
            * The current power in Watts (W).
            * @type Toybox::Lang::Number
            */
            public var currentPower;


            /**
            * The current speed in meters per second (mps).
            * @type Toybox::Lang::Float
            */
            public var currentSpeed;


            /**
            * The distance to the destination in meters (m).
            * @type Toybox::Lang::Float
            */
            public var distanceToDestination;


            /**
            * The distance to the next point in meters (m).
            * @type Toybox::Lang::Float
            */
            public var distanceToNextPoint;


            /**
            * The elapsed distance of the current activity in meters (m).
            * @type Toybox::Lang::Float
            */
            public var elapsedDistance;


            /**
            * Elapsed time of the current activity in milliseconds (ms).
            * @type Toybox::Lang::Number
            */
            public var elapsedTime;


            /**
            * The elevation at the destination in meters (m).
            * @type Toybox::Lang::Float
            */
            public var elevationAtDestination;


            /**
            * The elevation at the next point in meters (m).
            * @type Toybox::Lang::Float
            */
            public var elevationAtNextPoint;


            /**
            * The current energy expenditure in kilocalories per minute (kcals/min).
            * @type Toybox::Lang::Float
            */
            public var energyExpenditure;


            /**
            * The current front bicycle derailleur index.
            * @type Toybox::Lang::Number
            */
            public var frontDerailleurIndex;


            /**
            * The front bicycle derailleur maximum index.
            * @type Toybox::Lang::Number
            */
            public var frontDerailleurMax;


            /**
            * The front bicycle derailleur gear size in number of teeth.
            * @type Toybox::Lang::Number
            */
            public var frontDerailleurSize;


            /**
            * The maximum cadence recorded during the current activity in revolutions per
            * @type Toybox::Lang::Number
            */
            public var maxCadence;


            /**
            * The maximum heart rate recorded during the current activity in beats per
            * @type Toybox::Lang::Number
            */
            public var maxHeartRate;


            /**
            * The maximum power recorded during the current activity in Watts (W).
            * @type Toybox::Lang::Number
            */
            public var maxPower;


            /**
            * The maximum speed recorded during the current activity in meters per second
            * @type Toybox::Lang::Float
            */
            public var maxSpeed;


            /**
            * The mean sea level barometric pressure in Pascals (Pa).
            * @type Toybox::Lang::Float
            */
            public var meanSeaLevelPressure;


            /**
            * The name of the destination.
            * @type Toybox::Lang::String
            */
            public var nameOfDestination;


            /**
            * The name of the next point.
            * @type Toybox::Lang::String
            */
            public var nameOfNextPoint;


            /**
            * The distance to the nearest point on the current course in meters (m).
            * @type Toybox::Lang::Float
            */
            public var offCourseDistance;


            /**
            * The raw ambient pressure in Pascals (Pa).
            * @type Toybox::Lang::Float
            */
            public var rawAmbientPressure;


            /**
            * The current front bicycle derailleur index.
            * @type Toybox::Lang::Number
            */
            public var rearDerailleurIndex;


            /**
            * The rear bicycle derailleur maximum index.
            * @type Toybox::Lang::Number
            */
            public var rearDerailleurMax;


            /**
            * The rear bicycle derailleur gear size in number of teeth.
            * @type Toybox::Lang::Number
            */
            public var rearDerailleurSize;


            /**
            * The starting location of the current activity.
            * @type Toybox::Position::Location
            */
            public var startLocation;


            /**
            * The starting time of the current activity.
            * @type Toybox::Time::Moment
            */
            public var startTime;


            /**
            * The swim stroke type from the previous length.
            * @type Toybox::Lang::Number
            */
            public var swimStrokeType;


            /**
            * The SWOLF score from the previous length.
            * @type Toybox::Lang::Number
            */
            public var swimSwolf;


            /**
            * The recording timer state.
            * @type Toybox::Lang::Number
            */
            public var timerState;


            /**
            * The current Timer value in milliseconds (ms).
            * @type Toybox::Lang::Number
            */
            public var timerTime;


            /**
            * The total ascent during the current activity in meters (m).
            * @type Toybox::Lang::Float
            */
            public var totalAscent;


            /**
            * The total descent during the current activity in meters (m).
            * @type Toybox::Lang::Float
            */
            public var totalDescent;


            /**
            * The current track in radians.
            * @type Toybox::Lang::Float
            */
            public var track;


            /**
            * The Training Effect score of the current activity.
            * @type Toybox::Lang::Float
            */
            public var trainingEffect;


        }


        public class Moment {

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


        public class RealTimeClockNotValidException {

            /**
            * A new instance of RealTimeClockNotValidException.
            * @param msg
            * @returns  RealTimeClockNotValidException 
            */
            public function initialize(msg) { }


        }


    }

    module Timer {

        public class Timer {

            /**
            * Start the Timer.
            * @param callback
            * @param  time
            * @param  repeat
            * @returns  Object 
            */
            public function start(callback, time, repeat) { }


            /**
            * Stops the Timer from running.
            * @param 
            * @returns  Object 
            */
            public function stop() { }


        }


    }

    module UserProfile {

        public class ToneProfile {

            /**
            * The duration of the vibration in milliseconds (ms).
            * @type Object
            */
            public var duration;


            /**
            * The frequency of the tone in hertz (hz).
            * @type Object
            */
            public var frequency;


            /**
            * Create a new ToneProfile.
            * @type ToneProfile
            */
            public var initialize;


        }


    }

    module WatchUi {

        public class AnimationDelegate {

            /**
            * Handle an Animation event.
            * @param event
            * @param  options
            * @returns  Object 
            */
            public function onAnimationEvent(event, options) { }


        }


        public class AnimationLayer {

            /**
            * getDc will always return <code>null</code>, as the dc buffer of animations
            * @param 
            * @returns  Object 
            */
            public function getDc() { }


            /**
            * Get the animation resource.
            * @param 
            * @returns  Toybox::WatchUi::AnimationResource 
            */
            public function getResource() { }


            /**
            * either an animation resource id or a <span class='object_link'><a href="AnimationResource.html" title="Toybox::WatchUi::AnimationResource (class)">WatchUi.AnimationResource</a></span>.
            * @param rez
            * @param  options
            * @returns  Toybox::WatchUi::Animation 
            */
            public function initialize(rez, options) { }


            /**
            * Play animation, animation must be added to and not abandoned by the view
            * @param options
            * @returns  Toybox::Lang::Boolean 
            */
            public function play(options) { }


            /**
            * Stop a playing animation.
            * @param 
            * @returns  Object 
            */
            public function stop() { }


        }


        public class AnimationResource {

            /**
            * Get the target frame rate of an animation resource.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function getFrameRate() { }


            /**
            * Get the height of an animation resource.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function getHeight() { }


            /**
            * Get the number of frames of an animation resource.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function getNumberOfFrames() { }


            /**
            * Get the width of an animation resource.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function getWidth() { }


            /**
            * Get info about an animation resource as a String.
            * @param 
            * @returns  Toybox::Lang::String 
            */
            public function toString() { }


        }


        public class BehaviorDelegate {

            /**
            * A new instance of BehaviorDelegate.
            * @param 
            * @returns  BehaviorDelegate 
            */
            public function initialize() { }


            /**
            * Represents the <em>Back</em> behavior.
            * @param 
            * @returns  Toybox::Lang::Boolean 
            */
            public function onBack() { }


            /**
            * Represents the <em>Menu</em> behavior.
            * @param 
            * @returns  Toybox::Lang::Boolean 
            */
            public function onMenu() { }


            /**
            * Represents the <em>Next</em> behavior.
            * @param 
            * @returns  Toybox::Lang::Boolean 
            */
            public function onNextMode() { }


            /**
            * Represents the <em>Next</em> <em>Page</em> behavior.
            * @param 
            * @returns  Toybox::Lang::Boolean 
            */
            public function onNextPage() { }


            /**
            * Represents the <em>Previous</em> <em>Mode</em> behavior.
            * @param 
            * @returns  Toybox::Lang::Boolean 
            */
            public function onPreviousMode() { }


            /**
            * Represents the <em>Previous</em> <em>Page</em> behavior.
            * @param 
            * @returns  Toybox::Lang::Boolean 
            */
            public function onPreviousPage() { }


            /**
            * Represents the <em>Selection</em> behavior.
            * @param 
            * @returns  Toybox::Lang::Boolean 
            */
            public function onSelect() { }


        }


        public class BufferedBitmap {

            /**
            * Get the Dc to draw on the buffered bitmap.
            * @param 
            * @returns  Toybox::Graphics::Dc 
            */
            public function getDc() { }


            /**
            * <code>null</code> if this surface uses the system palette.
            * @param 
            * @returns  Toybox::Lang::Array 
            */
            public function getPalette() { }


            /**
            * A new instance of BufferedBitmap.
            * @param options
            * @returns  BufferedBitmap 
            */
            public function initialize(options) { }


            /**
            *   
            * @param palette
            * @returns  Object 
            */
            public function setPalette(palette) { }


        }


        public class InvalidBitmapResourceException {

            /**
            * Constructor.
            * @param msg
            * @returns  InvalidBitmapResourceException 
            */
            public function initialize(msg) { }


        }


        public class CustomButton {

            /**
            * Called by the system to draw the button in the Media Player.
            * @param image
            * @param  highlighted
            * @returns  Toybox::WatchUi::BitmapResource 
            */
            public function getImage(image, highlighted) { }


            /**
            * Called by the system to determine if the current state of the button.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function getState() { }


            /**
            * Called by the system to draw the name of the button.
            * @param state
            * @returns  Toybox::Lang::String 
            */
            public function getText(state) { }


        }


        public class CheckboxMenu {

            /**
            * Add a CheckboxMenuItem to a CheckboxMenu.
            * @param item
            * @returns  Object 
            */
            public function addItem(item) { }


            /**
            * A new instance of CheckboxMenu.
            * @param options
            * @returns  CheckboxMenu 
            */
            public function initialize(options) { }


        }


        public class CheckboxMenuItem {

            /**
            * A new instance of CheckboxMenuItem.
            * @param label
            * @param  subLabel
            * @param  identifier
            * @param  checked
            * @param  options
            * @returns  CheckboxMenuItem 
            */
            public function initialize(label, subLabel, identifier, checked, options) { }


            /**
            * Get a CheckboxMenuItem state.
            * @param 
            * @returns  Toybox::Lang::Boolean 
            */
            public function isChecked() { }


            /**
            * Set a CheckboxMenuItem state.
            * @param checked
            * @returns  Object 
            */
            public function setChecked(checked) { }


        }


        public class ClickEvent {

            /**
            * Get the coordinates of a click event.
            * @param 
            * @returns  Toybox::Lang::Array 
            */
            public function getCoordinates() { }


            /**
            * Get the type of click event.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function getType() { }


        }


        public class Confirmation {

            /**
            * A new instance of Confirmation.
            * @param message
            * @returns  Confirmation 
            */
            public function initialize(message) { }


        }


        public class ConfirmationDelegate {

            /**
            * A confirmation selection was made.
            * @param response
            * @returns  Object 
            */
            public function onResponse(response) { }


        }


        public class CustomMenu {

            /**
            * Add a CustomMenuItem to a CustomMenu.
            * @param item
            * @returns  Object 
            */
            public function addItem(item) { }


            /**
            * Draw the CustomMenu footer.
            * @param dc
            * @returns  Object 
            */
            public function drawFooter(dc) { }


            /**
            * Draw the CustomMenu foreground.
            * @param dc
            * @returns  Object 
            */
            public function drawForeground(dc) { }


            /**
            * Draw the CustomMenu title.
            * @param dc
            * @returns  Object 
            */
            public function drawTitle(dc) { }


            /**
            * A new instance of CustomMenu.
            * @param itemHeight
            * @param  backgroundColor
            * @param  options
            * @returns  CustomMenu 
            */
            public function initialize(itemHeight, backgroundColor, options) { }


            /**
            * Set the background color.
            * @param color
            * @returns  Object 
            */
            public function setBackgroundColor(color) { }


            /**
            * Set the footer drawable.
            * @param drawable
            * @returns  Object 
            */
            public function setFooter(drawable) { }


            /**
            * Set the foreground drawable.
            * @param drawable
            * @returns  Object 
            */
            public function setForeground(drawable) { }


            /**
            * Set the title drawable.
            * @param drawable
            * @returns  Object 
            */
            public function setTitle(drawable) { }


        }


        public class CustomMenuItem {

            /**
            * Draw method for a CustomMenuItem.
            * @param dc
            * @returns  Object 
            */
            public function draw(dc) { }


            /**
            * A new instance of CustomMenuItem.
            * @param identifier
            * @param  options
            * @returns  CustomMenuItem 
            */
            public function initialize(identifier, options) { }


            /**
            * Get the CustomMenuItem focus state.
            * @param 
            * @returns  Toybox::Lang::Boolean 
            */
            public function isFocused() { }


            /**
            * Get the CustomMenuItem selected state.
            * @param 
            * @returns  Toybox::Lang::Boolean 
            */
            public function isSelected() { }


            /**
            * Set a CustomMenuItem Drawable.
            * @param drawable
            * @returns  Object 
            */
            public function setDrawable(drawable) { }


        }


        public class DataField {

            /**
            * Retrieve <span class='object_link'><a href="../Activity/Info.html" title="Toybox::Activity::Info (class)">Activity.Info</a></span> in a DataField.
            * @param info
            * @returns  Object 
            */
            public function compute(info) { }


            /**
            * Create a new custom FIT <span class='object_link'><a href="../FitContributor/Field.html" title="Toybox::FitContributor::Field (class)">Field</a></span>.
            * @param name
            * @param  fieldId
            * @param  type
            * @param  options
            * @returns  Toybox::FitContributor::Field 
            */
            public function createField(name, fieldId, type, options) { }


            /**
            * Get the current Data Field background color.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function getBackgroundColor() { }


            /**
            * Get the screen regions that are obscured.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function getObscurityFlags() { }


            /**
            * A new instance of DataField.
            * @param 
            * @returns  DataField 
            */
            public function initialize() { }


            /**
            * The device has transitioned to the next multisport leg.
            * @param 
            * @returns  Object 
            */
            public function onNextMultisportLeg() { }


            /**
            * A lap event has occurred.
            * @param 
            * @returns  Object 
            */
            public function onTimerLap() { }


            /**
            * The activity timer is paused.
            * @param 
            * @returns  Object 
            */
            public function onTimerPause() { }


            /**
            * The current activity has ended.
            * @param 
            * @returns  Object 
            */
            public function onTimerReset() { }


            /**
            * The activity time has resumed.
            * @param 
            * @returns  Object 
            */
            public function onTimerResume() { }


            /**
            * The activity timer has started.
            * @param 
            * @returns  Object 
            */
            public function onTimerStart() { }


            /**
            * The activity timer has stopped.
            * @param 
            * @returns  Object 
            */
            public function onTimerStop() { }


            /**
            * The current workout step is complete.
            * @param 
            * @returns  Object 
            */
            public function onWorkoutStepComplete() { }


        }


        public class Drawable {

            /**
            * The clip height of the Drawable object.
            * @type Toybox::Lang::Number
            */
            public var height;


            /**
            * The ID used to identify the Drawable object.
            * @type Toybox::Lang::String
            */
            public var identifier;


            /**
            * The absolute, on-screen x-coordinate of the Drawable object.
            * @type Toybox::Lang::Number
            */
            public var locX;


            /**
            * The absolute, on-screen y-coordinate of the Drawable object.
            * @type Toybox::Lang::Number
            */
            public var locY;


            /**
            * The clip width of the Drawable object.
            * @type Toybox::Lang::Number
            */
            public var width;


            /**
            * Draw an object to the device context (<span class='object_link'><a href="../Graphics/Dc.html" title="Toybox::Graphics::Dc (class)">Dc</a></span>).
            * @type Object
            */
            public var draw;


            /**
            * A new instance of Drawable.
            * @type Drawable
            */
            public var initialize;


            /**
            * Set the on-screen location for a Drawable object.
            * @type Object
            */
            public var setLocation;


            /**
            * Set the size of a Drawable object.
            * @type Object
            */
            public var setSize;


        }


        public class FontResource {

        }


        public class GlanceView {

            /**
            * A new instance of GlanceView.
            * @param 
            * @returns  GlanceView 
            */
            public function initialize() { }


        }


        public class GlanceViewDelegate {

            /**
            * A new instance of GlanceViewDelegate.
            * @param 
            * @returns  GlanceViewDelegate 
            */
            public function initialize() { }


            /**
            * Invoked when certain glance event occurs, none for now.
            * @param options
            * @returns  Object 
            */
            public function onGlanceEvent(options) { }


        }


        public class IconMenuItem {

            /**
            * Get IconMenuItem icon.
            * @param 
            * @returns  Toybox::WatchUi::Drawable 
            */
            public function getIcon() { }


            /**
            * A new instance of IconMenuItem.
            * @param label
            * @param  subLabel
            * @param  identifier
            * @param  icon
            * @param  options
            * @returns  IconMenuItem 
            */
            public function initialize(label, subLabel, identifier, icon, options) { }


            /**
            * Set the IconMenuItem icon.
            * @param icon
            * @returns  Object 
            */
            public function setIcon(icon) { }


        }


        public class InputDelegate {

            /**
            * A touch screen hold event has occurred.
            * @param clickEvent
            * @returns  Toybox::Lang::Boolean 
            */
            public function onHold(clickEvent) { }


            /**
            * A physical button has been pressed and released.
            * @param keyEvent
            * @returns  Toybox::Lang::Boolean 
            */
            public function onKey(keyEvent) { }


            /**
            * A physical button has been pressed down.
            * @param keyEvent
            * @returns  Toybox::Lang::Boolean 
            */
            public function onKeyPressed(keyEvent) { }


            /**
            * A physical button has been released.
            * @param keyEvent
            * @returns  Toybox::Lang::Boolean 
            */
            public function onKeyReleased(keyEvent) { }


            /**
            * A touch screen release event has occurred.
            * @param clickEvent
            * @returns  Toybox::Lang::Boolean 
            */
            public function onRelease(clickEvent) { }


            /**
            * The state of a <span class='object_link'><a href="Selectable.html" title="Toybox::WatchUi::Selectable (class)">Selectable</a></span> has changed.
            * @param selectableEvent
            * @returns  Toybox::Lang::Boolean 
            */
            public function onSelectable(selectableEvent) { }


            /**
            * A touch screen swipe event has occurred.
            * @param swipeEvent
            * @returns  Toybox::Lang::Boolean 
            */
            public function onSwipe(swipeEvent) { }


            /**
            * A screen tap event has occurred.
            * @param clickEvent
            * @returns  Toybox::Lang::Boolean 
            */
            public function onTap(clickEvent) { }


        }


        public class InvalidMenuItemTypeException {

            /**
            * A new instance of InvalidMenuItemTypeException.
            * @param msg
            * @returns  InvalidMenuItemTypeException 
            */
            public function initialize(msg) { }


        }


        public class InvalidPointException {

            /**
            * A new instance of InvalidPointException.
            * @param msg
            * @returns  InvalidPointException 
            */
            public function initialize(msg) { }


        }


        public class InvalidSelectableStateException {

            /**
            * A new instance of InvalidSelectableStateException.
            * @param 
            * @returns  InvalidSelectableStateException 
            */
            public function initialize() { }


        }


        public class KeyEvent {

            /**
            * Get the key value of this event.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function getKey() { }


            /**
            * Get the type of click event.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function getType() { }


        }


        public class AnimationLayer {

            /**
            * getDc will always return <code>null</code>, as the dc buffer of animations
            * @param 
            * @returns  Object 
            */
            public function getDc() { }


            /**
            * Get the animation resource.
            * @param 
            * @returns  Toybox::WatchUi::AnimationResource 
            */
            public function getResource() { }


            /**
            * either an animation resource id or a <span class='object_link'><a href="AnimationResource.html" title="Toybox::WatchUi::AnimationResource (class)">WatchUi.AnimationResource</a></span>.
            * @param rez
            * @param  options
            * @returns  Toybox::WatchUi::Animation 
            */
            public function initialize(rez, options) { }


            /**
            * Play animation, animation must be added to and not abandoned by the view
            * @param options
            * @returns  Toybox::Lang::Boolean 
            */
            public function play(options) { }


            /**
            * Stop a playing animation.
            * @param 
            * @returns  Object 
            */
            public function stop() { }


        }


        public class MapMarker {

            /**
            * Get the location for the MapMarker.
            * @param 
            * @returns  Toybox::Position::Location 
            */
            public function getLocation() { }


            /**
            * A new instance of MapMarker.
            * @param location
            * @returns  MapMarker 
            */
            public function initialize(location) { }


            /**
            * Set a bitmap icon to use for the MapMarker object on a
            * @param icon
            * @param  x
            * @param  y
            * @returns  Object 
            */
            public function setIcon(icon, x, y) { }


            /**
            * Set a label for the map marker to draw on the map.
            * @param label
            * @returns  Object 
            */
            public function setLabel(label) { }


        }


        public class MapPolyline {

            /**
            * Add a Location or Locations to the MapPolyline object location
            * @param location
            * @returns  Object 
            */
            public function addLocation(location) { }


            /**
            * Clear all the <span class='object_link'><a href="../Position/Location.html" title="Toybox::Position::Location (class)">Location</a></span> objects from the
            * @param 
            * @returns  Object 
            */
            public function clear() { }


            /**
            * Get the <span class='object_link'><a href="../Position/Location.html" title="Toybox::Position::Location (class)">Location</a></span> object at a provided index in
            * @param index
            * @returns  Toybox::Position::Location 
            */
            public function getLocation(index) { }


            /**
            * Get the number of <span class='object_link'><a href="../Position/Location.html" title="Toybox::Position::Location (class)">Location</a></span> objects in this
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function numLocations() { }


            /**
            * Set the color of the MapPolyline to draw on the map.
            * @param color
            * @returns  Object 
            */
            public function setColor(color) { }


            /**
            * Set the width of the MapPolyline to draw on the map.
            * @param width
            * @returns  Object 
            */
            public function setWidth(width) { }


        }


        public class MapTrackView {

            /**
            * A new instance of MapTrackView.
            * @param 
            * @returns  MapTrackView 
            */
            public function initialize() { }


        }


        public class MapView {

            /**
            * Clear all the objects from the map.
            * @param 
            * @returns  Object 
            */
            public function clear() { }


            /**
            * Get the current mode for the map in this MapView.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function getMapMode() { }


            /**
            * A new instance of MapView.
            * @param 
            * @returns  MapView 
            */
            public function initialize() { }


            /**
            * Add a <span class='object_link'><a href="MapMarker.html" title="Toybox::WatchUi::MapMarker (class)">MapMarker</a></span> object or an
            * @param markers
            * @returns  Object 
            */
            public function setMapMarker(markers) { }


            /**
            * Set the mode for the map in this MapView.
            * @param mode
            * @returns  Object 
            */
            public function setMapMode(mode) { }


            /**
            * Select the area of the map to render on the screen with a bounding box.
            * @param topLeft
            * @param  bottomRight
            * @returns  Object 
            */
            public function setMapVisibleArea(topLeft, bottomRight) { }


            /**
            * Add <span class='object_link'><a href="MapPolyline.html" title="Toybox::WatchUi::MapPolyline (class)">MapPolyline</a></span> object to be rendered on the
            * @param polyline
            * @returns  Object 
            */
            public function setPolyline(polyline) { }


            /**
            * Set the area on the screen to focus the map.
            * @param topLeftX
            * @param  topLeftY
            * @param  bottomRightX
            * @param  bottomRightY
            * @returns  Object 
            */
            public function setScreenVisibleArea(topLeftX, topLeftY, bottomRightX, bottomRightY) { }


        }


        public class CheckboxMenu {

            /**
            * Add a CheckboxMenuItem to a CheckboxMenu.
            * @param item
            * @returns  Object 
            */
            public function addItem(item) { }


            /**
            * A new instance of CheckboxMenu.
            * @param options
            * @returns  CheckboxMenu 
            */
            public function initialize(options) { }


        }


        public class Menu2 {

            /**
            * Add a MenuItem to a Menu2.
            * @param item
            * @returns  Object 
            */
            public function addItem(item) { }


            /**
            * Delete a MenuItem from a Menu2.
            * @param index
            * @returns  Object 
            */
            public function deleteItem(index) { }


            /**
            * Find a MenuItem by ID in a Menu2.
            * @param identifier
            * @returns  Toybox::Lang::Number 
            */
            public function findItemById(identifier) { }


            /**
            * Get a MenuItem from a Menu2.
            * @param index
            * @returns  Toybox::WatchUi::MenuItem 
            */
            public function getItem(index) { }


            /**
            * A new instance of Menu2.
            * @param options
            * @returns  Menu2 
            */
            public function initialize(options) { }


            /**
            * Set the focus of a MenuItem in a Menu2.
            * @param focus
            * @returns  Object 
            */
            public function setFocus(focus) { }


            /**
            * Set a Menu2 title.
            * @param title
            * @returns  Object 
            */
            public function setTitle(title) { }


            /**
            * Update a MenuItem in a Menu2.
            * @param item
            * @param  index
            * @returns  Object 
            */
            public function updateItem(item, index) { }


        }


        public class Menu2InputDelegate {

            /**
            * A Menu2 Back key was pressed.
            * @param 
            * @returns  Object 
            */
            public function onBack() { }


            /**
            * A Menu2 Done item was selected.
            * @param 
            * @returns  Object 
            */
            public function onDone() { }


            /**
            * A CustomMenu footer was selected.
            * @param 
            * @returns  Object 
            */
            public function onFooter() { }


            /**
            * A Menu2 MenuItem was selected.
            * @param item
            * @returns  Object 
            */
            public function onSelect(item) { }


            /**
            * A CustomMenu title was selected.
            * @param 
            * @returns  Object 
            */
            public function onTitle() { }


            /**
            * A Menu2 is preparing to wrap.
            * @param key
            * @returns  Object 
            */
            public function onWrap(key) { }


        }


        public class MenuInputDelegate {

            /**
            * A Menu item was chosen.
            * @param item
            * @returns  Object 
            */
            public function onMenuItem(item) { }


        }


        public class CheckboxMenuItem {

            /**
            * A new instance of CheckboxMenuItem.
            * @param label
            * @param  subLabel
            * @param  identifier
            * @param  checked
            * @param  options
            * @returns  CheckboxMenuItem 
            */
            public function initialize(label, subLabel, identifier, checked, options) { }


            /**
            * Get a CheckboxMenuItem state.
            * @param 
            * @returns  Toybox::Lang::Boolean 
            */
            public function isChecked() { }


            /**
            * Set a CheckboxMenuItem state.
            * @param checked
            * @returns  Object 
            */
            public function setChecked(checked) { }


        }


        public class NumberPicker {

            /**
            * A new instance of NumberPicker.
            * @param mode
            * @param  initialValue
            * @returns  NumberPicker 
            */
            public function initialize(mode, initialValue) { }


        }


        public class NumberPickerDelegate {

            /**
            * A number was entered in a NumberPicker.
            * @param value
            * @returns  Object 
            */
            public function onNumberPicked(value) { }


        }


        public class NumberPicker {

            /**
            * A new instance of NumberPicker.
            * @param mode
            * @param  initialValue
            * @returns  NumberPicker 
            */
            public function initialize(mode, initialValue) { }


        }


        public class NumberPickerDelegate {

            /**
            * A number was entered in a NumberPicker.
            * @param value
            * @returns  Object 
            */
            public function onNumberPicked(value) { }


        }


        public class PickerFactory {

            /**
            * Generate a Drawable instance for an item.
            * @param item
            * @param  isSelected
            * @returns  Toybox::WatchUi::Drawable 
            */
            public function getDrawable(item, isSelected) { }


            /**
            * Get the number of items in the PickerFactory.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function getSize() { }


            /**
            * Return value for an item.
            * @param item
            * @returns  Toybox::Lang::Object 
            */
            public function getValue(item) { }


        }


        public class ProgressBar {

            /**
            * A new instance of ProgressBar.
            * @param displayString
            * @param  startValue
            * @returns  ProgressBar 
            */
            public function initialize(displayString, startValue) { }


            /**
            * Set the string to display on the ProgressBar.
            * @param displayString
            * @returns  Object 
            */
            public function setDisplayString(displayString) { }


            /**
            * Set the value of the ProgressBar.
            * @param progressValue
            * @returns  Object 
            */
            public function setProgress(progressValue) { }


        }


        public class InvalidSelectableStateException {

            /**
            * A new instance of InvalidSelectableStateException.
            * @param 
            * @returns  InvalidSelectableStateException 
            */
            public function initialize() { }


        }


        public class SelectableEvent {

            /**
            * Get the instance of the manipulated <span class='object_link'><a href="Selectable.html" title="Toybox::WatchUi::Selectable (class)">Selectable</a></span>.
            * @param 
            * @returns  Toybox::Lang::Object 
            */
            public function getInstance() { }


            /**
            * Get the previous state of the Selectable that generated the event.
            * @param 
            * @returns  Toybox::Lang::Symbol 
            */
            public function getPreviousState() { }


        }


        public class SimpleDataField {

            /**
            * The field label String.
            * @type Object
            */
            public var label;


            /**
            * Retrieve <span class='object_link'><a href="../Activity/Info.html" title="Toybox::Activity::Info (class)">Activity.Info</a></span> in a SimpleDataField.
            * @type Object
            */
            public var compute;


            /**
            * A new instance of SimpleDataField.
            * @type SimpleDataField
            */
            public var initialize;


        }


        public class SwipeEvent {

            /**
            * Get the direction of the swipe.
            * @param 
            * @returns  Toybox::Lang::Number 
            */
            public function getDirection() { }


        }


        public class Text {

            /**
            * Draw Text to the device context (<span class='object_link'><a href="../Graphics/Dc.html" title="Toybox::Graphics::Dc (class)">Dc</a></span>).
            * @type Object
            */
            public var draw;


            /**
            * A new instance of Text.
            * @type Text
            */
            public var initialize;


            /**
            * Set the background color of a Text object.
            * @type Object
            */
            public var setBackgroundColor;


            /**
            * Set the color of a Text object.
            * @type Object
            */
            public var setColor;


            /**
            * Set the font face of a Text object.
            * @type Object
            */
            public var setFont;


            /**
            * Set the justification of a Text object.
            * @type Object
            */
            public var setJustification;


            /**
            * Set the text string of a Text object.
            * @type Object
            */
            public var setText;


        }


        public class TextArea {

            /**
            * Draw Text to the device context (<span class='object_link'><a href="../Graphics/Dc.html" title="Toybox::Graphics::Dc (class)">Dc</a></span>).
            * @type Object
            */
            public var draw;


            /**
            * A new instance of TextArea.
            * @type TextArea
            */
            public var initialize;


            /**
            * Set the background color of a Text object.
            * @type Object
            */
            public var setBackgroundColor;


            /**
            * Set the color of a Text object.
            * @type Object
            */
            public var setColor;


            /**
            * Set the font face of a Text object.
            * @type Object
            */
            public var setFont;


            /**
            * Set the justification of a Text object.
            * @type Object
            */
            public var setJustification;


            /**
            * Set the text string of a Text object.
            * @type Object
            */
            public var setText;


        }


        public class TextPicker {

            /**
            * A new instance of TextPicker.
            * @param initialText
            * @returns  TextPicker 
            */
            public function initialize(initialText) { }


        }


        public class TextPickerDelegate {

            /**
            * Text entry has been canceled.
            * @param 
            * @returns  Object 
            */
            public function onCancel() { }


            /**
            * A text string was entered into a TextPicker.
            * @param text
            * @param  changed
            * @returns  Object 
            */
            public function onTextEntered(text, changed) { }


        }


        public class ToggleMenuItem {

            /**
            * Get a ToggleMenuItem label substring.
            * @param 
            * @returns  Toybox::Lang::String, Toybox::Lang::Dictionary 
            */
            public function getSubLabel() { }


            /**
            * A new instance of ToggleMenuItem.
            * @param label
            * @param  subLabel
            * @param  identifier
            * @param  enabled
            * @param  options
            * @returns  ToggleMenuItem 
            */
            public function initialize(label, subLabel, identifier, enabled, options) { }


            /**
            * Get a ToggleMenuItem state.
            * @param 
            * @returns  Toybox::Lang::Boolean 
            */
            public function isEnabled() { }


            /**
            * Set a ToggleMenuItem state.
            * @param enabled
            * @returns  Object 
            */
            public function setEnabled(enabled) { }


            /**
            * Set a ToggleMenuItem label substring.
            * @param subLabel
            * @returns  Object 
            */
            public function setSubLabel(subLabel) { }


        }


        public class GlanceView {

            /**
            * A new instance of GlanceView.
            * @param 
            * @returns  GlanceView 
            */
            public function initialize() { }


        }


        public class WatchFace {

            /**
            * A new instance of WatchFace.
            * @param 
            * @returns  WatchFace 
            */
            public function initialize() { }


            /**
            * The device is entering low power mode.
            * @param 
            * @returns  Object 
            */
            public function onEnterSleep() { }


            /**
            * The device is exiting low power mode.
            * @param 
            * @returns  Object 
            */
            public function onExitSleep() { }


            /**
            * Update a portion of the screen.
            * @param dc
            * @returns  Object 
            */
            public function onPartialUpdate(dc) { }


        }


        public class WatchFaceDelegate {

            /**
            * Handle a partial update exceeding the power budget.
            * @param powerInfo
            * @returns  Object 
            */
            public function onPowerBudgetExceeded(powerInfo) { }


        }


        public class WatchFacePowerInfo {

            /**
            * The average partial update execution time
            * @type Toybox::Lang::Float
            */
            public var executionTimeAverage;


            /**
            * The maximum allowable partial update execution time
            * @type Toybox::Lang::Float
            */
            public var executionTimeLimit;


        }
    }
}

