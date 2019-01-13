document.getElementById('name').addEventListener('blur', validateName);

document.getElementById('email').addEventListener('blur', validateEmail);


document.getElementById('zip').addEventListener('blur', validateZip);


document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName(event) {
    const name = event.target.value;
    const re = /^[a-zA-Z]{2,10}$/;
    if (!re.test(name)) {
        event.target.classList.add('is-invalid');
    } else {
        event.target.classList.remove('is-invalid');
    }
}

function validateEmail(event) {
    const email = event.target.value;
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (!re.test(email)) {
        event.target.classList.add('is-invalid');
    } else {
        event.target.classList.remove('is-invalid');
    }
}

function validateZip(event) {
    const zip = event.target.value;
    const re = /^[0-9]{5}(-[0-9]{4})?$/;
    if (!re.test(zip)) {
        event.target.classList.add('is-invalid');
    } else {
        event.target.classList.remove('is-invalid');
    }
}

function validatePhone(event) {
    const phone = event.target.value;
    const re = /^\(?\d{3}\)?[-. ]?\d{3}[.- ]?\d{4}$/;
    if (!re.test(phone)) {
        event.target.classList.add('is-invalid');
    } else {
        event.target.classList.remove('is-invalid');
    }
}

// /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/
// /^\(?\d{3}\)?[-. ]?\d{3}[.- ]?\d{4}$/