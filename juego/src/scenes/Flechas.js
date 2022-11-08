import Phaser from "phaser";
let color;
export class Flechas extends Phaser.Scene {
  constructor() {
    super({ key: "Flechas" });
  }

  preload() {
    this.load.image("fondo", "assets/sprites/UI/fondo.png");
    // Titulo
    this.load.image("tltFlechas", "assets/sprites/UI/tltFlechas.png");

    this.load.image("flecha", "assets/sprites/UI/flecha11.png");

    // Botones
    this.load.spritesheet("atras", "assets/sprites/atras.png", { frameWidth: 201, frameHeight: 196 });
    this.load.spritesheet("ok", "assets/sprites/UI/ok.png", { frameWidth: 200, frameHeight: 201 });
    this.load.spritesheet("musica", "assets/sprites/UI/musica.png", { frameWidth: 205.3, frameHeight: 207 });
    this.load.spritesheet("instrucciones", "assets/sprites/UI/instrucciones.png", { frameWidth: 206, frameHeight: 208 });
  }

  create(data) {
    // Fondo
    this.add.image(0, 0, "fondo").setDisplayOrigin(0, 0);
    // Titulo
    this.add.image(130, 10, "tltFlechas").setDisplayOrigin(0, 0).setScale(0.45);

    // Contador
    this.inicio = data.time;
    this.contador = this.add.text(300, 100, "Tiempo: " + formato(this.inicio), { fontFamily: "Times New Roman", fontSize: 25, color: "#00ff00" });
    this.time.addEvent({ delay: 1000, callback: onEvent, callbackScope: this, loop: true });

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

    this.verde = this.add.image(140, 200, "flecha").setScale(0.3).setInteractive().setTint(0x00FF00);
    this.rojo = this.add.image(230, 200, "flecha").setScale(0.3).setAngle(180).setInteractive().setTint(0xff0000);

    this.verde.on("pointerdown", () => {
      color = 0x00FF00;
      console.log(color);
    }, this);

    this.rojo.on("pointerdown", () => {
      color = 0xff0000;
      console.log(color);
    }, this);

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 4; j++) {
        this.fleee = this.add.image(110 + (i * 90), 300 + (j * 80), "flecha").setScale(0.3).setInteractive();
        this.ran = Phaser.Math.Between(0, 1);
        if (this.ran === 1) { this.fleee.angle = 180; }
        // console.log(this.ran);
      }
    }

    this.input.on("gameobjectup", this.pintar, this);
  }

  pintar(pointer, fleee) {
    if (fleee.texture.key === "flecha") { fleee.setTint(color); }
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
