/* eslint-disable */
import getResponseFromAPI from '../0-promise';
import getFullResponseFromAPI from '../1-promise';

test('Task 1, test if function return instance of a promise', () => {
  const response = getResponseFromAPI();
  expect(response).toBeInstanceOf(Promise);
});

test('Task 2, test it Throws the required error when the promise fails to resolve', () => {
  expect(getFullResponseFromAPI(false)).rejects.toThrow('The fake API is not working currently',);
});
test('Task 2, test it returns the right object when the promise resolve', () => {
  expect(getFullResponseFromAPI(true)).resolves.toStrictEqual({ status: 200, body: 'Success' });
});


