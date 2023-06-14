/* global Phaser */

// Copyright (c) 2020 Mr Coxall All rights reserved
//
// Created by: Mr Coxall
// Created on: Sep 2020
// Edited by: Shyla Oommen
// Edited on: Jun 2023
// This is the You Win Scene

/** 
* This class is the You Win Scene
*/
class YouWinScene extends Phaser.Scene {
  /** 
  * This method is the constructor.
  */
  constructor() {
    super({key: "youWinScene" })
    // constructing background
    this.youWinSceneBackgroundImage = null
    // constructing background music
    this.youWinMusic = null
    // constructing restart button
    this.restartButton = null
    // constructing menu button
    this.menuButton = null
    // constructing you lose header text and its style
    this.youWinSceneText = null
    this.youWinSceneTextStyle = { font: "180px palatino, Sans-Serif", fill: "#fde4b9", align: "center" }
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
    console.log("You Win Scene")
    // to load images
    this.load.image("youWinSceneBackgroundImage", "./images/menuSceneImage.png")
    this.load.image("restartButton", "./images/restartButton.png")
    this.load.image("menuButton", "./images/menuButton.png")
    // AUDIO
    // background music
    this.load.audio("youWinMusic", "./audio/youWinMusic.mp3")
  }

  /** 
  * Used to create game objects
  */
  create(data) {
    // creating the background image and placing it into the scene with coordinates
    this.youWinSceneBackgroundImage = this.add.sprite(0, 0, "youWinSceneBackgroundImage").setScale(2.75)
    this.youWinSceneBackgroundImage.x = 1920 / 2
    this.youWinSceneBackgroundImage.y = 1080 / 2
    // creating background music
    this.youWinMusic = this.sound.add("youWinMusic")
    this.youWinMusic.loop = true
    this.youWinMusic.play()

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
    
    // placing you win text into scene with coordinates
    this.youWinSceneText = this.add.text((1920 / 2), (1080 / 2) - 350, "YOU WIN!", this.youWinSceneTextStyle).setOrigin(0.5)

  }

  /** 
  * Once per game step while the scene is running using given variables, time and delta.
  */
  update(time, delta) {
    // to increment the angle by 1 (rotate the text)
    this.youWinSceneText.angle += 1;
  }

  // if the restart button is clicked:
  clickRestart() {
    // pauses background music
    this.youWinMusic.pause()
    this.youWinMusic.loop = false
    // goes back to game scene
    this.scene.start("gameScene")
  }
  // if the restart button is clicked:
  clickMenu() {
    // pauses background music
    this.youWinMusic.pause()
    this.youWinMusic.loop = false
    // goes to menu
    this.scene.start("menuScene")
  }

}

export default YouWinScene