document.querySelector('.section-button.white.sign-up').addEventListener('click', function(){
    document.querySelector('.start-section').style.display = "none";
    document.querySelector('.section.sign-up').style.display = "flex";
});

document.querySelector('.section-button.blue.continue').addEventListener('click', function(){
    document.querySelector('.section.sign-up').style.display = "none";
    document.querySelector('.section.enter-code').style.display = "flex";
});

document.querySelector('.section-button.blue.next').addEventListener('click', function(){
    document.querySelector('.section.enter-code').style.display = "none";
    document.querySelector('.section.create-passcode').style.display = "flex";
});

let slides = document.querySelectorAll('.start-section_content');
let currentSlide = 0;
let interval;

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