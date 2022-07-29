import Phaser from "phaser";

export class Cuadrados extends Phaser.Scene {
  constructor() {
    super({ key: "Cuadrados" });
  }

  preload() {
    // Fondo
    this.load.image("bg1", "assets/sprites/juego 1/bg.png");
    // Titulo
    this.load.image("tlt1", "assets/sprites/juego 1/tlt.png");

    // Botones
    this.load.spritesheet("atras", "assets/sprites/atras.png", { frameWidth: 201, frameHeight: 196 });
    this.load.spritesheet("musica", "assets/sprites/UI/musica.png", { frameWidth: 205.3, frameHeight: 207 });
    this.load.spritesheet("instrucciones", "assets/sprites/UI/instrucciones.png", { frameWidth: 206, frameHeight: 208 });
  }

  create() {
    // Fondo
    this.add.image(0, 0, "bg1").setDisplayOrigin(0, 0);
    // Titulo
    this.add.image(130, 10, "tlt1").setDisplayOrigin(0, 0).setScale(0.4);
    // Tiempo
    this.inicio = 3;
    this.texto = this.add.text(300, 100, "Tiempo " + formato(this.inicio));
    const timedEvent = this.time.addEvent({ delay: 1000, callback: onEvent, callbackScope: this, loop: true });

    // Instrucciones
    this.instrucciones = this.add.text(100, 170, "Centro, Izquierda, Abajo");

    // Botones

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

    const grafico = this.add.graphics({ fillStyle: { color: 0x0000ff }, lineStyle: { color: 0x0000aa } });
    const cuadrados = [];
    let xx = 150;

    for (let x = 0; x < 3; x++) {
      cuadrados[x] = [];
      let yy = 250;
      for (let y = 0; y < 3; y++) {
        cuadrados[x][y] = new Phaser.Geom.Rectangle(0, 0, 100, 100);

        cuadrados[x][y].setPosition(xx, yy);
        yy = yy + 100;
      }
      xx = xx + 100;
    }
    redraw();

    this.input.on("pointerdown", function(pointer) {
      if (cuadrados[0][2].contains(pointer.x, pointer.y)) {
        grafico.fillStyle(0x00AA00);
        grafico.fillRectShape(cuadrados[0][2]);
      } else {
        for (let x = 0; x < 3; x++) {
          for (let y = 0; y < 3; y++) {
            if (cuadrados[x][y].contains(pointer.x, pointer.y)) {
              grafico.fillStyle(0xaa0000);
              grafico.fillRectShape(cuadrados[x][y]);
            }
          }
        }
      }
    });

    function redraw() {
      grafico.clear();

      for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
          grafico.fillRectShape(cuadrados[x][y]);
          grafico.strokeRectShape(cuadrados[x][y]);
        }
      }
    }
  }

  update() {

  }
}
function onEvent() {
  this.inicio -= 1;
  this.texto.setText("Tiempo: " + formato(this.inicio));
  if (this.inicio <= 0) {
    this.texto.setText("Tiempo: " + "0:00");
    this.scene.start("Punt");
  }
}
function formato(segundos) {
  const minutos = Math.floor(segundos / 60);
  let sec = segundos % 60;
  sec = sec.toString().padStart(2, "0");
  return `${minutos}:${sec}`;
}
