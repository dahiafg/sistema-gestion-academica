let usuarioCorrecto = "admin";
let contrasenaCorrecta = "1234";

let intentos = 0;
let maxIntentos = 3;

let formularioLogin = document.getElementById("formularioLogin");
let usuario = document.getElementById("usuario");
let contrasena = document.getElementById("contrasena");
let mensaje = document.getElementById("mensaje");

function iniciarSesion(evento) {

    evento.preventDefault();

    let nombre = usuario.value;
    let clave = contrasena.value;

    console.log("Usuario:", nombre);
    console.log("Contraseña:", clave);

    if (nombre === usuarioCorrecto && clave === contrasenaCorrecta) {

        mensaje.textContent = "Inicio de sesión correcto.";

        window.location.href = "menu.html";

    } else {

        intentos = intentos + 1;

        if (intentos < maxIntentos) {

            mensaje.textContent =
                "Datos incorrectos. Intento " +
                intentos +
                " de " +
                maxIntentos + ".";

        } else {

            mensaje.textContent =
                "Usuario bloqueado por superar tres intentos.";

            usuario.disabled = true;
            contrasena.disabled = true;
        }
    }
}

formularioLogin.addEventListener(
    "submit",
    iniciarSesion
);