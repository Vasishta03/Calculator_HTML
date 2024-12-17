import { Calculator } from './calculator.js';

document.addEventListener('DOMContentLoaded', () => {
  const calculator = new Calculator();
  const previousOperationElement = document.querySelector('.previous-operation');
  const currentOperationElement = document.querySelector('.current-operation');

  // Event listeners for numbers
  document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.textContent);
      calculator.updateDisplay(previousOperationElement, currentOperationElement);
    });
  });

  // Event listeners for operators
  document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', () => {
      calculator.chooseOperation(button.dataset.action);
      calculator.updateDisplay(previousOperationElement, currentOperationElement);
    });
  });

  // Event listener for equals
  document.querySelector('.equals').addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay(previousOperationElement, currentOperationElement);
  });

  // Event listener for clear
  document.querySelector('.clear').addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay(previousOperationElement, currentOperationElement);
  });

  // Keyboard support
  document.addEventListener('keydown', event => {
    if (/[0-9.]/.test(event.key)) {
      calculator.appendNumber(event.key);
    } else if (['+', '-', '*', '/'].includes(event.key)) {
      const operationMap = {
        '+': 'add',
        '-': 'subtract',
        '*': 'multiply',
        '/': 'divide'
      };
      calculator.chooseOperation(operationMap[event.key]);
    } else if (event.key === 'Enter' || event.key === '=') {
      calculator.compute();
    } else if (event.key === 'Escape') {
      calculator.clear();
    }
    calculator.updateDisplay(previousOperationElement, currentOperationElement);
  });
});
