let display = document.getElementById('display');
let currentOperation = '';
let currentNumber = '';

function appendNumber(number) {
    currentNumber += number;
    display.value = currentNumber;
}

function setOperation(operation) {
    if (currentNumber) {
        currentOperation = `${display.value} ${operation} `;
        currentNumber = '';
        display.value = currentOperation;
    }
}

function clearDisplay() {
    display.value = '';
    currentNumber = '';
    currentOperation = '';
}

function calculateResult() {
    if (currentNumber) {
        currentOperation += currentNumber;
        let result;
        try {
            result = eval(currentOperation.replace(/×/g, '*').replace(/÷/g, '/'));
        } catch (e) {
            result = 'Erro';
        }
        display.classList.remove('bounce'); // Remove a classe se já estiver presente
        display.classList.remove('glow'); // Remove o brilho anterior
        void display.offsetWidth; // Trigger reflow para reiniciar a animação
        display.classList.add('bounce'); // Adiciona a classe de animação
        display.classList.add('glow'); // Adiciona o efeito de brilho
        display.value = result;
        currentOperation = ''; // Limpa a operação após cálculo
        currentNumber = ''; // Limpa o número atual após cálculo
    }
}

// Adiciona a classe 'glow' aos botões ao clicar
document.querySelectorAll('.buttons button').forEach(button => {
    button.addEventListener('mousedown', () => {
        button.classList.add('glow');
    });
    button.addEventListener('mouseup', () => {
        button.classList.remove('glow');
    });
});
