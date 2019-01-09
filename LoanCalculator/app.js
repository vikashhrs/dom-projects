document.getElementById('loan-form').addEventListener('submit', (e) => {
    document.querySelector('#loading').style.display = 'block';
    document.querySelector('#results').style.display = 'none';
    setTimeout(() => {
        document.querySelector('#loading').style.display = 'none';
        document.querySelector('#results').style.display = 'block';
        calculateResults();
    }, 3000)
    e.preventDefault();
});

function calculateResults() {
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');

    const monthly_payment = document.getElementById('monthly-payment');
    const total_payment = document.getElementById('total-payment');
    const total_interest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
        monthly_payment.value = monthly.toFixed(2);
        total_payment.value = (monthly * calculatedPayments).toFixed(2);
        total_interest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
    } else {
        showError('Please check your numbers!');
    }
}

function showError(error) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-danger';
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    errorDiv.appendChild(document.createTextNode(error));
    card.insertBefore(errorDiv, heading);
    document.querySelector('#results').style.display = 'none';
    setTimeout(clearError, 3000);
}

function clearError() {
    document.querySelector('.alert').remove();
}