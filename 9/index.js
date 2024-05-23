/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  console.log(x + " es x na");

  if (x < 0) {
    console.log(x + " es x na");
    return false;
  }

  let result = x.toString().split("").reverse().join("");

  return x.toString() === result;
};

console.log(isPalindrome(121));

