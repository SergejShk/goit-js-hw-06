const inputRef = document.querySelector("#validation-input");

const handleInput = (evt) => {
  const inputValidator = Number(evt.currentTarget.dataset.length);
  const inputTextLength = evt.currentTarget.value.length;

  if (inputTextLength === inputValidator) {
    evt.currentTarget.classList.remove("invalid");
    evt.currentTarget.classList.add("valid");
    return;
  }
  evt.currentTarget.classList.remove("valid");
  evt.currentTarget.classList.add("invalid");
  return;
};

inputRef.addEventListener("blur", handleInput);
