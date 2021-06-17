const number1 = document.querySelector('input.number1');
const number2 = document.querySelector('input.number2');
const buttons = document.querySelector('#buttons');
const result = document.querySelector('#result');

buttons.onclick = function(e) {
    switch (e.target.id) {
        case 'plus':
            result.textContent = Number(number1.value) + Number(number2.value);
            break;
        case 'minus':
            result.textContent = number1.value - number2.value;
            break;
        case 'multiply':
            result.textContent = number1.value * number2.value;
            break;
        case 'divide':
            result.textContent = number1.value / number2.value;
            break;
    }
}   