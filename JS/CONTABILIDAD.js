var Ventas = document.getElementById("Ventas");
var Ingresos = document.getElementById("Ingresos");
var Egresos = document.getElementById("Egresos");
var Fecha = document.getElementById("Fecha");
var Concepto = document.getElementById("Concepto");
var Valor = document.getElementById("Valor");

function ValidarDatos(Ventas) {
    if (Ventas == '' && Fecha == '' && Ingresos == '' && Egresos == '' && Valor == '') {
        console.log("Los campos estan vacios")

    }
    else {
        if (Fecha == /[a-zA-Z]/) {
            console.log("Los datos son incorrectos")
        }
        if (Ingresos == /[a-zA-Z]/) {
            console.log("Los datos son incorrectos")
        }
        if (Egresos == /[a-zA-Z]/) {
            console.log("Los datos son incorrectos")
        }
        if (Valor == /[a-zA-Z]/) {
            console.log("Los datos son incorrectos")
        }
    }
}  