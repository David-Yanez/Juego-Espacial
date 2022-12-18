
import Swal from "sweetalert2";
const vozAmari = new Audio("/assets/sounds/password/amarillo.mp3");
const vozAzul = new Audio("/assets/sounds/password/azul.mp3");
const vozComer = new Audio("/assets/sounds/password/comer.mp3");
const vozCone = new Audio("/assets/sounds/password/conejo.mp3");
const vozLeon = new Audio("/assets/sounds/password/leon.mp3");
const vozNadar = new Audio("/assets/sounds/password/nadar.mp3");
const vozPaja = new Audio("/assets/sounds/password/pajaro.mp3");
const vozPez = new Audio("/assets/sounds/password/pez.mp3");
const vozRojo = new Audio("/assets/sounds/password/rojo.mp3");
const vozSalt = new Audio("/assets/sounds/password/saltar.mp3");
const vozVer = new Audio("/assets/sounds/password/verde.mp3");
const vozVolar = new Audio("/assets/sounds/password/volar.mp3");
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
  vozPaja.play();
  tres1 = true;
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
  const radio1 = document.getElementsByName("animal");
  const radio2 = document.getElementsByName("color");
  const radio3 = document.getElementsByName("accion");

  const contra1 = Array.from(radio1).find(radio => radio.checked);
  const contra2 = Array.from(radio2).find(radio => radio.checked);
  const contra3 = Array.from(radio3).find(radio => radio.checked);

  if (contra1 === undefined || contra2 === undefined || contra3 === undefined) {
    Swal.fire({
      icon: "warning",
      // title: "Oops...",
      text: "Complete la contraseña"
    });
  } else {
    const pass = contra1.value + contra2.value + contra3.value;

    recuperar(pass);
  }
};

async function recuperar(password) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const token = urlParams.get("token");
  console.log(token);

  const enviar = {
    token,
    newPassword: password
  };
  console.log(enviar);
  const res = await fetch(import.meta.env.VITE_API_URL + "/login/cambiar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(enviar)

  });

  if (res.status === 200) {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Contraseña cambiada con exito",
      showConfirmButton: false,
      timer: 1500
    });
    // href="./informacion.html"
    const url = "../iniciar.html";
    window.location.href = url;
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Tiempo de recuperación excedido solo tiene 15 minutos, vuelva enviar el correo."
    });
  }
}

window.onload = lanzasaltar;
