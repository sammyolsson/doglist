export class Dog {
  name: KnockoutObservable<string>;
  breed: KnockoutObservable<string>;

  constructor(name: string, breed: string) {
    this.name = ko.observable(name);
    this.breed = ko.observable(breed);
  }
}
