var Nombre_completo = document.getElementById("Nombre_completo");
var Telefono = document.getElementById("Telefono");
var Direccion = document.getElementById("Direccion");
var Correo = document.getElementById("Correo");
var Contraseña = document.getElementById("Contraseña");
var Fecha_de_nacimiento = document.getElementById("Fecha_de_nacimiento");
var Documento = document.getElementById("Documento");
var Profesion = document.getElementById("Profesion");

function ValidarDatos() {
    if (Nombre_completo == '' || Telefono == '' || Correo == '') {
        console.log("Los campos están vacios")
    }
    else {
        if (Nombre_completo != /[a-zA-Z]/) {
            console.log("Los datos son incorrectos")
        }
        if (Telefono.length() > 10) {
            console.log("Los datos son incorrectos")
        }
        if (Correo != /[@]/) {
            console.log("Los datos son incorrectos")
        }
        if (Contraseña.length() > 8) {
            console.log("los datos son incorrectos")
        }
        if (Documento == /[a-zA-Z]/) {
            console.log("los datos son incorrectos")
        }


    }
}