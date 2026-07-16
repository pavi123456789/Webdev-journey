const btns = document.querySelectorAll("button");

for(let btn of btns){
    btn.addEventListener("click", ()=>{
        btn.style.backgroundColor="green";
        setTimeout(() => {
            btn.style.backgroundColor="lightgrey";
        }, 1000);
       
    })
};