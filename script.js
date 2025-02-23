document.addEventListener("DOMContentLoaded", function() {
    const countdownElement = document.getElementById("countdown");

    function updateCountdown() {
        const today = new Date();
        const graduationDate = new Date(today.getFullYear(), 4, 15); // May 15th (Month index starts from 0)

        // If today's date is past May 15th, set for next year
        if (today > graduationDate) {
            graduationDate.setFullYear(today.getFullYear() + 1);
        }

        const timeDiff = graduationDate - today;
        const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

        countdownElement.textContent = `${daysLeft} days`;
        countdownElement.classList.add("show");
    }

    updateCountdown();
});