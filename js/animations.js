const animateCSS = (element, animation, delay = '1s', prefix = 'animate__') =>
    // We create a Promise and return it
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        const node = document.querySelector(element);

        node.classList.add(`${prefix}animated`, animationName);
        node.style.setProperty('--animate-duration', delay);

        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd() {
            node.classList.remove(`${prefix}animated`, animationName);
            node.removeEventListener('animationend', handleAnimationEnd);

            resolve('Animation ended');
        }

        node.addEventListener('animationend', handleAnimationEnd);
    });

animateCSS(".hero__title", "slideInLeft");
animateCSS(".hero__subtitle", "slideInLeft", '1500ms');
animateCSS(".hero__text", "slideInLeft", '2s');
animateCSS(".hero__contact", "slideInUp", '2500ms');
animateCSS(".hero__buttons", "slideInUp", '3s');
animateCSS(".hero__image img", "slideInRight");