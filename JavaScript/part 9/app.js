// // -------DOCUMENT OBJECT MODEL------------
// // every html code turns into object in javaScript

// console.dir(document);
// console.dir(document.all);

// //-------SELECTING ELEMENTS-------------------------
// console.log("Selection elements")
// // 1. getElementById("id") - returns the ele as an object or null
// let imgObj = document.getElementById("mainImg");
// console.dir(imgObj);

// console.dir(document.getElementById("description"));

// // 2. getElementByClassName("class") - returns ele as html colection or empty collection
// console.dir(document.getElementsByClassName("boxLink"));

// let oldImgs = document.getElementsByClassName("oldImg");
// for(let i = 0; i < 3; i++){
//     console.dir(oldImgs[i].src);
// }

// // 3. getElementByTagName("tag") -  returns ele as html colection or empty collection
// let list = document.getElementsByTagName("li");
// console.dir(list);

// // 4. querySelector("")
// // Allows us to use any CSS selector
// // selects only single element of that class or type
// // 5. querySelectorAll("") - to select all use querySelectorAll - returns NodeList
// console.log("Selecting Quries");

// console.dir(document.querySelector('#mainImg'));
// console.dir(document.querySelector('.box'));
// console.dir(document.querySelector('p'));
// console.dir( document.querySelector("div a"));
// console.dir(document.querySelectorAll(".oldImg"));

// //--------MANIPULATING ELEMENTS----------------
// console.log("Manipulating Elements");

// // 1. Using Properties & Methods
// //      1.1. innerText - shows the visible text contained in a node
// //      1.2. textContent - shows  the full txt , even hidden text
// //      1.3. innerHTML - shows the full markup
// let para = document.querySelector('p');
// console.log(para.innerText);
// console.log(para.textContent);
// console.log(para.innerHTML);
// para.innerText = "Hi, I am Peter Parker!";
// para.innerText ="Hi, I am <b> Peter Parker! </b>" // will consider <b> </b> as text
// para.innerHTML ="Hi, I am <b> Peter Parker! </b>"

// let heading = document.querySelector('h1');
// heading.innerHTML = `<u> ${heading.innerText} </u>`;

// //-------MANIPULATING ATTRIBUTES-----------------------
// // obj.getAttributes("attr")
// // obj.setAttributes("attr", "val")
// // need to get before set
// console.log("Manipulating Attributes");
// let img = document.querySelector('img');
// img.getAttribute("id");
// img.setAttribute("id", "SpiderManImg")
// console.log(img.getAttribute("id"));

// //-------MANIPULATING STYLE-----------------------
// // 1. style Property of obj - for inline style
//     console.log("Manipulating Style");
//     console.log(img.style);
//     img.style.border = "5px solid black";

//     let links = document.querySelectorAll(".box a");
//     // for(let i = 0; i < links.length; i++){
//     //     links[i].style.color = "green";
//     // }
//     for(link of links){
//         link.style.color = "purple";
//     }

//     let box = document.querySelector(".box");
//     console.log(box.style); //wont see CSS file style here

// // 2. using classList
// //      classList.add(), .remove(), .contains(), .toggle()
// console.log(img.classList);
// img.classList.add("LMN");
// console.log(img.classList);
// img.classList.remove("abc");
// console.log(img.classList);
// console.log(img.classList.contains("abc"));
// img.classList.toggle("LMN", false);
// console.log(img.classList);


// //------------NAVIGATION--------------------
// // paretnElement
// // children
// // previousElementSibling / nextElementSibling
// let h4 = document.querySelector("h4");
// console.log(h4.parentElement);
// let box = document.querySelector(".box");
// console.log(box.children);
// console.log(box.previousElementSibling);
// console.log(box.nextElementSibling);


//----------------------ADDING ELEMENTS----------
// documnet.createElement()
// .appendChild() - for element only
// .append() - for ele n string
// .prepend()  for ele n string
let newP = document.createElement('p'); // wont be seen anywhere , need to append
newP.innerText = "----------HII new para----------------";
let body = document.querySelector("body");
body.append(newP); 
let box = document.querySelector(".box");
box.appendChild(newP);

let btn = document.createElement("button");
btn.innerText = "CLICK ME";

body.appendChild(btn);

newP.append("Extra lines")
newP.prepend("Prepend");
// .insertAdjacentElement("where", ele) - "beforebegin", "afterbegin", "beforeend", "afterend"
//          "afterbegin" - just inside the target ele, before first child - similar to prepend
//          "beforeend" - just inside the target ele, after last child - similar to append
let btn2 = document.createElement('button');
btn2.innerText ="NEW BUTTON";
let para = document.querySelector('p');

para.insertAdjacentElement('beforebegin', btn2);
para.insertAdjacentElement('afterbegin', btn2);
para.insertAdjacentElement('beforeend', btn2);
para.insertAdjacentElement('afterend', btn2);

//----------------------REMOVING ELEMENTS----------
// removerChild()
// remove()
body.removeChild(btn);

box.remove();