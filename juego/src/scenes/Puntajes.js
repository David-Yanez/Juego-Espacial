import Phaser from "phaser";
import { Puntajee, letras } from "./RegisPuntos";

export class Puntajes extends Phaser.Scene {
  constructor() {
    super({ key: "Punt" });
  }

  preload() {
    this.load.image("marco", "assets/sprites/UI/marco.png");
    this.load.image("fondo", "assets/sprites/UI/fondo.png");
    this.load.image("estrellas", "assets/sprites/UI/estrellas.png");
    this.load.spritesheet("listo", "assets/sprites/UI/listo.png", { frameWidth: 197.5, frameHeight: 188 });
    this.load.spritesheet("repetir", "assets/sprites/UI/repetir.png", { frameWidth: 198, frameHeight: 195 });
    this.load.image("estrella1", "assets/sprites/UI/estrella1.png");
    this.load.image("estrella2", "assets/sprites/UI/estrella2.png");
    this.load.image("tit", "assets/sprites/UI/tit.png");

    // Letras
    this.load.image("es", "assets/sprites/titulo/es.png");
    this.load.image("pa", "assets/sprites/titulo/pa.png");
    this.load.image("ci", "assets/sprites/titulo/ci.png");
    this.load.image("a", "assets/sprites/titulo/a.png");
    this.load.image("l", "assets/sprites/titulo/l.png");
  }

  create(data) {
    this.puntaje = 10 * data.punt;
    this.letras = data.letra;
    this.nomJuego = data.nomb;
    this.min = data.time;
    this.musicaIcono = data.musicaIcono;
    this.intentos = data.Intentos;
    this.aciertos = data.Aciertos;
    // this.sce = data.sce;
    let valorLetra;
    let estrellas;

    this.add.image(0, 0, "fondo").setDisplayOrigin(0, 0);
    this.add.image(240, 130, "marco").setDisplayOrigin(0, 0).setScale(0.5);
    this.add.image(270, 150, "estrellas").setDisplayOrigin(0, 0).setScale(0.3);
    this.add.image(210, 70, "tit").setDisplayOrigin(0, 0).setScale(0.5);

    this.repetir = this.add.sprite(330, 510, "repetir").setInteractive().setScale(0.3);
    this.repetir.on("pointerover", () => {
      this.repetir.setFrame(1);
    });
    this.repetir.on("pointerout", () => {
      this.repetir.setFrame(0);
    });
    this.repetir.on("pointerdown", () => {
      this.scene.start(data.sce);
    });

    this.listo = this.add.sprite(450, 510, "listo").setInteractive().setScale(0.3);
    this.listo.on("pointerover", () => {
      this.listo.setFrame(1);
    });
    this.listo.on("pointerout", () => {
      this.listo.setFrame(0);
    });
    this.listo.on("pointerdown", () => {
      this.scene.start("Prin", { valLetra: valorLetra, letr: data.letra, musicaIcono: this.musicaIcono });
      console.log(valorLetra + " " + data.letra);
      Puntajee(this.nomJuego, this.min, this.puntaje, estrellas, this.intentos, this.aciertos);
      letras(data.letra, valorLetra);
    });

    // this.add.text(260, 350, "Letras \nObtenidas: ", { fontFamily: "Times New Roman", fontSize: 12, color: "#1337ad" });
    if (this.puntaje === 0) {
      valorLetra = 0.2;
      estrellas = 0;
    } if (this.puntaje > 0 && this.puntaje <= 90) {
      this.add.image(276, 197, "estrella1").setDisplayOrigin(0, 0).setScale(0.3);
      valorLetra = 0.2;
      estrellas = 1;
    } if (this.puntaje > 90 && this.puntaje <= 120) {
      this.add.image(276, 197, "estrella1").setDisplayOrigin(0, 0).setScale(0.3);
      this.add.image(317, 181, "estrella1").setDisplayOrigin(0, 0).setScale(0.3);
      valorLetra = 0.2;
      estrellas = 2;
    } if (this.puntaje > 120 && this.puntaje <= 150) {
      this.add.image(276, 197, "estrella1").setDisplayOrigin(0, 0).setScale(0.3);
      this.add.image(317, 181, "estrella1").setDisplayOrigin(0, 0).setScale(0.3);
      this.add.image(359, 159, "estrella1").setDisplayOrigin(0, 0).setScale(0.4);
      estrellas = 3;
      valorLetra = 0.2;
    } if (this.puntaje > 150 && this.puntaje <= 210) {
      this.add.image(276, 197, "estrella1").setDisplayOrigin(0, 0).setScale(0.3);
      this.add.image(317, 181, "estrella1").setDisplayOrigin(0, 0).setScale(0.3);
      this.add.image(359, 159, "estrella1").setDisplayOrigin(0, 0).setScale(0.4);
      this.add.image(414, 181, "estrella1").setDisplayOrigin(0, 0).setScale(0.3);
      this.add.image(355, 400, this.letras).setDisplayOrigin(0, 0).setScale(0.4);
      valorLetra = 1;
      estrellas = 4;
    } if (this.puntaje > 210) {
      this.add.image(355, 400, this.letras).setDisplayOrigin(0, 0).setScale(0.4);
      this.add.image(276, 197, "estrella1").setDisplayOrigin(0, 0).setScale(0.3);
      this.add.image(317, 181, "estrella1").setDisplayOrigin(0, 0).setScale(0.3);
      this.add.image(359, 159, "estrella1").setDisplayOrigin(0, 0).setScale(0.4);
      this.add.image(414, 181, "estrella1").setDisplayOrigin(0, 0).setScale(0.3);
      this.add.image(457, 196, "estrella1").setDisplayOrigin(0, 0).setScale(0.3);
      valorLetra = 1;
      estrellas = 5;
    }

    /* this.add.image(276, 197, "estrella1").setDisplayOrigin(0, 0).setScale(0.3);
    this.add.image(317, 181, "estrella1").setDisplayOrigin(0, 0).setScale(0.3);
    this.add.image(359, 159, "estrella1").setDisplayOrigin(0, 0).setScale(0.4);
    this.add.image(414, 181, "estrella1").setDisplayOrigin(0, 0).setScale(0.3);
    this.add.image(457, 196, "estrella1").setDisplayOrigin(0, 0).setScale(0.3); */

    this.punt = this.add.text(260, 250, "Puntaje: ", { font: "15px Arial Black", fill: "#fff" });
    this.punt.setStroke("#4f9ae0", 5);

    this.punt = this.add.text(260, 300, "Intentos:", { font: "15px Arial Black", fill: "#fff" });
    this.punt.setStroke("#4f9ae0", 5);

    this.punt = this.add.text(260, 350, "Aciertos: ", { font: "15px Arial Black", fill: "#fff" });
    this.punt.setStroke("#4f9ae0", 5);

    const s = ["Letra", "obtenida:"];
    this.letras = this.add.text(260, 410, s, { font: "15px Arial Black", fill: "#fff" });
    this.letras.setStroke("#4f9ae0", 5);

    this.letras = this.add.text(360, 250, this.puntaje, { font: "15px Arial Black", fill: "#e8dfe1" });
    this.letras.setStroke("#e01650", 5);

    this.letras = this.add.text(360, 300, this.intentos, { font: "15px Arial Black", fill: "#e8dfe1" });
    this.letras.setStroke("#e01650", 5);

    this.letras = this.add.text(360, 350, this.aciertos, { font: "15px Arial Black", fill: "#e8dfe1" });
    this.letras.setStroke("#e01650", 5);

    //  this.add.image(355, 380, "es").setDisplayOrigin(0, 0).setScale(0.4);
    //  this.add.image(355, 380, "pa").setDisplayOrigin(0, 0).setScale(0.4);
    //  this.add.image(355, 380, "ci").setDisplayOrigin(0, 0).setScale(0.4);
    //  this.add.image(365, 380, "a").setDisplayOrigin(0, 0).setScale(0.4);
    // this.add.image(370, 380, "l").setDisplayOrigin(0, 0).setScale(0.4);

    const text = this.add.text(285, 79, "Puntajes", { fontFamily: "Arial Black", fontSize: 43 });
    text.setStroke("#000000", 4);
    //  Apply the gradient fill.
    const gradient = text.context.createLinearGradient(0, 0, 0, text.height);
    gradient.addColorStop(0, "#111111");
    gradient.addColorStop(0.5, "#ffffff");
    gradient.addColorStop(0.5, "#aaaaaa");
    gradient.addColorStop(1, "#111111");

    text.setFill(gradient);
  }
}
