using Toybox.WatchUi;
using Toybox.System;

class A {

    private var A_privateVal;
    public var A_publicVal;
    
    // Update the view
    function A_onUpdate(dc) {
        
        // Get and show the current time
        var A_clockTime = System.getClockTime();
        var A_classB = new B();
        self.A_publicVal = 2;
        var add = self.A_publicVal + 3;
        
    }

}
