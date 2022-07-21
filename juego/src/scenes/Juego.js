import Phaser from "phaser";
import { Prin } from "./Prin";
import { Conf } from "./Conf";
import { Puntajes } from "./Puntajes";

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
  scene: [Prin, Conf, Puntajes]
};
// eslint-disable-next-line
const game = new Phaser.Game(config);
