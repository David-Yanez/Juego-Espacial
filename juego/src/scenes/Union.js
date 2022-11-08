import Phaser from "phaser";
let puntaje;
puntaje = 0;
export class Union extends Phaser.Scene {
  constructor() {
    super({ key: "Union" });
  }

  preload() {
    this.load.image("fondo", "assets/sprites/UI/fondo.png");
    this.load.image("fle", "assets/sprites/UI/a.png");
    // Titulo
    this.load.image("tltUnion", "assets/sprites/UI/tltUnion.png");

    /// juegos

    this.load.spritesheet("astro1", "assets/sprites/juegos/astro1.png", { frameWidth: 202, frameHeight: 202 });
    this.load.spritesheet("marciano1", "assets/sprites/juegos/marciano1.png", { frameWidth: 202, frameHeight: 202 });
    this.load.spritesheet("nave1", "assets/sprites/juegos/nave1.png", { frameWidth: 202, frameHeight: 209 });

    // Botones
    this.load.spritesheet("atras", "assets/sprites/atras.png", { frameWidth: 201, frameHeight: 196 });
    this.load.spritesheet("ok", "assets/sprites/UI/ok.png", { frameWidth: 200, frameHeight: 201 });
    this.load.spritesheet("musica", "assets/sprites/UI/musica.png", { frameWidth: 205.3, frameHeight: 207 });
    this.load.spritesheet("instrucciones", "assets/sprites/UI/instrucciones.png", { frameWidth: 206, frameHeight: 208 });
    this.load.spritesheet("flechas", "assets/sprites/juegos/flechas.png", { frameWidth: 202, frameHeight: 202 });
  }

  create(data) {
    // Fondo
    // this.add.image(0, 0, "bgJupi").setDisplayOrigin(0, 0);
    this.add.image(0, 0, "fondo").setDisplayOrigin(0, 0);
    // Titulo
    this.add.image(170, 10, "tltUnion").setDisplayOrigin(0, 0).setScale(0.45);

    // Contador
    this.inicio = data.time;
    this.contador = this.add.text(300, 100, "Tiempo: " + formato(this.inicio), { fontFamily: "Times New Roman", fontSize: 25, color: "#00ff00" });
    this.time.addEvent({ delay: 1000, callback: onEvent, callbackScope: this, loop: true });

    const nombre = ["marciano1", "astro1", "nave1"];
    let n;
    let a;
    let b;
    let c;
    let d;
    let e;
    let a1;
    let b1;
    let c1;
    let d1;
    let e1;
    let aa;
    let bb;
    let cc;
    let dd;
    let ee;
    let fle;
    let dificultad = 0;
    generar2();
    function generar2() {
      n = Phaser.Math.Between(0, 2);
      if (dificultad <= 4) {
        aa = Phaser.Math.Between(0, 3);
        bb = Phaser.Math.Between(0, 3);
        cc = Phaser.Math.Between(0, 3);

        fle = [aa, bb, cc];
        fle.sort(() => Math.random() - 0.5);
      }
      if (dificultad >= 4 && dificultad <= 8) {
        aa = Phaser.Math.Between(0, 3);
        bb = Phaser.Math.Between(0, 3);
        cc = Phaser.Math.Between(0, 3);
        dd = Phaser.Math.Between(0, 3);

        fle = [aa, bb, cc, dd];
        fle.sort(() => Math.random() - 0.5);
      }
      if (dificultad >= 8) {
        aa = Phaser.Math.Between(0, 3);
        bb = Phaser.Math.Between(0, 3);
        cc = Phaser.Math.Between(0, 3);
        dd = Phaser.Math.Between(0, 3);
        ee = Phaser.Math.Between(0, 3);

        fle = [aa, bb, cc, dd, ee];
        fle.sort(() => Math.random() - 0.5);
      }
    }

    a = this.add.sprite(100, 240, nombre[n]).setScale(0.3).setFrame(aa);
    b = this.add.sprite(200, 240, nombre[n]).setScale(0.3).setFrame(bb);
    c = this.add.sprite(300, 240, nombre[n]).setScale(0.3).setFrame(cc);
    d = this.add.sprite(400, 240, nombre[n]).setScale(0.3).setFrame(dd);
    e = this.add.sprite(500, 240, nombre[n]).setScale(0.3).setFrame(ee);

    a1 = this.add.sprite(100, 550, "flechas").setScale(0.3).setFrame(fle[0]);
    b1 = this.add.sprite(200, 550, "flechas").setScale(0.3).setFrame(fle[1]);
    c1 = this.add.sprite(300, 550, "flechas").setScale(0.3).setFrame(fle[2]);
    d1 = this.add.sprite(400, 550, "flechas").setScale(0.3).setFrame(fle[3]);
    e1 = this.add.sprite(500, 550, "flechas").setScale(0.3).setFrame(fle[4]);

    nivel();

    // this.loadTexture(200, 240, nombre[n]).setScale(0.3).setFrame(1);

    function listo() {
      generar2();
      a.setTexture(nombre[n]).setFrame(aa);
      b.setTexture(nombre[n]).setFrame(bb);
      c.setTexture(nombre[n]).setFrame(cc);
      d.setTexture(nombre[n]).setFrame(dd);
      e.setTexture(nombre[n]).setFrame(ee);

      a1.setFrame(fle[0]);
      b1.setFrame(fle[1]);
      c1.setFrame(fle[2]);
      d1.setFrame(fle[3]);
      e1.setFrame(fle[4]);
    }

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

    this.ok = this.add.sprite(600, 400, "ok").setInteractive().setScale(0.2);
    this.ok.on("pointerover", () => {
      this.ok.setFrame(1);
    });
    this.ok.on("pointerout", () => {
      this.ok.setFrame(0);
      // a.setTexture("marciano1").setFrame(2);
    });
    this.ok.on("pointerdown", () => {
      //   this.scene.start("Prin");
     // this.ok.setFrame(0);
      nivel();
      listo();
      calificar();
      dificultad++;
      puntaje = puntaje + puntos;
      console.log(puntaje);
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

    const graphi = this.add.graphics({ fillStyle: { color: 0xff0000 } });
    const graphic1 = this.add.graphics();
    const graphic2 = this.add.graphics();
    const graphic3 = this.add.graphics();
    const graphic4 = this.add.graphics();
    const graphic5 = this.add.graphics();

    const line1 = new Phaser.Geom.Line();
    const line2 = new Phaser.Geom.Line();
    const line3 = new Phaser.Geom.Line();
    const line4 = new Phaser.Geom.Line();
    const line5 = new Phaser.Geom.Line();

    const circle1 = new Phaser.Geom.Circle(100, 300, 7);
    const circle2 = new Phaser.Geom.Circle(200, 300, 7);
    const circle3 = new Phaser.Geom.Circle(300, 300, 7);
    const circle4 = new Phaser.Geom.Circle(400, 300, 7);
    const circle5 = new Phaser.Geom.Circle(500, 300, 7);

    const circle6 = new Phaser.Geom.Circle(100, 500, 7);
    const circle7 = new Phaser.Geom.Circle(200, 500, 7);
    const circle8 = new Phaser.Geom.Circle(300, 500, 7);
    const circle9 = new Phaser.Geom.Circle(400, 500, 7);
    const circle10 = new Phaser.Geom.Circle(500, 500, 7);

    // circle4.

    graphi.fillCircleShape(circle1);
    graphi.fillCircleShape(circle2);
    graphi.fillCircleShape(circle3);
    // graphi.fillCircleShape(circle4);
    // graphi.fillCircleShape(circle5);

    graphi.fillCircleShape(circle6);
    graphi.fillCircleShape(circle7);
    graphi.fillCircleShape(circle8);
    // graphi.fillCircleShape(circle9);
    // graphi.fillCircleShape(circle10);

    graphi.fillStyle(0xff0000);
    let x1;
    let x2;
    let y1;
    let y2;

    let p1;
    let p2;

    let puntos;

    function nivel() {
      if (dificultad === 0) {
        d.setAlpha(0);
        e.setAlpha(0);
        //  circle4.setAlpha(0);

        d1.setAlpha(0);
        e1.setAlpha(0);
      }
      if (dificultad === 4) {
        d.setAlpha(1);
        graphi.fillCircleShape(circle4);

        d1.setAlpha(1);
        graphi.fillCircleShape(circle9);
      }
      if (dificultad === 8) {
        e.setAlpha(1);
        graphi.fillCircleShape(circle5);

        e1.setAlpha(1);
        graphi.fillCircleShape(circle10);
      }
    }

    this.input.on("pointerdown", function(pointer) {
      if (circle1.contains(pointer.x, pointer.y)) {
        x1 = pointer.x;
        y1 = pointer.y;
        p1 = aa;
      }

      if (circle2.contains(pointer.x, pointer.y)) {
        x1 = pointer.x;
        y1 = pointer.y;
        p1 = bb;
      }
      if (circle3.contains(pointer.x, pointer.y)) {
        x1 = pointer.x;
        y1 = pointer.y;

        p1 = cc;
      }
      if (circle4.contains(pointer.x, pointer.y)) {
        x1 = pointer.x;
        y1 = pointer.y;

        p1 = dd;
      }
      if (circle5.contains(pointer.x, pointer.y)) {
        x1 = pointer.x;
        y1 = pointer.y;

        p1 = ee;
      }

      if (circle6.contains(pointer.x, pointer.y)) {
        x2 = pointer.x;
        y2 = pointer.y;

        p2 = fle[0];
        console.log(x2 + " " + y2);
        dibu1(x1, y1, x2, y2, p1, p2);
      }
      if (circle7.contains(pointer.x, pointer.y)) {
        x2 = pointer.x;
        y2 = pointer.y;

        p2 = fle[1];
        dibu2(x1, y1, x2, y2, p1, p2);
      }
      if (circle8.contains(pointer.x, pointer.y)) {
        x2 = pointer.x;
        y2 = pointer.y;

        p2 = fle[2];
        dibu3(x1, y1, x2, y2, p1, p2);
      }
      if (circle9.contains(pointer.x, pointer.y)) {
        x2 = pointer.x;
        y2 = pointer.y;
        ;
        p2 = fle[3];
        dibu4(x1, y1, x2, y2, p1, p2);
      }
      if (circle10.contains(pointer.x, pointer.y)) {
        x2 = pointer.x;
        y2 = pointer.y;

        p2 = fle[4];
        dibu5(x1, y1, x2, y2, p1, p2);
      }
    });

    function calificar() {
      puntos = pun1 + pun2 + pun3 + pun4 + pun5;
      console.log(pun1);
      console.log(pun2);
      console.log(pun3);
      console.log(pun4);
      console.log(pun5);
      console.log("calificacion " + puntos);
      graphic1.clear();
      graphic2.clear();
      graphic3.clear();
      graphic4.clear();
      graphic5.clear();
      pun1 = 0;
      pun2 = 0;
      pun3 = 0;
      pun4 = 0;
      pun5 = 0;
    }

    let pun1 = 0;
    let pun2 = 0;
    let pun3 = 0;
    let pun4 = 0;
    let pun5 = 0;

    function dibu1(x1, y1, x2, y2, p1, p2) {
      pun1 = 0;
      graphic1.clear();
      line1.setTo(x1, y1, x2, y2);
      graphic1.lineStyle(4, 0xaa00aa);
      graphic1.strokeLineShape(line1);
      if (p1 === p2) {
        pun1 = 1;
      }
    }
    function dibu2(x1, y1, x2, y2, p1, p2) {
      pun2 = 0;
      graphic2.clear();
      line2.setTo(x1, y1, x2, y2);
      graphic2.lineStyle(4, 0xff0000);
      graphic2.strokeLineShape(line2);
      console.log("Los puntos son " + p1 + " y " + p2);
      if (p1 === p2) {
        pun2 = 1;
      }
    }
    function dibu3(x1, y1, x2, y2, p1, p2) {
      pun3 = 0;
      graphic3.clear();
      line3.setTo(x1, y1, x2, y2);
      graphic3.lineStyle(4, 0x00ff00);
      graphic3.strokeLineShape(line3);
      if (p1 === p2) {
        pun3 = 1;
      }
    }
    function dibu4(x1, y1, x2, y2, p1, p2) {
      pun4 = 0;
      graphic4.clear();
      line4.setTo(x1, y1, x2, y2);
      graphic4.lineStyle(4, 0x0006f7);
      graphic4.strokeLineShape(line4);
      if (p1 === p2) {
        pun4 = 1;
      }
    }
    function dibu5(x1, y1, x2, y2, p1, p2) {
      pun5 = 0;
      graphic5.clear();
      line5.setTo(x1, y1, x2, y2);
      graphic5.lineStyle(4, 0xFFFF00);
      graphic5.strokeLineShape(line5);
      if (p1 === p2) {
        pun5 = 1;
      }
    }
  }
}

function onEvent() {
  this.inicio -= 1;
  this.contador.setText("Tiempo: " + formato(this.inicio));
  if (this.inicio <= 0) {
    this.contador.setText("Tiempo: " + "0:00");
    this.scene.start("Punt", { punt: puntaje, letra: "pa" });
    puntaje = 0;
  }
}
function formato(segundos) {
  const minutos = Math.floor(segundos / 60);
  let sec = segundos % 60;
  sec = sec.toString().padStart(2, "0");
  return `${minutos}:${sec}`;
}
