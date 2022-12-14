document.getElementById("btnInvi").onclick = function() {
  const userInvi = {
    username: "Invitado",
    password: import.meta.env.VITE_INVI_PASSWORD
  };
  console.log(import.meta.env.VITE_INVI_PASSWORD);
  loginInvi(userInvi);
};

async function loginInvi(user) {
  const res = await fetch(import.meta.env.VITE_API_URL + "/login/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  });
  // const data = await res.json();
  if (res.status !== 200) {
    // spanError.innerHTML = "Hubo un error:" + res.status + data.message;
    alert("error");
    /* Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Datos Incorrectos"
    }); */
  } else {
    const data = await res.json();
    //console.log(data);
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", data.usuario.usuario);
    location.href = "./Juego.html";
    // irJuego();
  }
}


// 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