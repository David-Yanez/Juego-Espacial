import Phaser from "phaser";

const target = new Phaser.Math.Vector2();
let spriteOvni;
export class Prin extends Phaser.Scene {
  constructor() {
    super({ key: "Prin", active: true });
  }

  preload() {
    this.load.image("bg", "assets/sprites/principal.png");
    this.load.image("tlt", "assets/sprites/titulo.png");
    this.load.image("na", "assets/sprites/na.png");
    // Titulo
    this.load.image("es", "assets/sprites/titulo/es.png");
    this.load.image("pa", "assets/sprites/titulo/pa.png");
    this.load.image("ci", "assets/sprites/titulo/ci.png");
    this.load.image("a", "assets/sprites/titulo/a.png");
    this.load.image("l", "assets/sprites/titulo/l.png");
    //
    this.load.spritesheet("au", "assets/sprites/agu.png", { frameWidth: 200, frameHeight: 200 });
    this.load.spritesheet("sol", "assets/sprites/sol.png", { frameWidth: 200, frameHeight: 200 });
    this.load.spritesheet("gal", "assets/sprites/gal.png", { frameWidth: 100, frameHeight: 100 });
    this.load.spritesheet("sat", "assets/sprites/sat.png", { frameWidth: 300, frameHeight: 300 });
    this.load.spritesheet("tie", "assets/sprites/tie.png", { frameWidth: 100, frameHeight: 100 });
    this.load.spritesheet("ovni", "assets/sprites/ovni.png", { frameWidth: 84.28, frameHeight: 59 });
    this.load.spritesheet("can", "assets/sprites/UI/musica.png", { frameWidth: 200.5, frameHeight: 190 });
    this.load.spritesheet("ins", "assets/sprites/UI/instrucciones.png", { frameWidth: 204.5, frameHeight: 205 });
    this.load.spritesheet("atras", "assets/sprites/UI/atras.png", { frameWidth: 201, frameHeight: 196 });
    this.load.spritesheet("puntajes", "assets/sprites/UI/puntajes.png", { frameWidth: 197.5, frameHeight: 192 });
    this.load.spritesheet("jugarJu", "assets/sprites/UI/jugar.png", { frameWidth: 198.5, frameHeight: 203 });
    this.load.spritesheet("jugarSa", "assets/sprites/UI/jugar.png", { frameWidth: 198.5, frameHeight: 203 });
    this.load.spritesheet("jugarSo", "assets/sprites/UI/jugar.png", { frameWidth: 198.5, frameHeight: 203 });
    this.load.spritesheet("jugarGa", "assets/sprites/UI/jugar.png", { frameWidth: 198.5, frameHeight: 203 });
    this.load.spritesheet("jugarAg", "assets/sprites/UI/jugar.png", { frameWidth: 198.5, frameHeight: 203 });
  }

  create() {
    // Crear animaciones
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
    // this.titulo = this.add.image(200, 0, "tlt").setDisplayOrigin(0, 0).setScale(0.5);
    // creación titulo
    this.add.image(200, 10, "es").setDisplayOrigin(0, 0).setScale(0.5);
    this.add.image(300, 10, "pa").setDisplayOrigin(0, 0).setScale(0.5);
    this.add.image(410, 10, "ci").setDisplayOrigin(0, 0).setScale(0.5);
    this.add.image(490, 10, "a").setDisplayOrigin(0, 0).setScale(0.5);
    this.add.image(550, 10, "l").setDisplayOrigin(0, 0).setScale(0.5);

    // Animaciones de cuerpos celestes
    const spriteAu = this.add.sprite(700, 150, "au").setScale(0.5);
    spriteAu.play({ key: "gir", repeat: -1 });

    const spriteSol = this.add.sprite(400, 150, "sol").setScale(0.5);
    spriteSol.play({ key: "sol", repeat: -1 });

    const spriteGal = this.add.sprite(612, 500, "gal").setScale(0.8);
    spriteGal.play({ key: "gal", repeat: -1 });

    const spriteSat = this.add.sprite(200, 500, "sat").setScale(0.5);
    spriteSat.play({ key: "sat", repeat: -1 });

    const spriteTie = this.add.sprite(100, 250, "tie").setScale(0.5);
    spriteTie.play({ key: "tie", repeat: -1 });

    // Textos
    this.add.text(385, 185, "Sol").setColor("#ffff00");
    this.add.text(640, 200, "Agujero Negro").setColor("#ffff00");
    this.add.text(170, 430, "Saturno").setColor("#ffff00");
    this.add.text(580, 440, "Galaxia").setColor("#ffff00");
    this.add.text(65, 200, "Júpiter").setColor("#ffff00");
    this.add.text(35, 500, "Puntajes").setColor("#ffff00");

    spriteOvni = this.physics.add.sprite(400, 350, "ovni").setScale(0.6);
    spriteOvni.play({ key: "ovni", repeat: -1 });

    this.input.on("pointerdown", function(pointer) {
      target.x = pointer.x;
      target.y = pointer.y;
      this.physics.moveToObject(spriteOvni, target, 200);
    }, this);

    // Botones
    this.bot = this.add.sprite(750, 500, "can").setInteractive().setScale(0.2);
    this.bot.on("pointerover", () => {
      this.bot.setFrame(1);
    });
    this.bot.on("pointerout", () => {
      this.bot.setFrame(0);
    });
    this.bot.on("pointerdown", () => {
      alert("Cancion");
    });

    this.ins = this.add.sprite(750, 550, "ins").setInteractive().setScale(0.2);
    this.ins.on("pointerover", () => {
      this.ins.setFrame(1);
    });
    this.ins.on("pointerout", () => {
      this.ins.setFrame(0);
    });
    this.ins.on("pointerdown", () => {
      alert("Instrucciones");
    });

    this.atras = this.add.sprite(30, 30, "atras").setInteractive().setScale(0.2);
    this.atras.on("pointerover", () => {
      this.atras.setFrame(1);
    });
    this.atras.on("pointerout", () => {
      this.atras.setFrame(0);
    });
    this.atras.on("pointerdown", () => {
      const url = "../index.html";
      window.location.href = url;
    });

    this.puntajes = this.add.sprite(70, 550, "puntajes").setInteractive().setScale(0.2);
    this.puntajes.on("pointerover", () => {
      this.puntajes.setFrame(1);
    });
    this.puntajes.on("pointerout", () => {
      this.puntajes.setFrame(0);
    });
    this.puntajes.on("pointerdown", () => {
      alert("Puntajes");
    });

    this.juegoUr = this.add.sprite(55, 250, "jugarJu").setInteractive().setScale(0.15);
    this.juegoUr.on("pointerover", () => {
      this.juegoUr.setFrame(1);
    });
    this.juegoUr.on("pointerout", () => {
      this.juegoUr.setFrame(0);
    });
    this.juegoUr.on("pointerdown", () => {
      this.scene.start("Cuadrados");
    });

    this.juegoSa = this.add.sprite(150, 500, "jugarSa").setInteractive().setScale(0.15);
    this.juegoSa.on("pointerover", () => {
      this.juegoSa.setFrame(1);
    });
    this.juegoSa.on("pointerout", () => {
      this.juegoSa.setFrame(0);
    });
    this.juegoSa.on("pointerdown", () => {
      this.scene.start("Union");
    });

    this.juegoSo = this.add.sprite(355, 150, "jugarSo").setInteractive().setScale(0.15);
    this.juegoSo.on("pointerover", () => {
      this.juegoSo.setFrame(1);
    });
    this.juegoSo.on("pointerout", () => {
      this.juegoSo.setFrame(0);
    });
    this.juegoSo.on("pointerdown", () => {
      this.scene.start("Ordenar");
    });

    this.juegoGa = this.add.sprite(570, 500, "jugarGa").setInteractive().setScale(0.15);
    this.juegoGa.on("pointerover", () => {
      this.juegoGa.setFrame(1);
    });
    this.juegoGa.on("pointerout", () => {
      this.juegoGa.setFrame(0);
    });
    this.juegoGa.on("pointerdown", () => {
      this.scene.start("Colocar");
    });

    this.juegoAg = this.add.sprite(660, 150, "jugarAg").setInteractive().setScale(0.15);
    this.juegoAg.on("pointerover", () => {
      this.juegoAg.setFrame(1);
    });
    this.juegoAg.on("pointerout", () => {
      this.juegoAg.setFrame(0);
    });
    this.juegoAg.on("pointerdown", () => {
      this.scene.start("Flechas");
    });
  }

  update() {
    const distance = Phaser.Math.Distance.Between(spriteOvni.x, spriteOvni.y, target.x, target.y);
    if (spriteOvni.body.speed > 0) {
    //  distanceText.setText("Distancia: " + distance);
      if (distance < 4) {
        spriteOvni.body.reset(target.x, target.y);
      }
    }
    // console.log(spriteOvni.y);
    // this.titulo.setAlpha(1);
    if ((spriteOvni.x > 78 && spriteOvni.x < 125) && (spriteOvni.y > 221 && spriteOvni.y < 278)) {
      this.juegoUr.setAlpha(1);
    } else {
      this.juegoUr.setAlpha(0);
    }
    if ((spriteOvni.x > 155 && spriteOvni.x < 245) && (spriteOvni.y > 453 && spriteOvni.y < 533)) {
      this.juegoSa.setAlpha(1);
    } else {
      this.juegoSa.setAlpha(0);
    }
    if ((spriteOvni.x > 370 && spriteOvni.x < 428) && (spriteOvni.y > 122 && spriteOvni.y < 183)) {
      this.juegoSo.setAlpha(1);
    } else {
      this.juegoSo.setAlpha(0);
    }
    if ((spriteOvni.x > 585 && spriteOvni.x < 640) && (spriteOvni.y > 474 && spriteOvni.y < 521)) {
      this.juegoGa.setAlpha(1);
    } else {
      this.juegoGa.setAlpha(0);
    }
    if ((spriteOvni.x > 668 && spriteOvni.x < 725) && (spriteOvni.y > 110 && spriteOvni.y < 178)) {
      this.juegoAg.setAlpha(1);
    } else {
      this.juegoAg.setAlpha(0);
    }
  }
}
