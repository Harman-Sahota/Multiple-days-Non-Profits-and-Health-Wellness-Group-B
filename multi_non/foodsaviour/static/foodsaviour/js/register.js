// progress bar
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const consent1 = document.getElementById("consent-check1");
const consent2 = document.getElementById("consent-check2");
const circles = document.querySelectorAll(".circle");
const confirmpassword = document.getElementById("confirm-password");
const password = document.getElementById("password");

let currentActive = 1;

next.addEventListener("click",()=>{

c = `card-${currentActive}`;
if(currentActive+1 < circles.length)
d = `card-${currentActive+1}`;
else
d = "card-3"
a = document.getElementById(c);
e = document.getElementById(d);
a.style.display = "none";
e.style.display = "block";


currentActive++;
if(currentActive> circles.length){
    currentActive = circles.length;
}
update();
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
    var submit = document.getElementById("submit");
    progress.style.width = ((actives.length-1)/(circles.length-1))*100+"%";

    if(currentActive===1){
        prev.disabled=true;
        //submit.disabled = true;
    } else if(currentActive===circles.length){
       next.disabled=true;
      // checked();

    }else{
        prev.disabled=false;
        next.disabled=false;
        //submit.disabled = true;
    }
}

 function CheckboxChecked(){
if(consent1.checked == false){
    consent1.style.border = "red 2px solid";
}
if(consent2.checked == false){
    consent2.style.border = "red 2px solid";
}
}

function changeconsent1() {
    if(consent1.checked == true){
        consent1.style.border = "green 2px solid";
        consent2.style.border = "grey 1px solid";
        consent2.checked = false;
    }
}

function changeconsent2() {
    if(consent2.checked == true){
        consent2.style.border = "green 2px solid";
        consent1.style.border = "grey 1px solid";
        consent1.checked = false;
    }
}

const sub = document.getElementById("submit");

 sub.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("submitting.");
  CheckboxChecked();
 validateFirstName();
 validateLastName();
 ValidateEmail();
 validatePassword();
 validateConfirmPassword();
 validateOrg();
 validateRoles();
})

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
    }else {
        role1.style.border = "red 1px solid";
        role2.style.border = "red 1px solid";
        role3.style.border = "red 1px solid";
        role4.style.border = "red 1px solid";
        role5.style.border = "red 1px solid";
        role6.style.border = "red 1px solid";
    }
}



function validateOrg() {
    const organization = document.getElementById("organization");
    if(organization.value.trim() =="") {
        organization.style.border = "red 2px solid";
    }else {
        organization.style.border = "green 1px solid";
    }
}


function validateConfirmPassword() {
   
    var regex = /^[A-Za-z]\w{7,14}$/;
    if(confirmpassword.value.trim() =="") {
        confirmpassword.style.border = "red 2px solid";     
    }else if ( !confirmpassword.value.match(regex)){
        confirmpassword.style.border = "red 2px solid";
        document.getElementById("passerror2").style.display= "block";  
    }else if(password.value != confirmpassword.value) {
        document.getElementById("passerror3").style.display= "block";  
    } else {
        confirmpassword.style.border = "green 1px solid";
        document.getElementById("passerror2").style.display= "none";
        document.getElementById("passerror3").style.display= "none";  
    }
   
}

function validatePassword() {
   
    var regex = /^[A-Za-z]\w{7,14}$/;
    if(password.value.trim() =="") {
        password.style.border = "red 2px solid";    
    }else if ( !password.value.match(regex)) {
        password.style.border = "red 2px solid";
        document.getElementById("passerror1").style.display= "block";
    }else {
        password.style.border = "green 1px solid";
        document.getElementById("passerror1").style.display= "none";
    }
}

function ValidateEmail() {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const email = document.getElementById("email");
    if(email.value.trim() =="" || !email.value.match(validRegex)) {
        email.style.border = "red 2px solid";
    }else {
        email.style.border = "green 1px solid";
    }
}

function validateLastName() {
    var regex = /^[a-z0-9]+$/i;
    const lastNameControl = document.getElementById("lastname");
    if(lastNameControl.value.trim() =="" || !lastNameControl.value.match(regex)) {
        lastNameControl.style.border = "red 2px solid";
    }else {
        lastNameControl.style.border = "green 1px solid";
    }
}

function validateFirstName() {
    var regex = /^[a-z0-9]+$/i;
    const firstnameControl = document.getElementById("firstname");
    if(firstnameControl.value.trim() =="" || !firstnameControl.value.match(regex)) {
        firstnameControl.style.border = "red 2px solid";
    }else {
        firstnameControl.style.border = "green 1px solid";
    }
}




