// Arrow Function is called
let message = () => console.log("Function is Called");
message();

//Arrow Function with Argument 
let greeting = (x) => console.log(`Happy Birthday ${x}`);
greeting("Devasya");

// Parameter with Return Value
let sum = (x,y) => x+y;
console.log("Sum is " + sum(2,5));

//Ternary Condition
let age = 5;
let myfunc = (age>18)?
() => console.log("Adult"):
() => console.log("Babby");

myfunc();

// Return With Multiple Lines

let hello = (x,y) => {
    let z = x + y;
    return z;
} 

let ans = hello(3,6);
console.log(ans);