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

    this.background = null
    this.shyla = null
    this.fireBullet = false
    
  }

  /** 
  * Called by the Scene Manager when the scene starts,
  * before preload() and create()
  */
  init(data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }

  /** 
  * Used to load assets.
  */
  preload() {
    console.log("Game Scene")

    this.load.image("gameBackground", "./assets/gameSceneBackground.png")
    this.load.image("shyla", "./assets/shylaWithGun.png")
    this.load.image("bullet", "./assets/bullet.png")
  }

  /** 
  * Used to create game objects
  */
  create(data) {
    this.background = this.add.image(0, 0, "gameBackground").setScale(2.0)
    this.background.setOrigin(0, 0)

    this.shyla = this.physics.add.sprite(1920 / 2, 1080 - 100, "shyla").setScale(5.0)

    this.bulletGroup = this.physics.add.group()
    // pass
  }

  /** 
  * Once per game step while the scene is running using given variables, time and delta.
  */
  update(time, delta) {
    //pass

    const keyLeftObj = this.input.keyboard.addKey("LEFT")
    const keyRightObj = this.input.keyboard.addKey("RIGHT")
    const keySpaceObj = this.input.keyboard.addKey("SPACE")

    if (keyLeftObj.isDown === true) {
      this.shyla.x -= 15
      if (this.shyla.x < 0) {
        this.shyla.x = 0
      }
    }

    if (keyRightObj.isDown === true) {
      this.shyla.x += 15
      if (this.shyla.x > 1920) {
        this.shyla.x = 1920
      }
    }

    if (keySpaceObj.isDown === true) {
      const aNewBullet = this.physics.add.sprite(this.shyla.x, this.shyla.y, "bullet").setScale(0.35)
      this.bulletGroup.add(aNewBullet)
    }
      
  }
}

export default GameScene