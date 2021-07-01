const btn = document.querySelector(".form__btn");
const firstName = document.querySelector("#name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#pass");
const icon = document.querySelector(".form__icon");
const error = document.querySelector(".form__error");

icon.classList.remove("form__icon--active");
error.classList.remove("form__error--active");
btn.classList.remove("form__btn--active");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    !email.validity.valid ||
    !password.validity.valid ||
    !firstName.validity.valid ||
    !lastName.validity.valid
  ) {
    btn.classList.add("form__btn--active");
  }

  if (
    email.validity.valid &&
    password.validity.valid &&
    firstName.validity.valid &&
    lastName.validity.valid
  ) {
    btn.classList.remove("form__btn--active");
  }

  if (!email.validity.valid) {
    console.log("not valid email");
    document
      .querySelector("#email")
      .nextElementSibling.classList.add("form__icon--active");

    document
      .querySelector("#email")
      .nextElementSibling.nextElementSibling.classList.add(
        "form__error--active"
      );
  }

  if (email.validity.valid) {
    document
      .querySelector("#email")
      .nextElementSibling.classList.remove("form__icon--active");

    document
      .querySelector("#email")
      .nextElementSibling.nextElementSibling.classList.remove(
        "form__error--active"
      );
  }

  ////////////
  if (!password.validity.valid) {
    document
      .querySelector("#pass")
      .nextElementSibling.classList.add("form__icon--active");

    document
      .querySelector("#pass")
      .nextElementSibling.nextElementSibling.classList.add(
        "form__error--active"
      );
  }

  if (password.validity.valid) {
    document
      .querySelector("#pass")
      .nextElementSibling.classList.remove("form__icon--active");

    document
      .querySelector("#pass")
      .nextElementSibling.nextElementSibling.classList.remove(
        "form__error--active"
      );
  }

  ////////////

  if (!firstName.validity.valid) {
    document
      .querySelector("#name")
      .nextElementSibling.classList.add("form__icon--active");

    document
      .querySelector("#name")
      .nextElementSibling.nextElementSibling.classList.add(
        "form__error--active"
      );
  }

  if (firstName.validity.valid) {
    document
      .querySelector("#name")
      .nextElementSibling.classList.remove("form__icon--active");

    document
      .querySelector("#name")
      .nextElementSibling.nextElementSibling.classList.remove(
        "form__error--active"
      );
  }

  ///////////////
  if (!lastName.validity.valid) {
    document
      .querySelector("#last-name")
      .nextElementSibling.classList.add("form__icon--active");

    document
      .querySelector("#last-name")
      .nextElementSibling.nextElementSibling.classList.add(
        "form__error--active"
      );
  }

  if (lastName.validity.valid) {
    document
      .querySelector("#last-name")
      .nextElementSibling.classList.remove("form__icon--active");

    document
      .querySelector("#last-name")
      .nextElementSibling.nextElementSibling.classList.remove(
        "form__error--active"
      );
  }
});
