const logo = document.querySelector('.logo');
const menuBar = document.querySelector('.menuBar')

function scrollMenu (event) {
    const homeNav = document.querySelector('#navigation');
    
    if (scrollY > 0) {
        homeNav.classList.add('scroll');
        // define width como o tamanho atual da janela de exibição, garantindo que ele tenha uma largura fixa independente do tamanho da tela.
        homeNav.style.width = window.innerWidth + "px";
        logo.src = './public/images/homeAlternativo.svg';
        menuBar.src = './public/images/barraAlternativa.svg'
    } else {
        homeNav.classList.remove('scroll');
        logo.src = './public/images/home.svg';
        menuBar.src = './public/images/barra.svg'
    }
}

window.addEventListener('scroll', scrollMenu);



function openMenu (event) {
    document.body.classList.add('menuExpanded');
    logo.src = './public/images/homeAlternativo.svg';
}

function closeMenu (event) {
    document.body.classList.remove('menuExpanded');
    logo.src = './public/images/home.svg';
}



/*
function openMenu (event) {
    document.body.classList.add('menuExpanded');

    
    //const menuExpanded = document.querySelector('.menuExpanded');
    //menuExpanded.style.width = window.innerWidth + "px";
    //menuExpanded.style.height = window.innerHeight + "px";
    
}

*/


// Seleciona o elemento do SVG
//const svgElement = document.querySelector('.barra');
// Define o valor do fill
//svgElement.style.fill = '#DDFFBB';