class Account {
    #password
    #balance

    constructor(user){
        this.email = user.email
        this.#password = user.password
        this.#balance = 0
    }

    getBalance(email, password) {
        if (email === this.email && password === this.#password){
            return `Balance: ${this.#balance}`
        } else {
            return "email or passord incorrect."
        }
    }
}


const user = {
    email: 'thales@email.com',
    password: 123456
}

const myaccount = new Account(user)

console.log(myaccount)
console.log(myaccount.getBalance('thales@email.com', 123456))






