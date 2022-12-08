import Swal from "sweetalert2";
export async function irJuego() {
  const auth = localStorage.getItem("token");
  console.log(auth);
  const res = await fetch("http://localhost:9000/juego", {
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
    location.href = "./iniciar.html";
  } else {
    location.href = "./Juego.html";
  }
}
