/* eslint-disable */
import handleResponseFromAPI from '../2-then';
test('test handleReponseFromApi resolve return', () => {
  expect(handleResponseFromAPI(Promise.resolve())).resolves
    .toStrictEqual({ status: 200, body: 'Success' });
});
test('test handleReponseFromApi reject return', () => {
  expect(handleResponseFromAPI(Promise.reject())).resolves
    .toThrow();
});
