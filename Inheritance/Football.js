class Football
{
    constructor(name)
    {
        this.name = name;
    }

    greet()
    {
        console.log(`Hey ${this.name}!!`);

    }
}

class Fifa extends Football
{
    // Child Class 1
}

class Qatar extends Football
{
    game()
    {
        // Child Class 2
        console.log(`This is Fifa in Qatar 2022`);
    }
}

let argentina = new Fifa("Messi"); // Object 1 of Child Class 1
argentina.greet();

let portugal =  new Qatar("Ronaldo"); // Object 1 of Child Class 2
portugal.greet();
portugal.game();