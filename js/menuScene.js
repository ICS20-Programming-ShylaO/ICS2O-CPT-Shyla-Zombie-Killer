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
    this.instructionsButton = null
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
    this.load.image("menuSceneBackground", "./assets/titleScreenImage.jpg")
    this.load.image("startButton", "./assets/start.png")
  }

  /** 
  * Used to create game objects
  */
  create(data) {
    this.titleSceneBackgroundImage = this.add.sprite(0, 0, "menuSceneBackground").setScale(6.75)
    this.titleSceneBackgroundImage.x = 1920 / 2
    this.titleSceneBackgroundImage.y = 1080 / 2

    this.startButton = this.add.sprite(1920 / 2, (1080 / 2) + 100, "startButton")
    this.startButton.setInteractive({ useHandCursor: true })
    this.startButton.on("pointerdown", () => this.clickButton())
    // pass
  }

  /** 
  * Once per game step while the scene is running using given variables, time and delta.
  */
  update(time, delta) {
    //pass
  }

  clickButton() {
    this.scene.start("gameScene")
  }
}

export default MenuScene