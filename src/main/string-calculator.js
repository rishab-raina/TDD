//string calculator add method with two comma separated numbers as input

export const calculator = {
  add: (expression) => {
    let numbers = expression.split(",");
    return parseInt(numbers[0] || 0) + parseInt(numbers[1] || 0);
  },
};
