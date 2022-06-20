function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector("#controls input"),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  baseBox: document.querySelector("#boxes"),
};

const createBoxes = (amount) => {
  const amountArr = Array.from({ length: amount }, (v, k) => k);
  let boxWidth = "30px";
  let boxHeight = "30px";

  const boxesArr = amountArr.map(() => {
    const createdBox = document.createElement("div");
    createdBox.style.backgroundColor = getRandomHexColor();
    createdBox.style.width = boxWidth;
    createdBox.style.height = boxHeight;
    boxWidth = `${Number.parseInt(boxWidth) + 10}px`;
    boxHeight = `${Number.parseInt(boxHeight) + 10}px`;
    return createdBox;
  });
  return boxesArr;
};

const onCreateboxes = () => {
  const amountBoxes = Number(refs.input.value);
  const createdBoxes = createBoxes(amountBoxes);
  refs.baseBox.append(...createdBoxes);
};

const destroyBoxes = () => (refs.baseBox.innerHTML = "");

refs.btnCreate.addEventListener("click", onCreateboxes);
refs.btnDestroy.addEventListener("click", destroyBoxes);
