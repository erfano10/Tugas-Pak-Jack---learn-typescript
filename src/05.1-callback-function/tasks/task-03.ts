/**
 * An online store has the following products:
 */

/**
 * The warehouse system needs to perform different operations on the same product list.
 * 1. Operation for display product
 * Keyboard - Rp850000
 * Mouse - Rp275000
 * Monitor - Rp2200000
 * Headset - Rp650000
 * 
 * 2. Display expensive products - Only products with a price above Rp1,000,000 should be displayed.
 * 3. Display products that cost more than Rp500,000 and show a 10% discount price.
 * 
 * Instead of creating a separate loop for every operation, the developer creates a reusable processing function.
 */


type product = {
    name: string
    price: number
}
const products = [
    { name: "Keyboard", price: 850000 },
    { name: "Mouse", price: 275000 },
    { name: "Monitor", price: 2200000 },
    { name: "Headset", price: 650000 }
];

function processProduct(produk: product[], callback: (item: product) => void): void {
    for (let index = 0; index < produk.length; index++) {
        callback(produk[index])

    }
}

function displayProduct(item: product): void {
    console.log(`${item.name} - ${item.price}`)
}

function displayExpensiveProduct(item: product): void {
    if (item.price > 1000000) {
        console.log(`${item.name} - ${item.price}`)
    }
}

function displayDiscountedProduct(item: product): void {
    if (item.price > 500000) {
        const discountPrice = item.price * 0.9
        console.log(`${item.name} - originall : ${item.price} | after 10%  Discount : ${discountPrice}`)
    }
}
console.log(`=== Task 03 ===`)
console.log(`\nDisplay all Product`)
processProduct(products, displayProduct)
console.log("\nDisplay expensive Product")
processProduct(products, displayExpensiveProduct)
console.log(`\nDisplay product > 500.000 and after discount 10%`)
processProduct(products, displayDiscountedProduct)



