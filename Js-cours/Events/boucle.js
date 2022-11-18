//Fonction

function salutation() {
    console.log('salut les boss...');  
}

salutation();

//fonction par expression
const salutations = function(){
    console.log('salut encore les bro... '); 
};
salutations();

function surface(){
     let longueur = 15;
     let largeur = 10;
     return longueur * largeur;
}
const resultat = surface(); 
console.log(resultat);

//paramétre d'une fonction

function surfaceRect(L,l){
    let result = L*l;
    return result;
}
console.log(`la surface du rect est de: ${surfaceRect(4,3)} `);

 //les fonction a fleche
 const surfaceRects = (L, l) => {
     return L*l;
 }
 console.log(surfaceRects(4,3));
 
  
 
