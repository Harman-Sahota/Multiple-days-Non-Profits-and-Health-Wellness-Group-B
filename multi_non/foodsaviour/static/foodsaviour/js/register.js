// progress bar
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const circles = document.querySelectorAll(".circle");

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
        submit.disabled = true;
    } else if(currentActive===circles.length){
       next.disabled=true;
       submit.disabled = false;
    }else{
        prev.disabled=false;
        next.disabled=false;
        submit.disabled = true;
    }
}


// form


