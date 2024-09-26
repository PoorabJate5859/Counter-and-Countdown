let countdownInterval;
const countdownBtn = document.querySelector('.btn-start-countdown');
const resetCountdownBtn = document.querySelector('.btn-reset-countdown');
const hoursInput = document.querySelector('.input-hours');
const minutesInput = document.querySelector('.input-minutes');
const secondsInput = document.querySelector('.input-seconds');
const hoursDisplay = document.querySelector('.countdown-hours');
const minutesDisplay = document.querySelector('.countdown-minutes');
const secondsDisplay = document.querySelector('.countdown-seconds');

countdownBtn.addEventListener('click', () => {
    let hours = parseInt(hoursInput.value) || 0;
    let minutes = parseInt(minutesInput.value) || 0;
    let seconds = parseInt(secondsInput.value) || 0;

    let countdownTime = hours * 3600 + minutes * 60 + seconds;

    if (countdownTime > 0) {
        clearInterval(countdownInterval);

        countdownInterval = setInterval(() => {
            const displayHours = Math.floor(countdownTime / 3600);
            const displayMinutes = Math.floor((countdownTime % 3600) / 60);
            const displaySeconds = countdownTime % 60;

            hoursDisplay.textContent = String(displayHours).padStart(2, '0');
            minutesDisplay.textContent = String(displayMinutes).padStart(2, '0');
            secondsDisplay.textContent = String(displaySeconds).padStart(2, '0');

            countdownTime--;

            if (countdownTime < 0) {
                clearInterval(countdownInterval);
            }
        }, 1000);
    }
});

resetCountdownBtn.addEventListener('click', () => {
    clearInterval(countdownInterval);
    hoursInput.value = '';
    minutesInput.value = '';
    secondsInput.value = '';
    hoursDisplay.textContent = "00";
    minutesDisplay.textContent = "00";
    secondsDisplay.textContent = "00";
});


let counterValue = 0;
const counterDisplay = document.querySelector('.counter-value');
const increaseBtn = document.querySelector('.btn-increase');
const decreaseBtn = document.querySelector('.btn-decrease');
const resetCounterBtn = document.querySelector('.btn-reset-counter');

increaseBtn.addEventListener('click', () => {
    counterValue++;
    counterDisplay.textContent = counterValue;
});

decreaseBtn.addEventListener('click', () => {
    if (counterValue > 0) {
        counterValue--;
        counterDisplay.textContent = counterValue;
    }
});

resetCounterBtn.addEventListener('click', () => {
    counterValue = 0;
    counterDisplay.textContent = counterValue;
});