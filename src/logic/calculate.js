import operate from './operate';

const calculate = ((calculator, buttonName) => {
  let { total, next, operation } = calculator;
  if (total === 'undefined') {
    total = null;
  }

  switch (buttonName) {
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;

    case '+/-':
      total = total ? operate(total, -1, '*') : 0;
      next = next ? operate(next, -1, '*') : 0;
      break;
    case ['+', '-', '*', '/'].includes(buttonName) && buttonName:
      if (total && next) {
        total = operate(total, next, buttonName);
        next = null;
        operation = buttonName;
      } else {
        operation = buttonName;
      }
      break;
    case '.':
      if (operation) {
        if (next.includes('.')) {
          break;
        }
        next = next ? next + buttonName : '0.';
      } else {
        if (total.includes('.')) {
          break;
        }
        total = total ? total + buttonName : '0.';
      }
      break;
    case '%':
      operation = buttonName;
      total = operate(total, '0', operation);
      next = null;
      break;
    case '=':
      if (operation && next) {
        total = operate(total, next, operation);
        next = null;
        operation = null;
      }
      break;
    default:
      if (operation) {
        next = next ? next + buttonName : buttonName;
      } else {
        total = total ? total + buttonName : buttonName;
      }
  }

  return {
    total, next, operation,
  };
});

export default calculate;
