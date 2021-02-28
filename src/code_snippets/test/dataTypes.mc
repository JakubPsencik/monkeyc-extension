class Foo
{
    public function operation(a, b) {
    // The code here is really amazing. Like mind blowing amazing. You wish this method was in your program.
    }
}

class X {

   function usageSample() {
        // Create a new instance of Foo
        var v = new Foo();
        // Get the callback for the operation method from the instance of Foo.
        var m = v.method(:operation);
        // Invoke v's operation method.
        m.invoke(1,2);
        var s = v.operation;
        
    }

}

