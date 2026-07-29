/**
 * A hotel calculates a guest's payment based on the following information.
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.
 * - Tax is calculated after the discount.
 * - Service charge is not discounted.
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.
 * 
 * The system must calculate:
 * - Room subtotal
 * - Discount
 * - Tax
 * - Final payment
 * - Whether the guest is eligible for free breakfast
 */

const RoomPrice = 650000
const NightStayed = 4
const ServiceCharge = 120000
const Tax = 0.11
const VIPMember = true

const roomSubtotal = RoomPrice * NightStayed
const discountAmount = VIPMember ? roomSubtotal * 0.12 : 0
const discountRoomPrice = roomSubtotal - discountAmount

const taxAMount = discountRoomPrice * Tax
const finalpayment = discountRoomPrice + taxAMount + ServiceCharge
const isBreak = NightStayed >= 3 || VIPMember

console.log("=== Task 07 ===")
console.log("Room Subtotal  : Rp", roomSubtotal);
console.log("Discount       : Rp", discountAmount);
console.log("Tax (11%)      : Rp", taxAMount);
console.log("Final Payment  : Rp", finalpayment);
console.log("Free Breakfast :", isBreak ? "YES" : "NO");