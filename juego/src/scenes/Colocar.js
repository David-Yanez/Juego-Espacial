import Phaser from "phaser";
import Swal from "sweetalert2";
let puntaje = 0;
let principal;
export class Colocar extends Phaser.Scene {
  constructor() {
    super({ key: "Colocar" });
  }

  preload() {
    this.load.image("fondo", "assets/sprites/UI/fondo.png");

    this.load.image("tltColocar", "assets/sprites/UI/tltColocar.png");
    this.load.bitmapFont("desyrel", "assets/sprites/UI/desyrel.png", "assets/sprites/UI/desyrel.xml");
    this.load.bitmapFont("azoXML", "assets/sprites/UI/bitmap-fonts-debug.png", "assets/sprites/UI/azo-fire.xml");
    // Matriz
    this.load.image("matri", "assets/sprites/UI/matri.PNG");
    this.load.image("matri2", "assets/sprites/UI/matri2.png");

    // Imagenes
    this.load.image("astro", "assets/sprites/colocar/astro.png");
    this.load.image("luna", "assets/sprites/colocar/luna.png");
    this.load.image("mar", "assets/sprites/colocar/mar.png");
    this.load.image("nave", "assets/sprites/colocar/nave.png");
    this.load.image("nave2", "assets/sprites/colocar/nave2.png");
    this.load.image("tierra", "assets/sprites/colocar/tierra.png");
    this.load.image("estrella", "assets/sprites/colocar/estrella.png");

    // Botones
    this.load.spritesheet("atras", "assets/sprites/atras.png", { frameWidth: 201, frameHeight: 196 });
    this.load.spritesheet("ok", "assets/sprites/UI/ok.png", { frameWidth: 200, frameHeight: 201 });
    this.load.spritesheet("musica", "assets/sprites/UI/musica.png", { frameWidth: 205.3, frameHeight: 207 });
    this.load.spritesheet("instrucciones", "assets/sprites/UI/instrucciones.png", { frameWidth: 206, frameHeight: 208 });
    this.load.spritesheet("pregunta", "assets/sprites/UI/pregunta.png", { frameWidth: 206, frameHeight: 185 });

    // Sonidos
    this.load.audio("principal", "assets/sounds/ambiente.mp3");
    this.load.audio("vozColocar", "assets/sounds/voz/vozColocar.mp3");

    /*  this.load.spritesheet("atras", "assets/sprites/atras.png", { frameWidth: 201, frameHeight: 196 });
    this.load.spritesheet("musica", "assets/sprites/UI/musica.png", { frameWidth: 205.3, frameHeight: 207 });
    this.load.spritesheet("instrucciones", "assets/sprites/UI/instrucciones.png", { frameWidth: 206, frameHeight: 208 }); */
  }

  create(data) {
    this.ins = data.ins;
    this.es = data.es;
    this.tlt = data.tlt;
    this.x = data.x;
    this.insIcono = data.insIcono;
    this.musicaIcono = data.musicaIcono;

    // Sonidos
    const voz = this.sound.add("vozColocar");
    principal = this.sound.add("principal");
    principal.volume = 0.2;
    principal.loop = true;
    principal.play();

    this.add.image(0, 0, "fondo").setDisplayOrigin(0, 0);

    // Titulo
    this.add.image(90, 10, "tltColocar").setDisplayOrigin(0, 0).setScale(0.4);
    this.add.image(30, 200, "matri").setDisplayOrigin(0, 0).setScale(0.4);
    // Contador
    this.min = data.time / 60;
    this.inicio = data.time;
    //  this.contador = this.add.text(300, 100, "Tiempo: " + formato(this.inicio), { fontFamily: "Times New Roman", fontSize: 25, color: "#00ff00" });
    this.contador = this.add.bitmapText(300, 100, "desyrel", "").setScale(0.5);
    // this.contador = this.add.bitmapText(300, 100, "azoXML", "").setScale(0.3);
    this.time.addEvent({ delay: 1000, callback: onEvent, callbackScope: this, loop: true });

    // Textos

    const datos = [
      {
        ints: ["1. Coloca en el cuadro del centro la nave.",
          " ",
          "2. Coloca a la derecha de la nave ", "el astronauta.",
          " ",
          "3. Pon encima del astronauta la luna."],
        img: ["luna", "nave", "astro", "mar"],
        res: [3, 5, 6]
      },
      {
        ints: ["1. Coloca en el cuadro del centro la luna.",
          " ",
          "2. Coloca a la izquierda de la luna ", "la nave.",
          " ",
          "3. Pon debajo de la nave el planeta", " tierra."],
        img: ["luna", "nave", "tierra"],
        res: [5, 4, 7]
      },
      {
        ints: ["1. Coloca en el cuadro del centro la estrella.",
          " ",
          "2. Coloca debajo de la estrella ", "la nave.",
          " ",
          "3. Coloca encima de la estrella", "la luna."],
        img: ["estrella", "nave2", "luna"],
        res: [5, 8, 2]
      },
      {
        ints: ["1. Coloca la nave en la parte superior ", "izquierda.",
          " ",
          "2. Coloca debajo de la nave ", "la estrella.",
          " ",
          "3. Coloca a la derecha de la nave", "el astronauta."],
        img: ["estrella", "nave2", "astro"],
        res: [4, 1, 2]
      },
      {
        ints: ["1. Coloca en el cuadro del centro el marciano.",
          " ",
          "2. Coloca a la izquierda del marciano ", "la estrella.",
          " ",
          "3. Coloca a la derecha del marciano", "el astronauta."],
        img: ["estrella", "mar", "astro"],
        res: [4, 5, 6]
      },
      {
        ints: ["1. Coloca en el cuadro del centro la estrella.",
          " ",
          "2. Coloca debajo de la estrella ", "la luna.",
          " ",
          "3. Coloca a la derecha de la estrella", "el astronauta.",
          " ",
          "4. Coloca a la izquierda de la luna ", "el marciano."],
        img: ["estrella", "luna", "astro", "mar"],
        res: [5, 8, 6, 7]
      }
    ];

    let n;
    let a;
    let b;
    let c;
    let d;
    let t;

    //  n = 5;
    n = 0;
    // Phaser.Math.Between(3, 5);
    a = this.add.image(370, 250, datos[n].img[0]).setScale(0.3).setInteractive();
    b = this.add.image(490, 250, datos[n].img[1]).setScale(0.3).setInteractive();
    c = this.add.image(610, 250, datos[n].img[2]).setScale(0.3).setInteractive();
    d = this.add.image(730, 250, datos[n].img[3]).setScale(0.3).setInteractive();

    t = this.add.text(340, 330, datos[n].ints).setColor("#efff00");
    d.setAlpha(0);
    this.input.setDraggable(a);
    this.input.setDraggable(b);
    this.input.setDraggable(c);
    this.input.setDraggable(d);
    // a = setDraggable: true;

    /*  if (n > 4) {
      this.input.setDraggable(d);
    } */
    // generar();
    function generar() {
      // d.draggable: true;
      //  d.input.setDraggable;

      // n = 5;
      n = Phaser.Math.Between(0, 5);
      a.setTexture(datos[n].img[0]);
      b.setTexture(datos[n].img[1]);
      c.setTexture(datos[n].img[2]);
      d.setTexture(datos[n].img[3]);
      d.setAlpha(1);
      if (n === 0) { d.setAlpha(0); }

      t.setText(datos[n].ints);
      a.x = 370;
      a.y = 250;
      b.x = 490;
      b.y = 250;
      c.x = 610;
      c.y = 250;
      d.x = 730;
      d.y = 250;
    }
    // console.log(datos);

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
      this.scene.start("Configuracion", { insIcono: this.insIcono, musicaIcono: this.musicaIcono, instru: data.ins, scene: this.es, titulo: this.tlt, x: this.x, voz: "vozColocar" });
      puntaje = 0;
    });

    this.ok = this.add.sprite(750, 380, "ok").setInteractive().setScale(0.2);
    this.ok.on("pointerover", () => {
      this.ok.setFrame(1);
    });
    this.ok.on("pointerout", () => {
      this.ok.setFrame(0);
    });
    this.ok.on("pointerdown", () => {
      calificar();
      generar();

      //   this.scene.start("Prin");
    });

    this.pregunta = this.add.sprite(750, 450, "pregunta").setInteractive().setScale(0.2);
    this.pregunta.on("pointerover", () => {
      this.pregunta.setFrame(1);
    });
    this.pregunta.on("pointerout", () => {
      this.pregunta.setFrame(0);
    });
    this.pregunta.on("pointerdown", () => {
      voz.play();
      if (this.insIcono === 2) {
        voz.mute = true;
      }
      Swal.fire({
        icon: "info",
        text: "Comprensión de instrucciones. Sigue las instrucciones que se muestra al lado derecho de los cuadrados, arrastra las imágenes y coloca según las instrucciones. Una vez hayas colocado las imágenes, selecciona el botón 👍 para continuar."

      });
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
      if (principal.mute === true || this.musicaIcono === 2) {
        this.musica.setFrame(2);
      } else {
        this.musica.setFrame(0);
      }
    });
    this.musica.on("pointerdown", () => {
    //  console.log(principal.mute);
      if (principal.mute === false && this.musicaIcono === 0) {
        this.musica.setFrame(2);
        this.musicaIcono = 2;
        principal.mute = true;
      } else {
        this.musica.setFrame(0);
        this.musicaIcono = 0;
        principal.play();
        principal.mute = false;

      // mus = true;
      }
    });

    this.ins = this.add.sprite(750, 550, "instrucciones").setInteractive().setScale(0.2);
    this.ins.setFrame(this.insIcono);

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
        voz.mute = true;
      } else {
        this.ins.setFrame(0);
        this.insIcono = 0;
        voz.mute = false;
      }
    });

    const zone1 = this.add.zone(77, 245, 46, 45).setRectangleDropZone(90, 90);
    const zone2 = this.add.zone(168, 245, 46, 45).setRectangleDropZone(90, 90);
    const zone3 = this.add.zone(261, 245, 46, 45).setRectangleDropZone(90, 90);

    const zone4 = this.add.zone(77, 336, 46, 45).setRectangleDropZone(90, 90);
    const zone5 = this.add.zone(168, 336, 46, 45).setRectangleDropZone(90, 90);
    const zone6 = this.add.zone(261, 336, 46, 45).setRectangleDropZone(90, 90);

    const zone7 = this.add.zone(77, 427, 46, 45).setRectangleDropZone(90, 90);
    const zone8 = this.add.zone(168, 427, 46, 45).setRectangleDropZone(90, 90);
    const zone9 = this.add.zone(261, 427, 46, 45).setRectangleDropZone(90, 90);

    zone1.name = 1;
    zone2.name = 2;
    zone3.name = 3;
    zone4.name = 4;
    zone5.name = 5;
    zone6.name = 6;
    zone7.name = 7;
    zone8.name = 8;
    zone9.name = 9;

    this.input.on("dragstart", function(pointer, gameObject) {
      this.children.bringToTop(gameObject);
    }, this);
    this.input.on("drag", function(pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX;
      gameObject.y = dragY;
    });

    let p1;
    let p2;
    let p3;
    let p4;
    let p11;
    let p12;
    let p13;
    let p14;

    function calificar() {
    /*  console.log(p1);
      console.log(p2);
      console.log(p3); */
      if (datos[n].res.length === 4) {
        if (datos[n].res[0] === p1.name && p1.x === p11.x && p1.y === p11.y) { puntaje++; }
        if (datos[n].res[1] === p2.name && p2.x === p12.x && p2.y === p12.y) { puntaje++; }
        if (datos[n].res[2] === p3.name && p3.x === p13.x && p3.y === p13.y) { puntaje++; }
        if (datos[n].res[3] === p4.name && p4.x === p14.x && p4.y === p14.y) { puntaje++; }
      } else {
        if (datos[n].res[0] === p1.name && p1.x === p11.x && p1.y === p11.y) { puntaje++; }
        if (datos[n].res[1] === p2.name && p2.x === p12.x && p2.y === p12.y) { puntaje++; }
        if (datos[n].res[2] === p3.name && p3.x === p13.x && p3.y === p13.y) { puntaje++; }
      }
      console.log("puntaje: " + puntaje);
    }
    this.input.on("drop", function(pointer, gameObject, dropZone) {
      gameObject.x = dropZone.x;
      gameObject.y = dropZone.y;

      // console.log(dropZone); */

      if (datos[n].img[0] === gameObject.texture.key) { p1 = dropZone; p11 = gameObject; }
      if (datos[n].img[1] === gameObject.texture.key) { p2 = dropZone; p12 = gameObject; }
      if (datos[n].img[2] === gameObject.texture.key) { p3 = dropZone; p13 = gameObject; }
      if (datos[n].img[3] === gameObject.texture.key) { p4 = dropZone; p14 = gameObject; }
      /* if ()
      if (dropZone.x === 77 && dropZone.y === 245) {
       if(gameObject.texture.key === ) z1 = gameObject.texture.key;
       }
      if (dropZone.x === 168 && dropZone.y === 245) { z2 = gameObject.texture.key; }
      if (dropZone.x === 261 && dropZone.y === 245) { z3 = gameObject.texture.key; }
      if (dropZone.x === 77 && dropZone.y === 336) { z4 = gameObject.texture.key; }

      if (dropZone.x === 168 && dropZone.y === 336) { z5 = gameObject.texture.key; }
      if (dropZone.x === 261 && dropZone.y === 336) { z6 = gameObject.texture.key; }
      if (dropZone.x === 77 && dropZone.y === 427) { z7 = gameObject.texture.key; }
      if (dropZone.x === 168 && dropZone.y === 427) { z8 = gameObject.texture.key; }
      if (dropZone.x === 261 && dropZone.y === 427) { z9 = gameObject.texture.key; } */
      // console.log(gameObject.texture.key);

      // gameObject.input.enabled = false;
    });
    /*  const graphics0 = this.add.graphics();
    graphics0.lineStyle(2, 0xffff00);
    graphics0.strokeRect(zone0.x - zone0.input.hitArea.width / 2, zone0.y - zone0.input.hitArea.height / 2, zone0.input.hitArea.width, zone0.input.hitArea.height);
    */
    /* this.input.on("pointerdown", function(pointer) {
      console.log(pointer.x);
      console.log(pointer.y);
    }); */
  }
}

function onEvent() {
  this.inicio -= 1;
  // this.contador.text =
  this.contador.setText("Tiempo: " + formato(this.inicio));
  if (this.inicio <= 0) {
    this.contador.setText("Tiempo: " + "0:00");
    this.scene.start("Punt", { punt: puntaje, letra: "l", nomb: "Comprensión de Instrucciones", time: this.min, sce: "Colocar", musicaIcono: this.musicaIcono });
    puntaje = 0;
    principal.stop();
  }
}
function formato(segundos) {
  const minutos = Math.floor(segundos / 60);
  let sec = segundos % 60;
  sec = sec.toString().padStart(2, "0");
  return `${minutos}:${sec}`;
}
