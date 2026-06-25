console.log("Hello js");
console.log("Good morning");
let a = 9;
let b=34;
console.log("sum = ", a+b);

// Template Literals
    let price1 = 90;
    let price2 = 34;
    // let output = "The total price is = "+ (price1 + price2)+ "Ruppe."
    let output = `The total price is ${price1 + price2} Rupee.`;
    // `` -> back quotes
    // ${} -> used to add embedded expressions in a string
    console.log(output);
    console.log(`The total price is ${price1 + price2} Rupee.`)

// Comparator operator
    // == -> compares value, not type
    // === -> compares value & type
    let x = 34;
    let y ='34';
    console.log(x==y);
    console.log(x===y);

    // Non numbers are compared using their unique unicode
    console.log('a' > 'A')

//falsy
    // false, 0, -0, 0n(BigInt value), ""(empty string), null, undefined, NaN
//truthy - everything else 

// Alert - popup
    alert("something is wrong");

// Prompt - popup
    let rol = prompt("pleae enter your roll no.: ");
    console.log(rol);

console.error("erorr");
console.warn("warning");