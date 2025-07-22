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

