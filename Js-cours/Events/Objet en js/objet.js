//Objet en js
//objet liretaire
const personne = {
    nom: 'Marvel',
    email: 'semkolawole604@gmail.com',
    Age: 25,
    Taille: 1.80,
    couleur: 'noire', 
    platfms: ['les bases du html et css', 'les bases de vue 3',
     'les bases de node js' ],

    login: function() {
        console.log('utilisateur connecter');  
    },

    logout: function() {
        console.log('utilisateur deconnecter');   
    },
    afficherPlatfms: function() {
        this.platfms.forEach((platfm) => {
             console.log(platfm); 
        })
            
    }
};
//console.log(personne);
//console.log(this);
personne.afficherPlatfms();





 
