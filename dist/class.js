"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.isAdult = function (age) {
        if (age > 17)
            return true;
        return false;
    };
    Person.prototype.incrementAge = function () {
        this.age += 1;
    };
    Person.prototype.greeting = function () {
        console.log("Hello! My name is " + this.name + ". I am " + this.age + " years old.");
    };
    Person.species = 'Homo sapiens';
    return Person;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, age, _subject) {
        var _this = _super.call(this, name, age) || this;
        _this._subject = _subject;
        return _this;
    }
    Object.defineProperty(Teacher.prototype, "subject", {
        get: function () {
            if (!this._subject) {
                throw new Error('There is no subject.');
            }
            return this._subject;
        },
        enumerable: false,
        configurable: true
    });
    Teacher.prototype.greeting = function () {
        console.log("Hello! My name is " + this.name + ". I am " + this.age + " years old. I teach " + this.subject);
    };
    return Teacher;
}(Person));
console.log(Person.species);
var teacher = new Teacher('Quill', 30, 'Math');
console.log(teacher.subject);
teacher.greeting();
