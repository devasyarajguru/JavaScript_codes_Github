// use of var keyword -- var has scope
var a = 10;
// console.log(a); //10

if(true)
{
    var a = 90;
    console.log(a); // 90
    var a = 30;
    console.log(a); // Var can be updated & redeclared within its scope
}

// console.log(a); // 90