/**
 * A bank evaluates loan applications using the following policy.
 * First Screening
 * Applicants must satisfy both requirements:
 * - Monthly income is at least Rp8,000,000
 * - Credit score is at least 700
 * If they pass the first screening, continue to the second screening.
 * 
 * Second Screening
 * - Existing debt must not exceed 30% of monthly income.
 * - Employment status must be permanent.
 * 
 * 
 * Decision Rules:
 * - Pass both screenings → Loan Approved
 * - Pass first screening only → Manual Review
 * - Fail first screening → Loan Rejected
 * 
 * bunga pertahun 15%
 * hutang 2.500.000
 * yang dicari cicilan perbulan 
 * 
 * Today's applicant:
 * | Information        | Value       |
 * | ------------------ | ----------- |
 * | Applicant          | Andi Wijaya |
 * | Monthly Income     | 10000000    |
 * | Credit Score       | 725         |
 * | Existing Debt      | 2500000     |
 * | Permanent Employee | Yes         |
 * 
 * Student Tasks:
 * 1. Declare all variables.
 * 2. Implement both screening stages.
 * 3. Display the loan decision.
 */

const Applicant: string = "Andi Wijaya"
const MonthlyIncome: number = 1000000
const CreditScore: number = 725
const ExistingDebt: number = 9000000
const PermanentEmployee: boolean = true
const bunga = 0.15
const tahuncicil = 2
const perbulancicilan = tahuncicil * 12

const firstScreaning = MonthlyIncome >= 8000000 && CreditScore >= 700
const MaxAllowedept = MonthlyIncome * 0.30
const SecondScreaning = (ExistingDebt <= MaxAllowedept) && PermanentEmployee

console.log(`=== Task 07 ===`)
console.log(`Applicant Name: ${Applicant}`)

if (firstScreaning) {
    if (SecondScreaning) {
        console.log("Decision : Loan Approved")
    } else {
        console.log("Decision : Manual Review")
    }
} else {
    console.log("Loan Rejected")
}
//tugas
const totalBunga = ExistingDebt * bunga * tahuncicil
const totalBayar = ExistingDebt + totalBunga
const TotalCicilanPerbulan = totalBayar / perbulancicilan


if (firstScreaning) {
    if (totalBunga) {
        console.log("Bunga diperoleh ")
        console.log(`total bunga : ${totalBunga}`)
    }
} else {
    console.log("Bunga tidak diperoleh")
}











