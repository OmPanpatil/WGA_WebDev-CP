console.log("Conquer the web with JS!");
console.warn("Warning : Once u started learning JS, u will never stop learning it!");
console.error("Error : JS is not a programming language, it is a scripting language and practice it daily to become a pro!");

var a = 12;
var b = 13;
console.log("Heyy!");
console.log(a+b);

// Browser Inbuilt Feature : Console,Prompt, alert
// Console --> log, warn, error
console.log("Hello");
console.warn("Warning : Once u started learning JS, u will never stop learning it!");
console.error("Error : JS is not a programming language, it is a scripting language and practice it daily to become a pro!");

// alert('HEyyy!');

// Prompt: Alert ka bhai hai jo ki aek kadam agae hai jismae hum puch sakhte hai user sae.

var nam = prompt("Naam batao")
;
console.log(nam);


// let arr = [1,2,3,4,5];
// arr.forEach(function(val){
//     let sum=0;
//     for(let i=0; i<=arr.length; i++){
//         let sum =val + i;
//         console.log(sum);
//     }
// });

console.log(this);

let obj = {
    namee: function(){
        console.log(this);
        
    },
    age: 22
};

obj.namee();

let obj2 = {
    namess: function(){
        console.log(this);
        function childfnc(){
            console.log(this);
        }
        childfnc();
    },
    age:24
};

obj2.namess();


let obj3 = {
    naame: function(){
        console.log(this.age);
        let child = ()=>{
            console.log(this);
        }
        child();
    },
    age: 25
}

obj3.naame();

document.querySelector('button')
.addEventListener("click",function(){
    console.log(this);
    
});

let obj4 = {namm: 'om'};

function abcdd(aa,bb,cc){
    console.log(this, aa,bb,cc);
}

abcdd.call(obj4,1,2,3);
// console.log(answer);

let obj5 = 12;

function aabbcc(a1,b1,c1){
    console.log(this, a1,b1,c1);
}
aabbcc.apply(this,[1,2,3]);

console.log("Prototypal Inheritance : ");

function Makehuman(nnamee,aage){
    this.nnamee = nnamee;
    this.aage = aage;
}

Makehuman.prototype.College = function(){
    console.log(this.nnamee);
    console.log(this.aage);
    
}

const users1 = new Makehuman("Sahil",30);
const user2 = new Makehuman("Harshita", 22);


let parent = document.querySelector("#parent");
parent.addEventListener("click", function(details){
    if(details.target.id === "play"){
        console.log("Play the music!");
    }
    else if(details.target.id ==='pause'){
        console.log("Pause the music");
        
    }
})


// DOM

console.log("DOM");

