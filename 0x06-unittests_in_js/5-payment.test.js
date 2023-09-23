/* eslint-disable */
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const Util = require('./utils');
const sinon = require('sinon');

describe('using sinon hooks', () => {
  // const spy = sinon.spy(sendPaymentRequestToApi);
  // eslint-disable-next-line no-unused-vars
  const calMethod = sinon.stub(Util, 'calculateNumber').callsFake((a, b) => 10);
  let log;
  beforeEach(() => {
    log = sinon.spy(console, 'log');
  });
  afterEach(() => {
    log.restore();
  });
  it('check wether calculateNumber method was called', () => {
    sendPaymentRequestToApi(100, 20);
    expect(log.calledWithExactly('The total is: 120'));
  });
  it('check wether calculateNumber method was called once', () => {
    sendPaymentRequestToApi(10, 10);
    expect(log.calledOnce).equal(true);
    expect(log.calledWithExactly('The total is: 20'));
  });
});
