document.addEventListener("DOMContentLoaded", function() {
    const imagenes = ["../imagenesCarrusel/sistemaSolar.png", "../imagenesCarrusel/sistemaSolar2.png", "../imagenesCarrusel/SistemaSolar3.png"];
    let i = 0;
    const botonAnterior = document.getElementsByClassName("botonAn")[0];
    const botonSiguiente = document.getElementsByClassName("botonSig")[0];
    const imagenMostrada = document.getElementById("imagenMostrada");

function mostrar() {
    imagenMostrada.src = imagenes[i];
}

function antImagen() {
    i = (i - 1 + imagenes.length) % imagenes.length;
    mostrar();
}
botonSiguiente.addEventListener("click", () =>{
    i = (i + 1) % imagenes.length;
    mostrar();

});
botonAnterior.addEventListener("click", () =>{
    i = (i - 1 + imagenes.length) % imagenes.length;
    mostrar();

});
mostrar();

});