// UpperCase
let name1 = "devasya";
uppname = name1.toUpperCase(); // toUpperCase method is used
console.log(uppname);

// LowerCase
let name2 = "RAJGURU";
console.log(name2.toLowerCase()); // toLowerCase method is used

// Slicing
let myname = "kushpatel";
console.log(myname.slice(2,5)); // Start from index 2 till 5(excluding)

// Replace
let golmaal = "Devasya";
console.log(golmaal.replace("Dev","Raj")); // Dev is replace by Raj

// Trim
let mytrim = "      Heyaaa      ";
// console.log(mytrim);
console.log(mytrim.trim()); // Removes leading and trailing spaces

//Substring
let str2 = "Hey How Are You??";
console.log(str2.substring(4,8)); // Makes Substring from 4 to 8(excluding)

// CharAt

let cat = 'Devil';
console.log(cat.charAt(1)); // Gets the character at particular position
console.log(cat.charCodeAt(1)); // Gets the character's UniCode at particular position 
// console.log(cat[1]);

// Constructor
let message = 45;
console.log(message.constructor); // Rerturns Function that created a particular prototype


// indexOf
let test = "Heyaa my name is Devasya";
console.log(test.indexOf("name")); // Getting postion value of passed string 

// valueof
// let value3 = "Heyaa Jenil";
let value3 = 49;
console.log(value3.valueOf()); // Returns the primitive value of a specified thing

// includes method
let mymessage = "Hello you are beautiful";
// console.log(mymessage.includes("beautiful")); // Returns boolean , if the thing includes in that variable then returns true otherwise if not then false

// Startswith and EndsWith
let mystart = "You got my message";
console.log(mystart.startsWith("You")); //checks starting word returns true
console.log(mystart.startsWith("Your")); //checks starting word returns false
console.log(mystart.endsWith("message"));// checks ending  word returns true
console.log(mystart.endsWith("messagerrrr"));// checks ending  word returns fasle

//repeat()
let myrep = "You are Cute\n";
console.log(myrep.repeat(3));  // repeat the string 3 times

