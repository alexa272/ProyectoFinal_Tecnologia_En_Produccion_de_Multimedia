function showPage(pageId) {
    // Ocultar todas las páginas
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Mostrar la página seleccionada
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    // Scroll hacia arriba
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Actualizar estado activo del menú
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.style.background = 'transparent';
        link.style.color = '#fff';
    });

    // Marcar el enlace activo
    event.target.style.background = '#fff';
    event.target.style.color = '#FF6B35';
}
function handleSubmit(event) {
    event.preventDefault();

    // Obtener datos del formulario
    const formData = new FormData(event.target);
    const datos = Object.fromEntries(formData.entries());

    // Validar campos requeridos
    if (!datos.nombre || !datos.email || !datos.servicio || !datos.mensaje) {
        alert('Por favor, completa todos los campos requeridos (*)');
        return;
    }

    // Simular envío exitoso
    alert(`¡Gracias ${datos.nombre}! Hemos recibido tu solicitud sobre ${datos.servicio}. Nos pondremos en contacto contigo pronto.`);

    // Limpiar formulario
    event.target.reset();

    // Mostrar mensaje de éxito
    const form = document.querySelector('.contact-form');
    const successMessage = document.createElement('div');
    successMessage.style.cssText = `
                background: linear-gradient(135deg, #4CAF50, #45a049);
                color: white;
                padding: 1rem;
                border-radius: 10px;
                margin-top: 1rem;
                text-align: center;
                font-weight: bold;
                animation: fadeIn 0.5s ease-in;
            `;
    successMessage.innerHTML = `
                <h3>✅ ¡Solicitud Enviada Exitosamente!</h3>
                <p>Te contactaremos en menos de 24 horas para discutir tu proyecto.</p>
            `;

    form.appendChild(successMessage);

    // Remover mensaje después de 5 segundos
    setTimeout(() => {
        successMessage.remove();
    }, 5000);
}
// Animaciones adicionales al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    // Efecto de aparición gradual para las tarjetas
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    // Observar todas las tarjetas de proyecto
    document.querySelectorAll('.project-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });

    // Efecto parallax sutil en el header
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const header = document.querySelector('header');
        header.style.transform = `translateY(${scrolled * 0.5}px)`;
    });
});
// Efecto de escritura para el título principal
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}
// Aplicar efecto de escritura al título de inicio
setTimeout(() => {
    const mainTitle = document.querySelector('#inicio .page-title');
    if (mainTitle) {
        typeWriter(mainTitle, 'Bienvenidos a Multimedia And Software Services', 80);
    }
}, 500);
