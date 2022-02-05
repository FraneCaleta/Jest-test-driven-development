const prosjek = require("./prosjek");

describe("prosjek", () => {
  test("od jedne vrijednosti", () => {
    expect(prosjek([1])).toBe(1);
  });

  test("od više brojeva", () => {
    expect(prosjek([1, 2, 3, 4, 5, 6])).toBe(3.5);
  });

  test("od praznog niza je 0", () => {
    expect(prosjek([])).toBe(0);
  });

  test("od tri decimalna broja", () => {
    expect(prosjek([0.1, 0.1, 0.1])).toBeCloseTo(0.1);
  });
});
