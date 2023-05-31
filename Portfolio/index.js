// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})
const headingText = "Olá, Meu Nome é Paulo";
const welcomeText = "Seja bem-vindo";
const subtitleText = "Sou estudante do 7° periodo do curso de Ciências Da Computação na Universidade Federal Da Paraíba (UFPB)";
let headingIndex = 0;
let welcomeIndex = 0;
let subtitleIndex = 0;
let speed = 80; // Velocidade da digitação (em milissegundos)
let apagar = 20;

function typeWriterHeading() {
  if (headingIndex < headingText.length) {
    document.getElementById("typewriter-heading").innerHTML += headingText.charAt(headingIndex);
    headingIndex++;
    setTimeout(typeWriterHeading, speed);
  } else {
    setTimeout(eraseText, speed);
  }
}

function eraseText() {
  if (welcomeIndex > 0) {
    const currentText = document.getElementById("typewriter").innerHTML;
    const newText = currentText.slice(0, -1);
    document.getElementById("typewriter").innerHTML = newText;
    welcomeIndex--;
    setTimeout(eraseText, apagar);
  } else {
    setTimeout(typeWriterSubtitle, apagar);
  }
}

function typeWriterWelcome() {
  if (welcomeIndex < welcomeText.length) {
    document.getElementById("typewriter").innerHTML += welcomeText.charAt(welcomeIndex);
    welcomeIndex++;
    setTimeout(typeWriterWelcome, speed);
  } else {
    document.getElementById("typewriter").innerHTML = welcomeText; // Exibe apenas o welcomeText
  }
}

function typeWriterSubtitle() {
  if (subtitleIndex < subtitleText.length) {
    document.getElementById("typewriter").innerHTML += subtitleText.charAt(subtitleIndex);
    subtitleIndex++;
    setTimeout(typeWriterSubtitle, speed);
  } else {
    setTimeout(eraseSubtitle, speed); // Apaga o subtitleText
  }
}

function eraseSubtitle() {
  if (subtitleIndex > 0) {
    const currentText = document.getElementById("typewriter").innerHTML;
    const newText = currentText.slice(0, -1);
    document.getElementById("typewriter").innerHTML = newText;
    subtitleIndex--;
    setTimeout(eraseSubtitle, apagar);
  } else {
    subtitleIndex = 0; // Reinicia o índice do subtitleText
    setTimeout(typeWriterWelcome, apagar);
  }
}

// Inicia o efeito de digitação ao carregar a página
window.addEventListener("load", function() {
  typeWriterHeading();
});
// Supondo que você tenha um formulário com os campos nome, email e mensagem
const data = {
  nome: "valor_do_nome",
  email: "valor_do_email",
  mensagem: "valor_da_mensagem"
};

axios.post('http://localhost:8080/enviar', JSON.stringify(data), {
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(response => {
    console.log(response.data);
    if (response.status === 200) {
      // Redirecionar para outra página HTML
      window.location.href = 'teste.html';
    } else {
      // Manipular outras respostas aqui, se necessário
    }
    document.getElementById("successMessage").style.display = "block";
    document.getElementById("myForm").reset();
  })
  .catch(error => {
    console.error(error);
  });

