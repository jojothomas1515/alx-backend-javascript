import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  set range(range) {
    this._range = range;
  }

  get range() {
    return this._range;
  }

  cloneCar() {
    return new super.constructor();
  }
}
