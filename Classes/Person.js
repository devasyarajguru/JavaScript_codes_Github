class Person
{
    constructor(name)
    {
        console.log("Name is Called Below");
        this.dev = name;
    }
}

const myobj = new Person("Akash"); //Object is created and constructor is called(execute)

console.log(myobj.dev); // global variable which is assigned is executed