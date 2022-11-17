console.log('Login script loaded')
 const emailInputControl = document.getElementById("exampleInputEmail1");
const sub = document.getElementById("submit");

 console.log(emailInputControl)

 sub.addEventListener("click", (e) => {
  console.log(emailInputControl.value);
  ValidateEmail(emailInputControl.value);
})



 function ValidateEmail(input) {

   var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

   if (input.match(validRegex)) {

    emailInputControl.style.borderColor = "none !important";

     return true;

   } else {

    emailInputControl.style.borderColor = "red !important";
    emailInputControl.innerHTML = "invalid";
     emailInputControl.focus();

     return false;

   }

 }