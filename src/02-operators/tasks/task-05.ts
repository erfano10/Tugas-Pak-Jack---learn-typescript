/**
 * A university is selecting students for a full scholarship.
 * A student will receive the scholarship only if all of the following requirements are satisfied:
 * - GPA is at least 3.75
 * - Family monthly income is less than Rp5,000,000
 * - The student has participated in at least 3 competitions
 * - The student has no disciplinary violations
 * - The student has completed all administrative documents.
 * 
 * The admissions office receives the following student information.
 * | Information             | Value      |
 * | ----------------------- | ---------- |
 * | Student Name            | Alya Putri |
 * | GPA                     | 3.89       |
 * | Family Income           | 4200000    |
 * | Competition Count       | 4          |
 * | Has Disciplinary Record | No         |
 * | Documents Complete      | Yes        |
 * 
 * If the student qualifies:
 *  - Scholarship Amount = Rp12,000,000
 * 
 * Otherwise:
 *  - Scholarship Amount = Rp0
 * 
 * Finally, the system should also calculate how much funding remains if the 
 * university has a total scholarship budget of Rp500,000,000.
 * 
 * Task:
 * - Evaluate every requirement using comparison operators.
 * - Combine all conditions using logical operators.
 * - Determine the scholarship amount using the ternary operator.
 * - Calculate the remaining scholarship budget.
 * - Display whether the student is accepted.
 */
//npm run example src/02-operators/tasks/task-05.ts

const studentName = "Alya Putri"
const GPA = 3.89
const familyIncome = 4200000
const CompetitionCount = 4
const HasDisplayRecord = false
const DocumentsComplete = true

const totalBudget = 500000000
const ScholarshipAmount = 12000000

const isAccepted = 
GPA >= 3.75 && familyIncome <= 500000000 && CompetitionCount >= 3 && HasDisplayRecord == false && DocumentsComplete == true

const grantedScholarsip = isAccepted ? ScholarshipAmount : 0
const remainingBudget = totalBudget - grantedScholarsip

console.log(`--- Task 05 ---`)
console.log("Is studend accepted?:", isAccepted)
console.log("Schoolarsip Amount : Rp.", grantedScholarsip )
console.log("Remaining Budget : Rp.", remainingBudget)
