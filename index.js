console.log("jir");
const signUpForm = document.forms["sign-up-form"];
const firstName = signUpForm["first-name"];
const lastName = signUpForm["last-name"];
const email = signUpForm["email"];
const password = signUpForm["password"];
console.log(password);

const fnAlert = document.getElementById("fnalert");
const lnAlert = document.getElementById("lnalert");
const emailAlert = document.getElementById("emailalert");
const passwordAlert = document.getElementById("password-alert");

const imgfnAlert = document.getElementById("imgfnalert");
const imglnAlert = document.getElementById("imglnalert");
const imgEmailAlert = document.getElementById("imgemailalert");
const imgPasswordAlert = document.getElementById("imgpasswordalert");

const symbols = /[!@#$%^&*()_+{}\[\]:;"'<>,.?/~`1234567890]/;
const symbolsEmail = /[!#$%^&*()_+{}\[\]:;"'<>,?/~`]/;
const emails = "@gmail.com";
const string = ["undefined", "number", "boolean", "string", "null", "object"];

function validation() {
  if (firstName.value.trim() === "") {
    fnAlert.innerHTML = "First Name cannot be empty";
    imgfnAlert.classList.remove("hidden");
  } else if (symbols.test(firstName.value)) {
    fnAlert.innerHTML = "do not use specials characters!";
    imgfnAlert.classList.remove("hidden");
  } else if (firstName.value.length < 3) {
    fnAlert.innerHTML = "First Name to short!";
    imgfnAlert.classList.remove("hidden");
  } else if (string.includes(firstName.value.toLowerCase())) {
    fnAlert.innerHTML = `${firstName.value} is not avalable`;
  } else {
    fnAlert.classList.add("success");
    fnAlert.innerHTML = "success";
    imgfnAlert.classList.add("hidden");
  }

  if (lastName.value.trim() === "") {
    lnAlert.innerHTML = "Last Name cannot be empty";
    imglnAlert.classList.remove("hidden");
  } else if (symbols.test(lastName.value)) {
    lnAlert.innerHTML = "do not use specials characters!";
    imglnAlert.classList.remove("hidden");
  } else if (string.includes(lastName.value.toLowerCase())) {
    lnAlert.innerHTML = `${lastName.value} is not avalable`;
  } else if (lastName.value.length < 3) {
    lnAlert.innerHTML = "Last Name to short!";
    imglnAlert.classList.remove("hidden");
  } else {
    lnAlert.classList.add("success");
    lnAlert.innerHTML = "success";
    imglnAlert.classList.add("hidden");
  }

  if (email.value.trim() === "") {
    emailAlert.innerHTML = "Email cannot be empty";
    imgEmailAlert.classList.remove("hidden");
  } else if (
    !email.value.includes("@") ||
    !email.value.includes(".com") ||
    symbolsEmail.test(email.value)
  ) {
    emailAlert.innerHTML = "Looks like this not an email";
    imgEmailAlert.classList.remove("hidden");
  } else {
    emailAlert.innerHTML = "success";
    emailAlert.classList.add("hidden");
    imgEmailAlert.classList.add("hidden");
  }

  if (password.value.trim() === "") {
    passwordAlert.innerHTML = "password must be fill!";
    imgPasswordAlert.classList.remove("hidden");
  } else if (password.value.length < 6) {
    passwordAlert.innerHTML = "Password to short!";
    imgPasswordAlert.classList.remove("hidden");
  } else if (!symbolsEmail.test(password.value)) {
    passwordAlert.innerHTML = "password must have atleast 1 symbols";
    imgPasswordAlert.classList.remove("hidden");
  } else {
    passwordAlert.innerHTML = "success";
    passwordAlert.classList.add("hidden");
    imgPasswordAlert.classList.add("hidden");
  }
}

signUpForm.onsubmit = (event) => {
  event.preventDefault();
  validation();
};
