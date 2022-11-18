const firstname = document.querySelector('#name')
const lastName = document.querySelector('#lastName')
const country = document.querySelector('#country')
const score = document.querySelector('#score')
const button = document.querySelector('#button')

const container = document.querySelector('.container')

button.addEventListener('click', () => {

    const required = document.querySelector('.required')
    
    if (firstname.value === '' || lastName.value === '' || country.value === '' || score.value === '' ) {
        required.classList.add("visible")
        return
    } 

    required.classList.remove("visible")
    
    // Initialisation des proprietés
    const player = {
        "firstname": firstname.value,
        "lastname": lastName.value,
        "country": country.value,
        "score": score.value,
    }
    
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
    // creation des colonnes
    // colonne nom, prénom, country, score & button  
    const col1 = document.createElement('span')
    //col1.innerText = `${player.firstname} ${player.lastname}`
    col1.setAttribute("class", "col1")
    
    const nom = document.createElement('span')
    nom.setAttribute("class", "fullName")
    nom.innerText = `${player.firstname} ${player.lastname}`.toUpperCase()

    div = document.createElement('div')
    div.setAttribute("class", "joueur")
    

    const dates = document.createElement('span')
    dates.innerText = showDateTime()

    div.appendChild(nom)
    div.appendChild(dates)
    
    col1.appendChild(div)
    
    const col2 = document.createElement('span')
    col2.innerText = player.country.toUpperCase()
    col2.setAttribute("class", "col2")

    const col3 = document.createElement('span')
    col3.innerText = player.score
    col3.setAttribute("class", "col3")

    const col4 = document.createElement('div')
    col4.setAttribute("class", "col4")
    
    //creation et contenus du button delete
    const button1 = document.createElement('button')
    button1.setAttribute("class", "button1")
    button1.innerText = "D";
    
    button1.addEventListener('click', () =>{ 
        container.removeChild(row)
    })

    //creation et contenus du button add +5
    const button2 = document.createElement('button')
    button2.setAttribute("class", "button2")
    button2.innerText = "+5";

    button2.addEventListener('click', () =>{
         col3.innerText = parseInt(col3.innerText)+5
    })

    //creation et contenus du button delete -5
    const button3 = document.createElement('button')
    button3.setAttribute("class", "button3")
    button3.innerText = "-5";

    button3.addEventListener('click', () =>{
        col3.innerText = parseInt(col3.innerText)-5
   })
    // ajouter des bouton dans la colonne4
    col4.appendChild(button1)
    col4.appendChild(button2)
    col4.appendChild(button3)

    //creation de la ligne
    const row = document.createElement('div');
    row.setAttribute("class", "row");

    //ajout de chaque colonne a la ligne
    row.appendChild(col1)
    row.appendChild(col2)
    row.appendChild(col3)
    row.appendChild(col4)

    //ajouter la ligne au container
    container.appendChild(row)

    //const required = document.querySelector('.required')

    
})
