/**
 * An e-commerce platform is preparing a flash sale event. Before the discount calculation begins, 
 * the system temporarily stores several pieces of information as individual variables.
 * A customer wants to purchase a Mechanical Keyboard RGB with the product code KBR-001. 
 * The original price of the product is 850000 rupiahs, 
 * and the flash sale offers a 25% discount. The customer plans to buy 2 keyboards. 
 * Because the customer is a premium member, they are eligible for free shipping. 
 * The current stock available in the warehouse is 18 units.
 * 
 * Task:
 * 1. Identify every value that should become a variable.
 * 2. Choose an appropriate variable name for each value.
 * 3. Determine the correct data type.
 * 4. Declare all variables in TypeScript.
 * 5. Display the product data using console.log.
 */
// npm run example src/01-data-types/tasks/task-02.ts

interface keyboard {
    code: string
    price: number
    discount: boolean
    disc: number
    buy: number
    stock:number
}

const memberprem: boolean = true
const initialprice: number = 850000
const discrate: number =  0.25

const Kb1: keyboard = {
    code: "KBR-001",
    price: 850000,
    discount: true,
    disc: 0.25,
    buy: 2,
    stock:18


};
console.log("code produk :", Kb1.code)
console.log("Price Produk :", Kb1.price)
console.log("Discount :", Kb1.disc * 100 +"%" )
console.log("Free Shipping :", memberprem)
console.log("Total buy :", Kb1.buy)
console.log("Stock barang :", Kb1.stock)



