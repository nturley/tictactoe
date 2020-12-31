const inquirer = require('inquirer');

const Player = {
  X: 'X',
  O: 'O'
}

async function getPlayerInput(player) {
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
    // TODO add validation that move is valid
    return { row, column };
  }
}

async function main() {
  try {
    console.log(await getPlayerInput(Player.X));
    console.log(await getPlayerInput(Player.Y));
  } catch (e) {
    console.log(e);
  }
}
main();
