/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */
const KeyboardPrice = 850000
const KeyboardQty = 1

const mousePrice = 275000
const mouseQty = 2

const mousePadPrice = 120000
const mousePadQty = 1

const Ispremium = true

let totalItem = 0

totalItem += KeyboardQty
totalItem += mouseQty
totalItem += mousePadQty

const subtotal = (KeyboardPrice * KeyboardQty) + (mousePrice * mouseQty) + (mousePadPrice * mousePadQty)
const isEligibleDiscount = subtotal > 1000000
const discountAmount = isEligibleDiscount ? subtotal * 0.10 : 0
const finalpayment = subtotal - discountAmount

const freeshipping = Ispremium

console.log(`=== Task 04 ===`)
console.log("total item :", totalItem)
console.log("Subtotal :", subtotal)
console.log("Discount Amount :", discountAmount)
console.log("final payment :", finalpayment)
console.log("Free ongkir :", freeshipping ? "YES" : "NO")
