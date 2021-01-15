using Toybox;

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
    }

    var tbx = new Info();
    var speed = Info.averageSpeed;

}

function usageSample() {
    var inst = new B();
    inst.print(); // Prints "Hello! Greetings!"
}

if(true) {


}

