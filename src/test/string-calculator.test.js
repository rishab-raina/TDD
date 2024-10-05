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

describe("add - new line separator", () => {
  checkResult("1\n5", 6);
});

//added test for custom delimeter based on pattern "//[delimiter]\n[numbers…]"
describe("add - different custom delimiters for pattern: \"//[delimiter]\\n[numbers…]\"", () => {
  checkResult("//;\n1;2", 3);
});

describe("add - negative numbers", () => {
  let caught = null;
  before(()=>{
    try {
      calculator.add("-1,-42")
    } catch (ex) {
      caught = ex
      
    }
  });
  it("negative numbers not allowed", () =>{
    expect(caught).to.not.equal(null)
  });
  it("should include the first invalid negative number", () =>{
    expect(caught.indexOf("-1")).to.not.equal(-1)
  })
  it("should include the second invalid negative number", () =>{
    expect(caught.indexOf("-42")).to.not.equal(-1)
  })
});


function checkResult(expression, expected) {
  it("should return " + expected + ' when passed "' + expression.replace(/\n/g, "\\n") + '"', () => {
    const actual_result = calculator.add(expression);
    expect(actual_result).to.equal(expected);
  });
}
