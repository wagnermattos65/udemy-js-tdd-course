module.exports = {
  sum: function(num1, num2) {
    return num1 + num2;
  },
  sub: function(num1, num2) {
    return num1 - num2;
  },
  mul: function(num1, num2) {
    return num1 * num2;
  },
  div: function(num1, num2) {
    return (num2 == 0) ? 'Nao é possivel divisao por zero' : num1 / num2;
  }
}
