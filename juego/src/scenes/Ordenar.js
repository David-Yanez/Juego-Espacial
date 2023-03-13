import Phaser from "phaser";
import Swal from "sweetalert2";
let puntaje = 0;
let principal;
let aciertos = 0;
let intentos = 0;
export class Ordenar extends Phaser.Scene {
  constructor() {
    super({ key: "Ordenar" });
  }

  preload() {
    this.load.image("fondo", "assets/sprites/UI/fondo.png");
    // Titulo
    this.load.image("tltSecuencia", "assets/sprites/UI/tltSecuencia.png");
    // this.load.image("unoo", "assets/sprites/UI/unoo.jpg");

    // Numeros
    this.load.spritesheet("nums", "assets/sprites/UI/numeros.png", { frameWidth: 202, frameHeight: 202 });
    this.load.spritesheet("nums2", "assets/sprites/UI/numeros23.png", { frameWidth: 202, frameHeight: 202 });

    // Secuencias
    this.load.spritesheet("cabello", "assets/sprites/secuencia/cabello.png", { frameWidth: 202, frameHeight: 202 });
    this.load.spritesheet("globos", "assets/sprites/secuencia/globos.png", { frameWidth: 202, frameHeight: 202 });
    this.load.spritesheet("plantar", "assets/sprites/secuencia/plantar.png", { frameWidth: 202, frameHeight: 202 });
    this.load.spritesheet("resbaladera", "assets/sprites/secuencia/resbaladera.png", { frameWidth: 202, frameHeight: 202 });
    this.load.spritesheet("cabello2", "assets/sprites/secuencia/cabello2.png", { frameWidth: 202, frameHeight: 202 });
    this.load.spritesheet("galletas", "assets/sprites/secuencia/galletas.png", { frameWidth: 202, frameHeight: 202 });
    this.load.spritesheet("levantarse", "assets/sprites/secuencia/levantarse.png", { frameWidth: 202, frameHeight: 202 });
    this.load.spritesheet("patos", "assets/sprites/secuencia/patos.png", { frameWidth: 202, frameHeight: 202 });
    this.load.spritesheet("perro", "assets/sprites/secuencia/perro.png", { frameWidth: 202, frameHeight: 202 });
    this.load.spritesheet("bb", "assets/sprites/secuencia/bb.png", { frameWidth: 202, frameHeight: 202 });
    this.load.spritesheet("burbujas", "assets/sprites/secuencia/burbujas.png", { frameWidth: 202, frameHeight: 202 });
    this.load.spritesheet("dientes", "assets/sprites/secuencia/dientes.png", { frameWidth: 202, frameHeight: 202 });
    this.load.spritesheet("nieve", "assets/sprites/secuencia/nieve.png", { frameWidth: 202, frameHeight: 202 });
    this.load.spritesheet("pez", "assets/sprites/secuencia/pez.png", { frameWidth: 202, frameHeight: 202 });
    this.load.spritesheet("pio", "assets/sprites/secuencia/pio.png", { frameWidth: 202, frameHeight: 202 });
    this.load.spritesheet("pio2", "assets/sprites/secuencia/pio2.png", { frameWidth: 202, frameHeight: 202 });
    this.load.spritesheet("planta2", "assets/sprites/secuencia/planta2.png", { frameWidth: 202, frameHeight: 202 });
    this.load.spritesheet("planta3", "assets/sprites/secuencia/planta3.png", { frameWidth: 202, frameHeight: 202 });
    this.load.spritesheet("hombre", "assets/sprites/secuencia/hombre.png", { frameWidth: 202, frameHeight: 202 });
    this.load.spritesheet("nina", "assets/sprites/secuencia/nina.png", { frameWidth: 202, frameHeight: 202 });
    this.load.spritesheet("dibujo", "assets/sprites/secuencia/dibujo.png", { frameWidth: 202, frameHeight: 202 });
    this.load.spritesheet("alberja", "assets/sprites/secuencia/alberja.png", { frameWidth: 202, frameHeight: 202 });
    this.load.spritesheet("arbol", "assets/sprites/secuencia/arbol.png", { frameWidth: 202, frameHeight: 202 });
    this.load.spritesheet("cebolla", "assets/sprites/secuencia/cebolla.png", { frameWidth: 202, frameHeight: 202 });
    this.load.spritesheet("color", "assets/sprites/secuencia/color.png", { frameWidth: 202, frameHeight: 202 });
    this.load.spritesheet("comer", "assets/sprites/secuencia/comer.png", { frameWidth: 202, frameHeight: 202 });
    this.load.spritesheet("comer2", "assets/sprites/secuencia/comer2.png", { frameWidth: 202, frameHeight: 202 });
    this.load.spritesheet("durazno", "assets/sprites/secuencia/durazno.png", { frameWidth: 202, frameHeight: 202 });
    this.load.spritesheet("edificio", "assets/sprites/secuencia/edificio.png", { frameWidth: 202, frameHeight: 202 });
    this.load.spritesheet("fresa", "assets/sprites/secuencia/fresa.png", { frameWidth: 202, frameHeight: 202 });
    this.load.spritesheet("helados", "assets/sprites/secuencia/helados.png", { frameWidth: 202, frameHeight: 202 });
    this.load.spritesheet("lapiz", "assets/sprites/secuencia/lapiz.png", { frameWidth: 202, frameHeight: 202 });
    this.load.spritesheet("manzana", "assets/sprites/secuencia/manzana.png", { frameWidth: 202, frameHeight: 202 });
    this.load.spritesheet("nieve2", "assets/sprites/secuencia/nieve2.png", { frameWidth: 202, frameHeight: 202 });
    this.load.spritesheet("niño", "assets/sprites/secuencia/niño.png", { frameWidth: 202, frameHeight: 202 });
    this.load.spritesheet("oruga", "assets/sprites/secuencia/oruga.png", { frameWidth: 202, frameHeight: 202 });
    this.load.spritesheet("papa", "assets/sprites/secuencia/papa.png", { frameWidth: 202, frameHeight: 202 });
    this.load.spritesheet("pastel", "assets/sprites/secuencia/pastel.png", { frameWidth: 202, frameHeight: 202 });
    this.load.spritesheet("pepino", "assets/sprites/secuencia/pepino.png", { frameWidth: 202, frameHeight: 202 });
    this.load.spritesheet("rosa", "assets/sprites/secuencia/rosa.png", { frameWidth: 202, frameHeight: 202 });
    this.load.spritesheet("sandia", "assets/sprites/secuencia/sandia.png", { frameWidth: 202, frameHeight: 202 });
    this.load.spritesheet("sapo", "assets/sprites/secuencia/sapo.png", { frameWidth: 202, frameHeight: 202 });
    this.load.spritesheet("tomate", "assets/sprites/secuencia/tomate.png", { frameWidth: 202, frameHeight: 202 });
    this.load.spritesheet("vela", "assets/sprites/secuencia/vela.png", { frameWidth: 202, frameHeight: 202 });
    this.load.spritesheet("vela2", "assets/sprites/secuencia/vela2.png", { frameWidth: 202, frameHeight: 202 });
    this.load.spritesheet("zanahoria", "assets/sprites/secuencia/zanahoria.png", { frameWidth: 202, frameHeight: 202 });

    // Botones
    this.load.spritesheet("atras", "assets/sprites/atras.png", { frameWidth: 201, frameHeight: 196 });
    this.load.spritesheet("terminar", "assets/sprites/UI/BtnTerminar.png", { frameWidth: 454.5, frameHeight: 193 });
    this.load.spritesheet("ok", "assets/sprites/UI/ok.png", { frameWidth: 456, frameHeight: 201 });
    this.load.spritesheet("musica", "assets/sprites/UI/musica.png", { frameWidth: 205.3, frameHeight: 207 });
    this.load.spritesheet("instrucciones", "assets/sprites/UI/instrucciones.png", { frameWidth: 206, frameHeight: 208 });
    this.load.spritesheet("info", "assets/sprites/UI/info.png", { frameWidth: 170, frameHeight: 160 });

    // Sonidos
    this.load.audio("principal", "assets/sounds/ambiente.mp3");
    this.load.audio("vozOrdenar", "assets/sounds/voz/vozOrdenar.mp3");
    this.load.audio("correcto", "assets/sounds/correcto.mp3");
    this.load.audio("error", "assets/sounds/error.mp3");
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

    const voz = this.sound.add("vozOrdenar");
    principal = this.sound.add("principal");
    principal.volume = 0.2;
    principal.loop = true;
    principal.play();
    // Fondo
    // this.add.image(0, 0, "bgSol").setDisplayOrigin(0, 0);
    this.add.image(0, 0, "fondo").setDisplayOrigin(0, 0);
    // Titulo
    this.add.image(160, 10, "tltSecuencia").setDisplayOrigin(0, 0).setScale(0.5);

    // Contador
    this.min = data.time / 60;
    this.inicio = data.time;
    this.contador = this.add.text(300, 100, "Tiempo: " + formato(this.inicio), { fontFamily: "Times New Roman", fontSize: 25, color: "#00ff00" });
    this.time.addEvent({ delay: 1000, callback: onEvent, callbackScope: this, loop: true });
    // this.add.image(70, 380, "unoo").setDisplayOrigin(0, 0).setScale(0.3);
    // Numeros

    const aa = this.add.sprite(150, 400, "nums2").setInteractive().setScale(0.6).setFrame(0);
    const bb = this.add.sprite(300, 400, "nums2").setInteractive().setScale(0.6).setFrame(1);
    const cc = this.add.sprite(450, 400, "nums2").setInteractive().setScale(0.6).setFrame(2);
    const dd = this.add.sprite(600, 400, "nums2").setInteractive().setScale(0.6).setFrame(3);

    this.add.sprite(150, 510, "nums").setInteractive().setScale(0.5).setFrame(0);
    this.add.sprite(300, 510, "nums").setInteractive().setScale(0.5).setFrame(1);
    this.add.sprite(450, 510, "nums").setInteractive().setScale(0.5).setFrame(2);
    const dd1 = this.add.sprite(600, 510, "nums").setInteractive().setScale(0.5).setFrame(3);

    let nombre = [];
    let n;
    let dificultad = 0;
    let ord = [];
    let a;
    let b;
    let c;
    let d;
    generar();

    a = this.add.sprite(100, 240, nombre[n]).setScale(0.45).setFrame(ord[0]).setInteractive();
    b = this.add.sprite(200, 240, nombre[n]).setScale(0.45).setFrame(ord[1]).setInteractive();
    c = this.add.sprite(300, 240, nombre[n]).setScale(0.45).setFrame(ord[2]).setInteractive();
    d = this.add.sprite(400, 240, nombre[n]).setScale(0.45).setFrame(ord[3]).setInteractive();
    d.setAlpha(0);
    dd.setAlpha(0);
    dd1.setAlpha(0);

    this.input.setDraggable(a);
    this.input.setDraggable(b);
    this.input.setDraggable(c);
    this.input.setDraggable(d);
    // a.input.draggable = true;
    intentos = 3;
    function generar() {
      if (dificultad <= 4) {
        nombre = ["cabello", "plantar", "cabello2", "galletas", "patos", "perro", "bb", "burbujas", "dientes", "pez", "pio", "dibujo", "alberja",
          "cebolla", "color", "comer", "comer2", "durazno", "fresa", "manzana", "nieve2", "oruga", "papa", "pepino", "sapo", "tomate", "vela2", "zanahoria"];
        n = Phaser.Math.Between(0, (nombre.length - 1));
        ord = [0, 1, 2];
        ord.sort(() => Math.random() - 0.5);
        intentos = intentos + 3;
      }

      if (dificultad > 4 && dificultad <= 8) {
        nombre = ["globos", "resbaladera", "levantarse", "nieve", "planta2", "planta3", "hombre", "nina", "arbol", "edificio", "helados", "lapiz", "niño", "pastel", "rosa", "sandia", "vela"];
        n = Phaser.Math.Between(0, (nombre.length - 1));
        ord = [0, 1, 2, 3];
        intentos = intentos + 4;
        ord.sort(() => Math.random() - 0.5);
        d.setAlpha(1);
        dd.setAlpha(1);
        dd1.setAlpha(1);
      }
      if (dificultad > 8) {
        nombre = ["cabello", "plantar", "cabello2", "galletas", "patos", "perro", "bb", "burbujas", "dientes", "pez", "pio", "dibujo", "alberja",
          "cebolla", "color", "comer", "comer2", "durazno", "fresa", "manzana", "nieve2", "oruga", "papa", "pepino", "sapo", "tomate", "vela2", "zanahoria"];
        n = Phaser.Math.Between(0, (nombre.length - 1));
        ord = [0, 1, 2];
        intentos = intentos + 3;
        ord.sort(() => Math.random() - 0.5);
        dificultad = 1;
        d.setAlpha(0);
        dd.setAlpha(0);
        dd1.setAlpha(0);
      }
      console.log(nombre[n]);
      aa.clearTint();
      bb.clearTint();
      cc.clearTint();
      dd.clearTint();
    }

    function res() {
      console.log(dificultad);
      generar();
      a.setTexture(nombre[n]).setFrame(ord[0]);
      b.setTexture(nombre[n]).setFrame(ord[1]);
      c.setTexture(nombre[n]).setFrame(ord[2]);
      d.setTexture(nombre[n]).setFrame(ord[3]);
      a.x = 100;
      a.y = 240;
      b.x = 200;
      b.y = 240;
      c.x = 300;
      c.y = 240;
      d.x = 400;
      d.y = 240;
    }

    this.Objcali = {
      varCalificar: function calificar() {
        console.log("p1 " + p1);
        console.log("p2 " + p2);
        console.log("p3 " + p3);
        console.log("p4 " + p4);

        if (p1 === 150 && p11.x === 150) { puntaje = puntaje + 0.5; aciertos++; }
        if (p2 === 300 && p12.x === 300) { puntaje = puntaje + 0.5; aciertos++; }
        if (p3 === 450 && p13.x === 450) { puntaje = puntaje + 0.5; aciertos++; }
        if (p4 === 600 && p14.x === 600) { puntaje = puntaje + 0.5; aciertos++; }

        console.log("calificacion " + puntaje);

        p1 = 0;
        p2 = 0;
        p3 = 0;
        p4 = 0;
        p11 = 0;
        p12 = 0;
        p13 = 0;
        p14 = 0;
      }
    };

    function calificar2() {
      if (p1 === 150 && p11.x === 150) { aa.setTint(0x00AA00); } else { aa.setTint(0xff0000); }
      if (p2 === 300 && p12.x === 300) { bb.setTint(0x00AA00); } else { bb.setTint(0xff0000); }
      if (p3 === 450 && p13.x === 450) { cc.setTint(0x00AA00); } else { cc.setTint(0xff0000); }
      if (p4 === 600 && p14.x === 600) { dd.setTint(0x00AA00); } else { dd.setTint(0xff0000); }
    }

    this.atras = this.add.sprite(30, 30, "atras").setInteractive().setScale(0.2);
    this.atras.on("pointerover", () => {
      this.atras.setFrame(1);
    });
    this.atras.on("pointerout", () => {
      this.atras.setFrame(0);
    });
    this.atras.on("pointerdown", () => {
      voz.stop();
      principal.stop();
      intentos = 0;
      aciertos = 0;
      puntaje = 0;
      this.scene.start("Configuracion", { insIcono: this.insIcono, musicaIcono: this.musicaIcono, instru: data.ins, scene: this.es, titulo: this.tlt, x: this.x, voz: "vozOrdenar" });
    });

    this.ok = this.add.sprite(730, 300, "ok").setInteractive().setScale(0.2);
    this.ok.on("pointerover", () => {
      this.ok.setFrame(1);
    });
    this.ok.on("pointerout", () => {
      this.ok.setFrame(0);
    });
    this.ok.on("pointerdown", () => {
      this.Objcali.varCalificar();
      //   calificar();
      //   this.scene.start("Prin");

      dificultad++;
      console.log("Intentos: " + intentos);
      console.log("aciertos: " + aciertos);

      // generar();
      res();
    });

    this.terminar = this.add.sprite(730, 370, "terminar").setInteractive().setScale(0.2);
    this.terminar.on("pointerover", () => {
      this.terminar.setFrame(1);
    });
    this.terminar.on("pointerout", () => {
      this.terminar.setFrame(0);
    });
    this.terminar.on("pointerdown", () => {
     // this.Objcali.varCalificar();
      //   calificar();
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
        text: "Ordena las imágenes según su secuencia lógica. Arrastra la imagen al cuadrado que está sobre el número que corresponda. Una vez las imágenes estén ordenadas, selecciona el botón validar para continuar."

      });
    });

    this.add.text(160, 140, "Arrastra las imágenes dentro del casillero para ordenarlas según su secuencia lógica", { font: "13px Arial", fill: "#e8dfe1" }).setStroke("#e01650", 2);
    this.add.text(150, 160, "y luego da clic en el boton validar. Para corregir arrastralas nuevamente al lugar correcto.", { font: "13px Arial", fill: "#e8dfe1" }).setStroke("#e01650", 2);

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
        error.mute = true;
        correcto.mute = true;
      } else {
        this.musica.setFrame(0);
        this.musicaIcono = 0;
        principal.play();
        principal.mute = false;
        error.mute = false;
        correcto.mute = false;
      }
    });
    if (this.musicaIcono === 2) {
      error.mute = true;
      correcto.mute = true;
    }

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
        voz.mute = true;
      } else {
        this.ins.setFrame(0);
        this.insIcono = 0;
        voz.mute = false;
      }
    });

    //  zone
    const zone0 = this.add.zone(150, 400, 100, 100).setRectangleDropZone(120, 120);
    const zone1 = this.add.zone(300, 400, 100, 100).setRectangleDropZone(120, 120);
    const zone2 = this.add.zone(450, 400, 100, 100).setRectangleDropZone(120, 120);
    const zone3 = this.add.zone(600, 400, 100, 100).setRectangleDropZone(120, 120);

    zone0.name = 0;
    zone1.name = 1;
    zone2.name = 2;
    zone3.name = 3;

    this.input.on("dragstart", function(pointer, gameObject) {
      this.children.bringToTop(gameObject);
    }, this);
    this.input.on("drag", function(pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX;
      gameObject.y = dragY;

      /* if (gameObject.frame.name === 0) { p1 = gameObject.x; }
      if (gameObject.frame.name === 1) { p2 = gameObject.x; }
      if (gameObject.frame.name === 2) { p3 = gameObject.x; }
      if (gameObject.frame.name === 3) { p4 = gameObject.x; } */
    });

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;

    let p11;
    let p12;
    let p13;
    let p14;

    this.input.on("drop", function(pointer, gameObject, dropZone) {
      gameObject.x = dropZone.x;
      gameObject.y = dropZone.y;

      /* console.log(gameObject); */
      if (gameObject.frame.name === 0) { p1 = gameObject.x; p11 = gameObject; }
      if (gameObject.frame.name === 1) { p2 = gameObject.x; p12 = gameObject; }
      if (gameObject.frame.name === 2) { p3 = gameObject.x; p13 = gameObject; }
      if (gameObject.frame.name === 3) { p4 = gameObject.x; p14 = gameObject; }

      if (gameObject.frame.name === dropZone.name) {
        console.log("correcto");
        correcto.play();
      } else {
        error.play();
      }
      calificar2();

      //  console.log("drop x: " + gameObject.x);
      //  console.log(dropZone);
      //   console.log(gameObject.texture.key);

      // gameObject.input.enabled = false;
    });
  }
}

function onEvent() {
  this.inicio -= 1;
  this.contador.setText("Tiempo: " + formato(this.inicio));
  if (this.inicio <= 0) {
    this.contador.setText("Tiempo: " + "0:00");
    this.Objcali.varCalificar();
    this.scene.start("Punt", { punt: puntaje, letra: "a", nomb: "Secuencia Lógica", time: this.min, sce: "Ordenar", musicaIcono: this.musicaIcono, Intentos: intentos, Aciertos: aciertos });
    puntaje = 0;
    intentos = 0;
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
