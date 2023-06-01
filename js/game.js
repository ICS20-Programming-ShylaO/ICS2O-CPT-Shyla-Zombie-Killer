/* global Phaser */

// Copyright (c) 2020 Mr Coxall All rights reserved
//
// Created by: Mr Coxall
// Created on: Sept 2020
// Edited by: Shyla Oommen
// Edited on: June 2023
// This is the Phaser3 configuration file

// to reference to the splash scene and title scene
import SplashScene from './splashScene.js'
import TitleScene from './titleScene.js'

// Our game scenes, to connect all scene files to this file
const splashScene = new SplashScene()
const titleScene = new TitleScene()
//* Game scene */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    }
  },
  backgroundColor: 0x5f6e7a, 
  scale: {
    mode: Phaser.Scale.FIT,
    //we place it in the middle of the screen
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}

const game = new Phaser.Game(config)

// load scenes
// NOTE:remember any "key" is global and CAN NOT be reused!
game.scene.add('splashScene', splashScene)
game.scene.add('titleScene', titleScene)

// start title scene
game.scene.start('splashScene')
