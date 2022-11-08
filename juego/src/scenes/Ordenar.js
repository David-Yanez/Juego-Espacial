import Phaser from "phaser";
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

    // Secuencias
    this.load.image("globo1", "assets/sprites/secuencia/globo1.jpg");
    this.load.image("globo2", "assets/sprites/secuencia/globo2.jpg");
    this.load.image("globo3", "assets/sprites/secuencia/globo3.jpg");
    this.load.image("globo4", "assets/sprites/secuencia/globo4.jpg");

    // Botones
    this.load.spritesheet("atras", "assets/sprites/atras.png", { frameWidth: 201, frameHeight: 196 });
    this.load.spritesheet("ok", "assets/sprites/UI/ok.png", { frameWidth: 200, frameHeight: 201 });
    this.load.spritesheet("musica", "assets/sprites/UI/musica.png", { frameWidth: 205.3, frameHeight: 207 });
    this.load.spritesheet("instrucciones", "assets/sprites/UI/instrucciones.png", { frameWidth: 206, frameHeight: 208 });
    this.load.image("caballo 0", "assets/sprites/animales/caballo 0.png");
  }

  create(data) {
    // Fondo
    // this.add.image(0, 0, "bgSol").setDisplayOrigin(0, 0);
    this.add.image(0, 0, "fondo").setDisplayOrigin(0, 0);
    // Titulo
    this.add.image(160, 10, "tltSecuencia").setDisplayOrigin(0, 0).setScale(0.5);

    // Contador
    this.inicio = data.time;
    this.contador = this.add.text(300, 100, "Tiempo: " + formato(this.inicio), { fontFamily: "Times New Roman", fontSize: 25, color: "#00ff00" });
    this.time.addEvent({ delay: 1000, callback: onEvent, callbackScope: this, loop: true });
    // this.add.image(70, 380, "unoo").setDisplayOrigin(0, 0).setScale(0.3);
    // Numeros
    this.add.sprite(150, 450, "nums").setInteractive().setScale(0.6).setFrame(0);
    this.add.sprite(300, 450, "nums").setInteractive().setScale(0.6).setFrame(1);
    this.add.sprite(450, 450, "nums").setInteractive().setScale(0.6).setFrame(2);
    this.add.sprite(600, 450, "nums").setInteractive().setScale(0.6).setFrame(3);

    const imgg0 = this.add.image(150, 300, "globo1").setScale(0.4).setInteractive();
    const imgg1 = this.add.image(300, 300, "globo2").setScale(0.4).setInteractive();
    const imgg2 = this.add.image(450, 300, "globo3").setScale(0.4).setInteractive();
    const imgg3 = this.add.image(600, 300, "globo4").setScale(0.4).setInteractive();

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

    this.ok = this.add.sprite(750, 300, "ok").setInteractive().setScale(0.2);
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

    this.input.setDraggable(imgg0);
    this.input.setDraggable(imgg1);
    this.input.setDraggable(imgg2);
    this.input.setDraggable(imgg3);

    //  zone
    const zone0 = this.add.zone(150, 450, 100, 100).setRectangleDropZone(120, 120);
    const zone1 = this.add.zone(300, 450, 100, 100).setRectangleDropZone(120, 120);
    const zone2 = this.add.zone(450, 450, 100, 100).setRectangleDropZone(120, 120);
    const zone3 = this.add.zone(600, 450, 100, 100).setRectangleDropZone(120, 120);

    this.input.on("dragstart", function(pointer, gameObject) {
      this.children.bringToTop(gameObject);
    }, this);
    this.input.on("drag", function(pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX;
      gameObject.y = dragY;
    });
    /* const graphics0 = this.add.graphics();
    graphics0.lineStyle(2, 0xffff00);
    graphics0.strokeRect(zone0.x - zone0.input.hitArea.width / 2, zone0.y - zone0.input.hitArea.height / 2, zone0.input.hitArea.width, zone0.input.hitArea.height); */

    /*  //  Just a visual display of the drop zone
    const graphics0 = this.add.graphics();
    graphics0.lineStyle(2, 0xffff00);
    graphics0.strokeRect(zone0.x - zone0.input.hitArea.width / 2, zone0.y - zone0.input.hitArea.height / 2, zone0.input.hitArea.width, zone0.input.hitArea.height);

   this.input.on("dragstart", function(pointer, gameObject) {
      this.children.bringToTop(gameObject);
    }, this);

    this.input.on("drag", function(pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX;
      gameObject.y = dragY;
    });

    this.input.on("dragenter", function(pointer, gameObject, dropZone) {
      graphics0.clear();
      graphics0.lineStyle(2, 0x00ffff);
      graphics0.strokeRect(zone0.x - zone0.input.hitArea.width / 2, zone0.y - zone0.input.hitArea.height / 2, zone0.input.hitArea.width, zone0.input.hitArea.height);
    });

    this.input.on("dragleave", function(pointer, gameObject, dropZone) {
      graphics0.clear();
      graphics0.lineStyle(2, 0xffff00);
      graphics0.strokeRect(zone0.x - zone0.input.hitArea.width / 2, zone0.y - zone0.input.hitArea.height / 2, zone0.input.hitArea.width, zone0.input.hitArea.height);
    });

    this.input.on("drop", function(pointer, gameObject, dropZone) {
      gameObject.x = dropZone.x;
      gameObject.y = dropZone.y;
      console.log(gameObject.x);

     // gameObject.input.enabled = false;
    }); */

    this.input.on("drop", function(pointer, gameObject, dropZone) {
      gameObject.x = dropZone.x;
      gameObject.y = dropZone.y;
      console.log(gameObject.texture.key);

      // gameObject.input.enabled = false;
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
