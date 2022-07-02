/* [].forEach.call(document.getElementsByTagName("img"), function(con) {
  con.addEvenlistener("click", function() {
    this.innerHTML = "click";
    this.style.background = "#4BD19B";
    this.style.height = 50;
    this.style.width = 100;
  });
}); */
function iniciar() {
  const inis = document.getElementById("tl");
  inis.addEventListener("click", estilo);
}

function estilo() {
  const forma = document.getElementById("tl");

  forma.style.height = 500;
  forma.style.width = 500;
  alert("hola");
}

window.onload = iniciar;
