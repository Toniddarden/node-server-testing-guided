const calc = require("../calculator");

describe("add", () => {

  it("it has two numbers", () => {
    expect(calc.add(2, 2)).toBe(4);
    expect(calc.add(3, 1)).toBe(4);
  });



});

// it('it subtracts 2 numbers', () => {
//     expect(calc.subtract(5, 2)).toBe(3)
// })

// it('it multiplies 2 numbers', () => {
//     expect(calc.multiply(4, 4)).toBe(16)
// })

// it('it divide 2 numbers', () => {
//     expect(calc.divide(100, 10)).toBe(10)
// })
