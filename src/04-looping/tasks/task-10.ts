/**
 * An LMS stores assignment submission information on array below.
 * Business Rules
 * - Students who do not submit automatically receive a score of 0.
 * - A passing score is 75.
 * - Submitted assignments with a score below 75 require revision.
 * 
 * Student Tasks using a loop for:
 * - Count students who submitted their assignment.
 * - Count students who did not submit.
 * - Count students who passed.
 * - Count students who must revise their assignment.
 * - Display the names of students who did not submit.
 * - Display the names of students who must revise.
 * - Calculate the class average score.
 */

type Submission = {
    student: string
    submitted: string
    score: number
}

const submissions = [
    { student: "Alya", submitted: true, score: 92 },
    { student: "Budi", submitted: false, score: 0 },
    { student: "Citra", submitted: true, score: 78 },
    { student: "Dimas", submitted: true, score: 65 },
    { student: "Eka", submitted: false, score: 0 },
    { student: "Fajar", submitted: true, score: 84 },
    { student: "Gita", submitted: true, score: 90 },
    { student: "Hana", submitted: true, score: 73 }
];

let countSubmittedStudent: number = 0
let countUnbmittedDStudent: number = 0
let countPassedStudent: number = 0
let countFsiledStudent: number = 0
let totalScores: number = 0
let countOfStudent: number = submissions.length

let UnsubmittedStudentnsme: string [] = []
let revisionName: string[] = []

for (let index = 0; index < countOfStudent; index++) {
    // check ketika student sudah subbimitted
    if (submissions[index].submitted) {
        countSubmittedStudent++
    } else {
        countUnbmittedDStudent++
        UnsubmittedStudentnsme.push(submissions[index].student)
    }

    if (submissions[index].score >= 75) {
        countFsiledStudent++
        revisionName.push(submissions[index].student)

    }

    totalScores += submissions[index].score

}
console.log(`=== Task 10 ===`)

console.log(`Submitted Srudent : ${countSubmittedStudent}`)
console.log(`Unsubmitted Student :${countUnbmittedDStudent}`)
console.log(`Passed Student : ${countPassedStudent}`)
console.log(`Failed Student : ${countFsiledStudent}`)
console.log(`Average score :${totalScores / countOfStudent}`)

console.log(`Student who not submit assigment`)
console.log(UnsubmittedStudentnsme)
console.log(`Student who need revise`)
console.log(revisionName)