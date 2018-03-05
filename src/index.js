module.exports = function getZerosCount(number) {
    
  var counter = 0;
  for (var i = 5; number/i >= 1; i = i * 5)
    counter = counter + Math.floor(number/i);
  return counter;
}
