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

//    const beginFight = () => {
//         const projectiles = new 

//    }
   
   
//                 fightBtn.addEventListener('click', beginFight)
// gameMessage.innerText = "click fight to begin"
// gameMessage.style.color = 'pink'

                            //Game Loop

// /  ////////// Player Icon/ Image /////////////


window.onload = function () {
    let img = new Image();
    img.src = 'Images/8bit heart (project 1).png';
   
console.log(`loaded`)
   
    img.onload = function () {
        fill_canvas(img);       
    }

    function fill_canvas(img) {

        ctx.drawImage(img, 120, 200, 50, 50); 

    }
}
  /////         Player Movement ////////
 const playerMovement = (e) => {
    switch (e.keyCode) {
        case (87):
        case (38):

            img.y -= 10
            
            break
        
        case (65):
        case (37):
            img.x -= 10
            break
     
        case (83):
        case (40):
            img.y += 10
            break
     
        case (68):
        case (39):
            img.x += 10
            break    
    }
 }






// Trying to create Projectiles for player to dodge

class Projectile {
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

// const projectileUno = new projectile(120, 123, 10, 40, 8, 50)
// projectileUno.draw()

// const projectileDos = new projectile(140, 150, 10, 40, 8, 50)
// projectileDos.draw()


// Trying  to create 8 random projectiles
// const projectileMaker = () => {
//     for (let i = 0; i < 8; i++) {
//         let randomNumber = Math.floor(Math.random() * 120)
//         let randomProjectile = new Projectile(x * randomNumber, y * randomNumber, 10, 10, 8, 50)
//     }
// }

// projectileMaker()



                            //////// Hit Detector //////


// window.addEventListener('click', () => {
//     console.log('yerrrr') 
// })


document.addEventListener('DOMContentLoaded', function () {
    
    document.addEventListener('keydown', playerMovement)
   
    // setInterval(gameLoop, 60)
})

