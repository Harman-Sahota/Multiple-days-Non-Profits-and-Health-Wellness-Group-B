// progress bar
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click",()=>{
currentActive++;
console.log(circles.length)
if(currentActive> circles.length){
    currentActive = circles.length;
}
update();
});

prev.addEventListener("click",()=>{
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

    progress.style.width = ((actives.length-1)/(circles.length-1))*100+"%";

    if(currentActive===1){
        prev.disabled=true;
    } else if(currentActive===circles.length){
       next.disabled=true;
    }else{
        prev.disabled=false;
        next.disabled=false;
    }
}


// form
let activeIndex =0;
const cards = document.getElementsByClassName("card");

const handlenextcard = () =>{

    const nextIndex = activeIndex + 1 <= cards.length - 1 ? activeIndex + 1 : 0;
    
    const currentGroup = document.querySelectorAll('[data-index="${activeIndex}"]');
    const nextGroup = document.querySelectorAll('[data-index="${nextIndex}"]');
    console.log(nextIndex);

    currentGroup.dataset.status = "after";
    
    nextGroup.dataset.status = "active";

    activeIndex = nextIndex;

}