const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

const handleInput = (evt) => {
  const inputValue = evt.currentTarget.value;
  textRef.style.fontSize = `${inputValue}px`;
};

inputRef.addEventListener("input", handleInput);
