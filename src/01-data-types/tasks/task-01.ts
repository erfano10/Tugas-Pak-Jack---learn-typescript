/**
 * SMK Telkom Malang calculates each student's final score using several assessment components. 
 * Before calculating the final grade, the system stores every assessment score as a separate variable. 
 * The homeroom teacher entered the following information for one student. 
 * The student named Nadia Putri has a student ID of ST2026045. She earned 88.5 on assignments, 
 * 84 on the midterm exam, and 91.5 on the final exam. Because she submitted every assignment before the deadline, 
 * she received an attendance score of 100. The school also records that Nadia participates in extracurricular activities, 
 * so this information should also be stored.
 * 
 * Task:
 * 
 * 1. dentify all values that should be stored as variables.
 * 2. Determine the most appropriate data type for each variable.
 * 3. Create the variable declarations using TypeScript.
 * 4. Display the student data using console.log.
 */
 //npm run example src/01-data-types/tasks/task-01.ts

const StudentName: string = "Nadia Putri"
const studentID: string = "ST2026045"
const beforeDeadline: boolean = true
const Ulangan: string[] = ["Assigments","midtrem exam","final exam"]

const score: number[] = [88.5, 84, 91.5]
const attendanceScore: number = 100
const extracurricular: boolean = true

console.log("=== task 01 ===")
console.log("Student Name :", StudentName); 
console.log("Student ID :", studentID);
console.log(`ulangan: ${Ulangan[0]} nilai: ${score[0]}`)
console.log(`ulangan: ${Ulangan[1]} nilai: ${score[1]}`)
console.log(`ulangan: ${Ulangan[2]} nilai: ${score[2]}`)
console.log("attendance:", attendanceScore)
console.log("Extra :", extracurricular)