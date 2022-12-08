import Swal from "sweetalert2";
export function Puntajee(nJuego, time, punt, estre) {
  // alert("Hola");
  const puntaje = {
    jugador: localStorage.getItem("user"),
    juego: nJuego,
    tiempo: time,
    puntaje: punt,
    estrellas: estre
    // Puntaje(user, nJuego, time, punt, estre)

  };
 // regisPuntaje(puntaje);
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
