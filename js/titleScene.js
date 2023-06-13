/* global Phaser */

// Copyright (c) 2020 Mr Coxall All rights reserved
//
// Created by: Mr Coxall
// Created on: Sep 2020
// Edited by: Shyla Oommen
// Edited on: Jun 2023
// This is the Title Scene

/** 
* This class is the Title Scene
*/
class TitleScene extends Phaser.Scene {
  /** 
  * This method is the constructor.
  */
  constructor() {
    super({key: "titleScene" })
    // constructing background image
    this.titleSceneBackgroundImage = null
    // constructing title text and style
    this.titleSceneText = null
    this.titleSceneTextStyle = { font: "180px palatino, Sans-Serif", fill: "#fde4b9", align: "center" }
  }

  /** 
  * Called by the Scene Manager when the scene starts,
  * before preload() and create()
  */
  init(data) {
    // setting background color
    this.cameras.main.setBackgroundColor("ffffff")
  }

  /** 
  * Used to load assets.
  */
  preload() {
    console.log("Title Scene")
    // loading in background image
    this.load.image("titleSceneBackground", "./images/menuSceneImage.png")
  }

  /** 
  * Used to create game objects
  */
  create(data) {
    // creating background image and placing it into the scene
    this.titleSceneBackgroundImage = this.add.sprite(0, 0, "titleSceneBackground").setScale(2.75)
    this.titleSceneBackgroundImage.x = 1920 / 2
    this.titleSceneBackgroundImage.y = 1080 / 2
    // creating and placing the title text into the scene
    this.titleSceneText = this.add.text(1920 / 2, (1080 / 2) + 350, "Shyla the Zombie Killer", this.titleSceneTextStyle).setOrigin(0.5)
    // pass
  }

  /** 
  * Once per game step while the scene is running using given variables, time and delta.
  */
  update(time, delta) {
    //switching to the menu scene after 6000
    if (time > 6000) {
      this.scene.switch("menuScene")
    }
  }
}

export default TitleScene