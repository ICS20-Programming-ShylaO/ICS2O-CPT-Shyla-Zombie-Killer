/* global Phaser */

// Copyright (c) 2020 Mr Coxall All rights reserved
//
// Created by: Mr Coxall
// Created on: Sep 2020
// Edited by: Shyla Oommen
// Edited on: Jun 2023
// This is the You Lose Scene

/** 
* This class is the You Lose Scene
*/
class YouLoseScene extends Phaser.Scene {
  /** 
  * This method is the constructor.
  */
  constructor() {
    super({key: "youLoseScene" })
    // constructing background
    this.youLoseSceneBackgroundImage = null
    // constructing background music
    this.youLoseMusic = null
    // constructing restart button
    this.restartButton = null
    // constructing menu button
    this.menuButton = null
    // constructing you lose header text and its style
    this.youLoseSceneText = null
    this.youLoseSceneTextStyle = { font: "180px palatino, Sans-Serif", fill: "#fde4b9", align: "center" }
  }

  /** 
  * Called by the Scene Manager when the scene starts,
  * before preload() and create()
  */
  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff")
  }

  /** 
  * Used to load assets.
  */
  preload() {
    console.log("You Lose Scene")
    // to load images
    this.load.image("youLoseSceneBackgroundImage", "./images/menuSceneImage.png")
    this.load.image("restartButton", "./images/restartButton.png")
    this.load.image("menuButton", "./images/menuButton.png")
    // AUDIO
    // background music
    this.load.audio("youLoseMusic", "./audio/youLoseMusic.mp3")
  }

  /** 
  * Used to create game objects
  */
  create(data) {
    // creating the background image and placing it into the scene with coordinates
    this.youLoseSceneBackgroundImage = this.add.sprite(0, 0, "youLoseSceneBackgroundImage").setScale(2.75)
    this.youLoseSceneBackgroundImage.x = 1920 / 2
    this.youLoseSceneBackgroundImage.y = 1080 / 2
    // creating background music
    this.youLoseMusic = this.sound.add("youLoseMusic")
    this.youLoseMusic.loop = true
    this.youLoseMusic.play()
    // creating you lose text
    this.youLoseSceneText = this.add.text((1920 / 2) - 960, (1080 / 2) - 530, "YOU LOSE!", this.youLoseSceneTextStyle).setOrigin(0.5)
    // animation found from: https://phaser.discourse.group/t/animate-text/4384 - badbrains
    // creating a container for the animation
    let container = this.add.container(400, 100, [this.youLoseSceneText])
    // to enable the body, making it able to move I think
    this.physics.world.enableBody(container)
    // setting container velocity to 100, 100
    container.body.setVelocity(100, 100)
    // setting bounce to 1, 1 (to retain 100% of its kinetic energy after bounce)
    container.body.setBounce(1, 1)
    // to set colliding world bounds so it doesn't leave the screen (for the bouncing)
    container.body.setCollideWorldBounds(true)

    // placing restart button into scene with coordinates
    this.restartButton = this.add.sprite(1920 / 2, (1080 / 2) + 75, "restartButton")
    // making restart button interactive using the hand cursor
    this.restartButton.setInteractive({ useHandCursor: true })
    // calling a new function when the button is clicked
    this.restartButton.on("pointerdown", () => this.clickRestart())

    // placing menu button into scene with coordinates
    this.menuButton = this.add.sprite(1920 / 2, (1080 / 2) + 150, "menuButton")
    // making restart button interactive using the hand cursor
    this.menuButton.setInteractive({ useHandCursor: true})
    // calling a new function when the button is clicked
    this.menuButton.on("pointerdown", () => this.clickMenu())
    
  }

  /** 
  * Once per game step while the scene is running using given variables, time and delta.
  */
  update(time, delta) {
    // pass
  }

  // if the restart button is clicked:
  clickRestart() {
    // pauses background music
    this.youLoseMusic.pause()
    this.youLoseMusic.loop = false
    // goes back to game scene
    this.scene.start("gameScene")
  }
  // if the restart button is clicked:
  clickMenu() {
    // pauses background music
    this.youLoseMusic.pause()
    this.youLoseMusic.loop = false
    // goes to menu
    this.scene.start("menuScene")
  }

}

export default YouLoseScene