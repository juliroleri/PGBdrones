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


document.getElementById('menuToggle').addEventListener('click', function () {
    document.getElementById('menu').classList.toggle('active');
  });
  
