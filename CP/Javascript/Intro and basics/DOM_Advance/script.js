let img = document.createElement('img');
img.src = 'https://images.unsplash.com/photo-1586461715699-1e192dcd04c6?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
document.querySelector("body").appendChild(img);

let button = document.createElement('button');
button.textContent='click here';
document.querySelector("body").appendChild(button);
document.querySelector("body").removeChild(button);

let btn2 = document.createElement('button');
btn2.textContent = 'make new card';
document.querySelector("body").appendChild(btn2);
btn2.style.padding = '1vw 1.3vw';
btn2.style.borderRadius = '5vw';
btn2.addEventListener("dbclick",function(){
    alert("Wassup bro!");
    btn2.textContent = "Starting...";
    btn2.style.backgroundColor = 'lightblue';
});

