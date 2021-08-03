
let text = document.querySelector("#text");
let sub = document.querySelector("#sub");
let add = document.querySelector("#increase");
let reset = document.querySelector("#reset");
var body = document.getElementsByTagName("body");

add.addEventListener('click',()=>{
    text.value = parseInt(text.value) + 1;
});
sub.addEventListener('click',()=>{
    text.value = parseInt(text.value) - 1;
});
reset.addEventListener("click",()=>{
    text.value = parseInt("0");
});
