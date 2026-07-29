/**
 * A company pays employees based on their monthly salary and overtime hours.
 * Employee Information:
 * | Information    | Value   |
 * | -------------- | ------- |
 * | Employee Name  | Dimas   |
 * | Basic Salary   | 5000000 |
 * | Overtime Hours | 12      |
 * | Overtime Rate  | 50000   |
 *
 * 
 * The company has the following policy:
 * Employees who work more than 10 overtime hours receive an additional Rp300,000 performance bonus.
 * Otherwise, no bonus is given.
 * You need to calculatea and display:
 * - Overtime pay
 * - Bonus
 * - Final salary
 */
//npm run example src/02-operators/tasks/task-03.ts

const employeName = "Dimas";
const BasicSalary = 5000000;
const OvertimeHours = 12;
const OvertimeRate = 50000;

const OvertimePay = OvertimeHours * OvertimeRate

const bonus = OvertimeHours > 10 ? 300000 : 0;
const FinalSalary = BasicSalary + OvertimePay + bonus 
console.log(`=== Task 03 ===`)
console.log("employee name :", employeName)
console.log("Overtime Pay :", OvertimePay)
console.log("bonus :RP.", bonus)
console.log("Final Salary :", FinalSalary)