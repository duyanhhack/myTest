$('#slideShow').owlCarousel({
    center: true,
    items: 5,
    loop:true,
    margin:40,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        300: {
            item: 1
        },
        340: {
            item: 1
        },
        576:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            item:4
        }
    }
});