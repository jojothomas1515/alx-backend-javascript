/* eslint-disable */
import getSanFranciscoDescription from '../6-string-interpolation';
import getBudgetObject from '../7-getBudgetObject';
import getBudgetForCurrentYear from '../8-getBudgetCurrentYear';

test('getSanFranciscoDescription', () => {
  const newLocal = 'As of 2017, it was the seventh-highest income county in the' +
    ' United States, with a per capita personal income of $119,868. As of'
    + ' 2015, San Francisco proper had a GDP of $154.2 billion, and a GDP per capita of $178,479.';
  expect(getSanFranciscoDescription())
    .toBe(newLocal);
});

test('get budget object test', () => {
  expect(getBudgetObject(400, 700, 900)).toStrictEqual({ income: 400, gdp: 700, capita: 900 });
})
test("Es6 computed property", () => {
  expect(getBudgetForCurrentYear(2100, 5200, 1090))
    .toStrictEqual({ 'income-2023': 2100, 'gdp-2023': 5200, 'capita-2023': 1090 });
});
