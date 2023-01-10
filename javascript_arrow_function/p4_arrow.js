let age = 5;

let myfunc = (age < 18) ? 

() => console.log("Baby"):
() => console.log("Adult");

// Note --- If a function body has multiple statements , you need to put them inside {} curly brackets
// let myfunc = (age) => 
// {
//     if(age>18)
// {
//     console.log("Adult");
// }

// else
// {
//     console.log("Baby");
// }
// }
myfunc();