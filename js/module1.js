//example 2*******************************
// const invoice = 30;
// const stock = 100;

// const message =
//   invoice <= stock ? 'Заказ оформлен, с вами свяжется менеджер' : 'На складе недостаточно товаров!';

// console.log(message);

//example 3 *******************************

// const userPassword = 'jqueryismyjam';

// const ADMIN_PASSWORD = 'jqueryismyjam';

// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
// const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
// let message;

// // Write code under this line
// if (userPassword === ADMIN_PASSWORD) {
//   message = ACCESS_IS_ALLOWED;
// } else if (userPassword === null) {
//   message = CANCELED_BY_USER;
// } else {
//   message = ACCESS_DENIED;
// }
// console.log(message);

// //Example 4 ********************
// const orderPieces = 10;

// const credits = 23580;
// const pricePerDroid = 3000;
// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_DENIED = 'Недостаточно средств на счету!';

// let totalPrice; // Write code in this line
// let balanceCredit; // Write code in this line
// let message;

// // Write code under this line
// totalPrice = orderPieces * pricePerDroid;
// if (orderPieces === null) {
//   message = CANCELED_BY_USER;
// } else if (totalPrice <= credits) {
//   balanceCredit = credits - totalPrice;
//   message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
// } else {
//   message = ACCESS_DENIED;
// }

// console.log(message);

//Example 5 ************************************
const countryName = 'индия';

const CANCELED_BY_USER = 'Отменено пользователем!';
const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
const CHINA = 'Китай';
const AUSTRALIA = 'Австралия';
const INDIA = 'Индия';
const JAMAICA = 'Ямайка';
let message;
let price = 0;
let country;
if (countryName === null) {
  message = CANCELED_BY_USER;
} else {
  country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase(); // Write code in this line
  console.log(country);
  switch (country) {
    // Write code under this line
    case CHINA:
      price = 100;
      break;
    case AUSTRALIA:
      price = 170;
      break;
    case INDIA:
      price = 80;
      break;
    case JAMAICA:
      price = 120;
      break;
    default:
      message = NO_DELIVERY;
  }
}
if (price > 0) {
  // Write code in this line
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
}
console.log(message);
