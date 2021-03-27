"use strict";
var Person = /** @class */ (function () {
    function Person(initName) {
        this.name = initName;
    }
    Person.prototype.greeting = function () {
        console.log("Hello! My name is " + this.name);
    };
    return Person;
}());
var quill = new Person('Quill');
quill.greeting();
console.log(quill);
