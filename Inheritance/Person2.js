class Person2
{
    constructor(name)
    {
        this.name = name;
    }

    greet()
    {
        console.log(`Hello ${this.name}`);
    }
}

class Student2 extends Person2
{
    constructor(name)
    {
        console.log("Heyy there!!");
        super(name); // Super keyword is created so priority is given to which Object is made 
    }
}

let myobj = new Student2("Jainil"); // Here Object is made for Child Class
myobj.greet();