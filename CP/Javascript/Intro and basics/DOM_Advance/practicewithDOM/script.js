let h1 = document.createElement('h1');
h1.textContent = "Heyyy!";
h1.style.color = "lightcoral";
h1.style.padding = "2vw";
h1.style.fontSize = "4vw";
h1.style.fontFamily = "Helvetica Now Display";
document.querySelector("body").appendChild(h1);

// 1. Create an HTML Page with a button. When the button is clicked, change the text of the paragraph element.

let btn = document.createElement('button');
btn.style.color = 'violet';
btn.style.backgroundColor = "white";
btn.style.border = "2px solid black";
btn.style.borderRadius = "5vw";
btn.style.margin = "2vw";
btn.style.padding = "1vw 1.3vw";
btn.style.fontSize = "1.5vw";
btn.textContent = "Submit here";
document.querySelector("body").appendChild(btn);



let para = document.createElement('p');
para.textContent = "This text is gonna change😍";
para.style.color = 'blue';
para.style.fontSize = "2.4vw";
para.style.fontFamily = "Helvetica";
document.querySelector("body").appendChild(para);

btn.addEventListener("click", function(){
    btn.textContent = "Submitted🙌";
    btn.style.color = "white";
    btn.style.backgroundColor = "violet";
    para.style.color = 'brown';
    para.textContent = "This text has been changed now 😁";

});

// 2. Create a page with two images and a button. When the button is clicked, swap the source attribute of the images.

// let img1 = document.createElement('img');
// img1.src = "https://images.unsplash.com/photo-1504006833117-8886a355efbf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
// img1.style.height = 
// document.querySelector("body").appendChild(img1);

// let q2 = document.createElement('div');
// q2.style.backgroundColor = "lightcoral";
// q2.style.marginTop = "1vw";
// q2.style.height = "50vh";
// q2.style.width = "100vw";
// document.querySelector("body").appendChild(q2);


let img1 = document.createElement('img');
img1.src = "https://images.unsplash.com/photo-1504006833117-8886a355efbf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
img1.style.height = "70%";
img1.style.width = "30%";
img1.style.objectFit = "cover";
img1.style.objectPosition = "center";
img1.style.padding = "2vw";
// img1.style = "inlineblock";
document.querySelector("body").appendChild(img1);


let img2 = document.createElement('img');
img2.src = "https://images.unsplash.com/photo-1624295550231-06453b87801f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
img2.style.height = "70%";
img2.style.width = "30%";
img2.style.objectFit = "cover";
img2.style.objectPosition = "center";
img2.style.padding = "2vw";
// img1.style = "inlineblock";
document.querySelector("body").appendChild(img2);

let btnn = document.createElement('button');
btnn.style.backgroundColor = "black";
btnn.textContent = "squirrel bombings⚡";
btnn.style.padding = "1vw 1.3vw";
btnn.style.color = "white";
btnn.style.fontSize = "1.5vw";
btnn.style.fontFamily = "Helvetica";
btnn.style.border = "2px solid blue";
btnn.style.borderRadius = "5vw";
document.querySelector("body").appendChild(btnn);

btnn.addEventListener("click",function(){
    let src1 = img1.src;
    let src2 = img2.src;

    img1.src =src2;
    img2.src =src1;
});



// 3. Create a form with input field and a submit button.Use javascript to validate the form and display an error message if the input is invalid.



// let form = document.createElement('form');
// form.style.padding = "2vw";
// form.style.backgroundColor = "lightblue";
// document.querySelector("body").appendChild(form);

// label

// const inputlabel = document.createElement('label');
// inputlabel.textContent = "Full name : ";
// inputlabel.style.fontSize = "2vw";
// inputlabel.style.fontFamily = "gilroy";
// document.querySelector("body").appendChild(inputlabel);

// input

// const input = document.createElement('input');


// let form = document.querySelector('form');
// let input1 = document.querySelector('.innp1'); 
// let input2 = document.querySelector('.innp2'); 
// let headsss3 = document.querySelector('.hs3');
// form.addEventListener("submit", function(ev){
//     ev.preventDefault();
//     console.log(input1.value);
//     console.log(input2.value);
//     if(input1.value === '' || input2.value === ''){
//         headsss3.textContent = "This is an error. Some field are empty.";
//         headsss3.style.color = "brown";
//     }
//     else{
//         headsss3.textContent = "Submitted!";
//     }
// });


let forms = document.querySelector('form');
let inputs = document.querySelectorAll('input[type = "text"]');
let headsss3 = document.querySelector('h3');


forms.addEventListener("submit",function(eve){
    eve.preventDefault();
    // For nodelist --> unit1 and unit2 it is 2 units. so, and it is array so we can treat it as per the 0 indexing. Then, we can make use of for loop the forEach makes a bit complicated.

    for(let i=0; i<inputs.length; i++){
        if(inputs[i].value.trim() === ''){
            headsss3.textContent = "Error, some entries are still blank.";
            headsss3.style.color = "lightcoral";
            break;
        }
    }

});


// 4. Create an unordered list. Allow users to add and remove list items dynamically using buttons.






