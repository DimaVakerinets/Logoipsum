function navToggle() {
    var navToggleNav = document.getElementById("nav");
    var html = document.getElementById("html");
    var body = document.getElementById("body");
    navToggleNav.classList.toggle("_active");
    html.classList.toggle("_overflow");
    body.classList.toggle("_overflow");
    
    
}
$('.owl-carousel').owlCarousel({
    items:2,
    lazyLoad:true,
    loop:true,
    margin:20
});


function toggleItem(id) {
    var item = document.getElementById(id);
    item.classList.toggle("_active");
    
    
}
