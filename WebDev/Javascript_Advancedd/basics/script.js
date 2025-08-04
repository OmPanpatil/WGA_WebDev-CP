// 1️⃣ Working with strings in javascript :

// 1. Splice : Used to modify content of array by adding or removing the elments.  ❌not applicable in strings

// 2. Slice : Extracts a section of string without modifying the original string.

let str = "apple";
let ans = str.slice(0,1);
console.log(ans);

// 3. Template strings or Templates strings literrals : Allows embedding expressions within a string using backticks.

let strs = `The number is ${2+1}`;
console.log(strs);

// 4. Splits : splits a string into an array based on a seperator.

let ssplit = "Hehehe he is available to dance. humour, honest";
let sans = ssplit.split('h');
let vans = ssplit.split('e');
console.log(sans, vans);

// 5. replace : Replaces a specified substring with the another. Original string does not change but it's copy we have used.

let rsplit = "Hehehe he is available to dance. humour, honest";
let rans = rsplit.replaceAll('h', 'y');
console.log(rans);

// 6. Includes : It checks whether the substrings is present in that string.

let Istr = "Hello Ji kaise ho!";
let Ians = Istr.includes('o');
console.log(Ians);

// 📌 2. Conditionals operators in JS :

// 1. If-else



// 2. Else if(){}
// 3. Ternary Operator
// 4. Switch

// 3️⃣ Loops in JS :

// 1. For loop : Initialization or start; condition or end ; updation or change

// 2. while : Initialization or start, while(condition or end){}, updation or change.

let arr = [1,2,3,4,5,6,7,8,9]
let i = 1;
while(i<=arr.length){
    console.log(i);
    i++;
}

// 3. DO-while loop : 
// First it will do the output and then check the condition

let ii =1;

do{
    console.log("heyy", ii);
    ii++;
}while(ii<=arr.length);

// Break : loop ko rokta hai if(i==6) break;
// Continue : us certain point pae loop ko script karta hai aur aage continue karta hai.


// 📌Functions :

// 1. What is a function ?
// ---> Kuch code jo aap aaage kabhi chalaana chahte ho toh wou code chal jayega bas function ko call karne sae. It is a block of code which can be reuse and can be use at any point of time. And it is a first class function in js as it can be treated as variable.

function abd(){
    console.log("heyy!");
    
}
abd();

// 2. Why Function ?
// --> Jabh bhi aapko code turant nahi chalana and saath hi saath aapko us code ko reuse bhi karna hai aap function banate ho.

// ----> For code reuse, code readability, code maintainability

// 3. Why we need functions ?
//--> To reuse some code which is very long to rewrite.
// WET and DRY Methods 

// 4. How to create a functions ?
// --> 
// function  functionname(){//code} functionname();

// Fat arrow function :
// let faaf = (aa)=>{}

// 5. How to call a functions ?
// --> functionname();

// 6. How to pass a paramter ?
// --> Parameter is a variable it accepts the value from the funcion call.

function fnname(varr){     //here, varr is paramter
    console.log(varr);
    
}


// 7. How to pass an arguments to a functions ?
fnname([1,2,3,4,5,6,7,8,9]);  //here, values are arguments


// 8. Types of functions ?
// --> Divided into two parts as ES5 before and ES6 after
// 🅰️ES5 :
    // 1. Function Statement,
        function fs(){
            console.log("Function Statement!");
            
        }
        fs();
    // 2. Function Expressions,
        let fes = function fe(val){
            console.log(val);
            
        }
        fes(13);
    // 3. Anonymous Function
        // --> A function with no function name is an anonymous function.


// 🅱️ES6 :
    // 1. Fat Arrow Functions :  
    // ()=>{//code}
        // 1. Simple or BAsic Fat Arrow FUnction,
            faf = ()=>{
                console.log("hloooooo");
                
            }
            faf();
        // 2. Fat Arrow function with one parameter,
            fafop = (aa)=>{
                console.log(aa);
                
            }
            fafop(15);

// Return : For the given programm the code will run and at a point of line of code where the function is present. Then, it will leave the programm and goes under the function and it will run the function. After that it will return the function from the return present in it. To the function from where it was came and join again the line or series of code. 

// Return to from where it was called

        // 3. Fat Arrow function with Implicit Return.
        // Automatically returns the value
            let fafwir = ()=>"om";
            // let ansfas = fafwir();
            console.log(fafwir());


// IIFE :  Immediately Invoked Function Expressions

(function abcd(){
    console.log("heyy");
    
})();

let HyeeshredEffect = (function hyeeshred(){
    let iife = 3;

    return{
        handstandeffect: function(val){
            // console.log("Handstand Effect");
            console.log(val);
            
        },
        Mouseoverhandeffect: function(details){
            // console.log(details.target);
            console.log("Mouseover Hand Effect");
            
        },
    };
}) ();

HyeeshredEffect.handstandeffect("Handstand Effect");
HyeeshredEffect.Mouseoverhandeffect();


// function cbf(cval){
//     let acans = cval + 6;
//     console.log(acans);
    
// }
// cbf(function(){
//     let cval = 7;
// });
            
let arrr = [1,3,2,4,5]; 
arrr[5]=6;
console.log(arrr);

let arrr2 = new Array(40);

for(let i = 0; i<=30; i++){
    arrr2[i] = i;    //[0,1,2,3,4,5,....]
}


// 1. log "Hello, world" to the console in different ways

console.log("Hello, world!");
console.error("Hello, world");
console.warn("Hello, world");
console.info("Hello, world!");
console.table({name: "om", age: 22});

// 2. Perform 35*2-(10/2)+7 and log the result

let a = 35*2-(10/2)+7;
console.log(a);

// 3. Log the data types of "123",123, true and null using typeof

console.log(typeof("123"));
console.log(typeof(123));
console.log(typeof(true));
console.log(typeof(null));


// 4. Write a program that swaps the values of two variables 

let aa = 7;
let bb = 8;
let c;

// First method with third variable
// c=aa;
// aa = bb;
// bb = c;
// console.log(aa, bb, c);

// [a,b] = [b,a];

// Second method :

aa = aa + bb;
bb = aa - bb;
aa = aa - bb;
console.log(aa, bb);

// 5. Use console.group() to organize the logs into a group. 

// console.group("Todays work!");
console.groupCollapsed("Todays work!");
console.log("DSA");
console.log("WebDev");
console.groupEnd();

// 6. Declare a const object, modify its properties and log the updated object. 

// const cd = 9;
const oo = {
    name: "Swaz",
    age:18
};
Object.freeze(oo);  //to freeze as the const does not allows to change the values so we freeze that in anycase it should not change the const value
oo.age = 22;
console.log(oo);

// 7. Convert "50" (string) into a number using three different method 

console.log(Number("50"));
console.log(parseInt("50"));
console.log(parseFloat("50"));
console.log(+"50");

// 8. Check if javascript contains "script" without using .includes(). 

let strr = "Javascript";
// strr.includes("script");

strr.indexOf("script");
console.log(strr.indexOf("script") !== -1);

// 9. Create an array of 5 numbers and log the sum using .reduce().

let fnn = [1,2,3,4,5];
// console.log(fnn.reduce((acc, numm) => acc+numm,0));
let fnnans = fnn.reduce(function(acc,val){
    return acc+val;
},0);
console.log(fnnans);


// 10. Explain the difference between undefined, null, NaN.

// Undefined : Jabh variable banaoge value naa do toh jou value by default milegi variable ko wou undefined hoggi
// let a;  --> Declaration but not initialized

// Null : Empty value

// NaN : Mathematical Invalid calculations will get u nan.
// COncatenation when we add the string with number it will always gives concatenation as a string.
console.log("String"+8);
console.log("String"-8);

let marr = [1,2,3,4,5];
let mans = marr.map(function(val){
    // let i = 0;
    // i++;
    // return console.log(marr[i]=i, );
    // return 
    //     for(let i=0; i<=marr.length;i++){
    //         marr[i]=i;
    //         console.log(i);
    //     }    
    // return{
    //     marr[i] = i;
    //     i++;
    //     console.log(marr);
    // }    
    // return marr[i];
    return 1;
    // marr.map(function(value){
        // console.log(value);
        
    // })

});

marr.forEach(function(val){
    console.log(val);
        
});

let fmans = marr.filter(function(values){
    // return true;
    // return false;
    // return values === 2;
    return values>3;

});
console.log(fmans);


// 11. Write a for loop to print numbers from 10 to 1 in reverse 

for(let i=10; i>0; i--){
    console.log(i);
}

// 12. Use a while loop to print multiples of 3 from 3 to 30.

// let jj=3;
// let j=3;
// while(j<=30){
    
//     j++;
// }

let j = 3;
while(j<=30){
    console.log(j);
    j+=3;
}

// 13. Write a program to calculate the sum of numbers from 1 to 100 using a loop

let sum = 0;
for(let i =1; i<=100; i++){
    sum = sum+i;
    // console.log(i);
    // console.log(sum);  To not repeat it again 
}
console.log(sum);



// 15. Use a for...of loop to iterate over the string "JavaScript".

let strss = "JavaScript";
for(let i of strss){
    console.log(i);
}

// 16. Remove Duplicate values from an array 
// By In-Built Method -->

let darr = [1,1,3,3,5,5,6,6,7,7];
console.log(darr);

let darr2 = [...new Set(darr)];
console.log(darr2);


// 17. Find the second largest number in an array. 

let drr = [1,1,2,3,2,3,4,5,4,5,6,6,8,8,90,80];
let dans = [...new Set(drr)].sort(function(a,b){
    return b-a;
})
console.log(dans[1]);

// 18. Reverse an array without using .reverse().

let rrr = [1,2,3,4,5,6,7,8,9,98,3142];
let rrr2 = [];
for(let i = rrr.length-1; i>=0; i--){
    rrr2.push(rrr[i]);
    // Not applicable in dsa as it uses spaces
}

// 19. Find the most frequent element in an array. 

let mfe = [1,2,3,4,5];
let obje = {};

mfe.forEach(function(vale){
    // condition? yes : no
    obje[vale] === undefined ? (obje[vale] = 1) : obje[vale]++;
});
console.log(obje);

// 20. Create a function that takes another function as an argument and calls it after 3 seconds (HOF + Callback).

// function HOF(val){
//     console.log("Ur time is " + vv);
// }

// HOF(function(){
//     let vv = 3;
// },3);

function callfnc(call){
    setTimeout(call,3000);
}
callfnc(function(){
    console.log("Heyy");
});


let mrr = [1,2,3,4,5];
let mmans = mrr.map(function(val){
    return val+2;
});



let arrey = [1,2,3,4,5];

function aaa(ar, fn){
    let newarrey = [];
    for(let i=0; i<arrey.length; i++){
        newarrey.push(fn(arrey[i]));
    }
    return newarrey;
}
let aans = aaa(arrey, function(val){
    return val+2;
});
console.log(aans);



// 22. Write a function that uses closures to create a counter. 


function counter(){
    let count = 0;

    return function(){
        count++;
        console.log(count);
        
    };
}
let makecount = counter();
makecount();
makecount();
makecount();
makecount();

// 23. Implement a function that limits how many times another function can be called.(Closure + HOF)

function limiting(fnnn, limits){
    let totaclcall = 0;
    return function(){
        if(totaclcall<limits){
            totaclcall++;
            fnnn();
        }
        else{
            alert("Buy our premium membership😄");
        }
    }
}
let limiter = limiting(function(){
    console.log("packet reached!");
    
},3);
limiter();
limiter();
limiter();
// limiter();



// 24. Create a function that takes a callback and executes it after every `n` seconds indefinitely

function cbfc(fnccall, time){
    setInterval(fnccall, time);
}
// let cbfcans = cbfc(function(){
//     console.log("Heyy! wassup?");
    
// },2000)

// cbfcans();

// 25. Implement a function that returns a function with a preset greetings.(Closures)

function greetings(greeter){

    return function(name){
        console.log(`${greeter} ${name}`);
        
    }
}
let greetname = greetings("Hola!");
greetname("Om");

// 26. Implement a function that takes a callback and only executes it once.(HOF + closures)

function coe(fnval){
    let totalcb = 0;

    return function(){
        if(!totalcb){
            totalcb = 1;
            fnval();
        }
        else{
            alert("Already executed once.");
            
        }
    }
}
let coeans = coe(function(){
    console.log("heyy it will be execute only one time!");
    
});
coeans();
coeans();


// 27. Implement  a function that throttles another function (HOF + Closure)

function throttles(fnt, delay){
    let lastthrot = 0;
    return function(){
        let current = Date.now();
        if(current-lastthrot >= delay){
            lastthrot = current;
            fnt();
        }
    }
}

let throtans = throttles(function(){
    console.log("Will run in 2 seconds");
    
},2000);

throtans();