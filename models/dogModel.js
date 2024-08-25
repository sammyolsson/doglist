"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
class Dog {
    constructor(name, breed) {
        this.name = ko.observable(name);
        this.breed = ko.observable(breed);
    }
}
exports.Dog = Dog;
