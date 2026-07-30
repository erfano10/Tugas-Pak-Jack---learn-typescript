/**
 * A smart home monitors electricity usage every day.
 * Today's information:
 * | Information               | Value |
 * | ------------------------- | ----- |
 * | Previous Meter            | 25640 |
 * | Current Meter             | 25892 |
 * | Electricity Price per kWh | 1650  |
 * | Solar Panel Installed     | Yes   |
 * | Energy Saving Mode        | No    |
 * 
 * Business Rules
 * - Electricity usage is calculated from the meter difference.
 * - Houses with solar panels receive a 20% discount.
 * - Houses receive an additional 5% discount if Energy Saving Mode is enabled.
 * - A house qualifies for the Green Energy Program only if:
 *      - Solar panel is installed
 *      - Energy consumption is below 300 kWh
 *      - Energy Saving Mode is enabled
 * 
 * The system must calculate:
 * - Total energy consumption
 * - Electricity bill
 * - Final bill
 * - Green Energy Program eligibility
 */

const PreviousMeter = 25640
const CurrentMeter = 25892
const ElectricityPriceperkWh = 1650
const SolarPanelInstalled = true
const EnergySavingMode = false

const totalconsumption = CurrentMeter - PreviousMeter
const baseBill = totalconsumption * ElectricityPriceperkWh
const solarDiscount = SolarPanelInstalled ? 0.20 : 0
const energySavingdiscount = EnergySavingMode ? 0.05 : 0
const TotalDiscountRate = solarDiscount + energySavingdiscount
const discountAmound = baseBill * TotalDiscountRate

const FinalBill = baseBill - discountAmound

const isGreenEnergyEligible = SolarPanelInstalled && totalconsumption < 300 && EnergySavingMode

console.log("==== Task 08 ===")
console.log(`Total energy consumtion : ${totalconsumption} Kwh`)
console.log(`Base bil : Rp ${baseBill}`)
console.log(`Discount Amound (${TotalDiscountRate * 100} %): Rp ${discountAmound}`)
console.log(`Final bill : ${FinalBill}`)
console.log(`Green Energy Program : ${isGreenEnergyEligible ? "Eligible" : "Not Eligible"}`)
