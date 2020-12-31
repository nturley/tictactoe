const inquirer = require('inquirer');
const { Board } = require('./board');

const Player = {
  X: 'X',
  O: 'O'
}

async function getPlayerInput(player, board) {
  // request user input until move is valid
  while (true) {
    console.log(`game: Player ${player} - enter move`)
    let { row, column } = await inquirer.prompt([{
      type: 'number',
      name: 'row'
    },
    {
      type: 'number',
      name: 'column'
    }]);
    const errorMessage = board.validateMove({ row, column });
    if (errorMessage) {
      console.log('Invalid Move:', errorMessage);
    }
    else {
      return { row, column };
    }
  }
}

async function main() {
  try {
    const board = new Board();
    board.displayBoard();
    const move = await getPlayerInput(Player.X, board);
    board.setMove(Player.X, move);
    board.displayBoard();
  } catch (e) {
    console.log(e);
  }
}
main();
