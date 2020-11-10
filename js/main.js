//jQuery smooth scrolling

// $('.navbar a').on('click', function (e) {
//     if(this.hash != ''){
//     e.preventDefault();

//     const hash = this.hash;

//     $('html, body').animate({
//         scrollTop: $(hash).offset().top
//     }, 1000);  //1000ms speed
// }
// });

// option 2 smooth scroll from github

var scroll = new SmoothScroll('.header a[href*="#"]',{
    speed: 1000

});
