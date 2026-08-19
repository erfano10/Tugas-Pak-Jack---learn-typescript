/**
 * The warehouse checks customer orders before shipping based on array below.
 * 
 * Business Rules
 * An order is ready to ship only if:
 * - Payment has been completed.
 * - Stock is available.
 * 
 * Student Task:
 * Loop through every order and calculate:
 * - Number of orders ready to ship
 * - Number of unpaid orders
 * - Number of orders waiting for stock
 * - Display all order IDs that are ready to ship
 */

type order = {
  id: string
  paid: boolean
  stockAvailable: boolean

}
const orders = [
  { id: "ORD001", paid: true, stockAvailable: true },
  { id: "ORD002", paid: false, stockAvailable: true },
  { id: "ORD003", paid: true, stockAvailable: false },
  { id: "ORD004", paid: true, stockAvailable: true },
  { id: "ORD005", paid: false, stockAvailable: false },
  { id: "ORD006", paid: true, stockAvailable: true }
];

let Numberofordersreadytoship: number = 0
let Numberofunpaidorders: number = 0
let Numberoforderswaitingforstock: number = 0
let allorderIDsthatarereadytoship: string[] = []

for (let index = 0; index < orders.length; index++) {
  const order = orders[index];
  if (order.paid && order.stockAvailable) {
    Numberofordersreadytoship++
    allorderIDsthatarereadytoship.push(orders[index].id)
  } else if (!order.paid) {
    Numberofunpaidorders++
  } else if (!order.stockAvailable) {
    Numberoforderswaitingforstock++
  }
}
console.log(`=== Task 08 ===`)
console.log(` Number of orders ready to ship : ${Numberofordersreadytoship}`)
console.log(` Number of unpaid orders : ${Numberofunpaidorders}`)
console.log(` Number of orders waiting for stock : ${Numberoforderswaitingforstock}`)
console.log(` All order IDs that are ready to ship`)
console.log(allorderIDsthatarereadytoship)


