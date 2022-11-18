const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'scss', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        point: 30
    },
    Asad: {
        email: 'asad@asad.com',
        skills: ['HTML', 'scss', 'JavaScript', 'Node'],
        age: 30,
        isLoggedIn: true,
        point: 50
    },
    Amod: {
        email: 'amod@amod.com',
        skills: ['HTML', 'scss', 'JavaScript', 'Vuejs'],
        age: 25,
        isLoggedIn: true,
        point: 50
    },
    Readman: {
        email: 'alex@alex.com',
        skills: ['HTML', 'scss', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        point: 40
    },
    Avan: {
        email: 'alex@alex.com',
        skills: ['HTML', 'scss', 'JavaScript'],
        age: 20,
        isLoggedIn: true,
        point: 50
    },
    Sem: {
        email: 'alex@alex.com',
        skills: ['HTML', 'scss', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        point: 30
    },
}

function getUserInfo () {
    //return `les ${this.Avan} sont connecter`
    for (const property in users) {
        //console.log(`users.${property} = ${users[property]}`);
      
    }
}
getUserInfo ()

const copyUsers = Object.assign({}, users)
console.log(copyUsers, 'users');

const entries = Object.entries(copyUsers)
console.log(entries, 'asad')
//console.log(users.getUserInfo());
//////////////////////////////////////////////