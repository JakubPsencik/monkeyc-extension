using Toybox.Application as App;
using Toybox.WatchUi as Ui;

var gDeviceSettings;
var gSettingsChanged = true;

class SimpleAnalogApp extends App.AppBase 
{
    function initialize() {
        AppBase.initialize();
		$.gDeviceSettings = System.getdeviceSettings();
        var a = 1;
        var b =  2;
        var c = "whatever";          
        var array = [1, 2, 3, 4, 5];       
         
    }
}
class A
{
    private var x;
    public var y;
    public function initialize() {
        me.x = "Hello"; // Set current instance x variable
        self.y = "Hello"; // Set current instance y variable       
    }
}