function scrollMenu (event) {
    const homeNav = document.querySelector('#navigation');
   
    if (scrollY > 1) {
        homeNav.classList.add('scroll')
    } else {
        homeNav.classList.remove('scroll')
    }
}
  
window.addEventListener('scroll', scrollMenu);