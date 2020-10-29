//A
const superheroes = [
    {name: "Batman", alter_ego: "Bruce Wayne"}, 
    {name: "Superman", alter_ego: "Clark Kent"}, 
    {name: "Spiderman", alter_ego: "Peter Parker"}];

const findSpiderMAn = (superhero)=>{
return superhero.name === "Spiderman";
}

   
//console.log(superheroes.find(findSpiderMAn));
    // Find Spiderman
    // result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

//B
const doubleArrayValue = [1, 2, 3];
//doubleArrayValue.forEach(element => console.log(element*2));

//C
const containsNumberBiggerThan10 = [1, 4, 3, 6, 9, 7, 11];
let result = containsNumberBiggerThan10.every(function (e) {
    return e > 10;
});
//console.log(result);

const containBiggerthan10 = [1, 2, 1, 2, 1, 2];
let result1 = containBiggerthan10.every(function (e) {
    return e > 10;
});
//console.log(result1);

//D
const isItalyInTheGreat7 = ['Canada', 'France', 'Germany', 'Italy', 'United Kingdom', 'United States'];
//console.log(isItalyInTheGreat7.includes("Italy"));

//E
const tenfold = [1, 4, 3, 6, 9, 7, 11];
//tenfold.forEach(element => console.log(element *10));

//F
const isBelow100 = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98];
let isUnder100 = isBelow100.every(function (e){
    return e < 100;
});
//console.log(isUnder100);

//G BONUS
const bigSum = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];
const reducer = (accumulator, currentValue) => accumulator + currentValue;{
    console.log(bigSum.reduce(reducer));
};