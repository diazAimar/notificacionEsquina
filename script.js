"use strict";


const agregarCarrito = document.getElementById("agregar--carrito");
const divToast = document.getElementById("toastContainer");

let countCarrito = 0;
agregarCarrito.addEventListener("click", function() {
    const toastNotif = document.createElement("div");
    if(countCarrito < 2){
        let toastNotification = crearNotificacion(toastNotif, "added");

        divToast.appendChild(toastNotif);
        countCarrito++;
    }
    else {
        let toastNotification = crearNotificacion(toastNotif, "error");
        divToast.appendChild(toastNotif);
    }
    setTimeout(() => {
        toastNotif.remove();
    }, 2000);
});

function crearNotificacion(toastNotif, tipo){
    toastNotif.classList.add("toast", `toast--toast-${tipo}`, "toast--toast-visible");
    (tipo == "added") ? toastNotif.innerHTML = "Producto agregado al carrito" : toastNotif.innerHTML = "Error, capacidad maxima del carrito alcanzada"
    return toastNotif;
}