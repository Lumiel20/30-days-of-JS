//fonction de rappel
const callback = (n) => {
    return n * 2
}

const cube = (callback, n) => {
    return callback(n) * n
}
console.log(cube(callback, 3));

//Fonction de retour
const Order = n => {
    const doSomething = m =>{
        const doWhatEver = t => {
            return 2 * n + 3 * m + t
        }
        return doWhatEver
    }
    return doSomething
    
}
console.log(Order(2)(3)(5));
//////////////////////

 const numbers = [1, 2, 3, 4, 5]
 const sumArray = arr => {
    let sum = 0
    const callback = function(element) {
        sum += element
    }
    arr.forEach(callback)
    return sum
 }
 console.log(sumArray(numbers));
 /////////////////Temps de prise 
 function sayHello() {
    console.log('Hello');
 }
 setTimeout(sayHello, 1000)

//////////////////Pour chaque = forEach
//arr.forEach(function(element, index, arr) {
    //console.log(index, element, arr);
//})

//let som = 0
//const nbre = [1, 2, 3, 4, 5]
//nbre.forEach(function(num){
    //console.log(num);
//})
//console.log(som);

let som = 0;
const nbre = [1, 2, 3, 4, 5]
nbre.forEach(num =>  som += num)
console.log(som);

let sunm = 0
const nbres = [1, 2, 3, 4, 5]
nbres.forEach(function(num) {
num = sunm += num
})
console.log(sunm);

////////carte = map
const nombers = [1, 2, 3, 4, 5];
const nombersSquare = nombers.map((num) => num * num )
console.log(nombersSquare);

const names = ['Sem', 'Gael', 'Mathias', 'Elias', 'Van', 'Veer']
const nameToUppercase = names.map((name) => name.toUpperCase())
console.log(nameToUppercase);
/////////////// Filter
const nameFilter = names.filter((name) => name.length === 3)
console.log(nameFilter);

const scores = [
    { name: 'Sem', score: 105},
    { name: 'Lydia', score: 96},
    { name: 'Gael', score: 97},
    { name: 'Maara', score: 78},
    { name: 'Gavira', score: 95},
    { name: 'Dav', score: 75}
]
const greatScore = scores.filter((scorre) => scorre.score > 80)
console.log(greatScore);
//////////////Trie des tableaux d'objet

const users = [
    { name: 'Asa', age: 150},
    { name: 'Brook', age: 50},
    { name: 'Eyel', age: 100},
    { name: 'Eaara', age: 22} 
]
const userrs = users.sort((a, b) => {
    if(a.age < b.age) return -1
    if(a.age > b.age) return 1
    return 0
})
console.log(userrs);
/////////////////////exercice

const products = [
    {product: 'banana', price: 3},
    {product: 'mango', price: 6},
    {product: 'potato', price: 4},
    {product: 'avocado', price: 8},
    {product: 'coffee', price: 10},
    {product: 'tea', price: 12}
]
//console.log(products);
let productsPrice = 0;
calculProduct = products.forEach((product) => productsPrice += product.price)
console.log(productsPrice);


////////////////////////////////
const pays = [
    {country: 'English', population: 2239475000},
    {country: 'world', population: 19539475000},
    {country: 'French', population: 1239476000},
    {country: 'Arabic', population: 3539470000},
    {country: 'spanich',population : 1239470200},
    {country: 'China', population: 303940000},
    {country: 'India', population: 1295210000},
    {country: 'USA', population: 3239470000},
    {country: 'Indonesia', population: 258705000},
    {country: 'Brasil', population: 206135893},
]
//const filterCountry = pays.filter((country) => country.count > 24)
//const filterPopulation = pays.filter((country) => country.population > 258705000)
//console.log(filterCountry);
//console.log(filterPopulation);

//pays.sort((a, b) => {
    //if(a.count < b.count) return -1
    //if(a.count > b.count) return 1
    //return 0
//})
//console.log(pays);

//const filterCountry = pays.filter((country) => country.population < 1377422166)
//console.log(filterCountry);
const oldPopulation = pays.sort((a, b) => {
    if(a.population < b.population) return -1
    if(a.population > b.population) return 1
    return 0
})
console.log(oldPopulation);


