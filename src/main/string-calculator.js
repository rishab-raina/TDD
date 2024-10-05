//string calculator add method with n comma and new-line(\n) separated numbers as input

export const calculator = {
  add: (expression) => {
    let numbers = expression.split(/,|\n/g);
    let sum = 0;
    for (let index = 0; index < numbers.length; index++) {
      sum += parseInt(numbers[index] || 0);
    }
    return sum;
  },
};
