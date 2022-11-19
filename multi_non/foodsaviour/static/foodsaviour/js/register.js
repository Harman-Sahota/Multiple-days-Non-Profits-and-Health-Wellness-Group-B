// progress bar
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const consent1 = document.getElementById("consent-check1");
const consent2 = document.getElementById("consent-check2");
const consent3 = document.getElementById("consent-check3");
const circles = document.querySelectorAll(".circle");
const confirmpassword = document.getElementById("confirm-password");
const password = document.getElementById("password");
const submit = document.getElementById("submit")
let currentActive = 1;
var result = false;
next.addEventListener("click",()=>{

c = `card-${currentActive}`;
if(currentActive+1 < circles.length)
d = `card-${currentActive+1}`;
else
d = "card-3"

if(c == 'card-1'){
    validateFirstName();
    validateLastName();
    ValidateEmail();
    validatePassword();
    validateConfirmPassword();
    validateOrg();
    result =  validateFirstName() && validateLastName() && ValidateEmail() && validatePassword() && validateConfirmPassword() && validateOrg();
}
if(c == 'card-2'){
    validateRoles();
     result =   validateRoles() ;
 }

 if(c == 'card-3'){
    CheckboxChecked();
    result =   CheckboxChecked();
}
if(result){
a = document.getElementById(c);
e = document.getElementById(d);

a.style.display = "none";
e.style.display = "block";


currentActive++;
if(currentActive> circles.length){
    currentActive = circles.length;
}
update();
}else{
    if(c == 'card-1'){
    window.alert('Please Fill in all the fields correctly');
    }
    if(c == 'card-2'){
        window.alert('Please choose a role');
        }
}



});

prev.addEventListener("click",()=>{


    c = `card-${currentActive}`;
    if(currentActive-1 > 1)
    d = `card-${currentActive-1}`;
    else
    d = "card-1"
    a = document.getElementById(c);
    e = document.getElementById(d);
    console.log(a.id);
    a.style.display = "none";
    e.style.display = "block";

    currentActive--;
    
    if(currentActive < 1){
        currentActive = 1;
    }

update();

});

function update(){
    circles.forEach((circle,idx)=>{
        if(idx < currentActive){
            circle.classList.add("active");
        }else{
            circle.classList.remove("active");
        }
    });

    const actives = document.querySelectorAll(".active");

    progress.style.width = ((actives.length-2)/(circles.length-1))*100+"%";

    if(currentActive===1){
        prev.disabled=true;
        submit.disabled = true;
    } else if(currentActive===circles.length){
       next.disabled=true;
       //checked();

    }else{
        prev.disabled=false;
        next.disabled=false;
        submit.disabled = true;
    }
}

 function CheckboxChecked(){
if(consent1.checked == false){
    consent1.style.border = "red 2px solid";
   submit.disabled = true;
  
  
   
}
if(consent2.checked == false){
    consent2.style.border = "red 2px solid";
 
   
}
if(consent3.checked == false){
    consent3.style.border = "red 2px solid";
     
     
}

if(consent1.checked == true || consent2.checked == true || consent3.checked == true){
    return true;
}else{
    return false;
}

}

function changeconsent1() {
    if(consent1.checked == true){
        consent1.style.border = "green 2px solid";
        consent2.style.border = "grey 1px solid";
        consent2.checked = false;   
        consent3.style.border = "grey 1px solid";
        consent3.checked = false;   
        submit.disabled = false;
     

    }else{
         submit.disabled = true;
 
         
     }
}

function changeconsent2() {
    if(consent2.checked == true){
        consent2.style.border = "green 2px solid";
        consent1.style.border = "grey 1px solid";
        consent1.checked = false;
        consent3.style.border = "grey 1px solid";
        consent3.checked = false;
        submit.disabled = true;
    }
}

function changeconsent3() {
    if(consent3.checked == true){
        consent3.style.border = "green 2px solid";
        consent1.style.border = "grey 1px solid";
        consent1.checked = false;
        consent2.style.border = "grey 1px solid";
        consent2.checked = false;
        submit.disabled = true;
    }
}

function validateRoles() {
    const role1 = document.getElementById("flexCheckDefault1");
    const role2 = document.getElementById("flexCheckDefault2");
    const role3 = document.getElementById("flexCheckDefault3");
    const role4 = document.getElementById("flexCheckDefault4");
    const role5 = document.getElementById("flexCheckDefault5");
    const role6 = document.getElementById("flexCheckDefault6");

    if(role1.checked  || role2.checked || role3.checked|| role4.checked|| role5.checked ||role6.checked) {
        role1.style.border = "grey 1px solid";
        role2.style.border = "grey 1px solid";
        role3.style.border = "grey 1px solid";
        role4.style.border = "grey 1px solid";
        role5.style.border = "grey 1px solid";
        role6.style.border = "grey 1px solid";
        return true;
    }else {
        role1.style.border = "red 1px solid";
        role2.style.border = "red 1px solid";
        role3.style.border = "red 1px solid";
        role4.style.border = "red 1px solid";
        role5.style.border = "red 1px solid";
        role6.style.border = "red 1px solid";
        return false;
    }
}



function validateOrg() {
    const organization = document.getElementById("organization");
    if(organization.value.trim() =="") {
        organization.style.border = "red 2px solid";
        return false;
    }else {
        organization.style.border = "green 1px solid";
        return true;
    }
}


function validateConfirmPassword() {
   
    var regex = /^[A-Za-z]\w{7,14}$/;
    if(confirmpassword.value.trim() =="") {
        confirmpassword.style.border = "red 2px solid"; 
        return false;    
    }else if ( !confirmpassword.value.match(regex)){
        confirmpassword.style.border = "red 2px solid";
        document.getElementById("passerror3").style.display= "block";  
        return false;
    }else if(password.value != confirmpassword.value) {
        document.getElementById("passerror3").style.display= "block";  
         return false;
    } else {
        confirmpassword.style.border = "green 1px solid";
        document.getElementById("passerror3").style.display= "none"; 
        return true; 
    }
   
}

function validatePassword() {
   
    var regex = /^[A-Za-z]\w{7,14}$/;
    if(password.value.trim() =="") {
        password.style.border = "red 2px solid";    
    }else if ( !password.value.match(regex)) {
        password.style.border = "red 2px solid";
        document.getElementById("passerror1").style.display= "block";
        return false;
    }else {
        password.style.border = "green 1px solid";
        document.getElementById("passerror1").style.display= "none";
        return true;
    }
}

function ValidateEmail() {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const email = document.getElementById("email");
    if(email.value.trim() =="" || !email.value.match(validRegex)) {
        email.style.border = "red 2px solid";
        return false;
    }else {
        email.style.border = "green 1px solid";
        return true;
    }
}

function validateLastName() {
    var regex = /^[a-z0-9]+$/i;
    const lastNameControl = document.getElementById("lastname");
    if(lastNameControl.value.trim() =="" || !lastNameControl.value.match(regex)) {
        lastNameControl.style.border = "red 2px solid";
        return false;
    }else {
        lastNameControl.style.border = "green 1px solid";
        return true;
    }
}

function validateFirstName() {
    var regex = /^[a-z0-9]+$/i;
    const firstnameControl = document.getElementById("firstname");
    if(firstnameControl.value.trim() =="" || !firstnameControl.value.match(regex)) {
        firstnameControl.style.border = "red 2px solid";
        return false;
    }else {
        firstnameControl.style.border = "green 1px solid";
        return true;
    }
}




