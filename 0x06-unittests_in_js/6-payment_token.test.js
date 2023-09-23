/* eslint-disable */
const { assert, expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('Testing function that returns a promise', async () => {
  it('testing when success is true', async () => {
    const res = await getPaymentTokenFromAPI(true);
    expect(res).eql({ data: 'Successful response from the API' });
  });
});
