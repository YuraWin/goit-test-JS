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
// function formatString(string, maxLength = 40) {
//   if (string.length <= maxLength) {
//     return string;
//   }
//   const arrayString = string.split('');
//   return arrayString.splice(0, maxLength).join('') + '...';
// }

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// 'Vestibulum facilisis, purus nec pulvinar...'

// ****************************************************************
// Exercise 5****************************************************************
// function checkForSpam(str) {
//   return str.toLowerCase().includes('spam') || str.toLowerCase().includes('sale');
// }

// console.log(checkForSpam('Latest technology news')); // false

// ****************************************************************
// Exercise 6****************************************************************

// function mapArray(array) {
//   const numbers = new Array(array.length);
//   for (let i = 0; i < array.length; i += 1) {
//     numbers[i] = array[i] * 10;
//   }
//   return numbers;
// }
// console.log(mapArray([-2, 0, 2]));
// ****************************************************************
// Exercise 7****************************************************************
// function filterArray(array) {
//   const numbers = [];
//   for (let i = 0; i < array.length; i += 1) {
//     // Write code under this line
//     if (Number.isFinite(array[i])) {
//       numbers.push(array[i]);
//     }
//   }
//   return numbers;
// }

// console.log(filterArray([-2, 0, 2]));

// ****************************************************************
// Exercise 8***Variant 1*************************************************************
// function reduceArray(array) {
//   let total = 0;

//   if (array.length !== 0) {
//     for (const item of array) {
//       total += item;
//     }
//   }

//   return total;
// }

// console.log(reduceArray([1, 2, 2.5]));

// ****************************************************************
// Exercise 9***Variant 1*************************************************************
// function isLoginValid(login, min = 4, max = 16) {
//   if (login.length >= min && login.length <= max) {
//     return true;
//   }
//   return false;
// }

// function isLoginUnique(allLogins, login) {
//   return !allLogins.includes(login);
// }

// function addLogin(allLogins, login) {
//   const SUCCESS = 'Логин успешно добавлен!';
//   const REFUSAL = 'Такой логин уже используется!';
//   const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
//   let message;

//   if (!isLoginValid(login)) {
//     return ERROR;
//   }

//   if (!isLoginUnique(allLogins, login)) {
//     return REFUSAL;
//   }

//   allLogins.push(login);
//   return SUCCESS;
// }

// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
// console.log(addLogin(logins, 'Ajax'));

//******************************************************** */
