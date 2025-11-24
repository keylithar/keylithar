/* ==========================================================
   SISTEMA FÁCIL DE BLACK FRIDAY
   Solo tienes que cambiar la variable MODO_OFERTAS
   true  = ACTIVAR Black Friday (todos los precios a 26 €)
   false = Precios normales
   ========================================================== */
const MODO_OFERTAS = true; // ← CAMBIA AQUÍ A true o false
const PRECIO_BLACKFRIDAY = "26 €";

// Asegurarse que el DOM está cargado
document.addEventListener("DOMContentLoaded", () => {
    // Cambiar precios en la tienda
    document.querySelectorAll('.item p').forEach(p => {
        if (MODO_OFERTAS) {
            p.innerHTML = `<span class="old">${p.textContent}</span> → <span class="new">${PRECIO_BLACKFRIDAY}</span>`;
        } else if (p.querySelector('.old')) {
            // Restaurar precio original
            p.textContent = p.querySelector('.old').textContent;
        }
    });
});
/* 🖤 Black Friday – Cómo Activar / Desactivar

Abre el archivo:
js/blackfriday.js

Busca esta línea:

const MODO_OFERTAS = true; // 


Cambia el valor según necesites:

true → Activar Black Friday (todos los precios a 26 €)

false → Precios normales


Guarda el archivo y recarga la página. ✅ */


