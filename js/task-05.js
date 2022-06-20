const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

const onInputText = (evt) => {
  const inputText = evt.currentTarget.value;

  if (!inputText) {
    return (refs.output.textContent = "Anonymous");
  }
  return (refs.output.textContent = inputText);
};

refs.input.addEventListener("input", onInputText);
