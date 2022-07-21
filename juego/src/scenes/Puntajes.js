import Phaser from "phaser";

export class Puntajes extends Phaser.Scene {
  constructor() {
    super({ key: "Punt" });
  }

  preload() {
    this.load.image("marco", "assets/sprites/UI/marco.png");
    this.load.image("estrellas", "assets/sprites/UI/estrellas.png");
    this.load.spritesheet("listo", "assets/sprites/UI/listo.png", { frameWidth: 197.5, frameHeight: 188 });
    this.load.spritesheet("repetir", "assets/sprites/UI/repetir.png", { frameWidth: 198, frameHeight: 195 });
  }

  create() {
    this.add.image(240, 130, "marco").setDisplayOrigin(0, 0).setScale(0.5);
    this.add.image(270, 150, "estrellas").setDisplayOrigin(0, 0).setScale(0.3);

    this.listo = this.add.sprite(450, 500, "listo").setInteractive().setScale(0.2);
    this.listo.on("pointerover", () => {
      this.listo.setFrame(1);
    });
    this.listo.on("pointerout", () => {
      this.listo.setFrame(0);
    });
    this.listo.on("pointerdown", () => {
    //  this.listo.start("Prin");
    });
  }
}
