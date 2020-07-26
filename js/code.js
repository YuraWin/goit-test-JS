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
