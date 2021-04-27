module Toybox {

    module Activity {

            /**
            * Get the current Activity Info.
            * @returns  Toybox.Activity.Info
            */
            public function getActivityInfo() { }


            /**
            * Get information about the current workout step.Supported Devices:Captain MarvelD2™ AirDarth Vader™Descent™ Mk2 / Descent™ Mk2iEdge® 1030Edge® 1030 PlusEdge® 130Edge® 130 PlusEdge® 530Edge® 830fēnix® 5 Plusfēnix® 6 / 6 Solar / 6 Dual Powerfēnix® 6 Pro / 6 Sapphire / 6 Pro Solar / 6 Pro Dual Power / quatix® 6fēnix® 6S / 6S Solar / 6S Dual Powerfēnix® 6S Pro / 6S Sapphire / 6S Pro Solar / 6S Pro Dual Powerfēnix® 6X Pro / 6X Sapphire / 6X Pro Solar / tactix® Delta Sapphire / Delta Solar / Delta Solar - Ballistics Edition / quatix® 6X / 6X Solar / 6X Dual PowerFirst AvengerForerunner® 245Forerunner® 245 MusicForerunner® 645 MusicForerunner® 745Forerunner® 945MARQ™ AdventurerMARQ™ AthleteMARQ™ AviatorMARQ® Captain / MARQ® Captain: American Magic EditionMARQ™ CommanderMARQ™ DriverMARQ™ ExpeditionMARQ™ GolferRey™Venu™Venu™ Mercedes-Benz® CollectionVenu® SqVenu® Sq. Music Editionvívoactive® 3 Musicvívoactive® 3 Music LTEvívoactive® 4vívoactive® 4S
            * @returns  Toybox.Activity.WorkoutStepInfo
            */
            public function getCurrentWorkoutStep() { }


            /**
            * Get information about the next workout step.Supported Devices:Captain MarvelD2™ AirDarth Vader™Descent™ Mk2 / Descent™ Mk2iEdge® 1030Edge® 1030 PlusEdge® 130Edge® 130 PlusEdge® 530Edge® 830fēnix® 5 Plusfēnix® 6 / 6 Solar / 6 Dual Powerfēnix® 6 Pro / 6 Sapphire / 6 Pro Solar / 6 Pro Dual Power / quatix® 6fēnix® 6S / 6S Solar / 6S Dual Powerfēnix® 6S Pro / 6S Sapphire / 6S Pro Solar / 6S Pro Dual Powerfēnix® 6X Pro / 6X Sapphire / 6X Pro Solar / tactix® Delta Sapphire / Delta Solar / Delta Solar - Ballistics Edition / quatix® 6X / 6X Solar / 6X Dual PowerFirst AvengerForerunner® 245Forerunner® 245 MusicForerunner® 645 MusicForerunner® 745Forerunner® 945MARQ™ AdventurerMARQ™ AthleteMARQ™ AviatorMARQ® Captain / MARQ® Captain: American Magic EditionMARQ™ CommanderMARQ™ DriverMARQ™ ExpeditionMARQ™ GolferRey™Venu™Venu™ Mercedes-Benz® CollectionVenu® SqVenu® Sq. Music Editionvívoactive® 3 Musicvívoactive® 3 Music LTEvívoactive® 4vívoactive® 4S
            * @returns  Toybox.Activity.WorkoutStepInfo
            */
            public function getNextWorkoutStep() { }


            /**
            * Get information about the current profile.
            * @returns  Toybox.Activity.ProfileInfo
            */
            public function getProfileInfo() { }


        
        public class Info {

            /**
            * The altitude above mean sea level in meters (m). Elevation is derived from the most accurate source: Barometer or GPS  
            * @type Toybox.Lang.Float
            */
            public var altitude;


            /**
            * The ambient pressure in Pascals (Pa). This returns ambient (local) barometric pressure as measured by the pressure sensor. The data is smoothed by a two-stage filter to reduce noise and instantaneous variation.  
            * @type Toybox.Lang.Float
            */
            public var ambientPressure;


            /**
            * The average cadence during the current activity in revolutions per minute (rpm).  
            * @type Toybox.Lang.Number
            */
            public var averageCadence;


            /**
            * The average swim stroke distance from the previous interval in meters (m).  
            * @type Toybox.Lang.Float
            */
            public var averageDistance;


            /**
            * The average heart rate during the current activity in beats per minute (bpm).  
            * @type Toybox.Lang.Number
            */
            public var averageHeartRate;


            /**
            * The average power during the current activity in Watts (W).  
            * @type Toybox.Lang.Number
            */
            public var averagePower;


            /**
            * The average speed during the current activity in meters per second (mps). The average is computed as the elapsed 3-D accumulated distance divided by the elapsed time.  
            * @type Toybox.Lang.Float
            */
            public var averageSpeed;


            /**
            * The current bearing in radians. Bearing is the direction from your current location or position to the destination of navigation, dependent on your current location.  
            * @type Toybox.Lang.Float
            */
            public var bearing;


            /**
            * The bearing from the starting location to the destination in radians. Bearing from start is the direction of desired track from the start of navigation to the destination in radians. This is only dependent on your location when a course is set, and it is not dependent on where you may have moved to during an activity  
            * @type Toybox.Lang.Float
            */
            public var bearingFromStart;


            /**
            * The calories burned throughout the current activity in kilocalories (kcal).  
            * @type Toybox.Lang.Number
            */
            public var calories;


            /**
            * The current cadence in revolutions per minute (rpm).  
            * @type Toybox.Lang.Number
            */
            public var currentCadence;


            /**
            * The true north referenced heading in radians. This provides compass orientation if it is supported by the device.  
            * @type Toybox.Lang.Float
            */
            public var currentHeading;


            /**
            * The current heart rate in beats per minute (bpm).  
            * @type Toybox.Lang.Number
            */
            public var currentHeartRate;


            /**
            * The current location. This member will always provide a null value unless the Positioning Permission is enabled.  
            * @type Toybox.Position.Location
            */
            public var currentLocation;


            /**
            * The current GPS accuracy. GPS accuracy values range from 0-4. A value of 0 indicates an accuracy value is not available, while a value of 4 indicates a good GPS fix.  
            * @type Toybox.Lang.Number
            */
            public var currentLocationAccuracy;


            /**
            * The current oxygen saturation in percent (%)  
            * @type Toybox.Lang.Number
            */
            public var currentOxygenSaturation;


            /**
            * The current power in Watts (W).  
            * @type Toybox.Lang.Number
            */
            public var currentPower;


            /**
            * The current speed in meters per second (mps).  
            * @type Toybox.Lang.Float
            */
            public var currentSpeed;


            /**
            * The distance to the destination in meters (m).  
            * @type Toybox.Lang.Float
            */
            public var distanceToDestination;


            /**
            * The distance to the next point in meters (m).  
            * @type Toybox.Lang.Float
            */
            public var distanceToNextPoint;


            /**
            * The elapsed distance of the current activity in meters (m).  
            * @type Toybox.Lang.Float
            */
            public var elapsedDistance;


            /**
            * Elapsed time of the current activity in milliseconds (ms).  
            * @type Toybox.Lang.Number
            */
            public var elapsedTime;


            /**
            * The elevation at the destination in meters (m).  
            * @type Toybox.Lang.Float
            */
            public var elevationAtDestination;


            /**
            * The elevation at the next point in meters (m).  
            * @type Toybox.Lang.Float
            */
            public var elevationAtNextPoint;


            /**
            * The current energy expenditure in kilocalories per minute (kcals/min). Energy expenditure is a metric developed by FirstBeat that provides an estimation of the calorie burn rate calculated from heart rate data.  
            * @type Toybox.Lang.Float
            */
            public var energyExpenditure;


            /**
            * The current front bicycle derailleur index. Index values range from from 1 to the frontDerailleurMax.  
            * @type Toybox.Lang.Number
            */
            public var frontDerailleurIndex;


            /**
            * The front bicycle derailleur maximum index.  
            * @type Toybox.Lang.Number
            */
            public var frontDerailleurMax;


            /**
            * The front bicycle derailleur gear size in number of teeth.  
            * @type Toybox.Lang.Number
            */
            public var frontDerailleurSize;


            /**
            * The maximum cadence recorded during the current activity in revolutions per minute (rpm).  
            * @type Toybox.Lang.Number
            */
            public var maxCadence;


            /**
            * The maximum heart rate recorded during the current activity in beats per minute (bpm).  
            * @type Toybox.Lang.Number
            */
            public var maxHeartRate;


            /**
            * The maximum power recorded during the current activity in Watts (W).  
            * @type Toybox.Lang.Number
            */
            public var maxPower;


            /**
            * The maximum speed recorded during the current activity in meters per second (mps).  
            * @type Toybox.Lang.Float
            */
            public var maxSpeed;


            /**
            * The mean sea level barometric pressure in Pascals (Pa). This returns barometric pressure calibrated to sea level. Since pressure varies dues to several factors, a GPS-based altitude must first be obtained, then the ambient (local) pressure is measured by the pressure sensor before conversion to a calibrated barometric pressure value.  
            * @type Toybox.Lang.Float
            */
            public var meanSeaLevelPressure;


            /**
            * The name of the destination.  
            * @type Toybox.Lang.String
            */
            public var nameOfDestination;


            /**
            * The name of the next point.  
            * @type Toybox.Lang.String
            */
            public var nameOfNextPoint;


            /**
            * The distance to the nearest point on the current course in meters (m).  
            * @type Toybox.Lang.Float
            */
            public var offCourseDistance;


            /**
            * The raw ambient pressure in Pascals (Pa). This returns ambient (local) barometric pressure as measured by the internal pressure sensor. The data is the temperature compensated information read directly from the internal sensor.  
            * @type Toybox.Lang.Float
            */
            public var rawAmbientPressure;


            /**
            * The current front bicycle derailleur index. Index values range from from 1 to the rearDerailleurMax.  
            * @type Toybox.Lang.Number
            */
            public var rearDerailleurIndex;


            /**
            * The rear bicycle derailleur maximum index.  
            * @type Toybox.Lang.Number
            */
            public var rearDerailleurMax;


            /**
            * The rear bicycle derailleur gear size in number of teeth.  
            * @type Toybox.Lang.Number
            */
            public var rearDerailleurSize;


            /**
            * The starting location of the current activity. This member will always provide a null value unless the Positioning Permission is enabled.  
            * @type Toybox.Position.Location
            */
            public var startLocation;


            /**
            * The starting time of the current activity.  
            * @type Toybox.Time.Moment
            */
            public var startTime;


            /**
            * The swim stroke type from the previous length. Swim stroke type values range from 0-6. Each Number value represents a different swim stroke type (e.g. freestyle, backstroke, etc.).  
            * @type Toybox.Lang.Number
            */
            public var swimStrokeType;


            /**
            * The SWOLF score from the previous length. SWOLF is an abbreviation for Swim-Golf, a measure of swimming efficiency. The score is obtained by adding the strokes per length to the total time of the length. For example, if it takes ten strokes and thirty seconds to swim a pool length, the SWOLF score is 40. Just like golf, a lower SWOLF score is better.  
            * @type Toybox.Lang.Number
            */
            public var swimSwolf;


            /**
            * The recording timer state. The timer state ranges from 0-3. A value of 0 indicates that the timer is off and there is no active recording, while a value of 3 indicates timer is on and there is an active recording.  
            * @type Toybox.Lang.Number
            */
            public var timerState;


            /**
            * The current Timer value in milliseconds (ms).  
            * @type Toybox.Lang.Number
            */
            public var timerTime;


            /**
            * The total ascent during the current activity in meters (m).  
            * @type Toybox.Lang.Float
            */
            public var totalAscent;


            /**
            * The total descent during the current activity in meters (m).  
            * @type Toybox.Lang.Float
            */
            public var totalDescent;


            /**
            * The current track in radians. Track is the direction of travel in radians based on GPS movement. If supported by the device, this provides compass orientation when stopped.  
            * @type Toybox.Lang.Float
            */
            public var track;


            /**
            * The Training Effect score of the current activity. Training Effect is a score developed by FirstBeat, which indicates an activity's level of effect on aerobic fitness. Scores range from 1.0 (easy) to 5.0 (overreaching).  
            * @type Toybox.Lang.Float
            */
            public var trainingEffect;


        }


    }

    module ActivityMonitor {

            /**
            * Get the heart rate history for the given period, up to the last power cycle. This function always returns the most recent heart rate samples. The time between each HeartRateSample in the iterator may be device dependent.
            * @param period - (Toybox.Time.Duration, Toybox.Lang.Number)
            * @param newestFirst - (Toybox.Lang.Boolean)
            * @returns 
            */
            public function getHeartRateHistory(period,newestFirst) { }


            /**
            * Get an Array of ActivityMonitor.History objects
            * @returns  Toybox.Lang.Array
            */
            public function getHistory() { }


            /**
            * Get the current ActivityMonitor.Info
            * @returns  Toybox.ActivityMonitor.Info
            */
            public function getInfo() { }


        
        public class ActiveMinutes {

            /**
            * The total number of moderate activity minutes recorded by the device.  
            * @type Toybox.Lang.Number
            */
            public var moderate;


            /**
            * The total number of active minutes recorded by the device. This value is equal to the total number of moderate minutes plus twice the total number of vigorous minutes.  
            * @type Toybox.Lang.Number
            */
            public var total;


            /**
            * The total number of vigorous activity minutes recorded by the device.  
            * @type Toybox.Lang.Number
            */
            public var vigorous;


        }


        public class HeartRateIterator {

            /**
            * Get the maximum heart rate contained in this iterator.
            * @returns  Toybox.Lang.Number
            */
            public function getMax() { }


            /**
            * Get the minimum heart rate contained in this iterator.
            * @returns  Toybox.Lang.Number
            */
            public function getMin() { }


            /**
            * Get the next entry in the iterator.This must be called to get the initial data from the iterator.
            * @returns  Toybox.ActivityMonitor.HeartRateSample
            */
            public function next() { }


        }


        public class HeartRateSample {

            /**
            * Heart rate in beats per minute (bpm). Before using heart rate information, check for INVALID_HR_SAMPLE to be sure data is available.  
            * @type Toybox.Lang.Number
            */
            public var heartRate;


            /**
            * The time of the heart rate sample  
            * @type Toybox.Time.Moment
            */
            public var when;


        }


        public class History {

            /**
            * Number of active minutes. Contains the moderate, vigorous, and total accumulated minutes for the day.  
            * @type Toybox.ActivityMonitor.ActiveMinutes
            */
            public var activeMinutes;


            /**
            * The calories for the day in kilocalories (kCal).  
            * @type Toybox.Lang.Number
            */
            public var calories;


            /**
            * The distance for the day in centimeters (cm).  
            * @type Toybox.Lang.Number
            */
            public var distance;


            /**
            * The number of floors climbed for the day.  
            * @type Toybox.Lang.Number
            */
            public var floorsClimbed;


            /**
            * Floors climbed goal for the day.  
            * @type Toybox.Lang.Number
            */
            public var floorsClimbedGoal;


            /**
            * The number of floors descended for the day.  
            * @type Toybox.Lang.Number
            */
            public var floorsDescended;


            /**
            * A Moment object representing the start time of the day recorded by this History object  
            * @type Toybox.Time.Moment
            */
            public var startOfDay;


            /**
            * The step goal for the day in number of steps.  
            * @type Toybox.Lang.Number
            */
            public var stepGoal;


            /**
            * The step count for the day in number of steps.  
            * @type Toybox.Lang.Number
            */
            public var steps;


        }


        public class Info {

            /**
            * The altitude above mean sea level in meters (m). Elevation is derived from the most accurate source: Barometer or GPS  
            * @type Toybox.Lang.Float
            */
            public var altitude;


            /**
            * The ambient pressure in Pascals (Pa). This returns ambient (local) barometric pressure as measured by the pressure sensor. The data is smoothed by a two-stage filter to reduce noise and instantaneous variation.  
            * @type Toybox.Lang.Float
            */
            public var ambientPressure;


            /**
            * The average cadence during the current activity in revolutions per minute (rpm).  
            * @type Toybox.Lang.Number
            */
            public var averageCadence;


            /**
            * The average swim stroke distance from the previous interval in meters (m).  
            * @type Toybox.Lang.Float
            */
            public var averageDistance;


            /**
            * The average heart rate during the current activity in beats per minute (bpm).  
            * @type Toybox.Lang.Number
            */
            public var averageHeartRate;


            /**
            * The average power during the current activity in Watts (W).  
            * @type Toybox.Lang.Number
            */
            public var averagePower;


            /**
            * The average speed during the current activity in meters per second (mps). The average is computed as the elapsed 3-D accumulated distance divided by the elapsed time.  
            * @type Toybox.Lang.Float
            */
            public var averageSpeed;


            /**
            * The current bearing in radians. Bearing is the direction from your current location or position to the destination of navigation, dependent on your current location.  
            * @type Toybox.Lang.Float
            */
            public var bearing;


            /**
            * The bearing from the starting location to the destination in radians. Bearing from start is the direction of desired track from the start of navigation to the destination in radians. This is only dependent on your location when a course is set, and it is not dependent on where you may have moved to during an activity  
            * @type Toybox.Lang.Float
            */
            public var bearingFromStart;


            /**
            * The calories burned throughout the current activity in kilocalories (kcal).  
            * @type Toybox.Lang.Number
            */
            public var calories;


            /**
            * The current cadence in revolutions per minute (rpm).  
            * @type Toybox.Lang.Number
            */
            public var currentCadence;


            /**
            * The true north referenced heading in radians. This provides compass orientation if it is supported by the device.  
            * @type Toybox.Lang.Float
            */
            public var currentHeading;


            /**
            * The current heart rate in beats per minute (bpm).  
            * @type Toybox.Lang.Number
            */
            public var currentHeartRate;


            /**
            * The current location. This member will always provide a null value unless the Positioning Permission is enabled.  
            * @type Toybox.Position.Location
            */
            public var currentLocation;


            /**
            * The current GPS accuracy. GPS accuracy values range from 0-4. A value of 0 indicates an accuracy value is not available, while a value of 4 indicates a good GPS fix.  
            * @type Toybox.Lang.Number
            */
            public var currentLocationAccuracy;


            /**
            * The current oxygen saturation in percent (%)  
            * @type Toybox.Lang.Number
            */
            public var currentOxygenSaturation;


            /**
            * The current power in Watts (W).  
            * @type Toybox.Lang.Number
            */
            public var currentPower;


            /**
            * The current speed in meters per second (mps).  
            * @type Toybox.Lang.Float
            */
            public var currentSpeed;


            /**
            * The distance to the destination in meters (m).  
            * @type Toybox.Lang.Float
            */
            public var distanceToDestination;


            /**
            * The distance to the next point in meters (m).  
            * @type Toybox.Lang.Float
            */
            public var distanceToNextPoint;


            /**
            * The elapsed distance of the current activity in meters (m).  
            * @type Toybox.Lang.Float
            */
            public var elapsedDistance;


            /**
            * Elapsed time of the current activity in milliseconds (ms).  
            * @type Toybox.Lang.Number
            */
            public var elapsedTime;


            /**
            * The elevation at the destination in meters (m).  
            * @type Toybox.Lang.Float
            */
            public var elevationAtDestination;


            /**
            * The elevation at the next point in meters (m).  
            * @type Toybox.Lang.Float
            */
            public var elevationAtNextPoint;


            /**
            * The current energy expenditure in kilocalories per minute (kcals/min). Energy expenditure is a metric developed by FirstBeat that provides an estimation of the calorie burn rate calculated from heart rate data.  
            * @type Toybox.Lang.Float
            */
            public var energyExpenditure;


            /**
            * The current front bicycle derailleur index. Index values range from from 1 to the frontDerailleurMax.  
            * @type Toybox.Lang.Number
            */
            public var frontDerailleurIndex;


            /**
            * The front bicycle derailleur maximum index.  
            * @type Toybox.Lang.Number
            */
            public var frontDerailleurMax;


            /**
            * The front bicycle derailleur gear size in number of teeth.  
            * @type Toybox.Lang.Number
            */
            public var frontDerailleurSize;


            /**
            * The maximum cadence recorded during the current activity in revolutions per minute (rpm).  
            * @type Toybox.Lang.Number
            */
            public var maxCadence;


            /**
            * The maximum heart rate recorded during the current activity in beats per minute (bpm).  
            * @type Toybox.Lang.Number
            */
            public var maxHeartRate;


            /**
            * The maximum power recorded during the current activity in Watts (W).  
            * @type Toybox.Lang.Number
            */
            public var maxPower;


            /**
            * The maximum speed recorded during the current activity in meters per second (mps).  
            * @type Toybox.Lang.Float
            */
            public var maxSpeed;


            /**
            * The mean sea level barometric pressure in Pascals (Pa). This returns barometric pressure calibrated to sea level. Since pressure varies dues to several factors, a GPS-based altitude must first be obtained, then the ambient (local) pressure is measured by the pressure sensor before conversion to a calibrated barometric pressure value.  
            * @type Toybox.Lang.Float
            */
            public var meanSeaLevelPressure;


            /**
            * The name of the destination.  
            * @type Toybox.Lang.String
            */
            public var nameOfDestination;


            /**
            * The name of the next point.  
            * @type Toybox.Lang.String
            */
            public var nameOfNextPoint;


            /**
            * The distance to the nearest point on the current course in meters (m).  
            * @type Toybox.Lang.Float
            */
            public var offCourseDistance;


            /**
            * The raw ambient pressure in Pascals (Pa). This returns ambient (local) barometric pressure as measured by the internal pressure sensor. The data is the temperature compensated information read directly from the internal sensor.  
            * @type Toybox.Lang.Float
            */
            public var rawAmbientPressure;


            /**
            * The current front bicycle derailleur index. Index values range from from 1 to the rearDerailleurMax.  
            * @type Toybox.Lang.Number
            */
            public var rearDerailleurIndex;


            /**
            * The rear bicycle derailleur maximum index.  
            * @type Toybox.Lang.Number
            */
            public var rearDerailleurMax;


            /**
            * The rear bicycle derailleur gear size in number of teeth.  
            * @type Toybox.Lang.Number
            */
            public var rearDerailleurSize;


            /**
            * The starting location of the current activity. This member will always provide a null value unless the Positioning Permission is enabled.  
            * @type Toybox.Position.Location
            */
            public var startLocation;


            /**
            * The starting time of the current activity.  
            * @type Toybox.Time.Moment
            */
            public var startTime;


            /**
            * The swim stroke type from the previous length. Swim stroke type values range from 0-6. Each Number value represents a different swim stroke type (e.g. freestyle, backstroke, etc.).  
            * @type Toybox.Lang.Number
            */
            public var swimStrokeType;


            /**
            * The SWOLF score from the previous length. SWOLF is an abbreviation for Swim-Golf, a measure of swimming efficiency. The score is obtained by adding the strokes per length to the total time of the length. For example, if it takes ten strokes and thirty seconds to swim a pool length, the SWOLF score is 40. Just like golf, a lower SWOLF score is better.  
            * @type Toybox.Lang.Number
            */
            public var swimSwolf;


            /**
            * The recording timer state. The timer state ranges from 0-3. A value of 0 indicates that the timer is off and there is no active recording, while a value of 3 indicates timer is on and there is an active recording.  
            * @type Toybox.Lang.Number
            */
            public var timerState;


            /**
            * The current Timer value in milliseconds (ms).  
            * @type Toybox.Lang.Number
            */
            public var timerTime;


            /**
            * The total ascent during the current activity in meters (m).  
            * @type Toybox.Lang.Float
            */
            public var totalAscent;


            /**
            * The total descent during the current activity in meters (m).  
            * @type Toybox.Lang.Float
            */
            public var totalDescent;


            /**
            * The current track in radians. Track is the direction of travel in radians based on GPS movement. If supported by the device, this provides compass orientation when stopped.  
            * @type Toybox.Lang.Float
            */
            public var track;


            /**
            * The Training Effect score of the current activity. Training Effect is a score developed by FirstBeat, which indicates an activity's level of effect on aerobic fitness. Scores range from 1.0 (easy) to 5.0 (overreaching).  
            * @type Toybox.Lang.Float
            */
            public var trainingEffect;


        }


    }

    module ActivityRecording {

            /**
            * Create a Session object with options determined by the caller. Only one Session object is allowed to exist at a time. If there is an existing object that has not been closed using the save() or discard() methods, this method will return that object instead of creating a new one. On some products running the 1.x virtual machine, creating a Session object requires a large memory allocation. To free this memory, the Session must first be successfully saved or discarded, and then app references to the Session object should be set to null.
            * @param options - (Toybox.Lang.Dictionary)
            * @returns 
            */
            public function createSession(options) { }


        
        public class Session {

            /**
            * Add a lap to the current recording.
            * @returns  Toybox.Lang.Boolean
            */
            public function addLap() { }


            /**
            * Create a new Field. Field objects allow developers to store information in FIT developer fields. This information can be displayed in Garmin Connect as a per-second graph, as lap information, or as workout summary information.
            * @param name - (Toybox.Lang.String)
            * @param fieldId - (Toybox.Lang.Number)
            * @param type - (Toybox.Lang.Number)
            * @param options - (Toybox.Lang.Dictionary)
            * @returns 
            */
            public function createField(name,fieldId,type,options) { }


            /**
            * Complete the Session by discarding the recorded data.
            * @returns  Toybox.Lang.Boolean
            */
            public function discard() { }


            /**
            * Check if recording is active for this Session.
            * @returns  Toybox.Lang.Boolean
            */
            public function isRecording() { }


            /**
            * Complete the session by storing the FIT file on the file system.
            * @returns  Toybox.Lang.Boolean
            */
            public function save() { }


            /**
            * Set the listener for Session timer events The listener method is called whenever a new timer event occurs. The keys in the Dictionary passed to the listener callback depend on the the value of the eventType parameter.
            * @param listener - (Toybox.Lang.Method)
            * @returns  
            */
            public function setTimerEventListener(listener) { }


            /**
            * Begin recording a FIT file on the system.
            * @returns  Toybox.Lang.Boolean
            */
            public function start() { }


            /**
            * Stop recording a FIT file on the system.
            * @returns  Toybox.Lang.Boolean
            */
            public function stop() { }


        }


    }

    module Ant {

        
        public class BurstListener {

            /**
            * Callback when a burst reception completes successfully
            * @param burstPayload - (Toybox.Ant.BurstPayload)
            * @returns  
            */
            public function onReceiveComplete(burstPayload) { }


            /**
            * Callback when a burst reception fails over the air
            * @param errorCode - (Toybox.Lang.Number)
            * @returns  
            */
            public function onReceiveFail(errorCode) { }


            /**
            * Callback when a burst transmission fails over the air
            * @param errorCode - (Toybox.Lang.Number)
            * @returns  
            */
            public function onTransmitFail(errorCode) { }


        }


        public class BurstPayload {

            /**
            * Add a Message object to the end of the burst data.
            * @param message - (Toybox.Lang.Array)
            * @returns  
            */
            public function add(message) { }


            /**
            * Return the number of burst Message objectscontained in the payload.
            * @returns  Toybox.Lang.Number
            */
            public function getSize() { }


        }


        public class BurstPayloadIterator {

            /**
            * Constructor
            * @param newBurstPayload - ;;newBurstPayload
            * @returns  
            */
            public function initialize(newBurstPayload) { }


            /**
            * Return the next message in theBurstPayload object.
            * @returns  Toybox.Lang.Array
            */
            public function next() { }


        }


        public class ChannelAssignment {

            /**
            * Constructor By default disables background scanning.
            * @param c - (Toybox.Lang.Number)
            * @param n - ype specifier. Must use one of the following constants.;;CHANNEL_TYPE_TX_NOT_RX - Bidirectional Transmit (Master);;Master Channels are not allowed on the ANT+ Network;;CHANNEL_TYPE_RX_NOT_TX - Bidirectional Receive (Slave);;CHANNEL_TYPE_RX_ONLY - Receive Only (Slave);;n
            * @returns  
            */
            public function initialize(c,n) { }


            /**
            * See if background scanning is enabled for the channel assignment.Example:using Toybox.Ant;// Assuming initialized channelChannelAssignment.isBackgroundScanEnabled();
            * @returns  Toybox.Lang.Boolean
            */
            public function isBackgroundScanEnabled() { }


            /**
            * Set background scan to be enabled or disabled. Enabling background scan can only be done on Receive Only channels.
            * @param isBackgroundScanEnabled - (Toybox.Lang.Boolean)
            * @returns 
            */
            public function setBackgroundScan(isBackgroundScanEnabled) { }


        }


        public class CryptoConfig {

            /**
            * Constructor
            * @param options - (Toybox.Lang.Dictionary)
            * @returns  
            */
            public function initialize(options) { }


        }


        public class DeviceConfig {

            /**
            * Constructor
            * @param options - (Toybox.Lang.Dictionary)
            * @returns  
            */
            public function initialize(options) { }


        }


        public class EncryptionInvalidSettingsException {

        }


        public class GenericChannel {

            /**
            * Set the encryption configuration and enable encryption on this channel.
            * @param configuration - (Toybox.Ant.CryptoConfig)
            * @returns  
            */
            public function enableEncryption(configuration) { }


            /**
            * Constructor
            * @param listener - (Toybox.Lang.Method)
            * @param channelAssignment - (Toybox.Ant.ChannelAssignment)
            * @returns  
            */
            public function initialize(listener,channelAssignment) { }


            /**
            * Send an acknowledge message. You can expect to receive either MSG_CODE_EVENT_TRANSFER_TX_COMPLETED or MSG_CODE_EVENT_TRANSFER_TX_FAILED if the message succeeded/failed going to the recipient.
            * @param data - (Toybox.Lang.Number)
            * @returns  
            */
            public function sendAcknowledge(data) { }


            /**
            * Send a broadcast message.
            * @param data - (Toybox.Lang.Number)
            * @returns  
            */
            public function sendBroadcast(data) { }


            /**
            * Send an Array of Messages as a burst across the ANT channel. Success or Fail is received by the BurstListener.
            * @param burstData - (Toybox.Ant.BurstPayload)
            * @returns  
            */
            public function sendBurst(burstData) { }


        }


        public class Message {

            /**
            * Get the ANT data packet.
            * @returns  Toybox.Lang.Array
            */
            public function getPayload() { }


            /**
            * Set the ANT data packet.
            * @param data - (Toybox.Lang.Array)
            * @returns  
            */
            public function setPayload(data) { }


        }


        public class UnableToAcquireChannelException {

        }


        public class UnableToAcquireEncryptedChannelException {

        }


    }

    module AntPlus {

        
        public class AntPlusNotAllowedException {

            /**
            * Constructor
            * @returns  
            */
            public function initialize() { }


        }


        public class BatteryStatus {

            /**
            * The BATT_STATUS_* value of the battery.  
            * @type Toybox.Lang.Number
            */
            public var batteryStatus;


            /**
            * The voltage, -1 is invalid  
            * @type Toybox.Lang.Float
            */
            public var batteryVoltage;


            /**
            * The operating time in seconds.  
            * @type Toybox.Lang.Number
            */
            public var operatingTime;


        }


        public class BikeCadence {

            /**
            * Returns the most recent BikeCadenceInfo
            * @returns  Toybox.AntPlus.BikeCadenceInfo
            */
            public function getCadenceInfo() { }


            /**
            * Constructor
            * @param listener - (Toybox.AntPlus.BikeCadenceListener)
            * @returns  
            */
            public function initialize(listener) { }


        }


        public class BikeCadenceInfo {

            /**
            * Cadence (rpm) Returns: 
            * @type Toybox.Lang.Number
            */
            public var cadence;


        }


        public class BikeCadenceListener {

            /**
            * Callback when cadence data is updated
            * @param data - (Toybox.AntPlus.BikeCadenceInfo)
            * @returns  
            */
            public function onBikeCadenceUpdate(data) { }


        }


        public class BikeLight {

            /**
            * The LIGHT_MODE_* mode of the light.  
            * @type Toybox.Lang.Number
            */
            public var mode;


            /**
            * The LIGHT_TYPE_* type of the light.  
            * @type Toybox.Lang.Number
            */
            public var type;


            /**
            * Get a list of the standard and custom light modes that a bike light supports.
            * @returns  Toybox.Lang.Array
            */
            public function getCapableModes() { }


            /**
            * Tell this light to enter a new mode. You should check the capable modes before sending light modes as lights will ignore commands to go into modes that they do not support. Lights whose modes are set here will not be controlled by the Light Network Mode until they are restored OR until the user changes the Light Network Mode outside of ConnectIQ.
            * @param mode - (Toybox.Lang.Number)
            * @returns  
            */
            public function setMode(mode) { }


        }


        public class BikePower {

            /**
            * Get the current calculated crank cadence.
            * @returns  Toybox.AntPlus.CalculatedCadence
            */
            public function getCalculatedCadence() { }


            /**
            * Retrieve the current calculated power.
            * @returns  Toybox.AntPlus.CalculatedPower
            */
            public function getCalculatedPower() { }


            /**
            * Retrieve the current calculated wheel distance.
            * @returns  Toybox.AntPlus.CalculatedWheelDistance
            */
            public function getCalculatedWheelDistance() { }


            /**
            * Retrieve the current calculated wheel speed.
            * @returns  Toybox.AntPlus.CalculatedWheelSpeed
            */
            public function getCalculatedWheelSpeed() { }


            /**
            * Retrieve the current pedal power balance.
            * @returns  Toybox.AntPlus.PedalPowerBalance
            */
            public function getPedalPowerBalance() { }


            /**
            * Retrieve the current torque effectiveness and pedal smoothness.
            * @returns  Toybox.AntPlus.TorqueEffectivenessPedalSmoothness
            */
            public function getTorqueEffectivenessPedalSmoothness() { }


            /**
            * Constructor
            * @param listener - (Toybox.AntPlus.BikePowerListener)
            * @returns  
            */
            public function initialize(listener) { }


        }


        public class BikePowerListener {

            /**
            * Callback when calculated cadence is updated (max freq 1Hz)
            * @param data - (Toybox.AntPlus.CalculatedCadence)
            * @returns  
            */
            public function onCalculatedCadenceUpdate(data) { }


            /**
            * Callback when calculated power is updated (max freq 1Hz)
            * @param data - (Toybox.AntPlus.CalculatedPower)
            * @returns  
            */
            public function onCalculatedPowerUpdate(data) { }


            /**
            * Callback when calculated wheel distance is updated (max freq 1Hz)
            * @param data - (Toybox.AntPlus.CalculatedWheelDistance)
            * @returns  
            */
            public function onCalculatedWheelDistanceUpdate(data) { }


            /**
            * Callback when calculated wheel speed is updated (max freq 1Hz)
            * @param data - (Toybox.AntPlus.CalculatedWheelSpeed)
            * @returns  
            */
            public function onCalculatedWheelSpeedUpdate(data) { }


            /**
            * Callback when power balance is updated (max freq 1Hz)
            * @param data - (Toybox.AntPlus.PedalPowerBalance)
            * @returns  
            */
            public function onPedalPowerBalanceUpdate(data) { }


            /**
            * Callback when torque effectiveness & pedal smoothness are updated (max freq 1Hz)
            * @param data - (Toybox.AntPlus.TorqueEffectivenessPedalSmoothness)
            * @returns  
            */
            public function onTorqueEffectivenessPedalSmoothnessUpdate(data) { }


        }


        public class BikeRadar {

            /**
            * Retrieves information on the current list of tracked targets.
            * @returns  Toybox.Lang.Array
            */
            public function getRadarInfo() { }


            /**
            * 
            * @param listener - (Toybox.AntPlus.BikeRadarListener)
            * @returns  
            */
            public function initialize(listener) { }


        }


        public class BikeRadarListener {

            /**
            * Callback when radar data is updated
            * @param data - (Toybox.Lang.Array)
            * @returns  
            */
            public function onBikeRadarUpdate(data) { }


        }


        public class BikeSpeed {

            /**
            * getSpeedInfo - Returns the most recent BikeSpeedInfo
            * @returns  Toybox.AntPlus.BikeSpeedInfo
            */
            public function getSpeedInfo() { }


            /**
            * Constructor
            * @param listener - (Toybox.AntPlus.BikeSpeedListener)
            * @returns  
            */
            public function initialize(listener) { }


        }


        public class BikeSpeedCadence {

            /**
            * getSpeedCadenceInfo - Returns the most recent BikeSpeedCadenceInfo
            * @returns  Toybox.AntPlus.BikeSpeedCadenceInfo
            */
            public function getSpeedCadenceInfo() { }


            /**
            * Constructor
            * @param listener - (Toybox.AntPlus.BikeSpeedCadenceListener)
            * @returns  
            */
            public function initialize(listener) { }


        }


        public class BikeSpeedCadenceInfo {

            /**
            * Cadence (rpm) Returns: 
            * @type Toybox.Lang.Number
            */
            public var cadence;


            /**
            * Distance (m) Returns: 
            * @type Toybox.Lang.Float
            */
            public var distance;


            /**
            * Speed (m/s) Returns: 
            * @type Toybox.Lang.Float
            */
            public var speed;


        }


        public class BikeSpeedCadenceListener {

            /**
            * Callback when speed / cadence data is updated
            * @param data - (Toybox.AntPlus.BikeSpeedCadenceInfo)
            * @returns  
            */
            public function onBikeSpeedCadenceUpdate(data) { }


        }


        public class BikeSpeedInfo {

            /**
            * Distance (m) Returns: 
            * @type Toybox.Lang.Float
            */
            public var distance;


            /**
            * Speed (m/s) Returns: 
            * @type Toybox.Lang.Float
            */
            public var speed;


        }


        public class BikeSpeedListener {

            /**
            * Callback when speed data is updated
            * @param data - (Toybox.AntPlus.BikeSpeedInfo)
            * @returns  
            */
            public function onBikeSpeedUpdate(data) { }


        }


        public class CalculatedCadence {

            /**
            * Average crank cadence calculated from the sensor data in rounds per minute (rpm).  
            * @type Toybox.Lang.Number
            */
            public var cadence;


            /**
            * The BIKE_POWER_SENSOR_TYPE_* value of the bike power sensor.  
            * @type Toybox.Lang.Number
            */
            public var powerSensorType;


        }


        public class CalculatedPower {

            /**
            * The average power calculated from the sensor data in watts (W).  
            * @type Toybox.Lang.Float
            */
            public var power;


            /**
            * The BIKE_POWER_SENSOR_TYPE_* value of the bike power sensor.  
            * @type Toybox.Lang.Number
            */
            public var powerSensorType;


        }


        public class CalculatedWheelDistance {

            /**
            * The accumulated distance calculated from sensor data in meters (m).  
            * @type Toybox.Lang.Float
            */
            public var distance;


        }


        public class CalculatedWheelSpeed {

            /**
            * The average speed calculated from the sensor data in meters per second (m/s).  
            * @type Toybox.Lang.Float
            */
            public var speed;


        }


        public class CommonData {

            /**
            * The Component Identifier. Component IDs are defined on a by-ANT+-profile basis.  
            * @type Toybox.Lang.Number
            */
            public var identifier;


            /**
            * Number of components in the system.  
            * @type Toybox.Lang.Number
            */
            public var numComponents;


        }


        public class DerailleurStatus {

            /**
            * Current gear index (for front derailleur 0 - 6, Toybox::AntPlus::FRONT_GEAR_INVALID = Unknown gear index / Error) (for rear derailleur 0 - 30, Toybox::AntPlus::REAR_GEAR_INVALID = Unknown gear index / Error) Returns: 
            * @type Toybox.Lang.Number
            */
            public var gearIndex;


            /**
            * Number of gears installed (1 - 7, Toybox::AntPlus::MAX_GEARS_INVALID = Unknown gear count / Error) (1 - 31, Toybox::AntPlus::MAX_GEARS_INVALID = Unknown gear count / Error) Returns: 
            * @type Toybox.Lang.Number
            */
            public var gearMax;


            /**
            * Current gear size (number of teeth, 0 - 255) Returns: 
            * @type Toybox.Lang.Number
            */
            public var gearSize;


            /**
            * Number of invalid inboard shifts (0 - 255) Returns: 
            * @type Toybox.Lang.Number
            */
            public var invalidInboardShiftCount;


            /**
            * Number of invalid outboard shifts (0 - 255) Returns: 
            * @type Toybox.Lang.Number
            */
            public var invalidOutboardShiftCount;


            /**
            * Number of shift failures (0 - 255) Returns: 
            * @type Toybox.Lang.Number
            */
            public var shiftFailureCount;


        }


        public class DeviceConfig {

            /**
            * Constructor
            * @param options - (Toybox.Lang.Dictionary)
            * @returns  
            */
            public function initialize(options) { }


        }


        public class DeviceListener {

            /**
            * Callback when battery status is received.
            * @param data - (Toybox.AntPlus.BatteryStatus)
            * @returns  
            */
            public function onBatteryStatusUpdate(data) { }


            /**
            * Callback when device state is updated.
            * @param data - (Toybox.AntPlus.DeviceState)
            * @returns  
            */
            public function onDeviceStateUpdate(data) { }


            /**
            * Callback when manufacturer's information is received.
            * @param data - (Toybox.AntPlus.ManufacturerInfo)
            * @returns  
            */
            public function onManufacturerInfoUpdate(data) { }


            /**
            * Callback when ANT message is received.
            * @param msg - (Toybox.Ant.Message)
            * @returns  
            */
            public function onMessage(msg) { }


            /**
            * Callback when product information is received.
            * @param data - (Toybox.AntPlus.ProductInfo)
            * @returns  
            */
            public function onProductInfoUpdate(data) { }


            /**
            * After sending a manufacturer message or page request this will be called to indicate message sent status.
            * @param status - (Toybox.Lang.Number)
            * @param sentMesgData - (Toybox.Lang.Dictionary)
            * @returns  
            */
            public function onSentMessage(status,sentMesgData) { }


        }


        public class DeviceState {

            /**
            * The current Device ID being tracked/searched for. ID will be null if device state is DEVICE_STATE_DEAD  
            * @type Toybox.Lang.Number
            */
            public var deviceNumber;


            /**
            * The state of the device as an DEVICE_STATE_* value.  
            * @type Toybox.Lang.Number
            */
            public var state;


        }


        public class FitnessEquipment {

            /**
            * Control the fitness Equipment Note: Setting a value related to a specific training mode will cause the fitness equipment to change to that mode. For example, controlEquipment(TRAINER_TARGET_POWER, 100) will set the fitness equipment to target power mode with target power set to 100W if such mode is supported. Values out of range will be set to within the nearest range boundary value.
            * @param setting - (Toybox.Lang.Number)
            * @param data - (Toybox.Lang.Float)
            * @returns  
            */
            public function controlEquipment(setting,data) { }


            /**
            * Get the current training data from the FE
            * @returns  Toybox.AntPlus.FitnessEquipmentData
            */
            public function getEquipmentData() { }


            /**
            * Get the resistance percentage setting of the fitness equipmentfor basic resistance training mode.You should set resistance values and be in basic resistance training mode beforecalling this method, otherwise null or default values may be returned.
            * @returns  Toybox.AntPlus.ResistanceSettings
            */
            public function getResistanceSettings() { }


            /**
            * Get the wind and track resistance simulation settings.You should set wind and track settings, as well as be in simulation training modebefore calling this method or null or default values may be returned.
            * @returns  Toybox.AntPlus.SimulationSettings
            */
            public function getSimulationSettings() { }


            /**
            * Get the target power setting of the fitness equipment fortarget power training mode.You should set the target power and be in target power training mode before callingthis method, otherwise null or default values may be returned.
            * @returns  Toybox.AntPlus.TargetPowerSettings
            */
            public function getTargetPowerSettings() { }


            /**
            * Get the current training mode and supported modes of the fitness equipment
            * @returns  Toybox.AntPlus.FitnessEquipmentMode
            */
            public function getTrainerMode() { }


            /**
            * Get the user configuration settings of the fitness equipment for simulationtraining mode.You should set user settings values and be in simulation mode beforecalling this method, otherwise null or default values may be returned.
            * @returns  Toybox.AntPlus.UserSettings
            */
            public function getUserSettings() { }


            /**
            * Constructor
            * @param listener - (Toybox.AntPlus.FitnessEquipmentListener)
            * @returns  
            */
            public function initialize(listener) { }


            /**
            * Set the trainer mode. You should check the capable modes of the fitness equipment, as the command will be ignored by the fitness equipment if the mode is not supported.
            * @param mode - (Toybox.Lang.Number)
            * @returns  
            */
            public function setTrainerMode(mode) { }


        }


        public class FitnessEquipmentData {

            /**
            * The elapsed distance calculated by the trainer since reset Range is always greater than or equal to 0m  
            * @type Toybox.Lang.Float
            */
            public var feDistance;


            /**
            * The heart rate calculated by the trainer. This may come from hand sensors, or an HRM if connected to the equipment  
            * @type Toybox.Lang.Number
            */
            public var feHeartRate;


            /**
            * The speed calculated by the trainer  
            * @type Toybox.Lang.Float
            */
            public var feSpeed;


        }


        public class FitnessEquipmentListener {

            /**
            * Callback when fitness equipment data is updated
            * @param data - (Toybox.AntPlus.FitnessEquipmentData)
            * @returns  
            */
            public function onFitnessEquipmentUpdate(data) { }


        }


        public class FitnessEquipmentMode {

            /**
            * Flag for basic resistance training mode support  
            * @type Toybox.Lang.Boolean
            */
            public var basicResistanceSupported;


            /**
            * The current training mode of the fitness equipment  
            * @type Toybox.Lang.Number
            */
            public var mode;


            /**
            * Flag for simulation training mode support  
            * @type Toybox.Lang.Boolean
            */
            public var simulationSupported;


            /**
            * Flag for target power training mode support  
            * @type Toybox.Lang.Boolean
            */
            public var targetPowerSupported;


        }


        public class LightNetwork {

            /**
            * Get a list of lights in the network.
            * @returns  Toybox.Lang.Array
            */
            public function getBikeLights() { }


            /**
            * Get the light network mode.
            * @returns  Toybox.Lang.Number
            */
            public function getNetworkMode() { }


            /**
            * Get the light network state.
            * @returns  Toybox.Lang.Number
            */
            public function getNetworkState() { }


            /**
            * Constructor
            * @param listener - (Toybox.AntPlus.LightNetworkListener)
            * @returns  
            */
            public function initialize(listener) { }


            /**
            * Tell all headlights to enter the same mode. You should check the capable modes of each headlight in the network before sending light modes, as lights will ignore commands to go into modes that they do not support. Lights whose modes are set here will not be controlled by the Light Network Mode until they are restored OR until the user changes the Light Network Mode outside of ConnectIQ.
            * @param mode - (Toybox.Lang.Number)
            * @returns  
            */
            public function setHeadlightsMode(mode) { }


            /**
            * Tell all taillights to enter the same mode. You should check the capable modes of each taillight in the network before sending light modes, as lights will ignore commands to go into modes that they do not support. Lights whose modes are set here will not be controlled by the Light Network Mode until they are restored OR until the user changes the Light Network Mode outside of ConnectIQ.
            * @param mode - (Toybox.Lang.Number)
            * @returns  
            */
            public function setTaillightsMode(mode) { }


            /**
            * A signal switch for right and left singals. If signal light is engaged, disengage it. If signal lgiht is disengaged, engage it. *This will automatically disengage the opposite signal if it is currently engaged.
            * @param left - (Toybox.Lang.Boolean)
            * @returns  
            */
            public function toggleSignalLight(left) { }


        }


        public class LightNetworkListener {

            /**
            * Callback when a bike light's data is updated (max freq. 1Hz)
            * @param data - (Toybox.AntPlus.BikeLight)
            * @returns  
            */
            public function onBikeLightUpdate(data) { }


            /**
            * Callback when the light network state changes
            * @param data - (Toybox.Lang.Number)
            * @returns  
            */
            public function onLightNetworkStateUpdate(data) { }


        }


        public class ManufacturerInfo {

            /**
            * The Hardware revision.  
            * @type Toybox.Lang.Number
            */
            public var hwRevision;


            /**
            * The Manufacturer ID.  
            * @type Toybox.Lang.Number
            */
            public var manufacturerId;


            /**
            * The Model number.  
            * @type Toybox.Lang.Number
            */
            public var modelNumber;


        }


        public class PedalPowerBalance {

            /**
            * Pedal power percent (%)  
            * @type Toybox.Lang.Number
            */
            public var pedalPowerPercent;


            /**
            * Indicates the pedal contribution.  
            * @type Toybox.Lang.Boolean
            */
            public var rightPedalIndicator;


        }


        public class ProductInfo {

            /**
            * The serial number.  
            * @type Toybox.Lang.Number
            */
            public var serial;


            /**
            * The main software revision.  
            * @type Toybox.Lang.Number
            */
            public var swRevisionMain;


            /**
            * The supplemental software revision.  
            * @type Toybox.Lang.Number
            */
            public var swRevisionSupplemental;


        }


        public class RadarTarget {

            /**
            * Indicates the distance to the target in metres (m).  
            * @type Toybox.Lang.Float
            */
            public var range;


            /**
            * Indicates the speed of the target relative to the user in metres per second (m/s).  
            * @type Toybox.Lang.Float
            */
            public var speed;


            /**
            * The THREAT_LEVEL_* threat value.  
            * @type Toybox.Lang.Number
            */
            public var threat;


            /**
            * The THREAT_SIDE_* threat position.  
            * @type Toybox.Lang.Number
            */
            public var threatSide;


        }


        public class ResistanceSettings {

            /**
            * The resistance percentage of the fitness equipment.  
            * @type Toybox.Lang.Float
            */
            public var basicResistance;


        }


        public class RunningDynamics {

            /**
            * Use getRunningDynamics() to get the most current running dynamics.
            * @returns  Toybox.AntPlus.RunningDynamicsData
            */
            public function getRunningDynamics() { }


            /**
            * Use getSensorPosition() to retrieve the position of the sensor on the body
            * @returns  Toybox.AntPlus.SensorPosition
            */
            public function getSensorPosition() { }


            /**
            * Constructor
            * @param listener - (Toybox.AntPlus.RunningDynamicsListener)
            * @returns  
            */
            public function initialize(listener) { }


        }


        public class RunningDynamicsData {

            /**
            * Filtered instantaneous cadence (0 - 255 strides/min) Returns: 
            * @type Toybox.Lang.Number
            */
            public var cadence;


            /**
            * Filtered instantaneous ground contact balance (0 - 100%, 0.03125% precision) Returns: 
            * @type Toybox.Lang.Float
            */
            public var groundContactBalance;


            /**
            * Filtered instantaneous ground contact time (0 - 2047 ms) Returns: 
            * @type Toybox.Lang.Number
            */
            public var groundContactTime;


            /**
            * Filtered instantaneous stance time percentage (0 - 100%, 0.25% precision) Returns: 
            * @type Toybox.Lang.Float
            */
            public var stanceTime;


            /**
            * Step count (rolls over!) (0 - 127 steps) Returns: 
            * @type Toybox.Lang.Number
            */
            public var stepCount;


            /**
            * Step Length (0 - 8191 mm) Returns: 
            * @type Toybox.Lang.Number
            */
            public var stepLength;


            /**
            * Filtered instantaneous vertical oscillation (0 - 2047 mm, 0.25mm precision) Returns: 
            * @type Toybox.Lang.Float
            */
            public var verticalOscillation;


            /**
            * Vertical ratio (0 - 100%, 0.03125% precision) Returns: 
            * @type Toybox.Lang.Float
            */
            public var verticalRatio;


            /**
            * true if walking, false if running Returns: 
            * @type Toybox.Lang.Boolean
            */
            public var walkingFlag;


        }


        public class RunningDynamicsListener {

            /**
            * Callback when running dynamics are updated (max freq 1Hz)
            * @param data - (Toybox.AntPlus.RunningDynamicsData)
            * @returns  
            */
            public function onRunningDynamicsUpdate(data) { }


            /**
            * Callback when sensor position is updated (max freq 1Hz)
            * @param data - (Toybox.AntPlus.SensorPosition)
            * @returns  
            */
            public function onSensorPositionUpdate(data) { }


        }


        public class SensorPosition {

            /**
            * AntPlus.BODY_LOCATION_* Returns: 
            * @type Toybox.Lang.Number
            */
            public var bodyLocation;


            /**
            * AntPlus.SENSOR_ORIENTATION_* Returns: 
            * @type Toybox.Lang.Number
            */
            public var orientation;


        }


        public class Shifting {

            /**
            * Get current shifting system statusWill not provide status for Shimano shifting systems.
            * @returns  Toybox.AntPlus.ShiftingStatus
            */
            public function getShiftingStatus() { }


        }


        public class ShiftingListener {

        }


        public class ShiftingStatus {

            /**
            * Front derailleur status  
            * @type Toybox.AntPlus.DerailleurStatus
            */
            public var frontDerailleur;


            /**
            * Rear derailleur status  
            * @type Toybox.AntPlus.DerailleurStatus
            */
            public var rearDerailleur;


        }


        public class SimulationSettings {

            /**
            * The simulated draft factor setting for simulation mode A draft factor of 0 removes all wind resistance, and 1.0 indicates no drafting effects.  
            * @type Toybox.Lang.Float
            */
            public var draftFactor;


            /**
            * The slope (grade) setting of the simulated track  
            * @type Toybox.Lang.Float
            */
            public var slope;


            /**
            * The simulated surface resistance coefficient for simulation mode. Dimensionless factor to quantify rolling resistance based on friction between bicycle tires and the tracker surface. Rolling Resistance [N] = (Bicycle Mass + Cyclist Mass) x Coefficient of Rolling Resistance x 9.8 Sample coefficents: Wooden track = 0.001 Smooth Concrete = 0.002 Asphalt Road = 0.004 Rough Road = 0.008  
            * @type Toybox.Lang.Float
            */
            public var surfaceResistance;


            /**
            * The simulated wind resistance coefficient setting for simulation mode Wind Resistance Coefficient [kg/m] = Frontal Surface Area [m2] x Drag Coefficient x Air Density [kg/m3]  
            * @type Toybox.Lang.Float
            */
            public var windResistance;


            /**
            * The simulated wind speed setting for simulation mode  
            * @type Toybox.Lang.Float
            */
            public var windSpeed;


        }


        public class TargetPowerSettings {

            /**
            * The target power set for the Fitness Equipment  
            * @type Toybox.Lang.Float
            */
            public var targetPower;


        }


        public class TorqueEffectivenessPedalSmoothness {

            /**
            * Left pedal smoothness if separate is supported, else it is the combined smoothness (%). Example: using Toybox.AntPlus; using Toybox.System; // Assumes AntPlus.BikePower.getTorqueEffectivenessPedalSmoothness(); already called var leftOrCombinedPedalSmoothness= TorqueEffectivenessPedalSmoothness.leftOrCombinedPedalSmoothness; System.println("leftOrCombinedPedalSmoothness is set to: " + leftOrCombinedPedalSmoothness);  
            * @type Toybox.Lang.Float
            */
            public var leftOrCombinedPedalSmoothness;


            /**
            * Left torque effectiveness. 0xFF: Invalid or negative values (%). Example: using Toybox.AntPlus; using Toybox.System; // Assumes AntPlus.BikePower.getTorqueEffectivenessPedalSmoothness(); already called var leftTorqueEffectiveness = TorqueEffectivenessPedalSmoothness.leftTorqueEffectiveness; System.println("leftTorqueEffectiveness is: " + leftTorqueEffectiveness);  
            * @type Toybox.Lang.Float
            */
            public var leftTorqueEffectiveness;


            /**
            * Right pedal smoothness (%). Example: using Toybox.AntPlus; using Toybox.System; // Assumes AntPlus.BikePower.getTorqueEffectivenessPedalSmoothness(); already called var rightPedalSmoothness = TorqueEffectivenessPedalSmoothness.rightPedalSmoothness; System.println("rightPedalSmoothness is: " + rightPedalSmoothness);  
            * @type Toybox.Lang.Float
            */
            public var rightPedalSmoothness;


            /**
            * Right torque effectiveness. 0xFF: Invalid or negative values (%). Example: using Toybox.AntPlus; using Toybox.System; // Assumes AntPlus.BikePower.getTorqueEffectivenessPedalSmoothness(); already called var rightTorqueEffectiveness= TorqueEffectivenessPedalSmoothness.rightTorqueEffectiveness; System.println("rightTorqueEffectiveness is set to: " + rightTorqueEffectiveness);  
            * @type Toybox.Lang.Float
            */
            public var rightTorqueEffectiveness;


            /**
            * Define if pedal smoothness is separate. Example: using Toybox.AntPlus; using Toybox.System; // Assumes AntPlus.BikePower.getTorqueEffectivenessPedalSmoothness(); already called var separatePedalSmoothnessSupport = TorqueEffectivenessPedalSmoothness.separatePedalSmoothnessSupport; System.println("separatePedalSmoothnessSupport is: " + separatePedalSmoothnessSupport);  
            * @type Toybox.Lang.Boolean
            */
            public var separatePedalSmoothnessSupport;


        }


        public class UserSettings {

            /**
            * The bike weight set for simulation training mode  
            * @type Toybox.Lang.Float
            */
            public var bikeWeight;


            /**
            * The gear ratio set for simulation training mode  
            * @type Toybox.Lang.Float
            */
            public var gearRatio;


            /**
            * The user weight set for simulation training mode  
            * @type Toybox.Lang.Float
            */
            public var userWeight;


            /**
            * The wheel diameter set for simulation training mode  
            * @type Toybox.Lang.Float
            */
            public var wheelDiameter;


        }


    }

    module Application {

            /**
            * Retrieve the AppBase Object that is currentlyrunning.
            * @returns  Toybox.Application.AppBase
            */
            public function getApp() { }


            /**
            * Load a resource from the executable.
            * @param resource - (Toybox.Lang.Symbol)
            * @returns 
            */
            public function loadResource(resource) { }


        
        public class AppBase {

            /**
            * Check if application trial messages are allowed.Returns true if the application should allow the productto push unlock instruction pages for locked apps.Returns true by default.
            * @returns  Toybox.Lang.Boolean
            */
            public function allowTrialMessage() { }


            /**
            * Override to provide a WatchUi.View for a goal that has triggered within a watch face. If a goal is reached when a watch face is running, this function will be triggered. The type of goal that was met will be provided, and the AppBase should return a View that displays a goal reached message and/or animations for that goal. If a View is returned from this function, the main watch face view will be shutdown, and then new View will pushed. If this method is not overridden in the AppBase, or if it returns null, the native goal screens will be shown.
            * @param goalType - (Toybox.Lang.Number)
            * @returns 
            */
            public function getGoalView(goalType) { }


            /**
            * Override to provide the initial WatchUi.View andWatchUi.InputDelegate of theapplication.Providing a WatchUi.InputDelegate is optional for widgets and watch-apps.For watch faces and data fields, an Array containing just a WatchUi.View should be returned as input is not available for these app types.
            * @returns  Toybox.Lang.Array
            */
            public function getInitialView() { }


            /**
            * Get the data associated with a given key from the object store. Properties must first be set with setProperty() before they are can be obtained with getProperty. Note: Symbols can change from build to build and are not to be used for for Keys or Values.
            * @param key - (Toybox.Lang.Object)
            * @returns  
            */
            public function getProperty(key) { }


            /**
            * Get a ServiceDelegate to runbackground tasks for this app.When a ServiceDelegate is retrieved, the following will occur:The method triggered within the ServiceDelegate will be runThe background task will exit using Background.exit() or System.exit()The background task will be automatically terminated after 30 seconds if it is not exited by these methods
            * @returns  Toybox.Lang.Array
            */
            public function getServiceDelegate() { }


            /**
            * Override to provide the settings WatchUi.View andWatchUi.InputDelegate of theapplication.This function is only applicable to Watchfaces and Datafields.
            * @returns  Toybox.Lang.Array
            */
            public function getSettingsView() { }


            /**
            * Get a SyncDelegate objectthat communicates sync status to the system for syncing contentto the device.Supported Devices:Captain MarvelD2™ AirD2™ DeltaD2™ Delta PXD2™ Delta SDarth Vader™Descent™ Mk2 / Descent™ Mk2iEdge® 1030Edge® 1030 / BontragerEdge® 1030 PlusEdge® 530Edge® 830fēnix® 5 Plusfēnix® 5S Plusfēnix® 5X Plusfēnix® 6 Pro / 6 Sapphire / 6 Pro Solar / 6 Pro Dual Power / quatix® 6fēnix® 6S Pro / 6S Sapphire / 6S Pro Solar / 6S Pro Dual Powerfēnix® 6X Pro / 6X Sapphire / 6X Pro Solar / tactix® Delta Sapphire / Delta Solar / Delta Solar - Ballistics Edition / quatix® 6X / 6X Solar / 6X Dual PowerFirst AvengerForerunner® 245 MusicForerunner® 645 MusicForerunner® 745Forerunner® 945MARQ™ AdventurerMARQ™ AthleteMARQ™ AviatorMARQ® Captain / MARQ® Captain: American Magic EditionMARQ™ CommanderMARQ™ DriverMARQ™ ExpeditionMARQ™ GolferRey™Venu™Venu™ Mercedes-Benz® CollectionVenu® Sq. Music Editionvívoactive® 3 Musicvívoactive® 3 Music LTEvívoactive® 4vívoactive® 4S
            * @returns  Toybox.Communications.SyncDelegate
            */
            public function getSyncDelegate() { }


            /**
            * Override to return the number of days remaining in the trialIf a developer wishes to implement time-based app trials, theywill need to override this function to return the number of daysremaining in the trial. This function will be called on app startupto determine if a trial is active and push a notice to the user ofhow many days remain in the trial. Note that ifallowTrialMessage()is overridden to return false, no notifications will be displayed.
            * @returns  Toybox.Lang.Number
            */
            public function getTrialDaysRemaining() { }


            /**
            * Check if the application is in trial mode.This will always return true for developmentbuild apps. If the app has been signed by the storeit will return the current unlock state of the app.This method should not be overridden or your trial mode functionalitycould cease to function correctly.
            * @returns  Toybox.Lang.Boolean
            */
            public function isTrial() { }


            /**
            * Handle data passed from a ServiceDelegate to the application. When the Background process terminates, a data payload may be available. If the main application is active when this occurs, the data will be passed directly to the application's onBackgroundData() method. If the main application is not active, the data will be saved until the next time the application is launched and will be passed to the application after the onStart() method completes.
            * @param data - (Toybox.Lang.Object)
            * @returns  
            */
            public function onBackgroundData(data) { }


            /**
            * Method called at startup to allow handling of app initialization. Before the initial WatchUi.View is retrieved, onStart() is called. Application level settings can be initialized or retrieved from the object store before the initial View is created. This method must be overridden to handle your own app initialization.
            * @param state - (Toybox.Lang.Dictionary)
            * @returns  
            */
            public function onStart(state) { }


            /**
            * Override to handle application cleanup upon termination. If the application needs to save data to the object store it should be done in this function. Once the function is complete, the application will terminate.
            * @param state - (Toybox.Lang.Dictionary)
            * @returns  
            */
            public function onStop(state) { }


            /**
            * Store the given data in the object. Keys can be of the following types: String Number Float Boolean Char Long Double Values can be of the following types: String Number Float Boolean Char Long Double Array Dictionary Array and Dictionary values may contain null values or any of the above listed types. There is a limit on the size of the Properties of 32 KB. If this limit is reached, the properties will not be saved or reloaded. Note: Background processes cannot save properties. Note: Symbols can change from build to build and are not to be used for for Keys or Values.
            * @param key - The key used to store and retrieve the value from the object store (cannot be a Symbol);;value
            * @param value -  the object store (cannot be a Symbol);;value
            * @returns  
            */
            public function setProperty(key,value) { }


        }


        public class AudioContentProviderApp {

            /**
            * Get a ContentDelegate for use by the system to get and iterate through media content on the device.
            * @returns  
            */
            public function getContentDelegate() { }


            /**
            * Get the initial view for configuring playback.
            * @returns  Toybox.Lang.Array
            */
            public function getPlaybackConfigurationView() { }


            /**
            * Get the initial view for configuring sync.
            * @returns  Toybox.Lang.Array
            */
            public function getSyncConfigurationView() { }


            /**
            * This has been deprecatedThis method will be removed in Connect IQ 6.0.0Get a SyncDelegate object thatcommunicates sync status to the system for syncing media content tothe device.
            * @returns  Toybox.Media.SyncDelegate
            */
            public function getSyncDelegate() { }


        }


        public class ObjectStoreAccessException {

        }


    }

    module Properties {

        public class InvalidKeyException {

        }


    }

    module Storage {

    }

    module Attention {

        
        public class ToneProfile {

            /**
            * Constructor
            * @param aFrequency - (Toybox.Lang.Number)
            * @param aDuration - (Toybox.Lang.Number)
            * @returns  
            */
            public function initialize(aFrequency,aDuration) { }


        }


        public class VibeProfile {

            /**
            * Constructor
            * @param dutyCycleVal - (Toybox.Lang.Number)
            * @param lengthVal - (Toybox.Lang.Number)
            * @returns  
            */
            public function initialize(dutyCycleVal,lengthVal) { }


        }


    }

    module Background {

            /**
            * Remove the active goal background event of specified type for the application.
            * @param goalType - (Toybox.Lang.Number)
            * @returns  
            */
            public function deleteGoalEvent(goalType) { }


            /**
            * Terminates the current background process. All background processes should call this method when they have completed the desired tasks. Data passed to this method will either be passed immediately to the active application if it is running, or will be saved and passed to the application the next time it runs. Data must be one of the following types: String Number Float Boolean Char Long Double Array Dictionary Arrays and Dictionaries may contain null values or any of the above listed types. If no data should be passed to the main process, null may be specified. This method will exit if called by a background process, but will do nothing if called by the main application process.
            * @param backgroundData - (Toybox.Lang.Object)
            * @returns  
            */
            public function exit(backgroundData) { }


            /**
            * Get whether a background event is registered with registerForGoalEvent().
            * @param goalType - (Toybox.Lang.Number)
            * @returns 
            */
            public function getGoalEventRegistered(goalType) { }


            /**
            * Get the time the last temporal background event was triggered.This is useful for ensuring new events are not scheduled within the fiveminute minimum time allowed between temporal events.Example:Register a new temporal background event as soon as allowedusing Toybox.Background;using Toybox.Time;const FIVE_MINUTES = new Time.Duration(5 * 60);var lastTime = Background.getLastTemporalEventTime();if (lastTime != null) {// Events scheduled for a time in the past trigger immediatelyvar nextTime = lastTime.add(FIVE_MINUTES);Background.registerForTemporalEvent(nextTime);} else {Background.registerForTemporalEvent(Time.now());}
            * @returns  Toybox.Time.Moment
            */
            public function getLastTemporalEventTime() { }


            /**
            * Get whether a background event is registered withregisterForOAuthResponseEvent()
            * @returns  Toybox.Lang.Boolean
            */
            public function getOAuthResponseEventRegistered() { }


            /**
            * Get whether a background event is registered withregisterForPhoneAppMessageEvent()Supported Devices:Approach® S60Approach® S62Captain MarvelD2™ AirD2™ BravoD2™ Bravo TitaniumD2™ CharlieD2™ DeltaD2™ Delta PXD2™ Delta SDarth Vader™Descent™ Mk1Descent™ Mk2 / Descent™ Mk2iEdge® 130Edge® 130 Plusepix™fēnix® 3 / tactix® Bravo / quatix® 3fēnix® 3 HRfēnix® 5 / quatix® 5fēnix® 5 Plusfēnix® 5Sfēnix® 5S Plusfēnix® 5X / tactix® Charliefēnix® 5X Plusfēnix® 6 / 6 Solar / 6 Dual Powerfēnix® 6 Pro / 6 Sapphire / 6 Pro Solar / 6 Pro Dual Power / quatix® 6fēnix® 6S / 6S Solar / 6S Dual Powerfēnix® 6S Pro / 6S Sapphire / 6S Pro Solar / 6S Pro Dual Powerfēnix® 6X Pro / 6X Sapphire / 6X Pro Solar / tactix® Delta Sapphire / Delta Solar / Delta Solar - Ballistics Edition / quatix® 6X / 6X Solar / 6X Dual Powerfēnix® ChronosFirst AvengerForerunner® 230Forerunner® 235Forerunner® 245Forerunner® 245 MusicForerunner® 630Forerunner® 645Forerunner® 645 MusicForerunner® 735xtForerunner® 745Forerunner® 920XTForerunner® 935Forerunner® 945GPSMAP® 66s / 66sr / 66stGPSMAP® 86s / 86sc / 86i / 86sciMARQ™ AdventurerMARQ™ AthleteMARQ™ AviatorMARQ® Captain / MARQ® Captain: American Magic EditionMARQ™ CommanderMARQ™ DriverMARQ™ ExpeditionMARQ™ GolferRey™Venu™Venu™ Mercedes-Benz® CollectionVenu® SqVenu® Sq. Music Editionvívoactive®vívoactive® 3vívoactive® 3 Mercedes-Benz® Collectionvívoactive® 3 Musicvívoactive® 3 Music LTEvívoactive® 4vívoactive® 4Svívoactive® HR
            * @returns  Toybox.Lang.Boolean
            */
            public function getPhoneAppMessageEventRegistered() { }


            /**
            * Get whether a background event is registered withregisterForPushNotificationEvent()
            * @returns  Toybox.Lang.Boolean
            */
            public function getPushNotificationEventRegistered() { }


            /**
            * Get whether a background event is registered withregisterForSleepEvent().
            * @returns  Toybox.Lang.Boolean
            */
            public function getSleepEventRegistered() { }


            /**
            * Get whether a background event is registered withregisterForStepsEvent().
            * @returns  Toybox.Lang.Boolean
            */
            public function getStepsEventRegistered() { }


            /**
            * Get the Moment or Duration with which a background event is registered byregisterForTemporalEvent().
            * @returns  Toybox.Time.Moment, Toybox.Time.Duration
            */
            public function getTemporalEventRegisteredTime() { }


            /**
            * Get whether a background event is registered withregisterForWakeEvent().
            * @returns  Toybox.Lang.Boolean
            */
            public function getWakeEventRegistered() { }


            /**
            * Register a background event that triggers when the user reaches a specified goal.
            * @param goalType - (Toybox.Lang.Number)
            * @returns  
            */
            public function registerForGoalEvent(goalType) { }


            /**
            * Register a background event that triggers at a specific time or at a regular interval. Temporal background events may be registered to run at a specific point in time by providing a Moment at which the event should trigger, or may be registered to run at a periodically by specifying an interval Duration. If a temporal event is scheduled for a time in the past, the event will trigger immediately. Temporal events cannot be set to occur less than 5 minutes after the last temporal event occurred. For watch-apps and widgets the 5 minute restriction is cleared on application startup if the event was specified using a Moment. Only one temporal event may be registered at a time. Calling registerForTemporalEvent will overwrite any previously registered temporal events.
            * @param time - (Toybox.Time.Moment, Toybox.Time.Duration)
            * @returns  
            */
            public function registerForTemporalEvent(time) { }


            /**
            * Display a confirmation dialog requesting to launch the application to which the background task belongs. If the dialog is confirmed, the application will open. If the dialog is declined, the application will not open and the dialog will be dismissed. This request is only valid for widget or device app background tasks, and will be ignored by watch face apps. Background.exit() must be called at some point in the background process after this method is invoked because the confirmation dialog will only trigger after the background task exits.
            * @param message - (Toybox.Lang.String)
            * @returns  
            */
            public function requestApplicationWake(message) { }


        
        public class ExitDataSizeLimitException {

        }


        public class InvalidBackgroundTimeException {

            /**
            * Constructor
            * @param msg - (Toybox.Lang.String)
            * @returns  
            */
            public function initialize(msg) { }


        }


        public class MessageSizeLimitException {

        }


    }

    module BluetoothLowEnergy {

            /**
            * Retrieves the CCCD Uuid
            * @returns  Toybox.BluetoothLowEnergy.Uuid
            */
            public function cccdUuid() { }


            /**
            * Accessor for determining the number of available connections
            * @returns  Toybox.Lang.Number
            */
            public function getAvailableConnectionCount() { }


            /**
            * Retrieve an Iterator of all currently paired devices accessible to theApplication
            * @returns  Toybox.BluetoothLowEnergy.Iterator
            */
            public function getPairedDevices() { }


            /**
            * Converts long representation of a UUID to a Uuid object
            * @param mostSigBits - (Toybox.Lang.Long)
            * @param leastSigBits - (Toybox.Lang.Long)
            * @returns 
            */
            public function longToUuid(mostSigBits,leastSigBits) { }


            /**
            * Pairs a peripheral device seen in scanning with the system. The BLE Subsystem will begin to search for the device specified by the scanResult parameter. Once the device is found and connected, onConnectedStateChanged() will be called on the registered BleDelegate with the associated device object This pairing does not persist across application instances.
            * @param scanResult - (Toybox.BluetoothLowEnergy.ScanResult)
            * @returns 
            */
            public function pairDevice(scanResult) { }


            /**
            * Starts the BLE Scanning Operations;;Once scanning is started onScanResults() will be called;;on the registered BleDelegate as Advertising data is received.
            * @returns  
            */
            public function setScanState() { }


            /**
            * Converts the String Representation of a UUID into a Uuid Object
            * @param str - (Toybox.Lang.String)
            * @returns 
            */
            public function stringToUuid(str) { }


        
        public class BleDelegate {

            /**
            * After enabling notifications or indications on a characteristic by enabling the appropriate bit of the CCCD of the characteristic this function will be called after every change to the characteristic.
            * @param characteristic - (Toybox.BluetoothLowEnergy.Characteristic)
            * @param value - (Toybox.Lang.ByteArray)
            * @returns  
            */
            public function onCharacteristicChanged(characteristic,value) { }


            /**
            * After requesting a read operation on a characteristic using Characteristic.requestRead() this function will be called when the operation is completed.
            * @param characteristic - (Toybox.BluetoothLowEnergy.Characteristic)
            * @param status - (Toybox.Lang.Number)
            * @param value - (Toybox.Lang.ByteArray)
            * @returns  
            */
            public function onCharacteristicRead(characteristic,status,value) { }


            /**
            * After requesting a write operation on a characteristic using Characteristic.requestWrite() this function will be called when the operation is completed.
            * @param characteristic - (Toybox.BluetoothLowEnergy.Characteristic)
            * @param status - (Toybox.Lang.Number)
            * @returns  
            */
            public function onCharacteristicWrite(characteristic,status) { }


            /**
            * After pairing a device this will be called after the connection is made
            * @param device - (Device)
            * @param state -  was changed;;state
            * @returns  
            */
            public function onConnectedStateChanged(device,state) { }


            /**
            * After requesting a read operation on a descriptor using Descriptor.requestRead() this function will be called when the operation is completed.
            * @param descriptor - (Toybox.BluetoothLowEnergy.Descriptor)
            * @param status - (Toybox.Lang.Number)
            * @param value - (Toybox.Lang.ByteArray)
            * @returns  
            */
            public function onDescriptorRead(descriptor,status,value) { }


            /**
            * After requesting a write operation on a descriptor using Descriptor.requestWrite() this function will be called when the operation is completed.
            * @param descriptor - (Toybox.BluetoothLowEnergy.Descriptor)
            * @param status - (Toybox.Lang.Number)
            * @returns  
            */
            public function onDescriptorWrite(descriptor,status) { }


            /**
            * After Registering a UUID this callback will notify of the result of the registration request
            * @param uuid - (Toybox.BluetoothLowEnergy.Uuid)
            * @param status - (Toybox.Lang.Number)
            * @returns  
            */
            public function onProfileRegister(uuid,status) { }


            /**
            * If a scan is running this will be called when new ScanResults are received
            * @param scanResults - (Toybox.BluetoothLowEnergy.Iterator)
            * @returns  
            */
            public function onScanResults(scanResults) { }


            /**
            * When the state of scanning is modified the system will call this function with the new state and a status indicating the result of the last call to BluetoothLowEnergy.setScanState().
            * @param scanState - (Toybox.Lang.Number)
            * @param status - (Toybox.Lang.Number)
            * @returns  
            */
            public function onScanStateChange(scanState,status) { }


        }


        public class Characteristic {

            /**
            * Retrieves the Descriptor with a specified UUID
            * @param uuid - (Toybox.BluetoothLowEnergy.Uuid)
            * @returns 
            */
            public function getDescriptor(uuid) { }


            /**
            * Retrieves an Iterator over the Descriptorsdiscovered in the characteristicThis will only provide descriptors that have been registeredusing BluetoothLowEnergy.registerProfile()
            * @returns  Toybox.BluetoothLowEnergy.Iterator
            */
            public function getDescriptors() { }


            /**
            * Retrieves the Characteristic's ServiceRetrieve the Service that this characteristic belongs to
            * @returns  Toybox.BluetoothLowEnergy.Service
            */
            public function getService() { }


            /**
            * Return the UUID of the Characteristic
            * @returns  Toybox.BluetoothLowEnergy.Uuid
            */
            public function getUuid() { }


            /**
            * Requests a write operation Once the operation is completed BleDelegate.onCharacteristicWrite() will be called on the registered BleDelegate with the status of the operation Support for long writes is not implemented. Requesting a write on a characteristic longer than 20 bytes will cause a BluetoothLowEnergy.InvalidRequestException
            * @param value - (Toybox.Lang.ByteArray)
            * @param options - (Toybox.Lang.Dictionary)
            * @returns  
            */
            public function requestWrite(value,options) { }


        }


        public class Descriptor {

            /**
            * Retrieves the Descriptors CharacteristicRetrieve the Characteristic that this descriptor belongs to
            * @returns  Toybox.BluetoothLowEnergy.Characteristic
            */
            public function getCharacteristic() { }


            /**
            * Returns the UUID of the Descriptor
            * @returns  Toybox.BluetoothLowEnergy.Uuid
            */
            public function getUuid() { }


            /**
            * Requests a write operation Writes the locally stored value to the remote descriptor. Once the operation is completed BleDelegate.onDescriptorWrite() will be called on the registered BleDelegate with the status of the operation Support for long writes is not implemented. Requesting a write on a characteristic longer than 20 bytes will cause a BluetoothLowEnergy.InvalidRequestException
            * @param value - (Toybox.Lang.ByteArray)
            * @returns  
            */
            public function requestWrite(value) { }


        }


        public class DeviceConfig {

            /**
            * Constructor
            * @param options - (Toybox.Lang.Dictionary)
            * @returns  
            */
            public function initialize(options) { }


        }


        public class DevicePairException {

        }


        public class InvalidRequestException {

        }


        public class HeartRateIterator {

            /**
            * Get the maximum heart rate contained in this iterator.
            * @returns  Toybox.Lang.Number
            */
            public function getMax() { }


            /**
            * Get the minimum heart rate contained in this iterator.
            * @returns  Toybox.Lang.Number
            */
            public function getMin() { }


            /**
            * Get the next entry in the iterator.This must be called to get the initial data from the iterator.
            * @returns  Toybox.ActivityMonitor.HeartRateSample
            */
            public function next() { }


        }


        public class ProfileRegistrationException {

        }


        public class ScanResult {

            /**
            * Compares the ScanResult to another object for equality
            * @param other - (Toybox.Lang.Object)
            * @returns 
            */
            public function equals(other) { }


            /**
            * Gets the Advertised Appearance of the sensor
            * @returns  Toybox.Lang.Number
            */
            public function getAppearance() { }


            /**
            * Gets the advertised device nameIf no device name is advertised this function will return null
            * @returns  Toybox.Lang.String
            */
            public function getDeviceName() { }


            /**
            * Gets Manufacturer Specific Data for a given Manufacturer Manufacturer Specific Data is decoded according to the BLE Core Specification V4.0 Volume 3 Part C Section 18.11
            * @param manufacturerId - (Toybox.Lang.Number)
            * @returns 
            */
            public function getManufacturerSpecificData(manufacturerId) { }


            /**
            * Gets an iterator over all of the Manufacturer Specific Data ADEntries in the advertising packetManufacturer Specific Data is decoded according to the BLE CoreSpecification V4.0 Volume 3 Part C Section 18.11
            * @returns  Toybox.BluetoothLowEnergy.Iterator
            */
            public function getManufacturerSpecificDataIterator() { }


            /**
            * Gets the Raw Data that was retrieved in the advertising packet
            * @returns  Toybox.Lang.ByteArray
            */
            public function getRawData() { }


            /**
            * Gets the received signal strength indication (RSSI) value of thereceived advertisement.
            * @returns  Toybox.Lang.Number
            */
            public function getRssi() { }


            /**
            * Gets Service Data for a specific UUID Service data is decoded according to the BLE Core Specification V4.0 Volume 3 Part C Section 18.10
            * @param uuid - (Toybox.BluetoothLowEnergy.Uuid)
            * @returns 
            */
            public function getServiceData(uuid) { }


            /**
            * Gets service UUIDs advertised by the deviceIf the advertising data contains any service UUID values. They canbe accessed through this iterator. If there are no advertised UUIDsthis function will return an empty iterator.
            * @returns  Toybox.BluetoothLowEnergy.Iterator
            */
            public function getServiceUuids() { }


            /**
            * Check that advertised device BLE address matches
            * @param address - (Toybox.Lang.ByteArray, Toybox.Lang.String)
            * @returns 
            */
            public function hasAddress(address) { }


            /**
            * Determines if another scan result represents the same device as another.
            * @param other - (Toybox.BluetoothLowEnergy.ScanResult)
            * @returns 
            */
            public function isSameDevice(other) { }


        }


        public class Service {

            /**
            * Retrieves the Characteristic with a specified UUID
            * @param uuid - (Toybox.BluetoothLowEnergy.Uuid)
            * @returns 
            */
            public function getCharacteristic(uuid) { }


            /**
            * Retrieves an Iterator over the Characteristics in a ServiceThis will only provide characteristics that have been registeredusing BluetoothLowEnergy.registerProfile()
            * @returns  Toybox.BluetoothLowEnergy.Iterator
            */
            public function getCharacteristics() { }


            /**
            * Retrieves the Service's DeviceRetrieve the Device that this service belongs to
            * @returns  Toybox.BluetoothLowEnergy.Device
            */
            public function getDevice() { }


            /**
            * Returns the UUID of the service
            * @returns  Toybox.BluetoothLowEnergy.Uuid
            */
            public function getUuid() { }


        }


        public class Uuid {

            /**
            * Compares the Uuid to another object for equality
            * @param other - (Toybox.Lang.Object)
            * @returns 
            */
            public function equals(other) { }


            /**
            * Convert UUID to a Little Endian Byte Array
            * @returns  Toybox.Lang.ByteArray
            */
            public function toByteArray() { }


            /**
            * Convert a UUID to a String
            * @returns  Toybox.Lang.String
            */
            public function toString() { }


        }


        public class UuidFormatException {

        }


    }

    module Communications {

            /**
            * Convert a URL String into a percent-encoded string. The reserved characters in the string will be replaced with their corresponding hex-value pairs. This follows the URI-encoding scheme as detailed by RFC 3986.
            * @param url - (Toybox.Lang.String)
            * @returns 
            */
            public function encodeURL(url) { }


            /**
            * Generate the value for the "Authorization" header in an OAuth 1.0a request. The returned value can be set as the "Authorization" header for makeWebRequest().
            * @param url - (Toybox.Lang.String)
            * @param params - (Toybox.Lang.Dictionary)
            * @param requestMethod - (Toybox.Lang.Number)
            * @param signatureMethod - (Toybox.Lang.Number)
            * @param token - (Toybox.Lang.String)
            * @param tokenSecret - (Toybox.Lang.String)
            * @param consumerKey - (Toybox.Lang.String)
            * @param consumerSecret - (Toybox.Lang.String)
            * @returns 
            */
            public function generateSignedOAuthHeader(url,params,requestMethod,signatureMethod,token,tokenSecret,consumerKey,consumerSecret) { }


            /**
            * This has been deprecatedThis method will be removed in Connect IQ 4.0.0Get the MailboxIterator for this Application's mailbox.Supported Devices:Approach® S60Approach® S62Captain MarvelD2™ AirD2™ BravoD2™ Bravo TitaniumD2™ CharlieD2™ DeltaD2™ Delta PXD2™ Delta SDarth Vader™Descent™ Mk1Descent™ Mk2 / Descent™ Mk2iEdge® 130Edge® 130 Plusepix™fēnix® 3 / tactix® Bravo / quatix® 3fēnix® 3 HRfēnix® 5 / quatix® 5fēnix® 5 Plusfēnix® 5Sfēnix® 5S Plusfēnix® 5X / tactix® Charliefēnix® 5X Plusfēnix® 6 / 6 Solar / 6 Dual Powerfēnix® 6 Pro / 6 Sapphire / 6 Pro Solar / 6 Pro Dual Power / quatix® 6fēnix® 6S / 6S Solar / 6S Dual Powerfēnix® 6S Pro / 6S Sapphire / 6S Pro Solar / 6S Pro Dual Powerfēnix® 6X Pro / 6X Sapphire / 6X Pro Solar / tactix® Delta Sapphire / Delta Solar / Delta Solar - Ballistics Edition / quatix® 6X / 6X Solar / 6X Dual Powerfēnix® ChronosFirst AvengerForerunner® 230Forerunner® 235Forerunner® 245Forerunner® 245 MusicForerunner® 630Forerunner® 645Forerunner® 645 MusicForerunner® 735xtForerunner® 745Forerunner® 920XTForerunner® 935Forerunner® 945GPSMAP® 66s / 66sr / 66stGPSMAP® 86s / 86sc / 86i / 86sciMARQ™ AdventurerMARQ™ AthleteMARQ™ AviatorMARQ® Captain / MARQ® Captain: American Magic EditionMARQ™ CommanderMARQ™ DriverMARQ™ ExpeditionMARQ™ GolferRey™Venu™Venu™ Mercedes-Benz® CollectionVenu® SqVenu® Sq. Music Editionvívoactive®vívoactive® 3vívoactive® 3 Mercedes-Benz® Collectionvívoactive® 3 Musicvívoactive® 3 Music LTEvívoactive® 4vívoactive® 4Svívoactive® HR
            * @returns  Toybox.Communications.MailboxIterator
            */
            public function getMailbox() { }


            /**
            * Request an image through Garmin Connect Mobile. GCM will scale and dither the image based on the capabilities of the device, but the user will be able to pass additional options (like dithering it down to a one color image)
            * @param url - (Toybox.Lang.String)
            * @param parameters - (Toybox.Lang.Dictionary)
            * @param options - (Toybox.Lang.Dictionary)
            * @param responseCallback - (Toybox.Lang.Method)
            * @returns  
            */
            public function makeImageRequest(url,parameters,options,responseCallback) { }


            /**
            * This has been deprecated This method will be removed in Connect IQ 4.0.0 To use Garmin Connect Mobile as a proxy to the web, use makeJsonRequest(). The request is asynchronous; the responseCallback will be called when the request returns.
            * @param url - (Toybox.Lang.String)
            * @param parameters - (Toybox.Lang.Dictionary)
            * @param options - (Toybox.Lang.Dictionary)
            * @param responseCallback - (Toybox.Lang.Method)
            * @returns  
            */
            public function makeJsonRequest(url,parameters,options,responseCallback) { }


            /**
            * Request an OAuth sign-in through Garmin Connect Mobile. A notification will trigger on the phone, that when clicked, provides a web view that shows requestUrl. If the user grants permission to the app, then the callback registered by registerForOAuthMessages() will be called with an OAuthMessage from the OAuth response.
            * @param requestUrl - (Toybox.Lang.String)
            * @param requestParams - (Toybox.Lang.Dictionary)
            * @param resultUrl - (Toybox.Lang.String)
            * @param resultType - (Toybox.Lang.Number)
            * @param resultKeys - (Toybox.Lang.Dictionary)
            * @returns  
            */
            public function makeOAuthRequest(requestUrl,requestParams,resultUrl,resultType,resultKeys) { }


            /**
            * Use Garmin Connect Mobile as a proxy to the web. Web requests are asynchronous. The supplied response callback method will be called when the request returns.
            * @param url - (Toybox.Lang.String)
            * @param parameters - (Toybox.Lang.Dictionary)
            * @param options - (Toybox.Lang.Dictionary)
            * @param responseCallback - (Toybox.Lang.Method)
            * @returns  
            */
            public function makeWebRequest(url,parameters,options,responseCallback) { }


            /**
            * Send a system notification to indicate overall sync progress.
            * @param percentageComplete - (Toybox.Lang.Number)
            * @returns  
            */
            public function notifySyncProgress(percentageComplete) { }


            /**
            * Request that GCM issue a phone notification that will open a web page. This method will push a phone notification that must be accepted by the user. If the used accepts it, a web page defined by this method will be opened in the default browser on the phone.
            * @param url - (Toybox.Lang.String)
            * @param params - (Toybox.Lang.Dictionary)
            * @param options - (Toybox.Lang.Dictionary)
            * @returns  
            */
            public function openWebPage(url,params,options) { }


            /**
            * Register a callback for receiving OAuth messages. The callback will be called once for each received OAuth message. If there are messages waiting for the app when this function is called, the callback will immediately be called once for each waiting message.
            * @param method - (Toybox.Lang.Method)
            * @returns  
            */
            public function registerForOAuthMessages(method) { }


            /**
            * Register a callback for receiving Phone App messages. The callback will be called once for each message received. If there are messages waiting for the app when this function is called, the callback will immediately be called once for each waiting message.
            * @param method - (Toybox.Lang.Method)
            * @returns  
            */
            public function registerForPhoneAppMessages(method) { }


            /**
            * This has been deprecated This method will be removed in Connect IQ 4.0.0 Add a listener for mailbox events. The listener method is called whenever a new message is received.
            * @param listener - (Toybox.Lang.Method)
            * @returns  
            */
            public function setMailboxListener(listener) { }


            /**
            * Send data across the the BLE link.
            * @param content - (Toybox.Lang.Object)
            * @param options - (Toybox.Lang.Dictionary)
            * @param listener - (Toybox.Communications.ConnectionListener)
            * @returns  
            */
            public function transmit(content,options,listener) { }


        
        public class ConnectionListener {

        }


        public class MailboxIterator {

        }


        public class Message {

            /**
            * Get the ANT data packet.
            * @returns  Toybox.Lang.Array
            */
            public function getPayload() { }


            /**
            * Set the ANT data packet.
            * @param data - (Toybox.Lang.Array)
            * @returns  
            */
            public function setPayload(data) { }


        }


        public class OAuthMessage {

            /**
            * An HTTP response code (positive value) or BLE error code (negative value). Note: The value in this field is unreliable and should not be referenced. It is generally safer to examine the message payload to check the status of the response.  
            * @type Toybox.Lang.Number
            */
            public var responseCode;


        }


        public class PhoneAppMessage {

        }


        public class SyncDelegate {

            /**
            * Check if a sync is needed.
            * @returns  Toybox.Lang.Boolean
            */
            public function isSyncNeeded() { }


        }


    }

    module Cryptography {

        
        public class Cipher {

            /**
            * Decrypt data with the key, depending on how the cipher was initialized. Decryption can be broken up into two or more calls to decrypt(). For MODE_CBC, the ciphertext length (in bytes) must be a multiple of the block size.
            * @param ciphertext - (Toybox.Lang.ByteArray)
            * @returns 
            */
            public function decrypt(ciphertext) { }


        }


        public class CipherBasedMessageAuthenticationCode {

            /**
            * Return the digest of the authentication code.The state of the object is reset and can be used to computea new authentication code with the same options.
            * @returns  Toybox.Lang.ByteArray
            */
            public function digest() { }


            /**
            * Constructor
            * @param options - (Toybox.Lang.Dictionary)
            * @returns  
            */
            public function initialize(options) { }


        }


        public class Hash {

            /**
            * Get the current digest of the message that has been hashed.Note:This method resets the state of the Hash object, which can be used to compute a new hash
            * @returns  Toybox.Lang.ByteArray
            */
            public function digest() { }


            /**
            * Constructor
            * @param options - (Toybox.Lang.Dictionary)
            * @returns  
            */
            public function initialize(options) { }


        }


        public class HashBasedMessageAuthenticationCode {

            /**
            * Return the digest of the authentication code.The state of the object is reset and can be used to computea new authentication code with the same options.
            * @returns  Toybox.Lang.ByteArray
            */
            public function digest() { }


            /**
            * Constructor
            * @param options - (Toybox.Lang.Dictionary)
            * @returns  
            */
            public function initialize(options) { }


        }


        public class InvalidBlockSizeException {

            /**
            * Constructor
            * @param msg - (Toybox.Lang.String)
            * @returns  
            */
            public function initialize(msg) { }


        }


        public class InvalidKeyException {

        }


        public class KeyAgreement {

            /**
            * Add a public Key to KeyAgreement.
            * @param key - (Toybox.Cryptography.Key)
            * @returns  
            */
            public function addKey(key) { }


            /**
            * Constructor
            * @param options - (Toybox.Lang.Dictionary)
            * @returns  
            */
            public function initialize(options) { }


        }


        public class KeyPair {

            /**
            * Get the private key.
            * @returns  Toybox.Cryptography.Key
            */
            public function getPrivateKey() { }


            /**
            * Constructor A KeyPair can be initialized from a private key by passing a private key ByteArray from an initialized Key object into the :privateKey option of the initialize method for this class. If no private key is provided, then both a private and public key will be generated using the required :algorithm option.
            * @param options - (Toybox.Lang.Dictionary)
            * @returns  
            */
            public function initialize(options) { }


        }


    }

    module FitContributor {

        
        public class Field {

            /**
            * Set the value to write to this Field.
            * @param input - (Toybox.Lang.Object)
            * @returns  
            */
            public function setData(input) { }


        }


    }

    module Graphics {

            /**
            * Get a text string to fit in a specified area
            * @param text - (Toybox.Lang.String)
            * @param font - (Toybox.Lang.Number)
            * @param width - (Toybox.Lang.Number)
            * @param height - (Toybox.Lang.Number)
            * @param truncate - (Toybox.Lang.Boolean)
            * @returns 
            */
            public function fitTextToArea(text,font,width,height,truncate) { }


            /**
            * Get the recommended distance above the baseline for single spaced text. The base line is the line on which the text sits.
            * @param font - (Toybox.Lang.Number)
            * @returns 
            */
            public function getFontAscent(font) { }


            /**
            * Get the recommended distance below the baseline for single spaced text. The base line is the line on which the text sits.
            * @param font - (Toybox.Lang.Number)
            * @returns 
            */
            public function getFontDescent(font) { }


            /**
            * Get the height (ascent plus descent) of the given font.
            * @param font - (Toybox.Lang.Number)
            * @returns 
            */
            public function getFontHeight(font) { }


        
        public class BufferedBitmap {

            /**
            * Get the Dc to draw on the buffered bitmap.
            * @returns  Toybox.Graphics.Dc
            */
            public function getDc() { }


            /**
            * null if this surface uses the system palette
            * @returns  Toybox.Lang.Array
            */
            public function getPalette() { }


            /**
            * Constructor
            * @param options - (Toybox.Lang.Dictionary)
            * @returns  
            */
            public function initialize(options) { }


        }


        public class Dc {

            /**
            * Draw an arc. 0 degrees: 3 o'clock position. 90 degrees: 12 o'clock position. 180 degrees: 9 o'clock position. 270 degrees: 6 o'clock position.
            * @param x - (Toybox.Lang.Number)
            * @param y - (Toybox.Lang.Number)
            * @param r - ter;;r
            * @param attr - (Toybox.Lang.Number)
            * @param degreeStart - (Toybox.Lang.Number)
            * @param degreeEnd - (Toybox.Lang.Number)
            * @returns  
            */
            public function drawArc(x,y,r,attr,degreeStart,degreeEnd) { }


            /**
            * Draw a bitmap to the screen.
            * @param x - (Toybox.Lang.Number)
            * @param y - (Toybox.Lang.Number)
            * @param bitmap - (Toybox.Lang.Object)
            * @returns  
            */
            public function drawBitmap(x,y,bitmap) { }


            /**
            * Draw an ellipse around a point.
            * @param x - (Toybox.Lang.Number)
            * @param y - (Toybox.Lang.Number)
            * @param a - of the ellipse center;;a
            * @param b - Toybox.Lang.Number)
            * @returns  
            */
            public function drawEllipse(x,y,a,b) { }


            /**
            * Draw a line between two points.
            * @param x1 - (Toybox.Lang.Number)
            * @param y1 - (Toybox.Lang.Number)
            * @param x2 - (Toybox.Lang.Number)
            * @param y2 - (Toybox.Lang.Number)
            * @returns  
            */
            public function drawLine(x1,y1,x2,y2) { }


            /**
            * Draw a point on the screen.
            * @param x - (Toybox.Lang.Number)
            * @param y - (Toybox.Lang.Number)
            * @returns  
            */
            public function drawPoint(x,y) { }


            /**
            * Draw a rectangle.
            * @param x - (Toybox.Lang.Number)
            * @param y - (Toybox.Lang.Number)
            * @param width - (Toybox.Lang.Number)
            * @param height - (Toybox.Lang.Number)
            * @returns  
            */
            public function drawRectangle(x,y,width,height) { }


            /**
            * Draw a rounded rectangle.
            * @param x - (Toybox.Lang.Number)
            * @param y - (Toybox.Lang.Number)
            * @param width - (Toybox.Lang.Number)
            * @param height - (Toybox.Lang.Number)
            * @param radius - (Toybox.Lang.Number)
            * @returns  
            */
            public function drawRoundedRectangle(x,y,width,height,radius) { }


            /**
            * Draw text at the given location. This method is not supported for anti-aliased fonts (including most built in fonts) for a BufferedBitmap that has a palette.
            * @param x - (Toybox.Lang.Number)
            * @param y - (Toybox.Lang.Number)
            * @param font - (Toybox.WatchUi.FontResource)
            * @param text - (Toybox.Lang.String)
            * @param justification - ;The String to render. This can be a String loaded from resources or a hard coded String;;justification
            * @returns  
            */
            public function drawText(x,y,font,text,justification) { }


            /**
            * Fill an ellipse with the foreground color.
            * @param x - (Toybox.Lang.Number)
            * @param y - (Toybox.Lang.Number)
            * @param a - of the ellipse center;;a
            * @param b - Toybox.Lang.Number)
            * @returns  
            */
            public function fillEllipse(x,y,a,b) { }


            /**
            * Fill a polygon with the foreground color.
            * @param pts - (Toybox.Lang.Array)
            * @returns  
            */
            public function fillPolygon(pts) { }


            /**
            * Fill a rectangle with the foreground color.
            * @param x - (Toybox.Lang.Number)
            * @param y - (Toybox.Lang.Number)
            * @param width - (Toybox.Lang.Number)
            * @param height - (Toybox.Lang.Number)
            * @returns  
            */
            public function fillRectangle(x,y,width,height) { }


            /**
            * Fill a rounded rectangle with the foreground color.
            * @param x - (Toybox.Lang.Number)
            * @param y - (Toybox.Lang.Number)
            * @param width - (Toybox.Lang.Number)
            * @param height - (Toybox.Lang.Number)
            * @param radius - (Toybox.Lang.Number)
            * @returns  
            */
            public function fillRoundedRectangle(x,y,width,height,radius) { }


            /**
            * Get the height of a font.
            * @param font - (Toybox.WatchUi.FontResource)
            * @returns 
            */
            public function getFontHeight(font) { }


            /**
            * Get the height of the display region that is available to the app.
            * @returns  Toybox.Lang.Number
            */
            public function getHeight() { }


            /**
            * Get the width and height of a String. This takes new lines into account when determining the height. The width is the maximum width for a given line of the String. If a String has two newline characters (\\n) in it, the height would be for three lines and the width would be the width of the longest String.
            * @param text - (Toybox.Lang.String)
            * @param font - (Toybox.WatchUi.FontResource)
            * @returns 
            */
            public function getTextDimensions(text,font) { }


            /**
            * Get the width of a String.
            * @param text - (Toybox.Lang.String)
            * @param font - (Toybox.WatchUi.FontResource)
            * @returns 
            */
            public function getTextWidthInPixels(text,font) { }


            /**
            * Get the width of the display region that is available to the app.
            * @returns  Toybox.Lang.Number
            */
            public function getWidth() { }


            /**
            * Enable anti-aliased drawing for primitives This method is not supported for a BufferedBitmap that has a palette.
            * @param enabled - (Toybox.Lang.Boolean)
            * @returns  
            */
            public function setAntiAlias(enabled) { }


            /**
            * Set the current foreground and background colors.
            * @param foreground - (Toybox.Lang.Number)
            * @param background - (Toybox.Lang.Number)
            * @returns  
            */
            public function setColor(foreground,background) { }


            /**
            * Set the width of a line.
            * @param width - (Toybox.Lang.Number)
            * @returns  
            */
            public function setPenWidth(width) { }


        }


        public class InvalidBitmapResourceException {

            /**
            * Constructor
            * @param msg - (Toybox.Lang.String)
            * @returns  
            */
            public function initialize(msg) { }


        }


        public class InvalidPaletteException {

            /**
            * Constructor
            * @param msg - (Toybox.Lang.String)
            * @returns  
            */
            public function initialize(msg) { }


        }


    }

    module Lang {

            /**
            * Create a formatted String by substituting the given parameters into the given format at the corresponding locations.
            * @param format - (Toybox.Lang.String)
            * @param parameters - (Toybox.Lang.Array)
            * @returns 
            */
            public function format(format,parameters) { }


        
        public class Array {

            /**
            * Add an Object to the end of an Array. When adding an Object, the Array size is increased by one and the new Object is inserted at the new index.
            * @param object - (Toybox.Lang.Object)
            * @returns 
            */
            public function add(object) { }


            /**
            * Add an Array of Objects to the end of an Array. When adding an Array of Objects, the Array is expanded by the size of the provided Array, and all of the new elements are inserted starting at the new index.
            * @param array - (Toybox.Lang.Array)
            * @returns 
            */
            public function addAll(array) { }


            /**
            * Get the index of an Object within the Array.
            * @param object - (Toybox.Lang.Object)
            * @returns 
            */
            public function indexOf(object) { }


            /**
            * Remove an Object from an Array. If the passed Object is found, the Array size is decreased by one and elements beyond it are shifted to the next lower index. If the Array has multiple matches, the matching Object at the lowest index will be removed but the other matching Objects will not be removed. If no Object is given as an argument, the Array will remain unchanged and remove() will return false.
            * @param object - (Toybox.Lang.Object)
            * @returns 
            */
            public function remove(object) { }


            /**
            * Remove Objects from an Array. For each instance of the Object that is found, the Array size is decreased by one and elements beyond it are shifted to the next lower index. If no Object is given as an argument, the Array will remain unchanged and removeAll() will return false.
            * @param object - (Toybox.Lang.Object)
            * @returns 
            */
            public function removeAll(object) { }


            /**
            * Return a new Array that contains the elements of a source Array inreverse order.
            * @returns  Toybox.Lang.Array
            */
            public function reverse() { }


            /**
            * Get the size of an Array.
            * @returns  Toybox.Lang.Number
            */
            public function size() { }


            /**
            * Get a new Array containing a portion of an existing Array.
            * @param startIndex - (Toybox.Lang.Number)
            * @param endIndex - (Toybox.Lang.Number)
            * @returns 
            */
            public function slice(startIndex,endIndex) { }


            /**
            * Convert an Array to a String.This does not convert the elements of the Array into Strings, buttransforms the entire Array into a String.Example:using Toybox.System;var myArray = [1, 2, 3, 4, 5];System.println(myArray[1]);// prints 1var myString = myArray.toString();System.println(myString);// "[1, 2, 3, 4, 5]"System.println(myString[1]);// UnexpectedTypeExceptionSystem.println(myString.substring(0, 5));// "[1, 2"
            * @returns  Toybox.Lang.String
            */
            public function toString() { }


        }


        public class Boolean {

        }


        public class ByteArray {

            /**
            * Add a byte to the end of a ByteArray. When adding a byte, the ByteArray size is increased and new bytes are inserted at the end.
            * @param byte - (Toybox.Lang.Number, Toybox.Lang.Char)
            * @returns 
            */
            public function add(byte) { }


            /**
            * Get a hash code value for a ByteArray.
            * @returns  Toybox.Lang.Number
            */
            public function hashCode() { }


            /**
            * Get the index of a byte within the ByteArray.
            * @param byte - (Toybox.Lang.Number, Toybox.Lang.Char)
            * @returns 
            */
            public function indexOf(byte) { }


            /**
            * Get the size of a ByteArray.
            * @returns  Toybox.Lang.Number
            */
            public function size() { }


            /**
            * Get a new ByteArray containing a portion of an existing ByteArray.
            * @param startIndex - (Toybox.Lang.Number)
            * @param endIndex - (Toybox.Lang.Number)
            * @returns 
            */
            public function slice(startIndex,endIndex) { }


            /**
            * Convert a ByteArray to a String.This does not convert the elements of the ByteArray into Strings, buttransforms the entire ByteArray into a String.
            * @returns  Toybox.Lang.String
            */
            public function toString() { }


        }


        public class Characteristic {

            /**
            * Retrieves the Descriptor with a specified UUID
            * @param uuid - (Toybox.BluetoothLowEnergy.Uuid)
            * @returns 
            */
            public function getDescriptor(uuid) { }


            /**
            * Retrieves an Iterator over the Descriptorsdiscovered in the characteristicThis will only provide descriptors that have been registeredusing BluetoothLowEnergy.registerProfile()
            * @returns  Toybox.BluetoothLowEnergy.Iterator
            */
            public function getDescriptors() { }


            /**
            * Retrieves the Characteristic's ServiceRetrieve the Service that this characteristic belongs to
            * @returns  Toybox.BluetoothLowEnergy.Service
            */
            public function getService() { }


            /**
            * Return the UUID of the Characteristic
            * @returns  Toybox.BluetoothLowEnergy.Uuid
            */
            public function getUuid() { }


            /**
            * Requests a write operation Once the operation is completed BleDelegate.onCharacteristicWrite() will be called on the registered BleDelegate with the status of the operation Support for long writes is not implemented. Requesting a write on a characteristic longer than 20 bytes will cause a BluetoothLowEnergy.InvalidRequestException
            * @param value - (Toybox.Lang.ByteArray)
            * @param options - (Toybox.Lang.Dictionary)
            * @returns  
            */
            public function requestWrite(value,options) { }


        }


        public class Dictionary {

            /**
            * Retrieve a value from a Dictionary for a given key.
            * @param key - (Toybox.Lang.Object)
            * @returns 
            */
            public function get(key) { }


            /**
            * Determine whether a key exists within a Dictionary.
            * @param key - (Toybox.Lang.Object)
            * @returns 
            */
            public function hasKey(key) { }


            /**
            * Determine whether a Dictionary is empty.
            * @returns  Toybox.Lang.Boolean
            */
            public function isEmpty() { }


            /**
            * Retrieve the keys in the Dictionary.
            * @returns  Toybox.Lang.Array
            */
            public function keys() { }


            /**
            * Place a value in the Dictionary with a given key.
            * @param key - (Toybox.Lang.Object)
            * @param value - g inserted into the Dictionary;;value
            * @returns  
            */
            public function put(key,value) { }


            /**
            * Delete an item from a Dictionary.
            * @param key - (Toybox.Lang.Object)
            * @returns  
            */
            public function remove(key) { }


            /**
            * Retrieve the number of elements in a Dictionary.
            * @returns  Toybox.Lang.Number
            */
            public function size() { }


            /**
            * Convert a Dictionary to a String.Due to the nature of hash tables, the order of Dictionary elements arenot guaranteed to match the insertion order when converting to a String.Example:using Toybox.System;myDict = {"One" => 1,"Two" => 2,"Three" => 3};System.println(myDict.get("One"));// prints 1var myString = myDict.toString();System.println(myString);// "{Two=>2, One=>1, Three=>}"System.println(myString.get("One"));// Symbol Not Found ErrorSystem.println(myString.substring(0, 5)); // "{Two="
            * @returns  Toybox.Lang.String
            */
            public function toString() { }


            /**
            * Retrieve the values in the Dictionary.
            * @returns  Toybox.Lang.Array
            */
            public function values() { }


        }


        public class Double {

            /**
            * Get the absolute value of a Double.
            * @returns  Toybox.Lang.Double
            */
            public function abs() { }


            /**
            * Test if an Object instance is equal to another instance of an Object.
            * @param object - (Toybox.Lang.Object)
            * @returns 
            */
            public function equals(object) { }


            /**
            * Format a Double using a formatting String. The formatting string is similar to that available in printf from the C stdio library, though the length option is not available: "%[flags][width][.precision]specifier" specifiers d or i - signed decimal integer e - scientific notation (mantissa/exponent) using 'e' character E - scientific notation (mantissa/exponent) using 'E' character f - decimal floating point o - signed octal u - unsigned decimal integer x - unsigned hexadecimal integer X - unsigned hexadecimal integer (capital letters) flags + - Prepends the result with a plus or minus sign ('+' or '-'), including positive numbers. By default, only negative numbers are preceded with a '-' sign. 0 - Left-pads the number with zeros (0) instead of spaces, where padding is specified (see width sub-specifier). width supports only numbers (* is not supported) .precision supports only numbers (* is not supported)
            * @returns  
            */
            public function format() { }


            /**
            * Convert a Double to a Double.
            * @returns  Toybox.Lang.Double
            */
            public function toDouble() { }


            /**
            * Convert a Double to a Float.
            * @returns  Toybox.Lang.Float
            */
            public function toFloat() { }


            /**
            * Convert a Double to a Long.
            * @returns  Toybox.Lang.Long
            */
            public function toLong() { }


            /**
            * Convert a Double to a Number.The Double value will be rounded toward 0 upon conversion. For example,6.8 becomes 6 and -5.7 becomes -5.
            * @returns  Toybox.Lang.Number
            */
            public function toNumber() { }


            /**
            * Convert a Double to a String.
            * @returns  Toybox.Lang.String
            */
            public function toString() { }


        }


        public class EncryptionInvalidSettingsException {

        }


        public class Float {

            /**
            * Get the absolute value of a Float.
            * @returns  Toybox.Lang.Float
            */
            public function abs() { }


            /**
            * Format a Float using a formatting String. The formatting string is similar to that available in printf from the C stdio library, though the length option is not available: "%[flags][width][.precision]specifier" specifiers d or i - signed decimal integer e - scientific notation (mantissa/exponent) using 'e' character E - scientific notation (mantissa/exponent) using 'E' character f - decimal floating point o - signed octal u - unsigned decimal integer x - unsigned hexadecimal integer X - unsigned hexadecimal integer (capital letters) flags + - Prepends the result with a plus or minus sign ('+' or '-'), including positive numbers. By default, only negative numbers are preceded with a '-' sign. 0 - Left-pads the number with zeros (0) instead of spaces, where padding is specified (see width sub-specifier). width supports only numbers (* is not supported) .precision supports only numbers (* is not supported)
            * @returns  
            */
            public function format() { }


            /**
            * Convert a Float to a Double.
            * @returns  Toybox.Lang.Double
            */
            public function toDouble() { }


            /**
            * Convert a Float to a Float.
            * @returns  Toybox.Lang.Float
            */
            public function toFloat() { }


            /**
            * Convert a Float to a Long.
            * @returns  Toybox.Lang.Long
            */
            public function toLong() { }


            /**
            * Convert a Float to a Number.The Float value will be rounded toward 0 upon conversion. For example,6.8 becomes 6 and -5.7 becomes -5.
            * @returns  Toybox.Lang.Number
            */
            public function toNumber() { }


        }


        public class InvalidOptionsException {

            /**
            * Constructor
            * @param msg - (Toybox.Lang.String)
            * @returns  
            */
            public function initialize(msg) { }


        }


        public class InvalidValueException {

            /**
            * Constructor
            * @param msg - (Toybox.Lang.String)
            * @returns  
            */
            public function initialize(msg) { }


        }


        public class BacklightOnTooLongException {

            /**
            * Constructor
            * @param msg - (Toybox.Lang.String)
            * @returns  
            */
            public function initialize(msg) { }


        }


        public class Method {

            /**
            * Get a hash code value for a Method.This computes a 32-bit Number that is typically used as an index whenplacing Objects into a Dictionary. Hash code values have the followingcharacteristics:The computed hash code is constant for the lifetime of an ObjectIf two Objects are equal, their hash codes will be equal
            * @returns  Toybox.Lang.Number
            */
            public function hashCode() { }


            /**
            * Constructor
            * @param aClass - Classdef of method (e.g. Toybox::SensorHistory);;aMethod
            * @param aMethod - ng.Symbol)
            * @returns  
            */
            public function initialize(aClass,aMethod) { }


            /**
            * Invoke a Method. Any arguments passed to this function will be forwarded to the invoked method.
            * @returns  
            */
            public function invoke() { }


        }


        public class Number {

            /**
            * Get the absolute value of a Number.
            * @returns  Toybox.Lang.Number
            */
            public function abs() { }


            /**
            * Format a Number using a formatting String. The formatting string is similar to that available in printf from the C stdio library, though the length option is not available: "%[flags][width][.precision]specifier" specifiers d or i - signed decimal integer e - scientific notation (mantissa/exponent) using 'e' character E - scientific notation (mantissa/exponent) using 'E' character f - decimal floating point o - signed octal u - unsigned decimal integer x - unsigned hexadecimal integer X - unsigned hexadecimal integer (capital letters) flags + - Prepends the result with a plus or minus sign ('+' or '-'), including positive numbers. By default, only negative numbers are preceded with a '-' sign. 0 - Left-pads the number with zeros (0) instead of spaces, where padding is specified (see width sub-specifier). width supports only numbers (* is not supported) .precision supports only numbers (* is not supported) Example: Formatting time with leading zeros // Format the time to display "08:03:15" using Toybox.Lang ;var hours = 8 ;var minutes = 3 ;var seconds = 15 ;var myTime = Lang.format( "$1$:$2$:$3$", [hours.format("%02d"), minutes.format("%02d"), seconds.format("%02d")] );
            * @returns  
            */
            public function format() { }


            /**
            * Convert a Number to a Char.
            * @returns  Toybox.Lang.Char
            */
            public function toChar() { }


            /**
            * Convert a Number to a Double.
            * @returns  Toybox.Lang.Double
            */
            public function toDouble() { }


            /**
            * Convert a Number to a Float.
            * @returns  Toybox.Lang.Float
            */
            public function toFloat() { }


            /**
            * Convert a Number to a Long.
            * @returns  Toybox.Lang.Long
            */
            public function toLong() { }


            /**
            * Convert a Number to a Number.
            * @returns  Toybox.Lang.Number
            */
            public function toNumber() { }


        }


        public class ObjectStoreAccessException {

        }


        public class OperationNotAllowedException {

            /**
            * Constructor
            * @param msg - (Toybox.Lang.String)
            * @returns  
            */
            public function initialize(msg) { }


        }


        public class SerializationException {

            /**
            * Constructor
            * @param msg - (Toybox.Lang.String)
            * @returns  
            */
            public function initialize(msg) { }


        }


        public class StorageFullException {

            /**
            * Constructor
            * @param msg - (Toybox.Lang.String)
            * @returns  
            */
            public function initialize(msg) { }


        }


        public class String {

            /**
            * Test if an Object instance is equal to another instance of an Object.
            * @param object - (Toybox.Lang.Object)
            * @returns 
            */
            public function equals(object) { }


            /**
            * Determine if the specified String exists in a String.
            * @param string - (Toybox.Lang.String)
            * @returns 
            */
            public function find(string) { }


            /**
            * Get a hash code value for a String.
            * @returns  Toybox.Lang.Number
            */
            public function hashCode() { }


            /**
            * Get the number of characters in a String.
            * @returns  Toybox.Lang.Number
            */
            public function length() { }


            /**
            * Create a new String that contains the contents of the current String from a start position to an end position.
            * @param startIndex - (Toybox.Lang.Number)
            * @param endIndex - (Toybox.Lang.Number)
            * @returns 
            */
            public function substring(startIndex,endIndex) { }


            /**
            * Convert a String to an Array of Char objects.
            * @returns  Toybox.Lang.Array
            */
            public function toCharArray() { }


            /**
            * Convert a String to a Double.If a String is in the numeric form of "123" or "123.45", convert itto a Double. Additional characters after the detected floating pointvalue will be ignored. Strings that cannot be interpreted as a Double,or whose value exceeds that which can be represented in a Double, willresult in a null value.Example:var myString;var myNum;myString = "123";myNum = myString.toDouble(); // myNum is 123.000000myString = "3.14"myNum = myString.toDouble(); // myNum is 3.140000myString = "192.168.0.1"myNum = myString.toDouble(); // myNum is 192.167999myString = "Hello There!"myNum = myString.toDouble(); // null
            * @returns  Toybox.Lang.Double
            */
            public function toDouble() { }


            /**
            * Convert a String to a Float.If a String is in the numeric form of "123" or "123.45", convert itto a Float. Additional characters after the detected floating pointvalue will be ignored. Strings that cannot be interpreted as a Float,or whose value exceeds that which can be represented in a Float, willresult in a null value.Example:var myString;var myNum;myString = "123";myNum = myString.toFloat(); // myNum is 123.000000myString = "3.14"myNum = myString.toFloat(); // myNum is 3.140000myString = "192.168.0.1"myNum = myString.toFloat(); // myNum is 192.167999myString = "Hello There!"myNum = myString.toFloat(); // null
            * @returns  Toybox.Lang.Float
            */
            public function toFloat() { }


            /**
            * Convert a String to a Long.If a String is in the numeric form of "123", it can be converted toa Long. Additional characters after the detected number value willbe ignored. Strings that cannot be interpreted as a Long, or whosevalue exceeds that which can be represented in a Long, will resultin a null value.Example:var myString;var myNum;myString = "123";myNum = myString.toLong(); // myNum is 123myString = "3.14"myNum = myString.toLong(); // myNum is 3myString = "1200 E. 151st. Street"myNum = myString.toLong(); // myNum is 1200myString = "Hello There!"myNum = myString.toLong(); // null
            * @returns  Toybox.Lang.Long
            */
            public function toLong() { }


            /**
            * Convert a String to a Long using a specified base.
            * @param base - (Toybox.Lang.Object)
            * @returns 
            */
            public function toLongWithBase(base) { }


            /**
            * Convert a String to lowercase.
            * @returns  Toybox.Lang.String
            */
            public function toLower() { }


            /**
            * Convert a String to a Number.If a String is in the numeric form of "123", it can be converted toa Number. Additional characters after the detected number value willbe ignored. Strings that cannot be interpreted as a Number, or whosevalue exceeds that which can be represented in a Number, will resultin a null value.Example:var myString;var myNum;myString = "123";myNum = myString.toNumber(); // myNum is 123myString = "3.14"myNum = myString.toNumber(); // myNum is 3myString = "1200 E. 151st. Street"myNum = myString.toNumber(); // myNum is 1200myString = "Hello There!"myNum = myString.toNumber(); // null
            * @returns  Toybox.Lang.Number
            */
            public function toNumber() { }


            /**
            * Convert a String to a Number using a specified base.
            * @param base - (Toybox.Lang.Object)
            * @returns 
            */
            public function toNumberWithBase(base) { }


            /**
            * Convert a String to a String.
            * @returns  Toybox.Lang.String
            */
            public function toString() { }


            /**
            * Convert a String to uppercase.
            * @returns  Toybox.Lang.String
            */
            public function toUpper() { }


            /**
            * Convert a String to an Array of Number objects.Each Number represents one byte of the UTF-8 representation of the String.
            * @returns  Toybox.Lang.Array
            */
            public function toUtf8Array() { }


        }


        public class Symbol {

            /**
            * Convert a Symbol to a NumberThis will return a number containing the integer value of the symbol.
            * @returns  Toybox.Lang.Number
            */
            public function toNumber() { }


            /**
            * Convert a Symbol to a StringThis will return the string for the name of the symbol in development builds.Because Monkey C does not contain runtime reflection information in releasebuilds, the returned string will be different and will follow the format "symbol (num)".In this format, "num" is the integer value of the symbol.
            * @returns  Toybox.Lang.String
            */
            public function toString() { }


        }


        public class SymbolNotAllowedException {

            /**
            * Constructor
            * @param msg - (Toybox.Lang.String)
            * @returns  
            */
            public function initialize(msg) { }


        }


        public class UnexpectedTypeException {

            /**
            * Constructor
            * @param message - (Toybox.Lang.String)
            * @param unused1 - Unused. Preserves argument count for compatibility;;unused2
            * @param unused2 - ;The exception message;;unused1
            * @returns  
            */
            public function initialize(message,unused1,unused2) { }


        }


        public class ValueOutOfBoundsException {

            /**
            * Constructor
            * @param msg - (Toybox.Lang.String)
            * @returns  
            */
            public function initialize(msg) { }


        }


        public class WeakReference {

            /**
            * Get the Object referenced by the WeakReference
            * @returns  Toybox.Lang.Object
            */
            public function get() { }


            /**
            * Determine whether a WeakReference is still alive.
            * @returns  Toybox.Lang.Boolean
            */
            public function stillAlive() { }


        }


    }

    module Math {

            /**
            * Get the arc cosine of an angle.
            * @param x - (Toybox.Lang.Number, Toybox.Lang.Float, Toybox.Lang.Long, Toybox.Lang.Double)
            * @returns 
            */
            public function acos(x) { }


            /**
            * Get the arc sine of an angle.
            * @param x - (Toybox.Lang.Number, Toybox.Lang.Float, Toybox.Lang.Long, Toybox.Lang.Double)
            * @returns 
            */
            public function asin(x) { }


            /**
            * Get the arc tangent of an angle.
            * @param x - (Toybox.Lang.Number, Toybox.Lang.Float, Toybox.Lang.Long, Toybox.Lang.Double)
            * @returns 
            */
            public function atan(x) { }


            /**
            * Get the arc tangent of y/x in radians.
            * @param y - (Toybox.Lang.Number, Toybox.Lang.Float, Toybox.Lang.Long, Toybox.Lang.Double)
            * @param x - (Toybox.Lang.Number, Toybox.Lang.Float, Toybox.Lang.Long, Toybox.Lang.Double)
            * @returns 
            */
            public function atan2(y,x) { }


            /**
            * Compute the ceiling of a value.
            * @param x - (Toybox.Lang.Number, Toybox.Lang.Float, Toybox.Lang.Long, Toybox.Lang.Double)
            * @returns 
            */
            public function ceil(x) { }


            /**
            * Get the cosine of an angle.
            * @param x - (Toybox.Lang.Number, Toybox.Lang.Float, Toybox.Lang.Long, Toybox.Lang.Double)
            * @returns 
            */
            public function cos(x) { }


            /**
            * Compute the floor of a value.
            * @param x - (Toybox.Lang.Number, Toybox.Lang.Float, Toybox.Lang.Long, Toybox.Lang.Double)
            * @returns 
            */
            public function floor(x) { }


            /**
            * Get natural logarithm of a value
            * @param x - (Toybox.Lang.Number, Toybox.Lang.Float, Toybox.Lang.Long, Toybox.Lang.Double)
            * @returns 
            */
            public function ln(x) { }


            /**
            * Get logarithm of a value using the specified base
            * @param x - (Toybox.Lang.Number, Toybox.Lang.Float, Toybox.Lang.Long, Toybox.Lang.Double)
            * @param base - (Toybox.Lang.Number, Toybox.Lang.Float, Toybox.Lang.Long, Toybox.Lang.Double)
            * @returns 
            */
            public function log(x,base) { }


            /**
            * Get the arithmetic mean (average) of an array of data.
            * @param data - (Toybox.Lang.Array)
            * @returns 
            */
            public function mean(data) { }


            /**
            * Returns a pseudo-random Number. Use the srand() function to seed the random number generator.
            * @returns  Toybox.Lang.Number
            */
            public function rand() { }


            /**
            * Round a value.
            * @param x - (Toybox.Lang.Number, Toybox.Lang.Float, Toybox.Lang.Long, Toybox.Lang.Double)
            * @returns 
            */
            public function round(x) { }


            /**
            * Get the sine of an angle.
            * @param x - (Toybox.Lang.Number, Toybox.Lang.Float, Toybox.Lang.Long, Toybox.Lang.Double)
            * @returns 
            */
            public function sin(x) { }


            /**
            * Calculate the square root of a value.
            * @param x - (Toybox.Lang.Number, Toybox.Lang.Float, Toybox.Lang.Long, Toybox.Lang.Double)
            * @returns 
            */
            public function sqrt(x) { }


            /**
            * Seed the random number generator. Note: srand() does not return any value.
            * @param seed - (Toybox.Lang.Number)
            * @returns  
            */
            public function srand(seed) { }


            /**
            * Get the standard deviation of a sample of population data.
            * @param data - (Toybox.Lang.Array)
            * @param xbar - (Toybox.Lang.Double)
            * @returns 
            */
            public function stdev(data,xbar) { }


            /**
            * Convert an angle from radians to degrees.
            * @param x - (Toybox.Lang.Number, Toybox.Lang.Float, Toybox.Lang.Long, Toybox.Lang.Double)
            * @returns 
            */
            public function toDegrees(x) { }


            /**
            * Convert an angle from degrees to radians.
            * @param x - (Toybox.Lang.Number, Toybox.Lang.Float, Toybox.Lang.Long, Toybox.Lang.Double)
            * @returns 
            */
            public function toRadians(x) { }


            /**
            * Get the sample variance of an array of data. Returns the sample variance with Bessel's correction.
            * @param data - (Toybox.Lang.Array)
            * @param xbar - (Toybox.Lang.Double)
            * @returns 
            */
            public function variance(data,xbar) { }


        
        public class Filter {

            /**
            * Apply the Filter to an Array of samples. Note: An Exception will be thrown if the base Filter class version of this method is called.
            * @param data - ;;data
            * @returns 
            */
            public function apply(data) { }


        }


        public class FirFilter {

            /**
            * 
            * @param data
            * @returns  
            */
            public function apply(data) { }


            /**
            * Constructor
            * @param dictionary - (Toybox.Lang.Dictionary)
            * @returns  
            */
            public function initialize(dictionary) { }


        }


        public class IirFilter {

            /**
            * 
            * @param data
            * @returns  
            */
            public function apply(data) { }


            /**
            * Constructor
            * @param dictionary - (Toybox.Lang.Dictionary)
            * @returns  
            */
            public function initialize(dictionary) { }


        }


    }

    module Media {

            /**
            * Delete an individual cached media item.
            * @param contentRef - (Toybox.Media.ContentRef)
            * @returns  
            */
            public function deleteCachedItem(contentRef) { }


            /**
            * Get the current size statistics of the media cache.
            * @returns  Toybox.Media.CacheStatistics
            */
            public function getCacheStatistics() { }


            /**
            * Get a Content object by ID from what has been persisted on the system.
            * @param contentRef - (Toybox.Media.ContentRef)
            * @returns 
            */
            public function getCachedContentObj(contentRef) { }


            /**
            * This has been deprecated This method will be removed in Connect IQ 6.0.0 Send a system notification to indicate overall sync progress.
            * @param percentageComplete - (Toybox.Lang.Number)
            * @returns  
            */
            public function notifySyncProgress(percentageComplete) { }


            /**
            * Set the album art for the currently playing song
            * @param albumArt - (Toybox.WatchUi.BitmapResource)
            * @returns  
            */
            public function setAlbumArt(albumArt) { }


            /**
            * Exit the AudioContentProviderApp in its current mode and launch it in playback mode.
            * @param args - (Toybox.Lang.Object)
            * @returns  
            */
            public function startPlayback(args) { }


        
        public class ActiveContent {

            /**
            * Get the playback start position for media content
            * @returns  Toybox.Lang.Number
            */
            public function getPlaybackStartPosition() { }


            /**
            * Constructor
            * @param contentRef - (Toybox.Media.ContentRef)
            * @param metadata - (Toybox.Media.ContentMetadata)
            * @param playbackStartPos - (Toybox.Lang.Number)
            * @returns  
            */
            public function initialize(contentRef,metadata,playbackStartPos) { }


        }


        public class AlbumArt {

            /**
            * The image format of the album art Returns: 
            * @type Toybox.Lang.Number
            */
            public var image_format;


            /**
            * Byte offset of the album art image within the audio file Returns: 
            * @type Toybox.Lang.Number
            */
            public var image_offset;


        }


        public class AudioFormat {

            /**
            * The bit rate of the audio Returns: 
            * @type Toybox.Lang.Number
            */
            public var bitRate;


            /**
            * The number of channels Returns: 
            * @type Toybox.Lang.Number
            */
            public var numChannels;


            /**
            * The sample rate of the audio in Hz Returns: 
            * @type Toybox.Lang.Number
            */
            public var sampleRate;


        }


        public class CacheStatistics {

            /**
            * The capacity of the media cache  
            * @type Toybox.Lang.Long
            */
            public var capacity;


            /**
            * The current size of the media cache  
            * @type Toybox.Lang.Long
            */
            public var size;


        }


        public class AudioContentProviderApp {

            /**
            * Get a ContentDelegate for use by the system to get and iterate through media content on the device.
            * @returns  
            */
            public function getContentDelegate() { }


            /**
            * Get the initial view for configuring playback.
            * @returns  Toybox.Lang.Array
            */
            public function getPlaybackConfigurationView() { }


            /**
            * Get the initial view for configuring sync.
            * @returns  Toybox.Lang.Array
            */
            public function getSyncConfigurationView() { }


            /**
            * This has been deprecatedThis method will be removed in Connect IQ 6.0.0Get a SyncDelegate object thatcommunicates sync status to the system for syncing media content tothe device.
            * @returns  Toybox.Media.SyncDelegate
            */
            public function getSyncDelegate() { }


        }


        public class ContentDelegate {

            /**
            * Return a ContentIteratorobject for the system to use to iterate over media tracks.
            * @returns  Toybox.Media.ContentIterator
            */
            public function getContentIterator() { }


            /**
            * Respond to a user ad click.
            * @param adContext - (Toybox.Lang.Object)
            * @returns  
            */
            public function onAdAction(adContext) { }


            /**
            * Handle a CustomButton being selected in the Media Player
            * @param button - (Toybox.Media.CustomButton)
            * @returns  
            */
            public function onCustomButton(button) { }


            /**
            * Handle a notification from a system that a song has been played.
            * @param contentRefId - (Toybox.Lang.Object)
            * @param songEvent - (Toybox.Lang.Number)
            * @param playbackPosition - (Toybox.Lang.Number)
            * @returns  
            */
            public function onSong(contentRefId,songEvent,playbackPosition) { }


            /**
            * Respond to a thumbs-down action. The thumbs-down option is native to the device media player. When a user selects the thumbs-down function on the device, a corresponding onThumbsDown() event is sent to application.
            * @param contentRefId - (Toybox.Lang.Object)
            * @returns  
            */
            public function onThumbsDown(contentRefId) { }


            /**
            * Respond to a thumbs-up action. The thumbs-up option is native to the device media player. When a user selects the thumbs-up function on the device, a corresponding onThumbsUp() event is sent to the application.
            * @param contentRefId - (Toybox.Lang.Object)
            * @returns  
            */
            public function onThumbsUp(contentRefId) { }


            /**
            * Reset the ContentIteratorto the beginning of the current playlist.
            * @returns  Toybox.Media.ContentIterator
            */
            public function resetContentIterator() { }


        }


        public class ContentIterator {

            /**
            * Determine if the the current track can be skipped.
            * @returns  Toybox.Lang.Boolean
            */
            public function canSkip() { }


            /**
            * Get the current media content object.
            * @returns  Toybox.Media.Content
            */
            public function get() { }


            /**
            * Get the current media content playback profile
            * @returns  Toybox.Media.PlaybackProfile
            */
            public function getPlaybackProfile() { }


            /**
            * Get the next media content object.
            * @returns  Toybox.Media.Content
            */
            public function next() { }


            /**
            * Get the next media content object without incrementing the iterator.
            * @returns  Toybox.Media.Content
            */
            public function peekNext() { }


            /**
            * Get the previous media content object without decrementing the iterator.
            * @returns  Toybox.Media.Content
            */
            public function peekPrevious() { }


            /**
            * Get the previous media content object.
            * @returns  Toybox.Media.Content
            */
            public function previous() { }


            /**
            * Get the current repeat state
            * @returns  Toybox.Lang.Number
            */
            public function repeatMode() { }


            /**
            * Determine if playback is currently set to shuffle.Returns true if shuffle is on, otherwise false.
            * @returns  Toybox.Lang.Boolean
            */
            public function shuffling() { }


        }


        public class ContentMetadata {

            /**
            * The album title  
            * @type Toybox.Lang.String
            */
            public var album;


            /**
            * The name of the artist  
            * @type Toybox.Lang.String
            */
            public var artist;


            /**
            * The genre  
            * @type Toybox.Lang.String
            */
            public var genre;


            /**
            * The track title  
            * @type Toybox.Lang.String
            */
            public var title;


            /**
            * The track number  
            * @type Toybox.Lang.Number
            */
            public var trackNumber;


        }


        public class ContentRef {

            /**
            * Get the media content type.
            * @returns  Toybox.Lang.Number
            */
            public function getContentType() { }


            /**
            * Get the content ref ID.
            * @returns  Toybox.Lang.Object
            */
            public function getId() { }


            /**
            * Constructor
            * @param id - (Toybox.Lang.Object)
            * @param type - (Toybox.Lang.Number)
            * @returns  
            */
            public function initialize(id,type) { }


        }


        public class ContentRefIterator {

            /**
            * Get the next Toybox::Media::ContentIterator
            * @returns  Toybox.Media.ContentRefIterator
            */
            public function next() { }


        }


        public class CustomButton {

            /**
            * Called by the system to draw the button in the Media Player
            * @param image - (Toybox.Lang.Number)
            * @param highlighted - (Toybox.Lang.Boolean)
            * @returns 
            */
            public function getImage(image,highlighted) { }


            /**
            * Called by the system to determine if the current state of the button
            * @returns  Toybox.Lang.Number
            */
            public function getState() { }


            /**
            * Called by the system to draw the name of the button
            * @param state - (Toybox.Lang.Number)
            * @returns 
            */
            public function getText(state) { }


        }


        public class PlaybackProfile {

            /**
            * Defines if the current song is skipped if a thumbs-down operation is given  
            * @type Toybox.Lang.Boolean
            */
            public var attemptSkipAfterThumbsDown;


            /**
            * Playback controls that should be rendered in the player. This is an Array that holds a combination of PLAYBACK_CONTROL_*, CustomButton, and SystemButton values defined by the developer. The values in this Array determine which native media player control options are rendered and available to the end user of the current device. The first entry in the array may be used as a hotkey in the media player. This is device dependent.  
            * @type Toybox.Lang.Array
            */
            public var playbackControls;


            /**
            * The number of seconds a song must play to trigger a "played" notification. A value of 0 means notify as soon as the song begins playing.  
            * @type Toybox.Lang.Number
            */
            public var playbackNotificationThreshold;


            /**
            * The colors for the media player. If set to null the default colors that are device-dependent will be used.  
            * @type Toybox.Media.PlayerColors
            */
            public var playerColors;


            /**
            * Defines if the system notifies the app when each song is played  
            * @type Toybox.Lang.Boolean
            */
            public var requirePlaybackNotification;


            /**
            * The amount of time a song must be played so that pressing back restarts the track and requires a second back press to skip to the previous track in seconds. If set to null a default value that is device-dependent will be used.  
            * @type Toybox.Lang.Number
            */
            public var skipPreviousThreshold;


        }


        public class PlayerColors {

        }


        public class ProviderIconInfo {

            /**
            * Constructor
            * @param icon - (Drawable, Toybox.Lang.Symbol)
            * @param accentColor - (Toybox.Lang.Number)
            * @returns  
            */
            public function initialize(icon,accentColor) { }


        }


        public class SyncDelegate {

            /**
            * Check if a sync is needed.
            * @returns  Toybox.Lang.Boolean
            */
            public function isSyncNeeded() { }


        }


        public class SystemButton {

            /**
            * Called by the system to draw the button in the Media Player
            * @param image - (Toybox.Lang.Number)
            * @param state - (Toybox.Lang.Number)
            * @param highlighted - (Toybox.Lang.Boolean)
            * @returns 
            */
            public function getImage(image,state,highlighted) { }


            /**
            * Constructor
            * @param type - (Toybox.Lang.Number)
            * @param options - (Toybox.Lang.Dictionary)
            * @returns  
            */
            public function initialize(type,options) { }


        }


    }

    module PersistedContent {

            /**
            * Get the subset of courses installed on the system that are owned bythe applicationExample:// Assumes content already saved on deviceusing Toybox.PersistedContent;// Get an iterator for all courses owned by this applicationvar iterator = PersistedContent.getAppCourses();Supported Devices:D2™ CharlieD2™ DeltaD2™ Delta PXD2™ Delta SDescent™ Mk1Descent™ Mk2 / Descent™ Mk2iEdge® 1000 / ExploreEdge® 1030Edge® 1030 / BontragerEdge® 1030 PlusEdge® 520Edge® 520 PlusEdge® 530Edge® 820 / ExploreEdge® 830Edge® Explorefēnix® 5 / quatix® 5fēnix® 5 Plusfēnix® 5Sfēnix® 5S Plusfēnix® 5X / tactix® Charliefēnix® 5X Plusfēnix® 6 / 6 Solar / 6 Dual Powerfēnix® 6 Pro / 6 Sapphire / 6 Pro Solar / 6 Pro Dual Power / quatix® 6fēnix® 6S / 6S Solar / 6S Dual Powerfēnix® 6S Pro / 6S Sapphire / 6S Pro Solar / 6S Pro Dual Powerfēnix® 6X Pro / 6X Sapphire / 6X Pro Solar / tactix® Delta Sapphire / Delta Solar / Delta Solar - Ballistics Edition / quatix® 6X / 6X Solar / 6X Dual Powerfēnix® ChronosForerunner® 245Forerunner® 245 MusicForerunner® 645Forerunner® 645 MusicForerunner® 735xtForerunner® 745Forerunner® 935Forerunner® 945MARQ™ AdventurerMARQ™ AthleteMARQ™ AviatorMARQ® Captain / MARQ® Captain: American Magic EditionMARQ™ CommanderMARQ™ DriverMARQ™ ExpeditionMARQ™ Golfer
            * @returns  Toybox.PersistedContent.Iterator
            */
            public function getAppCourses() { }


            /**
            * Get the subset of routes installed on the system that are owned bythe applicationExample:// Assumes content already saved on deviceusing Toybox.PersistedContent;// Get an iterator for all routes owned by this applicationvar iterator = PersistedContent.getAppRoutes();Supported Devices:GPSMAP® 66s / 66sr / 66stGPSMAP® 86s / 86sc / 86i / 86sciMontana® 7 SeriesOregon® 7 SeriesRino® 7 Series
            * @returns  Toybox.PersistedContent.Iterator
            */
            public function getAppRoutes() { }


            /**
            * Get the subset of tracks installed on the system that are owned bythe applicationExample:// Assumes content already saved on deviceusing Toybox.PersistedContent;// Get an iterator for all tracks owned by this applicationvar iterator = PersistedContent.getAppTracks();Supported Devices:GPSMAP® 66s / 66sr / 66stGPSMAP® 86s / 86sc / 86i / 86sciMontana® 7 SeriesOregon® 7 SeriesRino® 7 Series
            * @returns  Toybox.PersistedContent.Iterator
            */
            public function getAppTracks() { }


            /**
            * Get the subset of waypoints installed on the system that are owned bythe applicationExample:// Assumes content already saved on deviceusing Toybox.PersistedContent;// Get an iterator for all waypoints owned by this applicationvar iterator = PersistedContent.getAppWaypoints();Supported Devices:Captain MarvelD2™ AirD2™ BravoD2™ Bravo TitaniumD2™ CharlieD2™ DeltaD2™ Delta PXD2™ Delta SDarth Vader™Descent™ Mk1Descent™ Mk2 / Descent™ Mk2iEdge® 1000 / ExploreEdge® 1030Edge® 1030 / BontragerEdge® 1030 PlusEdge® 520Edge® 520 PlusEdge® 530Edge® 820 / ExploreEdge® 830Edge® Exploreepix™fēnix® 3 / tactix® Bravo / quatix® 3fēnix® 3 HRfēnix® 5 / quatix® 5fēnix® 5 Plusfēnix® 5Sfēnix® 5S Plusfēnix® 5X / tactix® Charliefēnix® 5X Plusfēnix® 6 / 6 Solar / 6 Dual Powerfēnix® 6 Pro / 6 Sapphire / 6 Pro Solar / 6 Pro Dual Power / quatix® 6fēnix® 6S / 6S Solar / 6S Dual Powerfēnix® 6S Pro / 6S Sapphire / 6S Pro Solar / 6S Pro Dual Powerfēnix® 6X Pro / 6X Sapphire / 6X Pro Solar / tactix® Delta Sapphire / Delta Solar / Delta Solar - Ballistics Edition / quatix® 6X / 6X Solar / 6X Dual Powerfēnix® ChronosFirst AvengerForerunner® 230Forerunner® 235Forerunner® 245Forerunner® 245 MusicForerunner® 630Forerunner® 645Forerunner® 645 MusicForerunner® 735xtForerunner® 745Forerunner® 920XTForerunner® 935Forerunner® 945GPSMAP® 66s / 66sr / 66stGPSMAP® 86s / 86sc / 86i / 86sciMARQ™ AdventurerMARQ™ AthleteMARQ™ AviatorMARQ® Captain / MARQ® Captain: American Magic EditionMARQ™ CommanderMARQ™ DriverMARQ™ ExpeditionMARQ™ GolferMontana® 7 SeriesOregon® 7 SeriesRey™Rino® 7 SeriesVenu™Venu™ Mercedes-Benz® CollectionVenu® SqVenu® Sq. Music Editionvívoactive® 4vívoactive® 4S
            * @returns  Toybox.PersistedContent.Iterator
            */
            public function getAppWaypoints() { }


            /**
            * Get the subset of workouts installed on the system that are owned bythe applicationExample:// Assumes content already saved on deviceusing Toybox.PersistedContent;// Get an iterator for all workouts owned by this applicationvar iterator = PersistedContent.getAppWorkouts();Supported Devices:Captain MarvelD2™ AirD2™ CharlieD2™ DeltaD2™ Delta PXD2™ Delta SDarth Vader™Descent™ Mk1Descent™ Mk2 / Descent™ Mk2iEdge® 1000 / ExploreEdge® 1030Edge® 1030 / BontragerEdge® 1030 PlusEdge® 520Edge® 520 PlusEdge® 530Edge® 820 / ExploreEdge® 830fēnix® 5 / quatix® 5fēnix® 5 Plusfēnix® 5Sfēnix® 5S Plusfēnix® 5X / tactix® Charliefēnix® 5X Plusfēnix® 6 / 6 Solar / 6 Dual Powerfēnix® 6 Pro / 6 Sapphire / 6 Pro Solar / 6 Pro Dual Power / quatix® 6fēnix® 6S / 6S Solar / 6S Dual Powerfēnix® 6S Pro / 6S Sapphire / 6S Pro Solar / 6S Pro Dual Powerfēnix® 6X Pro / 6X Sapphire / 6X Pro Solar / tactix® Delta Sapphire / Delta Solar / Delta Solar - Ballistics Edition / quatix® 6X / 6X Solar / 6X Dual Powerfēnix® ChronosFirst AvengerForerunner® 245Forerunner® 245 MusicForerunner® 645Forerunner® 645 MusicForerunner® 735xtForerunner® 745Forerunner® 935Forerunner® 945MARQ™ AdventurerMARQ™ AthleteMARQ™ AviatorMARQ® Captain / MARQ® Captain: American Magic EditionMARQ™ CommanderMARQ™ DriverMARQ™ ExpeditionMARQ™ GolferRey™Venu™Venu™ Mercedes-Benz® CollectionVenu® SqVenu® Sq. Music Editionvívoactive® 4vívoactive® 4S
            * @returns  Toybox.PersistedContent.Iterator
            */
            public function getAppWorkouts() { }


            /**
            * Get the courses installed on the systemExample:// Assumes content already saved on deviceusing Toybox.PersistedContent;var iterator = PersistedContent.getCourses(); // Get the IteratorSupported Devices:D2™ CharlieD2™ DeltaD2™ Delta PXD2™ Delta SDescent™ Mk1Descent™ Mk2 / Descent™ Mk2iEdge® 1000 / ExploreEdge® 1030Edge® 1030 / BontragerEdge® 1030 PlusEdge® 520Edge® 520 PlusEdge® 530Edge® 820 / ExploreEdge® 830Edge® Explorefēnix® 5 / quatix® 5fēnix® 5 Plusfēnix® 5Sfēnix® 5S Plusfēnix® 5X / tactix® Charliefēnix® 5X Plusfēnix® 6 / 6 Solar / 6 Dual Powerfēnix® 6 Pro / 6 Sapphire / 6 Pro Solar / 6 Pro Dual Power / quatix® 6fēnix® 6S / 6S Solar / 6S Dual Powerfēnix® 6S Pro / 6S Sapphire / 6S Pro Solar / 6S Pro Dual Powerfēnix® 6X Pro / 6X Sapphire / 6X Pro Solar / tactix® Delta Sapphire / Delta Solar / Delta Solar - Ballistics Edition / quatix® 6X / 6X Solar / 6X Dual Powerfēnix® ChronosForerunner® 245Forerunner® 245 MusicForerunner® 645Forerunner® 645 MusicForerunner® 735xtForerunner® 745Forerunner® 935Forerunner® 945MARQ™ AdventurerMARQ™ AthleteMARQ™ AviatorMARQ® Captain / MARQ® Captain: American Magic EditionMARQ™ CommanderMARQ™ DriverMARQ™ ExpeditionMARQ™ Golfer
            * @returns  Toybox.PersistedContent.Iterator
            */
            public function getCourses() { }


            /**
            * Get the routes installed on the systemExample:// Assumes content already saved on deviceusing Toybox.PersistedContent;var iterator = PersistedContent.getRoutes(); // Get the IteratorSupported Devices:GPSMAP® 66s / 66sr / 66stGPSMAP® 86s / 86sc / 86i / 86sciMontana® 7 SeriesOregon® 7 SeriesRino® 7 Series
            * @returns  Toybox.PersistedContent.Iterator
            */
            public function getRoutes() { }


            /**
            * Get the tracks installed on the systemExample:// Assumes content already saved on deviceusing Toybox.PersistedContent;var iterator = PersistedContent.getTracks(); // Get the IteratorSupported Devices:GPSMAP® 66s / 66sr / 66stGPSMAP® 86s / 86sc / 86i / 86sciMontana® 7 SeriesOregon® 7 SeriesRino® 7 Series
            * @returns  Toybox.PersistedContent.Iterator
            */
            public function getTracks() { }


            /**
            * Get the waypoints installed on the systemExample:// Assumes content already saved on deviceusing Toybox.PersistedContent;var iterator = PersistedContent.getWaypoints(); // Get the IteratorSupported Devices:Captain MarvelD2™ AirD2™ BravoD2™ Bravo TitaniumD2™ CharlieD2™ DeltaD2™ Delta PXD2™ Delta SDarth Vader™Descent™ Mk1Descent™ Mk2 / Descent™ Mk2iEdge® 1000 / ExploreEdge® 1030Edge® 1030 / BontragerEdge® 1030 PlusEdge® 520Edge® 520 PlusEdge® 530Edge® 820 / ExploreEdge® 830Edge® Exploreepix™fēnix® 3 / tactix® Bravo / quatix® 3fēnix® 3 HRfēnix® 5 / quatix® 5fēnix® 5 Plusfēnix® 5Sfēnix® 5S Plusfēnix® 5X / tactix® Charliefēnix® 5X Plusfēnix® 6 / 6 Solar / 6 Dual Powerfēnix® 6 Pro / 6 Sapphire / 6 Pro Solar / 6 Pro Dual Power / quatix® 6fēnix® 6S / 6S Solar / 6S Dual Powerfēnix® 6S Pro / 6S Sapphire / 6S Pro Solar / 6S Pro Dual Powerfēnix® 6X Pro / 6X Sapphire / 6X Pro Solar / tactix® Delta Sapphire / Delta Solar / Delta Solar - Ballistics Edition / quatix® 6X / 6X Solar / 6X Dual Powerfēnix® ChronosFirst AvengerForerunner® 230Forerunner® 235Forerunner® 245Forerunner® 245 MusicForerunner® 630Forerunner® 645Forerunner® 645 MusicForerunner® 735xtForerunner® 745Forerunner® 920XTForerunner® 935Forerunner® 945GPSMAP® 66s / 66sr / 66stGPSMAP® 86s / 86sc / 86i / 86sciMARQ™ AdventurerMARQ™ AthleteMARQ™ AviatorMARQ® Captain / MARQ® Captain: American Magic EditionMARQ™ CommanderMARQ™ DriverMARQ™ ExpeditionMARQ™ GolferMontana® 7 SeriesOregon® 7 SeriesRey™Rino® 7 SeriesVenu™Venu™ Mercedes-Benz® CollectionVenu® SqVenu® Sq. Music Editionvívoactive® 4vívoactive® 4S
            * @returns  Toybox.PersistedContent.Iterator
            */
            public function getWaypoints() { }


            /**
            * Get the workouts installed on the systemExample:// Assumes content already saved on deviceusing Toybox.PersistedContent;var iterator = PersistedContent.getWorkouts(); // Get the IteratorSupported Devices:Captain MarvelD2™ AirD2™ CharlieD2™ DeltaD2™ Delta PXD2™ Delta SDarth Vader™Descent™ Mk1Descent™ Mk2 / Descent™ Mk2iEdge® 1000 / ExploreEdge® 1030Edge® 1030 / BontragerEdge® 1030 PlusEdge® 520Edge® 520 PlusEdge® 530Edge® 820 / ExploreEdge® 830fēnix® 5 / quatix® 5fēnix® 5 Plusfēnix® 5Sfēnix® 5S Plusfēnix® 5X / tactix® Charliefēnix® 5X Plusfēnix® 6 / 6 Solar / 6 Dual Powerfēnix® 6 Pro / 6 Sapphire / 6 Pro Solar / 6 Pro Dual Power / quatix® 6fēnix® 6S / 6S Solar / 6S Dual Powerfēnix® 6S Pro / 6S Sapphire / 6S Pro Solar / 6S Pro Dual Powerfēnix® 6X Pro / 6X Sapphire / 6X Pro Solar / tactix® Delta Sapphire / Delta Solar / Delta Solar - Ballistics Edition / quatix® 6X / 6X Solar / 6X Dual Powerfēnix® ChronosFirst AvengerForerunner® 245Forerunner® 245 MusicForerunner® 645Forerunner® 645 MusicForerunner® 735xtForerunner® 745Forerunner® 935Forerunner® 945MARQ™ AdventurerMARQ™ AthleteMARQ™ AviatorMARQ® Captain / MARQ® Captain: American Magic EditionMARQ™ CommanderMARQ™ DriverMARQ™ ExpeditionMARQ™ GolferRey™Venu™Venu™ Mercedes-Benz® CollectionVenu® SqVenu® Sq. Music Editionvívoactive® 4vívoactive® 4S
            * @returns  Toybox.PersistedContent.Iterator
            */
            public function getWorkouts() { }


            /**
            * Save a Location as a Waypoint to the device's location list
            * @param location - (Toybox.Position.Location)
            * @param options - (Toybox.Lang.Dictionary)
            * @returns  
            */
            public function saveWaypoint(location,options) { }


        
        public class Course {

            /**
            * Get a unique serializable id
            * @returns  Toybox.Lang.Number
            */
            public function getId() { }


            /**
            * Get a readable name for the content
            * @returns  Toybox.Lang.String
            */
            public function getName() { }


        }


        public class HeartRateIterator {

            /**
            * Get the maximum heart rate contained in this iterator.
            * @returns  Toybox.Lang.Number
            */
            public function getMax() { }


            /**
            * Get the minimum heart rate contained in this iterator.
            * @returns  Toybox.Lang.Number
            */
            public function getMin() { }


            /**
            * Get the next entry in the iterator.This must be called to get the initial data from the iterator.
            * @returns  Toybox.ActivityMonitor.HeartRateSample
            */
            public function next() { }


        }


        public class Route {

            /**
            * Get a unique serializable id
            * @returns  Toybox.Lang.Number
            */
            public function getId() { }


            /**
            * Get a readable name for the content
            * @returns  Toybox.Lang.String
            */
            public function getName() { }


        }


        public class Track {

            /**
            * Get a unique serializable id
            * @returns  Toybox.Lang.Number
            */
            public function getId() { }


            /**
            * Get a readable name for the content
            * @returns  Toybox.Lang.String
            */
            public function getName() { }


        }


        public class Waypoint {

            /**
            * Get a unique serializable id
            * @returns  Toybox.Lang.Number
            */
            public function getId() { }


            /**
            * Get a readable name for the content
            * @returns  Toybox.Lang.String
            */
            public function getName() { }


        }


        public class WorkoutIntervalStep {

            /**
            * The step data for the active portion of the interval Returns: 
            * @type Toybox.Activity.WorkoutStep
            */
            public var activeStep;


            /**
            * The repetition number in the interval Returns: 
            * @type Toybox.Lang.Number
            */
            public var repetitionNumber;


            /**
            * The step data for the rest portion of the interval Returns: 
            * @type Toybox.Activity.WorkoutStep
            */
            public var restStep;


        }


    }

    module PersistedLocations {

            /**
            * This has been deprecated This method will be removed in Connect IQ 4.0.0. Save a location (waypoint) to the device's location list
            * @param location - (Toybox.Position.Location)
            * @param options - (Toybox.Lang.Dictionary)
            * @returns  
            */
            public function persistLocation(location,options) { }


        
    }

    module Position {

            /**
            * Create a bounding box from an array of Location objects.
            * @param locations - (Toybox.Lang.Array)
            * @returns 
            */
            public function createBoundingBox(locations) { }


            /**
            * Request a Location event. Using this API requires enabling the Positioning Permission. Only Device Apps and Widgets may use this API. Note: Passing an options Dictionary is only supported with ConnectIQ 3.2.0 and later.
            * @param options - (Toybox.Lang.Number, Toybox.Lang.Dictionary)
            * @param listener - (Toybox.Lang.Method)
            * @returns  
            */
            public function enableLocationEvents(options,listener) { }


            /**
            * Convert a String to a Location object. The input String must be in one of the four formats described by the Position.GEO_* constants.
            * @param string - (Toybox.Lang.String)
            * @param format - (Toybox.Lang.Number)
            * @returns 
            */
            public function parse(string,format) { }


        
        public class Info {

            /**
            * The altitude above mean sea level in meters (m). Elevation is derived from the most accurate source: Barometer or GPS  
            * @type Toybox.Lang.Float
            */
            public var altitude;


            /**
            * The ambient pressure in Pascals (Pa). This returns ambient (local) barometric pressure as measured by the pressure sensor. The data is smoothed by a two-stage filter to reduce noise and instantaneous variation.  
            * @type Toybox.Lang.Float
            */
            public var ambientPressure;


            /**
            * The average cadence during the current activity in revolutions per minute (rpm).  
            * @type Toybox.Lang.Number
            */
            public var averageCadence;


            /**
            * The average swim stroke distance from the previous interval in meters (m).  
            * @type Toybox.Lang.Float
            */
            public var averageDistance;


            /**
            * The average heart rate during the current activity in beats per minute (bpm).  
            * @type Toybox.Lang.Number
            */
            public var averageHeartRate;


            /**
            * The average power during the current activity in Watts (W).  
            * @type Toybox.Lang.Number
            */
            public var averagePower;


            /**
            * The average speed during the current activity in meters per second (mps). The average is computed as the elapsed 3-D accumulated distance divided by the elapsed time.  
            * @type Toybox.Lang.Float
            */
            public var averageSpeed;


            /**
            * The current bearing in radians. Bearing is the direction from your current location or position to the destination of navigation, dependent on your current location.  
            * @type Toybox.Lang.Float
            */
            public var bearing;


            /**
            * The bearing from the starting location to the destination in radians. Bearing from start is the direction of desired track from the start of navigation to the destination in radians. This is only dependent on your location when a course is set, and it is not dependent on where you may have moved to during an activity  
            * @type Toybox.Lang.Float
            */
            public var bearingFromStart;


            /**
            * The calories burned throughout the current activity in kilocalories (kcal).  
            * @type Toybox.Lang.Number
            */
            public var calories;


            /**
            * The current cadence in revolutions per minute (rpm).  
            * @type Toybox.Lang.Number
            */
            public var currentCadence;


            /**
            * The true north referenced heading in radians. This provides compass orientation if it is supported by the device.  
            * @type Toybox.Lang.Float
            */
            public var currentHeading;


            /**
            * The current heart rate in beats per minute (bpm).  
            * @type Toybox.Lang.Number
            */
            public var currentHeartRate;


            /**
            * The current location. This member will always provide a null value unless the Positioning Permission is enabled.  
            * @type Toybox.Position.Location
            */
            public var currentLocation;


            /**
            * The current GPS accuracy. GPS accuracy values range from 0-4. A value of 0 indicates an accuracy value is not available, while a value of 4 indicates a good GPS fix.  
            * @type Toybox.Lang.Number
            */
            public var currentLocationAccuracy;


            /**
            * The current oxygen saturation in percent (%)  
            * @type Toybox.Lang.Number
            */
            public var currentOxygenSaturation;


            /**
            * The current power in Watts (W).  
            * @type Toybox.Lang.Number
            */
            public var currentPower;


            /**
            * The current speed in meters per second (mps).  
            * @type Toybox.Lang.Float
            */
            public var currentSpeed;


            /**
            * The distance to the destination in meters (m).  
            * @type Toybox.Lang.Float
            */
            public var distanceToDestination;


            /**
            * The distance to the next point in meters (m).  
            * @type Toybox.Lang.Float
            */
            public var distanceToNextPoint;


            /**
            * The elapsed distance of the current activity in meters (m).  
            * @type Toybox.Lang.Float
            */
            public var elapsedDistance;


            /**
            * Elapsed time of the current activity in milliseconds (ms).  
            * @type Toybox.Lang.Number
            */
            public var elapsedTime;


            /**
            * The elevation at the destination in meters (m).  
            * @type Toybox.Lang.Float
            */
            public var elevationAtDestination;


            /**
            * The elevation at the next point in meters (m).  
            * @type Toybox.Lang.Float
            */
            public var elevationAtNextPoint;


            /**
            * The current energy expenditure in kilocalories per minute (kcals/min). Energy expenditure is a metric developed by FirstBeat that provides an estimation of the calorie burn rate calculated from heart rate data.  
            * @type Toybox.Lang.Float
            */
            public var energyExpenditure;


            /**
            * The current front bicycle derailleur index. Index values range from from 1 to the frontDerailleurMax.  
            * @type Toybox.Lang.Number
            */
            public var frontDerailleurIndex;


            /**
            * The front bicycle derailleur maximum index.  
            * @type Toybox.Lang.Number
            */
            public var frontDerailleurMax;


            /**
            * The front bicycle derailleur gear size in number of teeth.  
            * @type Toybox.Lang.Number
            */
            public var frontDerailleurSize;


            /**
            * The maximum cadence recorded during the current activity in revolutions per minute (rpm).  
            * @type Toybox.Lang.Number
            */
            public var maxCadence;


            /**
            * The maximum heart rate recorded during the current activity in beats per minute (bpm).  
            * @type Toybox.Lang.Number
            */
            public var maxHeartRate;


            /**
            * The maximum power recorded during the current activity in Watts (W).  
            * @type Toybox.Lang.Number
            */
            public var maxPower;


            /**
            * The maximum speed recorded during the current activity in meters per second (mps).  
            * @type Toybox.Lang.Float
            */
            public var maxSpeed;


            /**
            * The mean sea level barometric pressure in Pascals (Pa). This returns barometric pressure calibrated to sea level. Since pressure varies dues to several factors, a GPS-based altitude must first be obtained, then the ambient (local) pressure is measured by the pressure sensor before conversion to a calibrated barometric pressure value.  
            * @type Toybox.Lang.Float
            */
            public var meanSeaLevelPressure;


            /**
            * The name of the destination.  
            * @type Toybox.Lang.String
            */
            public var nameOfDestination;


            /**
            * The name of the next point.  
            * @type Toybox.Lang.String
            */
            public var nameOfNextPoint;


            /**
            * The distance to the nearest point on the current course in meters (m).  
            * @type Toybox.Lang.Float
            */
            public var offCourseDistance;


            /**
            * The raw ambient pressure in Pascals (Pa). This returns ambient (local) barometric pressure as measured by the internal pressure sensor. The data is the temperature compensated information read directly from the internal sensor.  
            * @type Toybox.Lang.Float
            */
            public var rawAmbientPressure;


            /**
            * The current front bicycle derailleur index. Index values range from from 1 to the rearDerailleurMax.  
            * @type Toybox.Lang.Number
            */
            public var rearDerailleurIndex;


            /**
            * The rear bicycle derailleur maximum index.  
            * @type Toybox.Lang.Number
            */
            public var rearDerailleurMax;


            /**
            * The rear bicycle derailleur gear size in number of teeth.  
            * @type Toybox.Lang.Number
            */
            public var rearDerailleurSize;


            /**
            * The starting location of the current activity. This member will always provide a null value unless the Positioning Permission is enabled.  
            * @type Toybox.Position.Location
            */
            public var startLocation;


            /**
            * The starting time of the current activity.  
            * @type Toybox.Time.Moment
            */
            public var startTime;


            /**
            * The swim stroke type from the previous length. Swim stroke type values range from 0-6. Each Number value represents a different swim stroke type (e.g. freestyle, backstroke, etc.).  
            * @type Toybox.Lang.Number
            */
            public var swimStrokeType;


            /**
            * The SWOLF score from the previous length. SWOLF is an abbreviation for Swim-Golf, a measure of swimming efficiency. The score is obtained by adding the strokes per length to the total time of the length. For example, if it takes ten strokes and thirty seconds to swim a pool length, the SWOLF score is 40. Just like golf, a lower SWOLF score is better.  
            * @type Toybox.Lang.Number
            */
            public var swimSwolf;


            /**
            * The recording timer state. The timer state ranges from 0-3. A value of 0 indicates that the timer is off and there is no active recording, while a value of 3 indicates timer is on and there is an active recording.  
            * @type Toybox.Lang.Number
            */
            public var timerState;


            /**
            * The current Timer value in milliseconds (ms).  
            * @type Toybox.Lang.Number
            */
            public var timerTime;


            /**
            * The total ascent during the current activity in meters (m).  
            * @type Toybox.Lang.Float
            */
            public var totalAscent;


            /**
            * The total descent during the current activity in meters (m).  
            * @type Toybox.Lang.Float
            */
            public var totalDescent;


            /**
            * The current track in radians. Track is the direction of travel in radians based on GPS movement. If supported by the device, this provides compass orientation when stopped.  
            * @type Toybox.Lang.Float
            */
            public var track;


            /**
            * The Training Effect score of the current activity. Training Effect is a score developed by FirstBeat, which indicates an activity's level of effect on aerobic fitness. Scores range from 1.0 (easy) to 5.0 (overreaching).  
            * @type Toybox.Lang.Float
            */
            public var trainingEffect;


        }


        public class Location {

            /**
            * Get a Location object that is offset from the current position by a given distance and angle.
            * @param angle - (Toybox.Lang.Float)
            * @param distance - (Toybox.Lang.Float)
            * @returns 
            */
            public function getProjectedLocation(angle,distance) { }


            /**
            * Constructor Create a Location based on a set of coordinates.
            * @param options - (Toybox.Lang.Array)
            * @returns  
            */
            public function initialize(options) { }


            /**
            * Get a Location object's coordinates in degrees.Example:using Toybox.Position;using Toybox.System;Position.enableLocationEvents(Position.LOCATION_ONE_SHOT, method(:onPosition));function onPosition(info) {var myLocation = info.position.toDegrees();System.println(myLocation[0]); // latitude (e.g. 38.856147)System.println(myLocation[1]); // longitude (e.g -94.800953)}
            * @returns  Toybox.Lang.Array
            */
            public function toDegrees() { }


            /**
            * Get a String representation a Location object's coordinates.
            * @param format - (Toybox.Lang.Number)
            * @returns 
            */
            public function toGeoString(format) { }


            /**
            * Get a location object's coordinates in radians.Example:using Toybox.Position;using Toybox.System;Position.enableLocationEvents(Position.LOCATION_ONE_SHOT, method(:onPosition));function onPosition(info) {var myLocation = info.position.toRadians();System.println(myLocation[0]); // latitude (e.g. 0.678197)System.println(myLocation[1]); // longitude (e.g -1.654588)}
            * @returns  Toybox.Lang.Array
            */
            public function toRadians() { }


        }


    }

    module Sensor {

            /**
            * Disable the given sensor type for use. Unlike the existing setEnabledSensors() function, this will not enable/disable other sensor types.
            * @returns  
            */
            public function disableSensorType() { }


            /**
            * Request sensor events from enabled sensors. Sensor events are retrieved from any enabled sensors at a rate of 1 Hz. The data retrieved from enabled sensors is passed to the listener Method provided as a parameter to this method.
            * @param listener - (Toybox.Lang.Method)
            * @returns  
            */
            public function enableSensorEvents(listener) { }


            /**
            * Enable the given sensor type for use. Unlike the existing setEnabledSensors() function, this will not enable/disable other sensor types.
            * @returns  
            */
            public function enableSensorType() { }


            /**
            * Get the current Sensor Sensor.Info.This is useful for retrieving the current sensor info either on demandor periodically within a Timer.Example:Get accelerometer data once per secondusing Toybox.Sensor;using Toybox.System;using Toybox.Timer;var dataTimer = new Timer.Timer();dataTimer.start(method(:timerCallback), 1000, true); // A one-second timerfunction timerCallback() {var sensorInfo = Sensor.getInfo();if (sensorInfo has :accel && sensorInfo.accel != null) {var accel = sensorInfo.accel;var xAccel = accel[0];var yAccel = accel[1];System.println("x: " + xAccel + ", y: " + yAccel);}}
            * @returns  Toybox.Sensor.Info
            */
            public function getInfo() { }


            /**
            * Get the maximum sample rate supported by the system.Example:using Toybox.Sensor;var maxSample = Sensor.getMaxSampleRate();Supported Devices:Approach® S62Captain MarvelD2™ AirD2™ CharlieD2™ DeltaD2™ Delta PXD2™ Delta SDarth Vader™Descent™ Mk1Descent™ Mk2 / Descent™ Mk2iEdge® 1030Edge® 1030 PlusEdge® 130Edge® 130 PlusEdge® 520 PlusEdge® 530Edge® 820 / ExploreEdge® 830Edge® Explorefēnix® 5 / quatix® 5fēnix® 5 Plusfēnix® 5Sfēnix® 5S Plusfēnix® 5X / tactix® Charliefēnix® 5X Plusfēnix® 6 / 6 Solar / 6 Dual Powerfēnix® 6 Pro / 6 Sapphire / 6 Pro Solar / 6 Pro Dual Power / quatix® 6fēnix® 6S / 6S Solar / 6S Dual Powerfēnix® 6S Pro / 6S Sapphire / 6S Pro Solar / 6S Pro Dual Powerfēnix® 6X Pro / 6X Sapphire / 6X Pro Solar / tactix® Delta Sapphire / Delta Solar / Delta Solar - Ballistics Edition / quatix® 6X / 6X Solar / 6X Dual Powerfēnix® ChronosFirst AvengerForerunner® 245Forerunner® 245 MusicForerunner® 645Forerunner® 645 MusicForerunner® 735xtForerunner® 745Forerunner® 935Forerunner® 945GPSMAP® 66s / 66sr / 66stGPSMAP® 86s / 86sc / 86i / 86sciMARQ™ AdventurerMARQ™ AthleteMARQ™ AviatorMARQ® Captain / MARQ® Captain: American Magic EditionMARQ™ CommanderMARQ™ DriverMARQ™ ExpeditionMARQ™ GolferMontana® 7 SeriesOregon® 7 SeriesRey™Rino® 7 SeriesVenu™Venu™ Mercedes-Benz® CollectionVenu® SqVenu® Sq. Music Editionvívoactive® 3vívoactive® 3 Mercedes-Benz® Collectionvívoactive® 3 Musicvívoactive® 3 Music LTEvívoactive® 4vívoactive® 4Svívoactive® HR
            * @returns  Toybox.Lang.Number
            */
            public function getMaxSampleRate() { }


            /**
            * Retrieve the sensors that are currently registered. This function returns an iterator for the sensors that are considered to be `registered` if pairing information has been provided for it in Sensor settings.
            * @param sensorType - (Toybox.Lang.Number)
            * @returns 
            */
            public function getRegisteredSensors(sensorType) { }


            /**
            * Register a callback to fetch high-frequency data from various sensors. The callback will get invoked each time a new set of sensor data over the length of time specified in the period option is available. Note: Only one data request is allowed to be registered at a time. Subsequent calls to this function for the same sensor type will override previously registered requests.
            * @param listener - (Toybox.Lang.Method)
            * @param options - (Toybox.Lang.Dictionary)
            * @returns  
            */
            public function registerSensorDataListener(listener,options) { }


            /**
            * Enable sensors for use. This will enable both connected ANT+ sensors and system sensors if possible.
            * @param sensors - (Toybox.Lang.Array)
            * @returns  
            */
            public function setEnabledSensors(sensors) { }


            /**
            * Unregister a previously registered data listener.
            * @returns  
            */
            public function unregisterSensorDataListener() { }

        
        public class AccelerometerData {

            /**
            * The Array of pitch values as Floats in degrees. Can be null. Pitch values are calculated with the equation atan2(y, sqrt(x^2 + z^2)).  
            * @type Toybox.Lang.Array
            */
            public var pitch;


            /**
            * The Array of vector power values as Numbers in millig-units. Can be null.  
            * @type Toybox.Lang.Array
            */
            public var power;


            /**
            * The Array of roll values as Floats in degrees. Can be null. Roll values are calculated with the equation atan2(-x, z).  
            * @type Toybox.Lang.Array
            */
            public var roll;


            /**
            * The Array of x axis values as Numbers in millig-units.  
            * @type Toybox.Lang.Array
            */
            public var x;


            /**
            * The Array of y axis values as Numbers in millig-units.  
            * @type Toybox.Lang.Array
            */
            public var y;


            /**
            * The Array of z axis values as Numbers in millig-units.  
            * @type Toybox.Lang.Array
            */
            public var z;


        }


        public class HeartRateData {

            /**
            * The most recent beat-to-beat interval data as an Array of Number objects in milliseconds (ms).  
            * @type Toybox.Lang.Array
            */
            public var heartBeatIntervals;


        }


        public class Info {

            /**
            * The altitude above mean sea level in meters (m). Elevation is derived from the most accurate source: Barometer or GPS  
            * @type Toybox.Lang.Float
            */
            public var altitude;


            /**
            * The ambient pressure in Pascals (Pa). This returns ambient (local) barometric pressure as measured by the pressure sensor. The data is smoothed by a two-stage filter to reduce noise and instantaneous variation.  
            * @type Toybox.Lang.Float
            */
            public var ambientPressure;


            /**
            * The average cadence during the current activity in revolutions per minute (rpm).  
            * @type Toybox.Lang.Number
            */
            public var averageCadence;


            /**
            * The average swim stroke distance from the previous interval in meters (m).  
            * @type Toybox.Lang.Float
            */
            public var averageDistance;


            /**
            * The average heart rate during the current activity in beats per minute (bpm).  
            * @type Toybox.Lang.Number
            */
            public var averageHeartRate;


            /**
            * The average power during the current activity in Watts (W).  
            * @type Toybox.Lang.Number
            */
            public var averagePower;


            /**
            * The average speed during the current activity in meters per second (mps). The average is computed as the elapsed 3-D accumulated distance divided by the elapsed time.  
            * @type Toybox.Lang.Float
            */
            public var averageSpeed;


            /**
            * The current bearing in radians. Bearing is the direction from your current location or position to the destination of navigation, dependent on your current location.  
            * @type Toybox.Lang.Float
            */
            public var bearing;


            /**
            * The bearing from the starting location to the destination in radians. Bearing from start is the direction of desired track from the start of navigation to the destination in radians. This is only dependent on your location when a course is set, and it is not dependent on where you may have moved to during an activity  
            * @type Toybox.Lang.Float
            */
            public var bearingFromStart;


            /**
            * The calories burned throughout the current activity in kilocalories (kcal).  
            * @type Toybox.Lang.Number
            */
            public var calories;


            /**
            * The current cadence in revolutions per minute (rpm).  
            * @type Toybox.Lang.Number
            */
            public var currentCadence;


            /**
            * The true north referenced heading in radians. This provides compass orientation if it is supported by the device.  
            * @type Toybox.Lang.Float
            */
            public var currentHeading;


            /**
            * The current heart rate in beats per minute (bpm).  
            * @type Toybox.Lang.Number
            */
            public var currentHeartRate;


            /**
            * The current location. This member will always provide a null value unless the Positioning Permission is enabled.  
            * @type Toybox.Position.Location
            */
            public var currentLocation;


            /**
            * The current GPS accuracy. GPS accuracy values range from 0-4. A value of 0 indicates an accuracy value is not available, while a value of 4 indicates a good GPS fix.  
            * @type Toybox.Lang.Number
            */
            public var currentLocationAccuracy;


            /**
            * The current oxygen saturation in percent (%)  
            * @type Toybox.Lang.Number
            */
            public var currentOxygenSaturation;


            /**
            * The current power in Watts (W).  
            * @type Toybox.Lang.Number
            */
            public var currentPower;


            /**
            * The current speed in meters per second (mps).  
            * @type Toybox.Lang.Float
            */
            public var currentSpeed;


            /**
            * The distance to the destination in meters (m).  
            * @type Toybox.Lang.Float
            */
            public var distanceToDestination;


            /**
            * The distance to the next point in meters (m).  
            * @type Toybox.Lang.Float
            */
            public var distanceToNextPoint;


            /**
            * The elapsed distance of the current activity in meters (m).  
            * @type Toybox.Lang.Float
            */
            public var elapsedDistance;


            /**
            * Elapsed time of the current activity in milliseconds (ms).  
            * @type Toybox.Lang.Number
            */
            public var elapsedTime;


            /**
            * The elevation at the destination in meters (m).  
            * @type Toybox.Lang.Float
            */
            public var elevationAtDestination;


            /**
            * The elevation at the next point in meters (m).  
            * @type Toybox.Lang.Float
            */
            public var elevationAtNextPoint;


            /**
            * The current energy expenditure in kilocalories per minute (kcals/min). Energy expenditure is a metric developed by FirstBeat that provides an estimation of the calorie burn rate calculated from heart rate data.  
            * @type Toybox.Lang.Float
            */
            public var energyExpenditure;


            /**
            * The current front bicycle derailleur index. Index values range from from 1 to the frontDerailleurMax.  
            * @type Toybox.Lang.Number
            */
            public var frontDerailleurIndex;


            /**
            * The front bicycle derailleur maximum index.  
            * @type Toybox.Lang.Number
            */
            public var frontDerailleurMax;


            /**
            * The front bicycle derailleur gear size in number of teeth.  
            * @type Toybox.Lang.Number
            */
            public var frontDerailleurSize;


            /**
            * The maximum cadence recorded during the current activity in revolutions per minute (rpm).  
            * @type Toybox.Lang.Number
            */
            public var maxCadence;


            /**
            * The maximum heart rate recorded during the current activity in beats per minute (bpm).  
            * @type Toybox.Lang.Number
            */
            public var maxHeartRate;


            /**
            * The maximum power recorded during the current activity in Watts (W).  
            * @type Toybox.Lang.Number
            */
            public var maxPower;


            /**
            * The maximum speed recorded during the current activity in meters per second (mps).  
            * @type Toybox.Lang.Float
            */
            public var maxSpeed;


            /**
            * The mean sea level barometric pressure in Pascals (Pa). This returns barometric pressure calibrated to sea level. Since pressure varies dues to several factors, a GPS-based altitude must first be obtained, then the ambient (local) pressure is measured by the pressure sensor before conversion to a calibrated barometric pressure value.  
            * @type Toybox.Lang.Float
            */
            public var meanSeaLevelPressure;


            /**
            * The name of the destination.  
            * @type Toybox.Lang.String
            */
            public var nameOfDestination;


            /**
            * The name of the next point.  
            * @type Toybox.Lang.String
            */
            public var nameOfNextPoint;


            /**
            * The distance to the nearest point on the current course in meters (m).  
            * @type Toybox.Lang.Float
            */
            public var offCourseDistance;


            /**
            * The raw ambient pressure in Pascals (Pa). This returns ambient (local) barometric pressure as measured by the internal pressure sensor. The data is the temperature compensated information read directly from the internal sensor.  
            * @type Toybox.Lang.Float
            */
            public var rawAmbientPressure;


            /**
            * The current front bicycle derailleur index. Index values range from from 1 to the rearDerailleurMax.  
            * @type Toybox.Lang.Number
            */
            public var rearDerailleurIndex;


            /**
            * The rear bicycle derailleur maximum index.  
            * @type Toybox.Lang.Number
            */
            public var rearDerailleurMax;


            /**
            * The rear bicycle derailleur gear size in number of teeth.  
            * @type Toybox.Lang.Number
            */
            public var rearDerailleurSize;


            /**
            * The starting location of the current activity. This member will always provide a null value unless the Positioning Permission is enabled.  
            * @type Toybox.Position.Location
            */
            public var startLocation;


            /**
            * The starting time of the current activity.  
            * @type Toybox.Time.Moment
            */
            public var startTime;


            /**
            * The swim stroke type from the previous length. Swim stroke type values range from 0-6. Each Number value represents a different swim stroke type (e.g. freestyle, backstroke, etc.).  
            * @type Toybox.Lang.Number
            */
            public var swimStrokeType;


            /**
            * The SWOLF score from the previous length. SWOLF is an abbreviation for Swim-Golf, a measure of swimming efficiency. The score is obtained by adding the strokes per length to the total time of the length. For example, if it takes ten strokes and thirty seconds to swim a pool length, the SWOLF score is 40. Just like golf, a lower SWOLF score is better.  
            * @type Toybox.Lang.Number
            */
            public var swimSwolf;


            /**
            * The recording timer state. The timer state ranges from 0-3. A value of 0 indicates that the timer is off and there is no active recording, while a value of 3 indicates timer is on and there is an active recording.  
            * @type Toybox.Lang.Number
            */
            public var timerState;


            /**
            * The current Timer value in milliseconds (ms).  
            * @type Toybox.Lang.Number
            */
            public var timerTime;


            /**
            * The total ascent during the current activity in meters (m).  
            * @type Toybox.Lang.Float
            */
            public var totalAscent;


            /**
            * The total descent during the current activity in meters (m).  
            * @type Toybox.Lang.Float
            */
            public var totalDescent;


            /**
            * The current track in radians. Track is the direction of travel in radians based on GPS movement. If supported by the device, this provides compass orientation when stopped.  
            * @type Toybox.Lang.Float
            */
            public var track;


            /**
            * The Training Effect score of the current activity. Training Effect is a score developed by FirstBeat, which indicates an activity's level of effect on aerobic fitness. Scores range from 1.0 (easy) to 5.0 (overreaching).  
            * @type Toybox.Lang.Float
            */
            public var trainingEffect;


        }


        public class SensorData {

        }


        public class TooManySensorDataListenersException {

            /**
            * Constructor
            * @param msg - (Toybox.Lang.String)
            * @returns  
            */
            public function initialize(msg) { }


        }


    }

    module SensorHistory {

            /**
            * Get the elevation history for the given period, up to the last power cycle. This function always returns the most recent pressure samples. The time between each SensorSample in the iterator may be device dependent.
            * @param options - (Toybox.Lang.Dictionary)
            * @returns 
            */
            public function getElevationHistory(options) { }


            /**
            * Get the heart rate history for the given period, up to the last power cycle. This function always returns the most recent heart rate samples. The time between each SensorSample in the iterator may be device dependent.
            * @param options - (Toybox.Lang.Dictionary)
            * @returns 
            */
            public function getHeartRateHistory(options) { }


            /**
            * Get the oxygen saturation history for the given period This function always returns the most recent sensor history samples. The time between each `SensorSample` in the iterator may be device dependent.
            * @param options - (Toybox.Lang.Dictionary)
            * @returns 
            */
            public function getOxygenSaturationHistory(options) { }


            /**
            * Get the pressure history for the given period, up to the last power cycle. This function always returns the most recent pressure samples. The time between each SensorSample in the iterator may be device dependent.
            * @param options - (Toybox.Lang.Dictionary)
            * @returns 
            */
            public function getPressureHistory(options) { }


            /**
            * Get the temperature history for the given period, up to the last power cycle. This function always returns the most recent temperature samples. The time between each SensorSample in the iterator may be device dependent.
            * @param options - (Toybox.Lang.Dictionary)
            * @returns 
            */
            public function getTemperatureHistory(options) { }


        
        public class SensorHistoryIterator {

            /**
            * Get the maximum SensorSampledata value contained in this iterator.Example:Print out the maximum SensorSample data valueusing Toybox.SensorHistory;using Toybox.System;// Given a valid SensorHistoryIterator object, print out the// maximum sample value entry in the iteratorSystem.println(sensorIter.getMax().data);
            * @returns  Toybox.Lang.Number
            */
            public function getMax() { }


            /**
            * Get the minimum SensorSampledata value contained in this iterator.Example:Print out the minimum SensorSample data valueusing Toybox.SensorHistory;using Toybox.System;// Given a valid SensorHistoryIterator object, print out the// minimum sample value entry in the iteratorSystem.println(sensorIter.getMin().data);
            * @returns  Toybox.Lang.Number
            */
            public function getMin() { }


            /**
            * Get the Moment of the newestSensorSample in this iterator.Example:Print out the Moment of the newest SensorSampleusing Toybox.SensorHistory;using Toybox.System;// Given a valid SensorHistoryIterator object, print out the Moment// of the newest sample entry in the iteratorSystem.println(sensorIter.getNewestSampleTime());
            * @returns  Toybox.Time.Moment
            */
            public function getNewestSampleTime() { }


            /**
            * Get the Moment of the oldestSensorSample in this iterator.Example:Print out the Moment of the oldest SensorSampleusing Toybox.SensorHistory;using Toybox.System;// Given a valid SensorHistoryIterator object, print out the Moment// of the oldest sample entry in the iteratorSystem.println(sensorIter.getOldestSampleTime());
            * @returns  Toybox.Time.Moment
            */
            public function getOldestSampleTime() { }


            /**
            * Get the next SensorSampleentry in the iterator.This must be called to get the initial data from the iterator.Example:Print out the next SensorSample data valueusing Toybox.SensorHistory;using Toybox.System;// Given a valid SensorHistoryIterator object, print out the next// entry in the iteratorSystem.println(sensorIter.next().data);
            * @returns  Toybox.SensorHistory.SensorSample
            */
            public function next() { }


        }


        public class SensorSample {

            /**
            * The Sensor sample. The Sensor sample may contain invalid data. Make sure to has check for invalid samples. If the samples do not contain data, they will return null.  
            * @type Toybox.Lang.Number, Toybox.Lang.Float
            */
            public var data;


            /**
            * The time of the Sensor sample.  
            * @type Toybox.Time.Moment
            */
            public var when;


        }


    }

    module SensorLogging {

        
        public class SensorLogger {

            /**
            * Get statistics for the data gathered in the current session.
            * @returns  Toybox.SensorLogging.SensorLoggingStats
            */
            public function getStats() { }


        }


        public class SensorLoggingStats {

            /**
            * The total number of logged samples  
            * @type Toybox.Lang.Number
            */
            public var sampleCount;


            /**
            * The total number of seconds of logged data  
            * @type Toybox.Lang.Number
            */
            public var samplePeriod;


        }


    }

    module StringUtil {

            /**
            * Given an Array of Char objects, return the String equivalent
            * @param charArray - (Toybox.Lang.Array)
            * @returns 
            */
            public function charArrayToString(charArray) { }


            /**
            * Convert a String or ByteArray representation to a String or ByteArray representation whose underlying byte format corresponds to the provided input options.
            * @param input - (Toybox.Lang.String, Toybox.Lang.ByteArray)
            * @param options - (Toybox.Lang.Dictionary);;:fromRepresentation
            * @returns 
            */
            public function convertEncodedString(input,options) { }


            /**
            * Given an Array of UTF-8 bytes, return the String equivalent
            * @param utf8Array - (Toybox.Lang.Array)
            * @returns 
            */
            public function utf8ArrayToString(utf8Array) { }


        
        public class InvalidHexStringException {

            /**
            * Constructor
            * @param msg - (Toybox.Lang.String)
            * @returns  
            */
            public function initialize(msg) { }


        }


    }

    module System {

            /**
            * Write an error to the console and exit the system. Note: There are never really too many bananas.
            * @param msg - (Toybox.Lang.String)
            * @returns  
            */
            public function error(msg) { }


            /**
            * Exit the current app and launch a new app. This may only be called by watch-apps and widgets, and may only target watch-apps (both native activities and Connect IQ apps) and widgets. This is an asynchronous request that presents a confirmation dialog to launch the Intent. If confirmed, the current app will exit. Otherwise, the app will continue to run without exiting.
            * @param intent - (Toybox.System.Intent)
            * @returns  
            */
            public function exitTo(intent) { }


            /**
            * Get the current clock time.
            * @returns  Toybox.System.ClockTime
            */
            public function getClockTime() { }


            /**
            * Get the current device settings.Example:using Toybox.System;var mySettings = System.getDeviceSettings();
            * @returns  Toybox.System.DeviceSettings
            */
            public function getDeviceSettings() { }


            /**
            * Get the current system stats.Example:using Toybox.System;var myStats = System.getDeviceStats();
            * @returns  Toybox.System.Stats
            */
            public function getSystemStats() { }


            /**
            * Get the current millisecond timer value.
            * @returns  Toybox.Lang.Number
            */
            public function getTimer() { }


            /**
            * Check the installation status of an app.
            * @param uri - (Toybox.Lang.String)
            * @returns 
            */
            public function isAppInstalled(uri) { }


            /**
            * Print to the console.
            * @param output - (Toybox.Lang.Object)
            * @returns  
            */
            public function print(output) { }


            /**
            * Print to the console with a line terminator.
            * @param output - (Toybox.Lang.Object)
            * @returns  
            */
            public function println(output) { }


        
        public class AppNotInstalledException {

        }


        public class ClockTime {

            /**
            * The daylight savings time offset.  
            * @type Toybox.Lang.Number
            */
            public var dst;


            /**
            * The hour of the day based on a 24-hour clock.  
            * @type Toybox.Lang.Number
            */
            public var hour;


            /**
            * The minute of the current hour.  
            * @type Toybox.Lang.Number
            */
            public var min;


            /**
            * The second of the current minute.  
            * @type Toybox.Lang.Number
            */
            public var sec;


            /**
            * The time offset from UTC in seconds.  
            * @type Toybox.Lang.Number
            */
            public var timeZoneOffset;


        }


        public class ConnectionInfo {

            /**
            * The state of the connection. Returns: 
            * @type Toybox.Lang.Number
            */
            public var state;


        }


        public class DeviceSettings {

            /**
            * The activity tracking setting mode.  
            * @type Toybox.Lang.Boolean
            */
            public var activityTrackingOn;


            /**
            * The number of alarms set on the device.  
            * @type Toybox.Lang.Number
            */
            public var alarmCount;


            /**
            * Indicates if any communication channel is connected and available for use.  
            * @type Toybox.Lang.Boolean
            */
            public var connectionAvailable;


            /**
            * The state of connections available to the device.  
            * @type Toybox.Lang.Dictionary
            */
            public var connectionInfo;


            /**
            * The distance unit setting mode.  
            * @type Toybox.Lang.Number
            */
            public var distanceUnits;


            /**
            * The Do Not Disturb setting mode. Not all devices support Do Not Disturb, so it's a good idea to perform a has check when attempting to use this value. Example: using Toybox.System; var mySettings = System.getDeviceSettings(); if (deviceSettings has :doNotDisturb) { var doNotDisturb = deviceSettings.doNotDisturb; }  
            * @type Toybox.Lang.Boolean
            */
            public var doNotDisturb;


            /**
            * The elevation unit setting mode.  
            * @type Toybox.Lang.Number
            */
            public var elevationUnits;


            /**
            * The current firmware version of the device. Example: using Toybox.System; var mySettings = System.getDeviceSettings(); var version = mySettings.firmwareVersion; var versionString = Lang.format("$1$.$2$", version); System.println(versionString minor); // e.g. 2.50  
            * @type Toybox.Lang.Array
            */
            public var firmwareVersion;


            /**
            * The first day of the week.  
            * @type Toybox.Lang.Number
            */
            public var firstDayOfWeek;


            /**
            * The height unit setting mode.  
            * @type Toybox.Lang.Number
            */
            public var heightUnits;


            /**
            * The physical buttons supported by the device. This returns a bitwise binary of the enumerated values defined by the System.BUTTON_INPUT_* constants that match the available buttons on a particular device. For example, a vivoactive HR returns a value of 9, which indicates Select (1) and Menu (8) button support. A fenix 5, however, returns 11, indicating support for all available button types. Example: using Toybox.System; var mySettings = System.getDeviceSettings(); if ((mySettings.inputButtons & System.BUTTON_INPUT_MENU) != 0) { // Allow the use of the Menu button }  
            * @type Toybox.Lang.Number
            */
            public var inputButtons;


            /**
            * The clock mode mode.  
            * @type Toybox.Lang.Boolean
            */
            public var is24Hour;


            /**
            * Indicates if widget glances are enabled on the device. If glance mode is enabled, the system will pass up / down key events to a widget's base page. Otherwise, the system will mask them out.  
            * @type Toybox.Lang.Boolean
            */
            public var isGlanceModeEnabled;


            /**
            * The availability of a touch screen on the device.  
            * @type Toybox.Lang.Boolean
            */
            public var isTouchScreen;


            /**
            * The Connect IQ version supported by the device. Example: using Toybox.System; var mySettings = System.getDeviceSettings(); var version = mySettings.monkeyVersion; var versionString = Lang.format("$1$.$2$.$3$", version); System.println(versionString); //e.g. 2.2.5  
            * @type Toybox.Lang.Array
            */
            public var monkeyVersion;


            /**
            * The number of active notifications.  
            * @type Toybox.Lang.Number
            */
            public var notificationCount;


            /**
            * The pace unit setting mode.  
            * @type Toybox.Lang.Number
            */
            public var paceUnits;


            /**
            * The part number of the device.  
            * @type Toybox.Lang.String
            */
            public var partNumber;


            /**
            * The phone connection status mode.  
            * @type Toybox.Lang.Boolean
            */
            public var phoneConnected;


            /**
            * This flag indicates whether the device screen requires burn-in protection. Some screens require special drawing behavior when rendering content in always-on mode. If a screen requires burn-in protection the following rules must be followed: A maximum of ten-percent of the total available screen pixels can be in use at one time. Individual pixels can be on for no more than three update cycles when updating at once-per-minute intervals. If either condition is violated all screen pixels will be turned off until the device goes into high-power mode.  
            * @type Toybox.Lang.Boolean
            */
            public var requiresBurnInProtection;


            /**
            * The height of the device screen in pixels. In some cases, this can be useful to determine the device type at runtime. However, to get the height of the screen area currently available to an app, use Graphics.Dc.getHeight().  
            * @type Toybox.Lang.Number
            */
            public var screenHeight;


            /**
            * The screen shape of the device.  
            * @type Toybox.Lang.Number
            */
            public var screenShape;


            /**
            * The width of the device screen in pixels. In some cases, this can be useful to determine the device type at runtime. However, to get the width of the screen area currently available to an app, use Graphics.Dc.getWidth().  
            * @type Toybox.Lang.Number
            */
            public var screenWidth;


            /**
            * The language being used by the system  
            * @type Toybox.Lang.Number
            */
            public var systemLanguage;


            /**
            * The temperature unit setting mode.  
            * @type Toybox.Lang.Number
            */
            public var temperatureUnits;


            /**
            * The tone setting mode.  
            * @type Toybox.Lang.Boolean
            */
            public var tonesOn;


            /**
            * A unique alphanumeric device identifier. The value is unique for every app, but is stable on a device across uninstall and reinstall. Any use of this value for tracking user information must be in compliance with international privacy law. Example: using Toybox.System; var mySettings = System.getDeviceSettings(); var id = mySettings.uniqueIdentifier; if (id != null) { System.println(id); //e.g. ac915d426451c88e8ea691fa412f9af9c21b4d12 }  
            * @type Toybox.Lang.String
            */
            public var uniqueIdentifier;


            /**
            * The vibration setting mode.  
            * @type Toybox.Lang.Boolean
            */
            public var vibrateOn;


            /**
            * The weight unit setting mode.  
            * @type Toybox.Lang.Number
            */
            public var weightUnits;


        }


        public class Intent {

            /**
            * Constructor
            * @param aURI - (Toybox.Lang.String)
            * @param aArgs - (Toybox.Lang.Dictionary)
            * @returns  
            */
            public function initialize(aURI,aArgs) { }


        }


        public class PreviousOperationNotCompleteException {

            /**
            * Constructor
            * @param msg - (Toybox.Lang.String)
            * @returns  
            */
            public function initialize(msg) { }


        }


        public class ServiceDelegate {

            /**
            * The callback method that is triggered when an activity is completed
            * @param activity - (Toybox.Lang.Dictionary)
            * @returns  
            */
            public function onActivityCompleted(activity) { }


            /**
            * A callback method that is triggered in the background when a fitness goal is reached.
            * @param goalType - (Toybox.Lang.Number)
            * @returns  
            */
            public function onGoalReached(goalType) { }


            /**
            * The callback method that is triggered when a phone app message arrives for this app
            * @param msg - (Toybox.Communications.PhoneAppMessage)
            * @returns  
            */
            public function onPhoneAppMessage(msg) { }


        }


        public class SensorLoggingStats {

            /**
            * The total number of logged samples  
            * @type Toybox.Lang.Number
            */
            public var sampleCount;


            /**
            * The total number of seconds of logged data  
            * @type Toybox.Lang.Number
            */
            public var samplePeriod;


        }


        public class UnexpectedAppTypeException {

            /**
            * Constructor
            * @param msg - (Toybox.Lang.String)
            * @returns  
            */
            public function initialize(msg) { }


        }


    }

    module Test {

            /**
            * Throws an exception if the test is false.
            * @param test - (Toybox.Lang.Boolean)
            * @returns  
            */
            public function assert(test) { }


        
        public class AssertException {

            /**
            * Constructor
            * @param message - (Toybox.Lang.String)
            * @returns  
            */
            public function initialize(message) { }


        }


        public class SensorLogger {

            /**
            * Get statistics for the data gathered in the current session.
            * @returns  Toybox.SensorLogging.SensorLoggingStats
            */
            public function getStats() { }


        }


    }

    module Time {

            /**
            * Get a Moment for the current time based on the specified source. This method behaves the same as Time.now(), but accepts an options argument that allows the time source to be selected.
            * @param options - (Toybox.Lang.Dictionary)
            * @returns  
            */
            public function getCurrentTime(options) { }


            /**
            * Get a Moment for midnight today.Example:Using today() on December 31, 1989 at 5:00 pm CSTusing Toybox.Time;var now = new Time.Moment(Time.today().value()); // UNIX epoch 631087200
            * @returns  Toybox.Time.Moment
            */
            public function today() { }


        
        public class Duration {

            /**
            * Add a Moment or another Duration to a Duration. When adding a Moment to a Duration, this method functions the same as the Moment.add() method.
            * @param time - (Toybox.Time.Duration, Toybox.Time.Moment)
            * @returns 
            */
            public function add(time) { }


            /**
            * Determine if a Duration is shorter or longer than another Duration. This computes a Number representing the difference between the two Duration objects in seconds. The subtract() method can also be used to get the absolute difference between two Duration objects.
            * @param duration - (Toybox.Time.Duration)
            * @returns 
            */
            public function compare(duration) { }


            /**
            * Divide a Duration by a value.
            * @param value - (Toybox.Lang.Number, Toybox.Lang.Float)
            * @returns 
            */
            public function divide(value) { }


            /**
            * Determine if a Duration is longer than another Duration.
            * @param duration - (Toybox.Time.Duration)
            * @returns 
            */
            public function greaterThan(duration) { }


            /**
            * Constructor
            * @param value - (Toybox.Lang.Number)
            * @returns 
            */
            public function initialize(value) { }


            /**
            * Determine if a Duration is shorter than another Duration.
            * @param duration - (Toybox.Time.Duration)
            * @returns 
            */
            public function lessThan(duration) { }


            /**
            * Multiply a Duration by a value.
            * @param value - (Toybox.Lang.Number, Toybox.Lang.Float)
            * @returns 
            */
            public function multiply(value) { }


            /**
            * Get the absolute difference between two Duration objects. The computed Duration is always a positive value. The compare() method can also be used to get the difference between two Duration objects.
            * @param duration - (Toybox.Time.Duration)
            * @returns 
            */
            public function subtract(duration) { }


            /**
            * Get the value of a Duration.
            * @returns  Toybox.Lang.Number
            */
            public function value() { }


        }


    }

    module Gregorian {

        public class Info {

            /**
            * The altitude above mean sea level in meters (m). Elevation is derived from the most accurate source: Barometer or GPS  
            * @type Toybox.Lang.Float
            */
            public var altitude;


            /**
            * The ambient pressure in Pascals (Pa). This returns ambient (local) barometric pressure as measured by the pressure sensor. The data is smoothed by a two-stage filter to reduce noise and instantaneous variation.  
            * @type Toybox.Lang.Float
            */
            public var ambientPressure;


            /**
            * The average cadence during the current activity in revolutions per minute (rpm).  
            * @type Toybox.Lang.Number
            */
            public var averageCadence;


            /**
            * The average swim stroke distance from the previous interval in meters (m).  
            * @type Toybox.Lang.Float
            */
            public var averageDistance;


            /**
            * The average heart rate during the current activity in beats per minute (bpm).  
            * @type Toybox.Lang.Number
            */
            public var averageHeartRate;


            /**
            * The average power during the current activity in Watts (W).  
            * @type Toybox.Lang.Number
            */
            public var averagePower;


            /**
            * The average speed during the current activity in meters per second (mps). The average is computed as the elapsed 3-D accumulated distance divided by the elapsed time.  
            * @type Toybox.Lang.Float
            */
            public var averageSpeed;


            /**
            * The current bearing in radians. Bearing is the direction from your current location or position to the destination of navigation, dependent on your current location.  
            * @type Toybox.Lang.Float
            */
            public var bearing;


            /**
            * The bearing from the starting location to the destination in radians. Bearing from start is the direction of desired track from the start of navigation to the destination in radians. This is only dependent on your location when a course is set, and it is not dependent on where you may have moved to during an activity  
            * @type Toybox.Lang.Float
            */
            public var bearingFromStart;


            /**
            * The calories burned throughout the current activity in kilocalories (kcal).  
            * @type Toybox.Lang.Number
            */
            public var calories;


            /**
            * The current cadence in revolutions per minute (rpm).  
            * @type Toybox.Lang.Number
            */
            public var currentCadence;


            /**
            * The true north referenced heading in radians. This provides compass orientation if it is supported by the device.  
            * @type Toybox.Lang.Float
            */
            public var currentHeading;


            /**
            * The current heart rate in beats per minute (bpm).  
            * @type Toybox.Lang.Number
            */
            public var currentHeartRate;


            /**
            * The current location. This member will always provide a null value unless the Positioning Permission is enabled.  
            * @type Toybox.Position.Location
            */
            public var currentLocation;


            /**
            * The current GPS accuracy. GPS accuracy values range from 0-4. A value of 0 indicates an accuracy value is not available, while a value of 4 indicates a good GPS fix.  
            * @type Toybox.Lang.Number
            */
            public var currentLocationAccuracy;


            /**
            * The current oxygen saturation in percent (%)  
            * @type Toybox.Lang.Number
            */
            public var currentOxygenSaturation;


            /**
            * The current power in Watts (W).  
            * @type Toybox.Lang.Number
            */
            public var currentPower;


            /**
            * The current speed in meters per second (mps).  
            * @type Toybox.Lang.Float
            */
            public var currentSpeed;


            /**
            * The distance to the destination in meters (m).  
            * @type Toybox.Lang.Float
            */
            public var distanceToDestination;


            /**
            * The distance to the next point in meters (m).  
            * @type Toybox.Lang.Float
            */
            public var distanceToNextPoint;


            /**
            * The elapsed distance of the current activity in meters (m).  
            * @type Toybox.Lang.Float
            */
            public var elapsedDistance;


            /**
            * Elapsed time of the current activity in milliseconds (ms).  
            * @type Toybox.Lang.Number
            */
            public var elapsedTime;


            /**
            * The elevation at the destination in meters (m).  
            * @type Toybox.Lang.Float
            */
            public var elevationAtDestination;


            /**
            * The elevation at the next point in meters (m).  
            * @type Toybox.Lang.Float
            */
            public var elevationAtNextPoint;


            /**
            * The current energy expenditure in kilocalories per minute (kcals/min). Energy expenditure is a metric developed by FirstBeat that provides an estimation of the calorie burn rate calculated from heart rate data.  
            * @type Toybox.Lang.Float
            */
            public var energyExpenditure;


            /**
            * The current front bicycle derailleur index. Index values range from from 1 to the frontDerailleurMax.  
            * @type Toybox.Lang.Number
            */
            public var frontDerailleurIndex;


            /**
            * The front bicycle derailleur maximum index.  
            * @type Toybox.Lang.Number
            */
            public var frontDerailleurMax;


            /**
            * The front bicycle derailleur gear size in number of teeth.  
            * @type Toybox.Lang.Number
            */
            public var frontDerailleurSize;


            /**
            * The maximum cadence recorded during the current activity in revolutions per minute (rpm).  
            * @type Toybox.Lang.Number
            */
            public var maxCadence;


            /**
            * The maximum heart rate recorded during the current activity in beats per minute (bpm).  
            * @type Toybox.Lang.Number
            */
            public var maxHeartRate;


            /**
            * The maximum power recorded during the current activity in Watts (W).  
            * @type Toybox.Lang.Number
            */
            public var maxPower;


            /**
            * The maximum speed recorded during the current activity in meters per second (mps).  
            * @type Toybox.Lang.Float
            */
            public var maxSpeed;


            /**
            * The mean sea level barometric pressure in Pascals (Pa). This returns barometric pressure calibrated to sea level. Since pressure varies dues to several factors, a GPS-based altitude must first be obtained, then the ambient (local) pressure is measured by the pressure sensor before conversion to a calibrated barometric pressure value.  
            * @type Toybox.Lang.Float
            */
            public var meanSeaLevelPressure;


            /**
            * The name of the destination.  
            * @type Toybox.Lang.String
            */
            public var nameOfDestination;


            /**
            * The name of the next point.  
            * @type Toybox.Lang.String
            */
            public var nameOfNextPoint;


            /**
            * The distance to the nearest point on the current course in meters (m).  
            * @type Toybox.Lang.Float
            */
            public var offCourseDistance;


            /**
            * The raw ambient pressure in Pascals (Pa). This returns ambient (local) barometric pressure as measured by the internal pressure sensor. The data is the temperature compensated information read directly from the internal sensor.  
            * @type Toybox.Lang.Float
            */
            public var rawAmbientPressure;


            /**
            * The current front bicycle derailleur index. Index values range from from 1 to the rearDerailleurMax.  
            * @type Toybox.Lang.Number
            */
            public var rearDerailleurIndex;


            /**
            * The rear bicycle derailleur maximum index.  
            * @type Toybox.Lang.Number
            */
            public var rearDerailleurMax;


            /**
            * The rear bicycle derailleur gear size in number of teeth.  
            * @type Toybox.Lang.Number
            */
            public var rearDerailleurSize;


            /**
            * The starting location of the current activity. This member will always provide a null value unless the Positioning Permission is enabled.  
            * @type Toybox.Position.Location
            */
            public var startLocation;


            /**
            * The starting time of the current activity.  
            * @type Toybox.Time.Moment
            */
            public var startTime;


            /**
            * The swim stroke type from the previous length. Swim stroke type values range from 0-6. Each Number value represents a different swim stroke type (e.g. freestyle, backstroke, etc.).  
            * @type Toybox.Lang.Number
            */
            public var swimStrokeType;


            /**
            * The SWOLF score from the previous length. SWOLF is an abbreviation for Swim-Golf, a measure of swimming efficiency. The score is obtained by adding the strokes per length to the total time of the length. For example, if it takes ten strokes and thirty seconds to swim a pool length, the SWOLF score is 40. Just like golf, a lower SWOLF score is better.  
            * @type Toybox.Lang.Number
            */
            public var swimSwolf;


            /**
            * The recording timer state. The timer state ranges from 0-3. A value of 0 indicates that the timer is off and there is no active recording, while a value of 3 indicates timer is on and there is an active recording.  
            * @type Toybox.Lang.Number
            */
            public var timerState;


            /**
            * The current Timer value in milliseconds (ms).  
            * @type Toybox.Lang.Number
            */
            public var timerTime;


            /**
            * The total ascent during the current activity in meters (m).  
            * @type Toybox.Lang.Float
            */
            public var totalAscent;


            /**
            * The total descent during the current activity in meters (m).  
            * @type Toybox.Lang.Float
            */
            public var totalDescent;


            /**
            * The current track in radians. Track is the direction of travel in radians based on GPS movement. If supported by the device, this provides compass orientation when stopped.  
            * @type Toybox.Lang.Float
            */
            public var track;


            /**
            * The Training Effect score of the current activity. Training Effect is a score developed by FirstBeat, which indicates an activity's level of effect on aerobic fitness. Scores range from 1.0 (easy) to 5.0 (overreaching).  
            * @type Toybox.Lang.Float
            */
            public var trainingEffect;


        }


        public class Moment {

            /**
            * Add a Duration to a Moment. This method functions the same as the Duration.add() method when adding a Duration to a Moment.
            * @param duration - (Toybox.Time.Duration)
            * @returns 
            */
            public function add(duration) { }


            /**
            * Determine if a Moment is before or after another Moment. This computes a Number representing the difference between the two Moment objects in seconds. The subtract() method can also be used to get the absolute Duration between two Moment objects.
            * @param moment - (Toybox.Time.Moment)
            * @returns 
            */
            public function compare(moment) { }


            /**
            * Determine if a Moment is greater than another Moment.
            * @param moment - (Toybox.Time.Moment)
            * @returns 
            */
            public function greaterThan(moment) { }


            /**
            * Constructor
            * @param seconds - (Toybox.Lang.Number)
            * @returns 
            */
            public function initialize(seconds) { }


            /**
            * Determine if a Moment is less than another Moment.
            * @param moment - (Toybox.Time.Moment)
            * @returns 
            */
            public function lessThan(moment) { }


            /**
            * Subtract a Duration or Moment from a Moment. Note: Subtracting a Duration from a Moment was not supported until ConnectIQ 3.0.0. If backward compatibility is a concern, it may be best to add a negative Duration instead.
            * @param subtrahend - (Toybox.Time.Moment, Toybox.Time.Duration)
            * @returns 
            */
            public function subtract(subtrahend) { }


            /**
            * Get the UTC value of a Moment.
            * @returns  Toybox.Lang.Number
            */
            public function value() { }


        }


        public class RealTimeClockNotValidException {

            /**
            * 
            * @param msg
            * @returns  
            */
            public function initialize(msg) { }


        }


    }

    module Timer {

        
        public class Timer {

            /**
            * Start the Timer.
            * @param callback - (Toybox.Lang.Method)
            * @param time - (Toybox.Lang.Number)
            * @param repeat - (Toybox.Lang.Boolean)
            * @returns  
            */
            public function start(callback,time,repeat) { }


        }


    }

    module UserProfile {

            /**
            * Return the sport for which the current activity retrieves heart ratezone thresholds.If the active sport does not have sport specific zones, it will returnHR_ZONE_SPORT_GENERIC.Example:using Toybox.UserProfile;var profile = UserProfile.getCurrentSport();
            * @returns  Toybox.Lang.Number
            */
            public function getCurrentSport() { }


            /**
            * Retrieve an Array of the current heart rate zone threshold values in beats per minute (bpm) The returned Array contains zone values as follows: min zone 1 - The minimum heart rate threshold for zone 1 max zone 1 - The maximum heart rate threshold for zone 1 max zone 2 - The maximum heart rate threshold for zone 2 max zone 3 - The maximum heart rate threshold for zone 3 max zone 4 - The maximum heart rate threshold for zone 4 max zone 5 - The maximum heart rate threshold for zone 5
            * @param sport - (Toybox.Lang.Number)
            * @returns 
            */
            public function getHeartRateZones(sport) { }


            /**
            * Retrieve the current UserProfile.Profileobject.Example:using Toybox.UserProfile;var profile = UserProfile.getProfile();
            * @returns  Toybox.UserProfile.Profile
            */
            public function getProfile() { }


        
        public class ProfileInfo {

            /**
            * The profile name  
            * @type Toybox.Lang.String
            */
            public var name;


            /**
            * An Activity.SPORT_* enum value  
            * @type Toybox.Lang.Number
            */
            public var sport;


            /**
            * An Activity.SUB_SPORT_* enum value. Can be null.  
            * @type Toybox.Lang.Number
            */
            public var subSport;


            /**
            * An unique identifer of the profile  
            * @type Toybox.Lang.ByteArray
            */
            public var uniqueIdentifier;


        }


    }

    module WatchUi {

            /**
            * Animate an Object. Animate works by changing an object property over time, such as the x-position of a Drawable. The animation starts after the call and runs the length of the specified period. During this time, the View object's onUpdate() method will be invoked at an increased rate to facilitate animation.
            * @param object - (Toybox.Lang.Object)
            * @param property - (Toybox.Lang.Symbol)
            * @param type - (Toybox.Lang.Number)
            * @param start - (Toybox.Lang.Number)
            * @param stop - (Toybox.Lang.Number)
            * @param period - (Toybox.Lang.Float)
            * @param callback - (Toybox.Lang.Method)
            * @returns  
            */
            public function animate(object,property,type,start,stop,period,callback) { }


            /**
            * Load a resource from the executable.
            * @param resource - (Toybox.Lang.Symbol)
            * @returns 
            */
            public function loadResource(resource) { }


            /**
            * Pop the current View from the View stack.
            * @param transition - (Toybox.Lang.Number)
            * @returns  
            */
            public function popView(transition) { }


            /**
            * Pop the current View from the View stack and push a new one. Note: Prior to ConnectIQ 3.1, this method only supported switching to user-defined View objects, and would only accept InputDelegate or BehaviorDelegate objects as delegates for the pushed View.
            * @param view - (Toybox.WatchUi.View)
            * @param delegate - (Toybox.WatchUi.BehaviorDelegate, Toybox.WatchUi.InputDelegate)
            * @param transition - (Toybox.Lang.Number)
            * @returns  
            */
            public function switchToView(view,delegate,transition) { }


        
        public class AnimationDelegate {

            /**
            * Handle an Animation event.
            * @param event - (Toybox.Lang.Number)
            * @param options - (Toybox.Lang.Dictionary)
            * @returns  
            */
            public function onAnimationEvent(event,options) { }


        }


        public class AnimationLayer {

            /**
            * Get the animation resource
            * @returns  Toybox.WatchUi.AnimationResource
            */
            public function getResource() { }


            /**
            * Constructor
            * @param rez - (Toybox.Lang.Number, Toybox.WatchUi.AnimationResource)
            * @param options - (Toybox.Lang.Dictionary)
            * @returns  
            */
            public function initialize(rez,options) { }


        }


        public class AnimationResource {

            /**
            * Get the color depth in terms of bit/pixel of the animation resource.
            * @returns  Toybox.Lang.Number
            */
            public function getColorDepth() { }


            /**
            * Get the target frame rate of an animation resource.
            * @returns  Toybox.Lang.Number
            */
            public function getFrameRate() { }


            /**
            * Get the height of an animation resource.
            * @returns  Toybox.Lang.Number
            */
            public function getHeight() { }


            /**
            * Get the number of frames of an animation resource.
            * @returns  Toybox.Lang.Number
            */
            public function getNumberOfFrames() { }


            /**
            * Get the width of an animation resource.
            * @returns  Toybox.Lang.Number
            */
            public function getWidth() { }


            /**
            * Get info about an animation resource as a String.The info String is formatted as "Animation X x Y" where "X" is the widthof the animation and "Y" is the height.
            * @returns  Toybox.Lang.String
            */
            public function toString() { }


        }


        public class BehaviorDelegate {

            /**
            * Represents the Back behavior.This is typically triggered by the back button(KEY_ESC).
            * @returns  Toybox.Lang.Boolean
            */
            public function onBack() { }


            /**
            * Represents the Menu behavior.This is typically triggered by the menu button(KEY_MENU).
            * @returns  Toybox.Lang.Boolean
            */
            public function onMenu() { }


            /**
            * Represents the Next behavior.
            * @returns  Toybox.Lang.Boolean
            */
            public function onNextMode() { }


            /**
            * Represents the Next Page behavior.This is typically triggered by the down button(KEY_DOWN) or by aSWIPE_UPSwipeEvent on a touch screen.
            * @returns  Toybox.Lang.Boolean
            */
            public function onNextPage() { }


            /**
            * Represents the Previous Mode behavior.
            * @returns  Toybox.Lang.Boolean
            */
            public function onPreviousMode() { }


            /**
            * Represents the Previous Page behavior.This is typically triggered by the up button(KEY_UP) or by aSWIPE_DOWNSwipeEvent on a touch screen.
            * @returns  Toybox.Lang.Boolean
            */
            public function onPreviousPage() { }


            /**
            * Represents the Selection behavior.This is typically triggered by the Start/Enter button(KEY_ENTER) or by aCLICK_TYPE_TAPClickEvent on a touch screen.
            * @returns  Toybox.Lang.Boolean
            */
            public function onSelect() { }


        }


        public class BufferedBitmap {

            /**
            * Get the Dc to draw on the buffered bitmap.
            * @returns  Toybox.Graphics.Dc
            */
            public function getDc() { }


            /**
            * null if this surface uses the system palette
            * @returns  Toybox.Lang.Array
            */
            public function getPalette() { }


            /**
            * Constructor
            * @param options - (Toybox.Lang.Dictionary)
            * @returns  
            */
            public function initialize(options) { }


        }


        public class InvalidBitmapResourceException {

            /**
            * Constructor
            * @param msg - (Toybox.Lang.String)
            * @returns  
            */
            public function initialize(msg) { }


        }


        public class CustomButton {

            /**
            * Called by the system to draw the button in the Media Player
            * @param image - (Toybox.Lang.Number)
            * @param highlighted - (Toybox.Lang.Boolean)
            * @returns 
            */
            public function getImage(image,highlighted) { }


            /**
            * Called by the system to determine if the current state of the button
            * @returns  Toybox.Lang.Number
            */
            public function getState() { }


            /**
            * Called by the system to draw the name of the button
            * @param state - (Toybox.Lang.Number)
            * @returns 
            */
            public function getText(state) { }


        }


        public class CheckboxMenu {

            /**
            * Add a CheckboxMenuItem to a CheckboxMenu.
            * @param item - (Toybox.WatchUi.CheckboxMenuItem)
            * @returns  
            */
            public function addItem(item) { }


        }


        public class CheckboxMenuItem {

            /**
            * Constructor
            * @param label - (Toybox.Lang.String)
            * @param subLabel - (Toybox.Lang.String)
            * @param identifier - (Toybox.Lang.Object)
            * @param checked - (Toybox.Lang.Boolean)
            * @param options - (Toybox.Lang.Dictionary)
            * @returns  
            */
            public function initialize(label,subLabel,identifier,checked,options) { }


            /**
            * Get a CheckboxMenuItem state.
            * @returns  Toybox.Lang.Boolean
            */
            public function isChecked() { }


            /**
            * Set a CheckboxMenuItem state.
            * @param checked - (Toybox.Lang.Boolean)
            * @returns  
            */
            public function setChecked(checked) { }


        }


        public class ClickEvent {

            /**
            * Get the coordinates of a click event.
            * @returns  Toybox.Lang.Array
            */
            public function getCoordinates() { }


            /**
            * Get the type of click event.
            * @returns  Toybox.Lang.Number
            */
            public function getType() { }


        }


        public class Confirmation {

            /**
            * Constructor
            * @param message - (Toybox.Lang.String)
            * @returns  
            */
            public function initialize(message) { }


        }


        public class ConfirmationDelegate {

            /**
            * A confirmation selection was made. This method is called when a Confirmation response is selected, and receives the response as an argument. The response is either a CONFIRM_NO or CONFIRM_YES value.
            * @param response - (Toybox.Lang.Number)
            * @returns  
            */
            public function onResponse(response) { }


        }


        public class CustomMenu {

            /**
            * Add a CustomMenuItem to a CustomMenu.
            * @param item - (Toybox.WatchUi.CustomMenuItem)
            * @returns  
            */
            public function addItem(item) { }


            /**
            * Draw the CustomMenu foreground. This is called after a menu's items and title have been rendered. It can be used to draw overlay content for the menu.
            * @param dc - (Toybox.Graphics.Dc)
            * @returns  
            */
            public function drawForeground(dc) { }


            /**
            * Draw the CustomMenu title. This is called to render the menu title region.
            * @param dc - (Toybox.Graphics.Dc)
            * @returns  
            */
            public function drawTitle(dc) { }


            /**
            * Constructor
            * @param itemHeight - (Toybox.Lang.Number)
            * @param backgroundColor - (Toybox.Lang.Number)
            * @param options - (Toybox.Lang.Dictionary)
            * @returns  
            */
            public function initialize(itemHeight,backgroundColor,options) { }


        }


        public class CustomMenuItem {

            /**
            * Draw method for a CustomMenuItem. This is called when a menu item is rendering.
            * @param dc - (Toybox.Graphics.Dc)
            * @returns  
            */
            public function draw(dc) { }


            /**
            * Constructor
            * @param identifier - (Toybox.Lang.Object)
            * @param options - (Toybox.Lang.Dictionary)
            * @returns  
            */
            public function initialize(identifier,options) { }


            /**
            * Get the CustomMenuItem selected state.
            * @returns  Toybox.Lang.Boolean
            */
            public function isSelected() { }


            /**
            * Set a CustomMenuItem Drawable.
            * @param drawable - (Toybox.WatchUi.Drawable)
            * @returns  
            */
            public function setDrawable(drawable) { }


        }


        public class DataField {

            /**
            * Retrieve Activity.Info in a DataField. This method is called once per second and automatically provides Activity.Info to the DataField object for display or additional computation. It is necessary to override compute() when implementing a DataField.
            * @param info - (Toybox.Activity.Info)
            * @returns  
            */
            public function compute(info) { }


            /**
            * Create a new custom FIT Field. To record custom activity data to a FIT file, a new Field must first be created to allow Data Fields access to FIT recording without allowing access to the session. Once created, a Field is updated in the FIT file by changing the value of the data within the Field.
            * @param name - (Toybox.Lang.String)
            * @param fieldId - (Toybox.Lang.Number)
            * @param type - (Toybox.Lang.Number)
            * @param options - (Toybox.Lang.Dictionary)
            * @returns 
            */
            public function createField(name,fieldId,type,options) { }


            /**
            * Get the current Data Field background color.Some devices provide a global Data Field background color setting.This method will return the current value of that setting as a valueof either Graphics.COLOR_WHITEor Graphics.COLOR_BLACK.
            * @returns  Toybox.Lang.Number
            */
            public function getBackgroundColor() { }


            /**
            * Get the screen regions that are obscured.Non-rectangular screens have certain portions of the screen obscured.For example, a round screen effectively cuts off the corners of asquare screen. This method returns a sum of the enumerated valuesdefined by the WatchUi.DataField.OBSCURE_* constants that match theobscured screen regions on the device. Use of this method is onlyvalid during the call to onUpdate().
            * @returns  Toybox.Lang.Number
            */
            public function getObscurityFlags() { }


            /**
            * Show an alert.
            * @param alertView - (Toybox.WatchUi.DataFieldAlert)
            * @returns  
            */
            public function showAlert(alertView) { }


        }


        public class Drawable {

            /**
            * The clip height of the Drawable object.  
            * @type Toybox.Lang.Number
            */
            public var height;


            /**
            * The ID used to identify the Drawable object.  
            * @type Toybox.Lang.String
            */
            public var identifier;


            /**
            * The absolute, on-screen x-coordinate of the Drawable object.  
            * @type Toybox.Lang.Number
            */
            public var locX;


            /**
            * The absolute, on-screen y-coordinate of the Drawable object.  
            * @type Toybox.Lang.Number
            */
            public var locY;


            /**
            * The clip width of the Drawable object.  
            * @type Toybox.Lang.Number
            */
            public var width;


            /**
            * Draw an object to the device context (Dc). This method assumes that the device context has already been configured to the proper settings.
            * @param dc - (Toybox.Graphics.Dc)
            * @returns  
            */
            public function draw(dc) { }


            /**
            * Constructor
            * @param settings - (Toybox.Lang.Dictionary)
            * @returns  
            */
            public function initialize(settings) { }


            /**
            * Set the on-screen location for a Drawable object.
            * @param x - (Toybox.Lang.Number)
            * @param y - (Toybox.Lang.Number)
            * @returns  
            */
            public function setLocation(x,y) { }


            /**
            * Set the size of a Drawable object.
            * @param w - (Toybox.Lang.Number)
            * @param h - th of the Drawable object;;h
            * @returns  
            */
            public function setSize(w,h) { }


        }


        public class FontResource {

        }


        public class GlanceView {

        }


        public class GlanceViewDelegate {

            /**
            * Invoked when certain glance event occurs, none for now
            * @returns  
            */
            public function onGlanceEvent() { }


        }


        public class IconMenuItem {

            /**
            * Get IconMenuItem icon.
            * @returns  Toybox.WatchUi.Drawable
            */
            public function getIcon() { }


            /**
            * Constructor
            * @param label - (Toybox.Lang.String)
            * @param subLabel - (Toybox.Lang.String)
            * @param identifier - (Toybox.Lang.Object)
            * @param icon - (Toybox.WatchUi.Drawable)
            * @param options - (Toybox.Lang.Dictionary)
            * @returns  
            */
            public function initialize(label,subLabel,identifier,icon,options) { }


            /**
            * Set the IconMenuItem icon.
            * @param icon - (Toybox.WatchUi.Drawable, Toybox.Lang.Symbol)
            * @returns  
            */
            public function setIcon(icon) { }


        }


        public class InputDelegate {

            /**
            * A touch screen hold event has occurred. This is sent when the touch screen is touched and not released.
            * @param clickEvent - (Toybox.WatchUi.ClickEvent)
            * @returns 
            */
            public function onHold(clickEvent) { }


            /**
            * A physical button has been pressed and released. To find out which key was pressed, use KeyEvent.getKey() to get the button's WatchUi.KEY_* enum value.
            * @param keyEvent - (Toybox.WatchUi.KeyEvent)
            * @returns 
            */
            public function onKey(keyEvent) { }


            /**
            * A physical button has been pressed down. To find out which key was pressed, use KeyEvent.getKey() to get the button's WatchUi.KEY_* enum value.
            * @param keyEvent - (Toybox.WatchUi.KeyEvent)
            * @returns 
            */
            public function onKeyPressed(keyEvent) { }


            /**
            * A physical button has been released. To find out which key was pressed, use KeyEvent.getKey() to get the button's WatchUi.KEY_* enum value.
            * @param keyEvent - (Toybox.WatchUi.KeyEvent)
            * @returns 
            */
            public function onKeyReleased(keyEvent) { }


            /**
            * A touch screen release event has occurred. This is only sent after an onHold() event, once the hold on the touch screen is released.
            * @param clickEvent - (Toybox.WatchUi.ClickEvent)
            * @returns 
            */
            public function onRelease(clickEvent) { }


            /**
            * The state of a Selectable has changed.
            * @param selectableEvent - (Toybox.WatchUi.SelectableEvent)
            * @returns 
            */
            public function onSelectable(selectableEvent) { }


            /**
            * A touch screen swipe event has occurred. This is sent when the touch screen is swiped.
            * @param swipeEvent - (Toybox.WatchUi.SwipeEvent)
            * @returns 
            */
            public function onSwipe(swipeEvent) { }


            /**
            * A screen tap event has occurred. This is sent when the touch screen is tapped (a quick touch and release).
            * @param clickEvent - (Toybox.WatchUi.ClickEvent)
            * @returns 
            */
            public function onTap(clickEvent) { }


        }


        public class InvalidMenuItemTypeException {

            /**
            * Constructor
            * @param msg - (Toybox.Lang.String)
            * @returns  
            */
            public function initialize(msg) { }


        }


        public class InvalidPointException {

            /**
            * Constructor
            * @param msg - (Toybox.Lang.String)
            * @returns  
            */
            public function initialize(msg) { }


        }


        public class InvalidSelectableStateException {

        }


        public class KeyEvent {

            /**
            * Get the key value of this event.
            * @returns  Toybox.Lang.Number
            */
            public function getKey() { }


            /**
            * Get the type of click event.
            * @returns  Toybox.Lang.Number
            */
            public function getType() { }


        }


        public class Layer {

            /**
            * Layer identifier, can be null
            * @returns  Toybox.Lang.Number, Toybox.Lang.Object
            */
            public function getId() { }


            /**
            * Get X-axis absolute draw offset relative to the screen origin
            * @returns  Toybox.Lang.Number
            */
            public function getX() { }


            /**
            * Get Y-axis absolute draw offset relative to the screen origin
            * @returns  Toybox.Lang.Number
            */
            public function getY() { }


            /**
            * 
            * @returns  
            */
            public function initialize() { }


            /**
            * Set draw offset relative to the screen origin
            * @param x - (Toybox.Lang.Number)
            * @param y - (Toybox.Lang.Number)
            * @returns  
            */
            public function setLocation(x,y) { }


            /**
            * Set visibility of the layer, if the layer hasn't been added to a view, or the view isn't on top of view stack, the value will be saved.
            * @param visible - (Toybox.Lang.Boolean)
            * @returns  
            */
            public function setVisible(visible) { }


            /**
            * Set X-axis absolute draw offset relative to the screen origin
            * @param x - (Toybox.Lang.Number)
            * @returns  
            */
            public function setX(x) { }


            /**
            * Set Y-axis absolute draw offset relative to the screen origin
            * @param y - (Toybox.Lang.Number)
            * @returns  
            */
            public function setY(y) { }


        }


        public class MapMarker {

            /**
            * Get the location for the MapMarker.
            * @returns  Toybox.Position.Location
            */
            public function getLocation() { }


            /**
            * Constructor
            * @param location - (Toybox.Position.Location)
            * @returns  
            */
            public function initialize(location) { }


        }


        public class MapPolyline {

            /**
            * Add a Location or Locations to the MapPolyline object location Array.
            * @param location - (Toybox.Position.Location, Toybox.Lang.Array)
            * @returns  
            */
            public function addLocation(location) { }


            /**
            * Get the Location object at a provided index in this MapPolyline object.
            * @param index - (Toybox.Lang.Number)
            * @returns 
            */
            public function getLocation(index) { }


            /**
            * Get the number of Location objects inthis MapPolyline object.
            * @returns  Toybox.Lang.Number
            */
            public function numLocations() { }


            /**
            * Set the color of the MapPolyline to draw on the map.
            * @param color - (Toybox.Lang.Number)
            * @returns  
            */
            public function setColor(color) { }


            /**
            * Set the width of the MapPolyline to draw on the map.
            * @param width - (Toybox.Lang.Number)
            * @returns  
            */
            public function setWidth(width) { }


        }


        public class MapTrackView {

        }


        public class MapView {

            /**
            * Get the current mode for the map in this MapView.
            * @returns  Toybox.Lang.Number
            */
            public function getMapMode() { }


            /**
            * Add a MapMarker object or an Array of MapMarker objects to be rendered on the map.
            * @param markers - (Toybox.WatchUi.MapMarker, Toybox.Lang.Array)
            * @returns  
            */
            public function setMapMarker(markers) { }


            /**
            * Select the area of the map to render on the screen with a bounding box. A redraw of the current underlying map data will occur, so calling this function inside of onUpdate() is discouraged as it could lead to map flicker.
            * @param topLeft - (Toybox.Position.Location)
            * @param bottomRight - (Toybox.Position.Location)
            * @returns  
            */
            public function setMapVisibleArea(topLeft,bottomRight) { }


        }


        public class CheckboxMenu {

            /**
            * Add a CheckboxMenuItem to a CheckboxMenu.
            * @param item - (Toybox.WatchUi.CheckboxMenuItem)
            * @returns  
            */
            public function addItem(item) { }


        }


        public class Menu2 {

            /**
            * Add a MenuItem to a Menu2.
            * @param item - (Toybox.WatchUi.MenuItem)
            * @returns  
            */
            public function addItem(item) { }


            /**
            * Find a MenuItem by ID in a Menu2.
            * @param identifier - (Toybox.Lang.Object)
            * @returns 
            */
            public function findItemById(identifier) { }


            /**
            * Get a MenuItem from a Menu2.
            * @param index - (Toybox.Lang.Number)
            * @returns 
            */
            public function getItem(index) { }


            /**
            * Constructor
            * @param options - (Toybox.Lang.Dictionary)
            * @returns  
            */
            public function initialize(options) { }


            /**
            * Set the focus of a MenuItem in a Menu2.
            * @param focus - (Toybox.Lang.Number)
            * @returns  
            */
            public function setFocus(focus) { }


        }


        public class Menu2InputDelegate {

            /**
            * A Menu2 MenuItem was selected.
            * @param item - (Toybox.WatchUi.MenuItem)
            * @returns  
            */
            public function onSelect(item) { }


            /**
            * A Menu2 is preparing to wrap. This method is triggered on button-based products when the user attempts to navigate off the end of a menu. If this method returns false the list will not wrap to the opposite end. If this method is not overridden, it will return true and allow the menu to wrap.
            * @param key - (Toybox.Lang.Number)
            * @returns  
            */
            public function onWrap(key) { }


        }


        public class MenuInputDelegate {

            /**
            * A Menu item was chosen. This method is called when a Menu item has been selected, and receives the Menu item as an argument.
            * @param item - (Toybox.Lang.Symbol)
            * @returns  
            */
            public function onMenuItem(item) { }


        }


        public class CheckboxMenuItem {

            /**
            * Constructor
            * @param label - (Toybox.Lang.String)
            * @param subLabel - (Toybox.Lang.String)
            * @param identifier - (Toybox.Lang.Object)
            * @param checked - (Toybox.Lang.Boolean)
            * @param options - (Toybox.Lang.Dictionary)
            * @returns  
            */
            public function initialize(label,subLabel,identifier,checked,options) { }


            /**
            * Get a CheckboxMenuItem state.
            * @returns  Toybox.Lang.Boolean
            */
            public function isChecked() { }


            /**
            * Set a CheckboxMenuItem state.
            * @param checked - (Toybox.Lang.Boolean)
            * @returns  
            */
            public function setChecked(checked) { }


        }


        public class NumberPicker {

            /**
            * Constructor
            * @param mode - (Lang Number)
            * @param initialValue - (Toybox.Lang.Number, Toybox.Lang.Float, Toybox.Time.Duration)
            * @returns  
            */
            public function initialize(mode,initialValue) { }


        }


        public class NumberPickerDelegate {

            /**
            * A number was entered in a NumberPicker. This method is called when a number has been specified by a NumberPicker, and receives the numeric value as an argument.
            * @param value - (Toybox.Lang.Number, Toybox.Lang.Float, Toybox.Time.Duration)
            * @returns  
            */
            public function onNumberPicked(value) { }


        }


        public class NumberPicker {

            /**
            * Constructor
            * @param mode - (Lang Number)
            * @param initialValue - (Toybox.Lang.Number, Toybox.Lang.Float, Toybox.Time.Duration)
            * @returns  
            */
            public function initialize(mode,initialValue) { }


        }


        public class NumberPickerDelegate {

            /**
            * A number was entered in a NumberPicker. This method is called when a number has been specified by a NumberPicker, and receives the numeric value as an argument.
            * @param value - (Toybox.Lang.Number, Toybox.Lang.Float, Toybox.Time.Duration)
            * @returns  
            */
            public function onNumberPicked(value) { }


        }


        public class PickerFactory {

            /**
            * Generate a Drawable instance for an item.
            * @param item - (Toybox.Lang.Number)
            * @param isSelected - (Toybox.Lang.Boolean)
            * @returns 
            */
            public function getDrawable(item,isSelected) { }


            /**
            * Get the number of items in the PickerFactory.
            * @returns  Toybox.Lang.Number
            */
            public function getSize() { }


            /**
            * Return value for an item.
            * @param item - (Toybox.Lang.Number)
            * @returns 
            */
            public function getValue(item) { }


        }


        public class ProgressBar {

            /**
            * Constructor
            * @param displayString - (Toybox.Lang.String)
            * @param startValue - (Toybox.Lang.Float)
            * @returns  
            */
            public function initialize(displayString,startValue) { }


            /**
            * Set the string to display on the ProgressBar.
            * @param displayString - (Toybox.Lang.String)
            * @returns  
            */
            public function setDisplayString(displayString) { }


            /**
            * Set the value of the ProgressBar.
            * @param progressValue - (Toybox.Lang.Float)
            * @returns  
            */
            public function setProgress(progressValue) { }


        }


        public class InvalidSelectableStateException {

        }


        public class SelectableEvent {

            /**
            * Get the instance of the manipulated Selectable.
            * @returns  Toybox.Lang.Object
            */
            public function getInstance() { }


            /**
            * Get the previous state of the Selectable that generated the event.
            * @returns  Toybox.Lang.Symbol
            */
            public function getPreviousState() { }


        }


        public class SimpleDataField {

            /**
            * Retrieve Activity.Info in a SimpleDataField. This method is called once per second and automatically provides Activity.Info to the SimpleDataField object for display or additional computation. It is necessary to override compute() when implementing a SimpleDataField. The value to be displayed in the field must be returned by this method.
            * @param info - (Toybox.Activity.Info)
            * @returns  
            */
            public function compute(info) { }


        }


        public class SwipeEvent {

            /**
            * Get the direction of the swipe.
            * @returns  Toybox.Lang.Number
            */
            public function getDirection() { }


        }


        public class Text {

            /**
            * Draw Text to the device context (Dc).
            * @param dc - (Toybox.Graphics.Dc)
            * @returns  
            */
            public function draw(dc) { }


            /**
            * Constructor
            * @param settings - (Toybox.Lang.Dictionary)
            * @returns  
            */
            public function initialize(settings) { }


            /**
            * Set the background color of a Text object.
            * @param color - (Toybox.Lang.Number)
            * @returns  
            */
            public function setBackgroundColor(color) { }


            /**
            * Set the color of a Text object.
            * @param color - (Toybox.Lang.Number)
            * @returns  
            */
            public function setColor(color) { }


            /**
            * Set the font face of a Text object.
            * @param font - (Toybox.Lang.Number)
            * @returns  
            */
            public function setFont(font) { }


            /**
            * Set the justification of a Text object.
            * @param justification - (Toybox.Lang.Number)
            * @returns  
            */
            public function setJustification(justification) { }


            /**
            * Set the text string of a Text object.
            * @param text - (Toybox.Lang.String, Toybox.Lang.Symbol)
            * @returns  
            */
            public function setText(text) { }


        }


        public class TextArea {

            /**
            * Draw Text to the device context (Dc).
            * @param dc - (Toybox.Graphics.Dc)
            * @returns  
            */
            public function draw(dc) { }


            /**
            * Constructor
            * @param settings - (Toybox.Lang.Dictionary)
            * @returns  
            */
            public function initialize(settings) { }


            /**
            * Set the background color of a Text object.
            * @param color - (Toybox.Lang.Number)
            * @returns  
            */
            public function setBackgroundColor(color) { }


        }


        public class TextPicker {

            /**
            * Constructor
            * @param initialText - (Toybox.Lang.String)
            * @returns  
            */
            public function initialize(initialText) { }


        }


        public class TextPickerDelegate {

            /**
            * A text string was entered into a TextPicker. This method is called when text has been specified by a TextPicker, and receives the text String as an argument.
            * @param text - (Toybox.Lang.String)
            * @param changed - (Toybox.Lang.Boolean)
            * @returns  
            */
            public function onTextEntered(text,changed) { }


        }


        public class ToggleMenuItem {

            /**
            * Get a ToggleMenuItem label substring.
            * @returns  Toybox.Lang.String, Toybox.Lang.Dictionary
            */
            public function getSubLabel() { }


            /**
            * Constructor
            * @param label - (Toybox.Lang.String)
            * @param subLabel - (Toybox.Lang.String, Toybox.Lang.Dictionary)
            * @param identifier - (Toybox.Lang.Object)
            * @param enabled - (Toybox.Lang.Boolean)
            * @param options - (Toybox.Lang.Dictionary)
            * @returns  
            */
            public function initialize(label,subLabel,identifier,enabled,options) { }


            /**
            * Get a ToggleMenuItem state.
            * @returns  Toybox.Lang.Boolean
            */
            public function isEnabled() { }


            /**
            * Set a ToggleMenuItem state.
            * @param enabled - (Toybox.Lang.Boolean)
            * @returns  
            */
            public function setEnabled(enabled) { }


        }


        public class GlanceView {

        }


        public class WatchFace {

            /**
            * Update a portion of the screen. Partial updates can be used to update a small part of the screen to allow for Always On Watch Faces. This method is called each second as long as the device power budget is not exceeded. It is important to update as small of a portion of the display as possible in this method to avoid exceeding the allowed power budget. To do this, the application must set the clipping region for the Graphics.Dc object using the setClip() method. Calls to System.println() and System.print() will not execute on devices when this function is being invoked, but can be used in the device simulator. If the call to this method exceeds the power budget of the device, the partial update will not draw and a call to onPowerBudgetExceeded() is made to report the limits that were exceeded. Note: See the Analog sample distributed with the SDK for an example of onPartialUpdate() using clipping regions
            * @param dc - (Toybox.Graphics.Dc)
            * @returns  
            */
            public function onPartialUpdate(dc) { }


        }


        public class WatchFaceDelegate {

            /**
            * Handle a partial update exceeding the power budget. If the onPartialUpdate() callback of the associated WatchFace exceeds the power budget of the device, this method will be called with information about the limits that were exceeded.
            * @param powerInfo - ;;powerInfo
            * @returns  
            */
            public function onPowerBudgetExceeded(powerInfo) { }


        }


        public class WatchFacePowerInfo {

            /**
            * The average partial update execution time onPartialUpdate() took to complete.  
            * @type Toybox.Lang.Float
            */
            public var executionTimeAverage;


            /**
            * The maximum allowable partial update execution time onPartialUpdate() is allowed to take.  
            * @type Toybox.Lang.Float
            */
            public var executionTimeLimit;


        }


    }

    module Weather {
    
            /**
            * Get the most recently cached weather conditions
            * @returns  Toybox.Weather.CurrentConditions
            */
            public function getCurrentConditions() { }


            /**
            * Get the daily forecast
            * @returns  Toybox.Weather.DailyForecast
            */
            public function getDailyForecast() { }


            /**
            * Get the hourly forecast
            * @returns  Toybox.Weather.HourlyForecast
            */
            public function getHourlyForecast() { }
    

        public class CurrentConditions {

        /**
        * The current weather condition  
        * @type Toybox.Lang.Number
        */
        public var condition;


        /**
        * The wind chill or heat index, in Celsius  
        * @type Toybox.Lang.Number
        */
        public var feelsLikeTemperature;


        /**
        * The forecasted high temperature for the day in Celsius  
        * @type Toybox.Lang.Number
        */
        public var highTemperature;


        /**
        * The forecasted low temperature for the day in Celsius  
        * @type Toybox.Lang.Number
        */
        public var lowTemperature;


        /**
        * Textual description of the observation location. If the app does not have the position permission then this will be null.  
        * @type Toybox.Lang.String
        */
        public var observationLocationName;


        /**
        * Location where the conditions were observed. If the app does not have the position permission then this will be null.  
        * @type Toybox.Position.Location
        */
        public var observationLocationPosition;


        /**
        * UTC time the conditions were observed  
        * @type Toybox.Time.Moment
        */
        public var observationTime;


        /**
        * The chance of precipitation [0-100%]  
        * @type Toybox.Lang.Number
        */
        public var precipitationChance;


        /**
        * The relative humidity [0-100%]  
        * @type Toybox.Lang.Number
        */
        public var relativeHumidity;


        /**
        * The current temperature in Celsius  
        * @type Toybox.Lang.Number
        */
        public var temperature;


        /**
        * The wind bearing in degrees. North = 0, East = 90, South = 180, West = 270  
        * @type Toybox.Lang.Number
        */
        public var windBearing;


        /**
        * The current wind speed in meters per second  
        * @type Toybox.Lang.Float
        */
        public var windSpeed;


        }


        public class DailyForecast {

            /**
            * The weather condition  
            * @type Toybox.Lang.Number
            */
            public var condition;


            /**
            * The time the forecast is valid in UTC time  
            * @type Toybox.Time.Moment
            */
            public var forecastTime;


            /**
            * The low temperature in Celsius  
            * @type Toybox.Lang.Number
            */
            public var highTemperature;


            /**
            * The low temperature in Celsius  
            * @type Toybox.Lang.Number
            */
            public var lowTemperature;


            /**
            * The chance of precipitation [0-100%]  
            * @type Toybox.Lang.Number
            */
            public var precipitationChance;


        }


        public class HourlyForecast {

            /**
            * The weather condition  
            * @type Toybox.Lang.Number
            */
            public var condition;


            /**
            * The time the forecast is valid in UTC time  
            * @type Toybox.Time.Moment
            */
            public var forecastTime;


            /**
            * The chance of precipitation [0-100%]  
            * @type Toybox.Lang.Number
            */
            public var precipitationChance;


            /**
            * The relative humidity [0-100%]  
            * @type Toybox.Lang.Number
            */
            public var relativeHumidity;


            /**
            * The current temperature in Celsius  
            * @type Toybox.Lang.Number
            */
            public var temperature;


            /**
            * The wind bearing in degrees. North = 0, East = 90, South = 180, West = 270  
            * @type Toybox.Lang.Number
            */
            public var windBearing;


            /**
            * The current wind speed in meters per second  
            * @type Toybox.Lang.Float
            */
            public var windSpeed;


        }


    }

}

