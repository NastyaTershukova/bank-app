document.querySelector('.button-sign_up').addEventListener('click', function () {
    nextScreen();
});

document.querySelector('.button-email').addEventListener('click', function () {
    let password = document.querySelector('.input-password').value.trim();

    let emailRegex = /^[a-zA-Z0-9./%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/g;
    let email = document.querySelector('.input-email').value.trim();

    if (password.length < 8 || password.length > 64 || !emailRegex.test(email)) {
        return;
    }
    nextScreen();
});

document.querySelector('.button-number').addEventListener('click', function () {
    nextScreen();
});

document.querySelector('.button-code').addEventListener('click', function () {
    nextScreen();
});

let slides = document.querySelectorAll('.start-section_content');
let currentSlide = 0;
let interval;

let screens = document.querySelectorAll('section');
let currentScreen = 0;
function showScreen(value) {
    if (document.querySelector('section.active')) {
        document.querySelector('section.active').classList.add('hidden');
        document.querySelector('section.active').classList.remove('active');
    }
    if (value > 0) {
        document.querySelector('header').classList.remove('hidden');
    } else {
        document.querySelector('header').classList.add('hidden');
    }
    screens[value].classList.add('active');
    screens[value].classList.remove('hidden');
}

showScreen(2);

function nextScreen() {
    currentScreen++;
    showScreen(currentScreen);
}

function previousScreen() {
    currentScreen--;
    showScreen(currentScreen);
}

function showSlide(number) {
    if (document.querySelector('.start-section_content.active')) {
        document.querySelector('.start-section_content.active').classList.remove('active');
    }
    slides[number].classList.add('active');
}
showSlide(0);

function startSpinningSlides() {
    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(() => {
        currentSlide = currentSlide + 1;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    }, 5000);
}
startSpinningSlides();

let codeInputs = document.querySelectorAll('.input-code input');
for (let i = 0; i < codeInputs.length; i++) {
    codeInputs[i].addEventListener('input', function () {
        let value = codeInputs[i].value.trim();
        if (Number.isNaN(Number(value))) {
            codeInputs[i].value = '';
            return;
        }
        if (value.length == 1) {
            codeInputs[i + 1].focus();
        }
    });
    codeInputs[i].addEventListener('keydown', function (event) {
        if (event.key === 'Backspace') {
            if (codeInputs[i].value.trim().length != 0) {
                codeInputs[i].value = '';
                event.preventDefault();
            }
            codeInputs[i - 1].focus();
        }
    });
}

document.querySelector('.change-country').addEventListener('click', function () {
    document.querySelector('.select-countries').classList.add('active');
    document.querySelector('.select-countries-overlay').classList.add('active');
});

document.querySelector('.round-button.close').addEventListener('click', function () {
    document.querySelector('.select-countries').classList.remove('active');
    document.querySelector('.select-countries-overlay').classList.remove('active');
});
