/* global Phaser */

// Copyright (c) 2020 Mr Coxall All rights reserved
//
// Created by: Mr Coxall
// Created on: Sept 2020
// Edited by: Shyla Oommen
// Edited on: June 2023
// This is the Splash Scene

// using the built-in functions that the Phaser already has
class SplashScene extends Phaser.Scene {
  constructor () {
    super({key: SplashScene })

    this.splashSceneBackgroundImage = null
  }

  init (data) {
    // setting background color to white
    this.cameras.main.setBackgroundColor("#ffffff")
  }

  preload () {
    console.log("SplashScene")
    this.load.image("splashSceneBackground", "./assets/immaculata_logo_crop.png")
  }

  create (data) {
    this.splashSceneBackgroundImage = this.add.sprite(
      0,
      0,
      "splashSceneBackground"
    )
      this.splashSceneBackgroundImage.x = 1920 / 2
      this.splashSceneBackgroundImage.y = 1080 / 2
  }
  // to change to the title scene
  update (time, delta) {
    if (time > 5000) {
      this.scene.switch("titleScene")    
    }
  }
}

export default SplashScene