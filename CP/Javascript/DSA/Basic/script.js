console.log("1" - 1);
console.log(5/4);
console.log(Math.floor(5/4));   //To avoid the fractions or float 
console.log(Math.ceil(10)); // to the higher number.
console.log(Math.floor(9.8));   //To the lower number.

console.log("Math round function : ");
console.log(Math.round(10.4)); //To the lower number floor
console.log(Math.round(10.5));
console.log(Math.round(10.6)); // To the higher number as ceil

console.log(Math.abs(-8));

console.log(Math.trunc(43.785925890285938));

console.log(Math.pow(4,2));

console.log(Math.sqrt(40));
console.log(Math.trunc(Math.sqrt(40)));

console.log(Math.cbrt(125));

console.log(Math.cbrt(7));

console.log(Math.max(7,10,80));
console.log(Math.min(7,10,80));

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

let a = 7593.423
console.log(Number(a.toFixed(3)));

// Q. Compound interest 

// let p = Number(prompt("Enter ur principal amount : "));
// let r = Number(prompt("Enter ur rate : "));
// let t = Number(prompt("Enter a time : "));

// A = P*(1+r/100)^t
// Cp = A - P

// console.log((p*Math.pow(1+r/100, t)) - p);

console.log(Math.trunc(Math.floor(Math.random()*9000 + 1000)));   //1000 - 9999

// Q. Area of triangle by Heron's Formula 

let firstside = Number(prompt("Enter the first side 📐a : "));
let secondside = Number(prompt("Enter the first side 📐b : "));
let thirdside = Number(prompt("Enter the first side 📐c : "));

// Sum of all sides is a paramter and when we divide it by 2 we get the semi perimeter : (a+b+c)/2

// A = √s(s-a)(s-b)(s-c)

// And the sum of two sides is always greater and not equal to the third side. Ex : a + b <= c (Not valid), a+b > c (Valid)

if(firstside + secondside <= thirdside || firstside + thirdside <= secondside || secondside + thirdside <= firstside){
    console.log("Invalid Triangle❌");
    
}
else{
    let s = (firstside+secondside+ thirdside)/2;
    let area = Math.sqrt(s*(s-firstside)*(s-secondside)*(s-thirdside)).toFixed(0);
    // console.log("Area of the triangle is : " + `${area}` + " unit²");
    // console.log(`Area of the triangle is : ${area} unit²`);
    console.log(`Area of the triangle is : ${Number(area)} unit²`);
       
}

// Q. Circumference of a circle 

let radd = Number(prompt("Enter the radius of the circle : " ));
let Circumference = 2*Math.PI*radd;
console.log(`Circumference of the circle is : ${Circumference.toFixed(2)} unit`);


// Q. Accept two numbers and print the greatest number between them. 

let nummmers1 = Number(prompt("Enter the first number : "));
let nummmers2 = Number(prompt("Enter the second number : "));

if(nummmers1 > nummmers2){
    console.log(`${nummmers1} is greater than ${nummmers2}`);
}
else if(nummmers1 === nummmers2){
    console.log("Both are equal");
}
else{
    console.log(`${nummmers2} is greater than ${nummmers1}`);
}

// Q. Accept an integer and check whether it's an even number or odd 

let urnum = Number(prompt("ENter a number : "));

if(urnum % 2 === 0){
    console.log(`${urnum} is an even number ✅`);
}
else{
    console.log(`${urnum} is an odd number ❌`);
    
}