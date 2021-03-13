function validation (){
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var tel = document.getElementById("tel").value;
  var custom = document.getElementById("customText").value;
  var error_message = document.getElementById("error_message")
  var text;
  error_message.style.padding = "10px";

  if (fname.length <5) {
    text = "Please enter Valid name";
    error_message.innerHTML = text;
    return false;
  }
  if (lname.length <5) {
    text = "Please enter Valid Last name";
    error_message.innerHTML = text;
    return false;
  }
  if (email.indexOf("@") == -1 || email.length <6) {
    text = "Please enter Valid email";
    error_message.innerHTML = text;
    return false;
  }

  if (isNaN(tel) || tel.length !=10) {
    text = "Please enter Valid number";
    error_message.innerHTML = text;
    return false;
  }
 if (custom.length <= 140) {
  text = "Please enter more than 140 characters";
  error_message.innerHTML = text;
  return false;
  
 }
alert (" Thank You, You have Sign up Successfully!");
return true;
}
  
function validate () { 
  var point1 = document.getElementById("read")
  if (point1 == "") {
    alert("Please read all the infomation")
    return false;

  } 
  return true;

}
function setCookie() {
var customObject = {};
customObject.name = document.getElementById("fname").value;
customObject.lname = document.getElementById("lname").value;
customObject.email = document.getElementById("email").value;

var jsonString = JSON.stringify(customObject);

document.cookie = "cookieObject=" + jsonString;

 
}
function getCookie() {
 var nameValueArray =  document.coockie.split("=");
 var okieObject =JS0N.parse(nameValueArray[1]);

 document.getElementById("fname").value = customObject.name;
 document.getElementById("lname").value = customObject.lname;
 document.getElementById("email").value = customObject.email;

}
function clearTextBoxes() {
   document.getElementById("fname").value;
   document.getElementById("lname").value;
   document.getElementById("email").value;


}