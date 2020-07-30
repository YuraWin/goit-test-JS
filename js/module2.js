// Exercise 1 var 1*******************************************
// const getItemsString = function (array) {
//   // Write code under this line
//   const result = Array.from(array);
//   for (let i = 0; i < result.length; i += 1) {
//     result[i] = `${i + 1}-` + result[i];
//   }
//   return console.log(result.join('\n'));
// };
// getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

// Exercise 1 ***Variant 2 COMPLETE*****************************************
// const getItemsString = function (array) {
//   // Write code under this line
//   let result = '';
//   for (let i = 0; i < array.length; i += 1) {
//     result += `${i + 1} - ${array[i]}\n`;
//   }
//   return result;
// };
// console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
// console.log(getItemsString([5, 10, 15]));
// console.log(getItemsString([]));
// ***************************************************************************
//Exercise 2 *****************************************************************

// const calculateEngravingPrice = (message = '', pricePerWord = 0) =>
//   message.split(' ').length * pricePerWord; // Write code in this line

// console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80

//*********************************************************** */
// Exercise 3**************************************************
// function findLongestWord(string = '') {
//   const words = string.split(' ');
//   let maxWord = words[0];

//   for (let i = 0; i < words.length; i += 1) {
//     if (words[i].length > maxWord.length) {
//       maxWord = words[i];
//     }
//   }
//   return maxWord;
// }

//console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

// Exercise 4**************************************************
