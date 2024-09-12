function colorBlack() {
  document.body.style.background = "black";
  document.querySelectorAll("h1").forEach((e) => (e.style.color = "red"));
  document.querySelectorAll("p").forEach((e) => (e.style.color = "red"));
  document.querySelectorAll("h3").forEach((e) => (e.style.color = "red"));
}
function colorWhite() {
  document.body.style.background = "White";
  document.querySelectorAll("h1").forEach((e) => (e.style.color = ""));
  document.querySelectorAll("p").forEach((e) => (e.style.color = "black"));
  document.querySelectorAll("h3").forEach((e) => (e.style.color = "black"));
}

function login() {
  var username = document.querySelector("#username").value;
  var password = document.querySelector("#password").value;

  if (username == "") {
    // alert("username is empty");
    document.querySelector("#username-error").innerHTML = "username is empty";
  } else if (username == "maadhavan") {
    document.querySelector("#username-error").innerHTML = "";
    alert("login successfuly");
  } else {
    document.querySelector("#username-error").innerHTML = "";
  }

  if (password == "") {
    // alert("username is empty");
    document.querySelector("#password-error").innerHTML = "password is empty";
  } else if (password == "1234") {
    // alert("username is empty");
    document.querySelector("#password-error").innerHTML = "";
    alert("login successfuly");
  } else {
    document.querySelector("#password-error").innerHTML = "";
  }
}

// <!-- shoe change-->

function image1(img) {
  document.querySelector("#imagebox").src = img;
}

function image2(img) {
  document.querySelector("#imagebox").src = img;
}
function image3(img) {
  document.querySelector("#imagebox").src = img;
}
function image4(img) {
  document.querySelector("#imagebox").src = img;
}

function sendmsg() {
  var name = document.querySelector("#name").value;
  var email = document.querySelector("#email").value;
  var password = document.querySelector("#pass").value;
  var contact = document.querySelector("#contact").value;
  
if ((name == "")&&(email =="")&&(password =="")&&(contact =="")){
    alert("plese enter your value");
}
else{
  alert("succesful");
window.location.href ="#Home";
}
}
function myColor() {
  var color = document.getElementById("colorPanel").value;
  document.body.style.backgroundColor = color;
  document.getElementById("box").value = color;
}

function total(price) {
  var ct = document.querySelector("#count").innerHTML;
  ct = Number(ct);
  ct++;
  document.querySelector("#count").innerHTML = ct;

  //-----------

  var t = document.querySelector("#total").innerHTML;
  t = Number(t);

  t += price;
  document.querySelector("#total").innerHTML = t;
}
