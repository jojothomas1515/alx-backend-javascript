/* eslint-disable */
const chai = require('chai');
const request = require('request');
const sinon = require('sinon');

describe('Test suite for index page', () => {
  it('test status code', (done) => {
    request.get('http://localhost:7865', (err, res) => {
      if (err) {
        done(err);
      }
      chai.expect(res.statusCode).to.be.equal(200);
      done();
    });
  });
  it('test response body', (done) => {
    request.get('http://localhost:7865', (err, res) => {
      if (err) {
        done(err);
      }
      chai.expect(res.body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
