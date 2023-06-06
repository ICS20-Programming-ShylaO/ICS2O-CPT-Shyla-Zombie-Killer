/* global Phaser */

// Copyright (c) 2020 Mr Coxall All rights reserved
//
// Created by: Mr Coxall
// Created on: Sep 2020
// Edited by: Shyla Oommen
// Edited on: Jun 2023
// This is the Menu Scene

/** 
* This class is the Menu Scene
*/
class MenuScene extends Phaser.Scene {
  /** 
  * This method is the constructor.
  */
  constructor() {
    super({key: "menuScene" })

    this.menuSceneBackgroundImage = null
    this.startButton = null
    this.instructionButton = null

    this.menuSceneText = null
    this.menuSceneTextStyle = { font: "180px palatino, Sans-Serif", fill: "#fde4b9", align: "center" }
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
    console.log("Menu Scene")
    this.load.image("menuSceneBackground", "./assets/menuSceneImage.png")
    this.load.image("startButton", "./assets/start.png")
    this.load.image("instructionButton", "./assets/instruction.png")
  }

  /** 
  * Used to create game objects
  */
  create(data) {
    this.menuSceneBackgroundImage = this.add.sprite(0, 0, "menuSceneBackground").setScale(2.75)
    this.menuSceneBackgroundImage.x = 1920 / 2
    this.menuSceneBackgroundImage.y = 1080 / 2

    this.menuSceneText = this.add.text(1920 / 2, (1080 / 2) + 350, "Menu", this.menuSceneTextStyle).setOrigin(0.5)

    this.startButton = this.add.sprite(1920 / 2, (1080 / 2) + 75, "startButton")
    this.startButton.setInteractive({ useHandCursor: true })
    this.startButton.on("pointerdown", () => this.clickStart())

    this.instructionButton = this.add.sprite(1920 / 2, (1080 / 2) + 200, "instructionButton")
    this.instructionButton.setInteractive({ useHandCursor: true })
    this.instructionButton.on("pointerdown", () => this.clickInstruct())
    // pass
  }

  /** 
  * Once per game step while the scene is running using given variables, time and delta.
  */
  update(time, delta) {
    //pass
  }

  clickStart() {
    this.scene.start("gameScene")
  }

  clickInstruct() {
    this.scene.start("instructionScene")
  }
}

export default MenuScene