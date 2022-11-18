const FullName = (firstName= 'Marvel', lastName= 'Sem') => {
let space = ' '
let Name = firstName + space + lastName
return Name
}
console.log(FullName());

const volumOfRectPrime = (L = 15, R = 6) => {
let haut = 7
let volume = L * R * haut
return volume
}
console.log(volumOfRectPrime());

const Indmascorp = (P= 140, taille = 1.88 ) => {
let IMC = P * taille * taille;

if ( IMC < 18.5) {
    alert('insuffisance ponderale');
}
if (18.5 < IMC < 25) {
    alert('surpoids');
} else {
    alert('obese');
}
return IMC
}

//////////////////////////////
const printArray = () => {
let array = [1, 2, 3, 4, 5]
array.reverse()
return array
}
console.log(printArray());
///////////////
//let Arr = ['AVOCAT', 'POMME','MANGUE' ,'FRAISE'];
//let lowerArray = Arr.toLocaleString();

const capitalizeArray = () => {

let Arr = ['AVOCAT', 'POMME','MANGUE' ,'FRAISE'];

let lowerArray = Arr.toLocaleString().toLowerCase().split(' ,')

    return lowerArray 
    }
console.log(capitalizeArray());
////////////////

//const userIdGenerator = () => {
    //let nbreCaract = prompt('entrez le nombre de caractere')
    //let nbreId = prompt('nombre identifiant')
    //let result = nbreCaract + nbreId
    //alert(result);
    //return {
        //result
    //}
//}
//console.log(userIdGenerator());

/////////////////
const colorGenerator = () => {
    let r = prompt('entrez r')
    let g = prompt('entrez g')
    let b = prompt('entrez b')
    let v = ','
    let rgb = r + v + g + v + b
    alert( rgb)
    return rgb
}
console.log(colorGenerator());