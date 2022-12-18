const isGitHubPages = true;
const path = require("path");
const folderName = path.basename(process.cwd()) + "/";
const mode = process.env.NODE_ENV === "production" ? "production" : "development";
const base = mode === "production" && isGitHubPages ? "/" + folderName : "/";

module.exports = {
  root: "src",
  base,
  mode,
  publicDir: "../public",
  build: {
    outDir: "../dist",
    assetsDir: "./",
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "/index.html"),
        juego: path.resolve(__dirname, "/Juego.html"),
        informacion: path.resolve(__dirname, "/html/index.html"),
        iniciar: path.resolve(__dirname, "/html/iniciar.html"),
        puntajes: path.resolve(__dirname, "/html/puntajes.html"),
        recuperar: path.resolve(__dirname, "/html/recuperar.html"),
        registrar: path.resolve(__dirname, "/html/registrar.html")
      }
    }
  }
};
