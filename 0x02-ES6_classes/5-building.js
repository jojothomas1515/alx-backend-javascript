export default class Building {
  constructor(sqft) {
    // eslint-disable-next-line no-prototype-builtins
    if (!(Object.getPrototypeOf(this)).hasOwnProperty('evacuationWarningMessage')) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
    this.sqft = sqft;
  }

  set sqft(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    return `Please Evacuate this ${this.sqft} sqaure foot`;
  }
}
