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
  }

  init (data) {
    // setting background color to black
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    console.log('SplashScene')
  }

  create (data) {
  }
  // to change to the title scene
  update (time, delta) {
    this.scene.switch('titleScene')
  }
}

export default SplashScene