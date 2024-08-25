import { Dog } from "../models/dogModel";

export function getDogs(): Dog[] {
  return [new Dog("Kalle", "Pitbull"), new Dog("Stefan", "Labbis")];
}
