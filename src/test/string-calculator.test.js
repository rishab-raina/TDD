import { expect } from "chai";
import { calculator } from "../main/string-calculator.js";

// describe the group of tests we are running
describe("add - basic functionality", () => {
  // claims or assertions we want to make about our code
  //claims should back up the assertion we made in this functionality written in the string
  checkResult("", 0);
  checkResult("1", 1);
});

describe("add - with comma separator", () => {
  checkResult("1,5", 6);
  checkResult("1,2,3,4,5", 15); //added test to handle any amount of numbers
});

function checkResult(expression, expected) {
  it("should return " + expected + ' when passed "' + expression + '"', () => {
    const actual_result = calculator.add(expression);
    expect(actual_result).to.equal(expected);
  });
}
