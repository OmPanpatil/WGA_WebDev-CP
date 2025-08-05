let head1 = document.createElement('h1');
head1.textContent = "Heyy";
head1.style.fontFamily = "Helvetica";
head1.innerHTML = '<i>head1</i>'
document.querySelector("body").appendChild(head1);
head1.addEventListener("click",function(){
    console.log("heyy");
    head1.textContent = "Heyy";
    head1.style.color = "Orangered";
})