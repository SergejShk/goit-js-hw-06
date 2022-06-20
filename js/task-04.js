const refs = {
  decrementRef: document.querySelector('[data-action="decrement"]'),
  incrementRef: document.querySelector('[data-action="increment"]'),
  countValueRef: document.querySelector("#value"),
};
const { decrementRef, incrementRef, countValueRef } = refs;

const onDecrementCountValue = () => {
  countValueRef.textContent = Number(countValueRef.textContent) - 1;
};

const onIncrementCountValue = () => {
  countValueRef.textContent = Number(countValueRef.textContent) + 1;
};

decrementRef.addEventListener("click", onDecrementCountValue);
incrementRef.addEventListener("click", onIncrementCountValue);
