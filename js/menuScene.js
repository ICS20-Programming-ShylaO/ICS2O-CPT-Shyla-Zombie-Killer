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
    // constructing background image for menu
    this.menuSceneBackgroundImage = null
    // constructing start button
    this.startButton = null
    // constructing instruction button
    this.instructionButton = null
    
    // constructing menu text
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
    // loading in menu background image
    this.load.image("menuSceneBackground", "./assets/menuSceneImage.png")
    // loading in start button
    this.load.image("startButton", "./assets/start.png")
    // loading in instructions button
    this.load.image("instructionButton", "./assets/instruction.png")

    // AUDIO
    // loading in background music
    this.load.audio("menuMusic", "./assets/menuMusic.mp3")
  }

  /** 
  * Used to create game objects
  */
  create(data) {
    // creating the background image and placing it in the scene, with coordinates and scale size
    this.menuSceneBackgroundImage = this.add.sprite(0, 0, "menuSceneBackground").setScale(2.75)
    this.menuSceneBackgroundImage.x = 1920 / 2
    this.menuSceneBackgroundImage.y = 1080 / 2
    // creating menu text and placing it into the scene to say "Menu"
    this.menuSceneText = this.add.text(1920 / 2, (1080 / 2) + 350, "Menu", this.menuSceneTextStyle).setOrigin(0.5)
    // creating background music
    const menuMusic = this.sound.add("menuMusic")
    menuMusic.loop = true
    menuMusic.play()
    // for start button
    // creating start button and placing it into the scene using coordinates
    this.startButton = this.add.sprite(1920 / 2, (1080 / 2) + 75, "startButton")
    // making the start button interactive using the hand cursor
    this.startButton.setInteractive({ useHandCursor: true })
    // creating a function for when the start button is clicked
    this.startButton.on("pointerdown", () => this.clickStart())
    // for instruction button
    // creating instuctions button and placing it into the scene using coordinates
    this.instructionButton = this.add.sprite(1920 / 2, (1080 / 2) + 200, "instructionButton")
    // making the button interactive using the hand cursor
    this.instructionButton.setInteractive({ useHandCursor: true })
    // creating a function for when the instruction button is clicked
    this.instructionButton.on("pointerdown", () => this.clickInstruct())
    // pass
  }

  /** 
  * Once per game step while the scene is running using given variables, time and delta.
  */
  update(time, delta) {
    //pass
  }
  // if start button is clicked:
  clickStart() {
    // pauses background music
    menuMusic.pause()
    // goes to game scene to start the game
    this.scene.start("gameScene")
  }
  // if instruction button is clicked:
  clickInstruct() {
    // pauses background music
    menuMusic.pause()
    // go to instructions scene
    this.scene.start("instructionScene")
  }
}

export default MenuScene