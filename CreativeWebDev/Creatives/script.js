let x=5;
let year = 2042;
let nextyear = year+1;
// Text
let dinner = 'Pasta';
let sentence = 'Tonight dinner will be' + dinner;
console.log(sentence);

let cal = Number(`${5+4}`);
console.log(cal);

// function dosomething(){}

function saysomething(){
    console.log("Hello");
}

// console.log("Hello")

// Function as a paramter and also argumrnt to be pass while calling the functions.

function wassup(param){
    console.log(param);
}
wassup('Hey there!');    //argument

function add(a,b){
    return a+b;
}
let result = add(5,6);
console.log(result);

// Arrow functions :

let multiply = (a,b) =>{
    return a*b;
}

console.log(multiply(5,6));

let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');
context.fillStyle = 'blue';
context.fillRect(100,100,300,300);   //x,y, width and height  ==> And the right top vertex moving will begans as x, y and then it gets width and height.

context.lineWidth = 4;
context.beginPath();
context.rect(100,450,300,300);
context.stroke();
// context.lineWidth = 4;

context.beginPath();
context.arc(250, 1100, 200, 0, Math.PI*2);    //the position shifting is from the center of the circle as x, y,r=> radius, and starting angle & Ending angle is in radians.And CLock-wise direction. arc(x,y,r,s,e,clock-wise-direction.)
context.stroke();

// Arrays and loops :

let yearss = [2040,2050,2060,2070];
console.log(yearss);

let menu = ['Starter', 'mains', 'Deserts', 'Drinks'];
console.log(menu);


// Loops : Initialization,condition,updation

for(let i=0; i<menu.length; i++){
    console.log(menu[i]);
}

// For pushing the values under the arrays when it is empty we use push for pushing the values.

let nummers = [];    //empty



for(let i = 0; i<=10; i++){
    nummers.push(2050+i);
}

console.log(nummers);


const width = 100;
const height = 100;
const gap = 20;
// let x,y;

for(let i =1; i<=5; i++){

    for(let j=1; j<=5; j++){
   
        // let width = 100;
        // let height = 100;
        // let gap = 20;
        let x = 80 + (width+gap)*i;
        let y = 1420 + (width+gap)*j;
        context.beginPath();
        context.rect(x, y, width, height);
        context.stroke();

        // Box inside box

        // context.beginPath();
        // context.rect(x+8, y+8, width-16, height-16);
        // context.stroke();

        // Random box with inside deco box

        // if(i>0 && i<4){
        //     context.beginPath();
        //     context.rect(x+10, y+10, width-23, height-23);
        //     context.stroke();
        // }

        // Math.random between 0 and 1

        if(Math.random() > 0.5){
            context.beginPath();
            context.rect(x+11, y+11, width-23, height-23);
            context.stroke();
        }

    }

    // let width = 100;
    // let height = 100;
    // let gap = 20;
    // let x = 80 + (width+gap)*i;
    // let y = 1420 + (height+gap)*i;
    // let y = 1420;

    // context.beginPath();
    //context.rect(80 + 100*i, 1420, 100,100);  //we can add more x by adding it with x value  + width * i (numbers of same shape)
    // context.rect(x, y, width, height);
    // context.stroke();
}


