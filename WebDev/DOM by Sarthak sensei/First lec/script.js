let head1 = document.createElement('h1');
head1.textContent = "Heyy";
head1.style.fontFamily = "Helvetica";
head1.innerHTML = '<i>head1</i>'
document.querySelector("body").appendChild(head1);
head1.addEventListener("click",function(){
    console.log("heyy");
    head1.textContent = "Heyy";
    head1.style.color = "Orangered";
});


const yourevent = new Event("ApnaEvent");
let btn = document.createElement('button');
btn.textContent = "Ur Event!";
document.querySelector("body").appendChild(btn);
// const yourevent = new Event("ApnaEvent");
btn.addEventListener("click", function(){
    btn.dispatchEvent(yourevent);
})
btn.addEventListener("ApnaEvent", function(){
    alert("Tumhara  event");
    console.log("Tumhari party");
    
    
});
// document.querySelector("button").dispatchEvent(yourevent);


let box = document.createElement('div');
box.classList.add('box-inner');
document.querySelector("body").appendChild(box);

let torches = document.querySelector('torch');
torches.style.height = '5vh';
torches.style.width = '5vw';
torches.style.backgroundColor = 'lightcoral';
// torches.style.position = 'absolute';


const items = ['A', 'B', 'C', 'D', 'E'];


const container = document.createElement('div');
container.id = 'container';
document.querySelector("body").appendChild(container);
console.log(container);


items.forEach(item => {
    const box = document.createElement('div');
    box.className = 'box';
    box.textContent = item;
    container.appendChild(box);
});



