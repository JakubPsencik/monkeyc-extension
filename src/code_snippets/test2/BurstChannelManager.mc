//
// Copyright 2016 by Garmin Ltd. or its subsidiaries.
// Subject to Garmin SDK License Agreement and Wearables
// Application Developer Agreement.
//

using Toybox.Ant;
using Toybox.System;

const ANT_DATA_PACKET_SIZE = 8;

class BurstChannel extends Ant.GenericChannel {
    const DEVICE_NUMBER = 123;
    const DEVICE_TYPE = 1;
    const FREQUENCY = 66;
    const PERIOD_1_HZ = 32768;
    const TRANS_TYPE = 0;

    hidden var _transmissionCounter;

    //! Constructor.
    //! Initializes the channel object, sets the burst listener and opens the channel
    //! @param [Number] channelType See Ant.CHANNEL_TYPE_XXX
    //! @param [TestBurstListener] listener The BurstListener to assign
    function initialize(channelType, listener) {
        // Get the channel
        var chanAssign = new Ant.ChannelAssignment(
                channelType,
                Ant.NETWORK_PUBLIC );
        GenericChannel.initialize(method(:onMessage), chanAssign);

        // Set the configuration
        var deviceCfg = new Ant.DeviceConfig( {
            :deviceNumber => DEVICE_NUMBER,
            :deviceType => DEVICE_TYPE,
            :transmissionType => TRANS_TYPE,
            :messagePeriod => PERIOD_1_HZ,
            :radioFrequency => FREQUENCY } );
        GenericChannel.setDeviceConfig( deviceCfg );

        // Set the listener for burst messages
        GenericChannel.setBurstListener(listener);

        // Open the channel
        GenericChannel.open();

        // Reset the transmission counter
        _transmissionCounter = 0;
        }

    //! Ant.Message handler
    //! @param [Message] msg The Message received over the channel
    function onMessage(msg) {
        var payload = msg.getPayload();
        if(Ant.MSG_ID_CHANNEL_RESPONSE_EVENT == msg.messageId)
        {
            if(Ant.MSG_ID_RF_EVENT == payload[0])
            {
                var eventCode = payload[1];
                if(Ant.MSG_CODE_EVENT_TX == eventCode)
                {
                    //Create and populate the data payload
                    var data = new [ANT_DATA_PACKET_SIZE];
                    for(var i = 0; i < ANT_DATA_PACKET_SIZE; i++)
                    {
                        data[i] = _transmissionCounter;
                    }
                    _transmissionCounter++;

                    //Form the message
                    var message = new Ant.Message();
                    message.setPayload(data);
                    
                    // Set the broadcast buffer
                    GenericChannel.sendBroadcast(message);
                }
                else if(Ant.MSG_CODE_EVENT_CHANNEL_CLOSED == eventCode)
                {
                    // Reopen the channel if it closed due to search timeout
                    GenericChannel.open();
                }
            }
        }
    }

}