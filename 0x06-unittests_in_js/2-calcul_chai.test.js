const { assert } = require('chai');
const calculateNumber = require('./1-calcul');

describe('test suite for calculate number function', () => {
  it('divide two floating point numbers', () => {
    assert.equal(calculateNumber('DIVIDE', 10.3, 5.2), 2);
  });
  it('add two floating point numbers', () => {
    assert.equal(calculateNumber('SUM', 10.3, 5.2), 15);
  });
  it('subtract two floating point numbers', () => {
    assert.equal(calculateNumber('SUBTRACT', 10.3, 5.2), 5);
  });
  it('divide with 0', () => {
    assert.equal(calculateNumber('DIVIDE', 10.3, 0), 'Error');
  });
});
