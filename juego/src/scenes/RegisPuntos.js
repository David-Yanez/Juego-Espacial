import Swal from "sweetalert2";
export function Puntajee(nJuego, time, punt, estre, inten, acier) {
  // alert("Hola");
  const puntaje = {
    jugador: localStorage.getItem("user"),
    juego: nJuego,
    tiempo: time,
    puntaje: punt,
    estrellas: estre,
    intentos: inten,
    aciertos: acier
    // Puntaje(user, nJuego, time, punt, estre)

  };
  regisPuntaje(puntaje);
  console.log(puntaje);
}

async function regisPuntaje(puntos) {
  const res = await fetch(import.meta.env.VITE_API_URL + "/puntaje/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(puntos)
  });
  if (res.status !== 201) {
    alert("error al registrar puntajes" + res.status);
  }
}

export let es11 = 0.2;
export let pa11 = 0.2;
export let ci11 = 0.2;
export let a11 = 0.2;
export let l11 = 0.2;

export function letras(letra, valor) {
  if (letra === "es") {
    es11 = valor;
  } if (letra === "pa") {
    pa11 = valor;
  } if (letra === "ci") {
    ci11 = valor;
  } if (letra === "a") {
    a11 = valor;
  } if (letra === "l") {
    l11 = valor;
  }
}

export function reset() {
  es11 = 0.2;
  pa11 = 0.2;
  ci11 = 0.2;
  a11 = 0.2;
  l11 = 0.2;
}
/* es1 = es11;
pa1 = pa11;
ci1 = ci11;
a1 = a11;
l1 = l11; */
