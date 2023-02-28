// function upperCaseSplitter(text) {
//     let result = [];
//     let index = 1;
//     while (text.length > 0) {
//         const char = text[index];
//         if ((char && char.charCodeAt() >= 65 && char.charCodeAt() <= 90) || typeof char == 'undefined') {
//             const word = text.substring(0, index);
//             text = text.replace(word, '');
//             result.push(word);
//             index = 1;
//         } else {
//             index++;
//         }
//     }
//     console.log(result.join(', '));
// }
function upperCaseSplitter(text) {
    const result = [];
    let startIndex = 0;
    for (let i = 1; i < text.length; i++) {
      const char = text[i];
      if (char === char.toUpperCase()) {
        const word = text.substring(startIndex, i);
        result.push(word);
        startIndex = i;
      }
    }
    result.push(text.substring(startIndex));
    console.log(result.join(', '));
  }  
upperCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');  