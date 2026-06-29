// let btns = document.querySelectorAll('button');
// console.log(btns);

// //------Mouse Events----------
// // onclick
// // onmouenter
// // these property can get only single value

// // for(btn of btns){
// //     btn.onclick = clicked;
// //     btn.onmouseenter = entered;
// // }

// function clicked(){
//     console.log("button was clicked");
// };
// function entered(){
//     console.log("mouse entered button");
// }

// //---------Event Listner----------
// // when we want multiple functions to take place 
// // there can me multiple event listners 
// // addEventListener('event', fucntion);

// for(btn of btns){
//     // btn.addEventListener('click', clicked);
//     // btn.addEventListener('click', entered);
//     btn.addEventListener('dblclick', function(){
//         console.log("Double");
//     });
// }


// //---------Activity---------->

// let btn = document.querySelector('button');
// btn.addEventListener('click', function (){
//     let h2 = document.querySelector('h2');
//     let div = document.querySelector('div');
//     let randColor = getRandColor();
//     div.style.backgroundColor = randColor;
//     h2.innerText = randColor;
// });

// function getRandColor(){
//     let r = Math.floor(Math.random() * 256);
//     let g = Math.floor(Math.random() * 256);
//     let b = Math.floor(Math.random() * 256);
//     let color = `rgb(${r},${g},${b})`;
//     return color;
// }

// //-----------------------------------------------------------------
// //--------------Event Listener for other Elements-------------------
// let p = document.querySelector('p');
// // p.addEventListener('click', function(){
// //     console.log("para");
// // });

// let div = document.querySelector('div');
// // div.addEventListener('mouseenter',function(){
// //     console.log("div");
// // });

// //--------this in Event Listener----------
// // this in callback refers to the element obj 
// let btn = document.querySelector('button');
//  function changeColor(){
//     console.log(this);
//     this.style.backgroundColor='pink';
// };
// // btn.addEventListener('click', changeColor);
// // p.addEventListener('click', changeColor);
// // div.addEventListener('click', changeColor);


// //---------- Keyboard Events-----------
// // keydown, keypress, keyup
// btn.addEventListener('click', function(event){
//     console.log(event);
// });
// btn.addEventListener('dblclick', function(event){
//     console.log(event);
// });

// let input = document.querySelector('input');

// input.addEventListener('keydown', function(event){
//     console.log("key = ", event.key);
//     console.log("Code = ", event.code);
//     console.log("key down");
// });

// //------------------------------------------------------------
// //------------------form events--------------
// // submit
// // even.preventDefault()
// let form = document.querySelector('form');
// // form.addEventListener('submit', function(event){
// //     event.preventDefault();
// //     alert("submited");
// // })

// //---------------Extracting data from Forms------------
// form.addEventListener('submit', function(event){
//     event.preventDefault();
    
//     let user = document.querySelector('#user');
//     console.log(user.value);
//     let pass = document.querySelector('#pass');
//     console.log(pass.value);
// });
// console.dir(form.elements);

// //--------------Change & Input Event ----------------
// // change - works on <input> <textarea> & <select> - when value of an ele has been changed - chnage in intial n finnal stage
// // input - any change in the input - even small ones

// let user = document.querySelector('#user');
// user.addEventListener('change', function(){
//     console.log("change ");
//     console.log(this.value);
// });

// // user.addEventListener('input', function(){
// //     console.log("input");
// //     console.log(this.value);
// // });

// //--------- Event Bubbling---------------
// // when we have nested elements, if the event listner of inner ele is trigger then the event listner of outer will also get triggered
// // to stop this event bubbling use - event.stopPropogation()
// let div = document.querySelector(".EB");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener('click', function(){
//     console.log("div was clicked")
// });

// ul.addEventListener('click', function(){
//     console.log("ul was clicked")
// });

// for(li of lis){
//     li.addEventListener('click', function(event){
//         event.stopPropagation();
//         console.log("li was clicked")
//     });
// }

// ---------------------------------------
//-------------To Do Activity -------------
let taskInp = document.querySelector('#taskInp');
let addBtn = document.querySelector("#addBtn");
let list = document.querySelector('#list');


addBtn.addEventListener('click', function (){    
    let task = document.createElement('li');
    task.innerText = taskInp.value;
    let delBtn = document.createElement('button');
    delBtn.innerText = "Delete";
    delBtn.classList.add("delBtn");
    task.appendChild(delBtn);
    list.appendChild(task);
    taskInp.value = '';
});

// this wont apply to the new delBtns, only to the existing delBtns
// let delBtns = document.querySelectorAll('.delBtn');
// for(btn of delBtns){
//     btn.addEventListener('click', function(){
//         let par = this.parentElement;
//         par.remove();
//     })
// }
// to apply use event delegation

//-----------------Event Delegation--------------
// done using bubbling
list.addEventListener('click', function(event){
    console.log(event.target.nodeName);
    if(event.target.nodeName == 'BUTTON'){
        let par = event.target.parentElement;
        par.remove();
    }
})