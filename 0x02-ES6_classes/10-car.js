export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  set brand(brand) {
    this._brand = brand;
  }

  get brand() {
    return this._brand;
  }

  set motor(motor) {
    this._motor = motor;
  }

  get motor() {
    return this._motor;
  }

  set color(color) {
    this._color = color;
  }

  get color() {
    return this._color;
  }

  // eslint-disable-next-line class-methods-use-this
  cloneCar() {
    return new this.constructor();
  }

  static get [Symbol.species]() {
    return this;
  }
}
