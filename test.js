import test from 'ava';
import makePositive from '.';

test('it converts negative numbers into positive numbers', t => {
  t.is(makePositive(-0), 0);
  t.is(makePositive(-13), 13);
});