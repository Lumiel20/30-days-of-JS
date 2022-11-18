 const numbs = [1, 2, 3, 4, 5]

function sumArray(arr) {
let sum = 0
for ( let i = 0; i < arr.length; i++) {
    sum= sum+ arr[i];
}
return sum;
//console.log(sumNombers(10, 20)); 
}
console.log(sumArray(numbs));

const areofCircle = (radius) => {
let area = Math.PI * radius * radius;
return area
}
console.log(areofCircle(15));

function printName(Name1, Name2) {
    return `${Name1} ${Name2}`
}
console.log(printName('marvel', 'sem'));

function square(n) {
    return n*n
}
console.log(square(2));

 const changeToUpperCase = (arr) => {
    const newArr = []
    for(const element of arr) {
        newArr.push(element.toUpperCase())
    }
    return newArr
 }
 const countries = ['Finland', 'Sweden', 'Denmark', 'Iceland', 'France']
 console.log(changeToUpperCase(countries));

 /////////////////////////////////////
function greet(name= 'Peter'){
let message = `${name}, Bienvenu au 30 jours de JS`
return message
}
console.log(greet());
console.log(greet('Sem'));

function FullName(firstName = 'Pioline', lastName = 'Bawa'){
    let space = ' '
    let name = firstName + space + lastName
    return name
}
console.log(FullName());
console.log(FullName('Gael', 'Vinou'));

const calculateAge = (birthYear = 1815, currentYear= 2014) => {
 let age = currentYear - birthYear
 return age
}
//console.log('Age: ', calculateAge(1819));
console.log(calculateAge());