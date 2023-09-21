const Type = {
  SUBTRACT: 'SUBTRACT',
  ADD: 'ADD',
  DIVIDE: 'DIVIDE',
};
/**
 * # Adds two number
 * @param {String} type Can be SUM | SUBTRACT | DIVIDE
 * @param {Number} a
 * @param {Number} b
 * @returns {Number} The sum of a and b
 */
function calculateNumber(type, a, b) {
  if (type === Type.ADD) return Math.round(a) + Math.round(b);
  if (type === Type.SUBTRACT) return Math.round(a) - Math.round(b);
  if (type === Type.DIVIDE) {
    const aa = Math.round(a);
    const bb = Math.round(b);
    if (b === 0) return 'Error';
    return aa / bb;
  }
}

module.exports = calculateNumber;
