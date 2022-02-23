const {stringLength,reverseString} = require('./functions');

test('souad to equal 5', () => {
  expect(stringLength('souad')).toBe(5);
});


test('empty to throw error', () => {
  expect(
    () => stringLength('')).toThrow("not between 1 and 10");
});

// tests for reverse string function
test('souad to equal dauos', () => {
  expect(reverseString('souad')).toBe('dauos');
});