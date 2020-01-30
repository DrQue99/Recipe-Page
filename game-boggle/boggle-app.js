//import JS dicitonary Set 

//Make list of dice to be rolled
const diceList = [
    'rifobx', 'ifehey', 'denows', 'utoknd',
    'hmsrao', 'lupets', 'acitoa', 'ylgkue',
    'Qbmjoa', 'ehispn', 'vetign', 'baliyt',
    'exavnd', 'ralesc', 'uwilrg', 'pacemd'
    ];
//create function to roll dice 
let rolledDie = []; //declarerolled die as global variable to keep from submitting duplicate dice onto board;

function rollDice(array) {
//select random die

let randomDie = array[Math.floor(Math.random() * 16)];
console.log(randomDie);

//need to find a way to remove array items that have already been output by this function
let rolledDieList = rolledDie.concat(randomDie);
if (!rolledDieList.includes(randomDie)) {
    rollDice(array)
} 
 console.log(rolledDie);
// random die has already been remove from array

//randomly select letter on die to be displayed
let randomLetter = randomDie[Math.floor(Math.random() * 6)];
console.log(randomLetter)
// if Q add u
if (randomLetter === 'Q') {
    randomLetter = 'Qu'
}
  return rolledDieList
}
console.log(rollDice(diceList));

console.log(rollDice(diceList));

console.log(rollDice(diceList));

console.log(rollDice(diceList));




// and match with each random die with its displaying letter

//create board locations with matching buttons from html

//use rollDice function to output randomely selected letter on buttons on game board. 

