import Phaser from "phaser";
import { Prin } from "./Prin";
import { Cuadrados } from "./Cuadrados";
import { Puntajes } from "./Puntajes";
import { Union } from "./Union";
import { Ordenar } from "./Ordenar";
import { Colocar } from "./Colocar";
import { Flechas } from "./Flechas";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: "#71a08b",
  parent: "jue",
  pixelArt: true,
  physics: {
    default: "arcade"
  },
  scale: {
    mode: Phaser.Scale.EXACT_FIT,
    autoCenter: Phaser.Scale.NONE,
  },
  scene: [Prin, Cuadrados, Puntajes, Union, Ordenar, Colocar, Flechas]
};
// eslint-disable-next-line
const game = new Phaser.Game(config);
