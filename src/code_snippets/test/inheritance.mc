using Toybox.ActivityMonitor.ActiveMinutes;
using Toybox.Activity.Info;
using Toybox.Ant.CryptoConfig;
using Toybox.ActivityRecording.Session;
using Toybox.Lang;

class B {

 public var mPublicB;

}

class A extends B
{


    /*Integers - 32-bit signed integers
    Floats - 32-bit floating point numbers
    Longs – 64-bit signed integers
    Doubles – 64-bit floating point numbers
    Booleans - true and false
    Chars - Unicode characters
    Strings - strings of characters
    Objects – Instantiated objects (defined with the class keyword)
    Arrays - Allocated with the syntax new [X] where ‘X’ is an expression computing the size of the array
    Dictionaries - Associative arrays, allocated with the syntax {}*/

    function test() {                       
        var mMinutes = new ActiveMinutes();
        var num = 2; //-->INT
        var n = null; //-->NULL // Null reference
        var x = 5; //-->INT // 32-bit signed integers
        var y = 6.0; //-->FLOAT // 32-bit floating point
        var l = 5l; //-->LONG // 64-bit signed integers
        var d = 4.0d; //-->DOUBLE // 64-bit floating point
        var bool = true; // Boolean (true or false)
        var c = 'x'; //DoubleStringCharacter// Unicode character
        var str = "Hello"; // String
        var arr = new [20 + 30]; // Array of size 50
        var dict = { x=>y }; // Dictionary: key is 5, value is 6.0
        var z = arr[2] + x; // Null pointer waiting to happen

        num.toDouble();
        x.abs();
        y.toDouble();
        l.
        d.
        bool.
        c.toString();
        str.toNumber();
        arr.size();
        n.
        dict.
    }
}


