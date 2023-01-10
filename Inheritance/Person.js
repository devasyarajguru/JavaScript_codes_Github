class Person {
    constructor(name)
    {
        console.log("Constructor");
        this.name = name;

    }

    greet()
    {
        console.log(`Hello ${this.name}, How r you?`);
    }
}

class Student extends Person
{
  // Child Class Student is created 
}

let myobj = new Student("Devasya"); // Constructor of Parent class(Person) is Called in Object of Child Class(Student)

console.log(myobj.name); 

myobj.greet();