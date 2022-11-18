//const paras = document.querySelectorAll('p');
//paras.forEach(para => {
    //console.log(para);   
//});

//const para = document.querySelector('body > h2')
//console.log(para);

//Get element By ID
//const titre = document.getElementById('titre-principale');
//console.log(titre);

//Get element By class name
//const paras = document.getElementsByClassName('p')
//console.log(paras[1]);
//Get element By tag name
//const tags = document.getElementsByTagName('h1')
// console.log(tags[0]);

//Manipulation des elements du DOM
//const h1 = document.querySelector('h1')
//let text = h1.innerHTML;
//const Maj_text = text.toUpperCase();
//console.log(Maj_text);
//h1.innerHTML = Maj_text;

//const div = document.querySelector('.contenu');
//const personnes = ['Maevis', 'Marvel', 'Duplex'];

//personnes.forEach( personne => { 
   // div.innerHTML += ` <p>${personne}</p> `;
//})
const link = document.createElement('a');
const body = document.querySelector('body');
link.href = 'https://google.com';
link.innerText = 'Allez a google';
body.appendChild(link);


//(seter, geter)attribue
const lien = document.querySelector('a');
const att =  lien.getAttribute('href');
lien.innerText = 'Aller a Bproo FR'
lien.setAttribute('href','http://bproo.fr')
const h1 = document.querySelector('h1')
const a = document.querySelector('a')
h1.style.color = 'red';
h1.style.fontSize = '50px';
h1.style.textTransform = 'upperCase';
a.style.color = 'yellow';

//console.log(att);





 



 