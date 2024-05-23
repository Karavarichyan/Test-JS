// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// let isValid = function (s) {
//   const stack = [];
//   for (let i = 0; i < s.length; i++) {
//     const char = s.charAt(i);

//     // console.log(char == "(");
//     if (char == "(" || char == "[" || char == "{") {
//       stack.push(i);
//     //    console.log(i+'trr');
//     }
//     if (s.charAt(i) == ")" || s.charAt(i) == "]" || s.charAt(i) == "}") {
//       stack.pop(i);
//     //   console.log(i+'fooo');
//     }
//   }
// console.log(stack.length);
//   return stack.length === 0;
  
// };
// console.log(isValid("(]][]){}[]"));
/**
 * @param {string} s
 * @return {boolean}
 */
// let isValid = function (s) {
//   const stack = [];
//   const map = {
//     '(': ')',
//     '[': ']',
//     '{': '}'
//   };

//   for (let i = 0; i < s.length; i++) {
//     const char = s.charAt(i);

//     if (char === '(' || char === '[' || char === '{') {
//       stack.push(char);
//     } else if (char === ')' || char === ']' || char === '}') {
//       const last = stack.pop();
//       if (map[last] !== char) {
//         return false;
//       }
//     }
//   }

//   return stack.length === 0;
// };

// console.log(isValid("() [] {} AZ az")); // false
// console.log(isValid("()[]{}")); // true
// console.log(isValid("([{}])")); // true
// console.log(isValid("({[})")); // false
/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function (s) {
  const stack = [];
  
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);

    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else if (char === ')' || char === ']' || char === '}') {
      const last = stack.pop();
      if ((char === ')' && last !== '(') ||
          (char === ']' && last !== '[') ||
          (char === '}' && last !== '{')) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(isValid("(]][]){}[]")); // f
console.log(isValid("()[]{}")); // t
console.log(isValid("([{}])")); // t
console.log(isValid("az")); // fa