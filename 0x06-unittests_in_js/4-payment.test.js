const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const Util = require('./utils');
const sinon = require('sinon');

describe('using sinon spy', () => {
  // const spy = sinon.spy(sendPaymentRequestToApi);
  // eslint-disable-next-line no-unused-vars
  const calMethod = sinon.stub(Util, 'calculateNumber').callsFake((a, b) => 10);
  sendPaymentRequestToApi(22, 88);
  const log = sinon.spy(console, 'log');

  // it('check of sendPaymentRequestToApi work', () => {
  //   expect(spy.calledOnceWith(202, 8)).equal(true);
  // });
  it('check wether calculateNumber method was called', () => {
    expect(calMethod.calledOnce).equal(true);
    // expect(log.calledOnce).equal(true);
  });
  // it('test console log', () => {
  // });
});
