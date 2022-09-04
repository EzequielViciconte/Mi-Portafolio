import ScrollReveal from 'scrollreveal';

window.sr = ScrollReveal();

sr.reveal('header',{
    duration:3000,
    origin:'bottom',
    distance:'-100px'
})

sr.reveal('.ContenedorBienvenida',{
    duration:2000,
    origin:'bottom',
    distance:'-100px',
	reset:true
})

sr.reveal('.ContenedorTecnologias',{
    duration:800,
    origin:'left',
    distance:'400px',
	reset:true
});

sr.reveal('.ContenedorProyectos',{
    duration:1000,
	scale:1.2,
	reset:true
});

sr.reveal('.ContenedorContacto',{
    duration:1000,
    distance:'2px',
	opacity:0.2,
	reset:true
});

export default ScrollReveal;
