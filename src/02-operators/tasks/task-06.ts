/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */

const hourlyRate = 8000
const hourplayed = 7 
const minutePlayed = 35 

const totalMinutes = (hourplayed*60 + minutePlayed)
const remainingMinutes = totalMinutes * 60

const billedHours = Math.ceil(totalMinutes/60)
const beforeDiscount = billedHours * hourlyRate

const isEligibleDiscount = billedHours > 5
const discountAmount = isEligibleDiscount ? beforeDiscount * 0.15 : 0

const finalpayment = beforeDiscount - discountAmount

console.log("=== Task 06 ===")
console.log("Total playing time (minutes) :", totalMinutes);
console.log("Remaining minutes            :", remainingMinutes);
console.log("Total billed hours           :", billedHours);
console.log("Total payment before discount: Rp.", beforeDiscount);
console.log("Discount amount (15%)        : Rp.", discountAmount);
console.log("Final payment                : Rp.", finalpayment);