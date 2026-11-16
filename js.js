document.addEventListener("DOMContentLoaded", function () {

    // Mensaje de bienvenida en la consola
    console.log("¡Bienvenido a Piñatas al Estilo Mexicano!");

    // Actualizar automáticamente el año del sitio
    const pie = document.querySelector("footer p");

    if (pie) {
        pie.textContent =
            "© " + new Date().getFullYear() +
            " Piñatas al Estilo Mexicano";
    }

    // Efecto de aparición de las tarjetas
    const productos = document.querySelectorAll(".producto");

    productos.forEach(function(producto, indice) {
        producto.style.opacity = "0";
        producto.style.transition = "opacity 0.8s ease";

        setTimeout(function() {
            producto.style.opacity = "1";
        }, 200 * (indice + 1));
    });

});