const users = [
    {
       id: '332oir',
       pseudo: 'Alex',
       email: 'alex@alex.com',
       password: '123456',
       dateCreate: '02/05/2019',
       isLogin: false
    },
    {
        id: '3p2mir',
        pseudo: 'Alix',
        email: 'alix@alix.com',
        password: '122984',
        dateCreate: '02/10/2019',
        isLogin: true
     },
     {
        id: 'd32cix',
        pseudo: 'blex',
        email: 'blex@blex.com',
        password: '123684',
        dateCreate: '14/05/2021',
        isLogin: true
     },
     {
        id: '302jir',
        pseudo: 'Hulk',
        email: 'hulk@hulk.com',
        password: '323456',
        dateCreate: '12/11/2022',
        isLogin: false
     },
     {
        id: '53hf0r',
        pseudo: 'Mame',
        email: 'mame@mame.com',
        password: '381756',
        dateCreate: '25/12/2018',
        isLogin: true
     },
]
//console.log(users[1].id);

    //var isLogin =  prompt('')

    function signUp () {
       const id = users.length + 1
       const pseudo = prompt('Entrez votre pseudo')
       const email = prompt('Entrez votre email')
       const password = prompt('Entrez votre password')
       const dateCreate = new Date('11 October, 2022 07:33:00');
       let myVariable = true 
       
       const user = {
        id: id,
        pseudo: pseudo,
        email: email,
        password: password,
        dateCreate: dateCreate,
        isLogin: myVariable
       };
        //
        console.log(users);
        const existingUser = users.find((mail) => mail.email === email)
        console.log(existingUser);
        if (existingUser === undefined) {
               users.push(user)
        } else {
         alert('utilisateur existant')
        }
       return 
    }
    signUp()

    function signIn() {
      
    }
