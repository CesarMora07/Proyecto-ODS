//    ocultar el loader cuando la pagina termine de cargar
//  ocultar el loader después de 1 segundo
let loader = document.getElementById("loader");

setTimeout(function() {
    loader.classList.add("oculto");
}, 1550);


//boton 1 Mapa Limpio)
let boton1 = document.getElementById("boton1");
let caja1 = document.getElementById("caja1");

boton1.addEventListener("click", function() {
    caja1.classList.toggle("activo");

    if (boton1.textContent == "Ver detalles") {
        boton1.textContent = "Ocultar detalles";
    } else {
        boton1.textContent = "Ver detalles";
    }
});


//boton 2 (plataforma de Reciclaje)
let boton2 = document.getElementById("boton2");
let caja2 = document.getElementById("caja2");

boton2.addEventListener("click", function() {
    caja2.classList.toggle("activo");

    if (boton2.textContent == "Ver detalles") {
        boton2.textContent = "Ocultar detalles";
    } else {
        boton2.textContent = "Ver detalles";
    }
});


// boton 3 (red de paneles Solares)
let boton3 = document.getElementById("boton3");
let caja3 = document.getElementById("caja3");

boton3.addEventListener("click", function() {
    caja3.classList.toggle("activo");

    if (boton3.textContent == "Ver detalles") {
        boton3.textContent = "Ocultar detalles";
    } else {
        boton3.textContent = "Ver detalles";
    }
});