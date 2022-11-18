///Html interne
const showDateTime = () => {
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth()
    let date = now.getDate()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    let second = now.getSeconds()
    if (hours < 10) {
        hours = '0' + hours
    }
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    if (second < 10) {
        second = '0' + second

    }
    let dateMonthYear = date + '.' + month + '.' + year
    let time = hours + ':' + minutes + ':' + second
    let fullTime = dateMonthYear + ' ' + time
    return fullTime
}
console.log(showDateTime());
const span = document.getElementById('dateNow')
span.innerText = showDateTime()
//dateNow.style.backgroundColor = 'purple'
dateNow.style.padding = '5px'


////generateur de couleur de background
const generateColor = () => {
    let randomColor = (Math.floor(Math.random() * 0xFFFFFF)).toString(16)
    dateNow.style.backgroundColor = '#' + randomColor;
    setInterval(generateColor, 4000)
}
generateColor()



//Ajouter du style

const challenges = document.querySelectorAll('li')
challenges.forEach((challenge) => {

    challenge.style.padding = '5px'

    challenge.style.margin = '3px'
    challenge.style.width = '600px'

    //challenge.style.textAlign = 'center'

    if (challenge.innerText.includes('coming')) {
        challenge.style.backgroundColor = 'orange'
    } else if (challenge.innerText.includes('Done')) {
        challenge.style.backgroundColor = 'green'
    } else {
        challenge.style.backgroundColor = 'blue'
    }
})
const acc = document.getElementsByClassName('accordion')

console.log(acc);

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click",
        function () {

            /*Basculer entre l'ajout et la suppression de la classe "active", pour mettre en surbrillance
            le bouton qui controle d1*/

            this.classList.toggle("active");

            /* basculer entre masquer et afficher le d1 actif*/
            const d1 = this.nextElementSibling;

            if (d1.style.display === "block") {
                d1.style.display = 'none';
            } else {
                d1.style.display = 'block';
            }

            //

            if (d1.style.maxHeight) {
                d1.style.maxHeight = null;
            } else {
                d1.style.maxHeight = d1.scrollHeight + "px"
            }
        });
}

