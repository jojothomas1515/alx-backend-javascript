const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Util = require('./utils');
const sinon = require('sinon');

describe('using sinon spy', () => {
  const spy = sinon.spy(sendPaymentRequestToApi);
  const calMethod = sinon.spy(Util, 'calculateNumber');
  spy(202, 8);

  it('check of sendPaymentRequestToApi work', () => {
    expect(spy.calledOnceWith(202, 8)).equal(true);
  });
  it('check wether calculateNumber method was called', () => {
    expect(calMethod.calledOnce).equal(true);
  });
});
