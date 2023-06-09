/* global Phaser */

// Copyright (c) 2020 Mr Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// Edited by: Shyla Oommen
// Edited on: Jun 2023
// This is the Phaser3 configuration file

// scene import statements
import SplashScene from "./splashScene.js"
import TitleScene from "./titleScene.js"
import MenuScene from "./menuScene.js"
import GameScene from "./gameScene.js"
import InstructionScene from "./instructionScene.js"
import YouLoseScene from "./youLoseScene.js"
import YouWinScene from "./youWinScene.js"

// create the new scenes
const splashScene = new SplashScene()
const titleScene = new TitleScene()
const menuScene = new MenuScene()
const gameScene = new GameScene()
const instructionScene = new InstructionScene()
const youLoseScene = new YouLoseScene()
const youWinScene = new YouWinScene()

/** 
* Start Phaser Game
*/

//* Game scene */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: "arcade",
    arcade: {
      debug: false
    },
  },
  // set background color
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    // we place it in the middle of the page
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}

const game = new Phaser.Game(config)

// load scenes
// Note: remember any "key" is global and cannot be reused!
game.scene.add("splashScene", splashScene)
game.scene.add("titleScene", titleScene)
game.scene.add("menuScene", menuScene)
game.scene.add("gameScene", gameScene)
game.scene.add("instructionScene", instructionScene)
game.scene.add("youLoseScene", youLoseScene)
game.scene.add("youWinScene", youWinScene)

// the start scene
game.scene.start("splashScene")
