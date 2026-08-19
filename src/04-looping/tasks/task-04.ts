/**
 * An online store wants to analyze today's sales transactions. 
 * Each transaction amount is stored in an array.
 * ---------------------------------
 * const sales = [
 * 125000,
 * 350000,
 * 78000,
 * 910000,
 * 150000,
 * 420000,
 * 275000,
 * 99000,
 * 640000,
 * 18000
 * ]
 * -------------------------------------
 * 
 * Student task in calculate:
 * 1. Total sales revenue
 * 2. Highest transaction
 * 3. Lowest transaction
 * 4. Number of transactions worth Rp300,000 or more
 * 5. Average transaction value
 */

const sales: number[] = [
    125000,
    350000,
    78000,
    910000,
    150000,
    420000,
    275000,
    99000,
    640000,
    18000
]

let totalsales = 0
let Highesttransaction = sales[0]
let Lowesttransaction = sales[0]
let highValueCount = 0

for(const sale of sales){
    totalsales += sale
    if(sale > Highesttransaction){
        Highesttransaction = sale
    }
    if(sale < Lowesttransaction){
        Lowesttransaction = sale
    }
    if(sale >= 300000){
        highValueCount++    }
}

const average = totalsales /sales.length

console.log(`=== Task 04 ===`)
console.log(`Total sales : ${totalsales}`)
console.log(`Highest transaction : ${Highesttransaction}`)
console.log(`Lowes transaction : ${Lowesttransaction}`)
console.log(`Transaction >= 300k : ${highValueCount} `)
console.log(`Average transaction : ${average}`)
