class Product {
    constructor(name, description, price, inStock) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = inStock
    }

    addToStock(amount) {
        this.inStock += amount
        console.log(`add to Stock: ${amount}. Total amount in Stock: ${this.inStock}`)
    }

    calculateDiscount(discount) {
        this.price -= ((discount/100) * this.price)
        console.log(`Discount: ${this.price}`)
    }
}

const headset = new Product('Headset', 'full bass','100',6)



console.log(headset)

headset.addToStock(3)
headset.calculateDiscount(10)

console.log(headset)