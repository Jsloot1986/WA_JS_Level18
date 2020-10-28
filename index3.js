//A
/*
const addTheWordCool = ['nice', 'awesome', 'tof'];
const addWordCool = addTheWordCool.push('cool');
console.log(addTheWordCool);

//B
const fruitsAmoutElements = ['appels', 'peren', 'citroenen'];
console.log(fruits.length);*/

//C
const beneluxFirstElement = ['België','Nederland','Luxemburg'];
let first = beneluxFirstElement[0]
//console.log(first);

//D
const lastElementInArray = ["Haas", "Cavia", "Kip", "Schildpad"];
let last = lastElementInArray[lastElementInArray.length - 1]
//console.log(last);

//E
const presidents = ["Trump", "Obama", "Bush", "Clinton"];
const impeachTrumpSlice = () => presidents.slice(1);
const impeachTrumpSplice = () => {
    presidents.splice(0, 1);
    return presidents
}

//console.log(impeachTrumpSlice(presidents));
//console.log(impeachTrumpSplice(presidents));

//F
const elements = ['Winc ', 'Academy ', 'is ', 'leuk ', ';-}'];
//console.log(elements.join(""));

//G
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combineArrays = 
    array1.concat(array2);

console.log(combineArrays);