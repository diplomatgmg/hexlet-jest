import fill from '../implementations/index';

// BEGIN (write your solution here)
let array;

beforeEach(() => {
  array = [1, 2, 3, 4, 5];
});

test('fill', () => {
  expect(fill(array, '')).toStrictEqual(['', '', '', '', '']);
});

test('fill', () => {
  expect(fill(array, '-', 1)).toStrictEqual([1, '-', '-', '-', '-']);
});

test('fill', () => {
  expect(fill(array, '-', 1, 3)).toStrictEqual([1, '-', '-', 4, 5]);
});

test('fill', () => {
  fill(array, '-', 100);
  expect(array).toStrictEqual([1, 2, 3, 4, 5]);
});

test('fill', () => {
  fill(array, '-', 100, 0);
  expect(array).toStrictEqual([1, 2, 3, 4, 5]);
});
// END
