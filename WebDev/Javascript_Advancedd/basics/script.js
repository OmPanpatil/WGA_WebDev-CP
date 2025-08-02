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

for(let i = 0; i<=arrr2.length; i++){
    arrr2[i] = i;    //[0,1,2,3,4,5,....]
}
