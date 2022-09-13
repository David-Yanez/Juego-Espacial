import Phaser from "phaser";
export class Colocar extends Phaser.Scene {
  constructor() {
    super({ key: "Colocar" });
  }

  preload() {
    this.load.image("fondo", "assets/sprites/UI/fondo.png");

    this.load.image("tltColocar", "assets/sprites/UI/tltColocar.png");

    this.load.image("matri", "assets/sprites/UI/matri.png");
    this.load.image("matri2", "assets/sprites/UI/matri2.png");
    this.load.image("caballo 0", "assets/sprites/animales/caballo 0.png");

    // Botones
    this.load.spritesheet("atras", "assets/sprites/atras.png", { frameWidth: 201, frameHeight: 196 });
    this.load.spritesheet("ok", "assets/sprites/UI/ok.png", { frameWidth: 200, frameHeight: 201 });
    this.load.spritesheet("musica", "assets/sprites/UI/musica.png", { frameWidth: 205.3, frameHeight: 207 });
    this.load.spritesheet("instrucciones", "assets/sprites/UI/instrucciones.png", { frameWidth: 206, frameHeight: 208 });

    /*  this.load.spritesheet("atras", "assets/sprites/atras.png", { frameWidth: 201, frameHeight: 196 });
    this.load.spritesheet("musica", "assets/sprites/UI/musica.png", { frameWidth: 205.3, frameHeight: 207 });
    this.load.spritesheet("instrucciones", "assets/sprites/UI/instrucciones.png", { frameWidth: 206, frameHeight: 208 }); */
  }

  create() {
    this.add.image(0, 0, "fondo").setDisplayOrigin(0, 0);

    // Titulo
    this.add.image(90, 10, "tltColocar").setDisplayOrigin(0, 0).setScale(0.5);
    this.add.image(30, 200, "matri").setDisplayOrigin(0, 0).setScale(0.4);
    // Contador
    this.inicio = 50;
    this.contador = this.add.text(300, 100, "Tiempo: " + formato(this.inicio), { fontFamily: "Times New Roman", fontSize: 25, color: "#00ff00" });
    this.time.addEvent({ delay: 1000, callback: onEvent, callbackScope: this, loop: true });

    // this.add.image(80, 250, "caballo 0").setScale(0.4).setInteractive();
    this.input.setDraggable(this.add.image(370, 250, "caballo 0").setScale(0.4).setInteractive());
    this.input.setDraggable(this.add.image(490, 250, "caballo 0").setScale(0.4).setInteractive());
    this.input.setDraggable(this.add.image(610, 250, "caballo 0").setScale(0.4).setInteractive());
    this.input.setDraggable(this.add.image(730, 250, "caballo 0").setScale(0.4).setInteractive());

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

    this.ok = this.add.sprite(750, 400, "ok").setInteractive().setScale(0.2);
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

    this.add.zone(77, 245, 46, 45).setRectangleDropZone(90, 90);
    this.add.zone(168, 245, 46, 45).setRectangleDropZone(90, 90);
    this.add.zone(261, 245, 46, 45).setRectangleDropZone(90, 90);

    this.add.zone(77, 336, 46, 45).setRectangleDropZone(90, 90);
    this.add.zone(168, 336, 46, 45).setRectangleDropZone(90, 90);
    this.add.zone(261, 336, 46, 45).setRectangleDropZone(90, 90);

    this.add.zone(77, 427, 46, 45).setRectangleDropZone(90, 90);
    this.add.zone(168, 427, 46, 45).setRectangleDropZone(90, 90);
    this.add.zone(261, 427, 46, 45).setRectangleDropZone(90, 90);

    this.input.on("dragstart", function(pointer, gameObject) {
      this.children.bringToTop(gameObject);
    }, this);
    this.input.on("drag", function(pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX;
      gameObject.y = dragY;
    });

    this.input.on("drop", function(pointer, gameObject, dropZone) {
      gameObject.x = dropZone.x;
      gameObject.y = dropZone.y;
      // console.log(gameObject.texture.key);

      // gameObject.input.enabled = false;
    });
    /*  const graphics0 = this.add.graphics();
    graphics0.lineStyle(2, 0xffff00);
    graphics0.strokeRect(zone0.x - zone0.input.hitArea.width / 2, zone0.y - zone0.input.hitArea.height / 2, zone0.input.hitArea.width, zone0.input.hitArea.height);
    */
    this.input.on("pointerdown", function(pointer) {
      console.log(pointer.x);
      console.log(pointer.y);
    });
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
