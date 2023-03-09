import add from "../src/util";

describe("util test", () => {
  test("should return correct sum result", () => {
    expect(add(10, 20)).toEqual(30);
  });
});
