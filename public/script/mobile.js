const logo = document.querySelector('.logo');
const menuBar = document.querySelector('.menuBar')
const homeNav = document.querySelector('#navigation');
const backToStart = document.querySelector('#backToStart');
const menuNotebook = document.querySelectorAll('nav#navigation .menu li a');

function onScroll () {
  showNavOnScroll();
  showBackToStart();

  activateCurrentSectionMenu(home);
  activateCurrentSectionMenu(services);
  activateCurrentSectionMenu(about);
  activateCurrentSectionMenu(contact);
}

function activateCurrentSectionMenu(section) {
  const midLine = (innerHeight/2) + scrollY;
  const sectionTop = section.offsetTop;
  const sectionTopPassedMidLine = midLine > sectionTop;
  
  const sectionHeight = section.offsetHeight;
  const sectionEndsAt = sectionHeight + sectionTop;
  const sectionEndPassedMidLine = sectionEndsAt < midLine;

  const sectionBoundaries = sectionTopPassedMidLine && !sectionEndPassedMidLine;
  
  const sectionId = section.getAttribute('id');
  const menuAnchorsSite = document.querySelectorAll(`.menu a[href*=${sectionId}]`);

  menuAnchorsSite.forEach(menuElement => {
    menuElement.classList.remove('active');
    if (menuElement.getAttribute('href') === `#${sectionId}` && sectionBoundaries) {
        menuElement.classList.add('active');
    }
    });
}

//redireciona o botao home para o início da page sem quebrar o href necessário para activateCurrentSectionMenu
const homeLink = document.querySelector('.listaLinks a[href="#home"]');
homeLink.addEventListener('click', function() {
  this.href = 'https://andrelrocha.github.io/weRobot/';
});

function showNavOnScroll (event) {
    if (scrollY > 0) {
        homeNav.classList.add('scroll');
        // define width como o tamanho atual da janela de exibição, garantindo que ele tenha uma largura fixa independente do tamanho da tela.
        homeNav.style.width = window.innerWidth + "px";
        logo.src = './public/images/homeAlternativo.svg';
        menuBar.src = './public/images/barraAlternativa.svg';
        menuNotebook.forEach (a => {
          a.style.color = 'var(--corRealce)'; 
        })
    } else {
        homeNav.classList.remove('scroll');
        logo.src = './public/images/home.svg';
        menuBar.src = './public/images/barra.svg';
        menuNotebook.forEach (a => {
          a.style.color = 'var(--corPrincipal)'; 
        })
    }
}

function showBackToStart (event) {
  if (scrollY > 600) {
    backToStart.classList.add('show');
} else {
    backToStart.classList.remove('show');
}
}

window.addEventListener('scroll', onScroll);



function openMenu (event) {
    document.body.classList.add('menuExpanded');
}

function closeMenu (event) {
    document.body.classList.remove('menuExpanded');
}



//cria objetos a serem passados como parametro para html evitando repetição
const image = "./public/images/check.svg";
const lorem = "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.";
const cardsData = [
    {
        title: "Automating Manufacturing Processes",
      //description: lorem
    },
    {
        title: "Logistics Automation",
      //description: lorem
    },
    {
        title: "Construction",
      //description: lorem
    },
    {
        title: "Retail",
      //description: lorem
    },
    {
        title: "Sports",
      //description: lorem 
    },
    {
        title: "Games",
      //description:lorem
    }
  ];

const cardsContainer = document.querySelector('.cards-container');

cardsData.forEach(card => {
  //cria o texto html passando os objetos como parametro os objetos, em que cada loop adicionara o texto html, puxando cardsData[indexForEach]
  const cardHtml = `
      <div class="card">
      <img src="${image}">
      <h3>${card.title}</h3>
      <p>${lorem}</p>
    </div>`;
  /*JavaScript code that is used to add content to an existing HTML element. The += operator is used to append the new HTML code to the existing content of the cardsContainer element, rather than overwriting it completely.*/
  cardsContainer.innerHTML += cardHtml;
});