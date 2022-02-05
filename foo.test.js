const foo = require("./foo");

test("trim rijeci", () => {
  expect(foo(true)).toBe("blabla");
});
