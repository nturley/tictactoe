const { Board } = require('./board');

test('constructor initializes squares with 3 blank rows and columns', () => {
  const b = new Board();
  expect(b.squares.length).toBe(3);
  b.squares.forEach(row => {
    expect(row.length).toBe(3);
    row.forEach(s => {
      expect(s).toBe(' ')
    });
  })
});

test('validateMove checks board boundaries', () => {
  const b = new Board();
  expect(b.validateMove({ row: 3, column: 1 })).toBeTruthy();
  expect(b.validateMove({ row: -1, column: 2 })).toBeTruthy();
  expect(b.validateMove({ row: 1, column: 3 })).toBeTruthy();
  expect(b.validateMove({ row: 0, column: 1 })).toBe(false);
  expect(b.validateMove({ row: 2, column: 0 })).toBe(false);
  expect(b.validateMove({ row: 1, column: 1 })).toBe(false);
});

test('validateMove checks square occupancy', () => {
  const b = new Board();
  b.squares[0][1] = 'X';
  b.squares[1][0] = 'O';
  b.squares[2][2] = 'X';
  expect(b.validateMove({ row: 0, column: 1 })).toBeTruthy();
  expect(b.validateMove({ row: 1, column: 0 })).toBeTruthy();
  expect(b.validateMove({ row: 2, column: 2 })).toBeTruthy();
  expect(b.validateMove({ row: 0, column: 2 })).toBe(false);
  expect(b.validateMove({ row: 2, column: 0 })).toBe(false);
  expect(b.validateMove({ row: 1, column: 1 })).toBe(false);
});

test('empty board shouldnt win', () => {
  const b = new Board();
  expect(b.checkWin()).toBe(undefined);
});

test('row should win', () => {
  const b = new Board();
  b.setMove('X', { row: 0, column: 0 });
  b.setMove('X', { row: 1, column: 0 });
  b.setMove('X', { row: 2, column: 0 });
  expect(b.checkWin()).toBe('X');
});

test('col should win', () => {
  const b = new Board();
  b.setMove('O', { row: 1, column: 0 });
  b.setMove('O', { row: 1, column: 1 });
  b.setMove('O', { row: 1, column: 2 });
  expect(b.checkWin()).toBe('O');
});

test('diag should win', () => {
  const b = new Board();
  b.setMove('O', { row: 2, column: 0 });
  b.setMove('O', { row: 1, column: 1 });
  b.setMove('O', { row: 0, column: 2 });
  expect(b.checkWin()).toBe('O');
});
