// import Phaser, { GameObjects } from "phaser";
import Phaser from "phaser";
import Swal from "sweetalert2";
import { es11, pa11, ci11, a11, l11, reset } from "./RegisPuntos";
const target = new Phaser.Math.Vector2();
let spriteOvni;
export class Prin extends Phaser.Scene {
  constructor() {
    super({ key: "Prin", active: true });
  }

  preload() {
    this.load.image("fondo", "assets/sprites/UI/fondo.png");
    this.load.image("tlt", "assets/sprites/UI/titulo.png");
    this.load.image("na", "assets/sprites/na.png");
    this.load.bitmapFont("azoXML", "assets/sprites/UI/bitmap-fonts-debug.png", "assets/sprites/UI/azo-fire.xml");
    this.load.image("user", "assets/sprites/UI/user.png");
    this.load.image("red", "assets/sprites/UI/red.png");
    // Titulo
    this.load.image("es", "assets/sprites/titulo/es.png");
    this.load.image("pa", "assets/sprites/titulo/pa.png");
    this.load.image("ci", "assets/sprites/titulo/ci.png");
    this.load.image("a", "assets/sprites/titulo/a.png");
    this.load.image("l", "assets/sprites/titulo/l.png");
    //
    // this.load.spritesheet("au", "assets/sprites/agu.png", { frameWidth: 200, frameHeight: 200 });
    this.load.spritesheet("au", "assets/sprites/agu2.png", { frameWidth: 200, frameHeight: 200 });

    this.load.spritesheet("sol", "assets/sprites/sol2.png", { frameWidth: 200, frameHeight: 200 });
    //   this.load.spritesheet("gal", "assets/sprites/gal.png", { frameWidth: 100, frameHeight: 100 });
    this.load.spritesheet("gal", "assets/sprites/gal2.png", { frameWidth: 200, frameHeight: 200 });

    //  this.load.spritesheet("sat", "assets/sprites/sat.png", { frameWidth: 300, frameHeight: 300 });
    this.load.spritesheet("sat", "assets/sprites/sat2.png", { frameWidth: 198, frameHeight: 198 });

    // this.load.spritesheet("tie", "assets/sprites/tie.png", { frameWidth: 100, frameHeight: 100 });
    this.load.spritesheet("tie", "assets/sprites/tie2.png", { frameWidth: 200, frameHeight: 200 });

    this.load.spritesheet("ovni", "assets/sprites/ovni.png", { frameWidth: 84.28, frameHeight: 59 });
    // this.load.spritesheet("ovni", "assets/sprites/nave/ovni2.png", { frameWidth: 357.1, frameHeight: 250 });

    this.load.spritesheet("puntajes", "assets/sprites/UI/puntajes.png", { frameWidth: 197.5, frameHeight: 192 });
    this.load.spritesheet("jugarJu", "assets/sprites/UI/jugar.png", { frameWidth: 198.5, frameHeight: 203 });
    this.load.spritesheet("jugarSa", "assets/sprites/UI/jugar.png", { frameWidth: 198.5, frameHeight: 203 });
    this.load.spritesheet("jugarSo", "assets/sprites/UI/jugar.png", { frameWidth: 198.5, frameHeight: 203 });
    this.load.spritesheet("jugarGa", "assets/sprites/UI/jugar.png", { frameWidth: 198.5, frameHeight: 203 });
    this.load.spritesheet("jugarAg", "assets/sprites/UI/jugar.png", { frameWidth: 198.5, frameHeight: 203 });
    // musicatons
    this.load.spritesheet("instrucciones", "assets/sprites/UI/instrucciones.png", { frameWidth: 206, frameHeight: 208 });
     this.load.spritesheet("atras", "assets/sprites/UI/atras.png", { frameWidth: 201, frameHeight: 196 });
    this.load.spritesheet("musica", "assets/sprites/UI/musica.png", { frameWidth: 205.3, frameHeight: 207 });
    this.load.spritesheet("salir", "assets/sprites/UI/salir.png", { frameWidth: 40, frameHeight: 40 });
    this.load.spritesheet("can", "assets/sprites/UI/musica.png", { frameWidth: 200.5, frameHeight: 190 });
    this.load.spritesheet("info", "assets/sprites/UI/info.png", { frameWidth: 170, frameHeight: 160 });
   
    // Sonidos
    this.load.audio("principal", "assets/sounds/ambiente.mp3");
    this.load.audio("vozPrin", "assets/sounds/voz/vozPrin.mp3");
    this.load.audio("aplausos", "assets/sounds/aplausos.mp3");

    irJuego();
  }

  create(data) {
    this.letra = data.letr;
    this.valor = data.valLetra;
    this.insIcono = data.insIcono;
    this.musicaIcono = data.musicaIcono;
    // this.scene.disableWebAudio = true;
    // sonido
    //  principal = this.sound.add("principal");
    if (this.musicaIcono !== 2) {
      this.musicaIcono = 0;
    }
    //   principal.stop();
    //   principal.play();
    const voz = this.sound.add("vozPrin");
    const aplausos = this.sound.add("aplausos");

    const principal = this.sound.add("principal");
    principal.play();
    if (this.musicaIcono === 2) {
      principal.mute = true;
    }

    principal.volume = 0.2;
    principal.loop = true;
    // console.log(WebAudioSound2.key);

    // console.log("el valor " + this.valor + " letra " + this.letra);
    // Crear animaciones
    const aguAnim = this.anims.create({
      key: "gir",
      frames: this.anims.generateFrameNumbers("au"),
      frameRate: 8
    });
    const solAnim = this.anims.create({
      key: "sol",
      frames: this.anims.generateFrameNumbers("sol"),
      frameRate: 6
    });
    const galAnim = this.anims.create({
      key: "gal",
      frames: this.anims.generateFrameNumbers("gal"),
      frameRate: 7
    });
    const satAnim = this.anims.create({
      key: "sat",
      frames: this.anims.generateFrameNumbers("sat"),
      frameRate: 7
    });
    const tieAnim = this.anims.create({
      key: "tie",
      frames: this.anims.generateFrameNumbers("tie"),
      frameRate: 7
    });
    const ovniAnim = this.anims.create({
      key: "ovni",
      frames: this.anims.generateFrameNumbers("ovni"),
      frameRate: 5
    });

    this.add.image(0, 0, "fondo").setDisplayOrigin(0, 0);
    // this.titulo = this.add.image(200, 0, "tlt").setDisplayOrigin(0, 0).setScale(0.5);
    // creación titulo

    /* let es1 = 0.2;
    let pa1 = 0.2;
    let ci1 = 0.2;
    let a1 = 0.2;
    let l1 = 0.2; */

    let es1;
    let pa1;
    let ci1;
    let a1;
    let l1;
    // console.log(es1);

    console.log(pa11);
    /*  if (es1 === undefined && pa1 === undefined && ci1 === undefined && a1 === undefined && l1 === undefined) {
      es1 = 0.2;
      pa1 = 0.2;
      ci1 = 0.2;
      a1 = 0.2;
      l1 = 0.2;
    } else {
      es1 = es11;
      pa1 = pa11;
      ci1 = ci11;
      a1 = a11;
      l1 = l11;
    } */
    es1 = es11;
    pa1 = pa11;
    ci1 = ci11;
    a1 = a11;
    l1 = l11;
    /* if (this.letra === "es") {
      es1 = this.valor;
    } if (this.letra === "pa") {
      pa1 = this.valor;
    } if (this.letra === "ci") {
      ci1 = this.valor;
    } if (this.letra === "a") {
      a1 = this.valor;
    } if (this.letra === "l") {
      l1 = this.valor;
    } */
    // Textos
    const player = localStorage.getItem("user");
    this.add.image(200, 10, "es").setDisplayOrigin(0, 0).setScale(0.5).setAlpha(es1);
    this.add.image(300, 10, "pa").setDisplayOrigin(0, 0).setScale(0.5).setAlpha(pa1);
    this.add.image(410, 10, "ci").setDisplayOrigin(0, 0).setScale(0.5).setAlpha(ci1);
    this.add.image(490, 10, "a").setDisplayOrigin(0, 0).setScale(0.5).setAlpha(a1);
    this.add.image(550, 10, "l").setDisplayOrigin(0, 0).setScale(0.5).setAlpha(l1);
    const particles = this.add.particles("red");
    const win = this.physics.add.image(400, 60, "tlt").setScale(0.4).setAlpha(0);

    /* es1 = 1;
    pa1 = 1;
    ci1 = 1;
    a1 = 1;
    l1 = 1; */
    if (es1 === 1 && pa1 === 1 && ci1 === 1 && a1 === 1 && l1 === 1) {
      const empezar = particles.createEmitter({
        speed: 100,
        scale: { start: 1, end: 0 },
        blendMode: "ADD"
      });
      win.setAlpha(1);
      win.setVelocity(100, 200);
      win.setBounce(1, 1);
      win.setCollideWorldBounds(true);
      aplausos.play();
      empezar.startFollow(win);
      Swal.fire({
        title: "!FELICIDADES! " + player,
        icon: "success",
        text: "LOGRASTE COMPLETAR TODOS LOS RETOS CON EXITO",
        confirmButtonText: "Volver a Jugar"
      }).then((result) => {
        if (result.isConfirmed) {
          reset();
          this.scene.start("Prin");
          principal.stop();
        }
      });
      actualizarWin();
    }

    // Animaciones de cuerpos celestes
    const spriteAu = this.add.sprite(700, 150, "au").setScale(0.6);
    spriteAu.play({ key: "gir", repeat: -1 });

    const spriteSol = this.add.sprite(400, 150, "sol").setScale(0.6);
    spriteSol.play({ key: "sol", repeat: -1 });

    const spriteGal = this.add.sprite(612, 450, "gal").setScale(0.6);
    spriteGal.play({ key: "gal", repeat: -1 });

    const spriteSat = this.add.sprite(200, 450, "sat").setScale(0.9);
    spriteSat.play({ key: "sat", repeat: -1 });

    const spriteTie = this.add.sprite(100, 250, "tie").setScale(0.35);
    //   const spriteTie = this.add.sprite(100, 260, "tie").setScale(0.35);

    spriteTie.play({ key: "tie", repeat: -1 });

    //  this.add.bitmapText(45, 185, "azoXML", "Jupiter").setScale(0.25);
    // this.add.bitmapText(380, 185, "azoXML", "Sol").setScale(0.25);
    this.add.image(350, 550, "user").setScale(0.2);
    this.add.text(385, 540, player, { font: "20px Arial Black", fill: "#e01650" }).setStroke("#e8dfe1", 6);
    this.add.text(385, 185, "Sol", { font: "15px Arial Black", fill: "#e8dfe1" }).setStroke("#e01650", 6);
    this.add.text(620, 200, "Agujero Negro", { font: "15px Arial Black", fill: "#e8dfe1" }).setStroke("#e01650", 6);
    this.add.text(165, 380, "Saturno", { font: "15px Arial Black", fill: "#e8dfe1" }).setStroke("#e01650", 6);
    this.add.text(585, 390, "Galaxia", { font: "15px Arial Black", fill: "#e8dfe1" }).setStroke("#e01650", 6);
    this.add.text(65, 190, "Júpiter", { font: "15px Arial Black", fill: "#e8dfe1" }).setStroke("#e01650", 6);
    this.add.text(30, 500, "Puntajes", { font: "15px Arial Black", fill: "#e8dfe1" }).setStroke("#e01650", 6);
    this.add.text(220, 270, "Dando clic, lleva la nave sobre uno de los astros para jugar.", { font: "11px Arial Black", fill: "#e8dfe1" });

    spriteOvni = this.physics.add.sprite(400, 350, "ovni").setScale(0.6);
    spriteOvni.play({ key: "ovni", repeat: -1 });

    this.input.on("pointerdown", function(pointer) {
      target.x = pointer.x;
      target.y = pointer.y;
      this.physics.moveToObject(spriteOvni, target, 200);
    }, this);

    // musica
    this.musica = this.add.sprite(750, 500, "musica").setInteractive().setScale(0.2);
    this.musica.setFrame(this.musicaIcono);

    this.musica.on("pointerover", () => {
      this.musica.setFrame(1);
    });
    this.musica.on("pointerout", () => {
      if (principal.mute === true) {
        this.musica.setFrame(2);
      } else {
        this.musica.setFrame(0);
      }
    });

    this.musica.on("pointerdown", () => {
      if (principal.mute === false && this.musicaIcono === 0) {
        this.musica.setFrame(2);
        this.musicaIcono = 2;
        aplausos.mute = true;
        principal.mute = true;
      } else {
        this.musica.setFrame(0);
        this.musicaIcono = 0;
        principal.play();
        principal.mute = false;
        aplausos.mute = false;
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
      if (voz.mute === false) {
        this.ins.setFrame(2);
        this.insIcono = 2;
        voz.mute = true;
      } else {
        this.ins.setFrame(0);
        this.insIcono = 0;
        voz.mute = false;
      }
    });

    //this.pregunta = this.add.sprite(750, 350, "info").setInteractive().setScale(0.2);


    this.pregunta = this.add.sprite(750, 450, "info").setInteractive().setScale(0.24);
    this.pregunta.on("pointerover", () => {
      this.pregunta.setFrame(1);
    });
    this.pregunta.on("pointerout", () => {
      this.pregunta.setFrame(0);
    });
    this.pregunta.on("pointerdown", () => {
      voz.play();
      Swal.fire({
        title: "Bienvenido al Juego espacial.",
        icon: "info",
        text: "Para mover la nave debes hacer clic en la pantalla, existen 5 actividades diferentes, las cuales se puede seleccionar cuando la nave se encuentre en cima de un cuerpo espacial en movimiento. Para completar el juego debes coleccionar las letras de la palabra ESPACIAL."
      });
    });

    /* this.atras = this.add.sprite(30, 30, "atras").setInteractive().setScale(0.2);
    this.atras.on("pointerover", () => {
      this.atras.setFrame(1);
    });
    this.atras.on("pointerout", () => {
      this.atras.setFrame(0);
    });
    this.atras.on("pointerdown", () => {
      const url = "../index.html";
      window.location.href = url;
    }); */

    this.salir = this.add.sprite(740, 40, "salir").setInteractive();
    this.salir.on("pointerover", () => {
      this.salir.setFrame(1);
    });
    this.salir.on("pointerout", () => {
      this.salir.setFrame(0);
    });
    this.salir.on("pointerdown", () => {
      Swal.fire({
        icon: "question",
        title: "Quiere salir del Juego?",
        // showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Salir",
        cancelButtonText: "Cancelar"
      //  denyButtonText: "Don't save",
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");

          const url = "./index.html";
          window.location.href = url;
        }
      });
    });

    this.puntajes = this.add.sprite(70, 550, "puntajes").setInteractive().setScale(0.2);
    this.puntajes.on("pointerover", () => {
      this.puntajes.setFrame(1);
    });
    this.puntajes.on("pointerout", () => {
      this.puntajes.setFrame(0);
    });
    this.puntajes.on("pointerdown", () => {
      principal.stop();
      const url = "./html/puntajes.html";
      window.location.href = url;
    });

    this.juegoUr = this.add.sprite(55, 250, "jugarJu").setInteractive().setScale(0.15);
    this.juegoUr.on("pointerover", () => {
      this.juegoUr.setFrame(1);
    });
    this.juegoUr.on("pointerout", () => {
      this.juegoUr.setFrame(0);
    });
    this.juegoUr.on("pointerdown", () => {
      principal.stop();
      const cont = [
        "",
        "Sigue las instrucciones que se muestran", "al lado derecho de la matriz para crear el",
        "camino que debe seguir la nave.", "", " ",
        "Una vez el camino este listo, selecciona", "el botón validar para continuar."];
      this.scene.start("Configuracion", { instru: cont, scene: "Cuadrados", titulo: "tlt1", x: 130, insIcono: this.insIcono, musicaIcono: this.musicaIcono, voz: "vozCuadrados" });
    });

    this.juegoSa = this.add.sprite(150, 450, "jugarSa").setInteractive().setScale(0.15);
    this.juegoSa.on("pointerover", () => {
      this.juegoSa.setFrame(1);
    });
    this.juegoSa.on("pointerout", () => {
      this.juegoSa.setFrame(0);
    });
    this.juegoSa.on("pointerdown", () => {
      principal.stop();
      //  this.scene.start("Union");
      const cont = [" ",
        "Une los puntos de las imágenes de arriba",
        "hacia abajo para que coincidan con la ",
        "dirección de las flechas.", " ",
        "Una vez las imágenes estén unidas", "con las flechas, selecciona el botón validar", "para continuar."];
      this.scene.start("Configuracion", { instru: cont, scene: "Union", titulo: "tltUnion", x: 170, insIcono: this.insIcono, musicaIcono: this.musicaIcono, voz: "vozUnion" });
    });

    this.juegoSo = this.add.sprite(355, 150, "jugarSo").setInteractive().setScale(0.15);
    this.juegoSo.on("pointerover", () => {
      this.juegoSo.setFrame(1);
    });
    this.juegoSo.on("pointerout", () => {
      this.juegoSo.setFrame(0);
    });
    this.juegoSo.on("pointerdown", () => {
      principal.stop();
      const cont = [" ",
        "Ordena las imágenes según su secuencia",
        "lógica, arrastrando al cuadrado que ", "está sobre el número que corresponda.", " ",
        "Una vez las imágenes estén ordenadas,", "selecciona el botón validar para continuar."];
      this.scene.start("Configuracion", { instru: cont, scene: "Ordenar", titulo: "tltSecuencia", x: 160, insIcono: this.insIcono, musicaIcono: this.musicaIcono, voz: "vozOrdenar" });
    });

    this.juegoGa = this.add.sprite(570, 450, "jugarGa").setInteractive().setScale(0.15);
    this.juegoGa.on("pointerover", () => {
      this.juegoGa.setFrame(1);
    });
    this.juegoGa.on("pointerout", () => {
      this.juegoGa.setFrame(0);
    });
    this.juegoGa.on("pointerdown", () => {
      principal.stop();
      const cont = [" ",
        "Arrastra las imágenes para colocarlas ", "en la matriz siguiendo las instrucciones",
        "que se encuentran de lado derecho.", " ",
        "Una vez hayas colocado las imágenes,", "selecciona el botón validar para continuar."];
      this.scene.start("Configuracion", { instru: cont, scene: "Colocar", titulo: "tltColocar", x: 90, insIcono: this.insIcono, musicaIcono: this.musicaIcono, voz: "vozColocar" });
    });

    this.juegoAg = this.add.sprite(660, 150, "jugarAg").setInteractive().setScale(0.15);
    this.juegoAg.on("pointerover", () => {
      this.juegoAg.setFrame(1);
    });
    this.juegoAg.on("pointerout", () => {
      this.juegoAg.setFrame(0);
    });
    this.juegoAg.on("pointerdown", () => {
      principal.stop();
      const cont = [
        "Selecciona una flecha de color, luego",
        "selecciona las flechas de blanco que ", "sean iguales para pintarlas. Para cambiar ",
        "el color puedes seleccionar otra flecha", "de muestra.", " ",
        "Una vez todas las flechas sean pintadas,",
        "selecciona el botón validar para continuar."];
      this.scene.start("Configuracion", { instru: cont, scene: "Flechas", titulo: "tltFlechas", x: 180, insIcono: this.insIcono, musicaIcono: this.musicaIcono, voz: "vozFlechas" });
    });

  /*  this.input.on("pointerdown", function(pointer) {
      console.log(pointer.x);
      console.log(pointer.y);
    }); */
  }

  update() {
    const distance = Phaser.Math.Distance.Between(spriteOvni.x, spriteOvni.y, target.x, target.y);
    if (spriteOvni.body.speed > 0) {
    //  distanceText.setText("Distancia: " + distance);
      if (distance < 4) {
        spriteOvni.body.reset(target.x, target.y);
      }
    }
    // console.log(spriteOvni.y);
    // this.titulo.setAlpha(1);
    if ((spriteOvni.x > 78 && spriteOvni.x < 125) && (spriteOvni.y > 221 && spriteOvni.y < 278)) {
      this.juegoUr.setAlpha(1);
    } else {
      this.juegoUr.setAlpha(0);
    }
    if ((spriteOvni.x > 145 && spriteOvni.x < 273) && (spriteOvni.y > 403 && spriteOvni.y < 500)) {
      this.juegoSa.setAlpha(1);
    } else {
      this.juegoSa.setAlpha(0);
    }
    if ((spriteOvni.x > 370 && spriteOvni.x < 428) && (spriteOvni.y > 122 && spriteOvni.y < 183)) {
      this.juegoSo.setAlpha(1);
    } else {
      this.juegoSo.setAlpha(0);
    }
    if ((spriteOvni.x > 578 && spriteOvni.x < 662) && (spriteOvni.y > 417 && spriteOvni.y < 485)) {
      this.juegoGa.setAlpha(1);
    } else {
      this.juegoGa.setAlpha(0);
    }
    if ((spriteOvni.x > 668 && spriteOvni.x < 725) && (spriteOvni.y > 110 && spriteOvni.y < 178)) {
      this.juegoAg.setAlpha(1);
    } else {
      this.juegoAg.setAlpha(0);
    }
  }
}

async function irJuego() {
  const auth = localStorage.getItem("token");

  const res = await fetch(import.meta.env.VITE_API_URL + "/juego", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + auth
    },
    body: JSON.stringify()
  });

  if (res.status !== 200) {
    // spanError.innerHTML = "Hubo un error:" + res.status + data.message;
    // alert("error");
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Error al Ingresar"
    });
    location.href = "../html/iniciar.html";
  }
}

async function actualizarWin() {
  const player = localStorage.getItem("user");
  const res = await fetch(import.meta.env.VITE_API_URL + "/usuario?usuario=" + player);
  const data = await res.json();
  const w = data.body[0].wins + 1;
  const user = {
    wins: w
  };
  const res2 = await fetch(import.meta.env.VITE_API_URL + "/usuario/win/" + data.body[0]._id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)

  });
  console.log(res2);
}
