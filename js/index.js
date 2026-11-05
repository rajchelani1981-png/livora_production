// Set your website launch date here
const launchDate = new Date("2026-12-31T00:00:00").getTime();

document.getElementById("year").textContent =
    new Date().getFullYear();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = launchDate - now;

    if (distance <= 0) {
        document.querySelector(".countdown").innerHTML =
            "We are Live!";
        return;
    }

    document.getElementById("days").textContent =
        Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("hours").textContent =
        Math.floor((distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60));

    document.getElementById("minutes").textContent =
        Math.floor((distance % (1000 * 60 * 60)) /
        (1000 * 60));

    document.getElementById("seconds").textContent =
        Math.floor((distance % (1000 * 60)) / 1000);
}

updateCountdown();
setInterval(updateCountdown, 1000);