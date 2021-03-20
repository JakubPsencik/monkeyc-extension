class Circle
{
protected var mRadius;
public function initialize( aRadius ) {
mRadius = aRadius;
}
}

function createCircle() {
var c = new Circle( 1.5 );

} 

class A
{
public var x;
public var y;
public function initialize() {
me.x = "Hello"; // Set current instance x variable
self.y = "Hello"; // Set current instance y variable
}
}

using Toybox.System as Sys;

class A
{
function print() {
Sys.print( "Hello!" );
}
}

class B extends A
{

}

function usageSample() {
var inst = new B();
inst.print(); // Prints "Hello!"
}

using Toybox.System;

class A
{
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
System.println( "Hola!" );
}
}

function usageSample() {
var inst = new B();
inst.print(); // Prints "Hello! Hola!"
}

class Foo
{
protected var mVar;
}

function usageSample() {
var v = new Foo();
Toybox.System.println( v.mVar ); // Runtime Error
}

function aPolymorphicFunction(a) {
switch(a) {
case instanceof Lang.String:
return doTheStringVersion(a);
case instanceof Lang.Number:
case instanceof Lang.Long:
return doTheNumericVersion(a);
default:
throw new Lang.UnexpectedTypeException();
}

}

x = aPolymorphicFunction({
:param1=>"Foo",
:param2=>"Bar"
})

//! A weak reference is a loosely bound reference to
//! another object. If all strong references have been
//! freed, the get() method will return null.
//! This allows the developer to avoid circular references.
//! @since 1.2.0
class WeakReference
{
//! Return if the reference is still alive.
//! @return true if object is still alive, false otherwise.
//! When you are dead I will be STILL ALIVE
//! I feel fantastic and I am STILL ALIVE
function stillAlive() { }

//! Get the object referenced.
//! @return Object referenced, or null if object is no
//! longer alive.
function get() { }

// This is a triumph...
if( weakRef.stillAlive() ) {
var strongRef = weakRef.get();
strongRef.doTheThing();
}

}

module MyModule
{
class Foo
{
var mValue;
}
var moduleVariable;
}

function usageSample() {
MyModule.moduleVariable = new MyModule.Foo();
}

using Toybox.System;

function foo() {
System.print( "Hello" );
}

using Toybox.System as Sys;

function foo() {
Sys.print( "Hello" );
}

var a = :symbol_1;
var b = :symbol_1;
var c = :symbol_2;
Sys.println( a == b ); // Prints true
Sys.println( a == c ); // Prints false


var person = { :firstName=>"Bob", :lastName=>"Jones" };


const PI = 3.14;
const EAT_BANANAS = true;
const BANANA_YELLOW = "#FFE135";


enum {
Monday, // Monday = 0
Tuesday, // Tuesday = 1
Wednesday // Wednesday = 2
// ...and so on
}

enum {
x = 1337, // x = 1337
y, // y = 1338
z, // z = 1339
a = 0, // a = 0
b, // b = 1
c // c = 2
}

function foo( a ) {
//Assume foo does something really impressive
}

function bar() {
foo( "hello" );
}

var x = mMemberVariable;
var y = self.mMemberVariable;


class A
{
function overridableMethod() {
System.println("I am A!");
}
}

class B extends A
{
function overridableMethod() {
System.println("B wins!");
A.overridableMethod();
}
}

myInstance.methodToCall( parameter );

if ( a == true ) {
// Do something
} else if ( b == true ) {
// Do something else
} else {
// If all else fails
}

// Monkey C also supports the ternary operator
var result = a ? 1 : 2;


switch ( obj ) {
case true:
// Do something
break;
case 1:
// Do something
break;
case "B": {
// Do something
break;
}
// Executed based on the type
// instead of the value
case instanceof MyClass:
// Do something
break;
default:
// If all else fails
break;
}

// Monkey C also supports fall-through into the next case statement
switch ( obj ) {
case false:
// Do something
// Fall through and execute the code in the next case block
case 2: {
// Do something
break;
}
case instanceof MyOtherClass:
// Do something
break;
case "B":
// Do something
// Fall through and execute the code in the default block
default:
// If all else fails
break;
}


switch ( obj ) {
case true:
var aaa = 1; // Scoped at the switch block level
...
case 1:
var zzz = aaa; // Results in a compiler error because aaa was not initialized in this case block
...
break;
case "B": {
var aaa = true; // Scoped at the code block level within the curly braces, no scoping conflict with variable aaa at the swtich block level
...
break;
}
case instanceof MyClass:
var aaa = "Hello!" // Results in a compiler error because aaa has already been defined in the switch block
...
default:
aaa = 0; // aaa was defined in the first case and initialized at the beginning of the default case, no errors!
var good = aaa;
...
break;
}


// do/while loop
do {
// Code to do in a loop
}
while( expression );

// while loop
while( expression ) {
// Code to do in a loop
}

// Monkey C does allow for variable declaration in for loops
for( var i = 0; i < array.size(); i++ ) {
// Code to do in a loop
}


// This for loop should only print 5, 6, and 7.
for (var i = 0; i < 10; i += 1) {
if (i < 5) {
continue;
}
System.println(i);
if (7 == i) {
break;
}
}

var value = 5;
// Check to see if value is a number
if ( value instanceof Toybox.Lang.Number )
{
System.println( "Value is a number" );
}

var impl;
// Check to see if the Magnetometer module exists in Toybox
if ( Toybox has :Magnetometer )
{
impl = new ImplementationWithMagnetometer();
}
else
{
impl = new ImplementationWithoutMagnetometer();
}

class Foo
{
function operation(a, b) {
// The code here is really amazing. Like mind blowing amazing. You wish this method was in your program.
}
}
function usageSample() {
// Create a new instance of Foo
var v = new Foo();
// Get the callback for the operation method from the instance of Foo.
var m = v.method(:operation);
// Invoke v's operation method.
m.invoke(1,2);
}

using Toybox.Lang as Lang;

module Foo
{
function operation() {
// Do something
}
}
function moduleSample() {
var v = new Lang.Method(Foo, :operation);
v.invoke();
}


var array = new [5];

var array_ = [1, 2, 3, 4, 5];

var m_array = [ [1,2], [3,4] ];

// Shout out to all the Java programmers in the house
var array = new [5];

// Initialize the sub-arrays
for( var i = 0; i < 5; i += 1 ) {
array[i] = new [5];
}

var dict = { "a" => 1, "b" => 2 }; // Creates a dictionary
System.println( dict["a"] ); // Prints "1"
System.println( dict["b"] ); // Prints "2"
System.println( dict["c"] ); // Prints "null"

var x = {}; // Empty dictionary

class Person
{
// Return a number as the hash code. Remember that the hash code must be
// the same for two objects that are equal.
// @return Hash code value
function hashCode() {
// Using the unique person id for the hash code
return mPersonId;
}
}

try {
// Code to execute
}
catch( ex instanceof AnExceptionClass ) {
// Code to handle the throw of AnExceptionClass
}
catch( ex ) {
// Code to catch all execeptions
}
finally {
// Code to execute when
}

class AppSpecificException extends Lang.Exception {
//! Constructor
//! @param msg Message explaining cause
function initialize(msg) {
Exception.initialize();
self.mMessage = msg;
}
}

(:debug) class TestMethods
{
(:test) static function testThisClass( x )
}

class SampleName extends Toybox.Application.AppBase
{
public var publicVar;
private var _privateVar;

function initialize() {
AppBase.initialize();
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

using Toybox.Lang;
using Toybox.System;

var globalX as Lang.Number = 0;

function hasANumber() {
globalX = 2; // Allowed
globalX = "2"; // Not allowed
System.println("globalX = " + globalX);
}

using Toybox.Lang;
using Toybox.System;

var globalX as Lang.Number or Lang.String = 0;

function hasANumber() {
globalX = 2; // Allowed
globalX = "2"; // Allowed
System.println("globalX = " + globalX);
}

import Toybox.Lang;
import Toybox.System;

// Import lets you say goodbye to
// module prefixes
var globalX as Number or String = 0;

function hasANumber() {
globalX = 2; // Allowed
globalX = "2"; // Allowed
// Still require prefixes in code
System.println("globalX = " + globalX);
}

import Toybox.Lang;

typedef Numeric as Number or Float or Long or Double;

function add(a as Numeric, b as Numeric) as Numeric {
return a + b;
}

import Toybox.Lang;

function doNothing() as Void {
// Compiler error - this is failing to
// do nothing.
return true;
}

function doSomething() as String {
// Compiler error - cannot assign value
// from a function that returns nothing
var x = doNothing();
// Compiler error - doSomething should
// return a String
}

import Toybox.Lang;
import WoolMarket;

class Wool {
public var bagsFull;

public function initialize(bags as Number) {
bagsFull = bags;
}
}

class Sheep {
public var wool as Wool;

public function initialize() {
wool = new Wool(1);
}
}

class BlackSheep extends Sheep {
public function initialize() {
Sheep.initialize();
wool = new Wool(3);
}
}

function processSheep(baa as Sheep) {
if(baa.wool != null) {
WoolMarket.sellWool(baa.wool);
}
}

function example() {
// Allowed
processSheep(new Sheep());
processSheep(new BlackSheep());
// Not allowed
processSheep(new Wool());
}

import Toybox.Lang;

typedef Addable as Number or Float or Long or Double or String;
typedef Numeric as Number or Float or Long or Double;

function add(a as Addable, b as Addable) as Addable {
return a + b;
}

function subtract(a as Numeric, b as Numeric) as Numeric {
return a - b;
}

function doWork() {
// Allowed
var x as Addable = add("1", "2");
// Not allowed; Addable has String which is
// not within Numeric
var y as Numeric = subtract(x, 2);
}

import Toybox.Lang;

typedef LittleBoys as interface {
var frogs as Array<Frogs>;
var snails as Array<Snails>;
var puppyDogTails as Array<PuppyDogTails>;
}

// Implements LittleBoys interface
class MaleChild {
var frogs as Array<Frogs>;
var snails as Array<Snails>;
var puppyDogTails as Array<PuppyDogTails>;
}

// Processing
function example(you as interface {
var frogs as Array<Frogs>;
})

import Toybox.Lang;

typedef ContainerA as Array<Number>;
typedef ContainerB as Dictionary<String, Number>;

class ContainerClass {
// Array of 10 items that takes only numbers
var typedArray as Array<Number> = new Array<Number>[10];
// Initialized array
var initializedArray as Array<Number> = [1, 2, 3, 4, 5] as Array<Number>;
// Initialized dictionary
var initializedDictionary as Dictionary<String, String> = {"this"=>"that"} as Dictionary<String, String>;
}

import Toybox.Lang;

function doWork(options as {
:option1 as String,
:option2 as {
"name" as String,
"value" as Number
}
});

enum Dog {
SPOT = "Spot",
LUKE = "Luke",
POCO = "Poco",
COMMODORE = "Commodore",
BINGO = "B_I_N_G_O"
}

function getDogName(dog as Dog) as String {
// Return the dog name
return dog.toString();
}

import Toybox.Lang;

function doWork(
x as Method(a as Number) as String
) as String {
return x.invoke(2);
}

function doWork() as Number or Null
function doWork() as Number?

var a as A;
var b as B;

a = b; // Is this assigment allowed?

import Toybox.Lang;
import OldMacDonaldsFarm;

function handleDog(dog as Dog, here as Array, there as Array, everywhere as Array) {
here.add(dog.woofWoof());
there.add(dog.woofWoof());
everywhere.add(dog.woofWoof());
}

function handleCat(cat as Cat, here as Array, there as Array, everywhere as Array) {
here.add(cat.meowMeow());
there.add(cat.meowMeow());
everywhere.add(cat.meowMeow());
}

function eieio() {
var here = [], there = [], everywhere = [];
// Animal will be typed as a Dog based
// on the assignment. No need to declare
// it's type
var animal = new OldMacDonaldsFarm.Dog();
// Allowed, animal is currently assigned a Dog value
handleDog(animal, here, there, everywhere);
// Animal will now be typed as a Cat based on
// the assignment
animal = new OldMacDonaldsFarm.Cat();
// Allowed, animal is currently assigned a Cat value
handleCat(animal, here, there, everywhere);
}


function process(a as Boolean) as Boolean? {
var x = null;

if(a) {
x = true;
}
// At this point, x is now the poly type
// Boolean or Null
return x;
}

class A {
function foo() {};
function bar() {};
}

function process() {
var a = new A();
a.foo(); // Allowed
a.bar(); // Allowed
a.fonz(); // Not allowed
}


function example() {
var a = {} as Dictionary<String, String>;
a["key"] = "value" // <-- Assignments to a's value must obey type

a = null; // <-- a is Any and can be assigned to null
}

function isTrue() as Boolean {
return "true"; // Not allowed
}

import Toybox.Lang;

function foo(a) as Integer? {
// a is of type Any, so Monkey Types can't identify what doThis() is being called
var x = a.doThis();
// x is of type Any, so we can't know what the result type is
var y = x + 3;
// What is Y? What is Why? What is Love?
return y;
}

import Toybox.WatchUi;

function process(a as View) {
(a as MyView).specialMyViewMethod();
}

function example(x as Number or Float) as Boolean {
switch(x) {
case instanceof Number:
doNumberImpl(x);
break;
case instanceof Float:
doFloatImpl(x);
break;
}
}

typedef Nimble as interface {
function isNimble() as Boolean;
}

typedef Quick as interface {
function isQuick() as Boolean;
}

function handleCandleStick(jack as Nimble or Quick) {
if(jack instanceof Nimble and jack instanceof Quick) {
if(jack.isNimble() and jack.isQuick() and jack has :jumpOverCandleStick) {
jack.jumpOverCandleStick();
}
}
}

function handleCandleStick(jack as Nimble or Quick) {
if(jack has :isNimble and jack has :isQuick and jack has :jumpOverCandleStick) {
if(jack.isNimble() and jack.isQuick()) {
jack.jumpOverCandleStick();
}
}
}

public boolean foo(SomeInterfaceType x) {
if(x instanceof SomeConcreteType) {
// My life will just be easier if I make
// a new variable, even though it should
// be possible to assume that x is
// a SomeConcreteType
SomeConcreteType y = (SomeConcreteType)x;
// Do operations on y
}
}

import Toybox.Lang;

public function foo(x as Number?) as Boolean {
if(x != null) {
// Within this block assume x is Number and not null
} else {
// Within this block assume x is null
}
}


type Addable as Number or Float or Long or Double or String;

public function foo(x as Addable?) {
// In the first clause, x is modified to remove the null
// from the poly type. In the second clause, the new polytype
// is modified to be a String concrete type.
if(x != null &&
x instanceof String) {
// Within this block assume x is a string
}
}

public function foo(x as Addable?) {
if(x instanceof Number ||
x instanceof Float) {
// Within this block assume x is a Number or Float
}
}

var globalString as String;

function printGlobalString() {
System.println(globalString);
}



