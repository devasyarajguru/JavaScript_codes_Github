class Self
{
    constructor(name,age)
    {
        console.log("Constructor Called");
        this.name = name;
        this.age = age;
    }
}

const myobj = new Self("Devasya","20");

console.log(myobj.name); // global variable is executed
console.log(myobj.age);
console.log(myobj); // Object is printed