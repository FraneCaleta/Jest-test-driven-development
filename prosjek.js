const prosjek = (niz) =>
  niz.length === 0 ? 0 : niz.reduce((a, b) => a + b) / niz.length;

module.exports = prosjek;
