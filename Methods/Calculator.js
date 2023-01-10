class Calculator
{
    constructor(no1 , no2)
    {
        this.no1 = no1;
        this.no2 = no2;
    }

    getSum()
    {
        return this.no1 + this.no2;
    }

    getSub()
    {
        return this.no1 - this.no2;
    }
}

var calc = new Calculator(10, 20);

var sum = calc.getSum();
console.log(`Sum is ${sum}`);

var main = calc.getSub();
console.log(`Sub is ${main}}`);

console.log(sum);