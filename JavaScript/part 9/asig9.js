
let body = document.querySelector('body');

//Q1
let btn = document.createElement('button');
btn.innerText = "Click me";

let input = document.createElement('input');
input.type= 'text';
body.appendChild(btn);
body.appendChild(input);

//Q2
input.getAttribute('placeholder');
input.setAttribute('placeholder', "username");

btn.id='btn';
// btn.getAttribute('id');
// btn.setAttribute('id', "btn");

console.log(btn);

//Q3
let button = document.querySelector("#btn");
button.style.backgroundColor="blue";
button.style.color = "white";

//Q4
let h1 = document.createElement('h1');
h1.innerHTML = "<u> DOM Practice </u>";
h1.style.color = "purple";

body.append(h1);

//Q5
let p = document.createElement('p');
p.innerHTML = "<b> Delta </b> Practice";
body.appendChild(p);
