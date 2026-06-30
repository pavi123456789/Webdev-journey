//----------------------------Axios----------------------------
// library to make HTTP request
// axios.get(url);
// return a Promise obj
// why use when we have fethc? - dont need to parse data
let url = "https://catfact.ninja/fact" ; 


async function getFacts(){
    try {    
        let res = await axios.get(url);
        return res.data.fact;    
    }
    catch (e) {
        console.log("error - ", e);
        return "NO fact found";
    }
}

let btn = document.querySelector('button');
let p = document.querySelector('p');

btn.addEventListener('click', async () => {
    let fact = await getFacts();
    p.innerText = fact;
}); 

//fetch — built-in browser function to make HTTP requests 
//async — marks a function as asynchronous. It automatically makes the function return a Promise, even if you just return a normal value.
//await — pauses execution inside an async function until a Promise resolves. Only works inside async functions.
//axios — a third-party library, alternative to fetch


// ------------ Seding headers using Axios-------------

async function getCatFacts(){
    try {    
        const config = { headers : { Accept : "application/json"}};
        let res = await axios.get(url, config);
        console.log(res);  
    }
    catch (e) {
        console.log("error - ", e);
        return "NO fact found";
    }
}

getCatFacts();


// updating query string
let url2 = "http://universities.hipolabs.com/search?country=";

async function getColleges(country){
    try{
        let res = await axios.get(url2+country);
        return res.data;
    }catch(e){
        console.log("error - ", e);
        return "NO college found";
    }
}
let search = document.querySelector("#search");
search.addEventListener('click', async () => {
    let country = document.querySelector('input').value;

    let clgarr = await getColleges(country);
    show(clgarr);
})

let list = document.querySelector('ul');
function show(clgarr){
    list.innerText = '';
    for(clg of clgarr){
        let li = document.createElement('li');
        li.innerText = `${clg.name}, ${clg['state-province']}`;
        list.appendChild(li);
    }
}