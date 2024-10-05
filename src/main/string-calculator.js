//string calculator add method with n comma and new-line(\n) and custom delimeter separated numbers as input

export const calculator = {
  add: (expression) => {
    let numbers = getNumbers(expression);
    return calclulateSum(numbers);
  },
};

//function return the numbers array without delimeters
const getNumbers = (expression) => {
  let delimiters = [",", "\n"];
  if (hasCustomDelimeter(expression)) {
    delimiters.push(getCustomDelimeter(expression));
    expression = stripFirstLine(expression);
  }
  return getSubArray([expression], delimiters);
};

//function to check if the delimeter is present in the input expression
const hasCustomDelimeter = (expression) => /^\/\//.test(expression);

//function to remove the part of expression containing the delimeter pattern
const stripFirstLine = (expression) => expression.substring(expression.indexOf("\n") + 1);

//function to extract custom delimeter from the input expression
const getCustomDelimeter = (expression) => expression.charAt(2);

//function to split based on delimeter array 
const getSubArray = (numbersSofar, delimiters) => {
  if (delimiters.length === 0) return numbersSofar;
  let subArray = [];
  let delimiter = delimiters.pop(); // Removes and retrieves the last delimiter in the array

  for (let index = 0; index < numbersSofar.length; index++) {
    const element = numbersSofar[index];
    subArray = subArray.concat(element.split(delimiter)); // Split the element by the current delimiter and merge into subArray
  }
  return getSubArray(subArray, delimiters); // Recursively call getSubArray with the updated subArray and remaining delimiters
};

// function to calculate the sum of numbers
const calclulateSum = (numbers) => {
  let sum = 0;
  for (let index = 0; index < numbers.length; index++) {
    sum += parseInt(numbers[index] || 0);
  }
  return sum;
};
