const refs = {
  decrementRef: document.querySelector('[data-action="decrement"]'),
  incrementRef: document.querySelector('[data-action="increment"]'),
  countValueRef: document.querySelector("#value"),
};
const { decrementRef, incrementRef, countValueRef } = refs;
let counterValue = 0;

const onDecrementCountValue = () => {
  counterValue -= 1;
  countValueRef.textContent = counterValue;
};

const onIncrementCountValue = () => {
  counterValue += 1;
  countValueRef.textContent = counterValue;
};

decrementRef.addEventListener("click", onDecrementCountValue);
incrementRef.addEventListener("click", onIncrementCountValue);
