/**
 * You are developing a simple exam analytics system.
 * Tasks: 
 * 1. Calculate student score (each correct answer get 20 points)
 * 2. Get students that pass (> 70)
 * 3. Find student who reach highest score 
 * 4. Calculate class's average score
 */

const students = [
    {
        id: 1,
        name: "Andi",
        answers: ["A", "B", "C", "A", "B"],
    },
    {
        id: 2,
        name: "Budi",
        answers: ["A", "C", "C", "A", "D"],
    },
    {
        id: 3,
        name: "Citra",
        answers: ["B", "B", "C", "A", "B"],
    },
];

const correctAnswers = ["A", "B", "C", "A", "B"];

const studentcorrect = students
.map((st) => {
    let points = 0
    for (let index = 0; index < correctAnswers.length; index++) {
        const ans = st.answers[index] === correctAnswers[index]
            if (ans){
                points += 20
            }else{
                points += 0
            }
    }
    return{
        name: st.name,
        poin: points
    }
})

const passedStudent = studentcorrect.filter ((st) => st.poin > 70)
const studentHighestScore = studentcorrect.reduce((max, n) => {
    return n.poin > max.poin ? n : max
}, studentcorrect[0])

const totalScore = studentcorrect.reduce((sum , n) => sum + n.poin,0)
const averageScore = totalScore / students.length

console.log(studentcorrect)
console.log(passedStudent)
console.log(studentHighestScore)
console.log(`Average score : ${averageScore}`)
