"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DogViewModel = void 0;
const dogModel_1 = require("../models/dogModel");
const fakeDatabase_1 = require("../services/fakeDatabase");
class DogViewModel {
    constructor() {
        this.addDog = () => {
            const name = this.newDogName();
            const breed = this.newDogBreed();
            if (name && breed) {
                const newDog = new dogModel_1.Dog(name, breed);
                this.dogs.push(newDog);
                this.newDogName("");
                this.newDogBreed("");
            }
        };
        this.dogs = ko.observableArray((0, fakeDatabase_1.getDogs)());
        this.newDogName = ko.observable("");
        this.newDogBreed = ko.observable("");
    }
}
exports.DogViewModel = DogViewModel;
