import Phaser from "phaser";
export class configuracion extends Phaser.Scene {
  constructor() {
    super({ key: "configuracion", active: true });
  }

  preload() {

  }

  Create() {
    alert("Escena 2");
  }
}
