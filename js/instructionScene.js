/* global Phaser */

// Copyright (c) 2020 Mr Coxall All rights reserved
//
// Created by: Mr Coxall
// Created on: Sep 2020
// Edited by: Shyla Oommen
// Edited on: Jun 2023
// This is the Instruction Scene

/** 
* This class is the Instruction Scene
*/
class InstructionScene extends Phaser.Scene {
  /** 
  * This method is the constructor.
  */
  constructor() {
    super({key: "instructionScene" })

    this.instructionSceneBackgroundImage = null
    this.backButton = null

    this.instructionSceneText = null
    this.instructionSceneTextStyle = { font: "180px palatino, Sans-Serif", fill: "#fde4b9", align: "center" }
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
    console.log("Instruction Scene")
    this.load.image("instructionSceneBackgroundImage", "./assets/menuSceneImage.png")
    this.load.image("backButton", "./assets/back.png")
  }

  /** 
  * Used to create game objects
  */
  create(data) {
    this.instructionSceneBackgroundImage = this.add.sprite(0, 0, "instructionSceneBackgroundImage").setScale(2.75)
    this.instructionSceneBackgroundImage.x = 1920 / 2
    this.instructionSceneBackgroundImage.y = 1080 / 2

    this.instructionSceneText = this.add.text(1920 / 2, (1080 / 2) + 350, "Shyla the Zombie Killer", this.instructionSceneTextStyle).setOrigin(0.5)

    this.backButton = this.add.sprite(1920 / 2, (1080 / 2) + 75, "backButton")
    this.backButton.setInteractive({ useHandCursor: true })
    this.backButton.on("pointerdown", () => this.clickBack())

    // pass
  }

  /** 
  * Once per game step while the scene is running using given variables, time and delta.
  */
  update(time, delta) {
    //pass
  }

  clickBack() {
    this.scene.start("menuScene")
  }

}

export default InstructionScene