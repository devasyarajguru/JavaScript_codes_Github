class Car
{
    constructor(name,color){
        console.log("Constructor of Class Car");
        this.name = name;
        this.color = color;
    }

    getName()
    {
        console.log(`Car name is ${this.name}`);
    }

    getColor()
    {
        console.log(`Car color is ${this.color}`);
    }
}

let obj = new Car("Mclaren", "Black"); // Constructor is being called and executed

obj.getName(); // function getName is called
obj.getColor(); // function getColor is called