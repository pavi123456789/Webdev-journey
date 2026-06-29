//Q1
let input = document.querySelector('input');
input.addEventListener('mouseout', ()=>{
    console.log("mouse out");
});

input.addEventListener('keypress', (event)=>{
    console.log(event);
    console.log("keyypress");
});

let textarea = document.querySelector('textarea');
textarea.addEventListener('scroll', (event)=>{
    console.log(event);
    console.log("scroll");
});

document.addEventListener('load', (event)=>{
    console.log(event);
    alert("load");
});

//Q2
let body = document.querySelector('body');
let button = document.createElement('button');
button.innerText = "click me";
body.appendChild(button);
button.addEventListener('click', function(){
    this.style.backgroundColor = 'green';
});

//Q3
let user = document.querySelector("#user");
user.addEventListener('input', function(){
    user.value = user.value.replace(/[^a-zA-Z ]/g, ''); // matches anything that is not a-z, A-Z, or space
    let display = document.querySelector('#display');
    display.innerText = user.value;
});