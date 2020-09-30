'use strict';
// console.log(5 && false && "hello");

// console.log(0 || 8 || true);
// alert('before');

// const shouldRenew = confirm('Хотите продлить подписку?');
// console.log(shouldRenew);

// let quantity = prompt('Введите значение');
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);

// let elementWidth = '89.231px';
// const result = Number.parseInt(elementWidth);
// console.log(result);
// console.log(elementWidth);

// const result2 = Number.parseFloat(elementWidth);
// console.log(result2);

// const salary = 1258.256587;
// console.log(Number(salary.toFixed(3)));
// console.log(salary.toFixed());
// *******************
// const base = 3;
// const power = 3;

// console.log(Math.pow(base, power));

// console.log(2 ** 2);
// console.log(Math.sqrt(9));
// ****************************
// Example

// let base = prompt('Давай число');
// base = Number(base);
// console.log('Число', base);

// let power = prompt('Давай степень');
// power = Number(power);
// console.log('Степень', power);

// const result = base ** power;
// console.log('Результат', result);

// *****************************

// const min = 10;
// const max = 30;
// let result = Math.round(Math.random() * (max - min) + min);
// console.log(result);

// ***********************************
// const colors = ['tomato', 'teal', 'black', 'green', 'blue'];
// const max = colors.length - 1;
// const min = 0;

// const index = Math.round(Math.random() * (max - min) + min);
// const color = colors[index];
// console.log(color);
// document.body.style.backgroundColor = color;

// **********************************************
// const message = 'Привет всем  джунам !!!';
// console.log(message.length);

// const firstName = 'Yuriy';
// const lastName = 'Homenko';
// const room = 34;
// const fullName = firstName + ' ' + lastName;
// console.log(fullName);

// console.log(`Гость ${fullName} поселяетcя в комнате ${room}`);

// ***************************************************
// let brand = 'SaMsUnG';
// console.log(brand);
// brand = brand[0] + brand.slice(1).toLowerCase();
// console.log(brand);
// ******************************************************

// const blackWord1 = 'спам';

// const string1 = 'Сегодня нам попался Спам и это опастность.';
// console.log(string1.toLowerCase().includes(blackWord1));
// let result = string1.toLowerCase().length;
// console.log(result);
// **********************************************************

// console.log(0 || false || '' || undefined);

//**************************************** */
// const x1 = 10;
// const x2 = 25;
// const number = 15;

// console.log(`Число ${number} попадает в отрезок до ${x1}`, number < x1);

// console.log(`Число ${number} попадает в отрезок больше ${x2}`, number > x1);

// console.log(
//   `Число ${number} попадает в отрезок больше ${x1} и меньше ${x2}`,
//   number > x1 && number < x2,
// );
//******************************************* */

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log('Можно открыть чат?', canOpenChat);

//******************************************** */

// const balance = 100;
// let message;
// let message2;

// if (balance >= 0) {
//   message = 'Позитивный баланс';
// } else {
//   message = 'Негативный баланс';
// }
// console.log(message);

// console.log((message = balance > 0 ? 'Позитив' : 'Негатив'));

// *****Задача 1********************************************

// let balance = 10000;
// const payment = 2000;

// console.log(
//   `Общая стоимость заказа ${payment}  кредитов. Проверяем кол-во доступных средств на счету`,
// );
// if (payment <= balance) {
//   balance = balance - payment;
//   console.log(`Насчету осталось ${balance} кредитов`);
// } else {
//   console.log(`На счету недостаточно средств для проведения операции!`);
// }
// console.log('Операция завершена');

//Конспект Модуль 1
// console.log('JavaScript is awesome'.length);

// console.log('JavaScript is awesome'.toUpperCase());

// // undefined
// let a;
// console.log(typeof a); // "undefined"

// // null
// const b = null;
// console.log(typeof null); // "object"

// // Number
// const c = 5;
// console.log(typeof c); // "number"

// // String
// const d = 'JavaScript is awesome!';
// console.log(typeof d); // "string"

// // Boolean
// const e = false;
// console.log(typeof e); // "boolean"

// const message = 'Привет ребята!!!';
// alert(message);

/*
 * Просим клиента подтвердить бронь на отель
 * и сохраняем в переменную результат работы confirm
 */
// const isComing = confirm('Please confirm hotel reservation');
// console.log(isComing);

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter <= maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// let password = '';

// do {
//   password = prompt('Введите пароль длиннее 4-х символов', '');
// } while (password.length < 5);

// console.log('Ввели пароль: ', password);

// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log('Нечетное i: ', i); // 1, 3, 5, 7, 9
// }

//Module 2 Massiv

// const clients = ['Mango', 'Ajax', 'Poly'];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log('Logging clients: ', clients[i]);
// }

// Итерация по массиву
// const clients = ['Mango', 'Ajax', 'Poly'];

// for (const client of clients) {
//   console.log(client);
//   console.log(clients);
// }

// // Итерация по строке
// const string = 'javascript';

// for (const character of string) {
//   console.log(character);
// }

/*
 * Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
 * и управление передаётся на следующую итерацию.
 */
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }
//************************************************* */
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let total = 0;

// for (let i = 0; i < matrix.length; i += 1) {
//   console.log(`Подмассив матрицы matrix[${i}]: `, matrix[i]);

//   for (let j = 0; j < matrix[i].length; j += 1) {
//     console.log('Элемент подмассива матрицы matrix[i][j]: ', matrix[i][j]);
//     total += matrix[i][j];
//   }
// }
// console.log(total); // 45
//******************************************* */
// let total2 = 0;

// for (const elementMatrix of matrix) {
//   //   console.log(elementMatrix);
//   for (const underElementMatrix of elementMatrix) {
//     console.log(underElementMatrix);
//     total2 += underElementMatrix;
//   }
// }
// console.log(total2);

// console.log(matrix[0][2]);

// const numbers = [];

// for (let i = 0; i < 3; i += 1) {
//   numbers.push(`label-${i}`);
// }

// console.log('numbers: ', numbers); // ['label-0', 'label-1', 'label-2']

// for (const number of numbers) {
//   console.log(number);
// }

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];

// // Вернет новый массив в котором будут элементы с индексами от 1 до 2
// //console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]

// // Вернет новый массив в котором будут
// // элементы с индексами от 1 до (clients.length - 1)
// console.log(clients.slice(1)); // ["Ajax", "Poly", "Kiwi"]
// console.log(clients.length);

// Вернет копию исходного массива
//console.log(clients.slice()); // ["Mango", Ajax", "Poly", "Kiwi"]

// Вернет новый массив состоящих из последних двух элементом исходного
//console.log(clients.slice(-2)); // ["Poly", "Kiwi"]

//Массивы
// const array = ['qwerty', 1, true];

// for (const element of array) {
//   console.log(typeof element);
// }

// for (let i = 0; i < array.length; i += 1) {
//   console.log(typeof array[i]);
//   console.log(`номер итерации ${i}`);
// }
// console.log(array.length);

// for (let i = array.length - 1; i + 1 !== 0; i -= 1) {
//   console.log(array[i]);
//   console.log(`номер итерации ${i}`);
// }

//**************************** */
// const array = ['qwerty', 1, true];

// array[3] = 'Alex';
// console.log(array);
// array.length = 6;
// console.log(array);
// array[4] = true;
// console.log(array);

// for (let i = 0; i < 3; i += 1) {
//   array.push(`text-${i}`);
// }
// console.log(array);

//************************* */

// const clients = ['Mango', 'Poly', 'Ajax'];
// const clientNameToFind = '9Poly';
// let message = 'Клиента с таким именем нету в базе данных!';

// for (const client of clients) {
//   /*
//    * На каждой итерации мы будем проверять совпадает ли элемент массива с
//    * именем клиента. Если совпадает то мы записываем в message сообщение
//    * об успехе и делаем break чтобы не искать дальше
//    */

//   if (client === clientNameToFind) {
//     message = 'Клиент с таким именем есть в базе данных!';
//     break;
//   }

//   // Если они не совпадают то запишем в resultMsg сообщeние об отсутсвии имени
//   // message = 'Клиента с таким именем нету в базе данных!';
// }

// console.log(message);
// console.table(clients);

// const string = clients.join(' ');
// console.log(string);

// const array = string.split(' ');
// console.table(array);

// ***********************************

// const clients = ['Mango', 'Poly', 'Ajax'];
// const clientNameToFind = 'Poly';
// let message;
//= 'Клиента с таким именем нету в базе данных!';
//message = 'Клиент с таким именем есть в базе данных!';
// message = clients.includes(clientNameToFind)
//   ? `Клиент с таким именем (${clientNameToFind}) есть в базе данных!`
//   : `Клиента с таким именем (${clientNameToFind}) нету в базе данных!`;
// console.log(message);
// console.log((message = balance > 0 ? 'Позитив' : 'Негатив'));

// const index = clients.indexOf(clientNameToFind);
// message =
//   index !== -1
//     ? `Клиент с таким именем (${clientNameToFind}) на позиции ${index} есть в базе данных!`
//     : `Клиента с таким именем (${clientNameToFind}) нету в базе данных!`;
// console.log(message);

// let length = clients.push('Nikolay', 'Ivan', 'Petro');
// console.table(clients);
// console.log(` ${length} - элементов в массиве`);

// console.log(`Удалена запись - (${clients.pop()}) в массиве`);
// console.table(clients);

// let j = clients.length;
// for (let i = 0; i < j; i += 1) {
//   clients.pop();
//   console.log(clients);
// }
// console.log(j);
//******************************** */

// const array = ['Mango', 'Kiwi', 'Lime'];

// console.log(array);
// console.log(`Удалена запись - ${array.shift(2)}`);
// console.log(array);

// array.unshift('Orange', 'Potato');
// console.log(array);

// *************************

// const array = ['Mango', 'Kiwi', 'Lime', 'Orange', 'Potato'];

// const array2 = array;

// const newArray = array.slice();
// const newArray2 = array.slice(2);

// console.log(`array - ${array}`);
// console.log(`array2 - ${array2}`);
// console.log(`newArray - ${newArray}`);
// console.log(`newArray2 - ${newArray2}`);

// newArray.push(array.pop());
// newArray.push(array.pop());

// console.log(`array - ${array}`);
// console.log(`array2 - ${array2}`);
// console.log(`newArray - ${newArray}`);
// console.log(`newArray2 - ${newArray2}`);

// *********************************
// const score = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(`Действие splice метода удаления элементов - ${score.splice(5)}`);

// console.table(`Результат массива ${score}`);
// // *************************************
// const score2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(
//   `Действие splice метода вставки элементов - ${score2.splice(5, 0, 'Ivan', 'Serg', 'Vasil')}`,
// );

// console.table(`Результат массива ${score2}`);
// // *********************************************
// const score3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(
//   `Действие splice метода вставки элементов - ${score3.splice(6, 3, 'Ivan', 'Serg', 'Vasil')}`,
// );

// console.table(`Результат массива ${score3}`);

// // *****************************************

// const array1 = ['Mango', 'tomato', 'potato', 'cherry'];
// const array2 = ['dog', 'cat', 'pitbull', 'horse'];
// const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const allArray = array1.concat(array2, array3);
// console.table(allArray);
// ****************************************************

// a, b, c это параметры
// const add = function (a, b, c) {
//   console.log(`Переменная ${a}, тип переменной (${typeof a})`);
//   console.log(`Переменная ${b}, тип переменной (${typeof b})`);
//   console.log(`Переменная ${c}, тип переменной (${typeof c})`);

//   return a + b + c;
// };

// // 1, 2, 3 это аргументы
// const result = add(1, 2, 3);
// console.log(result); // 6

// const count = function (countFrom = 0, countTo = 10, step = 1) {
//   console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i);
//   }
// };

// count(1, 5); // countFrom = 1, countTo = 5, step = 1
// count(2); // countFrom = 2, countTo = 10, step = 1
// count(undefined, 5, 2); // countFrom = 0, countTo = 5, step = 2
// count(0, 4, 2, 45, 67); // countFrom = 0, countTo = 10, step = 1

// const withdraw = function (amount, balance) {
//   if (amount === 0) {
//     console.log('Для проведения операции введите сумму больше нуля.');
//   } else if (amount > balance) {
//     console.log('Недостаточно средств на счету.');
//   } else {
//     console.log('Операция снятия средств проведена.');
//   }
//   return amount + balance;
// };

// withdraw(10, 300); // Для проведения операции введите сумму больше нуля.
// withdraw(500, 300); // Недостаточно средств на счету.
// //withdraw(100, 300); // Операция снятия средств проведена.
// console.log(withdraw(500, 300));

// ************************************************
// const drop = function () {
//   let total = 0;

//   for (const argument of arguments) {
//     total += argument;
//   }
//   return total;
// };

// console.log(drop(1, 2, 5, 89, 6, 3));
// *************************************************

// const fn = function () {
//   console.log(arguments);
//   const args = Array.from(arguments).slice(2);
//   return console.table(args);
// };

// const fn2 = function (...args2) {
//   return console.log(args2);
// };

// fn(454, 'иванов', 879, 'петров', true);
// fn2(1, 2, 3, 4, 5, 6, 7);

//****************************************** */

// const add = (a, b, c, d) => {
//   return a * b * c * d;
// };

// console.log(add(1, 2, 3, 4));

// const fun = x => {
//   return console.table(x.split(' '));
// };

// fun('ываыв ыва ва ыва sf  ыва  ыва  ва  fsf ыва ');
// *********************************************

// const print = () => 5 + 6 + 8;
// // print();

// console.log(print());

// Module 3  Object**********************************************

// const hotel = {};
// let name = 'Indistructable';

// hotel['name'] = 'Hotel California';
// hotel.star = 5;
// hotel.roomCount = 150;

// console.log(hotel);

// hotel['roomCount'] += 3;

// console.log(hotel);

// delete hotel['star'];
// console.log(hotel);
// console.log(hotel.pool);
//******************************************** */
// let duration = 180;
// let style = ['pop', 'jaz', 'soul', 'punk', 'rock'];

// const song = {
//   duration,
//   style,
//   star: 10,
// };
// console.log(song);
// ********************************************
// const key = 'person';
// const object = {};
// const title = 'name';
// const count = 25;

// object[key] = 'Mango';
// console.log(object); //

// object[title] = 'vasil';

// console.log(object);

// object[title] = 'Petro';

// object[count] = 100;

// console.log(object);
// *******************************************

// const key = 'person';
// const getKey = function (name) {
//   return name;
// };

// // Computed properties
// const object = {
//   [key]: 'Mango',
//   [getKey('age')]: 2,
//   [getKey('Old_school')]: 50,
//   printName() {
//     console.log('Take print');

//     },
// };

// console.log(object); // {person: 'Mango', age: 2}

// object[getKey('Old_school')] = 100;
// console.log(object);

// object.printName();

// // ********************************************************
// const object = {
//   key: 20,
//   title: 'Google',
//   masiv: [10, 20, 30, 40],
//   changeTitle(name) {
//     this.title = name;
//   },
// };

// console.log(object);

// object.changeTitle('Rambler');

// console.log(object);

// for (const part in object) {
//   //console.log('Key', part);
//   // console.log('Value', object[part]);
//   console.log(`${part} : ${object[part]}`);
// }
// **************************************************************

// const objHotel = {
//   name: 'Hilton',
//   capacity: 100,
//   stars: 5,
// };

// console.log(Object.keys(objHotel));
// console.log(Object.values(objHotel));
// console.log(Object.entries(objHotel));

// for (const key of Object.entries(objHotel)) {
//   console.log('Ключ объекта со значением', key);
//   for (const item of key) {
//     console.log(item);
//   }
// }

// for (const entries of Object.entries(objHotel)) {
//   console.log(`${entries[0]}: ${entries[1]}`);
// }
// **************************************************

// const tray = {
//   apple: 5,
//   orange: 34,
//   potato: 20,
//   tomato: 10,
// };
// let total = 0;

// for (const values of Object.values(tray)) {
//   total += values;
// }
// console.log('Кол-во продуктов :', total);
// // ******************************************************
// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// const keys = Object.keys(hotel); // ["name", "stars", "capacity"]

// for (const key of keys) {
//   console.log('Value: ', hotel[key]);
// }

// for (const key in hotel) {
//   console.log(`${key}: ${hotel[key]}`);
// }
// ************************************************************

// const array = [23, 4, 5, 78, 2, 1, 25, 78, 45];

// console.log(Math.min(...array));

// const house = ['Iren', 'Nikolay', 'Petro', 'Semen'];
// const copyHouse = [...house, 'Sandra', ...house];
// console.log(house);
// console.log(copyHouse);
// console.log(house === copyHouse);

// const exHouse = [...copyHouse.slice(0, 2), ...copyHouse.slice(4, 5)];
// console.log(exHouse);
// ****************************************************************
// const a = { x: 1, y: 2 };
// const b = { x: 'hi', z: 3 };

// const c = Object.assign({ f: 4, r: 8 }, a, b);
// console.log(c); // {x: 0, y: 2, z: 3}

// // То же самое используя операцию spread
// const d = { ...a, ...b };

// console.log(d); // {x: 0, y: 2, z: 3}

// *****************************************************************
// const add = function (oneNumber, ...args) {
//   console.log(args); // массив всех аргументов
//   console.log(oneNumber); // массив всех аргументов
//   //console.log(arguments);
// };
// add(1, 2, 3);
// add(1, 2, 3, 4, 5);
// ******************************************************************
// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// // Объявим переменные и присвоим им значения из объекта
// const { name: hotelName = '', stars = 3, status = 'empty' } = hotel;

// console.log(hotelName, stars, status); // "Resort Hotel", 5, undefined
// ********************************************************************

// const playlist = {
//   name: 'Song',
//   duration: 120,
//   stars: 5,
// };

// const { name, ...rest } = playlist;
// console.log(name);
// console.log(rest);
// console.log(rest.stars);
// console.log(rest['duration']);
// ********************************************************************

// const array = [11, 22, 333, 4444];

// const [val1, val2, val3, val4] = array;
// console.log(val1, val2, val3, val4);

// const [val, ...rest] = array;
// console.log(rest);
// rest[0] = 100;
// console.log(rest);
// console.log(array);

// const [, , , four] = array;
// console.log(four);

// **************************************

//Module 4*****************************************

// const printMessage = function (message) {
//   console.log(message);
// };

// const higherOrderFunction = function (callback) {
//   const string = 'HOCs are awesome';
//   callback(string);
// };

// higherOrderFunction(printMessage);

// printName('Yuriy');

// function printName(name) {
//   console.log(name);
// }

// const usePrintName = function (useFunction) {
//   const string = 'Andrey';
//   useFunction(string);
// };
// usePrintName(printName);
// ********************************
// const print = function (string) {
//   console.log('Value:', string);
// };

// const repeatLog = function (n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// };

// repeatLog(6, print);
// **********************************
// const repeat = function (n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// };

// const labels = [];

// const value = value => {
//   labels.push(`Label ${value + 1}`);
// };
// repeat(5, value);

// console.log(labels); // ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"]
// // *********************************

// const filter = function (array, test) {
//   const filteredElements = [];

//   for (const element of array) {
//     const passed = test(element);

//     if (passed) {
//       filteredElements.push(element);
//     }
//   }

//   return filteredElements;
// };

// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];

// const freshFruits = filter(fruits, fruit => fruit.isFresh);
// console.table(freshFruits);

// const fruitsWithQuantity = filter(fruits, fruit => fruit.quantity >= 120);
// console.table(fruitsWithQuantity);
// *************************************

// const createCounter = function () {
//   /*
//    * Локальная переменная privateValue доступна только в замыкании.
//    * Получить к ней доступ во внешнем коде невозможно.
//    */
//   let privateValue = 0;

//   const increment = function () {
//     privateValue += 1;
//     console.log(privateValue);
//   };

//   return { increment };
// };

// const counterA = createCounter();
// counterA.increment(); // 1
// counterA.increment(); // 2

// const counterB = createCounter();
// counterB.increment(); // 1
// counterB.increment(); // 2
// counterB.increment(); // 3
// ******************************************
// const makeShef = function (name) {
//   return function makeDish(dish) {
//     console.log(`${name} is coking ${dish}`);
//   };
// };

// const mango = makeShef('Mango');
// mango('tomato');
// mango('orange');

// const alli = makeShef('Alli');
// alli('cofe');
// mango('apple');
// **************************************************
// const petya = {
//   name: 'Petya',
//   showName() {
//     console.log(this.name);
//   },
// };
// petya.showName();

// function fn() {
//   console.log(this);
// }

// fn();
// *****************************
// const petya = {
//   name: 'Petya',
//   showThis() {
//     console.log(this);
//   },
//   showName() {
//     console.log(this.name);
//   },
// };

// petya.showThis();
// petya.showName();
// // **************************
// function showThis() {
//   console.log('this in showThis: ', this);
// }

// showThis();

// const user = { name: 'Mango' };
// user.showContext = showThis;

// user.showContext();
// *********************************************
// const hotel = {
//   name: 'Resort Hotel',
//   showThis() {
//     console.log(this);
//   },
// };

// const fn = function (callback) {
//   callback();
// };

// fn(hotel.showThis);
// ****************************
// const hotel = {
//   name: 'Resort Hotel',
//   showThis() {
//     const fn = () => {
//       console.log('this in fn: ', this);
//     };

//     fn();
//     console.log('this in showThis: ', this);
//   },
// };

// hotel.showThis();
// ********************************************
// const greet = function () {
//   return `Wellcome to ${this.name} hotel!`;
// };
// const hotel = { name: 'Resort Hotel' };

// console.log(greet.call(hotel));
// console.log(greet.apply(hotel));

// ******************
// const greet = function (guest, stars) {
//   return `${guest}, welcome to ${stars} -star ${this.name}!`;
// };

// const hotel = { name: 'Resors Hotel' };
// const motel = { name: 'Sunlight Motel' };

// console.log(greet.call(hotel, 'Mango', 5));
// console.log(greet.call(motel, 'Poly', 4));
// ***************************************

// const greet = function (guest, stars) {
//   return `${guest}, welcome to ${stars}-star ${this.name}!`;
// };

// const hotel = { name: 'Resort Hotel' };
// const motel = { name: 'Sunlight Motel' };

// console.log(greet.apply(hotel, ['Mango', 5]));
// console.log(greet.apply(motel, ['Poly', 4]));
// ??????????????????????????********************
// const greet = function (guest) {
//   return `${guest}, welcome to ${this.name}!`;
// };

// const hotel = { name: 'Resort Hotel' };

// const hotelGreeter = greet.bind(hotel, 'Mango');

// console.log(hotelGreeter());
//*??????????????????????????????????????? */
// const hotel = {
//   name: 'Resort Hotel',
//   showThis() {
//     console.log(this);
//   },
// };

// const fn = function (callback) {
//   callback();
// };

// fn(hotel.showThis.bind(hotel));
// ******??????????????????????

//Module 5****************************************
// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//   return baseSalary + overtime * rate;
// };
// console.log(getWage(baseSalary, overtime, rate));

// // *****************************
// const employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 20,
//   getWage() {
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };
// console.log(employee.getWage());
// ***********************************
// const Hotel = function (name, stars, capacity) {
//   this.name = name;
//   this.stars = stars;
//   this.capacity = capacity;
// };
// const hotel = new Hotel('Resort Hotel', 5, 100);
// console.log(hotel);
// const motel = new Hotel('Motel', 1, 50);
// console.log(motel);
// console.log(hotel);
// // *************************************
// const Hotel = function (name, stars, capacity) {
//   this.name = name;
//   this.stars = stars;
//   this.capacity = capacity;
//   this.guestCount = 0;

//   this.greet = function (guestName) {
//     console.log(`Hello ${guestName}, wellcome to ${this.name}`);
//   };

//   this.addGuests = function (amount) {
//     this.guestCount += amount;
//   };
//   this.removeGuests = function (amount) {
//     this.guestsCount -= amount;
//   };
// };

// const hotel = new Hotel('Sunrise Hotel', 5, 100);

// console.log(hotel);
// hotel.greet('Mango');
// hotel.addGuests(55);
// console.log(hotel);
// // ************************************
// const mango = {
//   name: 'Mango',
//   sales: 5,
//   sell(product) {
//     this.sales += 1;
//     return `Manager ${this.name} sold ${product}.`;
//   },
// };

// console.log(mango.sales);
// console.log(mango.sell('TV'));
// console.log(mango.sell('Microwave'));
// console.log(mango.sales);

// const poly = {
//   name: 'Poly',
//   sales: 10,
//   sell(product) {
//     this.sales += 1;
//     return `Manager ${this.nsme} sold ${product}.`;
//   },
// };

// console.log(poly.sales);
// console.log(poly.sell('TV'));
// console.log(poly.sell('Microwave'));
// console.log(poly.sales);
// ***************************

// const Manager = function (name = 'manager', sales = 0) {
//   this.name = name;
//   this.sales = sales;

//   this.sell = function (product) {
//     this.sales += 1;
//     return `Manager ${this.name} sold ${product}.`;
//   };
// };

// const mango = new Manager('Mango', 5);
// console.log(mango.sales);
// console.log(mango.sell('TV'));
// console.log(mango.sell('Microwave'));
// console.log(mango.sales);

// const petro = new Manager('Petro', 10);
// console.log(petro.sales);
// console.log(petro.sell('PSP'));
// console.log(petro.sell('TV-box'));
// console.log(petro.sales);

// const pusto = new Manager();
// console.log(pusto);
// ********************************

// const animal = { eats: true };
// const dog = { barks: true, eats: false };

// dog.__proto__ = animal;

// console.log(dog.barks);
// console.log(dog.eats);
// ****************************************

// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;

// for (const key in dog) {
//   if (dog.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }

// const dogKeys = Object.keys(dog);
// console.log(dogKeys);
// *****************************
// const Guest = function (name, room) {
//   this.name = name;
//   this.room = room;
// };

// const mango = new Guest('Mango', 28);
// console.log(mango);

// Guest.prototype.showGuestInfo = function () {
//   console.log(`name: ${this.name}, room: ${this.room}`);
// };

// const poly = new Guest('Poly', 36);

// mango.showGuestInfo();
// poly.showGuestInfo();
// ****************************

// const Hero = function (name, xp) {
//   this.name = name;
//   this.xp = xp;
// };

// Hero.prototype.gainXp = function (amount) {
//   console.log(`${this.name} gained ${amount} experience poins`);
//   this.xp += amount;
// };

// const mango = new Hero('Mango', 1000);
// // console.log(mango);

// // mango.gainXp(500);
// // console.log(mango);

// const Warrior = function (name, xp, weapon) {
//   Hero.call(this, name, xp);
//   this.weapon = weapon;
// };

// Warrior.prototype.attack = function () {
//   console.log(`${this.name} attacks with ${this.weapon}`);
// };

// const poly = new Warrior('Poly', 200, 'sword');

// console.log(poly);
// poly.attack();

// Warrior.prototype = Object.create(Hero.prototype);
// // console.log(poly);
// console.log(Warrior.prototype);

// Warrior.prototype.constructor = Warrior;
// console.log(Warrior.prototype.constructor);

// console.log(poly);
// poly.gainXp(300);

/*
 * Используем Object.create() для того чтобы изначально записать
 * в Warrior.prototype пустой объект, в __proto__ которого будет
 * ссылка на Hero.prototype. Это необходимо сделать до того
 * как добавлять методы
 */
// ??????????????????????????????/
// Warrior.prototype = Object.create(Hero.prototype);

// // Не забываем добавить в Warrior.prototype свойство constructor
// Warrior.prototype.constructor = Warrior;

// // Добавим метод для атаки
// Warrior.prototype.attack = function () {
//   console.log(`${this.name} attacks with ${this.weapon}`);
// };

// // Попробуем теперь
// poly.gainXp(300); // Poly gained 300 experience points
// ??????????????????????????????

// const Hero = function (name, xp) {
//   this.name = name;
//   this.xp = xp;
// };

// Hero.prototype.gainXP = function (amount) {
//   console.log(`${this.name} gained ${amount} experience points`);
//   this.xp += amount;
// };

// const Warrior = function (name, xp, weapon) {
//   Hero.call(this, name, xp);
//   this.weapon = weapon;
// };

// Warrior.prototype = Object.create(Hero.prototype);
// // Warrior.prototype.constructor = Warrior;

// Warrior.prototype.attack = function () {
//   console.log(`${this.name} attacks with ${this.weapon}`);
// };

// const poly = new Warrior('Poly', 200, 'sword');
// poly.attack();
// console.log(poly);
// poly.gainXP(500);
// console.log(poly);
//*************************************************** */
// class Guest {
//   constructor(name, roomNumber) {
//     this.name = name;
//     this.roomNumber = roomNumber;
//   }

//   getFullInfo() {
//     console.log(`
//     Guest ${this.name}
//     Room number ${this.roomNumber}
//     `);
//   }
// }
// const mango = new Guest('Mango', 32);
// console.log(mango);
// mango.getFullInfo();

// console.log(mango instanceof Guest);
// console.log(mango instanceof Object);
// ******************************
// class Guest {
//   constructor(name, roomNumber) {
//     this._name = name;
//     this._roomNumber = roomNumber;
//   }
//   get name() {
//     return this._name;
//   }

//   set name(value) {
//     this._name = value;
//   }

//   getInfo() {
//     console.log(this);
//   }
// }

// const mango = new Guest('Mango', 26);
// console.log(mango);

// console.log(mango.name);

// mango.name = 'Mango the Fluffy';
// console.log(mango.name);
// mango.getInfo();
// const poly = new Guest('Poly', 44);
// poly.getInfo();
// console.log(poly.name);
// **************************
// class Calc {
//   constructor() {}

//   static get PI() {
//     return 3.1415926;
//   }
//   static add(...args) {
//     return args.reduce((acc, next) => acc + next, 0);
//   }
//   static mult(...args) {
//     return args.reduce((acc, next) => acc * next, 1);
//   }
// }

// console.log(Calc.PI);
// console.log(Calc.add(2, 3, 4));
// console.log(Calc.mult(12, 3, 4));
// ///////////////////////////////////

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   move() {
//     console.log(`I, ${this.name}, am moving!`);
//   }
// }
// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name);
//     this.breed = breed;
//   }

//   bark() {
//     console.log('woof!');
//   }

//   moveAndMakeSound() {
//     super.move();
//     this.bark();
//   }
// }

// const dog = new Dog('Mango', 'shepherd');
// dog.move();
// dog.bark();
// dog.moveAndMakeSound();

// console.log(dog);

//Module 6************************************

//repeat All for module 2 *************************
// const array = ['mango', 'poly', 'kiwi', 'ajax'];

// for (let i = 0; i < array.length; i += 1) {
//   array[i] += '-1';
// }
// console.log(array);

// const cart = [54, 28, 105, 78, 92, 17, 120];
// let total = 0;

// // for (const el of cart) {
// //   total += el;
// // }

// for (let i = 0; i < cart.length; i += 1) {
//   total += cart[i];
// }
// console.log(total);

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;
// let totalNot2 = 0;
// let totalAll = 0;
// for (const number of numbers) {
//   if (number % 2 === 0) {
//     console.log('Четное число :', number);
//     total += number;
//     continue;
//   }
//   console.log('Нечетное число :', number);
//   totalNot2 += number;
// }
// for (let i = 0; i < numbers.length; i += 1) {
//   totalAll += numbers[i];
// }

// console.log('Сумма всех четных чисел:', total);
// console.log('Сумма всех нечетных чисел:', totalNot2);
// console.log('Сумма всех чисел:', totalAll);

// const logins = ['m4ngoDog', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute4';
// let message = ``;
// for (let i = 0; i < logins.length; i += 1) {
//   if (loginToFind === logins[i]) {
//     message = `Пользователь ${loginToFind} найден`;
//     break;
//   }
//   message = `Пользователь ${loginToFind} не найден `;
// }
// console.log(message);

// for (const login of logins) {
//   if (loginToFind === login) {
//     message = `Пользователь ${loginToFind} найден`;
//     break;
//   }
//   message = `Пользователь ${loginToFind} не найден `;
// }
// console.log(message);

// message = logins.includes(loginToFind)
//   ? `Пользователь ${loginToFind} найден`
//   : `Пользователь ${loginToFind} не найден `;

// console.log(message);

// const numbers = [51, 18, 13, 24, 7, 85, 19];

// // console.log(Math.min(...numbers));
// let minNumber = numbers[0];
// for (const number of numbers) {
//   if (minNumber > number) {
//     minNumber = number;
//   }
// }
// console.log('Наименьшее число массива: ', minNumber);

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = '';
// for (let i = 0; i < friends.length; i += 1) {
//   if (i === friends.length - 1) {
//     string += friends[i];
//   } else {
//     string += friends[i] + ', ';
//   }
// }
// console.log(string);

// for (const friend of friends) {
//   string += friend + ', ';
// }
// console.log((string = string.slice(0, string.length - 2)));

// const str = friends.join(',');
// console.log(str);

// const string = 'JavaScript';
// let invertedString = '';
// const words = string.split('');

// for (let i = 0; i < words.length; i += 1) {
//   words[i] = words[i].toUpperCase() === words[i] ? words[i].toLowerCase() : words[i].toUpperCase();
// }
// console.log(words.join(''));

// for (const word of words) {
//   invertedString += word.toLowerCase() === word ? word.toUpperCase() : word.toLowerCase();
// }
// console.log(invertedString);

// const title = 'Top 10 benefis of React framework';
// const normalizedTitle = title.toLowerCase();

// console.log(normalizedTitle.split(' ').join('-'));

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;
// const sum = [...array1, ...array2];
// for (const item of sum) {
//   total += item;
// }
// console.log(total);
// console.table(sum);

// const cards = ['Карточка-1', 'Карточка-2', 'Карточка-3', 'Карточка-4', 'Карточка-5'];

// const cardToRemove = 'Карточка-3';

//  splice() - деструктивный метод**********************
// cards.splice(cards.indexOf(cardToRemove), 1); //удаление
// console.log(cards);

// const cardToInsert = 'Карточка-6';
// const index = 3;
// cards.splice(index, 0, cardToInsert); //добавление по индексу
// console.log(cards);

// const cardToUpdate = 'Карточка-4';
// const index = 0;

// cards.splice(index, 1, cardToUpdate); // обновление по индексу
// console.log(cards);

// const fnA = function () {
//   console.log('Выполняется функция А');
//   fnB();
// };

// const fnB = function () {
//   console.log('Выполянется функция В');
//   fnC();
// };

// const fnC = function () {
//   console.log('Выполянетсяя функция С');
//   console.log(value);
// };
// fnA();

// const cart = [54, 28, 105, 78, 92, 17, 120];

// const calculateTotalPrice = function (item) {
//   let total = 0;
//   for (const el of item) {
//     total += el;
//   }
//   return total;
// };

// console.log(calculateTotalPrice(cart));

// const logins = ['m4ngoDog', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';

// const findLogin = function (alllogins, login) {
//   let message = ``;
//   message = alllogins.includes(login)
//     ? `Пользallователь ${login} найден`
//     : `Пользователь ${login} не найден `;

//   return console.log(message);
// };

// findLogin(logins, loginToFind);

// const numbers = [51, 18, 13, 24, 7, 85, 19];

// console.log('Наименьшее число в массиве', Math.min(...numbers));

// const findSmallesNumber = function (allnumbers) {
//   let minNumber = allnumbers[0];
//   for (const number of allnumbers) {
//     if (minNumber > number) {
//       minNumber = number;
//     }
//   }
//   return minNumber;
// };
// console.log(findSmallesNumber(numbers));

// const fn = function (...args) {
//   let total = 0;
//   for (const number of args) {
//     total += number;
//   }
//   return total;
// };

// console.log(fn(1, 2, 44, 56, 77, 65, 42));

// const filterNumbers = function (array, ...restNumbers) {
//   const filterArray = [];
//   for (const number of restNumbers) {
//     if (array.includes(number)) {
//       filterArray.push(number);
//     }
//   }
//   return filterArray;
// };

// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
// console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15));
// console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64));

// Занятие 5 *****************************************
// const playlist = {
//   name: 'Мой супер плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,

//   changeName(newName) {
//     this.name = newName;
//   },
//   addTracks(track) {
//     this.tracks.push(track);
//     this.trackCount += 1;
//   },
//   updateRating(upRating) {
//     this.rating = upRating;
//   },
// };
// console.log(playlist);

// playlist.changeName('Новое имя плейлиста');
// playlist.addTracks('трек-4');
// playlist.updateRating(8);

// console.log(playlist);

// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: true },
//   { name: 'Ajax', online: false },
// ];

// console.table(friends);

// const findFriendByName = function (allFriends, name) {
//   for (const friend of allFriends) {
//     if (friend.name === name) {
//       return `Имя ${name} найдено.`;
//     }
//   }
//   return `Имя ${name} не найдено.`;
// };
// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

// const getAllNames = function (allFriends) {
//   const names = [];
//   for (const friend of allFriends) {
//     names.push(friend.name);
//   }
//   return names;
// };
// console.log(getAllNames(friends));

// const getOnlineFriends = function (allfriends) {
//   let friendsOnline = [];
//   for (const friend of allfriends) {
//     if (friend.online) {
//       friendsOnline.push(friend);
//     }
//   }
//   return friendsOnline;
// };
// console.log(getOnlineFriends(friends));

// const getFriendsByOnlineStatus = function (allfriends) {
//   const friendsByStatus = {
//     online: [],
//     offline: [],
//   };
//   for (const friend of allfriends) {
//     if (friend.online) {
//       friendsByStatus.online.push(friend);
//       continue;
//     }
//     friendsByStatus.offline.push(friend);
//   }

//   return friendsByStatus;
// };
// console.log(getFriendsByOnlineStatus(friends));

//

/*
Работаем с коллекцией товаров в корзине:
-getItems(); //возвращает значение массива  объектов items
-add(product); //добавляет продукт в корзину
-remove(productName); // удаляет продукт из корзины по имени товара
-clear(); // очистить корзину товаров
-countTotalPrice(); // общая сумма товаров в корзине 
-increaseQuantity(productName); //увеличить кол-во товаров в корзине
-decreaseQuantity(productName); //уменьшить кол-во товаров в корзине

{ name: '🍎', price: 50 }
{ name: '🍇', price: 70 }
{ name: '🍋', price: 60 }
{ name: '🍓', price: 110 }

*/

// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },

//   add(product) {
//     const { items } = this;

//     for (let i = 0; i < items.length; i += 1) {
//       if (items[i].name === product.name) {
//         items[i].quantity += 1;
//         return;
//       }
//     }

//     const newProduct = { ...product, quantity: 1 };
//     items.push(newProduct);
//   },
//   remove(productName) {
//     const { items } = this;
//     for (let i = 0; i < items.length; i += 1) {
//       const { name } = items[i];
//       //   console.log(this.items[i]);
//       if (name === productName) {
//         items.splice(i, 1);
//       }
//     }
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     const { items } = this;
//     let totalPrice = 0;
//     for (const { price, quantity } of items) {
//       totalPrice += price * quantity;
//     }
//     return totalPrice;
//   },
// };

// // console.table(cart.getItems());

// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍓', price: 110 });

// console.table(cart.getItems());
// console.log(cart.countTotalPrice());
// cart.remove('🍓');
// console.table(cart.getItems());
// // cart.clear();
// console.log(cart);
//******************************************************* */
//******************************************************* */
//******************************************************* */
//******************************************************* */

// const numbers = [1, 2, 3, 4].concat([6, 5, 4], [10, 11, 12]);
// console.log(numbers);
// const numbers = [0, 5, 10, ...[54, 66, 7], 54, 21];
// console.log(numbers);

// const a = { x: 2 };
// const b = { y: 3 };
// const c = { z: 50 };
// Object.assign(c, a, b);
// console.log(c);

// const playlist = {
//   name: 'Мой супер плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
// };

// const { rating, tracks: numberOfTracks = 0, name, trackCount } = playlist;

// console.log(rating);
// console.log(numberOfTracks);
// console.log(name);
// console.log(trackCount);

// console.log(rating, numberOfTracks, name, trackCount);

// const authors = {
//   kiwi: 4,
//   avax: 5,
//   sergy: 6,
//   mango: 8,
// };

// const entries = Object.entries(authors);

// for (const [name, rating] of entries) {
//   // const [name, rating] = entry;
//   console.log(name, rating);
// }

// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const { name, tag, location, ...obj } = profile;
// console.log(obj);

// const fn = function ({ name, tag, location, avatar, stats: { followers, views, likes } }) {
//   console.log(name, tag, location, avatar, followers, views, likes);
// };

// fn(profile);

// const fnA = function (message, callback) {
//   console.log(message);

//   // console.log(callback);
//   callback(100);
// };

// const fnB = function (number) {
//   console.log('Это лог при вызове fnB', number);
// };

// fnA('qweqwe', fnB);

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);
//   console.log(result);
// };

// const add = function (x, y) {
//   return x + y;
// };
// const sub = function (x, y) {
//   return x - y;
// };

// doMath(4, 5, add);
// doMath(10, 8, sub);
// doMath(3, 4, (q, w) => q * w);

// const callback = function () {
//   console.log('Через 2 секунды внутри колбека в таймауте');
// };

// console.log('В начале кода');
// setTimeout(callback, 2000);
// console.log('В коде после таймаута');

// const filter = function (array, test) {
//   const filterArray = [];
//   for (const el of array) {
//     if (test(el)) {
//       filterArray.push(el);
//     }
//   }
//   return filterArray;
// };

// const callback1 = function (value) {
//   return value >= 3;
// };

// const r1 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback1);
// console.log(r1);

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], value => value <= 4);
// console.log(r2);

// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];

// const r4 = filter(fruits, value => value.quantity >= 150);
// console.table(r4);

// const fnA = function (parameter) {
//   const innerVariable = 'значение внутренней переменной функции  fnA';

//   const innerFunction = function (x = 1) {
//     console.log((parameter = parameter * x));
//     console.log(innerVariable);
//     console.log('Это вызов innerFunction');
//   };

//   return innerFunction;
// };

// const fnB = fnA(555);
// fnB(2);
// console.log(fnB);

// const fnC = fnA(2);
// fnC(3);
// console.log(fnC);

// const makeSheff = function (name) {
//   const makeDish = function (dish) {
//     console.log(`${name} готовит ${dish}.`);
//   };
//   return makeDish;
// };

// const mango = makeSheff('Mango');
// mango('супчик');
// mango('котлетки');

// const poly = makeSheff('Poly');
// poly('макарошки');
// poly('пирожок');
// console.dir(poly);

// const rounder = function (places) {
//   return function (number) {
//     return Number(number.toFixed(places));
//   };
// };
// const rounder2 = rounder(2);
// console.log(rounder2(2.5488));

// const myLibFactory = function () {
//   let value = 0;
//   const add = function (num) {
//     value += num;
//   };

//   return {
//     add: add,
//     getValue() {
//       return value;
//     },
//   };
// };

// const myLib = myLibFactory();
// console.log(myLib);
// console.log(myLib.getValue());
// myLib.add(15);
// console.log(myLib.getValue());
// myLib.add(-3);
// console.log(myLib.getValue());

// const salaryManagerFactory = function (employeeName, baseSalary = 0) {
//   let salary = baseSalary;

//   return {
//     raise(amount) {
//       salary += amount;
//     },
//     lower(amount) {
//       salary -= amount;
//     },
//     current() {
//       return `Текущая зарплата ${employeeName} - ${salary}`;
//     },
//   };
// };

// const salaryManager = salaryManagerFactory('Mango', 5000);
// console.log(salaryManager.current());
// salaryManager.lower(100);
// console.log(salaryManager.current());
// salaryManager.raise(1000);
// console.log(salaryManager.current());

// const add = function (a, b, c) {
//   console.log(a, b, c);
//   return a + b + c;
// };

// console.log(add(5, 10, 15));

// const addArrow = (a, b, c) => a + b + c;

// const add = (a, b) => ({ a, b });
// console.log(add(4, 5));

// const func = function (a, b, c, d) {
//   console.log(arguments);
//   const arg = [...arguments];
//   console.log(arg);
// };

// func(1, 2, 3, 4, 5, 6);

// Module 4 lesson 8**************************

// const user = {
//   tag: 'Mango',
//   showTag() {
//     console.log('showTag -> this', this);
//     console.log('showTag -> this.tag', this.tag);
//   },
// };

// //user.showTag();

// const invokeAction = function (action) {
//   console.log(action);
//   action();
// };

// invokeAction(user.showTag);

// const counter = {
//   value: 0,
//   increment(value) {
//     console.log('increment -> this', this);
//     this.value += value;
//   },
//   decrement(value) {
//     console.log('decrement -> this', this);
//     this.value -= value;
//   },
// };
// const updateCounter = function (value, operation) {
//   operation(value);
// };

// updateCounter(10, counter.increment);
// updateCounter(5, counter.decrement);

// const showThis = function () {
//   console.log('showThis -> this', this);
// };

// showThis();

// const objA = {
//   a: 5,
//   b: 10,
// };

// showThis.call(objA);

// const changeColor = function (color) {
//   console.log(this.color);
//   this.color = color;
//   console.log(this);
// };

// const hat = {
//   color: 'green',
// };

// const sweter = {
//   color: 'black',
// };

// changeColor.call(hat, 'blue');
// console.log(hat);

// changeColor.call(sweter, 'tomato');
// console.log(sweter);

// const changeHatColor = changeColor.bind(hat);

// changeHatColor('orange');

// const objC = {
//   z: 5,
// };

// console.log(objC);
// console.log(objC.hasOwnProperty('z'));

// const objB = Object.create(objC);
// objB.y = 2;

// console.log(objB);
// console.log(objB.y);
// console.log(objB.z);

// const objA = Object.create(objB);
// objA.x = 1;

// console.log('objA:', objA);

// console.log(objA.hasOwnProperty('z'));

// const dummyObj = Object.create({
//   message: 'Это  свойство прототипа',
// });

// dummyObj.message = 'Это собственное свойство объекта';
// console.log(dummyObj);

// const Car = function ({ brand, model, price } = {}) {
//   // const { brand, model, price } = config;
//   this.brand = brand;
//   this.model = model;
//   this.price = price;

//   this.changePrice = function (newPrice) {
//     this.price = newPrice;
//   };
// };
// Car.prototype.sayHi = function () {
//   console.log(this);
//   console.log('Hello!!');
// };
// console.log(Car.prototype);

// const myCar = new Car({ brand: 'audi', model: 'O3', price: 50000 });
// // console.log(myCar);
// myCar.sayHi();

// const myCar2 = new Car({ brand: 'BMW', model: 'X5', price: 35000 });
// // console.log(myCar2);
// myCar2.sayHi();

// const myCar3 = new Car({ brand: 'Audi', model: 'A6', price: 65000 });
// // console.log(myCar3);
// myCar3.sayHi();

// myCar3.changePrice(400);
// console.log(myCar3);

// const User = function ({ email, password } = {}) {
//   this.email = email;
//   this.password = password;
// };

// User.prototype.changeEmail = function (newEmail) {
//   this.email = newEmail;
// };

// User.log = function (obj) {
//   console.log('email', obj.email);
//   console.log('password', obj.password);
// };

// User.Pi = 3.1415;

// const mango = new User({ email: 'mymail@ukr.net', password: 1111111 });
// console.log(User.Pi);

// mango.changeEmail('newmail@gmail.com');
// // console.dir(mango);
// // console.log(User);
// // User.log(mango);
// console.dir(User);

// class Car1 {
//   static sayHi = 'Hello!!!';
//   static getLog(obj) {
//     console.log('Это свойства объекта', obj);
//   }
//   #test = 'test';

//   constructor({ brand, model, price } = {}) {
//     this.brand = brand;
//     this.model = model;
//     this._price = price;

//     // this.changePrice = function (newPrice) {
//     //   this.price = newPrice;
//     // };
//   }

//   changeModel(newModel) {
//     this.model = newModel;
//   }
//   get price() {
//     return this._price;
//   }
//   set price(newPrice) {
//     return (this._price = newPrice);
//   }
// }
// const carInstance = new Car1({ brand: 'audi', model: 'O3', price: 50000 });
// console.log(carInstance);
// // console.log(Car1.sayHi);
// // Car1.getLog(carInstance);
// // console.log(carInstance.test);
// // carInstance.changePrice(1000);

// console.log(carInstance.price);
// carInstance.price = 500000;
// console.log(carInstance);

// const obj = {
//   _a: 100,
//   b: 50,
//   get a() {
//     return this._a;
//   },
//   set a(newA) {
//     return (this._a = newA);
//   },
// };

// console.log(obj);
// console.log(obj.a);
// console.log(obj.b);
// obj.a = 150;
// obj.b = 55;
// console.log(obj.a);
// console.log(obj.b);

// class Hero {
//   constructor({ name = 'hero', xp = 0 } = {}) {
//     this.name = name;
//     this.xp = xp;
//   }

//   gainXp(amount) {
//     console.log(`${this.name} получает ${amount} опыта`);
//     this.xp += amount;
//   }
// }

// // const defaul = new Hero();

// // console.log(defaul);

// class Warrior extends Hero {
//   constructor({ weapon, ...rest } = {}) {
//     super(rest);
//     this.weapon = weapon;
//   }

//   attack() {
//     console.log(`${this.name} атакует используя ${this.weapon}`);
//   }
// }

// class Mag extends Hero {
//   constructor({ spells, ...rest } = {}) {
//     super(rest);
//     this.spells = spells;
//   }

//   cast() {
//     console.log(`${this.name} кастует используя ${this.spells}`);
//   }
// }

// const mango = new Warrior({ name: 'mango', xp: 1000, weapon: 'алебарда' });
// console.log(mango);

// mango.gainXp(5000);
// mango.attack();

// const poly = new Mag({ name: 'Poly', xp: 400, spells: ['Файерболл', 'Огонь'] });
// console.log(poly);
// poly.cast();

// const numbers = [1, 2, 3, 4, 5, 6];
// const filteredNumbers = [];

// for (const number of numbers) {
//   if (number > 3) {
//     filteredNumbers.push(number);
//   }
// }
// console.log(filteredNumbers);

// const filteredNumbers2 = numbers.filter(value => value > 3);
// console.log(filteredNumbers2);

// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i++) {
//     array[i] = array[i] * value;
//   }
// };
// const numbers = [1, 2, 3, 4, 5, 6];
// dirtyMultiply(numbers, 4);
// console.log(numbers);

// Перебирающте методы**************************

// const numbers = [1, 2, 3, 4, 5, 6];

// // for (let i = 0; i < numbers.length; i++) {
// //   console.log(numbers[i]);
// // }

// numbers.forEach(num => console.log(num));

// numbers.forEach((num, idx) => console.log(`index ${idx}, value ${num}`));

// function Counter() {
//   this.sum = 0;
//   this.count = 0;
// }
// Counter.prototype.add = function (array) {
//   array.forEach(entry => {
//     this.sum += entry;
//     this.count += 1;
//   }, this);
//   // ^---- Note
// };

// const obj = new Counter();
// console.log(obj.add);
// obj.add([2, 5, 9]);
// obj.count;
// // 3
// obj.sum;
// // 16

// const numbers = [1, 2, 3, 4, 5, 6];

// const doubleNumbers = numbers.map(number => number * 2);
// console.log(doubleNumbers);

// const users = [
//   { name: 'Mango', isActive: true },
//   { name: 'Poly', isActive: false },
//   { name: 'Ajax', isActive: true },
// ];

// // const names = users.map(user => user.name);
// // console.log(names);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// console.log(numbers.filter(number => (number > 2) & (number < 6)));

// const userOnline = users.filter(user => user.isActive);
// console.log(userOnline);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// const users = [
//   { id: '001', name: 'Mango', isActive: true },
//   { id: '002', name: 'Poly', isActive: false },
//   { id: '003', name: 'Ajax', isActive: true },
//   { id: '004', name: 'Chelsey', isActive: false },
// ];

// console.log(numbers.filter(number => number === 3));

// console.log(users.filter(user => user.id === '004'));

// const getByUser = (arr, id) => arr.filter(user => user.id === id);
// console.log(getByUser(users, '003'));

// const isBigEnough = val => val >= 10;

// console.log([12, 5, 8, 130, 44].every(isBigEnough));
// console.log([12, 5, 8, 130, 44].some(isBigEnough));

// const fruits = [
//   { name: 'apples', amount: 100 },
//   { name: 'bananas', amount: 0 },
//   { name: 'grapes', amount: 50 },
// ];

// console.log(fruits.every(fruit => fruit.amount > 0));
// console.log(fruits.some(fruit => fruit.amount > 0));

// const numbers = [1, 2, 3, 4, 5];

// const summ = numbers.reduce((acc, value) => acc + value, 0);
// console.log(summ);

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// console.log(tweets.reduce((acc, value) => acc + value.likes, 0));
// ////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const allTags = tweets.reduce((tags, el) => [...tags, ...el.tags], []);
// console.log(allTags);
// ///////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const tags = tweets.reduce((AllTags, tweet) => {
//   AllTags.push(...tweet.tags);
//   return AllTags;
// }, []);
// console.log(tags);

// const getTags = tweets => tweets.reduce((tags, el) => [...tags, ...el.tags], []);

// console.log(getTags(tweets));

// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }
//   acc[tag] += 1;
//   return acc;
// };

// const countTags = tags => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);

// const numbers = [2, 5, 8, 3, 5, 1, 6];

// console.log('before sort:', numbers);
// console.log('after sort', numbers.sort());

// const clients = ['Mango', 'Ajax', 'Poly', 'Chelsey'];

// console.log('Before sort: ', clients);
// console.log('After sort: ', clients.sort());

// const users = [
//   { name: 'Mango', daysActive: 15 },
//   { name: 'Poly', daysActive: 4 },
//   { name: 'Ajax', daysActive: 27 },
//   { name: 'Chelsey', daysActive: 2 },
// ];
// const sortByDaysActive = users.sort((a, b) => a.daysActive - b.daysActive);
// console.log(sortByDaysActive);

// const players = [
//   { id: 'player-1', name: 'Mango', timePlay0ed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlay0ed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlay0ed: 230, points: 47, online: true },
//   { id: 'player-4', name: 'Ajax', timePlay0ed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlay0ed: 80, points: 48, online: true },
// ];
// console.table(players);
// const playersName = players.map(player => player.name);
// console.log('playersName', playersName);

// const res = players.map(({ name: userName, online: isOnline }) => ({ userName, isOnline }));
// console.log('res', res);

// const updatedPlayers = players.map(player => {
//   console.log(player);
//   return { ...player, points: Math.round(player.points * 1.1) };
// });

// // console.log('updatePlayers:', updatedPlayers);
// const playerIdToUpdate = 'player-3';

// // const updatePlayers3 = players.map(player => {
// //   if (player.id === playerIdToUpdate) {
// //     return { ...player, points: player.points + 100 };
// //   }
// //   return player;
// // });

// const updatePlayers3 = players.map(player =>
//   player.id === playerIdToUpdate ? { ...player, points: player.points + 100 } : player,
// );

// console.log(updatePlayers3);
// const numbers = [5, 10, 15, 20, 25];

// const filteredNumbers = numbers.filter(number => number >= 15);
// console.log(filteredNumbers);

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 47, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 80, points: 48, online: true },
// ];
// console.table(players);

// const playersIsOnline = players.filter(player => player.online);
// console.log('playersIsOnline', playersIsOnline);

// const hardcorePlayers = players.filter(({ timePlayed }) => timePlayed > 250);

// console.log('hardcorePlayers', hardcorePlayers);

// const findPlayerById = (allPlayer, playerId) => {
//   return allPlayer.find(player => player.id === playerId);
// };

// console.log(findPlayerById(players, 'player-4'));

// const isAllOnline = players.every(player => player.online);
// console.log('isAllOnline', isAllOnline);

// const numbers = [5, 10, 15, 20, 25];
// console.log(numbers);

// const total = numbers.reduce((acc, number) => acc + number, 0);

// console.log(total);

// const salary = {
//   mango: 100,
//   pole: 50,
//   ajax: 150,
// };

// console.log(Object.values(salary));
// const totalSalary = Object.values(salary).reduce((total, employ) => total + employ, 0);
// console.log(totalSalary);

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 47, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 80, points: 48, online: true },
// ];
// console.table(players);

// const totalTimePlayed = players.reduce((totalTime, value) => totalTime + value.timePlayed, 0);

// console.log(totalTimePlayed);

// const cart = [
//   { label: 'Apples', price: 100, quantity: 2 },
//   { label: 'Bananas', price: 120, quantity: 3 },
//   { label: 'Lemons', price: 70, quantity: 4 },
// ];

// // const totalAmount = cart.reduce(
// //   (totalPrice, product) => totalPrice + product.price * product.quantity,
// //   0,
// // );
// const totalAmount = cart.reduce(
//   (totalPrice, { price, quantity }) => totalPrice + price * quantity,
//   0,
// );
// console.log('totalAmount', totalAmount);

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const allTags = tweets.reduce((tags, tweet) => [...tags, ...tweet.tags], []);

// console.log(allTags);

// const tagsStats = allTags.reduce((acc, tag) => {
//   console.log(acc[tag]);
//   if (acc.hasOwnProperty(tag)) {
//     acc[tag] += 1;
//     return acc;
//   }
//   acc[tag] = 1;
//   return acc;
// }, {});

// const tagsStats = allTags.reduce((acc, tag) => {
//   if (acc.hasOwnProperty(tag)) {
//     // acc[tag] += 1;
//     return {
//       ...acc,
//       [tag]: acc[tag] + 1,
//     };
//   }
//   return {
//     ...acc,
//     [tag]: 1,
//   };
// }, {});

// const tagsStats = allTags.reduce((acc, tag) => {
//   return {
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   };
// }, {});

// console.log(tagsStats);

// const numbers = [2, 7, 1, 45, 87, 4, 45, 24];

// const sortedNumbers = [...numbers].sort((a, b) => a - b);

// console.log('sortedNumbers', sortedNumbers);

// console.log('numbers', numbers);

// const abc = ['B', 'a', 'b', 'A'];

// console.log([...abc].sort((a, b) => a - b));

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 47, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 80, points: 48, online: true },
// ];
// console.table(players);

// const sortByBestPlayers = [...players].sort((cur, next) => cur.timePlayed - next.timePlayed);
// console.table(sortByBestPlayers);

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const tags = tweets.map(val => val.tags).flat();
// const tag2 = tweets.flatMap(t => t.tags);

// console.table(tweets);
// console.table(tags);
// console.log(tag2);

// const players = [
//   { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
//   { id: 'id-2', tag: 'Poly', isOnline: false, rank: 600 },
//   { id: 'id-3', tag: 'Ajax', isOnline: true, rank: 100 },
//   { id: 'id-4', tag: 'Kiwi', isOnline: true, rank: 400 },
// ];

// const onlineAndSortedByRank = players
//   .filter(player => player.isOnline)
//   .sort((prev, next) => prev.rank - next.rank);
// console.log(onlineAndSortedByRank);

// const element = {
//   class: '',
//   hovered: false,
//   changeClass(cls) {
//     this.class = cls;
//     return this;
//   },
//   toggleHovered() {
//     this.hovered = !this.hovered;
//     return this;
//   },
// };

// element.toggleHovered(); //.changeClass('click');
// element.changeClass('click');

// console.log(element);

// const players = [
//   { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
//   { id: 'id-2', tag: 'Poly', isOnline: false, rank: 600 },
//   { id: 'id-3', tag: 'Ajax', isOnline: true, rank: 100 },
//   { id: 'id-4', tag: 'Kiwi', isOnline: true, rank: 400 },
// ];

// console.log(_.map(players, val => val.id));

// console.log(_.union([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

// console.log(_.range(10, 20, 3));

// *********************************************************
// *********************************************************
// *********************************************************
// 1*********************************************************

// const selectedById = document.querySelector('#menu');
// selectedById.style.textTransform = 'uppercase';
// selectedById.style.fontSize = '2rem';
// console.log(selectedById);

// const menuItemByTagName = document.querySelectorAll('li');
// console.log(menuItemByTagName);

// const menuItemsByClass = document.querySelectorAll('.menu-item');
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector('.menu-item');
// firstMenuItem.style.color = 'blue';
// console.log(firstMenuItem);
// 2************************************************************

// const text = document.getElementById('text');
// text.hidden = true;
// console.log(text);

// const message = document.querySelector('#message');
// console.log(message.value);
// console.log(message.name);

// const link = document.querySelector('.active');
// console.log(link.href);

// const image = document.querySelector('.image');
// console.log(image.src);
// image.src = 'https://placeimg.com/640/480/tech';
// 3****************************************************
// document.querySelector('body').style.padding = '1rem';

// const text = document.querySelector('.article-text');
// console.log(text.textContent);

// const title = document.querySelector('.article-title');
// console.log(title.textContent);
// title.textContent = 'Wellcome to Zhitomir!!';

// const button = document.querySelector('.btn');

// button.style.backgroundColor = 'tomato';
// console.log(button.style);
// 4****************************************************
// const elem = document.querySelector('#paragraph');

// console.log(elem.classList);
// console.log(elem.classList.contains('red'));

// elem.classList.remove('big');
// console.log(elem.classList);

// elem.classList.add('new-class');
// console.log(elem.classList);

// elem.classList.add('a', 'b', 'c');
// console.log(elem.classList);

// elem.classList.toggle('hidden');
// console.log(elem.classList);

// elem.classList.toggle('hidden');
// console.log(elem.classList);

// elem.classList.forEach(cls => console.log(cls));

// 5****************************************************
// const image = document.querySelector('.image');
// console.log(image.attributes);

// console.log(image.hasAttribute('src'));

// console.log(image.getAttribute('src'));

// console.log(image.getAttribute('alt'));

// image.setAttribute('alt', 'amazing lake and clouds');

// console.log(image.getAttribute('alt'));

// image.removeAttribute('alt');

// console.log(image.hasAttribute('alt'));
// 6****************************************************
// const saveBtn = document.querySelector('.editor button[data-action="save"]');
// const closeBtn = document.querySelector('.editor button[data-action="close"]');

// console.log(saveBtn);
// console.log(closeBtn);

// const saveBtnAction = saveBtn.dataset.action;
// console.log(saveBtnAction);

// const closeBtnAction = closeBtn.dataset.action;
// console.log(closeBtnAction);

// const liElement14 = document.querySelector('.dishes li[data-id="14"]');
// const liElement7 = document.querySelector('.dishes li[data-id="7"]');
// const liElement3 = document.querySelector('.dishes li[data-id="3"]');
// // const liElement61 = document.querySelector('.dishes li[data-id="61"]');
// const liElement61 = document.querySelector('.dishes').children[3];

// console.log(liElement61);

// console.log(liElement14.dataset.id);
// console.log(liElement7.dataset.id);
// console.log(liElement3.dataset.id);
// console.log(liElement61.dataset.id);

// 7****************************************************
// const heading = document.createElement('h1');
// heading.textContent = 'This is a heading';
// console.log(heading);

// const image = document.createElement('img');
// image.setAttribute('src', 'https://placeimg.com/320/240/nature');
// image.setAttribute('alt', 'nature');
// console.log(image);

// console.log(image.hasAttribute('src'));

// document.querySelector('body').appendChild(heading);
// document.querySelector('body').insertBefore(image, heading);
// 8****************************************************
// const item = document.createElement('a');
// item.href = '#';
// // item.setAttribute('href', '#'); //аналог обращения к атрибуту
// // console.log(item.getAttribute('href'));
// // console.log(item.href);
// item.classList.add('btn');
// item.textContent = 'item 4';

// const nav = document.querySelector('.nav');
// nav.appendChild(item);

// const heading = document.createElement('h1');
// heading.textContent = 'Nav heading';
// const container = document.querySelector('.container');
// container.insertBefore(heading, nav);

// 9 ****************************************************
// const list = document.querySelector('.list');
// const item = document.createElement('li');
// item.textContent = 'Poly';
// list.appendChild(item);

// const clone = item.cloneNode(true);
// clone.textContent = 'Ajax';
// list.prepend(clone);

// const title = document.createElement('h1');
// title.textContent = 'Список клиентов';
// list.before(title);

// const text = document.createElement('p');
// text.textContent =
//   'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet numquam beatae corporis officia dolorem recusandae tempore, suscipit facilis alias temporibus, quos fugiat quo minus voluptate, aperiam nobis repudiandae omnis enim.';
// list.after(text);

// const span = document.createElement('span');
// span.textContent = 'Change content';

// text.replaceWith(span);

// 10****************************************************
// const article = document.querySelector('.article');

// const text = document.querySelector('.text');
// article.removeChild(text);

// const link = document.querySelector('.link');
// link.remove();
//11 ****************************************************
// const parent = document.querySelector('.parent');
// const article = document.querySelector('.article');

// const clone = article.cloneNode(true);
// clone.classList.add('blue-text');
// parent.appendChild(clone);
// 12****************************************************
// const article = document.querySelector('.article');
// const htmlString = `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
//     <a class="link" href = '#' > Read more...</a > `;
// article.innerHTML += htmlString;

// const list = document.querySelector('.list');
// const tech = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

// const markup = tech.reduce((string, item) => string + `<li>${item}</li>`, '');

// console.log(markup);

// list.innerHTML = markup;
// 13****************************************************
// const list = document.querySelector('#list');
// console.log(list);

// list.insertAdjacentHTML('beforebegin', '<h2>beforebegin заголовок</h2>');
// list.insertAdjacentHTML('afterbegin', '<li> afterbegin item </li>');
// list.insertAdjacentHTML('beforeend', '<li>beforeend item</li>');
// list.insertAdjacentHTML('afterend', '<p>afterend текст</p>');
// list.insertAdjacentText('afterend', 'Hello I am not affray!!');
// 14 ****************************************************

// const singleBtn = document.querySelector('#single');

// const handleClick = () => alert('CLICK');
// singleBtn.addEventListener('click', handleClick);

// const multiBtn = document.querySelector('#multiple');

// const firstCallback = () => alert('First callback!');
// const secondCallback = () => alert('Second callback!');
// const thirdCallback = () => alert('Third callback');

// multiBtn.addEventListener('click', firstCallback);
// multiBtn.addEventListener('click', secondCallback);
// multiBtn.addEventListener('click', thirdCallback);

//**************** */
// const user = {
//   name: 'Mango',
//   showName() {
//     console.log(this);
//     console.log(`My name is ${this.name}`);
//   },
// };

// const btn = document.querySelector('.btn');

// const funcThis = user.showName.bind(user);
// btn.addEventListener('click', funcThis);

// const multiBtn = document.querySelector('#multiple');

// multiBtn.addEventListener('click', () => btn.removeEventListener('click', funcThis));

// 15****************************************************
// const addBtn = document.querySelector('button[data-action="add"]');
// const removeBtn = document.querySelector('button[data-action="remove"]');
// const btn = document.querySelector('#btn');

// console.log(addBtn);
// console.log(removeBtn);
// console.log(btn);

// const handleClick = () => {
//   alert('CLICK EVENT LISTENER ALERT!');
// };

// addBtn.addEventListener('click', () => {
//   btn.addEventListener('click', handleClick);
// });

// removeBtn.addEventListener('click', () => {
//   btn.removeEventListener('click', handleClick);
// });

// 16 ****************************************************
// const btn = document.querySelector('#btn');

// const handleClick = event => {
//   console.log('event:', event);
//   console.log('event type', event.type);

//   console.log('this', this);
//   console.log('target:', event.target);
// };

// btn.addEventListener('click', handleClick);

// 17****************************************************
// const form = document.querySelector('.form');
// const loginInput = form.querySelector('input[type="text"]');
// const passInput = form.querySelector('input[type="password"]');

// // form.addEventListener('sumbit', handleSubmit);
// form.addEventListener('submit', function (event) {
//   event.preventDefault();
//   console.log('Hello!!');
//   const login = loginInput.value.trim();
//   const password = passInput.value.trim();

//   console.log(password);
//   console.log(login);

//   if (login === '' || password === '') {
//     return alert('Пожалуйста введите валидную информацию!');
//   }
//   form.reset();

//   alert(`
//   Спасибо за регистрацию!
//   Логин: ${login}
//   Пароль: ${password}
//   `);
// });

// function handleSubmit(event) {
//   event.preventDefault();

//   const login = loginInput.value.trim();
//   const password = passInput.value.trim();
//   console.log(password);
//   console.log(login);

//   if (login === '' || password === '') {
//     return alert('Пожалуйста введите валидную информацию!');
//   }
//   form.reset();

//   alert(`
//   Спасибо за регистрацию!
//   Логин: ${login}
//   Пароль: ${password}
//   `);
// }
// console.log(form);
// console.log(loginInput);
// console.log(passInput);

// 18****************************************************
// const clearLogBtn = document.querySelector('button[data-action="clear"]');
// const logList = document.querySelector('.log-list');

// window.addEventListener('keydown', logMessage);
// window.addEventListener('keyup', logMessage);

// clearLogBtn.addEventListener('click', e => {
//   logList.innerHTML = '';
// });

// function logMessage({ type, key, code }) {
//   const message = document.createElement('section');
//   const title = document.createElement('h2');
//   title.textContent = `${type} event`;

//   const text = document.createElement('p');
//   text.textContent = `key value is "${key}" | code value is "${code}"`;

//   message.append(title, text);
//   logList.appendChild(message);
// }
// 19**module 8**************************************************
// const parent = document.querySelector('#parent');
// const child = document.querySelector('#child');
// const innerChild = document.querySelector('#inner-child');

// const parentClickHandler = () => alert('PARENT click hahdler');
// const childClickHandler = () => alert('CHILD click handler');
// const innerChildClickHandler = event => {
//   event.stopPropagation();
//   alert('INNER CHILD click handler');
// };

// parent.addEventListener('click', parentClickHandler);
// child.addEventListener('click', childClickHandler);
// innerChild.addEventListener('click', innerChildClickHandler);

// // const handleClick = event => {
// //   alert(`event.target: ${event.target.id}`);
// //   console.dir(`event.target: ${event.target}`);
// // };

// // parent.addEventListener('click', handleClick);

// 20 ****************************************************
// const nav = document.querySelector('.js-nav');
// nav.addEventListener('click', handleNavClick);
// function handleNavClick(event) {
//   event.preventDefault();

//   const target = event.target;
//   console.log('target', target);
//   console.log('target.nodeName', target.nodeName);

//   if (target.nodeName !== 'A') return;

//   setActiveLink(target);
// }

// function setActiveLink(nextActiveLink) {
//   const currentActiveLink = nav.querySelector('a.active');

//   if (currentActiveLink) {
//     currentActiveLink.classList.remove('active');
//   }
//   nextActiveLink.classList.add('active');
// }
// 21****************************************************
// window.addEventListener(
//   'scroll',
//   _.throttle(() => {
//     console.log('Scroll event handler invocation every 300ms.');
//   }, 300),
// );

// window.addEventListener(
//   'scroll',
//   _.throttle(() => {
//     console.log('Scroll event handler invocation every 300ms.');
//   }, 300),
// );

// const minimum = _.min([4, 0, 8, 6]);
// console.log(minimum);

// 22****************************************************
// const container = document.querySelector('.js-container');

// container.addEventListener('click', onClickButton);

// function onClickButton(even) {
//   if (even.target.nodeName !== 'BUTTON') return;
//   console.log(even.target.textContent);
// }

// const addBtn = document.querySelector('.js-add-btn');
// addBtn.addEventListener('click', onAddBtnClick);
// let labelCounter = 6;

// function onAddBtnClick() {
//   const btn = document.createElement('button');
//   btn.textContent = `Кнопка ${labelCounter}`;
//   btn.type = 'button';

//   container.appendChild(btn);
//   labelCounter += 1;
// }
// 23****************************************************

// const tagsContainer = document.querySelector('.js-tags');
// let selectedTag = null;
// tagsContainer.addEventListener('click', onTagsContainerClick);

// function onTagsContainerClick(event) {
//   if (event.target.nodeName !== 'BUTTON') return;

//   const currentActiveBtn = document.querySelector('.active');

//   if (currentActiveBtn) {
//     currentActiveBtn.classList.remove('active');
//   }

//   const nextActiveBtn = event.target;
//   nextActiveBtn.classList.add('active');

//   selectedTag = nextActiveBtn.dataset.value;
//   console.log(selectedTag);

// }
// 23.1 ****************************************************
// const tagsContainer = document.querySelector('.js-tags');
// const selectedTag = new Set();

// tagsContainer.addEventListener('click', onTagsContainerClick);

// function onTagsContainerClick(event) {
//   if (event.target.nodeName !== 'BUTTON') return;

//   event.target.classList.toggle('active');

//   if (event.target.classList.contains('active')) {
//     //   if (event.target.classList.value.includes('active')) {
//     selectedTag.add(event.target.dataset.value);
//   } else {
//     selectedTag.delete(event.target.dataset.value);
//   }

//   console.log(event.target.classList.value);
//   console.log(selectedTag);
// }
// 24 ****************************************************
const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#e91e63', rgb: '233,30,99' },
  { hex: '#9c27b0', rgb: '156,39,176' },
  { hex: '#673ab7', rgb: '103,58,183' },
  { hex: '#3f51b5', rgb: '63,81,181' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#00bcd4', rgb: '0,188,212' },
  { hex: '#009688', rgb: '0,150,136' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
  { hex: '#ff9800', rgb: '255,152,0' },
  { hex: '#795548', rgb: '121,85,72' },
  { hex: '#607d8b', rgb: '96,125,139' },
];

const paletteContainer = document.querySelector('.js-palette');
const cardsMarkup = createColorCardsMakrUp(colors);

paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);
paletteContainer.addEventListener('click', onClick);

function createColorCardsMakrUp(colors) {
  return colors
    .map(({ hex, rgb }) => {
      return `
     <div class="color-card">
        <div
          class="color-swatch"
          data-hex="${hex}"
          data-rgb="${rgb}"
          style="background-color: ${hex}"
        ></div>
        <div class="color-meta">
          <p>HEX: ${hex}</p>
          <p>RGB: ${rgb}</p>
        </div>
      </div>
      `;
    })
    .join('');
}

function onClick(evt) {
  //   console.log(evt.target.classList.value);
  //   if (evt.target.classList.value !== 'color-swatch') return;
  if (!evt.target.classList.contains('color-swatch')) return;

  const swatchEl = evt.target;
  //   const parentColorCard = swatchEl.parentNode; //или closest
  const parentColorCard = swatchEl.closest('.color-card');

  removeActiveCardClass();
  addActiveCardClass(parentColorCard);
  setBodyBgColor(swatchEl.dataset.hex);

  function setBodyBgColor(color) {
    document.body.style.backgroundColor = color;
  }

  function removeActiveCardClass() {
    const isActiveCard = document.querySelector('.color-card.is-active');

    if (isActiveCard) {
      isActiveCard.classList.remove('is-active');
    }
  }

  function addActiveCardClass(card) {
    card.classList.add('is-active');
  }
}

// ****************************************************
// ****************************************************
