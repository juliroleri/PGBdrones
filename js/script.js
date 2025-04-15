const animacion = document.querySelector('.animacion');

window.addEventListener('scroll', () => {
    const rect = animacion.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        animacion.classList.add('visible');
    }
});

const contenido=document.querySelector(".card")
window.addEventListener('scroll', () => {
    const anim = contenido.getBoundingClientRect();
    if (anim.top <= window.innerHeight && rect.bottom >= 0) {
        contenido.classList.add('visible');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.service-item');

    function checkVisibility() {
        const windowHeight = window.innerHeight;
        
        items.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top <= windowHeight * 0.80) {
                item.classList.add('visible');
            } else {
                item.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});


const galeria = document.getElementById('galeria');
const btnIzquierda = document.getElementById('btnIzquierda');
const btnDerecha = document.getElementById('btnDerecha');
const scrollAmount = 450;

function scrollGaleria(direccion) {
  galeria.scrollBy({
    left: direccion * scrollAmount,
    behavior: 'smooth'
  });

  setTimeout(actualizarFlechas, 400);
}

function actualizarFlechas() {
  const scrollLeft = galeria.scrollLeft;
  const scrollWidth = galeria.scrollWidth;
  const clientWidth = galeria.clientWidth;

  btnIzquierda.classList.toggle('oculto', scrollLeft <= 0);
  btnDerecha.classList.toggle('oculto', scrollLeft + clientWidth >= scrollWidth - 5);
}

btnIzquierda.addEventListener('click', () => scrollGaleria(-1));
btnDerecha.addEventListener('click', () => scrollGaleria(1));


window.addEventListener('load', actualizarFlechas);
window.addEventListener('resize', actualizarFlechas);
galeria.addEventListener('scroll', actualizarFlechas);


const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");

// Cuando el ícono de hamburguesa sea clickeado, toggle la clase 'active' para mostrar/ocultar el menú
menuIcon.addEventListener("click", () => {
    menu.classList.toggle("active");
});
