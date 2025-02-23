document.addEventListener("DOMContentLoaded", function() {
    const countdownElement = document.getElementById("countdown");


    function updateCountdown() {
        const today = new Date();
        const graduationDate = new Date(today.getFullYear(), 4, 15);

        if (today > graduationDate) {
            graduationDate.setFullYear(today.getFullYear() + 1);
        }

        const timeDiff = graduationDate - today;
        const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

        countdownElement.innerHTML = `${daysLeft} days <span class="cursor"></span>`;
    }

    updateCountdown();
});