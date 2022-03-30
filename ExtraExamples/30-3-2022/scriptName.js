var validRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;
var x = document.getElementById('em').value;
function ValidateEmail() {
  if (x.match(validRegex)) {

    alert("Valid email address!");

    return true;

  } else {

    alert("Invalid email address!");

    return false;

  }
}