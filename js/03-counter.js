const counter = {
  value: 0,
  increment() {
    console.log('increment -> this', this);
    this.value += 1;
  },
  decrement() {
    console.log('decrement -> this', this);
    this.value -= 1;
  },
};

console.log(document);

const decrementBtn = document.querySelector('.js-decrement');
const incrementBtn = document.querySelector('.js-increment');
const valueEl = document.querySelector('.js-value');

// console.dir(decrementBtn);
// console.log(incrementBtn);
// console.log(valueEl);

decrementBtn.addEventListener('click', function () {
  counter.decrement();
  console.log('value:', counter.value);
  valueEl.textContent = counter.value;
});

incrementBtn.addEventListener('click', function () {
  counter.increment();
  console.log('value:', counter.value);
  valueEl.textContent = counter.value;
});
