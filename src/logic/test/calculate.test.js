import calculate from '../calculate';

describe('Button AC', () => {
  const obj1 = {
    total: '2',
    next: '1',
    operation: null,
  };
  const obj2 = {
    total: null,
    next: null,
    operation: null,
  };
  test('Button AC', () => {
    expect(calculate(obj1, 'AC')).toMatchObject(obj2);
  });
});

describe('Equal', () => {
  const obj1 = {
    total: '2',
    next: '1',
    operation: '+',
  };
  const obj2 = {
    total: '3',
    next: null,
    operation: null,
  };
  test('Equial button', () => {
    expect(calculate(obj1, '=')).toMatchObject(obj2);
  });
});

describe('Addition', () => {
  const obj1 = {
    total: '2',
    next: '1',
    operation: '+',
  };
  const obj2 = {
    total: '3',
    next: null,
    operation: null,
  };
  test('Addition button', () => {
    expect(calculate(obj1, '=')).toMatchObject(obj2);
  });
});

describe('substraction', () => {
  const obj1 = {
    total: '2',
    next: '1',
    operation: '-',
  };
  const obj2 = {
    total: '1',
    next: null,
    operation: null,
  };
  test('substaction button', () => {
    expect(calculate(obj1, '=')).toMatchObject(obj2);
  });
});

describe('Multiplication', () => {
  const obj1 = {
    total: '2',
    next: '2',
    operation: 'x',
  };
  const obj2 = {
    total: '4',
    next: null,
    operation: null,
  };
  test('Multiplication button', () => {
    expect(calculate(obj1, '=')).toMatchObject(obj2);
  });
});

describe('Division', () => {
  const obj1 = {
    total: '9',
    next: '3',
    operation: '÷',
  };
  const obj2 = {
    total: '3',
    next: null,
    operation: null,
  };
  test('Division button', () => {
    expect(calculate(obj1, '=')).toMatchObject(obj2);
  });
});

describe('Module', () => {
  const obj1 = {
    total: '8',
    next: '5',
    operation: '%',
  };
  const obj2 = {
    total: '3',
    next: null,
    operation: null,
  };
  test('Module button', () => {
    expect(calculate(obj1, '=')).toMatchObject(obj2);
  });
});

describe('positive or negative', () => {
  const obj1 = {
    total: null,
    next: '1',
    operation: '+/-',
  };
  const obj2 = {
    next: '-1',
  };
  test('positive or negative', () => {
    expect(calculate(obj1, '+/-')).toMatchObject(obj2);
  });
});
