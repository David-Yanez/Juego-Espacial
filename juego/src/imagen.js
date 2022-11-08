// Animales
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

  alert(nombre + corre);

  const contra1 = Array.from(radio1).find(radio => radio.checked);
  const contra2 = Array.from(radio2).find(radio => radio.checked);
  const contra3 = Array.from(radio3).find(radio => radio.checked);

  console.log(nombre);
  console.log(corre);
  const pass = contra1.value + contra2.value + contra3.value;
  // console.log(contra1 + contra2 + contra3);
  alert(pass);

  const usuario = {
    usuario: nombre,
    correo: corre,
    password: pass
  };

  registrar(usuario);
};

async function registrar(user) {
  const res = await fetch("http://localhost:9000/usuario", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)

  });
  console.log(res);
  /* const data = await res.json();
  if (res.status !== 200){
    spanError.innerHTML = "Hubo un error:"+ res.status + data.message;
  } */
}

window.onload = lanzasaltar;
