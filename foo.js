const foo = (isTrue) => {
  let rijec;
  if (isTrue) rijec = "blabla";
  else rijec = null;
  return rijec.trim();
};

module.exports = foo;
