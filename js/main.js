gsap.from('.judul-hero', {duration:1.5, y:100, opacity:0});
let tl = gsap.timeline(
  {
    scrollTrigger:{
    }
  }
);

tl.from('.wrap-arrum',{delay:.5, duration:1, y:100, opacity:0});
tl.from('.jdl-buka',{delay:.6, duration:1, opacity:0});


// album Product Slider-start
var TrandingSlider = new Swiper('.album-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
// album Product Slider-end


    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://nikahan-1.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
