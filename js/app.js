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


// Player Icon 

const player = {
    x: 20,
    y: 20,
    width: 50,
    height: 50, 
    color: 'black',
    alive: true, 
    render: function () {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)


    }


}

player.render()


// gameMessage.innerText = "click fight to begin"
// gameMessage.style.color = 'pink'