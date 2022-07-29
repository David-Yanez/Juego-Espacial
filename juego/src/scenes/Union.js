import Phaser from "phaser";
export class Union extends Phaser.Scene {
  constructor() {
    super({ key: "Union" });
  }

  preload() {
    this.load.image("bgJupi", "assets/sprites/UI/bgJupi.png");
    this.load.image("fle", "assets/sprites/UI/a.png");
    //Titulo
    this.load.image("tltUnion", "assets/sprites/UI/tltUnion.png");

    // Animales
    this.load.image("caballo 0", "assets/sprites/animales/caballo 0.png");
    this.load.image("caballo 1", "assets/sprites/animales/caballo 1.png");
    this.load.image("caballo 2", "assets/sprites/animales/caballo 2.png");
    this.load.image("caballo 3", "assets/sprites/animales/caballo 3.png");

    // Botones
    this.load.spritesheet("atras", "assets/sprites/atras.png", { frameWidth: 201, frameHeight: 196 });
    this.load.spritesheet("musica", "assets/sprites/UI/musica.png", { frameWidth: 205.3, frameHeight: 207 });
    this.load.spritesheet("instrucciones", "assets/sprites/UI/instrucciones.png", { frameWidth: 206, frameHeight: 208 });
    this.load.spritesheet("abc", "assets/sprites/UI/abc.png", { frameWidth: 202, frameHeight: 202 });
  }

  create() {
    // Fondo
    this.add.image(0, 0, "bgJupi").setDisplayOrigin(0, 0);
     // Titulo
     this.add.image(150, 10, "tltUnion").setDisplayOrigin(0, 0).setScale(0.45);
    // this.add.image(130, 300, "fle").setDisplayOrigin(0, 0).setScale(0.3);
    this.add.image(150, 300, "caballo 0").setScale(0.4);
    this.add.image(250, 300, "caballo 1").setScale(0.4);
    this.add.image(350, 300, "caballo 2").setScale(0.4);
    this.add.image(450, 300, "caballo 3").setScale(0.4);

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

    // const posicion = new Phaser.Math.Vector2();

    /* this.input.on("pointerdown", function(pointer) {
      posicion.x = pointer.x;
      posicion.y = pointer.y;
      console.log("x " + posicion.x);
      console.log("y " + posicion.y);
      return posicion;
    }); */

    const graphics0 = this.add.graphics();
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
        line0.setTo(pointer.x, pointer.y, pointer.x, pointer.y);
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
          console.log("x " + line0.x2);
          console.log("y " + line0.y2);
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
          graphics3.strokeLineShape(line3);
        }
      }

      
    });

    this.input.on("pointerup", function(pointer) {

      // Phaser.Geom.Line.RotateAroundPoint(line, line.getPointA(), Math.PI);
      // graphics.clear();
      // graphics.lineStyle(4, 0x00ff00);
      //  graphics.strokeLineShape(line);
    });
  }
}
