function envoi() {
    let compteur = 0

    let mail1 = formulaire.mail1.value
    let mail2 = formulaire.mail2.value

    let password1 = formulaire.password1.value
    let password2 = formulaire.password2.value

    const gabarit = new RegExp("[A-z0-9._-]+[@]{1}[A-z0-9._-]+[.]{1}[A-z]{2, 10}")

    //tests
    if (gabarit.test(mail1))  compteur++  //mail1 correspond t-il au gabarit?
     
    if (mail1 === mail2)  compteur++
   
    if (password1 === password2)   compteur++
   
       console.log(compteur);
    if (compteur < 3) {
        alert("champs mal renseignés")
        return false
    }

    if (compteur == 2) {
        alert("saisies correctes ")
        return true
    }
}
