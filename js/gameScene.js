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
  constructor() {
    super({key: "gameScene" })
    // constructing background
    this.background = null
    // constructing player as shyla
    this.shyla = null
    // constructing bullet for later uses in space key
    this.fireBullet = false
    
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
    // load in background image for game
    this.load.image("gameBackground", "./assets/gameSceneBackground.png")
    // load in player as shyla
    this.load.image("shyla", "./assets/shylaWithGun.png")
    // load in bullet as the weapon
    this.load.image("bullet", "./assets/bullet.png")
  }

  /** 
  * Used to create game objects
  */
  create(data) {
    // creating background, placing it using coordinates and scale
    this.background = this.add.image(0, 0, "gameBackground").setScale(2.0)
    this.background.setOrigin(0, 0)
    // creating shyla, turning into a sprite
    this.shyla = this.physics.add.sprite(1920 / 2, 1080 - 100, "shyla").setScale(5.0)
    // creating bullet group for space key function
    this.bulletGroup = this.physics.add.group()
    // pass
  }

  /** 
  * Once per game step while the scene is running using given variables, time and delta.
  */
  update(time, delta) {
    // adding in left key from keyboard
    const keyLeftObj = this.input.keyboard.addKey("LEFT")
    // adding in right key from keyboard
    const keyRightObj = this.input.keyboard.addKey("RIGHT")
    // adding in space key from keyboard
    const keySpaceObj = this.input.keyboard.addKey("SPACE")
    // when left key is pressed, the player as shyla moves to the left
    if (keyLeftObj.isDown === true) {
      this.shyla.x -= 15
      if (this.shyla.x < 0) {
        this.shyla.x = 0
      }
    }
    // when right key is pressed, the player as shyla moves to the right
    if (keyRightObj.isDown === true) {
      this.shyla.x += 15
      if (this.shyla.x > 1920) {
        this.shyla.x = 1920
      }
    }
    // if space key is pressed, bullet appears
    if (keySpaceObj.isDown === true) {
      // if statement to prevent a spamming of the space key
      if (this.fireBullet === false) {
        // fire bullet
        this.fireBullet = true
        const aNewBullet = this.physics.add.sprite(this.shyla.x, this.shyla.y, "bullet").setScale(0.35)
      }
    }
    // if statement as a check to prevent spamming of the space key
    if (keySpaceObj.isUp === true) {
      this.fireBullet = false
    }
  }
}

export default GameScene