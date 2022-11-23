module.exports = {
  raiz: function (num) {
    if (num < 0) {
      throw new Error("number must be positive");
    }
    return Math.sqrt(num);
  },
};
