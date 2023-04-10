function init() {

    let swipers = [];
    gsap.utils.toArray('.swiper').forEach((sw, i) => {
        let config = {
            speed: 600,
            loop: false
        }
        if (sw.querySelector('.swiper-button-next')) {
            config.navigation = {
                nextEl: sw.querySelector('.swiper-button-next'),
                prevEl: sw.querySelector('.swiper-button-prev')
            }

            config.speed = 500;
        } 
        const swiper = new Swiper(sw, config);
        swipers[i] = swiper
    })
    const _swiper = document.querySelector('.section-slide .swiper')

    gsap.utils.toArray('.section-cover img').forEach(image => {

        if (image.complete) {
            gsap.killTweensOf(image, 'opacity')
            gsap.to(image, { opacity: 1, duration: 0.6, ease: 'power1.inOut' });
        } else {
            image.onload = () => {
                gsap.killTweensOf(image, 'opacity')
                gsap.to(image, { opacity: 1, duration: 0.6, ease: 'power1.inOut' });
            };
        }
    })

    gsap.utils.toArray('.slide-image', _swiper).forEach((slide, i) => {


        slide.addEventListener('click', () => {
            swipers[1].slideTo(i, 0);
            gsap.delayedCall(0.05, () => {
                openLayer(document.querySelector('.layer-gallery'))
            })
        })
    })

    gsap.utils.toArray('.button-close-layer').forEach(button => {
        const type = button.getAttribute('data-type');
        button.addEventListener('click', () => {
            closeLayer(document.querySelector(`.layer-${type}`))
        })
    })

    gsap.utils.toArray('.button-account').forEach(button => {
        button.addEventListener('click', () => {
            const type = button.getAttribute('data-type');
            openLayer(document.querySelector(`.layer-account-${type}`))
        })
    })

    gsap.utils.toArray('.slide-image').forEach((s, i) => {

        ScrollTrigger.create({
            trigger: s.querySelector('img'),
            start: () => 'top+=4% bottom',
            once: true,
            onEnter: () => {
                gsap.to(s.querySelector('img'), {
                    autoAlpha: 1,
                    duration: 0.6,
                    ease: 'power1.inOut',
                    delay: (i % 2) / 10,
                })
            }
        })
    })

    var clipboard = new ClipboardJS('.button-copy');

    clipboard.on('success', function(e) {
        console.info('Action:', e.action);
        console.info('Text:', e.text);
        console.info('Trigger:', e.trigger);
    
        const callback = () => {
            gsap.delayedCall(3, () => {
                closeLayer(document.querySelector('.layer-toast'))
            })
        }
        openLayer(document.querySelector('.layer-toast'), callback)
        e.clearSelection();
    });
    
    clipboard.on('error', function(e) {
        console.error('Action:', e.action);
        console.error('Trigger:', e.trigger);
    });

    gsap.utils.toArray('.t').forEach(t => {
        ScrollTrigger.create({
            trigger: t,
            start: () => `top-=2% bottom`,
            once: true,
            // markers: true,
            onEnter: () => {
                gsap.to(t, { y: 0, duration: 0.6, ease: 'power2.out' })
                gsap.to(t, { opacity: 1, duration: 0.6, ease: 'power1.inOut' })
            }
        })
    })

    gsap.utils.toArray('.l').forEach((t, i) => {
        ScrollTrigger.create({
            trigger: t,
            start: () => `top-=2% bottom`,
            once: true,
            // markers: true,
            onEnter: () => {
                gsap.to(t, { y: 0, delay: i * 0.05, duration: 0.6, ease: 'power2.out' })
                gsap.to(t, { opacity: 1,  delay: i * 0.05,duration: 0.6, ease: 'power1.inOut' })
            }
        })
    })

    // gsap.utils.toArray('.button-copy').forEach(btn => {
    //     new ClipboardJS(btn);  
    //     btn.addEventListener('click', () => {

    //     })
    // })

    // var mapOptions = {
    //     center: new naver.maps.LatLng(37.3595704, 127.105399),
    //     zoom: 10
    // };
    
    // var map = new naver.maps.Map('map', mapOptions);
    // var marker = new naver.maps.Marker({
    //     position: new naver.maps.LatLng(35.17982543369992, 129.07499499992576),
    //     map: map
    // });
}

function openLayer(layer, callback) {

    document.body.classList.add('is-lock')
    gsap.set(layer, { display: 'block'})
    gsap.to(layer, { opacity: 1, pointerEvents: 'auto', duration: 0.3, ease: 'power1.inOut' })
    gsap.to(layer.querySelector('.layer-inner'), { opacity: 1, duration: 0.4, ease: 'power1.inOut', delay: 0.1, onComplete: () => {
        if (callback) callback()
    } })
}
function closeLayer(layer, callback) {
    console.log('a')
    gsap.set(layer, { pointerEvents: 'none' })
    gsap.to(layer, { opacity: 0, duration: 0.3, ease: 'power1.inOut', onComplete: () => {
        gsap.set(layer.querySelector('.layer-inner'), { opacity: 0 })
        gsap.set(layer, { display: 'none' })
        document.body.classList.remove('is-lock')
    } })
}


window.onload = () => {
    gsap.to(window, { scrollTo: { y: 0 }, duration: 0.1, onComplete: () => {
        init()
    } })
}