

// Menu Móvil
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('toggle');
    });
});

//TOOLTIP
// Variable global para la señal
const headerCue = document.getElementById('header-cue');

// Función que maneja el desplazamiento
function handleScrollCue() {
    // Si el scroll vertical es mayor a 50 píxeles
    if (window.scrollY > 50) {
        if (headerCue && !headerCue.classList.contains('hidden')) {
            // Oculta la burbuja añadiendo la clase 'hidden'
            headerCue.classList.add('hidden');
        }
    } else if (window.scrollY <= 50){
        headerCue.classList.remove('hidden');
    }
}

// Inicializa el listener
window.addEventListener('scroll', handleScrollCue);

// Scroll Reveal
const revealElements = document.querySelectorAll('.reveal');
const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
};
const revealObserver = new IntersectionObserver(revealCallback, { threshold: 0.1 });
revealElements.forEach(el => revealObserver.observe(el));



// typed de inicio
 var typed = new Typed("#typed-text", {
    strings: [
        "El detallado automotriz premium que va hasta tu domicilio en Toluca. Sin costo extra, porque tu tiempo es valioso.",
    ],
    typeSpeed: 30, // Velocidad de escritura
    startDelay: 1000, // Retraso antes de empezar a escribir
    showCursor: true, // Mostrar el cursor parpadeante
    cursorChar: "|", // Carácter del cursor
    loop: false, // No repetir la animación
});

// sweetalert
// Selecciona todos los enlaces que contengan 'wa.me' en su href
const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');

whatsappLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Evita que el enlace abra la página inmediatamente
        const targetUrl = this.href;

        Swal.fire({
            title: '¿Contactar al negocio?',
            text: "Saldrás de la página para abrir WhatsApp y agendar tu cita con Car Detailent.",
            icon: 'info',
            iconColor: '#FFC107', // Ícono color ámbar
            showCancelButton: true,
            confirmButtonText: 'SÍ, CONTACTAR',
            cancelButtonText: 'CANCELAR',
            reverseButtons: true, // Pone el botón de acción a la derecha
            focusConfirm: false,
            backdrop: `rgba(0,0,0,0.8)` // Fondo oscuro detrás de la alerta
        }).then((result) => {
            if (result.isConfirmed) {
                // Si el usuario acepta, abre el enlace en una nueva pestaña
                window.open(targetUrl, '_blank');
            }
        });
    });
});

// 1. Selecciona TODAS las tarjetas contenedoras.
const contenedores = document.querySelectorAll('#gallery_container'); 

contenedores.forEach(tarjeta => {
    
    // 2. Busca el elemento de texto específico DENTRO de la tarjeta actual
    const textoEspecifico = tarjeta.querySelector('#gallery-caption');

    // --- AL ENTRAR (MUESTRA) ---
    tarjeta.addEventListener('mouseenter', () => {
        // Añade la clase que muestra el texto (ej. quita 'hidden')
        textoEspecifico.classList.remove("hidden"); 
    });

    // --- AL SALIR (OCULTA) ---
    tarjeta.addEventListener('mouseleave', () => {
        // Añade la clase que oculta el texto
        textoEspecifico.classList.add("hidden"); 
    });
});
