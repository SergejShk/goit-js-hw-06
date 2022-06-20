const formRef = document.querySelector(".login-form");

const handleForm = (evt) => {
  evt.preventDefault();
  const formElements = evt.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (!email || !password) {
    return alert("Все поля должны быть заполнены!");
  }
  const formData = {
    email,
    password,
  };
  console.log(formData);
  evt.currentTarget.reset();
};

formRef.addEventListener("submit", handleForm);
