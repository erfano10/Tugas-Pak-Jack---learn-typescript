/**
 * An Internet Service Provider recommends an internet package based on the customer's monthly data usage.
 * Business Rules
 * | Monthly Usage    | Recommended Package |
 * | ---------------- | ------------------- |
 * | Less than 50 GB  | Basic               |
 * | 50–150 GB        | Standard            |
 * | More than 150 GB | Premium             |
 * 
 * Today's customer has used:
 * | Information   | Value        |
 * | ------------- | ------------ |
 * | Customer Name | Raka Saputra |
 * | Monthly Usage | 124 GB       |
 * 
 * Tasks:
 * 1. Declare all variables.
 * 2. Implement the business rules using if...else if...else.
 * 3. Display the recommended package.
 */

const costumerName: string = "Raka Saputra"
const MonthlyUsage: number = 124


console.log(`=== Task 03 ===`)
console.log(`Costumer Name : ${costumerName}`)
console.log(`Monthly Usage : ${MonthlyUsage} GB`)

if (MonthlyUsage < 50) {
    console.log("recommended Package:basic")
} else if (MonthlyUsage <= 150) {
    console.log("recommended Package:Standard")
} else {
    console.log("recommended Package:premium")
}


