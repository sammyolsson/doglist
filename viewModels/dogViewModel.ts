import { Dog } from "../models/dogModel";
import { getDogs } from "../services/fakeDatabase";

export class DogViewModel {
  dogs: KnockoutObservableArray<Dog>;
  newDogName: KnockoutObservable<string>;
  newDogBreed: KnockoutObservable<string>;

  constructor() {
    this.dogs = ko.observableArray(getDogs());
    this.newDogName = ko.observable("");
    this.newDogBreed = ko.observable("");
  }

  addDog() {
    const name = this.newDogName();
    const breed = this.newDogBreed();

    if (name && breed) {
      const newDog = new Dog(name, breed);
      this.dogs.push(newDog);
      this.newDogName("");
      this.newDogBreed("");
    }
  }
}
