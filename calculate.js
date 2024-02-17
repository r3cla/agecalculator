document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.querySelector('.submit-btn');

    submitBtn.addEventListener('click', function() {
        const day = document.getElementById('day').value;
        const month = document.getElementById('month').value - 1; // JavaScript months are 0-indexed
        const year = document.getElementById('year').value;

        const birthDate = new Date(year, month, day);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();

        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
            m += 12; // Adjust months when day is not yet reached in the current month
        }

        const d = Math.floor((today - new Date(today.getFullYear(), today.getMonth(), birthDate.getDate())) / (24 * 3600 * 1000));
        const days = d < 0 ? (new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate() + d) : d;

        document.getElementById('spanYear').textContent = age;
        document.getElementById('spanMonth').textContent = m;
        document.getElementById('spanDay').textContent = days;
    });
});