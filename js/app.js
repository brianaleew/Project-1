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
const gameMessage = document.getElementById('game-message')

console.log(gameplayArea)
// CANVAS SETUP
const ctx = gameplayArea.getContext('2d')

gameplayArea.setAttribute('width', getComputedStyle(gameplayArea)['width'])
gameplayArea.setAttribute('height', getComputedStyle(gameplayArea)['height'])
// Getting Image



// Player Icon 

// const player = {
//     x: 20,
//     y: 20,
//     width: 50,
//     height: 50, 
//     alive: true, 
//     render: function () {
        
//         let img = new Image()
// img.src = 'Images/8bit heart (project 1).png'


//         fill_gameplayArea(img);
//         ctx.drawImage(img,this.x, this.y)


//     }


// }

// player.render()



// gameMessage.innerText = "click fight to begin"
// gameMessage.style.color = 'pink'

// /  ////////// Player Icon/ Image /////////////

window.onload = function () {
   
    let img = new Image();
    img.src = 'Images/8bit heart (project 1).png';

   
    img.onload = function () {
        fill_canvas(img);       
    }

    function fill_canvas(img) {

        ctx.drawImage(img, 120, 200, 50, 50); 
              
    }
}