// Countdown timer for Flash Deals section
function startCountdown(duration) {
    let timer = duration, days, hours, minutes, seconds;
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    setInterval(function () {
        days = parseInt(timer / (60 * 60 * 24), 10);
        hours = parseInt((timer % (60 * 60 * 24)) / (60 * 60), 10);
        minutes = parseInt((timer % (60 * 60)) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        days = days < 10 ? "0" + days : days;
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        daysEl.textContent = days;
        hoursEl.textContent = hours;
        minutesEl.textContent = minutes;
        secondsEl.textContent = seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

// Set the countdown for 2 days, 10 hours, 30 minutes, 10 seconds (example)
// 2*24*60*60 + 10*60*60 + 30*60 + 10 = 172210 seconds
window.onload = function () {
    const totalSeconds = (2 * 24 * 60 * 60) + (10 * 60 * 60) + (30 * 60) + 10;
    startCountdown(totalSeconds);
};