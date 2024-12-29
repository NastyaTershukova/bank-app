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
    if (value > 0 && value < screens.length - 2) {
        document.querySelector('header').classList.remove('hidden');
    } else {
        document.querySelector('header').classList.add('hidden');
    }
    screens[value].classList.add('active');
    screens[value].classList.remove('hidden');
    widthProgressBar();
}

showScreen(8);


function widthProgressBar() {
    const value = (currentScreen / (screens.length - 2)) * 100;
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

document.querySelector('.change-country').addEventListener('click', function () {
    document.querySelector('.select-countries').classList.add('active');
    document.querySelector('.select-countries-overlay').classList.add('active');
});

document.querySelector('.round-button.close').addEventListener('click', function () {
    document.querySelector('.select-countries').classList.remove('active');
    document.querySelector('.select-countries-overlay').classList.remove('active');
});

const passcodeInputs = document.querySelectorAll('.passcode-content');
function handlePinDots(pin) {
    for (let i = 0; i < passcodeInputs.length; i++) {
        if (typeof pin[i] === 'undefined') {
            passcodeInputs[i].classList.add('hidden');
        } else {
            passcodeInputs[i].classList.remove('hidden');
        }
    };
}

const enteredPin = [];
const repeatPin = [];
let isRepeating = false;
function enterPin(number) {
    let sectionTitle = document.querySelector('.create-passcode .section-title');
    if (isRepeating) {
        let index = repeatPin.length;
        repeatPin[index] = number;
        if (index >= 3) {
            if (repeatPin.toString() === enteredPin.toString()) { // [3,4,5] => "345"
                sectionTitle.innerText = 'Create 4-digit app passcode';
                isRepeating = false;
                nextScreen();
                //TODO: записать введенный пинкод в отдельную переменную, в формате строки.
                if (enteredPin.length > 0) {
                    let usersPin = enteredPin.join('');
                    console.log(usersPin);
                }
                //Сбросить переменные enteredPin и repeatPin
                resetPin(repeatPin);
                resetPin(enteredPin);
            } else {
                document.querySelector('.passcode-error-message').classList.remove('hidden');
                setTimeout(() => {
                    document.querySelector('.passcode-error-message').classList.add('hidden');
                }, 3000);
                sectionTitle.innerText = 'Create 4-digit app passcode';
                isRepeating = false;
                resetPin(repeatPin);
                resetPin(enteredPin);
                handlePinDots(enteredPin);
            }
        }
        handlePinDots(repeatPin);
        return;
    }
    let index = enteredPin.length;
    enteredPin[index] = number;
    handlePinDots(enteredPin);
    if (index >= 3) {
        isRepeating = true;
        sectionTitle.innerText = 'Repeat your app passcode';
        handlePinDots(repeatPin);
        return;
    }
}

function resetPin(array) {
    array.splice(0, 4);
}

function deletePin() {
    if (isRepeating) {
        repeatPin.pop();
        handlePinDots(repeatPin);
    } else {
        enteredPin.pop();
        handlePinDots(enteredPin);
    }
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

document.querySelector('.button-documents').addEventListener('click', function () {
    nextScreen();
});
document.querySelector('.verify-now').addEventListener('click', function () {
    nextScreen();
});

let cashbackSlides = document.querySelectorAll('.cashback-container');
let currentCashbackSlide = 0;
let cashbackInterval;

function initializeProgressBar() {
    document.querySelector('.progress-bar-cashback').innerHTML = '';
    for (let i = 0; i < cashbackSlides.length; i++) {
        let pill = document.createElement('button');
        pill.innerHTML = `<div><span></span></div>`;
        pill.className = 'pill';
        pill.onclick = function() {
            currentCashbackSlide = i;
            showCashbackSlide(i);
            startSpinningCashbackSlides();
        };
        document.querySelector('.progress-bar-cashback').appendChild(pill);
    }
}

initializeProgressBar();

function showCashbackSlide(number) {
    if (document.querySelector('.cashback-container.active')) {
        document.querySelector('.cashback-container.active').classList.remove('active');
    }
    cashbackSlides[number].classList.add('active');
    if (document.querySelector('.pill.selected')) {
        document.querySelector('.pill.selected').classList.remove('selected');
    }
    document.querySelectorAll('.pill')[number].classList.add('selected');
}

showCashbackSlide(0);

function startSpinningCashbackSlides() {
    if (cashbackInterval) {
        clearInterval(cashbackInterval);
    }
    cashbackInterval = setInterval(() => {
        currentCashbackSlide = currentCashbackSlide + 1;
        if (currentCashbackSlide >= cashbackSlides.length) {
            currentCashbackSlide = 0;
        }
        showCashbackSlide(currentCashbackSlide);
    }, 5000);
}

startSpinningCashbackSlides();

let buttons = document.querySelectorAll('.choose-plan-button');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        document.querySelector('.choose-plan-button.active').classList.remove('active');
        buttons[i].classList.add('active');
        showPlans(plans[i]);
    });
}
