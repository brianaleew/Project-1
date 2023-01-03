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

                // Set up Fight Button

   const beginFight = () => {
        const projectiles = new 

   }
   
   
                fightBtn.addEventListener('click', beginFight)
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


// Trying to create Projectiles for player to dodge

class projectile {
    constructor (x, y, width, height, radius, velocity) {
        this.x = x
        this.y = y 
        this.width = width 
        this.height = height 
        this.radius = radius 
        this.velocity = velocity 
        this.color = 'black' 
       
    }
    draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI *2, false)
        ctx.fillStyle = this.color
        ctx.fill()
    }
   
}

const projectileUno = new projectile(123, 123, 123, 123, 123, 123)




// window.addEventListener('click', () => {
//     console.log('yerrrr') 
// })




