const countries = [
    { name: 'English', count: 95 },
    { name: 'Russian', count: 41 },
    { name: 'French', count: 60 },
    { name: 'Arabic', count: 35 },
    { name: 'Spanich', count: 25 },
    { name: 'China', count: 30 },
    { name: 'India', count: 12 },
    { name: 'USA', count: 70 },
    { name: 'Indonesia', count: 19 },
    { name: 'Brasil', count: 27 },
]
const oldcountries = countries.sort((a, b) => {
    if (a.count < b.count) return 1
    if (a.count > b.count) return -1
    return 0
})

const container = document.querySelector('.countries')

const wordpop = oldcountries[0].count

for (const country of oldcountries) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");

    const col1 = document.createElement('span')
    const col2 = document.createElement('span')
    const col3 = document.createElement('span')
    col1.innerText = country.name

    // calcul de la pourcentage de population de tout les pays

    const p = (country.count * 100) / wordpop
    col2.style.width = `${p}%`
    //col2.innerText = p
    col3.innerText = country.count

    //console.log(p);


    col1.setAttribute("class", "col1")
    col2.setAttribute("class", "col2")
    col3.setAttribute("class", "col3")

//ajouter des colonne (col) a la ligne (row)
    row.appendChild(col1)
    row.appendChild(col2)
    row.appendChild(col3)

    container.appendChild(row)


}