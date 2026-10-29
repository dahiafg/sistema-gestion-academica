let botonUsuarios = document.getElementById("botonUsuarios");
let botonNotas = document.getElementById("botonNotas");
let botonAsistencia = document.getElementById("botonAsistencia");
let cerrarSesion = document.getElementById("cerrarSesion");

botonUsuarios.addEventListener("click", function () {

    window.location.href = "usuarios.html";

});

botonNotas.addEventListener("click", function () {

    alert("Módulo de notas.");

});

botonAsistencia.addEventListener("click", function () {

    alert("Módulo de asistencia.");

});

cerrarSesion.addEventListener("click", function () {

    window.location.href = "inicio-sesion.html";

});