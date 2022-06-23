import Phaser from "phaser";
export class principal extends Phaser.Scene {
  constructor() {
    super({ key: "principal", active: true });
  }

  preload() {
    // this.load.image("bg", "assets/sprites/principal.png");
    // this.load.image("bg", "assets/contra/espa.jpg");
  }

  Create() {
    // this.add.image(0, 0, "bg");
    alert("hola");
  }
}
