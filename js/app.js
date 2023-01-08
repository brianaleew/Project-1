//console.log("testing")

// //////////////MVP Requirements ////////////////

// player should be able to click the fight button to begin the game (more button options later)
// player should be able to move their heart icon with W,A,S,D
// Lose health when contact is made by the heart icon and a projectile
//Display a Winner message after x number of rounds of projectiles have been dodged successfully



//step one: grab all elements we need 
const gamePage = document.getElementsById('game-page')
const gameplayArea = document.getElementById('canvas')
const fightBtn = document.getElementById('fight-button')
const mercyBtn = document.getElementById('mercy-button')
const actBtn = document.getElementById('act-button')
const resetBtn = document.getElementById('reset-button')
const playerHealth = document.getElementById('health-bar')
const totalHealth = document.getElementById('health-counter')
const gameMessage = document.getElementById('game-message')
const enemyText = document.getElementById('bubble-text')


console.log(gameplayArea)
// CANVAS SETUP
const ctx = gameplayArea.getContext('2d')

gameplayArea.setAttribute('width', getComputedStyle(gameplayArea)['width'])
gameplayArea.setAttribute('height', getComputedStyle(gameplayArea)['height'])

// gameMessage.innerText = "click fight to begin"
gameMessage.style.color = 'white'
gameMessage.style.fontSize = '30px'
enemyText.innerText = `I'm Bill Cypher, your worst nightmare!!`

//Round Tracker Function (keeps track of the current round)
const roundCounter = () => {

    let currentRound = round
    console.log('the current round is', currentRound)
    
}


////////// Player Icon/ Image /////////////

//  Player Class and Player Movement

class PlayerIcon {
    constructor(x, y, width, height, direction)
   { this.x = 125
    this.y = 200
    this.width = 50
    this.height = 50
    this.alive = true 
    this.speed = 15
    this.hit = false 
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
      
    }
}

const playerIcon = new PlayerIcon()
playerIcon.render()


// Game Start Function (sets major constant variables and triggers game loop)
// function gameStart () {
    let round = 1
    //current health is linked to beginning health and starts at 
    let beginningHealth = 20
    let currentHealth = beginningHealth
    
    let beginningHealthBarLength = 50
    let currentPlayerHealthBarLength = beginningHealthBarLength
    playerHealth.style.width = `${currentPlayerHealthBarLength}px`
    let hit = playerIcon.hit
 //   gameLoop()
//}

// Player Health

const healthTracker = () => {
    //start with 20 health and 50px long health bar 
    
    // if player collides with projectile then
    // const playerHit = () => {
    //take damage
    // display a difference in hp in two ways
    // 1. health counter goes down by two
     //2.hp bar gets smaller by 10px
    currentHealth = currentHealth - 4
    totalHealth.textContent = `${currentHealth}`
    console.log('health tracker runs')
           
    currentPlayerHealthBarLength = currentPlayerHealthBarLength - 10
    playerHealth.style.width = `${currentPlayerHealthBarLength}px`
    console.log(`got hit`)
    console.log('this is currentHealth',currentHealth)
    console.log('this is player width',playerHealth.style.width)

    if(currentHealth <= 0) {
        playerIcon.alive = false
        playerHealth.style.width = '10px'
                
    }
    
       

}

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
        this.velocity = velocity //velocity equal to the amount of pixels per interval
        this.color = 'black' 
        this.alive = true 
        this.hit = true
       
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
       
    
}  

// Trying  to create 6 random projectiles
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
        healthTracker()
        console.log('HIT!')
        thing.alive = false

    }

}

//Button Sequences

const mercySequence = () => {
     //once the mercy button is hit

     //increase round counter by one
     // a message saying what you did appears
     const playerAction = () => {gameMessage.innerText = 'You told him you are a pacifist...'}
    setTimeout(playerAction, 1000)
     // that message clears after _____ (a click maybe or a timer)
     
     // a new message with the bosses response 
     const enemyAction = () => {enemyText.innerText = 'How about you calmly dodge my projectiles!'}
     setTimeout(enemyAction, 3000)
     // after a click or timer the fight begins!
     setTimeout(projectileMaker, 4000)
     const enemyFinal = () => {
        if(playerIcon.alive === true) {
        enemyText.innerText = 'Have you been doing yoga?'
        round ++
     }
    }
    setTimeout(enemyFinal, 8000)
}

const actSequence = () => {
    // once the act button is hit 

    // increase round counter by one


    // a message saying what you did appears
   const playerAction = () => {gameMessage.innerText = 'You told him a joke...'}
   setTimeout(playerAction, 1000)
    // that message clears after _____ (a click maybe or a timer)
    // a new message with the bosses response 
    const enemyAction = () => {enemyText.innerText = 'What did you say about my mother?!'}
    setTimeout(enemyAction, 3000)
    // after a click or timer the fight begins!
    setTimeout(projectileMaker, 4000)
    const enemyFinal = () => {
        if(playerIcon.alive === true) {
        enemyText.innerText = 'Hmm...Maybe you do have a point about her'
        round ++
     }
    }
    setTimeout(enemyFinal, 8000)
}

const fightSequence = () => {
    // once the act button is hit 

    // increase round counter by one


    // a message saying what you did appears
   const playerAction = () => {gameMessage.innerText = 'You showed him your muscles...'}
   setTimeout(playerAction, 1000)
    // that message clears after _____ (a click maybe or a timer)
    // a new message with the bosses response 
    const enemyAction = () => {enemyText.innerText = 'HAHAHA you think you can beat me?!'}
    setTimeout(enemyAction, 3000)
    // after a click or timer the fight begins!
    setTimeout(projectileMaker, 4000)
    const enemyFinal = () => {
        if(playerIcon.alive === true) {
        enemyText.innerText = 'Eh, youre alright.'
        round ++
     }
    }
    setTimeout(enemyFinal, 8000)
    
}




//Game Loop (Handles animation, game status, player status, projectile behavior)
// start game loop that runs animation like cc
//projectile maker function stores projectile in array
// inside game loop, loop over projectile array, call the move/update function on each
// when proj hits bottom, splice out of array
const gameLoop = () => {
    //checks the round
    roundCounter()


    //run through the loop normally unless we hit round 4
    //if we get to round 4, display winning message, enemy message and stop the loop
    if (round === 5 && playerIcon.alive === true) {
        gameMessage.innerText = 'You won!'
        enemyText.innerText = 'You are stronger than I thought...I WILL be back!'
        stopGameLoop()
        setTimeout(stopGameLoop, 4000)
        //maybe add automatic reset thorough reset function??
    }
    
    // check if player is alive
    // if alive make sure they arent getting hit
    if (playerIcon.alive === true) {
            //hit detector function here
            hitDetector(Projectile)

    } else {
        gameMessage.textContent = 'You Lose'
        enemyText.innerText = 'Wow you really suck at this!'
        stopGameLoop()
    }
    // clear the canvas for better animation
    ctx.clearRect(0,0, gameplayArea.width, gameplayArea.height)
     // redisplay player
    console.log('rendering player') //take out later
    playerIcon.render()
    playerIcon.playerMovement() 
    //  healthTracker(playerIcon)

    //loop over projectile array and call the update/move function 
    projArray.forEach((proj) => {
        proj.update()
        hitDetector(proj)
        
        //delete all projs if they hit bottom of screen
        // or they hit the playerIcon
        
        if (proj.y > 280) {
            projArray.splice(0, Infinity)
            console.log(projArray)
        } 
        if (proj.alive === false){
            let spliceIndex = projArray.indexOf(proj);
            if (spliceIndex > -1) {
            projArray.splice(spliceIndex, 1)
            console.log(projArray)
            }
        }
    })

    

}
  gameLoop();  

  //Game Loop Stop and Interval 
const gameInterval = setInterval(gameLoop, 60)
const stopGameLoop = () => {clearInterval(gameInterval)}


// Event Listeners


//Movement Event Listeners
document.addEventListener('keydown', (e) => {
    playerIcon.setDirection(e.key)
})

document.addEventListener('keyup', (e) => {
    if(['w', 'a', 's', 'd'].includes(e.key)) {
        playerIcon.unsetDirection(e.key)
    }
    
})

// Button Event Listeners 
fightBtn.addEventListener('click', fightSequence)

actBtn.addEventListener('click', actSequence)

mercyBtn.addEventListener('click', mercySequence)
//reset button here
resetBtn.addEventListener('click', function () { 
 // (taunt player then put beginning enemy text)
    enemyText.innerText = `Can't handle the heat?`
    // Tell player they restarted the game then erase
    gameMessage.innerText = 'You restarted the game'
    const reload = () => {
         window.location.reload();
    return false 

    }
    setTimeout(reload, 2000)
   
    
}) 



document.addEventListener('DOMContentLoaded', function () {
    gameInterval
})

// startBtn.addEventListener('click', loadGamePage)





// To do list 
//either add start screen or add instructions to the game message area
//possible plan set game page div to display hidden


