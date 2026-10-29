let formularioUsuario =
    document.getElementById("formularioUsuario");

let nombre =
    document.getElementById("nombre");

let rol =
    document.getElementById("rol");

let listaUsuarios =
    document.getElementById("listaUsuarios");

let mensajeUsuario =
    document.getElementById("mensajeUsuario");

let volverMenu =
    document.getElementById("volverMenu");


let usuarios =
    JSON.parse(localStorage.getItem("usuarios")) || [];


function guardarUsuarios() {

    localStorage.setItem(
        "usuarios",
        JSON.stringify(usuarios)
    );
}


function mostrarUsuarios() {

    listaUsuarios.innerHTML = "";

    if (usuarios.length === 0) {

        listaUsuarios.innerHTML =
            "<p>No hay usuarios registrados.</p>";

        return;
    }


    for (let i = 0; i < usuarios.length; i++) {

        let usuario = document.createElement("div");

        usuario.className = "usuario";


        let nombreUsuario =
            document.createElement("p");

        nombreUsuario.innerHTML =
            "<strong>Nombre:</strong> " +
            usuarios[i].nombre;


        let rolUsuario =
            document.createElement("p");

        rolUsuario.innerHTML =
            "<strong>Rol:</strong> " +
            usuarios[i].rol;


        let botonEditar =
            document.createElement("button");

        botonEditar.textContent = "Editar";


        botonEditar.addEventListener(
            "click",
            function () {

                editarUsuario(i);

            }
        );


        let botonEliminar =
            document.createElement("button");

        botonEliminar.textContent = "Eliminar";


        botonEliminar.addEventListener(
            "click",
            function () {

                eliminarUsuario(i);

            }
        );


        usuario.appendChild(nombreUsuario);

        usuario.appendChild(rolUsuario);

        usuario.appendChild(botonEditar);

        usuario.appendChild(botonEliminar);


        listaUsuarios.appendChild(usuario);
    }
}


function agregarUsuario(evento) {

    evento.preventDefault();


    let nuevoUsuario = {

        nombre: nombre.value,

        rol: rol.value

    };


    usuarios.push(nuevoUsuario);


    guardarUsuarios();


    mostrarUsuarios();


    formularioUsuario.reset();


    mensajeUsuario.textContent =
        "Usuario agregado correctamente.";
}


function editarUsuario(indice) {

    let nuevoNombre =
        prompt(
            "Escribe el nuevo nombre:",
            usuarios[indice].nombre
        );


    if (
        nuevoNombre === null ||
        nuevoNombre.trim() === ""
    ) {

        return;
    }


    let nuevoRol =
        prompt(
            "Escribe el nuevo rol:",
            usuarios[indice].rol
        );


    if (
        nuevoRol === null ||
        nuevoRol.trim() === ""
    ) {

        return;
    }


    usuarios[indice].nombre =
        nuevoNombre;

    usuarios[indice].rol =
        nuevoRol;


    guardarUsuarios();


    mostrarUsuarios();


    mensajeUsuario.textContent =
        "Usuario actualizado correctamente.";
}


function eliminarUsuario(indice) {

    let confirmar =
        confirm(
            "¿Quieres eliminar este usuario?"
        );


    if (confirmar) {

        usuarios.splice(indice, 1);


        guardarUsuarios();


        mostrarUsuarios();


        mensajeUsuario.textContent =
            "Usuario eliminado correctamente.";
    }
}


formularioUsuario.addEventListener(
    "submit",
    agregarUsuario
);


volverMenu.addEventListener(
    "click",
    function () {

        window.location.href = "menu.html";

    }
);


mostrarUsuarios(); 
