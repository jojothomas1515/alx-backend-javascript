/* eslint-disable */
const chai = require('chai');
const request = require('request');
const sinon = require('sinon');

const baseUrl = 'http://localhost:7865';

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
describe('Test suite for getting cart', () => {
  it('test status code', (done) => {
    request.get('http://localhost:7865/cart/22', (err, res) => {
      if (err) {
        done(err);
      }
      chai.expect(res.statusCode).to.be.equal(200);
      done();
    });
  });
  it('test response body', (done) => {
    request.get('http://localhost:7865/cart/22', (err, res) => {
      if (err) {
        done(err);
      }
      chai.expect(res.body).to.be.equal('Payment methods for cart 22');
      done();
    });
  });
  it('test passing non number id', (done) => {
    request.get('http://localhost:7865/cart/jojo', (err, res) => {
      if (err) {
        done(err);
      }
      chai.expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});

describe('Test suite for  available payments', () => {
  it('check status code and body of /available_payments', (done) => {
    request.get(`${baseUrl}/available_payments`, (err, res) => {
      if (err) {
        done(err);
      }
      chai.expect(res.statusCode).to.be.equal(200);
      chai.expect(JSON.parse(res.body)).to.be.eql({
        payment_methods: { credit_cards: true, paypal: false },
      });
      done();
    });
  });
});

describe('Test suite for login route', () => {
  it('test if login route return the expected body', (done) => {
    request.post(
      `${baseUrl}/login`,
      {
        json: { userName: 'jojo' },
        headers: 'Content-Type: application/json',
      },
      (err, res) => {
        if (err) {
          done(err);
        }
        expect(res.body).to.be.equal('Welcome jojo');
        done();
      },
    );
  });
});
