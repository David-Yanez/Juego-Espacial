import Phaser from "phaser";
let form;

export class Configuracion extends Phaser.Scene {
  constructor() {
    super({ key: "Configuracion" });
  }

  preload() {
    // Fondo
    this.load.image("fondo", "assets/sprites/UI/fondo.png");
    this.load.image("bg1", "assets/sprites/juego 1/bg.png");

    // Titulo
    this.load.image("tlt1", "assets/sprites/juego 1/tlt.png");
    this.load.image("tltSecuencia", "assets/sprites/UI/tltSecuencia.png");

    // Botones
    this.load.spritesheet("atras", "assets/sprites/atras.png", { frameWidth: 201, frameHeight: 196 });
    this.load.spritesheet("musica", "assets/sprites/UI/musica.png", { frameWidth: 205.3, frameHeight: 207 });
    this.load.spritesheet("instrucciones", "assets/sprites/UI/instrucciones.png", { frameWidth: 206, frameHeight: 208 });
    this.load.spritesheet("jugar", "assets/sprites/UI/jugar.png", { frameWidth: 198.5, frameHeight: 203 });

    // Configs
    this.load.image("difi", "assets/sprites/UI/dificultad.png");
    this.load.image("facil", "assets/sprites/UI/facil.png");
    this.load.image("dificil", "assets/sprites/UI/dificil.png");
    this.load.image("tiempo", "assets/sprites/UI/tiempo.png");
    this.load.image("3m", "assets/sprites/UI/3m.png");
    this.load.image("5m", "assets/sprites/UI/5m.png");
    this.load.image("7m", "assets/sprites/UI/7m.png");
    this.load.image("10m", "assets/sprites/UI/10m.png");
    this.load.image("pizarra", "assets/sprites/UI/pizarra.png");
    this.load.html("Formula", "assets/sprites/UI/Configuracioon.html");
    // this.load.html("Formula", "assets/sprites/UI/loginform.html");
  }

  create() {
    // Fondo
    this.add.image(0, 0, "fondo").setDisplayOrigin(0, 0);
    //  this.add.image(0, 0, "bgSol").setDisplayOrigin(0, 0);

    // Titulo
    this.add.image(130, 10, "tlt1").setDisplayOrigin(0, 0).setScale(0.4);

    this.add.image(40, 150, "difi").setDisplayOrigin(0, 0).setScale(0.3);
    this.add.image(20, 230, "facil").setDisplayOrigin(0, 0).setScale(0.4);
    this.add.image(200, 230, "dificil").setDisplayOrigin(0, 0).setScale(0.4);
    this.add.image(40, 360, "tiempo").setDisplayOrigin(0, 0).setScale(0.3);
    this.add.image(20, 450, "3m").setDisplayOrigin(0, 0).setScale(0.2);
    this.add.image(90, 450, "5m").setDisplayOrigin(0, 0).setScale(0.2);
    this.add.image(160, 450, "7m").setDisplayOrigin(0, 0).setScale(0.2);
    this.add.image(230, 450, "10m").setDisplayOrigin(0, 0).setScale(0.2);
    this.add.image(350, 150, "pizarra").setDisplayOrigin(0, 0).setScale(0.45);

    this.atras = this.add.sprite(30, 30, "atras").setInteractive().setScale(0.2);
    this.atras.on("pointerover", () => {
      this.atras.setFrame(1);
    });
    this.atras.on("pointerout", () => {
      this.atras.setFrame(0);
    });
    this.atras.on("pointerdown", () => {
      this.scene.start("Prin");
    });

    this.ins = this.add.sprite(750, 550, "instrucciones").setInteractive().setScale(0.2);
    let instru = true;
    this.ins.on("pointerover", () => {
      this.ins.setFrame(1);
    });
    this.ins.on("pointerout", () => {
      if (instru === true) {
        this.ins.setFrame(0);
      } else {
        this.ins.setFrame(2);
      }
    });
    this.ins.on("pointerdown", () => {
      if (instru === true) {
        this.ins.setFrame(2);
        alert("Cancion apagada");
        instru = false;
      } else {
        this.ins.setFrame(0);
        alert("Cancion tocando");
        instru = true;
      }
    });

    this.musica = this.add.sprite(750, 500, "musica").setInteractive().setScale(0.2);
    let mus = true;
    this.musica.on("pointerover", () => {
      this.musica.setFrame(1);
    });
    this.musica.on("pointerout", () => {
    //  this.musica.setFrame(0);
      if (mus === true) {
        this.musica.setFrame(0);
      } else {
        this.musica.setFrame(2);
      }
    });

    this.musica.on("pointerdown", () => {
      if (mus === true) {
        this.musica.setFrame(2);
        alert("Cancion apagada");
        mus = false;
      } else {
        this.musica.setFrame(0);
        alert("Cancion tocando");
        mus = true;
      }
    });

    this.juegoSa = this.add.sprite(400, 550, "jugar").setInteractive().setScale(0.15);
    this.juegoSa.on("pointerover", () => {
      this.juegoSa.setFrame(1);
    });
    this.juegoSa.on("pointerout", () => {
      this.juegoSa.setFrame(0);
    });
    this.juegoSa.on("pointerdown", () => {
      this.scene.start("Ordenar");
    });

    form = this.add.dom(150, 300).createFromCache("Formula");
    console.log(form);
  // form.setPerspective(800);
  }
}
