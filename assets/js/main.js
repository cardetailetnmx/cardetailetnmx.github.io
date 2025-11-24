
  AOS.init();
  
  
  var typed = new Typed("#typed-text", {
    strings: [
        "Olvídate de las esperas. Tu auto impecable, donde estés.",
    ],
    typeSpeed: 30, // Velocidad de escritura
    startDelay: 1000, // Retraso antes de empezar a escribir
    showCursor: true, // Mostrar el cursor parpadeante
    cursorChar: "|", // Carácter del cursor
    loop: false, // No repetir la animación
});

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const header = document.querySelector('.header');

    menuToggle.addEventListener('click', function () {
        // Alterna la clase 'menu-open' en el header
        header.classList.toggle('menu-open');

        // Maneja la accesibilidad: actualiza el estado del botón
        const isExpanded = this.getAttribute('aria-expanded') === 'true' || false;
        this.setAttribute('aria-expanded', !isExpanded);
    });

    // Opcional: Cierra el menú cuando se hace clic en un enlace
    const menuLinks = document.querySelectorAll('.main-menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (header.classList.contains('menu-open')) {
                header.classList.remove('menu-open');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });
});



// Configuración del Carrusel (Swiper)
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, // Cuántos se ven en celular
    spaceBetween: 20, // Espacio entre fotos
    loop: true, // Infinito (vuelve al inicio)
    grabCursor: true, // Manita al pasar el mouse
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // Responsive: cambia según el tamaño de pantalla
    breakpoints: {
        300: {
            slidesPerView: 1, // Tablet: se ven 2
        },
        640: {
            slidesPerView: 2, // Tablet: se ven 2
        },
        1024: {
            slidesPerView: 3, // PC: se ven 3
        },
    },
});

// Configuración del Zoom (GLightbox)
const lightbox = GLightbox({
    touchNavigation: true,
    loop: true,
    autoplayVideos: true,
});


function precios() {

    // Prevenimos que el enlace vaya a la parte superior de la página

    // ----------------------------------------------------
    // 🛠️ CONTENIDO HTML DE LA TABLA DE PRECIOS 🛠️
    // ----------------------------------------------------
    const contenidoHTML = `
                    

                    <h4 style="margin-top: -10px; color: #333;">Precios por Tipo de Vehículo</h4>

                    <span class="resaltado-servicio">INTERIOR / EXTERIOR</span>
                    <table class="tabla-precios">
                        <thead>
                            <tr>
                                <th>Vehículo</th>
                                <th style="text-align: right;">Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>SEDAN Y HATCHBACK</td>
                                <td style="text-align: right;"><span class="precio-dorado">$1,100</span></td>
                            </tr>
                            <tr>
                                <td>SUV Y MEDIANA</td>
                                <td style="text-align: right;"><span class="precio-dorado">$1,200</span></td>
                            </tr>
                            <tr>
                                <td>CAMIONETA XL</td>
                                <td style="text-align: right;"><span class="precio-dorado">$1,350</span></td>
                            </tr>
                            <tr>
                                <td>CAMIONETA XXL</td>
                                <td style="text-align: right;"><span class="precio-dorado">$1,400</span></td>
                            </tr>
                        </tbody>
                    </table>

                    <span class="resaltado-servicio" style="margin-top: 25px;">PULIDO A 2 PASOS</span>
                    <table class="tabla-precios">
                        <thead>
                            <tr>
                                <th>Vehículo</th>
                                <th style="text-align: right;">Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>SEDAN Y HATCHBACK</td>
                                <td style="text-align: right;"><span class="precio-dorado">$1,500</span></td>
                            </tr>
                            <tr>
                                <td>SUV Y MEDIANA</td>
                                <td style="text-align: right;"><span class="precio-dorado">$1,600</span></td>
                            </tr>
                            <tr>
                                <td>CAMIONETA XL</td>
                                <td style="text-align: right;"><span class="precio-dorado">$1,750</span></td>
                            </tr>
                            <tr>
                                <td>CAMIONETA XXL</td>
                                <td style="text-align: right;"><span class="precio-dorado">$1,900</span></td>
                            </tr>
                        </tbody>
                    </table>
                `;
    // ----------------------------------------------------

    // Disparamos la alerta de SweetAlert2
    Swal.fire({
        title: 'LISTA DE PRECIOS DETALLADA',
        html: contenidoHTML,
        icon: '', // Puedes usar 'success', 'warning', 'error', 'info', 'question'
        showCloseButton: true,
        confirmButtonText: 'Cerrar',
        confirmButtonColor: '#C5A059', // Botón de confirmación dorado
        customClass: {
            popup: 'swal2-popup-custom',
            title: 'swal2-title-custom'
        }
    });
}
