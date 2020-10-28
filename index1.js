// zet de functie om naar een arrow functie

const ikRockArrowFunctions = function () {
    console.log("Joe, ik rock de arrow functions!");
  };
  
  ikRockArrowFunctions()

// arrow functie
ikRockArrowFunctions = () => {
    console.log("Joe, ik rock de arrow functions!");
  };
  
  ikRockArrowFunctions()

// arrow functie zonder {} => returned altijd iets! zolang het maar op 1 regel past. anders return statement gebruiken!
ikRockArrowFunctions = () => console.log("Joe, ik rock de arrow functions!");

  ikRockArrowFunctions()
 
//deel B

  const fivePlusSeven = () =>({result: 5+7})
fivePlusSeven();

// deel C
let myFunction = (a, b) => {
    return a+b
}

myFunction(2, 3);

// deel D

let addFive = a => {
    return a+5
}
addFive(3);

// deel E

const createObject = greeting => {greeting}
createObeject("hoi");

// extra oefening
const printNumbers = {
    phrase: 'The current value is: ',
    numbers: [1, 2, 3, 4],

    loop(){
        this.numbers.forEach((number) => {
            console.log(this.phrase, number)
        })
    },
}
printNumbers.loop();
