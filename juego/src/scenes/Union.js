import Phaser from "phaser";
export class Union extends Phaser.Scene {
  constructor() {
    super({ key: "Union" });
  }

  preload() {
    this.load.image("bgJupi", "assets/sprites/UI/bgJupi.png");
    this.load.image("fondo", "assets/sprites/UI/fondo.png");
    this.load.image("fle", "assets/sprites/UI/a.png");
    // Titulo
    this.load.image("tltUnion", "assets/sprites/UI/tltUnion.png");

    // Animales
    this.load.image("caballo 0", "assets/sprites/animales/caballo 0.png");
    this.load.image("caballo 1", "assets/sprites/animales/caballo 1.png");
    this.load.image("caballo 2", "assets/sprites/animales/caballo 2.png");
    this.load.image("caballo 3", "assets/sprites/animales/caballo 3.png");

    // Botones
    this.load.spritesheet("atras", "assets/sprites/atras.png", { frameWidth: 201, frameHeight: 196 });
    this.load.spritesheet("ok", "assets/sprites/UI/ok.png", { frameWidth: 200, frameHeight: 201 });
    this.load.spritesheet("musica", "assets/sprites/UI/musica.png", { frameWidth: 205.3, frameHeight: 207 });
    this.load.spritesheet("instrucciones", "assets/sprites/UI/instrucciones.png", { frameWidth: 206, frameHeight: 208 });
    this.load.spritesheet("abc", "assets/sprites/UI/abc.png", { frameWidth: 202, frameHeight: 202 });
  }

  create() {
    // Fondo
    // this.add.image(0, 0, "bgJupi").setDisplayOrigin(0, 0);
    this.add.image(0, 0, "fondo").setDisplayOrigin(0, 0);
    // Titulo
    this.add.image(150, 10, "tltUnion").setDisplayOrigin(0, 0).setScale(0.45);

    // Contador
    this.inicio = 1050;
    this.contador = this.add.text(300, 100, "Tiempo: " + formato(this.inicio), { fontFamily: "Times New Roman", fontSize: 25, color: "#00ff00" });
    this.time.addEvent({ delay: 1000, callback: onEvent, callbackScope: this, loop: true });

    this.add.image(150, 250, "caballo 0").setScale(0.4);
    this.add.image(250, 250, "caballo 1").setScale(0.4);
    this.add.image(350, 250, "caballo 2").setScale(0.4);
    this.add.image(450, 250, "caballo 3").setScale(0.4);

    this.add.sprite(150, 500, "abc").setInteractive().setScale(0.3).setFrame(0);
    this.add.sprite(250, 500, "abc").setInteractive().setScale(0.3).setFrame(1);
    this.add.sprite(350, 500, "abc").setInteractive().setScale(0.3).setFrame(2);
    this.add.sprite(450, 500, "abc").setInteractive().setScale(0.3).setFrame(3);
    //  this.add.sprite(300, 200, "abc").setInteractive().setScale(0.3).setFrame(4);
    //  this.add.sprite(300, 300, "abc").setInteractive().setScale(0.3).setFrame(5);
    // this.add.sprite(400, 200, "abc").setInteractive().setScale(0.3).setFrame(5);
    // this.add.sprite(400, 300, "abc").setInteractive().setScale(0.3).setFrame(6);

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

    this.ok = this.add.sprite(550, 400, "ok").setInteractive().setScale(0.2);
    this.ok.on("pointerover", () => {
      this.ok.setFrame(1);
    });
    this.ok.on("pointerout", () => {
      this.ok.setFrame(0);
    });
    this.ok.on("pointerdown", () => {
      //   this.scene.start("Prin");
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

    const circle1 = new Phaser.Geom.Circle(100, 300, 5);
    const circle2 = new Phaser.Geom.Circle(200, 300, 5);
    const circle3 = new Phaser.Geom.Circle(300, 300, 5);
    const circle4 = new Phaser.Geom.Circle(400, 300, 5);
    const circle5 = new Phaser.Geom.Circle(500, 300, 5);

    const circle6 = new Phaser.Geom.Circle(100, 500, 5);
    const circle7 = new Phaser.Geom.Circle(200, 500, 5);
    const circle8 = new Phaser.Geom.Circle(300, 500, 5);
    const circle9 = new Phaser.Geom.Circle(400, 500, 5);
    const circle10 = new Phaser.Geom.Circle(500, 500, 5);

    graphi.fillCircleShape(circle1);
    graphi.fillCircleShape(circle2);
    graphi.fillCircleShape(circle3);
    graphi.fillCircleShape(circle4);
    graphi.fillCircleShape(circle5);

    graphi.fillCircleShape(circle6);
    graphi.fillCircleShape(circle7);
    graphi.fillCircleShape(circle8);
    graphi.fillCircleShape(circle9);
    graphi.fillCircleShape(circle10);

    graphi.fillStyle(0xff0000);
    let x1;
    let x2;
    let y1;
    let y2;

    let l1;
    let l2;
    let l3;
    let l4;
    let l5;
    generar();

    function generar() {
      l1 = Phaser.Math.Between(1, 4);
      l2 = Phaser.Math.Between(1, 4);
      l3 = Phaser.Math.Between(1, 4);
      l4 = Phaser.Math.Between(1, 4);
      l5 = Phaser.Math.Between(1, 4);
    }

    console.log(l1);
    console.log(l2);
    console.log(l3);
    console.log(l4);
    console.log(l5);

    this.input.on("pointerdown", function(pointer) {
      if (circle1.contains(pointer.x, pointer.y)) {
        x1 = pointer.x;
        y1 = pointer.y;
        l1 = 1;

      /*  if (l1 === true) {
          graphic1.clear();
          l1 = false;
        }
        if (l2 === true) {
          graphic2.clear();
          l2 = false;
        }
        if (l3 === true) {
          graphic3.clear();
          l3 = false;
        }
        if (l4 === true) {
          graphic4.clear();
          l4 = false;
        }
        if (l5 === true) {
          graphic5.clear();
          l5 = false;
        } */
      }
      if (circle2.contains(pointer.x, pointer.y)) {
        x1 = pointer.x;
        y1 = pointer.y;
        l1 = 2;
      /*  if (l1 === true) {
          graphic1.clear();
          l1 = false;
        }
        if (l2 === true) {
          graphic2.clear();
          l2 = false;
        }
        if (l3 === true) {
          graphic3.clear();
          l3 = false;
        }
        if (l4 === true) {
          graphic4.clear();
          l4 = false;
        }
        if (l5 === true) {
          graphic5.clear();
          l5 = false;
        } */
      }
      if (circle3.contains(pointer.x, pointer.y)) {
        x1 = pointer.x;
        y1 = pointer.y;
        l1 = 3;
      }
      if (circle4.contains(pointer.x, pointer.y)) {
        x1 = pointer.x;
        y1 = pointer.y;
        l1 = 4;
      }
      if (circle5.contains(pointer.x, pointer.y)) {
        x1 = pointer.x;
        y1 = pointer.y;
        l1 = 5;
      }

      if (circle6.contains(pointer.x, pointer.y)) {
        x2 = pointer.x;
        y2 = pointer.y;
        l2 = 1;
        dibu1(x1, y1, x2, y2);
      }
      if (circle7.contains(pointer.x, pointer.y)) {
        x2 = pointer.x;
        y2 = pointer.y;
        l2 = 2;
        dibu2(x1, y1, x2, y2);
      }
      if (circle8.contains(pointer.x, pointer.y)) {
        x2 = pointer.x;
        y2 = pointer.y;
        l2 = 3;
        dibu3(x1, y1, x2, y2);
      }
      if (circle9.contains(pointer.x, pointer.y)) {
        x2 = pointer.x;
        y2 = pointer.y;
        l2 = 4;
        dibu4(x1, y1, x2, y2);
      }
      if (circle10.contains(pointer.x, pointer.y)) {
        x2 = pointer.x;
        y2 = pointer.y;
        l2 = 5;
        dibu5(x1, y1, x2, y2);
      }
    });
    function validar(l1, l2, l3) {
      if (l1 === l2) { l3 = true; } else {
        l3 = false;
      }
    }

    function dibu1(x1, y1, x2, y2) {
      graphic1.clear();
      line1.setTo(x1, y1, x2, y2);
      graphic1.lineStyle(4, 0xaa00aa);
      graphic1.strokeLineShape(line1);
      console.log(graphic1);
    }
    function dibu2(x1, y1, x2, y2) {
      graphic2.clear();
      line2.setTo(x1, y1, x2, y2);
      graphic2.lineStyle(4, 0xff0000);
      graphic2.strokeLineShape(line2);
    }
    function dibu3(x1, y1, x2, y2) {
      graphic3.clear();
      line3.setTo(x1, y1, x2, y2);
      graphic3.lineStyle(4, 0x00ff00);
      graphic3.strokeLineShape(line3);
    }
    function dibu4(x1, y1, x2, y2) {
      graphic4.clear();
      line4.setTo(x1, y1, x2, y2);
      graphic4.lineStyle(4, 0x0006f7);
      graphic4.strokeLineShape(line4);
    }
    function dibu5(x1, y1, x2, y2) {
      graphic5.clear();
      line5.setTo(x1, y1, x2, y2);
      graphic5.lineStyle(4, 0xFFFF00);
      graphic5.strokeLineShape(line5);
    }

    /* this.input.on("pointermove", function(pointer) {
      graphi.clear();

      if (circle1.contains(pointer.x, pointer.y)) {
        graphi.fillStyle(0x00ff00);
      } else {
        graphi.fillStyle(0xff0000);
      }
      if (circle2.contains(pointer.x, pointer.y)) {
        graphi.fillStyle(0x00ff00);
      } else {
        graphi.fillStyle(0xff0000);
      }

      graphi.fillCircleShape(circle1);
      graphi.fillCircleShape(circle2);
    }); */

    /* const graphics0 = this.add.graphics();
    const line0 = new Phaser.Geom.Line();
    const graphics1 = this.add.graphics();
    const line1 = new Phaser.Geom.Line();
    const graphics2 = this.add.graphics();
    const line2 = new Phaser.Geom.Line();
    const graphics3 = this.add.graphics();
    const line3 = new Phaser.Geom.Line();

    let l0;
    let l1;
    let l2;
    let l3;

    this.input.on("pointerdown", function(pointer) {
      if ((pointer.x > 107 && pointer.x < 200) && (pointer.y > 255 && pointer.y < 345)) {
      //  line0.setTo(pointer.x, pointer.y, pointer.x, pointer.y);
        line0.setTo(70, 300, pointer.x, pointer.y);

        graphics0.clear();
        graphics0.lineStyle(4, 0xaa00aa);
        graphics0.strokeLineShape(line0);
        l0 = true;
        l1 = false;
        l2 = false;
        l3 = false;
      }

      if ((pointer.x > 201 && pointer.x < 300) && (pointer.y > 255 && pointer.y < 345)) {
        line1.setTo(pointer.x, pointer.y, pointer.x, pointer.y);
        graphics1.clear();
        graphics1.lineStyle(4, 0x26e300);
        graphics1.strokeLineShape(line1);
        l0 = false;
        l1 = true;
        l2 = false;
        l3 = false;
      }

      if ((pointer.x > 301 && pointer.x < 395) && (pointer.y > 255 && pointer.y < 345)) {
        line2.setTo(pointer.x, pointer.y, pointer.x, pointer.y);
        graphics2.clear();
        graphics2.lineStyle(4, 0x0006f7);
        graphics2.strokeLineShape(line2);
        l0 = false;
        l1 = false;
        l2 = true;
        l3 = false;
      }

      if ((pointer.x > 396 && pointer.x < 495) && (pointer.y > 255 && pointer.y < 345)) {
        line3.setTo(pointer.x, pointer.y, pointer.x, pointer.y);
        graphics3.clear();
        graphics3.lineStyle(4, 0xd60030);
        graphics3.strokeLineShape(line3);
        l0 = false;
        l1 = false;
        l2 = false;
        l3 = true;
      }
    });

    this.input.on("pointermove", function(pointer) {
      if ((pointer.x > 106 && pointer.x < 495) && (pointer.y > 450 && pointer.y < 535) && (l0 === true)) {
        if (pointer.isDown) {
          line0.x2 = pointer.x;
          line0.y2 = pointer.y;

          graphics0.clear();
          graphics0.lineStyle(4, 0xaa00aa);
          graphics0.strokeLineShape(line0);
        }
      }
      if ((pointer.x > 106 && pointer.x < 495) && (pointer.y > 450 && pointer.y < 535) && (l1 === true)) {
        if (pointer.isDown) {
          line1.x2 = pointer.x;
          line1.y2 = pointer.y;

          graphics1.clear();
          graphics1.lineStyle(4, 0x26e300);
          graphics1.strokeLineShape(line1);
        }
      }
      if ((pointer.x > 106 && pointer.x < 495) && (pointer.y > 450 && pointer.y < 535) && (l2 === true)) {
        if (pointer.isDown) {
          line2.x2 = pointer.x;
          line2.y2 = pointer.y;

          graphics2.clear();
          graphics2.lineStyle(4, 0x0006f7);
          graphics2.strokeLineShape(line2);
        }
      }
      if ((pointer.x > 106 && pointer.x < 495) && (pointer.y > 450 && pointer.y < 535) && (l3 === true)) {
        if (pointer.isDown) {
          line3.x2 = pointer.x;
          line3.y2 = pointer.y;

          graphics3.clear();
          graphics3.lineStyle(4, 0xd60030);
          //   graphics3.strokeLineShape(line3);
        }
      }
    });

    this.input.on("pointerup", function(pointer) {
      if ((pointer.x > 106 && pointer.x < 495) && (pointer.y > 450 && pointer.y < 535) && (l3 === true)) {
        if (pointer.isDown) {
          line3.x2 = 110;
          line3.y2 = 460;

          graphics3.clear();
          graphics3.lineStyle(4, 0xd60030);
          graphics3.strokeLineShape(line3);
        }
      }
      // Phaser.Geom.Line.RotateAroundPoint(line, line.getPointA(), Math.PI);
      // graphics.clear();
      // graphics.lineStyle(4, 0x00ff00);
      //  graphics.strokeLineShape(line);
    }); */
  }
}

function onEvent() {
  this.inicio -= 1;
  this.contador.setText("Tiempo: " + formato(this.inicio));
  if (this.inicio <= 0) {
    this.contador.setText("Tiempo: " + "0:00");
    this.scene.start("Punt");
  }
}
function formato(segundos) {
  const minutos = Math.floor(segundos / 60);
  let sec = segundos % 60;
  sec = sec.toString().padStart(2, "0");
  return `${minutos}:${sec}`;
}
