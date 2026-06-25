// for(let i = 0; i < 5; i++){
//     console.log(i);
// }

// for(let i = 1; i <= 15; i+2){
//     console.log(i);
// }

// let num = prompt("Enter a num: ")
// let n = parseInt(num);

// for(let i = n; i <= n*10; i+=n){
//     console.log(i);
// }

// for(let i = 1; i <= 3; i++){
//     for(let j = 1; j <= 3; j++){
//         console.log(j)
//     }
// }

// let i = 1;
// while(i < 10){
//     console.log(i);
//     i++;
// }

// let fav = "Lucy";
// let guess = prompt("Whats my favorite movie? (To quit type : Q!)");
// while(guess.trim().toLowerCase() != fav.trim().toLowerCase() && guess != "Q!"){
//     guess = prompt("Wrong guess. Try again (To quit type : Q!)");
//     if(guess == fav) console.log("Correct");
// }


// // ------------- For of loop --------------- (similar to for each)
// let arr = ["a", "b", "c", "d", "e"];
// for(ele of arr){
//     console.log(ele)
// }

//------------ Todo App -------------
let todo = [];
let req = prompt("please enter your request");

while(true){
    if(req == "quit" ){
        console.log("quitting app");
        break;
    }

    if(req == "list"){
        console.log("----------------")
        for(let i = 0; i < todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("----------------")
    }
    else if(req == "add"){
        let newTask = prompt("Enter the task to add");
        todo.push(newTask);
        console.log("Task added");
    }
    else if(req == "delete"){
        let delTask = prompt("Enter the index of task to delete");
        let n = parseInt(delTask);
        todo.splice(n,1);
        console.log("Task deleted");
    }
    else{
        console.log("Wrong Request");
    }
    req = prompt("please enter your request");
    
}