

function openOrClose(element) {
  console.log(".....element..", element);
  // si element n'est pas un objet html, alors on se retourne
  
  if (!(element instanceof HTMLElement))
    return;

  // on sélection la list 
  const list = element.querySelector(".langs-list");

  // si on ne retrouve pas la liste de langages, on émet une erreur
  if (!list){
    throw new Error("Missing list wrapper in provided element")
  }

  // si la liste est déjà ouverte,
  if (list.classList.contains("opened")) {
    // alors on la ferme
    list.classList.remove("opened")
  } else {
    //si on ouvre la liste
    list.classList.add("opened")
  }
}