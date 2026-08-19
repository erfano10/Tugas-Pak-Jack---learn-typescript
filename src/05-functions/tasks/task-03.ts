/**
 * An online store stores product prices in an array in below.
 * The finance department needs to calculate the total purchase amount.
 * Instead of calculating the total directly in the main program, create reusable function.
 * The function should return the total price.
 * Student Tasks
 * 1. Create a function named calculateTotalPrice.
 * 2. The function receives an array of prices.
 * 3. Use a loop to calculate the total.
 * 4. Return the total price.
 * 5. Display the returned value.
 */



const prices = [
    250000,
    180000,
    95000,
    420000,
    125000
];

function calculateTotalPrice(
    price: number[]
): number {
    let total: number = 0
    for (let index = 0; index < price.length; index++) {
        total += price[index]
    }
    return total
}
const totalPrice: number = calculateTotalPrice(prices)
console.log(`=== Task 03 ===`)
console.log(`total Purchase Amount : RP. ${totalPrice}`)