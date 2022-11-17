console.log('Login script loaded')
 const emailInputControl = document.getElementById("exampleInputEmail1");

 console.log(emailInputControl)
 emailInputControl.addEventListener('change', (e) => {
     console.log(e.target.value);
     ValidateEmail(e.target.value);
 })
 function ValidateEmail(input) {

   var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

   if (input.match(validRegex)) {

     alert("Valid email address!");

     return true;

   } else {

     alert("Invalid email address!");

     emailInputControl.focus();

     return false;

   }

 }