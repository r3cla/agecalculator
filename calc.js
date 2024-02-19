document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const dayInput = document.getElementById('day');
    const monthInput = document.getElementById('month');
    const yearInput = document.getElementById('year');
    const dayError = document.getElementById('day-error');
    const monthError = document.getElementById('month-error');
    const yearError = document.getElementById('year-error');
    const inputs = document.querySelectorAll('input');
    const labels = document.querySelectorAll('label');
    const spanYear = document.getElementById('spanYear');
    const spanMonth = document.getElementById('spanMonth');
    const spanDay = document.getElementById('spanDay');

    function isNumber(value) {
        return /^\d+$/.test(value);
    }

    function clearErrorStyles() {
        inputs.forEach(input => input.classList.remove('error'));
        labels.forEach(label => label.classList.remove('error-label'));
    }

    function applyErrorStyles() {
        inputs.forEach(input => input.classList.add('error'));
        labels.forEach(label => label.classList.add('error-label'));
    }

    function calculateAge(birthDate, currentDate) {
        let years = currentDate.getFullYear() - birthDate.getFullYear();
        let months = currentDate.getMonth() - birthDate.getMonth();
        let days = currentDate.getDate() - birthDate.getDate();

        if (months < 0 || (months === 0 && days < 0)) {
            years--;
            months = (months + 12) % 12;
        }

        if (days < 0) {
            const previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
            days += previousMonth.getDate();
        }

        return { years, months, days };
    }

    function displayAge(years, months, days) {
        spanYear.textContent = years;
        spanMonth.textContent = months;
        spanDay.textContent = days;
    
        spanYear.classList.add('fade-in-scale-up');
        spanMonth.classList.add('fade-in-scale-up');
        spanDay.classList.add('fade-in-scale-up');
    
        setTimeout(() => {
            spanYear.classList.remove('fade-in-scale-up');
            spanMonth.classList.remove('fade-in-scale-up');
            spanDay.classList.remove('fade-in-scale-up');
        }, 500);
    }

    function validateDate() {
        let isValid = true;
        clearErrorStyles();
        dayError.textContent = '';
        monthError.textContent = '';
        yearError.textContent = '';

        const currentDate = new Date();
        const minDate = new Date(1900, 0, 1); 

        if (!dayInput.value) {
            dayError.textContent = 'Day is required.';
            isValid = false;
        } else if (!isNumber(dayInput.value)) {
            dayError.textContent = 'Day must be a number.';
            isValid = false;
        }

        if (!monthInput.value) {
            monthError.textContent = 'Month is required.';
            isValid = false;
        } else if (!isNumber(monthInput.value)) {
            monthError.textContent = 'Month must be a number.';
            isValid = false;
        }

        if (!yearInput.value) {
            yearError.textContent = 'Year is required.';
            isValid = false;
        } else if (!isNumber(yearInput.value)) {
            yearError.textContent = 'Year must be a number.';
            isValid = false;
        }

        const enteredDate = new Date(yearInput.value, monthInput.value - 1, dayInput.value);
        if (isNaN(enteredDate)) {
            dayError.textContent = 'Invalid date.';
            isValid = false;
        } else if (enteredDate > currentDate) {
            yearError.textContent = 'The date must not be in the future.';
            isValid = false;
        } else if (enteredDate < minDate) {
            yearError.textContent = 'Date must be after January 1, 1900.';
            isValid = false;
        }

        if (!isValid) {
            applyErrorStyles();
            displayAge('--', '--', '--');
        } else {
            const age = calculateAge(enteredDate, currentDate);
            displayAge(age.years, age.months, age.days);
        }

        return isValid;
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        validateDate();
    });
});
