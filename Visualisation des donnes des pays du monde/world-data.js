const countries = [
    { name: 'England' },
    { name: 'Russian' },
    { name: 'French' },
    { name: 'Arabic' },
    { name: 'Spanich' },
    { name: 'China' },
    { name: 'India' },
    { name: 'USA' },
    { name: 'Indonesia' },
    { name: 'Brasil' },
    { name: 'Qatar' },
    { name: 'Siera-Leone' },
    { name: 'Benin' },
    { name: 'Cameroun' },
    { name: 'Angola' },
    { name: 'Finland' },
    { name: 'Norway' },
    { name: 'Danemark' },
    { name: 'Argentine' },
    { name: 'Perou' },
    { name: 'Sudan' },
    { name: 'Algeria' },
    { name: 'Serbie' },
    { name: 'Portugal' },
    { name: 'Andorra' },
    { name: 'Togo' },
    { name: 'Gabon' },
    { name: 'Sud-Africa' },
]


const container = document.getElementById("pays")

const search = document.querySelector('#searchInput')
const p = document.querySelector('p')

search.addEventListener('input', (e) => {

    //console.log(".................e..", e, search.value)
    container.innerHTML = ""
    const search_table = countries.filter((country) => country.name.startsWith(search.value))
    // console.log("..........search_table............", search_table)

    for (const country of search_table) {
        const liste = document.createElement("div")
        liste.setAttribute("class", "liste")
        liste.innerText = country.name.toUpperCase()
        container.appendChild(liste)

        p.textContent = `Countries start with ${e.target.value} are ${search_table.length}`
    }

    //console.log("..........search_table............", search_table.length)
    //console.log("..........search_table............", search_table)
})
const trier = document.getElementById('tries')

trier.addEventListener('click', () => {
    countries.sort((a, b) => {
        if (a.name < b.name) return -1
        if (a.name > b.name) return 1
    })
})
to