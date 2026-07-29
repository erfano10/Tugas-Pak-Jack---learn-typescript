/**
 * The school cafeteria sells lunch packages to students. Today, Raka purchased 3 fried rice meals, each costing Rp18,000, and 2 bottles of mineral water, each costing Rp5,000. Because he is a member of the student council, he received a Rp10,000 discount.
 * The cashier wants to calculate:
 *  - Total price of fried rice
 *  - Total price of drinks
 *  - Total price before discount
 *  - Final amount to be paid
 *
 * Task:
 * 1. Use operators to calculate:
 *  - Total food price
 *  - Total drink price
 *  - Grand total
 *  - Final payment
 * 2. Display the calculation results.
 */
// npm run example src/02-operators/tasks/task-01.ts

const jumlahnasigoreng = 3;
const harganasigoreng =  18000;

const jumlahAirMineral = 2;
const hargaAirMineral = 5000;

const discount = 10000;

const totalHargaMakanan= jumlahnasigoreng * harganasigoreng;
const totalHargaAirMineral= jumlahAirMineral * hargaAirMineral;
const totalSebelumDiskon= totalHargaMakanan + totalHargaAirMineral;
const totalAkhir= totalSebelumDiskon - discount

console.log("Total Nasgor :", totalHargaMakanan)
console.log("Total air mineral :", totalHargaAirMineral)
console.log("Total Sebelum discount :", totalSebelumDiskon)
console.log("Total Akhir :", totalAkhir)