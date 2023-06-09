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
    this.load.image("youLoseSceneBackgroundImage", "./assets/menuSceneImage.png")
    this.load.image("restartButton", "./assets/restartButton.png")
    this.load.image("menuButton", "./assets/menuButton.png")
  }

  /** 
  * Used to create game objects
  */
  create(data) {
    // creating the background image and placing it into the scene with coordinates
    this.youLoseSceneBackgroundImage = this.add.sprite(0, 0, "youLoseSceneBackgroundImage").setScale(2.75)
    this.youLoseSceneBackgroundImage.x = 1920 / 2
    this.youLoseSceneBackgroundImage.y = 1080 / 2
    // placing you lose text into scene with coordinates
    this.youLoseSceneText = this.add.text(1920 / 2, (1080 / 2) + 400, "YOU LOSE!", this.youLoseSceneTextStyle).setOrigin(0.5)

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
    // goes back to game scene
    this.scene.start("gameScene")
  }
  // if the restart buton is clicked:
  clickMenu() {
    // goes to menu
    this.scene.start("menuScene")
  }

}

export default YouLoseScene