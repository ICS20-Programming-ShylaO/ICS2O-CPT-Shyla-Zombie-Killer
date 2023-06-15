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
    // creating background
    this.instructionSceneBackgroundImage = null
    // creating background music
    this.instructionMusic = null
    // creating back button
    this.backButton = null

    // creating instruction header text
    this.instructionSceneText = null
    this.instructionSceneTextStyle = { font: "180px palatino, Sans-Serif", fill: "#fde4b9", align: "center" }

    // creating explanation text, each number dictating the line
    this.explanationSceneText1 = null
    this.explanationSceneText2 = null
    this.explanationSceneText3 = null
    this.explanationSceneText4 = null
    this.explanationSceneText5 = null
    this.explanationSceneText6 = null
    this.explanationSceneText7 = null
    this.explanationSceneTextStyle = { font: "50px palatino, Sans-Serif", fill: "#fde4b9", backgroundColor: "#000000", align: "center" }
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
    // to load images
    this.load.image("instructionSceneBackgroundImage", "./images/menuSceneImage.png")
    this.load.image("backButton", "./images/back.png")
    // AUDIO
    // to load background music
    this.load.audio("instructionMusic", "./audio/menuMusic.mp3")
  }

  /** 
  * Used to create game objects
  */
  create(data) {
    // creating the background image and placing it into the scene
    this.instructionSceneBackgroundImage = this.add.sprite(0, 0, "instructionSceneBackgroundImage").setScale(2.75)
    this.instructionSceneBackgroundImage.x = 1920 / 2
    this.instructionSceneBackgroundImage.y = 1080 / 2
    // creating background music
    this.instructionMusic = this.sound.add("instructionMusic")
    this.instructionMusic.loop = true
    this.instructionMusic.play()
    // placing instruction text into scene with coordinates
    this.instructionSceneText = this.add.text(1920 / 2, (1080 / 2) + 400, "Instructions", this.instructionSceneTextStyle).setOrigin(0.5)
    // placing explanation texts into scenes with coordinates, one for each line
    // line 1
    this.explanationSceneText1 = this.add.text(1920 / 2, (1080 / 2) - 350, "You play as Shyla Oommen, the best marksman of the west, who is surviving", this.explanationSceneTextStyle).setOrigin(0.5)
    // line 2
    this.explanationSceneText2 = this.add.text(1920 / 2, (1080 / 2) - 275, "through the great zombie apocalypse. You gain 10 points for each time", this.explanationSceneTextStyle).setOrigin(0.5)
    // line 3
    this.explanationSceneText3 = this.add.text(1920 / 2, (1080 / 2) - 200, "you successfully shoot a zombie, lose one of your three total lives when", this.explanationSceneTextStyle).setOrigin(0.5)
    // line 4
    this.explanationSceneText4 = this.add.text(1920 / 2, (1080 / 2) - 125, "hit by a zombie, and get a game over screen when you lose all three lives,", this.explanationSceneTextStyle).setOrigin(0.5)
    // line 5
    this.explanationSceneText5 = this.add.text(1920 / 2, (1080 / 2) - 50, "which you can try again.", this.explanationSceneTextStyle).setOrigin(0.5)
    // line 6
    this.explanationSceneText6 = this.add.text(1920 / 2, (1080 / 2) + 25, "Kill 5 zombies to win!!", this.explanationSceneTextStyle).setOrigin(0.5)
    // line 7, instructions for buttons and their controls
    this.explanationSceneText7 = this.add.text(1920 / 2, (1080 / 2) + 200, "Use the arrow keys to move around and the space key to shoot.", this.explanationSceneTextStyle).setOrigin(0.5)
    // placing back button into scene with coordinates
    this.backButton = this.add.sprite(1920 / 2, (1080 / 2) + 100, "backButton")
    // making back button interactive using the hand cursor
    this.backButton.setInteractive({ useHandCursor: true })
    // creating a function when the button is clicked
    this.backButton.on("pointerdown", () => this.clickBack())
  }

  /** 
  * Once per game step while the scene is running using given variables, time and delta.
  */
  update(time, delta) {
    //pass
  }
  // if the back button is clicked:
  clickBack() {
    // pauses background music
    this.instructionMusic.pause()
    this.instructionMusic.loop = false
    // goes back to the menu
    this.scene.start("menuScene")
  }

}

export default InstructionScene