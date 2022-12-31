import Phaser from "phaser";
import Swal from "sweetalert2";
let puntaje = 0;
let principal;
export class Ordenar extends Phaser.Scene {
  constructor() {
    super({ key: "Ordenar" });
  }

  preload() {
    this.load.image("fondo", "assets/sprites/UI/fondo.png");
    // Titulo
    this.load.image("tltSecuencia", "assets/sprites/UI/tltSecuencia.png");
    this.load.image("unoo", "assets/sprites/UI/unoo.jpg");

    // Numeros
    this.load.spritesheet("nums", "assets/sprites/UI/numeros.png", { frameWidth: 202, frameHeight: 202 });
    this.load.spritesheet("nums2", "assets/sprites/UI/numeros2.png", { frameWidth: 202, frameHeight: 202 });

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

    // Botones
    this.load.spritesheet("atras", "assets/sprites/atras.png", { frameWidth: 201, frameHeight: 196 });
    this.load.spritesheet("ok", "assets/sprites/UI/ok.png", { frameWidth: 200, frameHeight: 201 });
    this.load.spritesheet("musica", "assets/sprites/UI/musica.png", { frameWidth: 205.3, frameHeight: 207 });
    this.load.spritesheet("instrucciones", "assets/sprites/UI/instrucciones.png", { frameWidth: 206, frameHeight: 208 });
    this.load.spritesheet("pregunta", "assets/sprites/UI/pregunta.png", { frameWidth: 206, frameHeight: 185 });

    // Sonidos
    this.load.audio("principal", "assets/sounds/ambiente.mp3");
    this.load.audio("vozOrdenar", "assets/sounds/voz/vozOrdenar.mp3");
  }

  create(data) {
    this.ins = data.ins;
    this.es = data.es;
    this.tlt = data.tlt;
    this.x = data.x;
    this.insIcono = data.insIcono;
    this.musicaIcono = data.musicaIcono;

    // Sonidos
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
    this.add.sprite(150, 400, "nums2").setInteractive().setScale(0.6).setFrame(0);
    this.add.sprite(300, 400, "nums2").setInteractive().setScale(0.6).setFrame(1);
    this.add.sprite(450, 400, "nums2").setInteractive().setScale(0.6).setFrame(2);
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

    function generar() {
      if (dificultad <= 4) {
        nombre = ["cabello", "plantar", "cabello2", "galletas", "patos", "perro", "bb", "burbujas", "dientes", "pez", "pio", "dibujo"];
        n = Phaser.Math.Between(0, 11);
        ord = [0, 1, 2];
        ord.sort(() => Math.random() - 0.5);
      }

      if (dificultad > 4 && dificultad <= 8) {
        nombre = ["globos", "resbaladera", "levantarse", "nieve", "planta2", "planta3", "hombre", "nina"];
        n = Phaser.Math.Between(0, 7);
        ord = [0, 1, 2, 3];

        ord.sort(() => Math.random() - 0.5);
        d.setAlpha(1);
        dd.setAlpha(1);
        dd1.setAlpha(1);
      }
      if (dificultad > 8) {
        nombre = ["cabello", "plantar", "cabello2", "galletas", "patos",
          "perro", "bb", "burbujas", "dientes", "pez", "pio"];
        n = Phaser.Math.Between(0, 10);
        ord = [0, 1, 2];
        ord.sort(() => Math.random() - 0.5);
        dificultad = 1;
        d.setAlpha(0);
        dd.setAlpha(0);
        dd1.setAlpha(0);
      }
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

    function calificar() {
      console.log("p1 " + p1);
      console.log("p2 " + p2);
      console.log("p3 " + p3);
      console.log("p4 " + p4);

      if (p1 === 150 && p11.x === 150) { puntaje = puntaje + 0.5; }
      if (p2 === 300 && p12.x === 300) { puntaje = puntaje + 0.5; }
      if (p3 === 450 && p13.x === 450) { puntaje = puntaje + 0.5; }
      if (p4 === 600 && p14.x === 600) { puntaje = puntaje + 0.5; }

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
      this.scene.start("Configuracion", { insIcono: this.insIcono, musicaIcono: this.musicaIcono, instru: data.ins, scene: this.es, titulo: this.tlt, x: this.x, voz: "vozOrdenar" });
    });

    this.ok = this.add.sprite(750, 300, "ok").setInteractive().setScale(0.2);
    this.ok.on("pointerover", () => {
      this.ok.setFrame(1);
    });
    this.ok.on("pointerout", () => {
      this.ok.setFrame(0);
    });
    this.ok.on("pointerdown", () => {
      calificar();
      //   this.scene.start("Prin");

      dificultad++;

      // generar();
      res();
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
        text: "Arrastra las imágenes para ordenar. Ordena las imágenes según su secuencia lógica, arrastrando al cuadrado que está sobre el número que corresponda. Una vez las imágenes estén ordenadas, selecciona el botón 👍 para continuar."

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
      } else {
        this.musica.setFrame(0);
        this.musicaIcono = 0;
        principal.play();
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

      console.log(gameObject.frame.name);
      console.log(gameObject);
      if (gameObject.frame.name === 0) { p1 = gameObject.x; p11 = gameObject; }
      if (gameObject.frame.name === 1) { p2 = gameObject.x; p12 = gameObject; }
      if (gameObject.frame.name === 2) { p3 = gameObject.x; p13 = gameObject; }
      if (gameObject.frame.name === 3) { p4 = gameObject.x; p14 = gameObject; }

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
    this.scene.start("Punt", { punt: puntaje, letra: "a", nomb: "Secuancia Lógica", time: this.min, sce: "Ordenar", musicaIcono: this.musicaIcono });
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
