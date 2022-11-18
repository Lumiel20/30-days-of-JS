const produits = [
    {
        name: 'Basket-Rose',
        image: 'produit1.jpg',
        prix: '5000fcfa',
        
    },
    {
        name: 'Basket-Rose',
        image: 'produit2.jpeg',
        prix: '5000fcfa',
        
    },
    {
        name: 'Fille de Joie',
        image: 'produit3.jpg',
        prix: '5000fcfa',
       
    },
    {
        name: 'T-shirt Tacheter',
        image: 'produit4.jpg',
        prix: '5000fcfa',
        
    },
    {
        name: 'Pull-Rayer',
        image: 'produit5.jpg',
        prix: '5000fcfa',
    },
    {
        name: 'McLumiel\'s',
        image: 'produit6.jpeg',
        prix: '5000fcfa',
        
    },
    {
        name: 'Basket-Cafe',
        image: 'produit7.jpeg',
        prix: '5000fcfa',
        
    },
    {
        name: 'Hope But',
        image: 'produit8.jpeg',
        prix: '5000fcfa',
        
    },
    {
        name: 'Titanium',
        image: 'produit9.jpg',
        prix: '5000fcfa',
    },
    {
        name: 'Sweet-girl',
        image: 'produit10.jpg',
        prix: '5000fcfa',
    },
    {
        name: 'Bomb-girl',
        image: 'produit11.jpg',
        prix: '5000fcfa',
    },
    {
        name: 'Robulus',
        image: 'produit12.jpg',
        prix: '5000fcfa',
    }
]
const container = document.querySelector('.container')

for (const produit of produits) {
    const row1 = document.createElement("div")
    row1.setAttribute("class", "row1")
    
    const col1 = document.createElement('img')
    const col2 = document.createElement('h3')
    const col3 = document.createElement('p')
    
    //col1.innerText = produit.image
    col2.innerText = produit.name
    col3.innerText = produit.prix

    

    col1.setAttribute('class', 'col1')
    col1.setAttribute('src', `image/${produit.image}`)
    col2.setAttribute('class', 'col2')
    col3.setAttribute('class', 'col3')
    

    row1.appendChild(col1)
    row1.appendChild(col2)
    row1.appendChild(col3)

    container.appendChild(row1)
    
    const section = document.querySelector('.section')
    const container_1 = document.querySelector('.container-1')

    col1.addEventListener('click', () =>{
        
        const row2 = document.createElement('div')
        row2.setAttribute('class', 'row2')

        const col4 = document.createElement('img')
        col4.setAttribute('class', 'col4')
        col4.setAttribute('src', `image/${produit.image}`)
        col4.style.height = '250px'
        col4.style.width = '250px'

        const h3 = document.createElement('h3')
        const p = document.createElement('p')
        h3.innerText = produit.name
        p.innerText = produit.prix

        const col5 = document.createElement('div')
        col5.setAttribute('class', 'col5')

        const input = document.createElement('input')
        input.setAttribute('class', 'input')
        input.setAttribute('type', 'number')

        const button = document.createElement('button')
        button.setAttribute('class','button')
        button.setAttribute('name','button')

        const div1 = document.createElement('div')
        const div2 = document.createElement('div')
        div1.appendChild(input)
        div2.appendChild(button)

        const div = document.createElement('div')
        div.setAttribute('class', 'divBlock')

        input.style.height = '25px'
        input.style.width = '45px'
        
        button.style.height = '30px'
        button.style.width = '130px'
        
        col5.appendChild(h3)
        col5.appendChild(p)
        row2.appendChild(col4)
        row2.appendChild(col5)
        div.appendChild(div1)
        div.appendChild(div2)
        row2.appendChild(div)

        container_1.appendChild(row2)
        section.appendChild(container_1)
        
       
   })
   
   
}
