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
}