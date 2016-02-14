module.exports = {
  calcTax: function(num) {
    if (num <= 10) {return num * 0.1}
    if (num > 10 && num < 20) {
      return (((num - 10) * 0.07) + 1);
    }
    if (num > 20 && num < 30) {
      return ((num - 20) * 0.05) + 1.7;
    }
    else {
      return ((num - 30) * 0.03) + 2.2;
    }
  }
}
