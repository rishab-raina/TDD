import { expect } from "chai";

// describe the group of tests we are running
describe("add - basic functionality", () => {
  // claims or assertions we want to make about our code
  //claims should back up the assertion we made in this functionality written in the string
  it("returns 0  when passed an empty string", () => {
    const expected = 0;
    const actual = add("");
    expect(actual).deep.to.equal(expected);
  });
});
