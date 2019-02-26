// The Principles of Object Oriented Javascript

// Ch.1 Primitive and Reference Types..........................

/** What are Types? ***************************************/

// Primitive types: simple, irreducible values
// Reference types: references to location in memory

// Variables are scope-tracked with a variable object

// Primitive values are stored directly on the object
// ...reference values are stored as pointer to the variable

// Primitive Types ...........................................

// Number, String, Boolean, Null, Undefined


// literal strings
var name = 'Scooby';
var selection = 'a';

// literal numbers
var count = 25;
var cost = 1.51;

// boolean
var found = true;

// null
var object = null;

// undefined
var flag = undefined;
var ref; 

// Copying primitives:
//  Each var gets its own copy of the data

var color1 = 'red';
var color2 = color1;

console.log(color1); // 'red'
console.log(color2); // 'red'

color1 = 'blue';

console.log(color1); // 'blue'
console.log(color2); // 'red'

// Identifying Primitive Types ...................................

// Use typeof

console.log(typeof 'Scooby'); // string
console.log(typeof 10); // number
console.log(typeof 5.1); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // Object

// To determine a null value compare agains null
console.log(value === null); // true or false

// Primitive Methods ............................................

// Strings, Numbers, and Booleans have methods

var name = 'Scooby';
var lowerName = name.toLowerCase(); // convert to lowercase
var firstLetter = name.charAt(0); // get first char
var middleOfName = name.substring(2, 5) //get chars 2-4

var count = 10;
var fixedCount = count.toFixed(2); // convert count to 10.00
var hexCount = count.toString(16); // convert count to 'a'

var flag = true;
var stringFlag = flag.toString(); // convert true to 'true'


//.....

// Reference Types ...............................................

// Represent objects, and are closest thing to classes in js
// Reference values are instances

// An object is unordered list of properties, each with a name and
// ...a value

// A method is a function that is an object property

// Creating Objects .............................................

// Objects can be instantiated by using 'new' with a constructor

var object = new Object();

// The object var holds a pointer to the memory address of the obj

var object1 = new Object();
var object2 = object1;

// object1 and object2 point to the same object

//.....

// Dereferencing objects ........................................

var object1 = new Object();
// do something with object1
object1 = null; // dereference object by setting to null

//.....

// Adding or Removing Properties.................................

var object1 = new Object();
var object2 = object1;

object1.myCustomProperty = 'Awesome';
console.log(object2.myCustomProperty); // 'Awesome!'

// the property added to object1 is also available on object2

//.....

// Instantiating Built-in Types..................................

var items = new Array();
var now = new Date();
var error = new Error('Something bad happened');
var func = new Function('x', 'y', '{return x * y};');
var object = new Object();
var re = new RegExp('\\d+');

//.....

// Objects and Array Literals....................................

// Object literals
var book = {
    name: 'Moby Dick',
    year: 1911
};

    // using string literals as property names
    var book = {
        "name": "Moby Dick",
        "year-published": 1911
    }

    // equivalent 
    var book = new Object();
    book.title = 'Moby Dick';
    book['year-published'] = 1911; 

// Array literal
var colors = ['red', 'blue', 'green'];
console.log(colors[0]); // red

var colors = new Array('red', 'blue', 'green');
console.log(colors[0]); // red

//.....

// Function literals..............................................

// Using the Function() constructor is discouraged

// Function literal
function reflect(value){
    return value;
}

// is the same as

var reflect = new Function('value', 'return value;');
// but this is not recognized by debuggers and is a black box

//.....

// Regular Expression Literals.................................

var numbers = /\d+/g;
    // is the same as
var numbers = new RegExp('\\d+', 'g');
// RegExp constructor returns a string, thus slashes need escaping

//.....

// Property Access.............................................

// Dot notation
var array = [];
array.push(12345);

// Bracket notation
var array = [];
array['push'](12345); // the method is now a string in brackets

// Bracket notation w/variable
var array = [];
var method = 'push';
array[method](12345);
// the var method has push as its value, which is called on array

//.....

// Identifying Reference Types..................................

function reflect(value){
    return value;
}
console.log(typeof reflect); // function

// Except for the types function and regex, typeof returns object

// To identify reference types, use instanceof

var items = [];
var object = {};

function reflect(value){
    return value;
}

console.log(items instanceof Array); // true
console.log(object instanceof Object); // true
console.log(reflect instanceof Function); // true

// instanceof can identify inherited types

var items = [];
var object = {};

function reflect(value){
    return value;
}

console.log(items instanceof Array); // true
console.log(items instanceof Object); // true
console.log(object instanceof Object); // true
console.log(object instanceof Array); // false
console.log(reflect instanceof Function); // true
console.log(reflect instanceof Object); // true

//.....

// Identifying Arrays............................................

// The best way to identify arrays is with Array.isArray()

var items = [];

console.log(Array.isArray(items)); // true

// Primitive Wrapper Types......................................

// Automatically created behind the scenes when string, numbers
// ...or booleans are read

    // primitive string is assigned to name
var name = 'Scooby';
    // name is treated like an object and calls charAt(0)
var firstChar = name.charAt(0);
console.log(firstChar); // S

    // what happens behind the scenes
var name = 'Scooby';
var temp = new String(name);
var firstChar = temp.charAt(0); // autoboxing
temp = null;
console.log(firstChar);  // N

// Test autoboxing by adding a property to primitive string

var name = "Nicholas";
name.last = "Zakas";
console.log(name.last); // undefined

/*
With primitive wrapper types, properties seem to disappear because the object on which the
property was assigned is destroyed immediately afterward.
*/

// what the JavaScript engine does
var name = "Nicholas";
var temp = new String(name);
temp.last = "Zakas";
temp = null; // temporary object destroyed
var temp = new String(name);
console.log(temp.last); // undefined
temp = null;

/*
Although reference values are created automatically for 
primitive values, when instanceof checks for these types 
of values the result is false:
*/

var name = "Nicholas";
var count = 10;
var found = false;
console.log(name instanceof String); // false
console.log(count instanceof Number); // false
console.log(found instanceof Boolean); // false

// Create primitive wrapper type manually, but with side effects

var name = new String('Nicholas');
var count = new Number(10);
var found = new Boolean(true);

console.log(typeof name); // logs 'object'
console.log(typeof count); // logs 'object'
console.log(typeof found); // logs 'object'

// Also, objects are truthy, so Boolean still executes if false
var found = new Boolean(false);

if(found){ // found contains an object, thus is true
    console.log('Found'); // logs 'Found'
}

// .....

// Ch.2 Functions.............................................
// !! Functions are actually objects
// !! What distinguishes functions from any other object is the
//  ...presence of an internal property named [[Call]]. There are
//  ...multiple internal properties for objects in JS, but [[Call]]
//  ...is unique to functions and indicates that the object can be
//  ...executed.
// !! Typeof returns 'function' for any object with a [[Call]] property


// Declarations vs. Expressions ...................................

// Function declaration:  begins with 'function' keyword and the name
// of the function immediately after
// ** Gets hoisted **

function add(num1, num2){
    return num1 + num2;
}

 
// Function expression:  uses a variable and does not need a function
// name after 'function' keyword

var add = function(num1, num2){
    return num1 + num2;
};


// Function declarations are hoisted, thus functions can be defined after
// they are used in code with no errors

var result = add(5, 5);

function add(num1, num2){
    return num1 + num2;
}

// Function declarations are hoisted because the name is known ahead of
// time

// Function as Values..................................................
// Functions are first-class, and can be used as any object would. Passed
// as arguments to functions, assigned to variables, added to objects.

function sayHi(){
    console.log('Hi');
}

var sayHi2 = sayHi;

sayHi();
sayHi2();

// passing a function to sort()
var numbers = [ 1, 5, 8, 4, 7, 10, 2, 6 ];

numbers.sort(function(first, second){
    return first - second;
});

console.log(numbers); // "[1, 2, 4, 5, 6, 7, 8, 10]"

numbers.sort();  // no comparison
console.log(numbers); // "[1, 10, 2, 4, 5, 6, 7, 8]"


// Parameters........................................................

// Any number of parameters can be passed with no errors
// Parameters stored in an array-like structure called: arguments

// 'arguments' values referenced via numeric index, and there is a 
// length property to determine how many values are present

// 'arguments' is automatically available in any function
// 'arguments' is not an array, no methods of Array

// length property = arity(numbers of params expected)

// Ex. arguments and arity

function reflect(value){
    return value;
}

console.log(reflect('Hi'));  // Hi
console.log(reflect('hi', 25)); // Hi (no error from extra param)
console.log(reflect.length);  // 1 (1 named parameter)

// redefine reflect to return first argument
reflect = function(){
    return arguments[0];
};

// Function that takes any number of params and returns their sum
function sum(){
    var result = 0,
        i = 0,
        len = arguments.length;

    while(i < len){
        result += arguments[i];
        i++;
    }

    return result;
}

console.log(sum(1, 2)); // 3
console.log(sum(3, 4, 5, 6)); // 18
console.log(sum(50));  // 50
console.log(sum());    // 0

// Overloading.......................................................

// Function overloading: ability of a single function to have multiple
// signatures
// Signature: function name, number and type of params expected

// In js, when functions have the same name, the one that appears last
// in the source code wins

// mimic function overloading in js
function sayMessage(message){
    if(arguments.length === 0){
        message = 'Default message';
    }
    console.log(message);
}
sayMessage('Hello');  // logs 'Hello'

// If no params passed (arguments.length === 0), default message is read.
// Otherwise, the first param is used as message

// Object methods.......................................................

// Method: Property values that is a function

var person = {
    name: 'Nicholas',
    sayName(){
        console.log(person.name);
    }
};

person.sayName();  // Nicholas

// The 'this' Object...................................................
// Every scope has a this object that represents the calling object
// of the function.
// In global scope 'this' = window
// When function called while attached to an object 'this' = that object

var person = {
    name: 'Nicholas',
    sayName(){
        console.log(this.name);
    }
};

person.sayName(); // Nicholas

// 'this' allows re-using function on multiple objects

var person1 = {
    name: 'Nicholas',
    sayName: sayNameForAll
};

var person2 = {
    name: 'Greg',
    sayName: sayNameForAll
};

var name = 'Michael';

person1.sayName();  // Nicholas
person2.sayName();  // Greg

sayNameForAll();    // Michael (global variable containing name)

// Changing 'this'...................................................
// Value of this can be changed manually using three methods:
//      call()
//      apply()
//      bind()

// call()
// first parameter: value to which 'this' should be equal
// subsequent parameters: parameters that should be passed to function

function sayNameForAll(label){
    console.log(label + ":" + this.name);
}

var person1 = {
    name: 'Nicholas'
};

var person2 = {
    name: 'Greg'
};

var name = 'Micheal';

sayNameForAll.call(this, 'global');  // 'global'
sayNameForAll.call(person1, 'person1'); // 'person1: Nicholas'
sayNameForAll.call(person2, 'person2'); // 'person2: 

// first call: uses global 'this' passes global
// second call: refers to person1, passes 'person1' to sayNameForAll
// second call: refers to person2, passes 'person2' to sayNameForAll


// apply()
// syntax: .apply(value for this, array or array-like object)
// can use 'arguments' as second parameters

function sayNameForAll(label){
    console.log(label + ":" + this.name);
}

var person1 = {
    name: 'Nicholas'
};

var person2 = {
    name: 'Greg'
};

var name = 'Michael';

sayNameForAll.apply(this, ['global']); // 'global: Michael'
sayNameForAll.apply(person1, ['person1']); // 'person1: Nicholas'
sayNameForAll.apply(person2, ['person2']); // 'person2: Greg'

// If you have an array of data use .apply()
// If you have individual variables use .call()

// bind()
// syntax: (this value for new function, permanently set named functions)
// non-permanent params can still be passed in later


function sayNameForAll(label) {
    console.log(label + ":" + this.name);
}
    var person1 = {
    name: "Nicholas"
    };

    var person2 = {
    name: "Greg"
    };

    // create sayNameForPerson1(), binding this to person1
    // create sayNameForPerson2(), binding this to person2

    var sayNameForPerson1 = sayNameForAll.bind(person1);
    sayNameForPerson1('person1');  // 'person1: Nicholas'
    // no params are bound, still need to pass in label

    var sayNameForPerson2 = sayNameForAll.bind(person2, 'person2');
    sayNameForPerson2();  // 'person2: Greg'
    // binds 'this' to person2, and binds first param as 'person2'

    // attaching a method to an object doesn't change value of 'this'
    person2.sayName = sayNameForPerson1;
    person2.sayName('person2'); // 'person1: Nicholas'
    // sayNameForPerson1 is bound, thus value of 'this' will not change


// Ch.3 Understanding Objects..........................................

// Defining Properties................................................

// Two basic ways to create your own objects:

//Literal

var person1 = {
    name: 'Nicholas'
};

var person2 = new Object();
person2.name = 'Nicholas';

person1.age = 'confidential';
person2.age = 'confidential';

person1.name = 'Greg';
person2.name = 'Michael';

// [[Put]] : when a property is first added to an object, js uses an
// internal method called [[Put]] on the object.

// [[Put]] creates a spot on the object to store the property, which
// results in an own propert on the object

// [[Set]] : when a value is assigned to an existing property, a separate
// operation called [[Set]] takes place

// [[Set]] replaces the old value of the property with the new one

var person1 = {
    name: 'Nicholas',    // [[Put]] name
    sayName: function(){    // [[Put]] sayName method
        console.log(this.name);
    }
}

person1.age = 'confidential';   // [[Put]] age
person1.name = 'Greg';      // [[Set]] name

// Detecting Properties.................................................

// in
'name' in person1;      // true
'age' in person1;       // true
'title' in person1;     // false

'sayName' in person1;       // true

// In most cases, 'in' is the best way to determine existence of props
// 'in' checks for own properties and prototype properties

// hasOwnProperty()

person1.hasOwnProperty('name');     // true
person1.hasOwnProperty('toString'); // false

// Removing properties...................................................

// Setting a property to null doesn't remove it, it calls [[Set]] with a
// value of null.

// Use 'delete' to completely remove a property from an object
// [[Delete]] removes a key/value pair from a hash table
// 'delete' returns true when successful

delete person1.name;        // true
'name' in person1;          //false

// Enumeration.........................................................
// [[Enumerable]] : Internal property set to true for enumerable props

// By default, all properties added to an object are enumberable, which
// means you can iterate over them using a for loop

// Object.keys() : retrieves an array of enumerable property names
var properties = Object.keys(object);

var i, len;

for(i = 0, len=properties.length; i < len; i++){
    console.log('Name: ' + properties[i]);
    console.log('Value: ' + object[properties[i]]);
}

// Most native methods on objects have [[Enumerable]] set to false

'name' in person1;      // true
person1.propertyIsEnumerable('name');   // true

var properties = Object.keys(person1);

'length' in properties;     // true
properties.propertyIsEnumerable('length')  // false
// Array.prototype is a non-enumerable built-in

// Types of properties.................................................
// Two property types:
//      Data properties - contain a value
//  Accessor properties - define function to call when prop is read
//      getter
//  ...and a function to call when the property is written to
//      setter

var person1 = {
    _name: 'Nicholas',

    get name(){
        console.log('Reading name');
        return this._name;
    },

    set name(value){
        console.log('Setting name to %s', value);
        this._name = value;
    }
};

person1.name;       // 'Reading name'  'Nicholas'
person1.name = 'Greg';
person1.name;       // 'Setting name to Greg'  'Greg'

// Both a getter and setter don't need to be defined
// If only a getter defined, prop becomes read-only, write throws error
// If only a setter defined, prop becomes write-only, read throws error

// Property Attributes...................................................

// Common Attributes

// Two property attributes shared between data and accessor properties:
//  [[Enumerable]] : whether you can iterate over property
//  [[Configurable]] : whether property can be changed

// By default, all props declared on an object are enumerable and configurable

// To change property attributes, use the Object.defineProperty() method

// Object.defineProperty() arguments:
//      object that owns the property
//      property name
//      property descriptor containing attributes to set

var person1 = {
    name: 'Nicholas'
};

Object.defineProperty(person1, 'name', {
    enumerable: false
});

console.log('name' in person1);     // true
console.log(person1.propertyIsEnumerable('name'));   // false

var properties = Object.keys(person1);
console.log(properties.length);   // 0

Object.defineProperty(person1, 'name', {
    configurable: false
});

// try to delete the name property
delete person1.name;            // false, name is non-configurable
console.log('name' in person1);     // true
console.log(person1.name);          // 'Nicholas'

Object.defineProperty(person1, 'name', {    // error
    configurable: true
});

// Data Property Attributes............................................
// Data properties have two additional properties that accessors do not:
//      [[Value]] - holds the property value, even if a function
//      [[Writable]] - boolean value indicating writability

// Adding name property to person1
var person1 = {};

Object.defineProperty(person1, 'name', {
    value: 'Nicholas',
    enumerable: true,
    configurable: true,
    writable: true
});

// Name is not a property of person1, thus it is created

// Failing to specify all attributes when using Object.defineProperty()
// will result in attributes defaulting to false

var person1 = {};

Object.defineProperty(person1, 'name', {
    value: 'Nicholas'
});

'name' in person1;      // true
person1.propertyIsEnumerable('name');   // false

delete person1.name;
'name' in person1;      // true

person1.name = 'Greg';
person1.name;           // 'Nicholas'

// Accessor Property Attributes........................................
// Accessors have two additional properties
//      [[Get]] - contains getter functions
//      [[Set]] - contains setter functions

var person1 = {
    _name: 'Nicholas',

    get name(){
        console.log('Reading name');
        return this._name;
    },

    set name(value){
        console.log('Setting name to %s', value);
        this._name = value;
    }
};

        // can also be written as follows

var person1 = {
    _name: 'Nicholas'
};

Object.defineProperty(person1, 'name', {
    get: function(){
        console.log('Reading name');
        return this._name;
    },
    set: function(value){
        console.log('Setting name to %s', value);
        this._name = value;
    },
    enumerable: true,
    configurable: true
});

// Nonconfigurable, nonenumerable, nonwritable property

var person1 = {
    _name: 'Nicholas'
};

Object.defineProperty(person1, 'name', {
    get: function(){
        console.log('Reading name');
        return this._name;
    }
});

console.log('name' in person1);     // true
console.log(person1.propertyIsEnumerable('name'));  // false
delete person1.name;

console.log('name' in person1);     // true

person1.name = 'Greg';
console.log(person1.name);      // Nicholas

// only getter is present, no setter, so default value for other
// attributes is false


// Defining multiple properties......................................

var person1 = {};

Object.defineProperties(person1, {

    // data property to store data
    _name: {
        value: 'Nicholas',
        enumerable: true,
        configurable: true,
        writable: true
    },
    // accessor property
    name: {
        get: function(){
            console.log('Reading name');
            return this._name;
        },
        set: function(value){
            console.log("Setting name to %s", value);
            this._name = value;
        },
        enumerable: true,
        configurable: true
    }
});
// data property is _name
// accessor property is name

// Retrieving property attributes.......................................

// Use getOwnPropertyDescriptor() to fetch property attributes
// Two arguments:
//      object to work on
//      property name to retrieve

var person1 = {
    name: 'Nicholas'
};

var descriptor = Object.getOwnPropertyDescriptor(person1, 'name');

console.log(descriptor.enumerable); // true  (name.enumerable)
console.log(descriptor.configurable); // true
console.log(descriptor.writable); // true
console.log(descriptor.value); // 'Nicholas'

// returns appropriate value for the type of property

// Preventing Object Modification.....................................

// Objects have internal attributes
// [[Extensible]] : internal object attribute which is a Boolean value
// ...indicating if the object can be modified

// All objects extensible by default. Setting extensible to false prevents
// properties from being added to the object

// Preventing Extensions..............................................

// Three ways to set [[Extensible]] to false:


// Object.preventExtensions()
// Single argument:
//      object to make nonextensible

// Check the value of [[Extensible]] with Object.isExtensible()

var person1 = {
    name: 'Nicholas'
};

console.log(Object.isExtensible(person1));  // true

Object.preventExtensions(person1);
console.log(Object.isExtensible(person1));  // false

console.log('sayName' in person1);      // false

// Sealing objects.....................................................

// A sealed object is nonextensible and all of its properties are
// nonconfigurable. You cannot add or remove properties or change
// their data type. You can only read from and write to properties

// Check if object is sealed with Object.isSealed();

var person1 = {
    name: 'Nicholas'
};

console.log(Object.isExtensible(person1));  // true
console.log(Object.isSealed(person1));  // false

Object.seal(person1);
console.log(Object.isExtensible(person1));  // false
console.log(Object.isSealed(person1));      // true

person1.name = 'Greg';

console.log('name' in person1);     // true
console.log(person1.name);      // Greg

var descriptor = Object.getOwnPropertyDescriptor(person1, 'name');
console.log(descriptor.configurable);       // false

// Freezing Objects..................................................
// If an object is frozen, you can't add or remove properties, change
// property types, or write to any data properties.

// Objects cannot be unfrozen
// Frozen object = sealed object where data properties are read-only

// Use Object.freeze() to freeze
// Use Object.isFrozen() to check if frozen

var person1 = {
        name: "Nicholas"
    };

console.log(Object.isExtensible(person1)); // true
console.log(Object.isSealed(person1)); // false
console.log(Object.isFrozen(person1)); // false

Object.freeze(person1);
console.log(Object.isExtensible(person1));      //false
console.log(Object.isSealed(person1));      // true
console.log(Object.isFrozen(person1));      // true

person1.name = 'Greg';
console.log(person1.name);          // Nicholas

delete person1.name;
console.log(person1.name);      // Nicholas

var descriptor = Object.getOwnPropertyDescriptor(person1, "name");
console.log(descriptor.configurable); // false
console.log(descriptor.writable); // false

// ch.4 Constructors and Prototypes....................................

// Constructor: a function that is used with 'new' to create an
// object

// Objects created with the same constructor contain the same
// properties and methods

function Person(){
    // properties and methods
}

var person1 = new Person(); // omit parentheses if no parameters
var person2 = new Person();

person1 instanceof Person; // true
person2 instanceof Person;  // true

person1.constructor === Person;  // true
person2.constructor === Person; // true

// Add properties

function Person(name){
    this.name = name;
    this.sayName = function(){
        console.log(this.name);
    };
}

var person1 = new Person('Nicholas');
var person2 = new Person('Greg');

console.log(person1.name);
console.log(person2.name);

person1.sayName();
person2.sayName();


// Using Object.defineProperty
function Person(name){
    Object.defineProperty(this, 'name', {
        get: function(){
            return name;
        },
        set: function(newName){
            name = newName;
        },
        enumerable: true,
        configurable: true
    });
    this.sayName = function(){
        console.log(this.name);
    };
}

// Prototypes...............................................

// Prototype: a recipe for an object
// Almost every function has a prototype
// Prototype is used in the creation of new instances
// All instances can access properties of the prototype

// Example:
hasOwnProperty()

// is defined on the generic Object prototype but can be accessed
// by any object as if it's an own property

var book = {
    title: 'The principles of OOJ'
};

console.log('title' in book);
console.log(book.hasOwnProperty('title'));
console.log('hasOwnProperty' in book);
console.log(book.hasOwnProperty('hasOwnProperty'));
console.log(Object.prototype.hasOwnProperty('hasOwnProperty'));

// Identifying a prototype property

function hasPrototypeProperty(object, name){
    return name in object && !object.hasOwnProperty(name);
}
// If the property is in an object but hasOwnProperty() returns 'false'
// the the property is on the prototype

console.log(hasPrototypeProperty(book, 'title')); // false
console.log(hasPrototypeProperty(book, 'hasOwnProperty')); // true

// The [[Prototype]] Property...................................

// An instance keeps track of its prototype through an internal
// property called  [[Prototype]], which is a pointer back to the
// prototype object that the instance is using

// When instance is created with new, the constructor's prototype
// property is assigned to the [[Prototype]] property of that new
// object. 

/* 


    person1
[[Prototype]] |    o-----------------------
    name      | 'Nicholas'                |
                                          V
                           -------->  Person.prototype
________________________  |        ____________________
    person2               |
------------------------  |        sayName | (function)
[[Prototype]] |  o--------|
________________________
name          |   'Greg'
------------------------

*/

// Read the value of [[Prototype]] with Object.getPrototypeOf()
var object = {};

var prototype = Object.getPrototypeOf(object);

console.log(prototype === Object.prototype); // true for generic

// Check if one object is a prototype for another

var object = {};

console.log(Object.prototype.isPrototypeOf(object)); // true


// Using Prototypes with Constructors..........................

function Person(name){
    this.name = name;
}

Person.prototype.sayName = function(){
    console.log(this.name);
};

var person1 = new Person('Jeff');
var person2 = new Person('Paul');

console.log(person1.name);
console.log(person2.name);

person1.sayName();
person2.sayName(); 

// Replace prototype with an object literal

function Person(name){
    this.name = name;
}

Person.prototype = {
    sayName: function(){
        console.log(this.name);
    },

    toString: function(){
        return "[Person " + this.name + "]";
    }
};

// Side effects
var person1 = new Person('Nick');

console.log(person1 instanceof Person);  // true
console.log(person1.constructor === Person); // false
console.log(person1.constructor === Object); // true
// constructor is now Object

// restore 'constructor' to a proper value when overwriting

function Person(name){
    this.name = name;
}

Person.prototype = {
    constructor: Person, // specifically assigned

    sayName: function(){
        console.log(this.name);
    },

    toString: function(){
        return "[Person " + this.name + "]";
    }
};

var person1 = new Person('Nick');
var person2 = new Person('Dave');

console.log(person1 instanceof Person); // true
console.log(person1.constructor === Person); // true
console.log(person1.constructor === Object); // false

console.log(person2 instanceof Person); // true
console.log(person2.constructor === Person); // true
console.log(person2.constructor === Object); // false

// Changing prototypes

function Person(name){
    this.name = name;
}

Person.prototype = {
    constructor: Person, // specifically assigned

    sayName: function(){
        console.log(this.name);
    },

    toString: function(){
        return "[Person " + this.name + "]";
    }
};

var person1 = new Person('Nick');
var person2 = new Person('Dave');

console.log("sayHi" in person1); // false
console.log("sayHi" in person2); // false

// add a new method
Person.prototype.sayHi = function(){
    console.log('Hi!');
};


person1.sayHi(); // outputs "Hi"
person2.sayHi(); // outputs "Hi"

// When you use Object.seal() or .freeze(), you are acting solely
// on the object instance and the own properties

var person1 = new Person('Nick');
var person2 = new Person('Dave');

Object.freeze(person1);

Person.prototype.sayHi = function(){
    console.log('Hi');
};

person1.sayHi();
person2.sayHi();

// The value of the [[Prototype]] property is not frozen

// Built-in Prototypes.....................................

// Adding new method to Array.prototype
Array.prototype.sum = function() {
    return this.reduce(function(previous, current) {
        return previous + current;
    });
};
var numbers = [ 1, 2, 3, 4, 5, 6 ];
var result = numbers.sum();
console.log(result); // 21


// Modify primitive wrapper type prototype
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.substring(1);
};
var message = "hello world!";
console.log(message.capitalize()); // "Hello world!"