const countries = [
    { name: 'English', population: 3239475000 },
    { name: 'World', population: 7939475000 },
    { name: 'French', population: 2239476000 },
    { name: 'Arabic', population: 3539470000 },
    { name: 'Spanich', population: 1239470200 },
    { name: 'China', population: 353940000 },
    { name: 'India', population: 1295210000 },
    { name: 'USA', population: 4239470000 },
    { name: 'Indonesia', population: 258705000 },
    { name: 'Brasil', population: 306135893 },
]

const oldPopulation = countries.sort((a, b) => {
    if (a.population < b.population) return 1
    if (a.population > b.population) return -1
    return 0
})
//console.log(oldPopulation);
const container = document.querySelector('.countries')

//calcul de la pourcentage de la population mondial(world)

const wordpop = oldPopulation[0].population

for (const country of oldPopulation) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");

    const col1 = document.createElement('span')
    const col2 = document.createElement('span')
    const col3 = document.createElement('span')
    col1.innerText = country.name

    // calcul de la pourcentage de population de tout les pays

    const p = (country.population * 100) / wordpop
    col2.style.width = `${p}%`
    //col2.innerText = p
    col3.innerText = country.population

    //console.log(p);
    
    col1.setAttribute("class", "col1")
    col2.setAttribute("class", "col2")
    col3.setAttribute("class", "col3")

    row.appendChild(col1)
    row.appendChild(col2)
    row.appendChild(col3)

    container.appendChild(row)


}


