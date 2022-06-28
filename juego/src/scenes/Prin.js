import Phaser from "phaser";

export class Prin extends Phaser.Scene {
  constructor() {
    super({ key: "Prin", active: true });
  }

  preload() {
    this.load.image("bg", "assets/sprites/principal.png");
    this.load.image("tlt", "assets/sprites/titulo.png");
    this.load.image("iz", "assets/sprites/iz.png");
    this.load.spritesheet("au", "assets/sprites/agu.png", { frameWidth: 200, frameHeight: 200 });
    this.load.spritesheet("sol", "assets/sprites/sol.png", { frameWidth: 200, frameHeight: 200 });
    this.load.spritesheet("gal", "assets/sprites/gal.png", { frameWidth: 100, frameHeight: 100 });
    this.load.spritesheet("sat", "assets/sprites/sat.png", { frameWidth: 300, frameHeight: 300 });
    this.load.spritesheet("tie", "assets/sprites/tie.png", { frameWidth: 100, frameHeight: 100 });
    this.load.spritesheet("ovni", "assets/sprites/ovni.png", { frameWidth: 84.28, frameHeight: 59 });
    this.load.spritesheet("can", "assets/sprites/can.png", { frameWidth: 200.5, frameHeight: 190 });
  }

  create() {
    const aguAnim = this.anims.create({
      key: "gir",
      frames: this.anims.generateFrameNumbers("au"),
      frameRate: 16
    });
    const solAnim = this.anims.create({
      key: "sol",
      frames: this.anims.generateFrameNumbers("sol"),
      frameRate: 8
    });
    const galAnim = this.anims.create({
      key: "gal",
      frames: this.anims.generateFrameNumbers("gal"),
      frameRate: 8
    });
    const satAnim = this.anims.create({
      key: "sat",
      frames: this.anims.generateFrameNumbers("sat"),
      frameRate: 8
    });
    const tieAnim = this.anims.create({
      key: "tie",
      frames: this.anims.generateFrameNumbers("tie"),
      frameRate: 8
    });
    const ovniAnim = this.anims.create({
      key: "ovni",
      frames: this.anims.generateFrameNumbers("ovni"),
      frameRate: 8
    });

    this.add.image(0, 0, "bg").setDisplayOrigin(0, 0);
    this.add.image(200, 0, "tlt").setDisplayOrigin(0, 0).setScale(0.5);
    this.add.image(10, 10, "iz").setDisplayOrigin(0, 0).setScale(0.2);
    //  this.add.image(700, 400, "can").setDisplayOrigin(0, 0).setScale(0.5);

    const spriteAu = this.add.sprite(100, 100, "au").setScale(0.5);
    spriteAu.play({ key: "gir", repeat: -1 });

    const spriteSol = this.add.sprite(100, 300, "sol").setScale(0.5);
    spriteSol.play({ key: "sol", repeat: -1 });

    const spriteGal = this.add.sprite(100, 500, "gal").setScale(0.8);
    spriteGal.play({ key: "gal", repeat: -1 });

    const spriteSat = this.add.sprite(300, 100, "sat").setScale(0.5);
    spriteSat.play({ key: "sat", repeat: -1 });

    const spriteTie = this.add.sprite(300, 300, "tie").setScale(0.5);
    spriteTie.play({ key: "tie", repeat: -1 });

    const spriteOvni = this.add.sprite(500, 300, "ovni").setScale(0.5);
    spriteOvni.play({ key: "ovni", repeat: -1 });

    this.bot = this.add.sprite(600, 500, "can").setInteractive().setScale(0.2);
    this.bot.on("pointerover", () => {
      this.bot.setFrame(1);
    });
    this.bot.on("pointerout", () => {
      this.bot.setFrame(0);
    });
    this.bot.on("pointerdown", () => {
      alert("hola");
    });
  }
}
