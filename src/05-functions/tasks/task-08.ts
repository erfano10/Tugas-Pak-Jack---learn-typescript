/**
 * An LMS stores assignment submission data at following array.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 * 
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 * 
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 * 
 */

type Submission = {
    student: string
    submitted: boolean
    score: number
}

const submissions = [
    {
        student: "Alya",
        submitted: true,
        score: 90
    },
    {
        student: "Budi",
        submitted: false,
        score: 0
    },
    {
        student: "Citra",
        submitted: true,
        score: 84
    },
    {
        student: "Dimas",
        submitted: true,
        score: 72
    },
    {
        student: "Eka",
        submitted: false,
        score: 0
    },
    {
        student: "Fajar",
        submitted: true,
        score: 96
    }
];


function getTotalStudent(submission: Submission[]): number {
    return submission.length
}

function countSubmitted(submission: Submission[]): number {
    let count: number = 0
    for (let index = 0; index < submission.length; index++) {
        if(submission[index].submitted)
        count++
    }
    return count
}

function countMissing(submission: Submission[]): number {
    let count: number = 0
    for (let index = 0; index < submission.length; index++) {
        if (!submission[index].submitted) {
            count++
        }
    }
    return count
}

function countPassed(submission: Submission[]): number {
    let count: number = 0
    for (let index = 0; index < submission.length; index++) {
        if (submission[index].score >= 75)
            count++
    }
    return count
}

function countRevision(submission: Submission[]): number {
    let count: number = 0
    for (let index = 0; index < submission.length; index++) {
        if (submission[index].submitted && submission[index].score < 75) {
            count++
        }
    }
    return count
}

function average(submission: Submission[]): number {
    let totalscore: number = 0
    for (let index = 0; index < submission.length; index++) {
        totalscore += submission[index].score

    }
    return totalscore / submission.length
}

function HighestScore(submission: Submission[]): number {
    let Highest: number = submission[0].score
    for (let index = 0; index < submission.length; index++) {
        if (submission[index].score > Highest) {
            Highest = submission[index].score
        }
    }
    return Highest
}

function LowestScore(submission: Submission[]): number {
    let Lowest: number = submission[0].score
    for (let index = 0; index < submission.length; index++) {
        if (submission[index].score < Lowest) {
            Lowest = submission[index].score
        }
    }
    return Lowest
}

function PrintLMSReport(submission: Submission[]): void {
    console.log(`=== Task 08 ===`)
    console.log(`Total students : ${getTotalStudent(submission)}`)
    console.log(`Submitted assignments : ${countSubmitted(submission)}`)
    console.log(`Missing assignments : ${countMissing(submission)}`)
    console.log(`Passed students : ${countPassed(submission)}`)
    console.log(`Students requiring revision : ${countRevision(submission)}`)
    console.log(`Average score : ${average(submission)}`)
    console.log(`Highest score : ${HighestScore(submission)}`)
    console.log(`Lowest score : ${LowestScore(submission)}`)

}

PrintLMSReport(submissions)
