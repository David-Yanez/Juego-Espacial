import Phaser from "phaser";
import Swal from "sweetalert2";
let puntaje = 0;
let principal;
export class Cuadrados extends Phaser.Scene {
  constructor() {
    super({ key: "Cuadrados" });
  }

  preload() {
    // Fondo
    this.load.image("fondo", "assets/sprites/UI/fondo.png");
    // Titulo
    this.load.image("tlt1", "assets/sprites/juego 1/tlt2.png");
    this.load.image("cuadrado", "assets/sprites/UI/cuadrado.png");
    this.load.image("nave", "assets/sprites/colocar/nave.png");
    this.load.image("tierra", "assets/sprites/colocar/tierra.png");

    // Botones
    this.load.spritesheet("atras", "assets/sprites/atras.png", { frameWidth: 201, frameHeight: 196 });
    this.load.spritesheet("ok", "assets/sprites/UI/ok.png", { frameWidth: 200, frameHeight: 201 });
    this.load.spritesheet("musica", "assets/sprites/UI/musica.png", { frameWidth: 205.3, frameHeight: 207 });
    this.load.spritesheet("pregunta", "assets/sprites/UI/pregunta.png", { frameWidth: 206, frameHeight: 185 });
    this.load.spritesheet("instrucciones", "assets/sprites/UI/instrucciones.png", { frameWidth: 206, frameHeight: 208 });
    // Sonidos
    this.load.audio("principal", "assets/sounds/ambiente.mp3");
    this.load.audio("vozCuadrados", "assets/sounds/voz/vozCuadrados.mp3");
  }

  create(data) {
    this.ins = data.ins;
    this.es = data.es;
    this.tlt = data.tlt;
    this.x = data.x;
    this.insIcono = data.insIcono;
    this.musicaIcono = data.musicaIcono;
    // Sonido
    const voz = this.sound.add("vozCuadrados");
    principal = this.sound.add("principal");
    principal.volume = 0.2;
    principal.loop = true;
    principal.play();

    // Fondo
    this.add.image(0, 0, "fondo").setDisplayOrigin(0, 0);
    // Titulo
    this.add.image(130, 10, "tlt1").setDisplayOrigin(0, 0).setScale(0.4);
    // Tiempo
    this.min = data.time / 60;
    this.inicio = data.time;
    this.contador = this.add.text(300, 100, "Tiempo: " + formato(this.inicio), { fontFamily: "Times New Roman", fontSize: 25, color: "#00ff00" });
    this.time.addEvent({ delay: 1000, callback: onEvent, callbackScope: this, loop: true });

    // Instrucciones
    // this.instrucciones = this.add.text(400, 170, "Centro, Izquierda, Abajo", { fontFamily: "Times New Roman", fontSize: 25, color: "#ffff00" });

    // Botones

    this.atras = this.add.sprite(30, 30, "atras").setInteractive().setScale(0.2);
    this.atras.on("pointerover", () => {
      this.atras.setFrame(1);
    });
    this.atras.on("pointerout", () => {
      this.atras.setFrame(0);
    });
    this.atras.on("pointerdown", () => {
      principal.stop();
      this.scene.start("Configuracion", { insIcono: this.insIcono, musicaIcono: this.musicaIcono, instru: data.ins, scene: this.es, titulo: this.tlt, x: this.x, voz: "vozCuadrados" });
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
      generar();
      //   this.scene.start("Prin");
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
      Swal.fire(
        "",
        "Ayuda a la nave a llegar al planeta tierra. Sigue las instrucciones que se muestra al lado derecho de los cuadrados, para crear el camino que debe seguir la nave. Una vez él caminó este listo, selecciona el botón 👍 para continuar.",
        "info"
      );
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
      if (principal.mute === true || this.musicaIcono === 2) {
        this.musica.setFrame(2);
      } else {
        this.musica.setFrame(0);
      }
    });
    this.musica.on("pointerdown", () => {
    //  console.log(principal.mute);
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

    // this.add.image(370, 250, "nave2").setScale(0.3).setInteractive();

    // const grafico = this.add.graphics({ fillStyle: { color: 0x0000ff }, lineStyle: { color: 0x0000aa } });
    const datos = [
      {
        inst: ["1. Derecha", "", "2. Abajo", "", "3. Abajo"],
        img: [100, 240, 180, 480],
        resx: [180, 180, 180],
        resy: [240, 320, 400]
      },
      {
        inst: ["1. Derecha", "", "2. Derecha", "", "3. Derecha"],
        img: [100, 480, 340, 400],
        resx: [180, 260, 340],
        resy: [480, 480, 480]
      },
      {
        inst: ["1. Abajo", "", "2. Izquierda", "", "3. Abajo"],
        img: [340, 240, 260, 480],
        resx: [340, 260, 260],
        resy: [320, 320, 400]
      },
      {
        inst: ["1. Izquierda", "", "2. Arriba", "", "3. Izquierda"],
        img: [340, 400, 100, 320],
        resx: [260, 260, 180],
        resy: [400, 320, 320]
      },
      {
        inst: ["1. Derecha", "", "2. Derecha", "", "3. Abajo"],
        img: [180, 240, 340, 400],
        resx: [260, 340, 340],
        resy: [240, 240, 320]
      },
      {
        inst: ["1. Derecha", "", "2. Abajo", "", "3. Derecha"],
        img: [100, 400, 340, 480],
        resx: [180, 180, 260],
        resy: [400, 480, 480]
      },
      {
        inst: ["1. Derecha", "", "2. Derecha", "", "3. Arriba"],
        img: [100, 320, 340, 240],
        resx: [180, 260, 260],
        resy: [320, 320, 240]
      },
      {
        inst: ["1. Abajo", "", "2. Derecha", "", "3. Abajo"],
        img: [180, 240, 260, 480],
        resx: [180, 260, 260],
        resy: [320, 320, 400]
      },
      {
        inst: ["1. Abajo", "", "2. Izquierda", "", "3. Abajo"],
        img: [260, 320, 100, 480],
        resx: [260, 180, 180],
        resy: [480, 400, 480]
      },
      {
        inst: ["1. Derecha", "", "2. Abajo", "", "3. Derecha", "", "4. Abajo"],
        img: [100, 240, 340, 400],
        resx: [180, 180, 260, 260],
        resy: [240, 320, 320, 400]
      },
      {
        inst: ["1. Derecha", "", "2. Derecha", "", "3. Arriba", "", "4. Izquierda"],
        img: [100, 480, 100, 400],
        resx: [180, 260, 260, 180],
        resy: [480, 480, 400, 400]
      },
      {
        inst: ["1. Izquierda", "", "2. Izquierda", "", "3. Arriba", "", "4. Arriba"],
        img: [340, 480, 100, 320],
        resx: [260, 180, 180, 180],
        resy: [480, 480, 400, 320]
      },
      {
        inst: ["1. Abajo", "", "2. Izquierda", "", "3. Abajo", "", "4. Izquierda"],
        img: [340, 240, 180, 480],
        resx: [340, 260, 260, 180],
        resy: [320, 320, 400, 400]
      },
      {
        inst: ["1. Derecha", "", "2. Derecha", "", "3. Derecha", "", "4. Abajo"],
        img: [100, 240, 340, 400],
        resx: [180, 260, 340, 340],
        resy: [240, 240, 240, 320]
      },
      {
        inst: ["1. Arriba", "", "2. Izquierda", "", "3. Arriba", "", "4. Arriba"],
        img: [260, 480, 260, 240],
        resx: [260, 180, 180, 180],
        resy: [400, 400, 320, 240]
      }

    ];

    const cuadrados = [];
    let xx = 100;

    for (let x = 0; x < 4; x++) {
      cuadrados[x] = [];
      let yy = 240;
      for (let y = 0; y < 4; y++) {
        cuadrados[x][y] = this.add.image(0, 0, "cuadrado").setScale(0.4).setInteractive();
        //   new Phaser.Geom.Rectangle(0, 0, 80, 80);
        cuadrados[x][y].setTint(0x00AA00);
        cuadrados[x][y].setPosition(xx, yy);
        yy = yy + 80;
      }
      xx = xx + 80;
    }
    let n;
    let difi = 0;

    // let t;
    const img1 = this.add.image(0, 0, "nave").setScale(0.4).setInteractive();
    const img2 = this.add.image(0, 0, "tierra").setScale(0.4).setInteractive();
    const t = this.add.text(450, 250, datos[0].inst, { font: "20px Arial Black", fill: "#e8dfe1" });

    generar();
    function generar() {
      // n = 3;
      if (difi < 6) {
        n = Phaser.Math.Between(0, 8);
      }
      if (difi >= 5 && difi < 10) {
        n = Phaser.Math.Between(9, 14);
      }
      if (difi >= 10) {
      //  difi = 0;
        n = Phaser.Math.Between(0, 14);
      }
      difi++;
      console.log(n);
      img1.setPosition(datos[n].img[0], datos[n].img[1]);
      img2.setPosition(datos[n].img[2], datos[n].img[3]);
      //  console.log(datos[n].inst);
      t.setText(datos[n].inst);
      cuadrados.forEach(function(limp) {
        limp.forEach(function(limpiar) {
          limpiar.setTint(0x00AA00);
        });
      });
    }
    function calificar() {
      //   console.log(cuadrados);
      cuadrados.forEach(function(calCua) {
        calCua.forEach(function(calCuadra) {
          //   console.log(calCuadra);
          console.log(datos[n].resx.length);
          if (datos[n].resx.length === 3) {
            if (calCuadra.x === datos[n].resx[0] && calCuadra.y === datos[n].resy[0] && calCuadra.tintBottomLeft === 16711680) { puntaje += 0.2; }
            if (calCuadra.x === datos[n].resx[1] && calCuadra.y === datos[n].resy[1] && calCuadra.tintBottomLeft === 16711680) { puntaje += 0.2; }
            if (calCuadra.x === datos[n].resx[2] && calCuadra.y === datos[n].resy[2] && calCuadra.tintBottomLeft === 16711680) { puntaje += 0.2; }
          } else {
            if (calCuadra.x === datos[n].resx[0] && calCuadra.y === datos[n].resy[0] && calCuadra.tintBottomLeft === 16711680) { puntaje += 0.2; }
            if (calCuadra.x === datos[n].resx[1] && calCuadra.y === datos[n].resy[1] && calCuadra.tintBottomLeft === 16711680) { puntaje += 0.2; }
            if (calCuadra.x === datos[n].resx[2] && calCuadra.y === datos[n].resy[2] && calCuadra.tintBottomLeft === 16711680) { puntaje += 0.2; }
            if (calCuadra.x === datos[n].resx[3] && calCuadra.y === datos[n].resy[3] && calCuadra.tintBottomLeft === 16711680) { puntaje += 0.2; }
          }
        });
        // console.log(datos[n].resx[0]);
        //    console.log(calCua.x);
      });
      console.log(puntaje);
    }
    this.input.on("gameobjectup", this.pintar, this);
    // console.log(cuadrados[2][2]);
  }

  pintar(pointer, fleee) {
    if (fleee.texture.key === "cuadrado" && fleee.tintBottomLeft === 16711680) { fleee.setTint(0x00AA00); } else { if (fleee.texture.key === "cuadrado") fleee.setTint(0xff0000); }
    console.log("x: " + fleee.x + " y: " + fleee.y);
    // if (fleee.texture.key === "cuadrado" && fleee.tintBottomLeft === 43520) { fleee.setTint(0xff0000); }
  }

  update() {

  }
}
function onEvent() {
  this.inicio -= 1;
  this.contador.setText("Tiempo: " + formato(this.inicio));
  if (this.inicio <= 0) {
    this.contador.setText("Tiempo: " + "0:00");
    let pun = Math.trunc(puntaje);
    this.scene.start("Punt", { punt: pun, letra: "es", nomb: "Selección de Cuadrados", time: this.min, sce: "Cuadrados", musicaIcono: this.musicaIcono });
    puntaje = 0;
    pun = 0;
    principal.stop();
  }
}
function formato(segundos) {
  const minutos = Math.floor(segundos / 60);
  let sec = segundos % 60;
  sec = sec.toString().padStart(2, "0");
  return `${minutos}:${sec}`;
}
