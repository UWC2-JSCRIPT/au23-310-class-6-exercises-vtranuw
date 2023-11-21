/**
 * Car class
 * @constructor
 * @param {String} model
 */
class Car {
  constructor(model) {
    this.model = model;
    this.speed = 0;
  }

  accelerate() {
    this.speed += 10;
  }

  brake() {
    this.speed -= 5;
  }

  toString() {
    return `${this.model} running at ${this.speed} km/h`;
  }
}
//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
const car = new Car("Lamborghini Urus");
car.accelerate();
car.accelerate();
car.brake();
console.log(car.toString());
/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */
 class ElectricCar extends Car {
    constructor(model) {
      super(model);
    }
 }

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
const electricCar = new ElectricCar('Lamborghini LANZADOR');
electricCar.accelerate();
electricCar.accelerate();
electricCar.brake();
console.log(electricCar.toString());