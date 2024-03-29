import Phaser from "phaser";
import Swal from "sweetalert2";
let puntaje = 0;
let principal;
let aciertos = 0;
let intentos = 1;
export class Colocar extends Phaser.Scene {
  constructor() {
    super({ key: "Colocar" });
  }

  preload() {
    this.load.image("fondo", "assets/sprites/UI/fondo.png");

    this.load.image("tltColocar", "assets/sprites/UI/tltColocar.png");
    // Matriz
    // this.load.image("matri", "assets/sprites/UI/matri.PNG");
    this.load.image("cuadrado", "assets/sprites/UI/cuadrado.png");

    // this.load.image("matri2", "assets/sprites/UI/matri2.png");

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
    this.load.spritesheet("ok", "assets/sprites/UI/ok.png", { frameWidth: 456, frameHeight: 201 });
    this.load.spritesheet("terminar", "assets/sprites/UI/BtnTerminar.png", { frameWidth: 454.5, frameHeight: 193 });
    this.load.spritesheet("musica", "assets/sprites/UI/musica.png", { frameWidth: 205.3, frameHeight: 207 });
    this.load.spritesheet("instrucciones", "assets/sprites/UI/instrucciones.png", { frameWidth: 206, frameHeight: 208 });
    this.load.spritesheet("info", "assets/sprites/UI/info.png", { frameWidth: 170, frameHeight: 160 });
    this.load.spritesheet("leer", "assets/sprites/UI/leer.png", { frameWidth: 457.5, frameHeight: 200 });

    // Sonidos
    this.load.audio("principal", "assets/sounds/ambiente.mp3");
    this.load.audio("vozColocar", "assets/sounds/voz/vozColocar.mp3");
    this.load.audio("correcto", "assets/sounds/correcto.mp3");
    this.load.audio("error", "assets/sounds/error.mp3");
    this.load.audio("vozCo0", "assets/sounds/colocar/vozCo0.mp3");
    this.load.audio("vozCo1", "assets/sounds/colocar/vozCo1.mp3");
    this.load.audio("vozCo2", "assets/sounds/colocar/vozCo2.mp3");
    this.load.audio("vozCo3", "assets/sounds/colocar/vozCo3.mp3");
    this.load.audio("vozCo4", "assets/sounds/colocar/vozCo4.mp3");
    this.load.audio("vozCo5", "assets/sounds/colocar/vozCo5.mp3");
    this.load.audio("vozCo6", "assets/sounds/colocar/vozCo6.mp3");
    this.load.audio("vozCo7", "assets/sounds/colocar/vozCo7.mp3");
    this.load.audio("vozCo8", "assets/sounds/colocar/vozCo8.mp3");
    this.load.audio("vozCo9", "assets/sounds/colocar/vozCo9.mp3");
    this.load.audio("vozCo10", "assets/sounds/colocar/vozCo10.mp3");
    this.load.audio("vozCo11", "assets/sounds/colocar/vozCo11.mp3");
    this.load.audio("vozCo12", "assets/sounds/colocar/vozCo12.mp3");
    this.load.audio("vozCo13", "assets/sounds/colocar/vozCo13.mp3");

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
    const error = this.sound.add("error");
    const correcto = this.sound.add("correcto");
    error.volume = 0.2;
    correcto.volume = 0.2;

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
    this.contador = this.add.text(300, 100, "Tiempo: " + formato(this.inicio), { fontFamily: "Times New Roman", fontSize: 25, color: "#00ff00" });
    // this.contador = this.add.bitmapText(300, 100, "desyrel", "").setScale(0.5);
    // this.contador = this.add.bitmapText(300, 100, "azoXML", "").setScale(0.3);
    this.time.addEvent({ delay: 1000, callback: onEvent, callbackScope: this, loop: true });

    this.add.text(180, 140, "Arrastra las imágenes dentro de las casillas según las instrucciones y", { font: "13px Arial", fill: "#e8dfe1" }).setStroke("#e01650", 2);
    this.add.text(140, 160, "luego da clic el boton validar. Para corregir arrastralas nuevamente al lugar correcto.", { font: "13px Arial", fill: "#e8dfe1" }).setStroke("#e01650", 2);

    // Textos

    const datos = [
      {
        ints: ["1. Coloca en la casilla del centro ",
          "la nave. ", " ",
          "2. Coloca a la derecha de la nave ", "el astronauta.",
          " ",
          "3. Pon encima del astronauta la luna."],
        img: ["luna", "nave", "astro", "mar"],
        res: [3, 5, 6],
        vozIns: this.sound.add("vozCo0")
      },
      {
        ints: ["1. Coloca en la casilla del centro ",
          "la luna. ", " ",
          "2. Coloca a la izquierda de la luna ", "la nave.",
          " ",
          "3. Pon debajo de la nave el planeta", " tierra."],
        img: ["luna", "nave", "tierra"],
        res: [5, 4, 7],
        vozIns: this.sound.add("vozCo1")
      },
      {
        ints: ["1. Coloca en la casilla del centro ",
          "la estrella.", " ",
          "2. Coloca debajo de la estrella ", "la nave.",
          " ",
          "3. Coloca encima de la estrella", "la luna."],
        img: ["estrella", "nave2", "luna"],
        res: [5, 8, 2],
        vozIns: this.sound.add("vozCo2")
      },
      {
        ints: ["1. Coloca la nave en la parte ", "superior izquierda.",
          " ",
          "2. Coloca debajo de la nave ", "la estrella.",
          " ",
          "3. Coloca a la derecha de la nave", "el astronauta."],
        img: ["estrella", "nave2", "astro"],
        res: [4, 1, 2],
        vozIns: this.sound.add("vozCo3")
      },
      {
        ints: ["1. Coloca en la casilla del centro",
          "el marciano. ", " ",
          "2. Coloca a la izquierda del  ", "marciano la estrella.",
          " ",
          "3. Coloca a la derecha del marciano", "el astronauta."],
        img: ["estrella", "mar", "astro"],
        res: [4, 5, 6],
        vozIns: this.sound.add("vozCo4")
      },
      {
        ints: ["1. Coloca en la casilla del centro ",
          "la estrella.", " ",
          "2. Coloca a la izquierda de la estrella ", "el marciano.",
          " ",
          "3. Coloca a la derecha de la estrella ", "el astronauta."],
        img: ["estrella", "mar", "astro"],
        res: [5, 4, 6],
        vozIns: this.sound.add("vozCo5")
      },
      {
        ints: ["1. Coloca en la casilla del centro ",
          "la tierra.", " ",
          "2. Coloca sobre la tierra ", "la nave.",
          " ",
          "3. Coloca a la derecha de la nave ", "la luna."],
        img: ["nave", "luna", "tierra"],
        res: [2, 3, 5],
        vozIns: this.sound.add("vozCo6")
      },
      {
        ints: ["1. Coloca en la casilla del centro",
          "la nave.", " ",
          "2. Coloca debajo de la nave ", "la luna.",
          " ",
          "3. Coloca a la derecha de la luna ", "la tierra."],
        img: ["nave", "luna", "tierra"],
        res: [5, 8, 9],
        vozIns: this.sound.add("vozCo7")
      },
      {
        ints: ["1. Coloca en la casilla del centro ",
          "la estrella. ", " ",
          "2. Coloca debajo de la estrella ", "la luna.",
          " ",
          "3. Coloca a la derecha de la estrella", "el astronauta.",
          " ",
          "4. Coloca a la izquierda de la luna ", "el marciano."],
        img: ["estrella", "luna", "astro", "mar"],
        res: [5, 8, 6, 7],
        vozIns: this.sound.add("vozCo8")
      },
      {
        ints: ["1. Coloca en la casilla del centro ",
          "la luna.", " ",
          "2. Coloca debajo de la luna ", "el astronauta.",
          " ",
          "3. Coloca a la derecha de la luna ", "el marciano.",
          " ",
          "4. Coloca a la izquierda del astronauta ", "la estrella."],
        img: ["luna", "mar", "estrella", "astro"],
        res: [5, 6, 7, 8],
        vozIns: this.sound.add("vozCo9")
      },
      {
        ints: ["1. Coloca en la casilla del centro ",
          "el astronauta.", " ",
          "2. Coloca a la derecha del  ", "astronauta la estrella.",
          " ",
          "3. Coloca a la izquierda del astronauta ", "el marciano.",
          " ",
          "4. Coloca sobre el astronauta ", "la luna."],
        img: ["mar", "astro", "estrella", "luna"],
        res: [4, 5, 6, 2],
        vozIns: this.sound.add("vozCo10")
      },
      {
        ints: ["1. Coloca en la casilla del centro ",
          "el astronauta. ", " ",
          "2. Coloca a la derecha del  ", "astronauta la estrella.",
          " ",
          "3. Coloca a la izquierda del astronauta ", "el marciano.",
          " ",
          "4. Coloca debajo del astronauta ", "la luna."],
        img: ["mar", "astro", "estrella", "luna"],
        res: [4, 5, 6, 8],
        vozIns: this.sound.add("vozCo11")
      },
      {
        ints: ["1. Coloca en la casilla del centro ",
          "la estrella.", " ",
          "2. Coloca a la izquierda de la ", "estrella la luna.",
          " ",
          "3. Coloca sobre la luna ", "el marciano.",
          " ",
          "4. Coloca debajo de la luna ", "el astronauta."],
        img: ["mar", "luna", "estrella", "astro"],
        res: [1, 4, 5, 7],
        vozIns: this.sound.add("vozCo12")
      },
      {
        ints: ["1. Coloca en la casilla del centro ",
          "el marciano.", " ",
          "2. Coloca a la derecha del  ", " marciano la luna.",
          " ",
          "3. Coloca sobre la luna ", "la estrella.",
          " ",
          "4. Coloca debajo de la luna ", "el astronauta."],
        img: ["estrella", "mar", "luna", "astro"],
        res: [3, 5, 6, 9],
        vozIns: this.sound.add("vozCo13")
      }
    ];

    let n;
    let a;
    let b;
    let c;
    let d;
    let t;

    // n = 7;
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
      n = Phaser.Math.Between(0, (datos.length - 1));
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

      c1.clearTint();
      c2.clearTint();
      c3.clearTint();
      c4.clearTint();
      c5.clearTint();
      c6.clearTint();
      c7.clearTint();
      c8.clearTint();
      c9.clearTint();
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
      intentos = 1;
      aciertos = 0;
      this.scene.start("Configuracion", { insIcono: this.insIcono, musicaIcono: this.musicaIcono, instru: data.ins, scene: this.es, titulo: this.tlt, x: this.x, voz: "vozColocar" });
      puntaje = 0;
    });

    this.ok = this.add.sprite(730, 320, "ok").setInteractive().setScale(0.2);
    this.ok.on("pointerover", () => {
      this.ok.setFrame(1);
    });
    this.ok.on("pointerout", () => {
      this.ok.setFrame(0);
    });
    this.ok.on("pointerdown", () => {
      intentos++;
      this.Objcali.varCalificar();
      //  calificar();
      generar();
      /* console.log("Intentos: " + intentos);
      console.log("aciertos: " + aciertos); */

      //   this.scene.start("Prin");
    });

    this.leer = this.add.sprite(530, 530, "leer").setInteractive().setScale(0.2);
    this.leer.on("pointerover", () => {
      this.leer.setFrame(1);
    });
    this.leer.on("pointerout", () => {
      this.leer.setFrame(0);
    });
    this.leer.on("pointerdown", () => {
      // datos[n].vozIns.play();
      datos[n].vozIns.play();
    //  vozCu0.play();
    });

    this.terminar = this.add.sprite(730, 380, "terminar").setInteractive().setScale(0.2);
    this.terminar.on("pointerover", () => {
      this.terminar.setFrame(1);
    });
    this.terminar.on("pointerout", () => {
      this.terminar.setFrame(0);
    });
    this.terminar.on("pointerdown", () => {
      // this.Objcali.varCalificar();
      // calificar();
      this.inicio = 0;
    });

    this.pregunta = this.add.sprite(750, 450, "info").setInteractive().setScale(0.24);
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
        text: "Arrastra las imágenes para colocarlas en la matriz siguiendo las instrucciones que se encuentran de lado derecho. Una vez hayas colocado las imágenes, selecciona el botón validar para continuar."

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
        error.mute = true;
        correcto.mute = true;
      } else {
        this.musica.setFrame(0);
        this.musicaIcono = 0;
        principal.play();
        principal.mute = false;
        error.mute = false;
        correcto.mute = false;
      // mus = true;
      }
    });
    if (this.musicaIcono === 2) {
      error.mute = true;
      correcto.mute = true;
    }

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
    const zone3 = this.add.zone(259, 245, 46, 45).setRectangleDropZone(90, 90);

    const zone4 = this.add.zone(77, 336, 46, 45).setRectangleDropZone(90, 90);
    const zone5 = this.add.zone(168, 336, 46, 45).setRectangleDropZone(90, 90);
    const zone6 = this.add.zone(259, 336, 46, 45).setRectangleDropZone(90, 90);

    const zone7 = this.add.zone(77, 427, 46, 45).setRectangleDropZone(90, 90);
    const zone8 = this.add.zone(168, 427, 46, 45).setRectangleDropZone(90, 90);
    const zone9 = this.add.zone(259, 427, 46, 45).setRectangleDropZone(90, 90);

    /* const graphics = this.add.graphics();
    // graphics.fillStyle(0xffff00);
    graphics.lineStyle(2, 0xffff00);
    graphics.strokeRect(zone6.x - zone6.input.hitArea.width / 2, zone6.y - zone6.input.hitArea.height / 2, zone6.input.hitArea.width, zone6.input.hitArea.height);
    // graphics.fillRectShape(zone1);
    // graphics.fillRectShape(zone3);
    console.log(zone1); */

    zone1.name = 1;
    zone2.name = 2;
    zone3.name = 3;
    zone4.name = 4;
    zone5.name = 5;
    zone6.name = 6;
    zone7.name = 7;
    zone8.name = 8;
    zone9.name = 9;

    const c1 = this.add.image(77, 245, "cuadrado").setScale(0.45);
    const c2 = this.add.image(168, 245, "cuadrado").setScale(0.45);
    const c3 = this.add.image(259, 245, "cuadrado").setScale(0.45);

    const c4 = this.add.image(77, 336, "cuadrado").setScale(0.45);
    const c5 = this.add.image(168, 336, "cuadrado").setScale(0.45);
    const c6 = this.add.image(259, 336, "cuadrado").setScale(0.45);

    const c7 = this.add.image(77, 427, "cuadrado").setScale(0.45);
    const c8 = this.add.image(168, 427, "cuadrado").setScale(0.45);
    const c9 = this.add.image(259, 427, "cuadrado").setScale(0.45);

    const cuadradoss = [c1, c2, c3, c4, c5, c6, c7, c8, c9];

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
    let ayudaAciertos1 = 0;
    let ayudaAciertos2 = 0;

    this.Objcali = {
      varCalificar: function calificar() {
        /*  console.log(p1);
      console.log(p2);
      console.log(p3); */
        //    console.log(p1.name);
        if (datos[n].res.length === 4) {
          if (datos[n].res[0] === p1.name && p1.x === p11.x && p1.y === p11.y) { puntaje++; ayudaAciertos2++; }
          if (datos[n].res[1] === p2.name && p2.x === p12.x && p2.y === p12.y) { puntaje++; ayudaAciertos2++; }
          if (datos[n].res[2] === p3.name && p3.x === p13.x && p3.y === p13.y) { puntaje++; ayudaAciertos2++; }
          if (datos[n].res[3] === p4.name && p4.x === p14.x && p4.y === p14.y) { puntaje++; ayudaAciertos2++; }
        } else {
          if (datos[n].res[0] === p1.name && p1.x === p11.x && p1.y === p11.y) { puntaje++; ayudaAciertos1++; }
          if (datos[n].res[1] === p2.name && p2.x === p12.x && p2.y === p12.y) { puntaje++; ayudaAciertos1++; }
          if (datos[n].res[2] === p3.name && p3.x === p13.x && p3.y === p13.y) { puntaje++; ayudaAciertos1++; }
        }
        if (ayudaAciertos1 === 3) { aciertos++; }
        if (ayudaAciertos2 === 4) { aciertos++; }

        ayudaAciertos1 = 0;
        ayudaAciertos2 = 0;

        //        console.log("puntaje: " + puntaje);
      }
    };

    /*  function calificar2() {
      if (datos[n].res.length === 4) {
        if (datos[n].res[0] === p1.name && p1.x === p11.x && p1.y === p11.y) { cuadradoss[p1.name - 1].setTint(0x00AA00); }
        if (datos[n].res[1] === p2.name && p2.x === p12.x && p2.y === p12.y) { cuadradoss[p2.name - 1].setTint(0x00AA00); }
        if (datos[n].res[2] === p3.name && p3.x === p13.x && p3.y === p13.y) { cuadradoss[p3.name - 1].setTint(0x00AA00); }
        if (datos[n].res[3] === p4.name && p4.x === p14.x && p4.y === p14.y) { cuadradoss[p4.name - 1].setTint(0x00AA00); }
        console.log(p1.name);
      } else {
        if (datos[n].res[0] === p1.name && p1.x === p11.x && p1.y === p11.y) { cuadradoss[p1.name - 1].setTint(0x00AA00); }
        if (datos[n].res[1] === p2.name && p2.x === p12.x && p2.y === p12.y) { cuadradoss[p2.name - 1].setTint(0x00AA00); }
        if (datos[n].res[2] === p3.name && p3.x === p13.x && p3.y === p13.y) { cuadradoss[p3.name - 1].setTint(0x00AA00); }
        console.log("hola2");
      }
    } */
    p1 = { name: 100 };
    p2 = { name: 100 };
    p3 = { name: 100 };
    p4 = { name: 100 };

    this.input.on("drop", function(pointer, gameObject, dropZone) {
      gameObject.x = dropZone.x;
      gameObject.y = dropZone.y;

      if (datos[n].img[0] === gameObject.texture.key) {
        //     console.log("hola");
        p1 = dropZone; p11 = gameObject; if (datos[n].res[0] === dropZone.name && dropZone.x === gameObject.x && dropZone.y === gameObject.y) { cuadradoss[dropZone.name - 1].setTint(0x00AA00); correcto.play(); } else { cuadradoss[dropZone.name - 1].setTint(0xff0000); error.play(); }
      }
      if (datos[n].img[1] === gameObject.texture.key) { p2 = dropZone; p12 = gameObject; if (datos[n].res[1] === dropZone.name && dropZone.x === gameObject.x && dropZone.y === gameObject.y) { cuadradoss[dropZone.name - 1].setTint(0x00AA00); correcto.play(); } else { cuadradoss[dropZone.name - 1].setTint(0xff0000); error.play(); } }
      if (datos[n].img[2] === gameObject.texture.key) { p3 = dropZone; p13 = gameObject; if (datos[n].res[2] === dropZone.name && dropZone.x === gameObject.x && dropZone.y === gameObject.y) { cuadradoss[dropZone.name - 1].setTint(0x00AA00); correcto.play(); } else { cuadradoss[dropZone.name - 1].setTint(0xff0000); error.play(); } }
      if (datos[n].img[3] === gameObject.texture.key) { p4 = dropZone; p14 = gameObject; if (datos[n].res[3] === dropZone.name && dropZone.x === gameObject.x && dropZone.y === gameObject.y) { cuadradoss[dropZone.name - 1].setTint(0x00AA00); correcto.play(); } else { cuadradoss[dropZone.name - 1].setTint(0xff0000); error.play(); } }
      //  calificar2();
      //   console.log(dropZone.name);
      //  calificar23();
    });
  }
}

function onEvent() {
  this.inicio -= 1;
  // this.contador.text =
  this.contador.setText("Tiempo: " + formato(this.inicio));
  if (this.inicio <= 0) {
    this.contador.setText("Tiempo: " + "0:00");
    this.Objcali.varCalificar();
    this.scene.start("Punt", { punt: puntaje, letra: "l", nomb: "Comprensión de Instrucciones", time: this.min, sce: "Colocar", musicaIcono: this.musicaIcono, insIcono: this.insIcono, Intentos: intentos, Aciertos: aciertos });
    puntaje = 0;
    intentos = 1;
    aciertos = 0;
    principal.stop();
  }
}
function formato(segundos) {
  const minutos = Math.floor(segundos / 60);
  let sec = segundos % 60;
  sec = sec.toString().padStart(2, "0");
  return `${minutos}:${sec}`;
}
