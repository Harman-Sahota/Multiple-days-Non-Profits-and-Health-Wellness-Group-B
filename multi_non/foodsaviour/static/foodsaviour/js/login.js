console.log('Login script loaded')
 const emailInputControl = document.getElementById("exampleInputEmail1");
 const passwordControl = document.getElementById("exampleInputPassword1");
const sub = document.getElementById("submit");

 console.log(emailInputControl)

 sub.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(emailInputControl.value);
  ValidateEmail(emailInputControl.value);
  ValidatePssword(passwordControl.value);
})


function ValidatePssword(inputPass) {
    if(inputPass.trim() =="") {
      passwordControl.style.border = "red 2px solid";
    }else {
      passwordControl.style.border = "green 1px solid";
    }
}


 function ValidateEmail(input) {

   var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

   if (input.match(validRegex)) {

    emailInputControl.style.border = "green 1px solid";

     return true;

   } else {

    emailInputControl.style.border = "red 2px solid";
    emailInputControl.focus();

     return false;

   }

 }