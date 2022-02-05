const oduzmi = require("./oduzmi");

test("uspješno oduzima dva broja", () => {
  const rezultat = oduzmi(1, 2);

  expect(rezultat).toBe(-1);
});
