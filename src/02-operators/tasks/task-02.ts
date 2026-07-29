/**
 * A student can participate in the graduation ceremony only if all of the following conditions are met:
 * - Final score is at least 75
 * - Attendance is at least 90%
 * - All tuition fees have been paid
 * 
 * Today, the administration receives the following student information.
| Information  | Value |
| ------------ | ----- |
| Final Score  | 82    |
| Attendance   | 94    |
| Tuition Paid | Yes   |

 * Task: Store and display the result in a variable named "isEligible"

 */
//npm run example src/02-operators/tasks/task-02.ts
const FinalScore = 82;
const Attendance = 94;
const TuitionPaid = true

const isEligible = FinalScore >=75 && Attendance >=90 && TuitionPaid;

console.log(`--- Task 2 ---`)
console.log(`|INFORMATION  | VALUE |`)
console.log(`|-------------|-------|`)
console.log(`| Final Score | ${FinalScore}    |`)
console.log(`| Attendance  | ${Attendance}    |`)
console.log(`|Tuition Paid | ${TuitionPaid ?"YES":"NO"}   | `)
console.log(`|-------------|-------|`)

console.log("Student is Eligible:", isEligible)