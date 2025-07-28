// Selection

let btn = document.querySelector('button');
// Change karna -yeh kardo=>Change
btn.textContent = "Starting in 3s..."
btn.style.margin = '2vw';
btn.style.padding = '1.5vw 1vw';


// btn.addEventListener("click",function(){});

let contnt =document.querySelector('.page1');
// contnt.style.width = '100%';
// contnt.style.height = '100%';
contnt.classList.add('page1');

let underpart1 = document.querySelector('.underp1');
underpart1.classList.add('underp1');

let image1 = document.querySelector('#ims1');
image1.addEventListener("fullscreenchange", function(){

})



// image1.style.height = 50%;
// image1.style.weight = 10%;

let headsunder1 = document.querySelector('.underims1');
headsunder1.addEventListener("click",function(){});
// headsunder1.style.fontSize = '5vw';
headsunder1.classList.add('underims1');


let underpart2 = document.querySelector('.underp2');
underpart1.classList.add('underp2')

let image2 = document.querySelector('#ims2');
image2.addEventListener("fullscreenchange", function(){

})

let headsunder2 = document.querySelector('.underims1');
headsunder2.addEventListener("click",function(){});

headsunder2.classList.add('underims2');

let heading1 = document.querySelector('.head1');
// heads5.textContent = "heyy";
heading1.textContent += 'om';
// heads5.innerHTML = '<i>heyy</i>';
heading1.innerHTML += '<i>  heyy</i>';

// Manipulating styles and classes :

heading1.style.color = 'red';
heading1.style.fontFamily = 'Gilroy';
heading1.style.padding = '5vw';


let page2 = document.createElement('page2');
page2.classList.add('page2');
document.querySelector("body").appendChild(page2);

let img = document.createElement("img");
img.src = "https://images.unsplash.com/photo-1640903581708-8d491706515b?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

document.querySelector("body").appendChild(img);

