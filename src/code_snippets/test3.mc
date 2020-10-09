using Toybox.Application as App;
using Toybox.WatchUi as Ui;

var gDeviceSettings;
var gSettingsChanged = true;

class SimpleAnalogApp extends App.AppBase 
{

    function initialize() {
        AppBase.initialize();
		$.gDeviceSettings = System.getDeviceSettings();
    }

}