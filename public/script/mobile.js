function scrollMenu (event) {
    const homeNav = document.querySelector('#navigation');
   
    if (scrollY > 0) {
        homeNav.classList.add('scroll');
        // define width como o tamanho atual da janela de exibição, garantindo que ele tenha uma largura fixa independente do tamanho da tela.
        homeNav.style.width = window.innerWidth + "px";
    } else {
        homeNav.classList.remove('scroll')
    }
}
  
window.addEventListener('scroll', scrollMenu);