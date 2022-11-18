//let title
//for (let index = 0; index < 3; index++) {
//title = document.createElement('h1')
//title.className = 'title'
//title.style.fontSize = '24px'
//title.textContent = index
//console.log(title);
//document.body.appendChild(title)
//}



function createNumbers(n) {
    const content = document.querySelector("#content");
    
  // nombre de ligne
  const  rows = 17;
  // nombre de colonnes
  const cols = 6;

  let value = 0;
   
  // on boucle sur les lignes
  for (let i = 0; i < rows; i++) {
    
    // on crée une ligne
    const row = document.createElement('div')
    row.setAttribute('class', 'row')

    // on boucle sur les colonnes
    for (let j = 0; j < cols; j++) {

    // on crée une colonne (un élément de la ligne)
    const col = document.createElement('span')
    col.setAttribute('class', 'col')

    //on donne de valeur a la colonne
    col.innerText = value
    
    // on fait incrementer la valeur
    ++value;
    
    // on ajoute la colonne à la ligne
    row.appendChild(col);

    const colls = document.querySelector('.col')
    if (j % 2 === 0 && i % 2 === 0) {
        col.style.backgroundColor = 'orange'
    } else {
        col.style.backgroundColor = 'green'
    }

    }
    //on ajoute la ligne dans le div parent
    content.appendChild(row)
    
  }
}


createNumbers()


