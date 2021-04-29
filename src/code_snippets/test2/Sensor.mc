//!
//! Copyright 2015 by Garmin Ltd. or its subsidiaries.
//! Subject to Garmin SDK License Agreement and Wearables
//! Application Developer Agreement.
//!

using Toybox.Application;
using Toybox.WatchUi;
using Toybox.Graphics;
using Toybox.System;
using Toybox.Lang;
using Toybox.Lang.Object;
using Toybox.Time;
using Toybox.Time.Gregorian;
using Toybox.Sensor;

using Toybox.Position;
using Toybox.Timer;
using Toybox.Activity.Info;

class SensorTester extends WatchUi.View
{

    /**
     * @type 
     */
    public var publicVar;
    protected var protectedVar;


    /**
     * @type Toybox.Lang.String 
     */
    var string_HR;

    /**
     * @type Toybox.Graphics 
     */
    var HR_graph;

    //! Constructor
    function initialize()
    {
        View.initialize();
        Sensor.setEnabledSensors( [Sensor.SENSOR_HEARTRATE] );
        Sensor.enableSensorEvents( method(:onSnsr) );
        HR_graph = new LineGraph( 20, 10, Graphics.COLOR_RED );
        string_HR = "---bpm";

           
    }
    
    //! Handle the update event
    function onUpdate(dc)
    {
        dc.setColor(Graphics.COLOR_BLACK, Graphics.COLOR_BLACK);
        dc.clear();
        
        dc.setColor(Graphics.COLOR_WHITE, Graphics.COLOR_TRANSPARENT );

        dc.drawText(dc.getWidth() / 2, 90, Graphics.FONT_LARGE, string_HR, Graphics.TEXT_JUSTIFY_CENTER);

        HR_graph.draw(dc, [0, 0], [dc.getWidth(), dc.getHeight()]);
    }

    function onSnsr(sensor_info)
    {
        var HR = sensor_info.heartRate;
        var bucket;
        if( sensor_info.heartRate != null )
        {
            string_HR = HR.toString() + "bpm";
        
            //Add value to graph
            HR_graph.addItem(HR);            
        }
        else
        {
            string_HR = "---bpm";
        }
        
        WatchUi.requestUpdate();
    }
}

//! main is the primary start point for a Monkeybrains application
class SensorTest extends Application.AppBase
{
    function initialize() {
        AppBase.initialize();
    }
    
    function onStart(state)
    {
        return false;
    }

    function getInitialView()
    {
        return [new SensorTester()];
    }

    function onStop(state)
    {
        return false;
    }

    function f() {
    
    /**
     * @type      
     */
    var mVal;       

    Sensor.registerSensorDataListener











    
    
    
    
    
    
    
    
    }

}