// https://rails.devcamp.com/modern-javascript/185/how-to-swap-variable-values-javascript-variable-deconstruction



// want to swap values????
// old way -----------------------------------------------
let activePlayer = 'Kanta';
let otherPlayer = 'Aya';
 
// temp variables
let tempActivePlayer = activePlayer;
let tempOtherPlayer = otherPlayer;

activePlayer = tempOtherPlayer;
otherPlayer = tempActivePlayer;

console.log(`
  Active Player: ${activePlayer}
  Other Player: ${otherPlayer}
  `);
 


// modern way -----------------------------------------------

let playerOne = 'Koji';
let playerTwo = 'Mako';


// variable deconstuction
[playerOne, playerTwo] = [playerTwo, playerOne];

console.log(`
Player One: ${playerOne}
Player Two: ${playerTwo}
`);



