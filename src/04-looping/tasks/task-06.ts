/**
 * A warehouse stores the stock quantity of each product in following array.
 * Warehouse Rules:
 * - Out of Stock → quantity = 0
 * - Low Stock → quantity < 10
 * - Safe Stock → quantity ≥ 10
 * 
 * Students have to Calculate:
 * - Number of Out of Stock products
 * - Number of Low Stock products
 * - Number of Safe Stock products
 * - Total inventory
 * - Average stock quantity
 */

const stocks = [
    25, 0, 18, 6, 42,
    9, 0, 55, 13, 2,
    30, 8, 41, 0, 16
];

let CountOutOfStock: number = 0
let CountLowStock: number = 0
let CountSafeStock: number = 0
let TotalInventory: number = 0 
let totalStock: number = stocks.length

for (let index = 0; index < stocks.length; index++) {
    const stock: number = stocks[index]

    if(stock === 0){
        CountOutOfStock++
    }else if (stock < 10) {
        CountLowStock++
    }else {
        CountSafeStock++

    }

    TotalInventory += stock

}

console.log(`=== Task 06 ===`)

console.log(`Number of Out of Stock : ${CountOutOfStock}`)
console.log(`Number of Low Stock : ${CountLowStock}`)
console.log(`Number of Safe Stock : ${CountSafeStock}`)
console.log(`Total Invetory : ${TotalInventory}`)
console.log(`Average score : ${TotalInventory / totalStock}`)
