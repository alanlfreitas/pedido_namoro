// Função do carrossel
let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel img');

function changeImage() {
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add('active');
}

setInterval(changeImage, 5000);

const noButton = document.getElementById('no');
const yesButton = document.getElementById('yes');
const message = document.getElementById('message');
const rejectionMessage = document.getElementById('rejection-message');

// Mensagem do "Sim"
yesButton.addEventListener('click', () => {
    message.style.display = 'block';
    rejectionMessage.style.display = 'none';
});

// Não fujão
noButton.addEventListener("mouseover", () => {
    const screenWidth = window.innerWidth - noButton.clientWidth - 20;
    const screenHeight = window.innerHeight - noButton.clientHeight - 20;

    const randomX = Math.max(10, Math.random() * screenWidth);
    const randomY = Math.max(10, Math.random() * screenHeight);

    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});

// Mostra a mensagem de rejeição quando clica no "Não" (caso alguém consiga clicar kkkkk Impossibru)
noButton.addEventListener('click', () => {
    rejectionMessage.style.display = 'block';
    message.style.display = 'none';
});

// Função para adicionar trilha usando spotify(Não funcional ainda)
document.addEventListener("DOMContentLoaded", () => {
    const spotifyIframe = document.getElementById("spotify-player");
    
    document.body.addEventListener("click", () => {
        spotifyIframe.src += "&autoplay=1";
    }, { once: true });
});