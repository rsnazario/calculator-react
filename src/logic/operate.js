import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const nOne = Big(numberOne);
  const nTwo = Big(numberTwo);
  let result = null;

  switch (operation) {
    case '-':
      result = nOne.minus(nTwo);
      break;
    case '+':
      result = nOne.plus(nTwo);
      break;
    case '*':
      result = nOne.mul(nTwo);
      break;
    case '/':
      result = nTwo === 0 ? 'undefined' : nOne.div(nTwo);
      break;
    case '%':
      result = nOne.mod(100);
      break;
    default:
      result = '';
  }

  return result.toString();
};

export default operate;
