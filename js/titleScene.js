/* global Phaser */

// Copyright (c) 2020 Mr Coxall All rights reserved
//
// Created by: Mr Coxall
// Created on: Sept 2020
// Edited by: Shyla Oommen
// Edited on: June 2023
// This is the Title Scene

// using the built-in functions that the Phaser already has
class TitleScene extends Phaser.Scene {
  constructor () {
    super({key: TitleScene })
  }

  init (data) {
    // setting background color to black
    this.cameras.main.setBackgroundColor("#ffffff")
  }

  preload () {
    console.log("Title Scene")
  }

  create (data) {
  }

  update (time, delta) {
  }
}

export default TitleScene