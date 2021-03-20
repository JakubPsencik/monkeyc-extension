using Toybox.ActivityMonitor.ActiveMinutes;

class A
{

    function f() {       

        var mMinutes = new ActiveMinutes();
       
        var tmp = 2;

        var mTest1 = tmp.format();
        mTest1 = tmp.format();
        var mTest2;
        mTest2 = mTest1.toFloat();
        
        var mTest3 = tmp.toNumber();
        mTest3.toString();
        var mTest3 = (mTest3.toNumber()).toDouble();

    }


    function() {
    
    
    }
}


