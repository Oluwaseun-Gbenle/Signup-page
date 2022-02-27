const eye = document.querySelector("#eye");
const password = document.querySelector("#password");

eye.addEventListener("click", function () {
  // toggle the type attribute
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  // toggle the icon
  this.classList.toggle("bi-eye");
});

// prevent form submit
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
});

function sendJSON() {
  let fname = document.querySelector("#fname");
  let lname = document.querySelector("#lname");
  let password = document.querySelector("#password");
  let email = document.querySelector("#email");

  // Creating a XHR object
  let xhr = new XMLHttpRequest();
  let url = "https://signup-page.gbenleseun.repl.co/api/signup";

  // open a connection
  xhr.open("POST", url, true);

  // Set the request header i.e. which type of content you are sending
  xhr.setRequestHeader("Content-Type", "application/json");

  // Create a state change callback
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Print received data from server
      console.log(this.responseText);
    }
  };

  // Converting JSON data to string
  var data = JSON.stringify({
    firstname: fname.value,
    lastname: lname.value,
    email: email.value,
    password: password.value,
  });

  // Sending data with the request
  xhr.send(data);
}

async function enter() {
  let response = await fetch("https://signup-page.gbenleseun.repl.co/api/data");
  var data = await response.json();
  let emailValue = document.getElementById("email").value;
  data.map(function (a) {
    if (a.email == emailValue) {
      console.log(a.email);
      console.log(emailValue);
      return document.querySelector("error-message").innerHTML="User already exists"
    } else return (window.location.href = "login.html");
  });
}

async function login() {
  let response = await fetch("https://signup-page.gbenleseun.repl.co/api/data");
  var data = await response.json();
  let emailValue = document.getElementById("email").value;
  let passwordValue = document.getElementById("password").value;
  data.map(function (a) {
    if (a.email == emailValue && a.password == passwordValue) {
      console.log(a.email);
      console.log(emailValue);
      console.log(a.password);
      console.log(passwordValue);
      return (window.location.href = "home.html");
    } else return document.querySelector(".error-message").innerHTML="Incorrect user details"
  });
}
//issues having to click alert many times
//sign up page moving to login page regardless of condition.
