//const allTitles = document.getElementsByTagName('h1')

//console.log(allTitles);
//console.log(allTitles.length);
//for (let i = 0; i < allTitles.length; i++) {
   // console.log(allTitles[i]); 
//}


//getElementsById

//let firstTitle = document.getElementById('first-title')
//let secondTitle = document.getElementById('second-title')
//console.log(secondTitle)

let firstTitle = document.querySelectorAll('h1')
console.log(firstTitle);

//const allTitles = document.querySelectorAll('h1')
//console.log(allTitles.length);
//for (let i = 0; i < allTitles.length; i++) {
   // console.log(allTitles); 
//}

//getElementsByClassName
//onst allTitles = document.getElementsByClassName('title')
//console.log(allTitles);

///Ajouter un attribut
//const titles = document.querySelectorAll('h1') 
//titles[4].setAttribute('class', 'title')
//titles[4].setAttribute('id', 'five-title')

/// Ajouter une class a l'aide de classList
//titles[4].classList.add('title', 'header-title')

//Ajouter du textba un element html
//const titre = document.querySelectorAll('h1')
//titles[4].textContent = 'Five-Title'

///Ajouter du style
const titles = document.querySelectorAll('h1')
 const couleur = titles.forEach((title, i) => {
title.style.fontSize = '24px'
if (i % 2 === 0) {
    title.style.color = 'green'
} else {
    title.style.color = 'red'
}
})


 