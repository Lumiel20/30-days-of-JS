let a = 'JavaScript'
let b = 10
const Learn = () => {
    console.log(a, b);
    if (true){
    let a = 'Python'
    let b = 100
    console.log(a, b)
    }
}
console.log(a, b)
Learn();
////////////////////////////////
function letsGravit() {
    const gravity = 9.81
    console.log(gravity, 'grav');
}
//console.log(gravity, 'grav');
if (true) {
    var gravity = 9.81
    console.log(gravity);
}
console.log(gravity);

for ( var i = 0; i < 3; i++) {
    console.log(i);
}
console.log(i);
letsGravit();

/// Les OBJETS
 const person = {
    fistName: 'Marvel',
    lastName: 'Sem',
    age: 250,
    country: 'Benin',
    city: 'Porto',
    skills: [
        'HTML',
        'SCSS',
        'JavaScript',
        'Node',
        'MongoDB'
    ],
    getFullName: function() {
        return `${this.fistName} ${this.lastName}`
    },

    phone: '+254416476324'
 }
 //accessing values using
 console.log(person.fistName, 'perso');
 console.log(person['phone']);
 console.log(person.getFullName());

 const personnali = {
    fistName: 'Marvel',
    lastName: 'Sem',
    age: 250,
    country: 'Benin',
    city: 'Porto',
    skills: [
        'HTML',
        'SCSS',
        'JavaScript',
    ],
    address: {
        street: 'Catchi',
        pobox: '2002',
        citye: 'Porto'
    },
    getPersonInfo: function() {
        return  `I am ${this.fistName} and I live in ${this.city}, ${this.country}.
         I am ${this.age}` 
    }  
}
console.log(personnali.getPersonInfo()); 
const copyPersonnali = Object.assign({}, personnali)
console.log(copyPersonnali, 'per');

//obtenir des clés d'objet a l'aide de Object.keys()
const keys = Object.keys(copyPersonnali)
console.log(keys);

//obtenir des clés d'objet a l'aide de Object.values()
const values = Object.values(copyPersonnali)
console.log(values);

//obtenir des clés d'objet a l'aide de Object.entries()
const entries = Object.entries(copyPersonnali)
console.log(entries);

console.log(copyPersonnali.hasOwnProperty('address'));
console.log(copyPersonnali.hasOwnProperty('score'));