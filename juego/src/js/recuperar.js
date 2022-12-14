// alert("holaa");

import Swal from "sweetalert2";

const { value: email } = await Swal.fire({
  title: "¿Olvido su contraseña?",
  input: "email",
  inputLabel: "Ingrese su correo electrónico",
  inputPlaceholder: "correo electrónico"
});

if (email) {
  Swal.fire(`Correo ingresado: ${email}`);

}
