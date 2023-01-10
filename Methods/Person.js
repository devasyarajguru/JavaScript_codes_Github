class Person
{
    constructor(name)
    {
        console.log("Constructor")
        this.name = name;
    }

    greet()
    {
        console.log(`Hello ${this.name}`);
    }
}

let obj = new Person("Dev"); // Here Constructor is called

console.log(obj.name); // Here argument name is called

obj.greet(); // Function is called