window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    }
    else {
        nav.classList.remove('scrolled');
    }
});





// Initialize Swiper


document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        },
        mousewheel: {
            enabled: true,
            forceToAxis: true,
            sensitivity: 1,
        },
    });

    // Two-finger touchpad swipe with debounce
    let isScrolling = false;
    const swiperEl = document.querySelector('.mySwiper');
    
    swiperEl.addEventListener('wheel', (e) => {
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
            e.preventDefault();
            
            if (isScrolling) return;
            
            if (Math.abs(e.deltaX) > 30) {
                isScrolling = true;
                
                if (e.deltaX > 0) {
                    swiper.slideNext();
                } else {
                    swiper.slidePrev();
                }
                
                setTimeout(() => {
                    isScrolling = false;
                }, 600);
            }
        }
    }, { passive: false });
});