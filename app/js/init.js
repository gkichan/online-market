// Select Styler Init
$('input, select').styler();
$('#upload-file-styler').styler('destroy');

//Slick Slider Init
$('.hot-products-carousel').slick({
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
});