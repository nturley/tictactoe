exports.Board = class Board {
  constructor() {
    this.squares = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ];
  }

  validateMove(move) {
    // returns error message if move is invalid
    // otherwise returns false
    const outOfBoundsMessage = 'Move is outside of board boundaries';
    if (move.row < 0) return outOfBoundsMessage;
    if (move.column < 0) return outOfBoundsMessage;
    if (move.row >= this.squares.length) return outOfBoundsMessage;
    // each row is the same length
    if (move.column >= this.squares[0].length) return outOfBoundsMessage;
    const occupiedMessage = 'position is already occupied';
    // space is empty
    if (this.squares[move.row][move.column] !== ' ') return occupiedMessage;
    return false;
  }

  displayBoard() {
    console.log(this.squares.map(row => row.join('|')).join('\n'))
  }

  setMove(player, move) {
    this.squares[move.row][move.column] = player;
  }

  winRow() {
    // all rows in some column match
    for (let col = 0; col < 3; col += 1) {
      const r0 = this.squares[0][col];
      if (r0 !== this.squares[1][col]) continue;
      if (r0 !== this.squares[2][col]) continue;
      if (r0 !== ' ') return r0;
    }
    return ' ';
  }

  winCol() {
    // all columns in some row match
    for (let row = 0; row < 3; row += 1) {
      const c0 = this.squares[row][0];
      if (c0 !== this.squares[row][1]) continue;
      if (c0 !== this.squares[row][2]) continue;
      if (c0 !== ' ') return c0;
    }
    return ' ';
  }

  winDownDiag() {
    const d0 = this.squares[0][0];
    if (d0 !== this.squares[1][1]) return ' ';
    if (d0 !== this.squares[2][2]) return ' ';
    return d0;
  }

  winUpDiag() {
    const d0 = this.squares[2][0];
    if (d0 !== this.squares[1][1]) return ' ';
    if (d0 !== this.squares[0][2]) return ' ';
    return d0;
  }

  checkWin() {
    let winConditions = [this.winCol(), this.winRow(), this.winUpDiag(), this.winDownDiag()]
    return winConditions.find(s => s !== ' ');
  }
}