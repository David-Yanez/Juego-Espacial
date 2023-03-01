import Swal from "sweetalert2";
// let data;
// alert("hola");
export async function rakingPuntajes() {
  irPuntajes();
  const res = await fetch(import.meta.env.VITE_API_URL + "/usuario/");
  const data = await res.json();
  // console.log(data);
  const tabla = document.getElementById("tabla1");
  const j = data.body;
  // console.log(data.body);
  j.sort(function(a, b) {
    const x = a.wins;
    const y = b.wins;
    return ((x > y) ? -1 : ((x < y) ? 1 : 0));
  });
  // console.log(j);

  let n = 4;
  const numero1 = document.getElementById("n1");
  const numero2 = document.getElementById("n2");
  const numero3 = document.getElementById("n3");

  numero1.innerHTML = data.body[0].usuario + "&nbsp; &nbsp; " + data.body[0].wins + " veces";
  numero2.innerHTML = data.body[1].usuario + "&nbsp; &nbsp; " + data.body[1].wins + " veces";
  numero3.innerHTML = data.body[2].usuario + "&nbsp; &nbsp; " + data.body[2].wins + " veces";

  for (let i = 3; i < data.body.length; i++) {
    const row = "<tr><td>" + n + "</td><td>" + data.body[i].usuario + "</td><td>" + data.body[i].wins + "</td></tr>";
    // console.log(row);
    tabla.innerHTML += row;
    n++;
  }
  // consultas();
}

async function consultas() {
  const nJugador = document.getElementById("nJugador").value;
  const nJuego = document.getElementById("nJuego").value;
  // console.log(nJugador);
  // console.log(nJuego);

  let n = 1;
  const res = await fetch(import.meta.env.VITE_API_URL + "/puntaje");
  const data = await res.json();
  // console.log(data);
  const tabla = document.getElementById("tabla2");

  const j = data.body;
  // console.log(data.body);
  j.sort(function(a, b) {
    const x = a.fecha;
    const y = b.fecha;
    return ((x > y) ? -1 : ((x < y) ? 1 : 0));
  });
  // console.log(j);

  for (let i = 0; i < data.body.length; i++) {
    if (data.body[i].jugador === nJugador && data.body[i].juego === nJuego) {
      const fe = new Date(data.body[i].fecha);
      const row = "<tr><td>" + n + "</td><td>" + data.body[i].jugador + "</td><td>" + data.body[i].juego + "</td><td>" + data.body[i].tiempo + "</td><td>" + data.body[i].puntaje + "</td><td>" + data.body[i].estrellas + "</td><td>" + data.body[i].intentos + "</td><td>" + data.body[i].aciertos + "</td><td>" + fe.toLocaleString() + "</td></tr>";
      tabla.innerHTML += row;
      n++;
    }
    if (data.body[i].jugador === nJugador && nJuego === "Selecciona un juego") {
      const fe = new Date(data.body[i].fecha);
      const row = "<tr><td>" + n + "</td><td>" + data.body[i].jugador + "</td><td>" + data.body[i].juego + "</td><td>" + data.body[i].tiempo + "</td><td>" + data.body[i].puntaje + "</td><td>" + data.body[i].estrellas + "</td><td>" + data.body[i].intentos + "</td><td>" + data.body[i].aciertos + "</td><td>" + fe.toLocaleString() + "</td></tr>";
      tabla.innerHTML += row;
      n++;
    }
    if (nJugador === "" && data.body[i].juego === nJuego) {
      const fe = new Date(data.body[i].fecha);
      const row = "<tr><td>" + n + "</td><td>" + data.body[i].jugador + "</td><td>" + data.body[i].juego + "</td><td>" + data.body[i].tiempo + "</td><td>" + data.body[i].puntaje + "</td><td>" + data.body[i].estrellas + "</td><td>" + data.body[i].intentos + "</td><td>" + data.body[i].aciertos + "</td><td>" + fe.toLocaleString() + "</td></tr>";
      tabla.innerHTML += row;
      n++;
    }
    if (nJugador === "" && nJuego === "Selecciona un juego") {
      const fe = new Date(data.body[i].fecha);
      const row = "<tr><td>" + n + "</td><td>" + data.body[i].jugador + "</td><td>" + data.body[i].juego + "</td><td>" + data.body[i].tiempo + "</td><td>" + data.body[i].puntaje + "</td><td>" + data.body[i].estrellas + "</td><td>" + data.body[i].intentos + "</td><td>" + data.body[i].aciertos + "</td><td>" + fe.toLocaleString() + "</td></tr>";
      tabla.innerHTML += row;
      n++;
    }
  }
  // console.log(data);
}

//

window.onload = rakingPuntajes;
document.getElementById("btnBuscar").onclick = function() {
  const tbody = document.getElementById("tabla2");
  tbody.remove();
  // const padre = tabla.parentNode;
  // const tbodyCrear = "<tbody id='tabla2'></tbody>";
  const tabla = document.getElementById("tabla22");
  const tbodyCrear = document.createElement("tbody");
  tbodyCrear.setAttribute("id", "tabla2");
  tabla.appendChild(tbodyCrear);

  // padre.removeChild(tabla);

  // tabla.deleteRow();
  // tabla.removeChild();
  // padre.detach(tabla);

  consultas();
};

async function irPuntajes() {
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
