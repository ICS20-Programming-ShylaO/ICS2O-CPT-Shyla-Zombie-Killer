/* global Phaser */

// Copyright (c) 2020 Mr Coxall All rights reserved
//
// Created by: Mr Coxall
// Created on: Sep 2020
// Edited by: Shyla Oommen
// Edited on: Jun 2023
// This is the Splash Scene

/** 
* This class is the Splash Scene
*/
class SplashScene extends Phaser.Scene {
  /** 
  * This method is the constructor.
  */
  constructor() {
    super({key: "splashScene" })
    // constructing background image
    this.splashSceneBackgroundImage = null
  }

  /** 
  * Called by the Scene Manager when the scene starts,
  * before preload() and create()
  */
  init(data) {
    // setting background color of scene
    this.cameras.main.setBackgroundColor("0d0106")
  }

  /** 
  * Used to load assets.
  */
  preload() {
    console.log("Splash Scene")
    // loading in splash scene background image
    this.load.image("splashSceneBackground", "./images/splashSceneImage.png")
  }

  /** 
  * Used to create game objects
  */
  create(data) {
    // creating background image with coordinates
    this.splashSceneBackgroundImage = this.add.sprite(0, 0, "splashSceneBackground")
    this.splashSceneBackgroundImage.x = 1920 / 2
    this.splashSceneBackgroundImage.y = 1080 / 2
    // pass
  }

  /** 
  * Once per game step while the scene is running using given variables, time and delta.
  */
  update(time, delta) {
    //switching to the title scene after 4 seconds
    if (time > 4000) {
      this.scene.switch("titleScene")
    }
  }
}

export default SplashScene