import Phaser from "phaser";
import { principal } from "./principal.js";
import { configuracion } from "./configuracion.js";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: "#640000",
  // parent: "phaser-example",
  scene: [principal, configuracion]
};

// eslint-disable-next-line
const game = new Phaser.Game(config);

function al() {
  alert("Hola menu");
}
al();
