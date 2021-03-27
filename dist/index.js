"use strict";
var hasValue = true;
var count = 11;
var float = 3.14;
var negative = -0.12;
var single = 'hello';
var double = "hello";
var person = {
    name: 'Jack',
    age: 21
};
var fruits = ['Apple', 'Banana', 'Grape'];
var book = ['business', 1500, true];
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
var unionType = 10;
var unionTypes = [21, 'hello'];
var apple = 'apple';
var clothSize = 'small';
var cloth = {
    color: 'white',
    size: 'medium'
};
function add(num1, num2) {
    return num1 + num2;
}
function sayHello() {
    console.log('hello!');
}
