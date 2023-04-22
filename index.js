firstNumber = +prompt('Enter first number');
secondNumber = +prompt('Enter second number');

addition = firstNumber + secondNumber;
subtraction = firstNumber - secondNumber;
multiplication = firstNumber * secondNumber;
division = firstNumber / secondNumber;

alert(`
    ${firstNumber}+${secondNumber}=${addition}
    ${firstNumber}-${secondNumber}=${subtraction}
    ${firstNumber}*${secondNumber}=${multiplication}
    ${firstNumber}/${secondNumber}=${division}
`);