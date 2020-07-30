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
const getItemsString = function (array) {
  // Write code under this line
  let result = '';
  for (let i = 0; i < array.length; i += 1) {
    result += `${i + 1} - ${array[i]}\n`;
  }
  return result;
};
console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
console.log(getItemsString([5, 10, 15]));
console.log(getItemsString([]));
// ***************************************************************************
//Exercise 2 *****************************************************************
