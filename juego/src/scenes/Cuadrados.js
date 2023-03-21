import Phaser from "phaser";
import Swal from "sweetalert2";
let puntaje = 0;
let principal;
let aciertos = 0;
let intentos = 1;
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
    this.load.image("nave33", "assets/sprites/colocar/nave3.png");
    this.load.image("tierra2", "assets/sprites/colocar/tierra2.png");
    this.load.image("recta22", "assets/sprites/UI/recta56.png");

    // Botones
    this.load.spritesheet("atras", "assets/sprites/atras.png", { frameWidth: 201, frameHeight: 196 });
    this.load.spritesheet("ok", "assets/sprites/UI/ok.png", { frameWidth: 456, frameHeight: 201 });
    this.load.spritesheet("terminar", "assets/sprites/UI/BtnTerminar.png", { frameWidth: 454.5, frameHeight: 193 });
    this.load.spritesheet("musica", "assets/sprites/UI/musica.png", { frameWidth: 205.3, frameHeight: 207 });
    this.load.spritesheet("info", "assets/sprites/UI/info.png", { frameWidth: 170, frameHeight: 160 });
    this.load.spritesheet("instrucciones", "assets/sprites/UI/instrucciones.png", { frameWidth: 206, frameHeight: 208 });
    this.load.spritesheet("leer", "assets/sprites/UI/leer.png", { frameWidth: 457.5, frameHeight: 200 });

    // Sonidos
    this.load.audio("principal", "assets/sounds/ambiente.mp3");
    this.load.audio("vozCuadrados", "assets/sounds/voz/vozCuadrados.mp3");
    this.load.audio("correcto", "assets/sounds/correcto.mp3");
    this.load.audio("error", "assets/sounds/error.mp3");
    this.load.audio("vozCu0", "assets/sounds/cuadrados/vozCu0.mp3");
    this.load.audio("vozCu1", "assets/sounds/cuadrados/vozCu1.mp3");
    this.load.audio("vozCu2", "assets/sounds/cuadrados/vozCu2.mp3");
    this.load.audio("vozCu3", "assets/sounds/cuadrados/vozCu3.mp3");
    this.load.audio("vozCu4", "assets/sounds/cuadrados/vozCu4.mp3");
    this.load.audio("vozCu5", "assets/sounds/cuadrados/vozCu5.mp3");
    this.load.audio("vozCu6", "assets/sounds/cuadrados/vozCu6.mp3");
    this.load.audio("vozCu7", "assets/sounds/cuadrados/vozCu7.mp3");
    this.load.audio("vozCu8", "assets/sounds/cuadrados/vozCu8.mp3");
    this.load.audio("vozCu9", "assets/sounds/cuadrados/vozCu9.mp3");
    this.load.audio("vozCu10", "assets/sounds/cuadrados/vozCu10.mp3");
    this.load.audio("vozCu11", "assets/sounds/cuadrados/vozCu11.mp3");
    this.load.audio("vozCu12", "assets/sounds/cuadrados/vozCu12.mp3");
    this.load.audio("vozCu13", "assets/sounds/cuadrados/vozCu13.mp3");
    this.load.audio("vozCu14", "assets/sounds/cuadrados/vozCu14.mp3");
  }

  create(data) {
    this.ins = data.ins;
    this.es = data.es;
    this.tlt = data.tlt;
    this.x = data.x;
    this.insIcono = data.insIcono;
    this.musicaIcono = data.musicaIcono;

    // Sonido
    this.error = this.sound.add("error");
    this.correcto = this.sound.add("correcto");
    this.error.volume = 0.2;
    this.correcto.volume = 0.2;

    const voz = this.sound.add("vozCuadrados");
    principal = this.sound.add("principal");
    principal.volume = 0.2;
    principal.loop = true;
    principal.play();

    // Fondo
    this.add.image(0, 0, "fondo").setDisplayOrigin(0, 0);
    // Titulo
    this.add.image(170, 10, "tlt1").setDisplayOrigin(0, 0).setScale(0.4);
    // Tiempo
    this.min = data.time / 60;
    this.inicio = data.time;
    this.contador = this.add.text(300, 100, "Tiempo: " + formato(this.inicio), { fontFamily: "Times New Roman", fontSize: 25, color: "#00ff00" });
    this.time.addEvent({ delay: 1000, callback: onEvent, callbackScope: this, loop: true });

    // Instrucciones
    // this.instrucciones = this.add.text(400, 170, "Centro, Izquierda, Abajo", { fontFamily: "Times New Roman", fontSize: 25, color: "#ffff00" });
    // const s = ["Da clic en los cuadrados de acuerdo a las", "siguientes instrucciones:"];
    this.add.text(240, 140, "Ayuda a la nave a retornar al planeta tierra.", { font: "13px Arial", fill: "#e8dfe1" }).setStroke("#e01650", 2);

    this.add.text(100, 160, "Da clic en los casilleros de acuerdo a las siguientes instrucciones y luego en el boton validar.", { font: "13px Arial", fill: "#e8dfe1" }).setStroke("#e01650", 2);
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
      intentos = 1;
      aciertos = 0;
      puntaje = 0;
      this.scene.start("Configuracion", { insIcono: this.insIcono, musicaIcono: this.musicaIcono, instru: data.ins, scene: this.es, titulo: this.tlt, x: this.x, voz: "vozCuadrados" });
    });

    this.ok = this.add.sprite(730, 300, "ok").setInteractive().setScale(0.2);
    this.ok.on("pointerover", () => {
      this.ok.setFrame(1);
    });
    this.ok.on("pointerout", () => {
      this.ok.setFrame(0);
    });
    this.ok.on("pointerdown", () => {
      intentos++;
      this.Objcali.varCalificar();
      // calificar();
      generar();
      console.log("Intentos: " + intentos);
      console.log("aciertos: " + aciertos);
      //   this.scene.start("Prin");
    });

    this.terminar = this.add.sprite(730, 360, "terminar").setInteractive().setScale(0.2);
    this.terminar.on("pointerover", () => {
      this.terminar.setFrame(1);
    });
    this.terminar.on("pointerout", () => {
      this.terminar.setFrame(0);
    });
    this.terminar.on("pointerdown", () => {
    //  calificar();
    //  this.Objcali.varCalificar();
      this.inicio = 0;
    });

    this.pregunta = this.add.sprite(750, 450, "info").setInteractive().setScale(0.24);
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
        "Sigue las instrucciones que se muestran en pantalla para crear el camino que debe seguir la nave para retornar al planeta tierra. Una vez el camino este listo, selecciona el botón validar para continuar.",
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
        this.error.mute = true;
        this.correcto.mute = true;
      } else {
        this.musica.setFrame(0);
        this.musicaIcono = 0;
        principal.play();
        principal.mute = false;
        this.error.mute = false;
        this.correcto.mute = false;
      }
    });

    if (this.musicaIcono === 2) {
      this.error.mute = true;
      this.correcto.mute = true;
    }

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

    this.leer = this.add.sprite(530, 500, "leer").setInteractive().setScale(0.2);
    this.leer.on("pointerover", () => {
      this.leer.setFrame(1);
    });
    this.leer.on("pointerout", () => {
      this.leer.setFrame(0);
    });
    this.leer.on("pointerdown", () => {
      // datos[n].vozIns.play();
      datos[n].vozIns.play();
    //  vozCu0.play();
    });

    // this.add.image(370, 250, "nave32").setScale(0.3).setInteractive();

    // const grafico = this.add.graphics({ fillStyle: { color: 0x0000ff }, lineStyle: { color: 0x0000aa } });
    const datos = [
      {
        inst: ["1. Derecha", "", "2. Abajo", "", "3. Abajo"],
        img: [100, 240, 180, 480],
        resx: [180, 180, 180],
        resy: [240, 320, 400],
        vozIns: this.sound.add("vozCu0")
      },
      {
        inst: ["1. Derecha", "", "2. Derecha", "", "3. Derecha"],
        img: [100, 480, 340, 400],
        resx: [180, 260, 340],
        resy: [480, 480, 480],
        vozIns: this.sound.add("vozCu1")
      },
      {
        inst: ["1. Abajo", "", "2. Izquierda", "", "3. Abajo"],
        img: [340, 240, 260, 480],
        resx: [340, 260, 260],
        resy: [320, 320, 400],
        vozIns: this.sound.add("vozCu2")
      },
      {
        inst: ["1. Izquierda", "", "2. Arriba", "", "3. Izquierda"],
        img: [340, 400, 100, 320],
        resx: [260, 260, 180],
        resy: [400, 320, 320],
        vozIns: this.sound.add("vozCu3")
      },
      {
        inst: ["1. Derecha", "", "2. Derecha", "", "3. Abajo"],
        img: [180, 240, 340, 400],
        resx: [260, 340, 340],
        resy: [240, 240, 320],
        vozIns: this.sound.add("vozCu4")
      },
      {
        inst: ["1. Derecha", "", "2. Abajo", "", "3. Derecha"],
        img: [100, 400, 340, 480],
        resx: [180, 180, 260],
        resy: [400, 480, 480],
        vozIns: this.sound.add("vozCu5")
      },
      {
        inst: ["1. Derecha", "", "2. Derecha", "", "3. Arriba"],
        img: [100, 320, 340, 240],
        resx: [180, 260, 260],
        resy: [320, 320, 240],
        vozIns: this.sound.add("vozCu6")
      },
      {
        inst: ["1. Abajo", "", "2. Derecha", "", "3. Abajo"],
        img: [180, 240, 260, 480],
        resx: [180, 260, 260],
        resy: [320, 320, 400],
        vozIns: this.sound.add("vozCu7")
      },
      {
        inst: ["1. Abajo", "", "2. Izquierda", "", "3. Abajo"],
        img: [260, 320, 100, 480],
        resx: [260, 180, 180],
        resy: [400, 400, 480],
        vozIns: this.sound.add("vozCu8")
      },
      {
        inst: ["1. Derecha", "", "2. Abajo", "", "3. Derecha", "", "4. Abajo"],
        img: [100, 240, 340, 400],
        resx: [180, 180, 260, 260],
        resy: [240, 320, 320, 400],
        vozIns: this.sound.add("vozCu9")
      },
      {
        inst: ["1. Derecha", "", "2. Derecha", "", "3. Arriba", "", "4. Izquierda"],
        img: [100, 480, 100, 400],
        resx: [180, 260, 260, 180],
        resy: [480, 480, 400, 400],
        vozIns: this.sound.add("vozCu10")
      },
      {
        inst: ["1. Izquierda", "", "2. Izquierda", "", "3. Arriba", "", "4. Arriba"],
        img: [340, 480, 100, 320],
        resx: [260, 180, 180, 180],
        resy: [480, 480, 400, 320],
        vozIns: this.sound.add("vozCu11")
      },
      {
        inst: ["1. Abajo", "", "2. Izquierda", "", "3. Abajo", "", "4. Izquierda"],
        img: [340, 240, 180, 480],
        resx: [340, 260, 260, 180],
        resy: [320, 320, 400, 400],
        vozIns: this.sound.add("vozCu12")
      },
      {
        inst: ["1. Derecha", "", "2. Derecha", "", "3. Derecha", "", "4. Abajo"],
        img: [100, 240, 340, 400],
        resx: [180, 260, 340, 340],
        resy: [240, 240, 240, 320],
        vozIns: this.sound.add("vozCu13")
      },
      {
        inst: ["1. Arriba", "", "2. Izquierda", "", "3. Arriba", "", "4. Arriba"],
        img: [260, 480, 260, 240],
        resx: [260, 180, 180, 180],
        resy: [400, 400, 320, 240],
        vozIns: this.sound.add("vozCu14")
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
        cuadrados[x][y].setTint(0xf6f6a3);
        cuadrados[x][y].setPosition(xx, yy);
        yy = yy + 80;
      }
      xx = xx + 80;
    }
    let n;
    let difi = 0;

    // console.log(leerIns);
    // let t;
    const marco = this.add.image(340, 400, "recta22").setScale(0.4);

    const img1 = this.add.image(0, 0, "nave33").setScale(0.4).setInteractive();
    const img2 = this.add.image(0, 0, "tierra2").setScale(0.4).setInteractive();
    const t = this.add.text(450, 250, datos[0].inst, { font: "20px Arial Black", fill: "#e8dfe1" });
    // n = 0;
    // let ayudavoz;
    // let leerIns;

    /*   this.sound.add("vozCu0");
    this.sound.add("vozCu1");
    this.sound.add("vozCu2");
    this.sound.add("vozCu3");
    this.sound.add("vozCu4");
    this.sound.add("vozCu5");
    this.sound.add("vozCu6");
    this.sound.add("vozCu7");
    this.sound.add("vozCu8");
    this.sound.add("vozCu9");
    this.sound.add("vozCu10");
    this.sound.add("vozCu11");
    this.sound.add("vozCu12");
    this.sound.add("vozCu13");
    this.sound.add("vozCu14"); */

    generar();
    // n = 0;

    // console.log(leerIns);
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
     // console.log(n);
      // ayudavoz = datos[n].vozIns;
      // console.log(ayudavoz);
      //  leerIns.setDisplayOrigin
      img1.setPosition(datos[n].img[0], datos[n].img[1]);
      img2.setPosition(datos[n].img[2], datos[n].img[3]);
      marco.setPosition(datos[n].img[0], datos[n].img[1]);
      //  console.log(datos[n].inst);
      t.setText(datos[n].inst);
      cuadrados.forEach(function(limp) {
        limp.forEach(function(limpiar) {
          limpiar.setTint(0xf6f6a3);
        });
      });
    }

    // this.sound.add(ayudavoz);

    let ayudaAciertos1 = 0;
    let ayudaAciertos2 = 0;
    this.Objcali = {
      varCalificar: function calificar() {
      //   console.log(cuadrados);
        cuadrados.forEach(function(calCua) {
          calCua.forEach(function(calCuadra) {
          //   console.log(calCuadra);
            console.log(datos[n].resx.length);
            if (datos[n].resx.length === 3) {
              if (calCuadra.x === datos[n].resx[0] && calCuadra.y === datos[n].resy[0] && calCuadra.tintBottomLeft === 43520) { puntaje += 0.2; ayudaAciertos1++; }
              if (calCuadra.x === datos[n].resx[1] && calCuadra.y === datos[n].resy[1] && calCuadra.tintBottomLeft === 43520) { puntaje += 0.2; ayudaAciertos1++; }
              if (calCuadra.x === datos[n].resx[2] && calCuadra.y === datos[n].resy[2] && calCuadra.tintBottomLeft === 43520) { puntaje += 0.2; ayudaAciertos1++; }
            } else {
              if (calCuadra.x === datos[n].resx[0] && calCuadra.y === datos[n].resy[0] && calCuadra.tintBottomLeft === 43520) { puntaje += 0.2; ayudaAciertos2++; }
              if (calCuadra.x === datos[n].resx[1] && calCuadra.y === datos[n].resy[1] && calCuadra.tintBottomLeft === 43520) { puntaje += 0.2; ayudaAciertos2++; }
              if (calCuadra.x === datos[n].resx[2] && calCuadra.y === datos[n].resy[2] && calCuadra.tintBottomLeft === 43520) { puntaje += 0.2; ayudaAciertos2++; }
              if (calCuadra.x === datos[n].resx[3] && calCuadra.y === datos[n].resy[3] && calCuadra.tintBottomLeft === 43520) { puntaje += 0.2; ayudaAciertos2++; }
            }
          });
        // console.log(datos[n].resx[0]);
        //    console.log(calCua.x);
        });
        if (ayudaAciertos1 === 3) { aciertos++; }
        if (ayudaAciertos2 === 4) { aciertos++; }

        ayudaAciertos1 = 0;
        ayudaAciertos2 = 0;

     //   console.log(puntaje);
      }
    };
    this.input.on("gameobjectup", this.pintar, this);

    this.input.on("gameobjectup", (pon, obj) => {
   //   console.log(obj);
      if (obj.texture.key === "cuadrado") { marco.setPosition(obj.x, obj.y); }

      if (datos[n].resx.length === 3) {
        if (obj.x === datos[n].resx[0] && obj.y === datos[n].resy[0] && obj.texture.key === "cuadrado") { obj.setTint(0x00AA00); /* if (obj.tintBottomLeft === 16711680) { this.error.play(); console.log("sonido error"); } else { this.correcto.play(); } */ }
        if (obj.x === datos[n].resx[1] && obj.y === datos[n].resy[1] && obj.texture.key === "cuadrado") { obj.setTint(0x00AA00); /* if (obj.tintBottomLeft === 16711680) { this.error.play(); } else { this.correcto.play(); } */ }
        if (obj.x === datos[n].resx[2] && obj.y === datos[n].resy[2] && obj.texture.key === "cuadrado") { obj.setTint(0x00AA00); /* if (obj.tintBottomLeft === 16711680) { this.error.play(); } else { this.correcto.play(); } */ }
      } else {
        if (obj.x === datos[n].resx[0] && obj.y === datos[n].resy[0] && obj.texture.key === "cuadrado") { obj.setTint(0x00AA00); /* if (obj.tintBottomLeft === 16711680) { this.error.play(); } else { this.correcto.play(); } */ }
        if (obj.x === datos[n].resx[1] && obj.y === datos[n].resy[1] && obj.texture.key === "cuadrado") { obj.setTint(0x00AA00); /* if (obj.tintBottomLeft === 16711680) { this.error.play(); } else { this.correcto.play(); } */ }
        if (obj.x === datos[n].resx[2] && obj.y === datos[n].resy[2] && obj.texture.key === "cuadrado") { obj.setTint(0x00AA00);/* if (obj.tintBottomLeft === 16711680) { this.error.play(); } else { this.correcto.play(); } */ }
        if (obj.x === datos[n].resx[3] && obj.y === datos[n].resy[3] && obj.texture.key === "cuadrado") { obj.setTint(0x00AA00); /* if (obj.tintBottomLeft === 16711680) { this.error.play(); } else { this.correcto.play(); } */ }
      }
      if (obj.tintBottomLeft === 16711680) { this.error.play(); }
      if (obj.tintBottomLeft === 43520) { this.correcto.play(); }
    });
  }

  pintar(pointer, fleee) {
    if (fleee.texture.key === "cuadrado" && fleee.tintBottomLeft === 16711680) { fleee.setTint(0xf6f6a3); } else { if (fleee.texture.key === "cuadrado") fleee.setTint(0xff0000); }
    /* console.log("x: " + fleee.x + " y: " + fleee.y);
    console.log("correcto " + this.correcto.mute); */

    // calificar2();
    // console.log(fleee);
    // if (fleee.texture.key === "cuadrado" && fleee.tintBottomLeft === 43520) { fleee.setTint(0xff0000); 0x00AA00}  0x0000ff  0xffff00 0xf6f6a3 0xffffff
  }

  update() {

  }
}
function onEvent() {
  this.inicio -= 1;
  this.contador.setText("Tiempo: " + formato(this.inicio));
  if (this.inicio <= 0) {
    this.contador.setText("Tiempo: " + "0:00");
    this.Objcali.varCalificar();
    // this.calificar();
    let pun = Math.trunc(puntaje);
    this.scene.start("Punt", { punt: pun, letra: "es", nomb: "Selección de Casillas", time: this.min, sce: "Cuadrados", musicaIcono: this.musicaIcono, Intentos: intentos, Aciertos: aciertos });
    puntaje = 0;
    pun = 0;
    intentos = 1;
    aciertos = 0;
    principal.stop();
  }
}
function formato(segundos) {
  const minutos = Math.floor(segundos / 60);
  let sec = segundos % 60;
  sec = sec.toString().padStart(2, "0");
  return `${minutos}:${sec}`;
}
