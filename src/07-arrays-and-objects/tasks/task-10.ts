/**
 * An online exam has students and questions.
 * Tasks:
 * 1. Calculate each student's score (each correct answer get 25 points)
 * 2. Determine each student's correct answer, exp: [{student:"Andi", correct:0, wrong: 4}]
 * 3. Calculate the average score for each category.
 * 4. Generate final exam analytics
 * expeced result: {
        totalStudents: 3,
        averageScore: 66.67,
        highestScore: 100,
        lowestScore: 50,
        passedStudents: 1,
        failedStudents: 2,
        passRate: 33.33
    }
 */
const questions = [
    {
        id: 1,
        question: "What is TypeScript?",
        correctAnswer: "A",
        category: "TypeScript",
    },
    {
        id: 2,
        question: "Which method transforms an array?",
        correctAnswer: "B",
        category: "Array",
    },
    {
        id: 3,
        question: "Which method filters an array?",
        correctAnswer: "C",
        category: "Array",
    },
    {
        id: 4,
        question: "What does reduce() do?",
        correctAnswer: "D",
        category: "Array",
    },
];

const submissions = [
    {
        student: "Andi",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Budi",
        answers: [
            { questionId: 1, answer: "B" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "A" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Citra",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "C" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "B" },
        ],
    },
];

// TUGAS 1: Hitung Nilai (Score) Setiap Siswa
const studentScores = submissions.map((sub) => {
    let correctCount = 0

    for (let studentAns of sub.answers) {
        const question = questions.find((q) => q.id === studentAns.questionId)

        if (question && studentAns.answer === question.correctAnswer) {
            correctCount++
        }
    }
    return {
        student: sub.student,
        score: correctCount * 25,
    }


})


//TUGAS 2: Hitung Jumlah Benar & Salah
const studentDetail = submissions.map((sub) => {
    let correctCount = 0
    for (let studentAns of sub.answers) {
        const question = questions.find((q) => q.id === studentAns.questionId)

        if (question && studentAns.answer === question.correctAnswer) {
            correctCount++
        }
    }
    const totalQuestion = questions.length
    const wrongCount = totalQuestion - correctCount
    return {
        student: sub.student,
        correct: correctCount,
        wrong: wrongCount
    }
})
// TUGAS 3: Rata-Rata Skor per Kategori Soal


    let totalScoreTypeScript = 0
    let totalScoreArray = 0

    for (const sub of submissions) {
        for (let studentAns of sub.answers) {
            const question = questions.find((q) => q.id === studentAns.questionId);

            if (question && studentAns.answer === question.correctAnswer) {
                
                if (question.category === "TypeScript") {
                    totalScoreTypeScript += 25;
                }
               
                if (question.category === "Array") {
                    totalScoreArray += 25;
                }
            }
        }
    }

const totalStudentsCount = submissions.length

const categoryAverage = {
  TypeScript: Number((totalScoreTypeScript / totalStudentsCount)),
  Array: Number((totalScoreArray / totalStudentsCount))
}
//Tugas 4 Final Exam Analytics
const scoresOnly = studentScores.map((s) => s.score)

const totalStudents = studentScores.length
const sumScores = scoresOnly.reduce((total, score) => total + score, 0)
const averageScore = Number((sumScores / totalStudents))
const sortedScores = scoresOnly.sort((a, b) => b - a)
const highestScore = sortedScores[0] 
const lowestScore = sortedScores[sortedScores.length - 1]

const passedStudents = studentScores.filter((s) => s.score >= 75).length;
const failedStudents = totalStudents - passedStudents;
const passRate = Number(((passedStudents / totalStudents) * 100))

const finalAnalytics = {
  totalStudents: totalStudents,
  averageScore: averageScore,
  highestScore: highestScore,
  lowestScore: lowestScore,
  passedStudents: passedStudents,
  failedStudents: failedStudents,
  passRate: passRate
}

console.log(studentScores)
console.log(studentDetail)
console.log(categoryAverage)

