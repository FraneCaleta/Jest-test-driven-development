const suma = require("./suma");

test("uspješno zbraja dva broja", () => {
  const rezultat = suma(1, 2);

  expect(rezultat).toBe(3);
});
