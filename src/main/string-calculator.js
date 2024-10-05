//string calculator add method with n comma separated numbers as input

export const calculator = {
  add: (expression) => {
    let numbers = expression.split(",");
    let sum = 0;
    for (let index = 0; index < numbers.length; index++) {
      sum += parseInt(numbers[index] || 0);
    }
    return sum;
  },
};
