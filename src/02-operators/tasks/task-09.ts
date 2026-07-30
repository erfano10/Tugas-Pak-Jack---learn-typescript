/**
 * An online marketplace wants to calculate the customer's final payment and reward points after checkout.
 * The customer purchases the following items:
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Monitor Stand       | 420000 |        1 |
 * 
 * Customer Information:
 * | Information       | Value                            |
 * | ----------------- | -------------------------------- |
 * | Voucher Value     | 100000                           |
 * | Premium Member    | Yes                              |
 * | Reward Point Rate | 1 point for every Rp50,000 spent |
 * 
 * Business Rules:
 * - Premium members receive 10% discount.
 * - Voucher is deducted after the membership discount.
 * - Reward points are calculated from the final payment before tax.
 * - VAT is 11%.
 * - Free shipping is available if:
 * - Premium member OR
 * - Final payment before tax exceeds Rp1,500,000.
 * 
 * The checkout system must calculate:
 * - Product subtotal
 * - Membership discount
 * - Voucher deduction
 * - Payment before tax
 * - VAT
 * - Final payment
 * - Reward points
 * - Free shipping eligibility

 */

const MechanicalKeyboard = 850000
const MechanicalKeyboardQty = 1

const WirelessMouse = 275000
const WirelessMouseQty = 2

const MonitorStand = 420000
const MonitorStandQty = 1

const VoucherValue = 100000
const PremiumMember = true
const RewardPoint = 0.11
const ProductSubtotal = (MechanicalKeyboard * MechanicalKeyboardQty) + (WirelessMouse * WirelessMouseQty) + (MonitorStand * MonitorStandQty)
const membershipDiscount = PremiumMember ? ProductSubtotal * 0.10 : 0
const VoucherDuducation = VoucherValue
const paymentBeforeTAX = ProductSubtotal - membershipDiscount - VoucherDuducation

const vatAmound = paymentBeforeTAX * RewardPoint
const finalPayment = paymentBeforeTAX + vatAmound

const rewardPoint = Math.floor(paymentBeforeTAX / 50000)
const freeShipping = PremiumMember || (paymentBeforeTAX > 150000)

console.log(`=== Task 09 ===`)
console.log("Product sub total :", ProductSubtotal)
console.log("Membership Discount :", membershipDiscount)
console.log("Voucher Deducation :", VoucherDuducation)
console.log("Payment before Tax :", paymentBeforeTAX)
console.log("Vat(11%) :", vatAmound)
console.log("Final Payment :", finalPayment)
console.log("Reward point :", rewardPoint, "points")
console.log("Free shipping eligibility :", freeShipping ? "YES" : "NO")
