//js file exclusive for Scroll Reveal lib

const objScrollReveal = {
    origin: 'top',
    distance: '30px',
    duration: 700
}

ScrollReveal(objScrollReveal).reveal(`#home, 
#home img, 
#home .stats, 
#services,
#services header,
#services .card`);