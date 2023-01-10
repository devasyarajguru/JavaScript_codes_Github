class Football
{
    constructor(name,team)
    {
        this.name = name;
        this.team = team;
    }

    getname()
    {
        console.log(`Player name is ${this.name}`);
    }

    getteam()
    {
        console.log(`Player team is ${this.team}`);
    }
}

let fifa = new Football("Messi", "PSG"); // object 1 is created
let fifa2 = new Football("Ronaldo","ALNSR"); // object 2 is created

console.log(fifa.name); // Accessing variables of object 1  
console.log(fifa.team); // Accessing variables of object 1 

console.log(fifa2.name); // Accessing variables of object 2
console.log(fifa2.team); // Accessing variables of object 2

fifa.getname(); // Function is being called of object 1
fifa2.getname(); // Function is being called of object 2

fifa.getteam(); // Function is being called of object 1 
fifa2.getteam(); // Function is being called of object 2