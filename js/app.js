//console.log("testing")

// //////////////MVP Requirements ////////////////

// player should be able to click the fight button to begin the game (more button options later)
// player should be able to move their heart icon with W,A,S,D
// Lose health when contact is made by the heart icon and a projectile
//Display a Winner message after 20 projectiles have been dodged successfully



//step one: grab all elements we need 

const gameplayArea = document.getElementById('canvas')
const fightBtn = document.getElementById('fight-button')
const resetBtn = document.getElementById('reset-button')
const playerHealth = document.getElementById('health-bar')
const gameText = document.getElementById('player-message')