function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  colorText: document.querySelector(".color"),
  btnChangeColor: document.querySelector(".change-color"),
  body: document.querySelector("body"),
};

const onChangeColor = () => {
  const rondomColor = getRandomHexColor();
  refs.body.style.backgroundColor = rondomColor;
  refs.colorText.textContent = rondomColor;
};

refs.btnChangeColor.addEventListener("click", onChangeColor);
