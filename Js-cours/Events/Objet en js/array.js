//array des objets
const blogs = [
    {
        id: 1, 
        titre: 'les bases du JS', 
        contenu: 'tout savoir sur les bases du JS', 
        likes: 10 
    },
    {
        id: 2, 
        titre: 'les bases de Vue JS', 
        contenu: 'tout savoir sur les bases de vue JS', 
        likes: 12
    },
    {
        id: 3, 
        titre: 'les bases de Node JS', 
        contenu: 'tout savoir sur les bases de node JS', 
        likes: 15 
    },
]
blogs.forEach( (blog) => {
    console.log(`${blog.id}- ${blog.titre}- ${blog.contenu} et ${blog.likes} ont aimer`);
    
})