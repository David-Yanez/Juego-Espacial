import Phaser from "phaser";
import Swal from "sweetalert2";
let puntaje = 0;
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
    this.load.spritesheet("pregunta", "assets/sprites/UI/pregunta.png", { frameWidth: 206, frameHeight: 185 });

    // Sonidos
    this.load.audio("principal", "assets/sounds/ambiente.mp3");
    this.load.audio("vozFlechas", "assets/sounds/voz/vozFlechas.mp3");
  }

  create(data) {
    this.ins = data.ins;
    this.es = data.es;
    this.tlt = data.tlt;
    this.x = data.x;
    this.insIcono = data.insIcono;
    this.musicaIcono = data.musicaIcono;

    // Sonidos
    const voz = this.sound.add("vozFlechas");
    const principal = this.sound.add("principal");
    principal.volume = 0.2;
    principal.loop = true;
    principal.play();

    // Fondo
    this.add.image(0, 0, "fondo").setDisplayOrigin(0, 0);
    // Titulo
    this.add.image(130, 10, "tltFlechas").setDisplayOrigin(0, 0).setScale(0.45);

    // Contador
    this.min = data.time / 60;
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
      principal.stop();
      voz.stop();
      this.scene.start("Configuracion", { insIcono: this.insIcono, musicaIcono: this.musicaIcono, instru: data.ins, scene: this.es, titulo: this.tlt, x: this.x, voz: "vozFlechas" });
    });

    this.ok = this.add.sprite(600, 400, "ok").setInteractive().setScale(0.2);
    this.ok.on("pointerover", () => {
      this.ok.setFrame(1);
    });
    this.ok.on("pointerout", () => {
      this.ok.setFrame(0);

      nivel();
      calificar();
      cambiar();
    });
    this.ok.on("pointerdown", () => {
      //   this.scene.start("Prin");
    });

    this.pregunta = this.add.sprite(750, 450, "pregunta").setInteractive().setScale(0.2);
    this.pregunta.on("pointerover", () => {
      this.pregunta.setFrame(1);
    });
    this.pregunta.on("pointerout", () => {
      voz.play();
      this.pregunta.setFrame(0);
      Swal.fire({
        icon: "info",
        text: "Colorea las flechas. Selecciona una flecha de color, luego selecciona las demás flechas en blanco que sean similares para pintarlas, para cambiar de color puedes seleccionar otra flecha. Una vez todas las flechas sean pintadas, selecciona el botón 👍 para continuar."
      }
      );
    });
    this.pregunta.on("pointerdown", () => {

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
      console.log(principal.mute);
      //  this.musica.setFrame(0);
      if (principal.mute === false && this.musicaIcono === 0) {
        this.musica.setFrame(2);
        this.musicaIcono = 2;
        //    principal.play();
        principal.mute = true;
      } else {
        this.musica.setFrame(0);
        this.musicaIcono = 0;
        principal.play();
        principal.mute = false;

      // mus = true;
      }
    });
    this.musica.on("pointerdown", () => {
    //  console.log(principal.mute);
    });

    this.ins = this.add.sprite(750, 550, "instrucciones").setInteractive().setScale(0.2);
    this.ins.setFrame(this.insIcono);
    this.ins.on("pointerover", () => {
      this.ins.setFrame(1);
    });
    this.ins.on("pointerout", () => {
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
    this.ins.on("pointerdown", () => {

    });

    let contador = 0;
    let i = 1;

    this.verde = this.add.image(140, 200, "flecha").setScale(0.3).setInteractive().setTint(0x00FF00);
    this.rojo = this.add.image(230, 200, "flecha").setScale(0.3).setAngle(180).setInteractive().setTint(0xff0000);
    const azul = this.add.image(320, 200, "flecha").setScale(0.3).setAngle(270).setInteractive().setTint(0x0080FF).setAlpha(0);
    const morado = this.add.image(410, 200, "flecha").setScale(0.3).setAngle(90).setInteractive().setTint(0x8000FF).setAlpha(0);

    this.verde.on("pointerdown", () => {
      color = 0x00FF00;
      console.log(color);
    }, this);

    this.rojo.on("pointerdown", () => {
      color = 0xff0000;
      console.log(color);
    }, this);

    azul.on("pointerdown", () => {
      color = 0x0080FF;
      console.log(color);
    }, this);

    morado.on("pointerdown", () => {
      color = 0x8000FF;
      console.log(color);
    }, this);

    nivel();
    function nivel() {
      if (contador === 4) {
        azul.setAlpha(1);
        i = 2;
      }
      if (contador === 7) {
        morado.setAlpha(1);
        i = 3;
      }
      contador++;
    }

    const flechas = [];
    // flechas = [];
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 4; j++) {
        this.fleee = this.add.image(110 + (i * 90), 300 + (j * 80), "flecha").setScale(0.3).setInteractive();
        this.ran = Phaser.Math.Between(0, 1);
        if (this.ran === 1) { this.fleee.angle = 180; }
        flechas.push(this.fleee);
      /*  this.ran = Phaser.Math.Between(0, 1);
        if (this.ran === 1) { this.fleee.angle = 180; }
        if (this.ran === 2) { this.fleee.angle = 270; }
        if (this.ran === 3) { this.fleee.angle = 90; } */
        // console.log(this.ran);
      }
    }

    function calificar() {
      flechas.forEach(function(calFle) {
        if (calFle.angle === 0 && calFle.tintBottomLeft === 65280) { puntaje = puntaje + 0.25; }
        if (calFle.angle === -180 && calFle.tintBottomLeft === 16711680) { puntaje = puntaje + 0.25; }
        if (calFle.angle === -90 && calFle.tintBottomLeft === 33023) { puntaje = puntaje + 0.25; }
        if (calFle.angle === 90 && calFle.tintBottomLeft === 8388863) { puntaje = puntaje + 0.25; }

        // console.log(calFle);
        // if (ran === 0) { fle.angle = 0; }
        // puntaje++;
      });
      console.log("puntaje " + puntaje);
    }

    function cambiar() {
      flechas.forEach(function(fle) {
        const ran = Phaser.Math.Between(0, i);
        fle.setTint(16777215);
        if (ran === 0) { fle.angle = 0; }
        if (ran === 1) { fle.angle = 180; }
        if (ran === 2) { fle.angle = 270; }
        if (ran === 3) { fle.angle = 90; }
      });
      console.log(flechas);
    }
    console.log(flechas);

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
    let pun = Math.trunc(puntaje);
    this.scene.start("Punt", { punt: pun, letra: "ci", nomb: "Colorear Flechas", time: this.min, sce: "Flechas" });
    puntaje = 0;
    pun = 0;
  }
}
function formato(segundos) {
  const minutos = Math.floor(segundos / 60);
  let sec = segundos % 60;
  sec = sec.toString().padStart(2, "0");
  return `${minutos}:${sec}`;
}
