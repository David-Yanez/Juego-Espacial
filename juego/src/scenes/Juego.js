import Phaser from "phaser";
import { Prin } from "./Prin";
import { Conf } from "./Conf";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: "#71a08b",
  parent: "jue",
  pixelArt: true,
  scale: {
    mode: Phaser.Scale.EXACT_FIT,
    autoCenter: Phaser.Scale.NONE,
  },
  scene: [Prin, Conf]
};
// eslint-disable-next-line
const game = new Phaser.Game(config);
