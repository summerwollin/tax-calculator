module.exports = {
  calcTax: function(num) {
    if (num - 10 > 0) {
      return "greater than zero";
    }
    else {
      return num / 10;
    }
  }
}
