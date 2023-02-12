import Phaser from "phaser";

let form;

export class Configuracion extends Phaser.Scene {
  constructor() {
    super({ key: "Configuracion" });
  }

  preload() {
    // Fondo
    this.load.image("fondo", "assets/sprites/UI/fondo.png");

    // Titulo
    this.load.image("tlt1", "assets/sprites/juego 1/tlt1.png");
    this.load.image("tltSecuencia", "assets/sprites/UI/tltSecuencia.png");
    this.load.image("tltUnion", "assets/sprites/UI/tltUnion1.png");
    this.load.image("tltFlechas", "assets/sprites/UI/tltFlechas.png");
    this.load.image("tltColocar", "assets/sprites/UI/tltColocar.png");

    // Botones
    this.load.spritesheet("atras", "assets/sprites/atras.png", { frameWidth: 201, frameHeight: 196 });
    this.load.spritesheet("musica", "assets/sprites/UI/musica.png", { frameWidth: 205.3, frameHeight: 207 });
    this.load.spritesheet("instrucciones", "assets/sprites/UI/instrucciones.png", { frameWidth: 206, frameHeight: 208 });
    this.load.spritesheet("jugar", "assets/sprites/UI/btnJugar.png", { frameWidth: 454, frameHeight: 192 });

    // Configs
    /*  this.load.image("difi", "assets/sprites/UI/dificultad.png");
    this.load.image("facil", "assets/sprites/UI/facil.png");
    this.load.image("dificil", "assets/sprites/UI/dificil.png"); */
    // GIFs
    this.load.spritesheet("OrdenarGif", "assets/sprites/gifs/OrdenarGifs.png", { frameWidth: 855, frameHeight: 482 });
    this.load.spritesheet("CuadradosGif", "assets/sprites/gifs/cuadradosGifs.png", { frameWidth: 855, frameHeight: 482 });
    this.load.spritesheet("UnionGif", "assets/sprites/gifs/UnionGifs.png", { frameWidth: 855, frameHeight: 482 });
    this.load.spritesheet("FlechasGif", "assets/sprites/gifs/FlechasGifs.png", { frameWidth: 855, frameHeight: 482 });
    this.load.spritesheet("ColocarGif", "assets/sprites/gifs/ColocarGifs1.png", { frameWidth: 354.6, frameHeight: 200 });

    // Configs
    this.load.image("instruc", "assets/sprites/UI/instruc.png");
    this.load.image("tiempo", "assets/sprites/UI/tiempo.png");
    this.load.image("1m", "assets/sprites/UI/1m.png");
    this.load.image("3m", "assets/sprites/UI/3m.png");
    this.load.image("5m", "assets/sprites/UI/5m.png");
    this.load.image("10m", "assets/sprites/UI/10m.png");
    this.load.image("pizarra", "assets/sprites/UI/pizarra.png");
    this.load.html("Formula", "./html/tiempo.html");

    this.load.image("buoepn", "assets/sprites/UI/buoepn.png");
    // this.load.html("Formula", "assets/sprites/UI/loginform.html");
    // Sonidos
    this.load.audio("entrar", "assets/sounds/click.mp3");
    this.load.audio("principal", "assets/sounds/ambiente.mp3");
    this.load.audio("vozCuadrados", "assets/sounds/voz/vozCuadrados.mp3");
    this.load.audio("vozOrdenar", "assets/sounds/voz/vozOrdenar.mp3");
    this.load.audio("vozColocar", "assets/sounds/voz/vozColocar.mp3");
    this.load.audio("vozFlechas", "assets/sounds/voz/vozFlechas.mp3");
    this.load.audio("vozUnion", "assets/sounds/voz/vozUnion.mp3");
  }

  create(data) {
  
    this.ins = data.instru;
    this.es = data.scene;
    this.tlt = data.titulo;
    this.x = data.x;
    this.insIcono = data.insIcono;
    this.musicaIcono = data.musicaIcono;
    this.vozIns = data.voz;

    // sonido
    const clickSonido = this.sound.add("entrar");
    const voz = this.sound.add(this.vozIns);
    const principal = this.sound.add("principal");
    principal.volume = 0.2;
    principal.loop = true;
    principal.play();
    voz.play();

    // Fondod
    this.add.image(0, 0, "fondo").setDisplayOrigin(0, 0);
    //  this.add.image(0, 0, "bgSol").setDisplayOrigin(0, 0);

    // Titulo
    this.add.image(this.x, 10, this.tlt).setDisplayOrigin(0, 0).setScale(0.4);

    /* this.add.image(40, 150, "difi").setDisplayOrigin(0, 0).setScale(0.3);
    this.add.image(20, 230, "facil").setDisplayOrigin(0, 0).setScale(0.4);
    this.add.image(200, 230, "dificil").setDisplayOrigin(0, 0).setScale(0.4); */
    this.anims.create({
      key: (this.es + "Gif"),
      frames: this.anims.generateFrameNumbers(this.es + "Gif"),
      frameRate: 5
    });

    const spriteAu = this.add.sprite(570, 520, (this.es + "Gif")).setScale(0.9);
    spriteAu.play({ key: (this.es + "Gif"), repeat: -1 });
    console.log(spriteAu);

    this.add.image(555, 135, "instruc").setScale(0.55);
    this.add.image(60, 220, "tiempo").setDisplayOrigin(0, 0).setScale(0.3);
    this.add.image(20, 310, "1m").setDisplayOrigin(0, 0).setScale(0.2);
    this.add.image(90, 310, "3m").setDisplayOrigin(0, 0).setScale(0.2);
    this.add.image(160, 310, "5m").setDisplayOrigin(0, 0).setScale(0.2);
    this.add.image(230, 310, "10m").setDisplayOrigin(0, 0).setScale(0.2);
    this.add.image(350, 150, "pizarra").setDisplayOrigin(0, 0).setScale(0.45);

    this.add.image(180, 470, "buoepn").setScale(0.25);

    this.add.text(370, 200, this.ins, { fontFamily: "Arial", fontSize: 20, color: "#000000", align: "left" });

    this.atras = this.add.sprite(30, 30, "atras").setInteractive().setScale(0.2);
    this.atras.on("pointerover", () => {
      this.atras.setFrame(1);
    });
    this.atras.on("pointerout", () => {
      this.atras.setFrame(0);
    });
    this.atras.on("pointerdown", () => {
      principal.stop();
      voz.stop();
      this.scene.start("Prin", { insIcono: this.insIcono, musicaIcono: this.musicaIcono });
    });

    this.musica = this.add.sprite(750, 500, "musica").setInteractive().setScale(0.2);
    this.musica.setFrame(this.musicaIcono);

    if (this.musicaIcono === 2) {
      principal.stop();
    }
    this.musica.on("pointerover", () => {
      this.musica.setFrame(1);
    });
    this.musica.on("pointerout", () => {
      // && this.musicaIcono === 2
      if (principal.mute === true || this.musicaIcono === 2) {
        this.musica.setFrame(2);
      } else {
        this.musica.setFrame(0);
      }
    });
    this.musica.on("pointerdown", () => {
      if (principal.mute === false && this.musicaIcono === 0) {
        this.musica.setFrame(2);
        this.musicaIcono = 2;
        principal.mute = true;
        clickSonido.mute = true;
      } else {
        this.musica.setFrame(0);
        this.musicaIcono = 0;
        principal.play();
        clickSonido.mute = false;
        principal.mute = false;
      }
    });

    this.ins = this.add.sprite(750, 550, "instrucciones").setInteractive().setScale(0.2);
    this.ins.setFrame(this.insIcono);
    if (this.insIcono === 2) {
      voz.stop();
    }
    this.ins.on("pointerover", () => {
      this.ins.setFrame(1);
    });
    this.ins.on("pointerout", () => {
      if (voz.mute === true || this.insIcono === 2) {
        this.ins.setFrame(2);
      } else {
        this.ins.setFrame(0);
      }
    });
    this.ins.on("pointerdown", () => {
      if (voz.mute === false && this.insIcono === 0) {
        this.ins.setFrame(2);
        this.insIcono = 2;
        // clickSonido.mute = true;
        voz.mute = true;
      } else {
        this.ins.setFrame(0);
        this.insIcono = 0;
        voz.mute = false;
        // clickSonido.mute = false;
      }
    });

    this.juegoSa = this.add.sprite(350, 550, "jugar").setInteractive().setScale(0.25);
    this.juegoSa.on("pointerover", () => {
      this.juegoSa.setFrame(1);
    });
    this.juegoSa.on("pointerout", () => {
      this.juegoSa.setFrame(0);
    });
    this.juegoSa.on("pointerdown", () => {
      if (this.musicaIcono === 0) {
        clickSonido.play();
      }
      voz.stop();
      principal.stop();
      minutos();
      this.scene.start(this.es, { time: min, insIcono: this.insIcono, musicaIcono: this.musicaIcono, ins: data.instru, es: this.es, tlt: this.tlt, x: this.x });
    });

    form = this.add.dom(150, 160).createFromCache("Formula");
    // console.log(form);
    // form.setPerspective(800);
  }
}
let min = 0;
function minutos() {
  const res = document.getElementById("ti").value;

  if (res === "0") {
    min = 60;
  }
  if (res === "1") {
    min = 180;
  }
  if (res === "2") {
    min = 300;
  }
  if (res === "3") {
    min = 600;
  }
}
