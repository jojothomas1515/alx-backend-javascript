const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("test suite for calculate number function", () => {
  it("add two floating point numbers", () => {
    assert.equal(calculateNumber(10.3, 5.2), 15);
  });
});
