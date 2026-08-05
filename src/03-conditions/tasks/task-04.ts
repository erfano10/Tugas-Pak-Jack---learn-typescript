/**
 * A hotel determines room availability using the following rules.
 * First, the system checks whether rooms are still available.
 * If rooms are available:
 * - Premium members receive a free room upgrade.
 * - Regular customers receive the reserved room only.
 * 
 * If no rooms are available:
 * - Premium members are placed on the priority waiting list.
 * - Regular customers are informed that no rooms are available.
 * 
 * Today's reservation:
 * | Information    | Value       |
 * | -------------- | ----------- |
 * | Customer Name  | Nadia Putri |
 * | Premium Member | Yes         |
 * | Room Available | No          |
 * 
 * The system should display the appropriate message.
 * Student Tasks: 
 * 1. Declare all variables.
 * 2. Implement the logic using nested if statements.
 * 3. Display the reservation result.
 */

const costumerName: string = "Nadia Putri"
const PremiumMember: boolean = true
const RoomAvailable: Boolean = false

console.log(`=== Task 04 ===`)
console.log(`Costumer Name : ${costumerName}`)

if (RoomAvailable) {
    if (PremiumMember) {
        console.log("Status : Congratulations! You receive a free room upgrade.")
    } else {
        console.log("Status : Your reserved room is ready.")
    }
} else {
    if (PremiumMember) {
        console.log("Status : Rooms are full. You are placed on the priority waiting list")
    } else {
        console.log("Status : Sorry, no rooms are available.")
    }
}
