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
