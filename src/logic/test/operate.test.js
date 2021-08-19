import operate from '../operate';

test('adds 1 + 2 to equal 3', () => {
  expect(operate(1, 2, '+')).toBe('3');
});

test('Substract 2 - 1  to equal 1', () => {
  expect(operate(2, 1, '-')).toBe('1');
});

test('Multiply 2 x 2  to equal 1', () => {
  expect(operate(2, 2, 'x')).toBe('4');
});

test('Divide 6 ÷ 2  to equal 3', () => {
  expect(operate(6, 2, '÷')).toBe('3');
});

test('Module 2 - 1  to equal 3', () => {
  expect(operate(8, 5, '%')).toBe('3');
});
