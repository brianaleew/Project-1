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

  
   
   
// gameMessage.innerText = "click fight to begin"
// gameMessage.style.color = 'pink'

const playerStatus = () => {
    if(playerHealth > 0) {
        playerIcon.alive = true 
    } else {
        playerIcon.alive = false 
    }
} //NEED to set up player health 


////////// Player Icon/ Image /////////////
let img = new Image();

 // Player Object 

const playerIcon = {
    x: 125,
    y: 200,
    width: 50,
    height: 50,
    alive: true,
    render: function () {
        window.onload = function () {
    
            img.src = 'Images/8bit heart (project 1).png'; 
            // img.setAttribute('id', 'play-image')
           
            console.log(`player icon loaded`)
           
            img.onload = function () {
                fill_canvas(img);       
            }
        
            function fill_canvas(img) {
        
                ctx.drawImage(img, playerIcon.x, playerIcon.y, 50, 50); 
                // syntax (img, x, y, width, height)
                //check canvas crawler. need to define x and y!
        
            }
        }
    }

}

playerIcon.render()


  /////         Player Movement ////////
 function playerMovement(e) {
    console.log('Where is e?', e.keyCode)
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

// Player Health

 // projectile storage (array)
 const projArray = []
 // Making Projectiles
 class Projectile {
    constructor (x, y, dx, dy, width, height, radius, velocity) {
        this.x = x 
        this.y = 1
        this.dx = 2
        this.dy = -2 
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
        ctx.closePath()
        this.x += this.dx 
        this.y += this.dy 
    }
   
    update() {
        this.draw()
        this.y += this.velocity 
    }
        //(velocity = amount of pixels per interval)
    // projectiles appear at the top of the canvas and are stored in an array
    // then go down the y axis
    // go off screen and are taken out of storage
    // 
}

// Trying  to create 8 random projectiles
const projectileMaker = () => {

    for (let i = 0; i < 8; i++) {
        let randomNumber = Math.floor(Math.random() * 280)
        let randomProjectile = new Projectile(randomNumber, randomNumber, randomNumber, randomNumber, 10, 10, 8, 5)
        randomProjectile.draw()
        projArray.push(randomProjectile)
        // console.log(projArray)
        
        // console.log('hi')

        //
        // projectiles overlap! 
    }
}

                            //////// Hit Detector //////









// window.addEventListener('click', () => {
//     console.log('checking event listener') 
// })



//          RESET BUTTON ////

const reset = () => {

}



// start game loop that runs animation like cc
//projectile maker function stores projectile in array
// inside game loop, loop over projectile array, call the move/update function on each
// when proj hits bottom, splice out of array

//Game Loop

const gameLoop = () => {
    
    // check if player is alive
    // if alive make sure they arent getting hit
    if (playerStatus() === true) {
            //hit detector function here

    }
    // clear the canvas for better animation
    ctx.clearRect(0,0, gameplayArea.width, gameplayArea.height)
     // redisplay player
    playerIcon.render() 
     //loop over projectile array and call the update/move function 
    projArray.forEach((proj) => {
        proj.update()
        // console.log(projArray)
    })
        //  (velocity = amount of pixels per interval)
    

}
  gameLoop();  


// Event Listeners
fightBtn.addEventListener('click', projectileMaker)

const gameInterval = setInterval(gameLoop, 60)
const stopGameLoop = () => {clearInterval(gameInterval)}

document.addEventListener('DOMContentLoaded', function () {
    gameInterval
})


