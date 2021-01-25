using Toybox.Activity.Info;

class A
{
    protected var protectedVal;
    function print() {
    System.print( "Hello!" );
    }
}

class B extends A 
{
    function print() {
        // Call the super class implementation
        A.print();
        // Amend the output
        System.println( "Greetings!" );
        var mActivity = Info.ambientPressure;
    }
}



