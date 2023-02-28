function replaceRepeatingChars(input) {
    const chars = input.split('');
    let result = chars[0]
    for (let i = 1; i < chars.length; i++) {
        const currentChar = chars[i];
        const previousChar = chars[i - 1];
        if (currentChar != previousChar) {
            result += currentChar;
        }
    }
    console.log(result);
}
// function replaceRepeatingChars(input) {
//     let result = input[0];
//     for (const currentChar of input) {
//       const previousChar = result[result.length - 1];
//       if (currentChar !== previousChar) {
//         result += currentChar;
//       }
//     }
//     return result;
//   }
  replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');