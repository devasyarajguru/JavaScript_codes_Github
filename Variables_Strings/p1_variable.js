console.log("Hello World");
// Use of let keyword - accesible only in the block level it is defined
let a = 10;
console.log(a);

if(true)
{
    let a = 90;
    console.log(a);
    // let a = 30;
    // console.log(a);  // let cannot be redeclared
}

console.log(a);