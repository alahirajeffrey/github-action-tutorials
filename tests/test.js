const {
  addition,
  subtraction,
  division,
  multiplication,
} = require("../src/index");

describe("Addition", () => {
  test("addition of 2 + 2 should equal 4", () => {
    expect(addition(2, 2)).toBe(4);
  });
});

describe("Subtraction", () => {
  test("subtraction of 2 - 1 should equal 1", () => {
    expect(subtraction(2, 1)).toBe(1);
  });
});

describe("Division", () => {
  test("division of 2 / 2 should equal 1", () => {
    expect(division(2, 2)).toBe(1);
  });
});

describe("Multiplication", () => {
  test("multiplication of 2 * 2 should equal 4", () => {
    expect(multiplication(2, 2)).toBe(4);
  });
});
