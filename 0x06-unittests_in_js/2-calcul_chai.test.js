const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('test suite for calculate number function', () => {
  it('divide two floating point numbers', () => {
    expect(calculateNumber('DIVIDE', 10.3, 5.2)).to.equal(2);
  });
  it('add two floating point numbers', () => {
    expect(calculateNumber('SUM', 10.3, 5.2)).to.equal(15);
  });

  it('divide with 0', () => {
    expect(calculateNumber('DIVIDE', 10.3, 0)).equal('Error');
  });
});

describe('subtract test suite', () => {
  it('subtract two floating point numbers', () => {
    expect(calculateNumber('SUBTRACT', 10.3, 5.2)).to.equal(5);
  });
});
