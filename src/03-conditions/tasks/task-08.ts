/**
 * An airline automatically determines a passenger's check-in status.
 * Business Rules
 * Step 1
 * If the passenger has not checked in online, display:
 * "Please complete online check-in first.""
 * 
 * Otherwise, continue.
 * Step 2
 * If baggage weight exceeds 20 kg:
 * - Business Class → Extra baggage allowed.
 * - Economy Class → Additional baggage fee required.
 * 
 * Otherwise:
 * Proceed to boarding pass printing.
 * 
 * Passenger Information
 * | Information     | Value         |
 * | --------------- | ------------- |
 * | Passenger       | Fajar Nugroho |
 * | Online Check-in | Yes           |
 * | Cabin Class     | Economy       |
 * | Baggage Weight  | 24 kg         |
 * 
 * Student Tasks
 * 1. Declare all variables.
 * 2. Implement the airline decision process.
 * 3. Display the correct message.
 */

const Passenger: string = "Fajar Nugroho"
const OnlineCheckin: boolean = true
const CabinClass: string = "Economy"
const BaggageWeight: number = 24

console.log("=== Task 08 === ")
console.log(`Passenger Name : ${Passenger}`)

if (!OnlineCheckin) {
    console.log("Please complete online check-in first.")
} else {

    if (BaggageWeight > 20) {
        if (CabinClass === "Business") {
            console.log("Status:  Extra baggage allowed.")
        } else {
            console.log(" Status : Additional baggage fee required.")
        }
    } else {
        console.log("Status : Proceed to boarding pass printing.")
    }
}
