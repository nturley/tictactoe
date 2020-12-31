const { Board } = require('./board');

test('constructor initializes squares with 3 blank rows and columns', () => {
  const b = new Board();
  expect(b.squares.length).toBe(3);
  b.squares.forEach(row => {
    expect(row.length).toBe(3);
    row.forEach(s => {
      expect(s).toBe('')
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
