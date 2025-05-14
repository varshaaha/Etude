function validatePassword()
{
  var password=document.getElementById("password").value;
  var pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  if(pattern.test(password))
  {
    document.getElementById("firstPassword").innerHTML="Valid Password";
    document.getElementById("firstPassword").style.color="green";
  }
}

function secondPassword()
{
  var password=document.getElementById("password").value;
  var password2=document.getElementById("password2").value;
  if(password===password2)
  {
    document.getElementById("secondPassword").innerHTML="Passwords match";
    document.getElementById("secondPassword").style.color="green";
  }
}

function validateEmail() {
    var email = document.getElementById("email").value;
    var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (pattern.test(email)) {
      document.getElementById("emailValidation").innerHTML="Valid E-mail";
      document.getElementById("emailValidation").style.color = "green";
    } else {
      document.getElementById("emailValidation").style.color = "red";
    }
}

