//========== Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function favorites(){

    for (let item in person3) {
        console.log(`Person3's favorite ${item} is ${person3[item]}`);
    }
}
console.log(favorites())

/*

//======= Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods.
*/

// Create our Person Class

class Person{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    printInfo(){
        console.log(`${this.name} is ${this.age} years old`);
    }

    age_meter(age, aging = 1){
    
        this.age += aging; 
         
    }

};


const gal = new Person('Gal Gadot', 35);
const guy = new Person('Guy Fieri', 35);





// Use an arrow to create the printInfo method
//function printInfo() => { console.log(`${this.name} is ${this.age} years old`)}


// printInfo = () => console.log(`${this.name} is ${this.age} years old`);

// age_meter = (age, aging=1) = this.age += 1

// // Create another arrow function for the addAge method that takes a single parameter
// function age_meter(age) => age+=1; 
// Adding to the age 

console.log(gal.printInfo());
console.log(guy.printInfo());

console.log(gal.age_meter(gal.age));
console.log(gal.printInfo())
console.log(gal.age_meter(gal.age));
console.log(gal.printInfo())

console.log(guy.age_meter(guy.age, 3))
console.log(guy.printInfo())



// ============= Exercise #3 ============//
/*
    Using the Ergast API, fetch to 'http://ergast.com/api/f1/2008/5/driverStandings.json'
    handle the promise with callbacks (.then(), .catch()) or async/await, and log the data.
*/

fetch('http://ergast.com/api/f1/2008/5/driverStandings.json').then((response) =>{
console.log(response.status)
return response.json()
}).then((data) => {
  console.log(data)
}).catch((error) => {
  console.error(error)
})


const ergastData = async () => {
    try{
      const response = await fetch('http://ergast.com/api/f1/2008/5/driverStandings.json')
      const data = await response.json()
      console.log(data)
    } catch(error) {
      console.error(`there was an error: ${error}`)
    }
  }
  
  ergastData()

/*
CODEWARS Solutions : 
https://www.codewars.com/kata/578553c3a1b8d5c40300037c/
https://www.codewars.com/kata/5262119038c0985a5b00029f/train/javascript/
 
the second solution is not submitted because it times out but, it works for the initial set of test cases 

*/