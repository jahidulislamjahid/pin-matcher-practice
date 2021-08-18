// generating pin 
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}
document.getElementById('pin-generator').addEventListener('click', function () {
    getPin();
    document.getElementById('pin-window').value = getPin();
});

// inputing pin 
document.getElementById('keypad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calc = document.getElementById('keypad-number');
    if (isNaN(number)) {
        if (number == 'C') {
            calc.value = '';
        }
    }
    else {
        const prevNumber = calc.value;
        const newNumber = prevNumber + number;
        calc.value = newNumber;
    }

});

function varifyPin() {
    const pin = document.getElementById('pin-window').value;
    const numberPressed = document.getElementById('keypad-number').value;
    const success = document.getElementById('matched');
    const error = document.getElementById('not-matched');
    if (pin == numberPressed) {
        success.style.display = 'block';
        error.style.display = 'none';
    }
    else {
        error.style.display = 'block';
        success.style.display = 'none';
    }
}

document.getElementById('submit').addEventListener('click', function () {
    varifyPin();
});
