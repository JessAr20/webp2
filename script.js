$(document).ready(function(){
    $('.carousel-wrapper').slick({
        slidesToShow: 3, // Mostrar una imagen a la vez
        slidesToScroll: 1, // Desplazar una imagen a la vez
        arrows: true, // Mostrar flechas de navegación
        prevArrow: $('#prevBtn'), // Flecha personalizada para retroceder
        nextArrow: $('#nextBtn'), // Flecha personalizada para avanzar
        autoplay: true, // Habilitar auto-desplazamiento
        autoplaySpeed: 5000, // Tiempo entre desplazamientos (en milisegundos)
        infinite: true, // Carrusel infinito
        dots: true, // Mostrar puntos de navegación
        fade: false // No usar transición de desvanecimiento
    });
});
