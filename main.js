// additional control flow concept, switch statements
/* Syntax: 
switch(expression) {
    case a:
        code block
        break;
    case b:
        code block
        break;
    default:
        // code block
} 
*/
let num = 78.00
switch(num%2==0){
    case true:
        console.log('even');
        break;
    case false:
        console.log('odd');
        break; 
    default: "Enter a whole number"
}

// JS Objects (Python Dicts)

const person = {
    name: 'sai',
    age : '4',
    location: 'ny'
}
 console.log(person.name)
 console.log(person['location'])

// access data in objects (using bracket or dot notation)

// Inclass Exercise #1 (Get the Value 'Manchester United')
const person2 = {
    name: "Max",
    age: 31,
    prog_languages: ["JavaScript", "Python", "C++", "Java"],
    fav_color: "Blue",
    teams: [
      {
        baseball: "Chicago White Sox",
        football: "Chicago Bears",
        hockey: "Chicago Blackhawks",
        basketball: ["Chicago Bulls", "Chicago Sky"],
        soccer: ["Chicago Fire", "Naperville Yellowjacks"],
      },
      {
        baseball: "Toronto Bluejays",
        football: "LA Rams",
        basketball: "Milwalkee Bucks",
        soccer: ["Manchester United", "Liverpool"],
      },
    ],
  };
console.log(person2.teams[1].soccer[0])
// Solution Here:

// JS Object methods ((Object.keys(object), Object.values(object))
console.log(Object.keys(person2))
console.log(Object.values(person2))
// looping an object using for in
// for in: iterates over keys in object or indices in an array

for(let key in person2)
  console.log(person2[key])

// ---------- Creating a JS Class ----------
class Team{

    constructor(city, name){
        this.city = city;
        this.name = name; 
    }

    printTeamInfo(){
        return `This ${this.name} is from ${this.city}`
    }
}
// Creating an instance
const dawgs = new Team('Georgia', 'Bulldogs');
console.log(dawgs.printTeamInfo())
// Inheriting from a class using 'extends'
 class Player extends Team(){

    constructor(city, name, playerName){
        super(city, name)
        this.playerName = playerName
    }

    printPlayerInfo(){
        return `${this.playerName} plays for ${this.city}, ${this.name}`
    }
 }

 const samba = new Player('Nepal', 'ANFA', 'Samba B');
 console.log(samba.printPlayerInfo())

// ---------- JS Closures ----------







// ---------- JS Promises ----------
/*
A promise is something that will take time to do.
There are two possible outcomes of a promise
-- Resolve/Fulfilled = Success
-- Reject = Error
*/

// returns a pending promise
// console.log(fetch('https://pokeapi.co/api/v2/pokemon/ditto'))

// 2 ways to handle promises
// first way using callbacks: .then(resolved) / .catch(reject)

// handle pending promise with .then(), .catch()

// viewing our data if promise resolved: 200 status code

// Second way: Using async/await (ES6)