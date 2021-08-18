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
})
