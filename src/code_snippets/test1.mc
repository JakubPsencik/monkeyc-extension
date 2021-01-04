class SampleName extends Toybox.Application.AppBase {

    public var publicVar;
    private var _privateVar;

    function initialize() {
    AppBase.initialize();
    var testClass = new helloworldView();
    testClass
    }
    // onStart() is called on application start up
    function onStart(state) {
    }
    
    // onStop() is called when your application is exiting
    function onStop(state) {
                        
    }

    // Return the initial view of your application here
    function getInitialView(){
    return [new SampleNameView(), new SampleNameDelegate()];
    }
}