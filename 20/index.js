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

// console.log(isValid("() [] {} AZ az")); // false
// console.log(isValid("()[]{}")); // true
// console.log(isValid("([{}])")); // true
// console.log(isValid("({[})")); // false

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// let isValid = function (s) {
//   const stack = [];

//   for (let i = 0; i < s.length; i++) {
//     const char = s.charAt(i);

//     if (
//       char === "(" ||
//       char === "[" ||
//       char === "{" ||
//       char === "A" ||
//       char === "a"
//     ) {
//       stack.push(char);
//     } else if (
//       char === ")" ||
//       char === "]" ||
//       char === "}" ||
//       char === "Z" ||
//       char === "z"
//     ) {
//       const last = stack.pop();
//       if (
//         (char === ")" && last !== "(") ||
//         (char === "]" && last !== "[") ||
//         (char === "}" && last !== "{") ||
//         (char === "Z" && last !== "A") ||
//         (char === "z" && last !== "a")
//       ) {
//         return false;
//       }
//     }
//   }

//   return stack.length === 0;
// };

// console.log(isValid("(]][]){}[]")); // f
// console.log(isValid("az()[]{}")); // t
// console.log(isValid("az([{}])")); // t
// console.log(isValid("az")); // fa
// console.log(isValid("AZ")); // fa
// console.log(isValid("aZ()[]{}")); // F

/**
 * @param {string} s
 * @return {boolean}
 */ 

let isValid = function (s) {
  const stack = [];

  
  const charMap = {
    "(": ")",
    "[": "]",
    "{": "}",
    "A": "Z",
    "a": "z",
  };

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);

    if (charMap[char]) { 
      stack.push(char);
    } else if (charMap[stack.pop()] !== char) { 
      return false;
    }
  }

  return stack.length === 0; 
};

console.log(isValid("(]][]){}[]")); // fal
console.log(isValid("az()[]{}")); // tr
console.log(isValid("az([{}])")); // tr
console.log(isValid("az")); // tr
console.log(isValid("Az")); // tr
console.log(isValid("()[]{}")); // tr