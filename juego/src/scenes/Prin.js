import Phaser from "phaser";

export class Prin extends Phaser.Scene {
  constructor() {
    super({ key: "Prin", active: true });
  }

  preload() {
    this.load.image("bg", "assets/sprites/bg.jpg");
    this.load.spritesheet("au", "assets/sprites/agu.png", { frameWidth: 200, frameHeight: 200 });
  }

  create() {
    const aguAnim = this.anims.create({
      key: "gir",
      frames: this.anims.generateFrameNumbers("au"),
      frameRate: 16
    });

    this.add.image(0, 0, "bg").setDisplayOrigin(0, 0);
    const sprite = this.add.sprite(100, 100, "au").setScale(0.5);
    sprite.play({ key: "gir", repeat: -1 });
  //  this.add.image(0, 0, "bg").setDisplayOrigin(0, 0);
    // alert("hola prin");
  }
}
