const utils = require("../../Utils");

describe("tests for utils #unit", () => {
  it("should return 2", () => {
    expect(utils.raiz(4)).toBe(2);
  });

  it("should throws an error", () => {
    expect(() => utils.raiz(-4)).toThrow("number must be positive");
  });
});
