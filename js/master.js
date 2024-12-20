document.querySelector('.button-sign_up').addEventListener('click', function () {
    nextScreen();
});

document.querySelector('.button-email').addEventListener('click', function () {
    let password = document.querySelector('.input-password').value.trim();

    let emailRegex = /^[a-zA-Z0-9./%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/g;
    let email = document.querySelector('.input-email').value.trim();

    // if (password.length < 8 || password.length > 64 || !emailRegex.test(email)) {
    //     return;
    // }

    document.querySelector('.error-message.email').classList.add('hidden');
    document.querySelector('.error-message.password').classList.add('hidden');

    //исправление вывода только одной ошибки при двух
    let errors = false;
    if (!emailRegex.test(email)) {
        document.querySelector('.error-message.email').classList.remove('hidden');
        errors = true;
        return;
    }
    if (password.length < 8 || password.length > 64) {
        document.querySelector('.error-message.password').classList.remove('hidden');
        errors = true;
        return;
    }
    nextScreen();
});

document.querySelector('.button-number').addEventListener('click', function () {
    let phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    let phone = document.querySelector('.input-tel').value.trim();
    if (!phoneRegex.test(phone)) {
        document.querySelector('.error-message.phone').classList.remove('hidden');
        return;
    }
    document.querySelector('.error-message.phone').classList.add('hidden');
    nextScreen();
});

// document.querySelector('.button-code').addEventListener('click', function () {
//     nextScreen();
// });

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
    widthProgressBar();
}

function widthProgressBar() {
    const value = (currentScreen / screens.length) * 100;
    document.querySelector('.progress-bar .item span').style.setProperty('--value', `${value}%`);
}

function nextScreen() {
    currentScreen++;
    showScreen(currentScreen);
}

function previousScreen() {
    currentScreen--;
    showScreen(currentScreen);
}
widthProgressBar();

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

// let passcodeInputs = document.querySelectorAll('.passcode-number');
// let currentIndex = 0;
// document.querySelector('.passcode-button').addEventListener('click', function () {
// for (let i = 0; i < passcodeInputs.length; i++) {
//         passcodeInputs[i].classList.remove('hidden');
//     };
// });

let passcodeInputs = document.querySelectorAll('.passcode-content');
let currentIndex = 0;
for (let i = 0; i < passcodeInputs.length; i++) {
    document.querySelector('.passcode-button').addEventListener('click', function () {
        let value = document.querySelector('.passcode-number');
        passcodeInputs[i] = value.classList.remove('hidden');
    });
};

document.querySelector('.change-country').addEventListener('click', function () {
    document.querySelector('.select-countries').classList.add('active');
    document.querySelector('.select-countries-overlay').classList.add('active');
});

document.querySelector('.round-button.close').addEventListener('click', function () {
    document.querySelector('.select-countries').classList.remove('active');
    document.querySelector('.select-countries-overlay').classList.remove('active');
});

const enteredPin = [];
const repeatPin = [];
let isRepeating = false;
function enterPin(number) {
    let sectionTitle = document.querySelector('.create-passcode .section-title');
    if (isRepeating) {
        let index = repeatPin.length;
        repeatPin[index] = number;
        console.log(repeatPin);
        if (index >= 3) {
            if (repeatPin.toString() === enteredPin.toString()) { // [3,4,5] => "345"
                nextScreen();
            } else {
                //TODO: вывести ошибку о том что пинкоды не совпадают
                function showError() {
                    document.querySelector('.passcode-error-message').classList.remove('hidden');
                    setTimeout(() => {
                        document.querySelector('.passcode-error-message').classList.add('hidden');
                    }, 3000);
                }
                showError();
                sectionTitle.innerText = 'Create 4-digit app passcode';
                isRepeating = false;
                resetPin(repeatPin);
                resetPin(enteredPin);
            }
        }
        return;
    }
    let index = enteredPin.length;
    enteredPin[index] = number;
    console.log(enteredPin);
    if (index >= 3) {
        isRepeating = true;
        sectionTitle.innerText = 'Repeat your app passcode';
        return;
    }
}

function resetPin(array) {
    array.splice(0, 4);
}

document.querySelector('.button-code').addEventListener('click', function () {
    let checkbox = document.querySelector('.checkbox');
    if (!checkbox.checked) {
        document.querySelector('.error-message.checkbox').classList.remove('hidden');
        return;
    }
    document.querySelector('.error-message.checkbox').classList.add('hidden');
    nextScreen();
});

document.querySelector('.button-citizen').addEventListener('click', function () {
    nextScreen();
});