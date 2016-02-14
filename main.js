module.exports = {
  calcTax: function(num) {
    if (num > 10) {
      return (((num - 10) * 0.07) + 1);
    }
    else {
      return num * 0.1;
    }
  }
}
