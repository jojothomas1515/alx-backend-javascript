const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const sinon = require('sinon');

describe('using sinon spy', () => {
  const spy = sinon.spy(sendPaymentRequestToApi);

  it('check of sendPaymentRequestToApi work', () => {
    spy(202, 8);
    expect(spy.calledOnceWith(202, 8)).equal(true);
  });
});
