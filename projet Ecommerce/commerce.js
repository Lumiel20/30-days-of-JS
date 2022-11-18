const articles = [
    {
        name: 'Basket-Rose',
        image: 'category4.jpg',
        prix: '5000fcfa',
        
    },
    {
        name: 'Basket-Rose',
        image: 'category5.jpg',
        prix: '5000fcfa',
        
    },
    {
        name: 'Fille de Joie',
        image: 'category6.jpg',
        prix: '5000fcfa',
       
    },
    {
        name: 'T-shirt Tacheter',
        image: 'category7.jpg',
        prix: '5000fcfa',
        
    },
    {
        name: 'Pull-Rayer',
        image: 'category8.jpg',
        prix: '5000fcfa',
    },
    {
        name: 'McLumiel\'s',
        image: 'category9.jpg',
        prix: '5000fcfa',
        
    },
    {
        name: 'Basket-Cafe',
        image: 'category10.jpg',
        prix: '5000fcfa',
        
    },
    {
        name: 'Hope But',
        image: 'category11.jpg',
        prix: '5000fcfa',
        
    },
    {
        name: 'Titanium',
        image: 'category12.jpg',
        prix: '5000fcfa',
    },
    {
        name: 'Sweet-girl',
        image: 'category13.jpg',
        prix: '5000fcfa',
    },
    {
        name: 'Bomb-girl',
        image: 'category14.jpg',
        prix: '5000fcfa',
    },
    {
        name: 'Robulus',
        image: 'category15.jpg',
        prix: '5000fcfa',
    }
]

const containers = document.querySelector('.containers')
const section = document.querySelector('.section') 

for (const article of articles) {
    const row1 = document.createElement("div")
    row1.setAttribute("class", "row1")
    
    const col1 = document.createElement('img')
    const col2 = document.createElement('h3')
    const col3 = document.createElement('p')
    
    col1.innerText = article.image
    col2.innerText = article.name
    col3.innerText = article.prix

    col1.setAttribute('class', 'col1')
    col1.setAttribute('src', `image/${article.image}`)
    col2.setAttribute('class', 'col2')
    col3.setAttribute('class', 'col3')
    

    row1.appendChild(col1)
    row1.appendChild(col2)
    row1.appendChild(col3)

    containers.appendChild(row1)
    
}

