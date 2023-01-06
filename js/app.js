//console.log("testing")

// //////////////MVP Requirements ////////////////

// player should be able to click the fight button to begin the game (more button options later)
// player should be able to move their heart icon with W,A,S,D
// Lose health when contact is made by the heart icon and a projectile
//Display a Winner message after 20 projectiles have been dodged successfully



//step one: grab all elements we need 

const gameplayArea = document.getElementById('canvas')
const fightBtn = document.getElementById('fight-button')
const mercyBtn = document.getElementById('mercy-button')
const actBtn = document.getElementById('act-button')
const resetBtn = document.getElementById('reset-button')
const playerHealth = document.getElementById('health-bar')
const totalHealth = document.getElementById('health-counter')
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
// let img = new Image();

//  Player Object and Player Movement

class PlayerIcon {
    constructor(x, y, width, height, direction)
   { this.x = 125
    this.y = 200
    this.width = 50
    this.height = 50
    this.alive = true
    this.speed = 15
    this.direction = {
        up: false,
        down: false, 
        left: false,
        right:false

    } 
    }
    
    setDirection = function (key) {
        console.log('this is the key in setDirection', key)
        if (key.toLowerCase() == 'w') { this.direction.up = true }
        if (key.toLowerCase() == 'a') { this.direction.left = true }
        if (key.toLowerCase() == 's') { this.direction.down = true }
        if (key.toLowerCase() == 'd') { this.direction.right = true }
    }
    unsetDirection = function (key) {
        console.log('this is the key in unsetDirection', key)
        if (key.toLowerCase() == 'w') { this.direction.up = false }
        if (key.toLowerCase() == 'a') { this.direction.left = false }
        if (key.toLowerCase() == 's') { this.direction.down = false }
        if (key.toLowerCase() == 'd') { this.direction.right = false }
    }


    playerMovement = function () {
        
        if (this.direction.up) {
            this.y -= this.speed
        
        if (this.y <= 0) {
            this.y = 0
            }
        }
        if (this.direction.left) {
            this.x -= this.speed
        if (this.x <= 0) {
            this.x = 0
            }
        }
        if (this.direction.down) {
            this.y += this.speed
            
        if (this.y + this.height >= gameplayArea.height) {
           this.y = gameplayArea.height - this.height
            }
        }
        if (this.direction.right) {
            this.x += this.speed
        if (this.x + this.width >= gameplayArea.width) {
            this.x = gameplayArea.width - this.width
            }
        }
    }
    render = function () {
        const playerIcon = new Image();
        playerIcon.onload = () => {
        ctx.drawImage(
        playerIcon,
        this.x,
        this.y,
        50,
        50

        )
}
playerIcon.src = 'Images/8bit heart (project 1).png'
        // window.onload = function () {
    
        //     img.src = 'Images/8bit heart (project 1).png'; 
        //     // img.setAttribute('id', 'play-image')
           
        //     console.log(`player icon loaded`)
           
        //     // img.onload = function () {
        //     //     fill_canvas(img);       
        //     // }
        
            
        // }
    }
}

// function fill_canvas(img) {
        
//     ctx.drawImage(img, playerIcon.x, playerIcon.y, 50, 50); 
//     // syntax (img, x, y, width, height)
//     //check canvas crawler. need to define x and y!

// }
const playerIcon = new PlayerIcon()
playerIcon.render()



  /////         Player Movement ////////
//  function playerMovement(e) {
//     console.log('Where is e?', e.keyCode)
//     switch (e.keyCode) {
//         case (87):
//         case (38):

//         playerIcon.y -= 10
            
//             break
        
//         case (65):
//         case (37):
//             playerIcon.x -= 10
//             break
     
//         case (83):
//         case (40):
//             playerIcon.y += 10
//             break
     
//         case (68):
//         case (39):
//             playerIcon.x += 10
//             break    
//     }
//  }

// Player Health

const healthTracker = () => {
    // if player collides with projectile then
   
    // display a difference in hp 
    // health counter goes down by two
    //hp bar get smaller

    // let beginningHealth = 20
    // let totalHealth
    // 
     // if(hitDetector === true) {
    // totalHealth.innerText = `${beginnerHealth} - 2`
    // console.log(totalHealth)
    playerHealth.width = 
    console.log(`health stuff`)
   // }

}
healthTracker()

 // projectile storage (array)
 const projArray = []
 // Making Projectiles
 class Projectile {
    constructor (x, width, height, radius, velocity) {
        this.x = x 
        this.y = 1
        this.dx = 0
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

    for (let i = 0; i < 6; i++) {
        let randomNumber = Math.floor(Math.random() * 280)
        let randomProjectile = new Projectile(randomNumber, 10, 10, 6, 10)
        randomProjectile.draw()
        projArray.push(randomProjectile)
        // console.log(projArray)
        
        // console.log('hi')

        //
        // projectiles overlap! 
    }
}

////// Hit Detector //////

  function hitDetector (thing) {
//the big if statement

 if (playerIcon.x < thing.x + thing.width
    && playerIcon.x + playerIcon.width > thing.x
    && playerIcon.y < thing.y + thing.height
    && playerIcon.y + playerIcon.height > thing.y) {
        console.log('HIT!')
        thing.alive = false
    }

}



const mercySequence = () => {
     //once the mercy button is hit
     // a message saying what you did appears
     // that message clears after _____ (a click maybe or a timer)
     // a new message with the bosses response 
     // after a click or timer the fight begins!
}

const actSequence = () => {
    // once the act button is hit 
    // a message saying what you did appears
    // that message clears after _____ (a click maybe or a timer)
    // a new message with the bosses response 
    // after a click or timer the fight begins!

}


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
    if (playerIcon.alive === true) {
        
            //hit detector function here
            hitDetector(Projectile)

    }
    // clear the canvas for better animation
    ctx.clearRect(0,0, gameplayArea.width, gameplayArea.height)
     // redisplay player
     console.log('rendering player')
     playerIcon.render()
     playerIcon.playerMovement() 
     //loop over projectile array and call the update/move function 
    projArray.forEach((proj) => {
        proj.update()
        hitDetector(proj)
        // console.log(projArray)
        if (proj.y > 280) {
            projArray.splice(0, Infinity)
            console.log(projArray)
        }
    })
//(velocity = amount of pixels per interval)
    

}
  gameLoop();  


// Event Listeners

document.addEventListener('keydown', (e) => {
    playerIcon.setDirection(e.key)
})

document.addEventListener('keyup', (e) => {
    if(['w', 'a', 's', 'd'].includes(e.key)) {
        playerIcon.unsetDirection(e.key)
    }
    
})


fightBtn.addEventListener('click', projectileMaker)
//resetBtn.addEventListener('click', reset) still need to write out reset function
// actBtn.addEventListener('click', actSequence)
// need act function written
// mercyBtn.addEventListener('click', mercySequence)
//need act function written
const gameInterval = setInterval(gameLoop, 60)
const stopGameLoop = () => {clearInterval(gameInterval)}

document.addEventListener('DOMContentLoaded', function () {
    gameInterval
})


// tonight I 
// added mercy and act buttons and their event listeners