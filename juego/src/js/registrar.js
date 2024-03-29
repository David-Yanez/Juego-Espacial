// Animales
import Swal from "sweetalert2";
const vozAmari = new Audio("../assets/sounds/password/amarillo.mp3");
const vozAzul = new Audio("../assets/sounds/password/azul.mp3");
const vozComer = new Audio("../assets/sounds/password/comer.mp3");
const vozCone = new Audio("../assets/sounds/password/conejo.mp3");
const vozLeon = new Audio("../assets/sounds/password/leon.mp3");
const vozNadar = new Audio("../assets/sounds/password/nadar.mp3");
const vozPaja = new Audio("../assets/sounds/password/pajaro.mp3");
const vozPez = new Audio("../assets/sounds/password/pez.mp3");
const vozRojo = new Audio("../assets/sounds/password/rojo.mp3");
const vozSalt = new Audio("../assets/sounds/password/saltar.mp3");
const vozVer = new Audio("../assets/sounds/password/verde.mp3");
const vozVolar = new Audio("../assets/sounds/password/volar.mp3");
let tres1 = false;
let tres2 = false;
let tres3 = false;
function iniciar() {
  const inis = document.getElementById("pez");
  inis.addEventListener("click", estilo);
}

function iniciar2() {
  const inisa = document.getElementById("pajaro");
  inisa.addEventListener("click", estilo2);
}

function iniciar3() {
  const inisa = document.getElementById("conejo");
  inisa.addEventListener("click", estilo3);
}

function iniciar4() {
  const inisa = document.getElementById("leon");
  inisa.addEventListener("click", estilo4);
}

function estilo() {
  vozPez.play();
  tres1 = true;
  cambiar2();
  const agregar = document.getElementById("pez");
  const aa = document.getElementById("pajaro");
  const bb = document.getElementById("conejo");
  const cc = document.getElementById("leon");

  agregar.style.setProperty("border-radius", "50%");
  agregar.style.setProperty("box-shadow", "0px 0px 15px 15px #ec731e");

  aa.style.removeProperty("border-radius");
  aa.style.removeProperty("box-shadow");
  bb.style.removeProperty("border-radius");
  bb.style.removeProperty("box-shadow");
  cc.style.removeProperty("border-radius");
  cc.style.removeProperty("box-shadow");
}

function estilo2() {
  tres1 = true;
  vozPaja.play();
  cambiar2();
  const agregar = document.getElementById("pajaro");
  const aa = document.getElementById("pez");
  const bb = document.getElementById("conejo");
  const cc = document.getElementById("leon");

  agregar.style.setProperty("border-radius", "50%");
  agregar.style.setProperty("box-shadow", "0px 0px 15px 15px #ec731e");

  aa.style.removeProperty("border-radius");
  aa.style.removeProperty("box-shadow");
  bb.style.removeProperty("border-radius");
  bb.style.removeProperty("box-shadow");
  cc.style.removeProperty("border-radius");
  cc.style.removeProperty("box-shadow");
}

function estilo3() {
  vozCone.play();
  tres1 = true;
  cambiar2();
  const agregar = document.getElementById("conejo");
  const aa = document.getElementById("pez");
  const bb = document.getElementById("pajaro");
  const cc = document.getElementById("leon");

  agregar.style.setProperty("border-radius", "50%");
  agregar.style.setProperty("box-shadow", "0px 0px 15px 15px #ec731e");

  aa.style.removeProperty("border-radius");
  aa.style.removeProperty("box-shadow");
  bb.style.removeProperty("border-radius");
  bb.style.removeProperty("box-shadow");
  cc.style.removeProperty("border-radius");
  cc.style.removeProperty("box-shadow");
}

function estilo4() {
  vozLeon.play();
  tres1 = true;
  cambiar2();
  const agregar = document.getElementById("leon");
  const aa = document.getElementById("pez");
  const bb = document.getElementById("pajaro");
  const cc = document.getElementById("conejo");

  agregar.style.setProperty("border-radius", "50%");
  agregar.style.setProperty("box-shadow", "0px 0px 15px 15px #ec731e");

  aa.style.removeProperty("border-radius");
  aa.style.removeProperty("box-shadow");
  bb.style.removeProperty("border-radius");
  bb.style.removeProperty("box-shadow");
  cc.style.removeProperty("border-radius");
  cc.style.removeProperty("box-shadow");
}

// Colores

function iniciar5() {
  const inis = document.getElementById("verde");
  inis.addEventListener("click", estilo5);
}

function iniciar6() {
  const inisa = document.getElementById("rojo");
  inisa.addEventListener("click", estilo6);
}

function iniciar7() {
  const inisa = document.getElementById("azul");
  inisa.addEventListener("click", estilo7);
}

function iniciar8() {
  const inisa = document.getElementById("amarillo");
  inisa.addEventListener("click", estilo8);
}

function estilo5() {
  vozVer.play();
  tres2 = true;
  cambiar2();
  const agregar = document.getElementById("verde");
  const aa = document.getElementById("rojo");
  const bb = document.getElementById("azul");
  const cc = document.getElementById("amarillo");

  agregar.style.setProperty("border-radius", "50%");
  agregar.style.setProperty("box-shadow", "0px 0px 15px 15px #ec731e");

  aa.style.removeProperty("border-radius");
  aa.style.removeProperty("box-shadow");
  bb.style.removeProperty("border-radius");
  bb.style.removeProperty("box-shadow");
  cc.style.removeProperty("border-radius");
  cc.style.removeProperty("box-shadow");
}

function estilo6() {
  vozRojo.play();
  tres2 = true;
  cambiar2();
  const agregar = document.getElementById("rojo");
  const aa = document.getElementById("verde");
  const bb = document.getElementById("azul");
  const cc = document.getElementById("amarillo");

  agregar.style.setProperty("border-radius", "50%");
  agregar.style.setProperty("box-shadow", "0px 0px 15px 15px #ec731e");

  aa.style.removeProperty("border-radius");
  aa.style.removeProperty("box-shadow");
  bb.style.removeProperty("border-radius");
  bb.style.removeProperty("box-shadow");
  cc.style.removeProperty("border-radius");
  cc.style.removeProperty("box-shadow");
}

function estilo7() {
  vozAzul.play();
  tres2 = true;
  cambiar2();
  const agregar = document.getElementById("azul");
  const aa = document.getElementById("rojo");
  const bb = document.getElementById("verde");
  const cc = document.getElementById("amarillo");

  agregar.style.setProperty("border-radius", "50%");
  agregar.style.setProperty("box-shadow", "0px 0px 15px 15px #ec731e");

  aa.style.removeProperty("border-radius");
  aa.style.removeProperty("box-shadow");
  bb.style.removeProperty("border-radius");
  bb.style.removeProperty("box-shadow");
  cc.style.removeProperty("border-radius");
  cc.style.removeProperty("box-shadow");
}

function estilo8() {
  vozAmari.play();
  tres2 = true;
  cambiar2();
  const agregar = document.getElementById("amarillo");
  const aa = document.getElementById("rojo");
  const bb = document.getElementById("azul");
  const cc = document.getElementById("verde");

  agregar.style.setProperty("border-radius", "50%");
  agregar.style.setProperty("box-shadow", "0px 0px 15px 15px #ec731e");

  aa.style.removeProperty("border-radius");
  aa.style.removeProperty("box-shadow");
  bb.style.removeProperty("border-radius");
  bb.style.removeProperty("box-shadow");
  cc.style.removeProperty("border-radius");
  cc.style.removeProperty("box-shadow");
}

// acciones

function iniciar9() {
  const inis = document.getElementById("volar");
  inis.addEventListener("click", estilo9);
}

function iniciar10() {
  const inisa = document.getElementById("saltar");
  inisa.addEventListener("click", estilo10);
}

function iniciar11() {
  const inisa = document.getElementById("comer");
  inisa.addEventListener("click", estilo11);
}

function iniciar12() {
  const inisa = document.getElementById("nadar");
  inisa.addEventListener("click", estilo12);
}

function estilo9() {
  vozVolar.play();
  tres3 = true;
  cambiar2();
  const agregar = document.getElementById("volar");
  const aa = document.getElementById("saltar");
  const bb = document.getElementById("comer");
  const cc = document.getElementById("nadar");

  agregar.style.setProperty("border-radius", "50%");
  agregar.style.setProperty("box-shadow", "0px 0px 15px 15px #ec731e");

  aa.style.removeProperty("border-radius");
  aa.style.removeProperty("box-shadow");
  bb.style.removeProperty("border-radius");
  bb.style.removeProperty("box-shadow");
  cc.style.removeProperty("border-radius");
  cc.style.removeProperty("box-shadow");
}

function estilo10() {
  vozSalt.play();
  tres3 = true;
  cambiar2();
  const agregar = document.getElementById("saltar");
  const aa = document.getElementById("volar");
  const bb = document.getElementById("comer");
  const cc = document.getElementById("nadar");

  agregar.style.setProperty("border-radius", "50%");
  agregar.style.setProperty("box-shadow", "0px 0px 15px 15px #ec731e");

  aa.style.removeProperty("border-radius");
  aa.style.removeProperty("box-shadow");
  bb.style.removeProperty("border-radius");
  bb.style.removeProperty("box-shadow");
  cc.style.removeProperty("border-radius");
  cc.style.removeProperty("box-shadow");
}

function estilo11() {
  vozComer.play();
  tres3 = true;
  cambiar2();
  const agregar = document.getElementById("comer");
  const aa = document.getElementById("volar");
  const bb = document.getElementById("saltar");
  const cc = document.getElementById("nadar");

  agregar.style.setProperty("border-radius", "50%");
  agregar.style.setProperty("box-shadow", "0px 0px 15px 15px #ec731e");

  aa.style.removeProperty("border-radius");
  aa.style.removeProperty("box-shadow");
  bb.style.removeProperty("border-radius");
  bb.style.removeProperty("box-shadow");
  cc.style.removeProperty("border-radius");
  cc.style.removeProperty("box-shadow");
}

function estilo12() {
  vozNadar.play();
  tres3 = true;
  cambiar2();
  const agregar = document.getElementById("nadar");
  const aa = document.getElementById("volar");
  const bb = document.getElementById("comer");
  const cc = document.getElementById("saltar");

  agregar.style.setProperty("border-radius", "50%");
  agregar.style.setProperty("box-shadow", "0px 0px 15px 15px #ec731e");

  aa.style.removeProperty("border-radius");
  aa.style.removeProperty("box-shadow");
  bb.style.removeProperty("border-radius");
  bb.style.removeProperty("box-shadow");
  cc.style.removeProperty("border-radius");
  cc.style.removeProperty("box-shadow");
}

function lanzasaltar() {
  iniciar();
  iniciar2();
  iniciar3();
  iniciar4();
  iniciar5();
  iniciar6();
  iniciar7();
  iniciar8();
  iniciar9();
  iniciar10();
  iniciar11();
  iniciar12();
}
// document.getElementById("inicio").classList.add("bg-white");
function cambiar(tx, id) {
  // alert("hola");
  if (document.getElementById(tx).value === "" || document.getElementById(tx).value === null) {
    document.getElementById(id).classList.remove("bg-danger");
    document.getElementById(id).classList.add("bg-white");
  } else {
    document.getElementById(id).classList.remove("bg-white");
    document.getElementById(id).classList.add("bg-danger");
  }
}

// document.getElementById("boton").onclick = function() {
document.getElementById("nomm").onchange = function() {
  cambiar("nomm", "paso1");
};

document.getElementById("cor").onchange = function() {
  cambiar("cor", "paso2");
};

function cambiar2() {
  if (tres1 === true & tres2 === true & tres3 === true) {
    document.getElementById("paso3").classList.remove("bg-white");
    document.getElementById("paso3").classList.add("bg-danger");
  }
}

// document.getElementById("cone").onclick
document.getElementsByName("casa").onclick = function() {
  // alert("hola");
  // document.getElementsByName("animal").onblur
  // console.log(document.getElementsByName("animal").value);
  const radios = document.getElementsByName("animal");
  for (const radio of radios) {
    if (radio.checked) {
      console.log(radio.value);
    }
  }
};

document.getElementById("btnRegistrar").onclick = function() {
  const nombre = document.getElementById("nomm").value;
  const corre = document.getElementById("cor").value;

  const radio1 = document.getElementsByName("animal");
  const radio2 = document.getElementsByName("color");
  const radio3 = document.getElementsByName("accion");

  const contra1 = Array.from(radio1).find(radio => radio.checked);
  const contra2 = Array.from(radio2).find(radio => radio.checked);
  const contra3 = Array.from(radio3).find(radio => radio.checked);

  // console.log(contra1);
  if (contra1 === undefined || contra2 === undefined || contra3 === undefined) {
    Swal.fire({
      icon: "warning",
      // title: "Oops...",
      text: "Complete la contraseña"
    });
  } if (nombre === "") {
    Swal.fire({
      icon: "warning",
      // title: "Oops...",
      text: "Ingrese un nombre"
    });
  } if (corre === "") {
    Swal.fire({
      icon: "warning",
      // title: "Oops...",
      text: "Ingrese un correo electronico"
    });
  } else {
    const pass = contra1.value + contra2.value + contra3.value;
    const usuario = {
      usuario: nombre,
      correo: corre,
      password: pass,
      wins: 0,
      recuperar: ""
    };
    buscarXusuario(usuario);
  }
  //
  // console.log(contra1 + contra2 + contra3);
  /* const pass = "Los pollitos";
  const usuario = {
    usuario: nombre,
    correo: corre,
    password: pass
  }; */

  //
};

async function buscarXusuario(user) {
  const res = await fetch(import.meta.env.VITE_API_URL + "/usuario?usuario=" + user.usuario);
  const res2 = await fetch(import.meta.env.VITE_API_URL + "/usuario/Ucor?correo=" + user.correo);
  const data = await res.json();
  const data2 = await res2.json();
  // console.log(data);
  // console.log(data2);
  if (data.body.length === 0 && data2.body === null) {
    registrar(user);
  }
  if (data.body.length !== 0) {
    Swal.fire({
      icon: "warning",
      title: "Oops...",
      text: "El jugador " + user.usuario + " ya se encuentra registrado"
    });
  }
  if (data2.body !== null) {
    Swal.fire({
      icon: "warning",
      title: "Oops...",
      text: "El Correo " + user.correo + " ya se encuentra registrado"
    });
  }
}

async function registrar(user) {
  const res = await fetch(import.meta.env.VITE_API_URL + "/usuario", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)

  });
  //  console.log(res);
  // const data = await res.json();
  if (res.status === 201) {
    Swal.fire({
      icon: "success",
      title: "Registrado",
      text: "Nuevo jugador registrado correctamente"
    });
    // href="./informacion.html"
    const url = "../index.html";
    window.location.href = url;
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Error al registrar"
    });
  }
}

window.onload = lanzasaltar;
