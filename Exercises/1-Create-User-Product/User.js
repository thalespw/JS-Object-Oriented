class User {
    constructor(fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }


    login(email, password) {

        if (this.email === email && this.password === password) {
            console.log('Login is successful')
        } else {
            console.log('email or password is incorrect')
        }
    }
}

const user1 = new User('Thales Lourencon', 'thales@aa.aaa','1234')


user1.login('thales@aa.aaa','123467')








