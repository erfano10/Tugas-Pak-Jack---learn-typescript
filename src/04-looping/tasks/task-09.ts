/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 * 
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */

type student = {
    name: string
    score: number
}
const students = [
    { name: "Alya", score: 88 },
    { name: "Budi", score: 71 },
    { name: "Citra", score: 95 },
    { name: "Dimas", score: 63 },
    { name: "Eka", score: 84 },
    { name: "Fajar", score: 79 },
    { name: "Gita", score: 92 },
    { name: "Hana", score: 67 }
];

let NumberofAstudents: number = 0
let NumberofBstudents: number = 0
let NumberofCstudents: number = 0
let NumberofDstudents: number = 0
let HighestScore: number = students [0].score
let Lowestscore: number = students[0].score
let totalScores: number = 0

for (let index = 0; index < students.length; index++) {
    const student = students[index];

    totalScores += student.score

    if (student.score >= 90) {
        NumberofAstudents++
    } else if (student.score >= 80) {
        NumberofBstudents++
    } else if (student.score >= 70) {
        NumberofCstudents++
    } else {
        NumberofDstudents++
    }
    if (student.score > HighestScore) {
        HighestScore = student.score
    }
    if (student.score < Lowestscore) {
        Lowestscore = student.score
    }

}

console.log(`=== Task 09 ===`)
console.log(`Number of A students : ${NumberofAstudents}`)
console.log(`Number of B students : ${NumberofBstudents}`)
console.log(`Number of C students : ${NumberofCstudents}`)
console.log(`Number of D students : ${NumberofDstudents}`)
console.log(`Highest Score : ${HighestScore}`)
console.log(`Lowest score : ${Lowestscore}`)
console.log(`Average Score : ${totalScores / students.length}`)