document.querySelector('#menu').addEventListener('click', () => {
	document.querySelector('.navegador-menu').classList.toggle('show');
});

ScrollReveal().reveal('.portada');
ScrollReveal().reveal('.nosotros', {delay:400});
ScrollReveal().reveal('.nuestros-valores', {delay:400});
ScrollReveal().reveal('.contenedor-servicios', {delay:400});
ScrollReveal().reveal('.contenedor-contacto', {delay:400});