/* global Phaser */

// Copyright (c) 2020 Mr Coxall All rights reserved
//
// Created by: Mr Coxall
// Created on: Sep 2020
// Edited by: Shyla Oommen
// Edited on: Jun 2023
// This is the Game Scene

/** 
* This class is the Game Scene
*/
class GameScene extends Phaser.Scene {
  /** 
  * This method is the constructor.
  */
  // create a zombie
  createZombie () {
    // x coordinate to be random from 1 to 1920
    const zombieXLocation = Math.floor(Math.random() * 1920) + 1
    // x velocity set to random from 1 to 50
    let zombieXVelocity = Math.floor(Math.random() * 50) + 1
    // this will add minus sign in 50% of cases
    zombieXVelocity *= Math.round(Math.random()) ? 1: -1
    // actually creating a zombie as a sprite, giving a random x coordinate
    const aZombie = this.physics.add.sprite(zombieXLocation, -100, "zombie").setScale(0.5)
    // setting vertical velocity to 200
    aZombie.body.velocity.y = 200
    // setting horizontal velocity to a random velocity
    aZombie.body.velocity.x = zombieXVelocity
    // adding the individual zombie to the zombie group
    this.zombieGroup.add(aZombie)
  }
  
  constructor() {
    super({key: "gameScene" })
    // constructing background
    this.background = null
    // constructing background music
    this.gameSceneMusic = null
    // constructing player as shyla
    this.shyla = null
    // constructing bullet for later uses in space key
    this.fireBullet = false
    // constructing score as 0
    this.score = 0
    // constructing score text and its style
    this.scoreText = null
    this.scoreTextStyle = { font: "65px Arial", fill: "#ffffff", align: "center" }
    // constructing life as 3
    this.life = 3
    // constructing life text and its style
    this.lifeText = null
    this.lifeTextStyle = { font: "65px Arial", fill: "#ffffff", align: "center" }
    // constructing game over text and its style
    this.gameOverText = null
    this.gameOverText = { font: "65px Arial", fill: "#ff0000", align: "center" }
    
  }

  /** 
  * Called by the Scene Manager when the scene starts,
  * before preload() and create()
  */
  init(data) {
    // to set background color
    this.cameras.main.setBackgroundColor("ffffff")
  }

  /** 
  * Used to load assets.
  */
  preload() {
    console.log("Game Scene")
    // IMAGES
    // load in background image for game
    this.load.image("gameBackground", "./images/gameSceneBackground.png")
    // load in player as shyla
    this.load.image("shyla", "./images/shylaWithGun.png")
    // load in bullet as the weapon
    this.load.image("bullet", "./images/bullet.png")
    // load in zombie
    this.load.image("zombie", "./images/zombie.png")
    
    // AUDIO
    // load in gun sound
    this.load.audio("gunshot", "./audio/gunshot.mp3")
    // load in zombie hurt sound
    this.load.audio("zombieHurt", "./audio/zombieHurt.mp3")
    // load in zombie eat sound
    this.load.audio("zombieEat", "./audio/zombieEat.mp3")
    // load in background music
    this.load.audio("backgroundMusic", "./audio/backgroundMusic.mp3")
  }

  /** 
  * Used to create game objects
  */
  create(data) {
    // creating background, placing it using coordinates and scale
    this.background = this.add.image(0, 0, "gameBackground").setScale(2.0)
    this.background.setOrigin(0, 0)
    // creating text for the score
    this.scoreText = this.add.text(10, 10, "Score: " + this.score.toString(), this.scoreTextStyle)
    // text for the # of lives
    this.lifeText = this.add.text(1685, 10, "Lives: " + this.life.toString(), this.lifeTextStyle)
    // creating shyla, turning into a sprite
    this.shyla = this.physics.add.sprite(1920 / 2, 1080 - 100, "shyla").setScale(5.0)
    // creating bullet group for space key function
    this.bulletGroup = this.physics.add.group()
    // creating a group for zombies
    this.zombieGroup = this.add.group()
    this.createZombie()

    // creating background music
    this.gameSceneMusic = this.sound.add("backgroundMusic")
    this.gameSceneMusic.loop = true;
    this.gameSceneMusic.play()
    
    // collision between bullets and zombies
    this.physics.add.collider(this.bulletGroup, this.zombieGroup, function (bulletCollide, zombieCollide) {
      // destroying the zombie and bullet that collided
      zombieCollide.destroy()
      bulletCollide.destroy()
      // playing the zombie hurt sound
      this.sound.play("zombieHurt")
      // incrementing score by 10
      this.score += 10
      // adding it to the string
      this.scoreText.setText("Score: " + this.score.toString())
      // condition when player wins the game (when they kill 50 zombies)
      if (this.score === 300) {
        // everything pauses
        this.physics.pause()
        // music pauses (to avoid overlap)
        this.gameSceneMusic.pause()
        // restarting score and life in case if player wants to play again
        this.score = 0
        this.life = 3
        // goes to win scene
        this.scene.start("youWinScene")
      }
      // creating two zombies for every zombie killed
      this.createZombie()
      this.createZombie()
    }.bind(this))

    // collision between shyla and zombie
    this.physics.add.collider(this.shyla, this.zombieGroup, function (shylaCollide, zombieCollide) {
      // playing the zombie eat sound
      this.sound.play("zombieEat")
      // zombie that collided with player gets destroyed
      zombieCollide.destroy()
      // decrement life by 1
      this.life --
      // add new value of life to the text
      this.lifeText.setText("Lives: " + this.life.toString())
      // condition when player loses (when they lose all 3 lives)
      if (this.life === 0) {
        // everything pauses
        this.physics.pause()
        // music pauses to avoid overlap
        this.gameSceneMusic.pause()
        // restarting score and life in case if player wants to play again
        this.score = 0
        this.life = 3
        // goes to lose scene
        this.scene.start("youLoseScene")
      }
    }.bind(this))
  }

  /** 
  * Once per game step while the scene is running using given variables, time and delta.
  */
  update(time, delta) {
    // adding in left key from keyboard
    const keyLeftObj = this.input.keyboard.addKey("LEFT")
    // adding in right key from keyboard
    const keyRightObj = this.input.keyboard.addKey("RIGHT")
    // adding in up key from keyboard
    const keyUpObj = this.input.keyboard.addKey("UP")
    // adding in down key from keyboard
    const keyDownObj = this.input.keyboard.addKey("DOWN")
    // adding in space key from keyboard
    const keySpaceObj = this.input.keyboard.addKey("SPACE")

    // if statement to automatically spawn a zombie every 7 seconds
    if (time % 7 == 0) {
      this.createZombie()
    }
    // when left key is pressed, the player as shyla moves to the left
    if (keyLeftObj.isDown === true) {
      this.shyla.x -= 15
      if (this.shyla.x < 0) {
        this.shyla.x = 0
      }
    }
    // condition to prevent the player from falling through the screen
    if (this.shyla.y > 1080) {
        this.shyla.y = 1080
      }
    // when right key is pressed, the player as shyla moves to the right
    if (keyRightObj.isDown === true) {
      this.shyla.x += 15
      if (this.shyla.x > 1920) {
        this.shyla.x = 1920
      }
    }
    // when up key is pressed, the player as shyla moves up
    if (keyUpObj.isDown === true) {
      this.shyla.y -= 15
      if (this.shyla.y < 0) {
        this.shyla.y = 0
      }
    }
    // when down key is pressed, the player as shyla moves down
    if (keyDownObj.isDown === true) {
      this.shyla.y += 15
    }
    // if space key is pressed, bullet appears
    if (keySpaceObj.isDown === true) {
      // if statement to prevent a spamming of the space key
      if (this.fireBullet === false) {
        // fire bullet
        this.fireBullet = true
        // creating the bullet fired when space key has been pressed, giving its spawn coordinates wherever the player is
        const aNewBullet = this.physics.add.sprite(this.shyla.x, this.shyla.y, "bullet").setScale(0.35)
        // adding the bullet fired to the bullet group
        this.bulletGroup.add(aNewBullet)
        // playing the gunshot sound
        this.sound.play("gunshot")
      }
    }
    // if statement as a check to prevent spamming of the space key
    if (keySpaceObj.isUp === true) {
      this.fireBullet = false
    }
    // giving direction to the bullets (up)
    this.bulletGroup.children.each (function (item) {
      item.y -= 15
      // condition to destroy any bullet out of the screen (y-coordinate is negative)
      if (item.y < 0) {
        item.destroy()
      }
    })
  }
}

export default GameScene