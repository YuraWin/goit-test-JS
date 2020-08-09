// *Exercise 1******************************************

// let message = '';
// const user = {
//   age: 20,
//   hobby: 'html',
//   name: 'Mango',
//   premium: true,
// };

// user.mood = 'happy';
// user['full time'] = true;
// user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user);
// for (const key of keys) {
//   message += `${key} : ${user[key]}\n`;
// }
// console.log(message);
// console.table(user);
// ***********************************************************************
// Exercise 2***********************************************************************
// const countProps = function (obj) {
//   'use strict';
//   // Write code under this line
//   return Object.keys(obj).length;
// };

// console.log(countProps({ a: 1, b: 1, c: 1, d: 1, e: 1 })); // 5

// ***********************************************************************
// Exercise 3***********************************************************************

// const findBestEmployee = function (employees) {
//   // Write code under this line
//   'use strict';
//   const entries = Object.entries(employees);
//   let maxScore = 0;
//   let nameWorker = '';
//   for (const entry of entries) {
//     if (maxScore < entry[1]) {
//       nameWorker = entry[0];
//       maxScore = entry[1];
//     }
//   }
//   return nameWorker;
// };

// // Объекты и ожидаемый результат
// const developers = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99,
// };
// console.log(findBestEmployee(developers));
// // 'lorence'

// ***********************************************************************
// Exercise 4***********************************************************************

// const countTotalSalary = function (employees) {
//   'use strict';
//   // Write code under this line
//   let totalProfit = 0;
//   for (const key in employees) {
//     totalProfit += employees[key];
//   }
//   return totalProfit;
// };

// // Объекты и ожидаемый результат
// const developers = {
//   mango: 300,
//   poly: 250,
//   alfred: 450,
// };
// console.log(countTotalSalary(developers));
// // 1000

// ***********************************************************************
// Exercise 5***********************************************************************

// function getAllPropValues(array, prop) {
//   'use str0ict';
//   const arrayProp = [];
//   for (const obj of array) {
//     // console.log(element[prop]);
//     if (prop in obj) {
//       arrayProp.push(obj[prop]);
//     }
//   }
//   return arrayProp;
// }

// // Объекты и ожидаемый результат
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Радар', price: 1280, quantity: 2 },
//   { name: 'Радар', price: 1320, quantity: 1 },
//   { name: 'Сканер', price: 2700, quantity: 1 },
//   { name: 'Сканер', price: 2500, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// console.log(getAllPropValues(products, 'name'));
// // ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']

// ***********************************************************************
// Exercise 6***********************************************************************

// function calculateTotalPrice(array, prop) {
//   'use strict';
//   let totalPriceProduct = 0;
//   let arrayProductName = [];

//   for (const obj of array) {
//     arrayProductName.push(obj.name);
//     if (obj.name === prop) {
//       totalPriceProduct += obj.price * obj.quantity;
//     }
//   }
//   if (!arrayProductName.includes(prop)) {
//     console.log(`Указанного продукта ${prop} нет в наличии.`);
//   }
//   return totalPriceProduct;
// }

// // Объекты и ожидаемый результат
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Радар', price: 1280, quantity: 2 },
//   { name: 'Радар', price: 1320, quantity: 1 },
//   { name: 'Сканер', price: 2700, quantity: 1 },
//   { name: 'Сканер', price: 2500, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// console.log(calculateTotalPrice(products, 'Радар'));
// // 9080

// console.log(calculateTotalPrice(products, 'aДроид'));
// // 2800
