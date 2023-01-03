// Dom elements
let form = document.querySelector("form");
let userName = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#cpassword");
let mobileNumber= document.querySelector("#cPhone");
let address= document.querySelector("#cAddress");
let course= document.querySelector("#cCourse");

// Event listener to submit form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  handleInput();
});

// What to do with inputs ?
function handleInput() {
  // Values from dom elements ( input )
  let userNameValue = userName.value.trim();
  let emailValue = email.value.trim();
  let passwordValue = password.value.trim();
  let confirmPasswordValue = confirmPassword.value.trim();
  let mobileNumberValue= mobileNumber.value.trim();
  let addressValue= address.value.trim();
  let courseValue= course.value;

  //  Checking for username
  if (userNameValue === "") {
    setErrorFor(userName, "Username cannot be blank");
  } else {
    setSuccessFor(userName);
  }

  //  Checking for course
  if (courseValue === "") {
    setErrorFor(course, "Course cannot be blank");
  } else {
    setSuccessFor(course);
  }

  // Checking for email
  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
  } else {
    setSuccessFor(email);
  }

  // Checking for password
  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
  } else if (passwordValue.length < 6 || passwordValue.length > 30) {
    setErrorFor(password, "Password length should be between 6 and 30");
  } else {
    setSuccessFor(password);
  }

  // Checking for confirm password
  if (confirmPasswordValue === "") {
    setErrorFor(confirmPassword, "Confirm Password cannot be blank");
  } else if (confirmPasswordValue !== passwordValue) {
    setErrorFor(confirmPassword, "Confirm password not matched with password");
  } else {
    setSuccessFor(confirmPassword);
  }

  // Checking for Mobile Number
  if (mobileNumberValue === "") {
    setErrorFor(mobileNumber, "Mobile number cannot be blank");
  } else {
    setSuccessFor(mobileNumber);
  }

   // Checking for Address
   if (addressValue === "") {
    setErrorFor(address, "Address cannot be blank");
  } else {
    setSuccessFor(address);
  }
}

// If there is some error, than what we want to do with input ?
function setErrorFor(input, message) {
  let formControl = input.parentElement;
  formControl.className = "form-control error";
  let small = formControl.querySelector("span");
  small.innerText = message;
}

// If there is no error, than what we want to do with input ?
function setSuccessFor(input) {
  let formControl = input.parentElement;
  formControl.className = "form-control success";
}

// To check if email is valid or not ?
function isEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
