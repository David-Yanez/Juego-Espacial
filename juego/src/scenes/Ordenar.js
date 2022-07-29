import Phaser from "phaser";
export class Ordenar extends Phaser.Scene {
  constructor() {
    super({ key: "Ordenar" });
  }

  preload() {
    this.load.image("bgSol", "assets/sprites/UI/bgSol.png");
    // Titulo
    this.load.image("tltSecuencia", "assets/sprites/UI/tltSecuencia.png");

    // Botones
    this.load.spritesheet("atras", "assets/sprites/atras.png", { frameWidth: 201, frameHeight: 196 });
    this.load.spritesheet("musica", "assets/sprites/UI/musica.png", { frameWidth: 205.3, frameHeight: 207 });
    this.load.spritesheet("instrucciones", "assets/sprites/UI/instrucciones.png", { frameWidth: 206, frameHeight: 208 });
    this.load.image("caballo 0", "assets/sprites/animales/caballo 0.png");
  
  }

  create() {
    // Fondo
    this.add.image(0, 0, "bgSol").setDisplayOrigin(0, 0);
    // Titulo
    this.add.image(160, 10, "tltSecuencia").setDisplayOrigin(0, 0).setScale(0.5);

    let imgg = this.add.image(150, 300, "caballo 0").setScale(0.4).setInteractive();

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

this.input.setDraggable(imgg);

    //  zone
    const zone0 = this.add.zone(300, 300, 50, 50).setRectangleDropZone(100, 100);

    //  Just a visual display of the drop zone
    const graphics0 = this.add.graphics();
    graphics0.lineStyle(2, 0xffff00);
    graphics0.strokeRect(zone0.x - zone0.input.hitArea.width / 2, zone0.y - zone0.input.hitArea.height / 2, zone0.input.hitArea.width, zone0.input.hitArea.height);

    this.input.on("dragstart", function(pointer, gameObject) {
      this.children.bringToTop(gameObject);
    }, this);

    this.input.on("dragstart", function(pointer, gameObject) {
      this.children.bringToTop(gameObject);
    }, this);

    this.input.on("drag", function(pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX;
      gameObject.y = dragY;
    });
  }
}
