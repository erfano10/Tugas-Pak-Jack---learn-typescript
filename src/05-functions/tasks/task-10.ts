/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 * 
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 * 
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course 
 * 
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 * 
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */

import { emit } from "node:cluster"

type Enrollment = {
    student: string
    course: string
    completed: boolean
    score: number
    duration: number
}

const enrollments = [
    {
        student: "Alya",
        course: "TypeScript",
        completed: true,
        score: 91,
        duration: 38
    },
    {
        student: "Budi",
        course: "TypeScript",
        completed: false,
        score: 45,
        duration: 12
    },
    {
        student: "Citra",
        course: "Database",
        completed: true,
        score: 87,
        duration: 42
    },
    {
        student: "Dimas",
        course: "Backend",
        completed: true,
        score: 96,
        duration: 40
    },
    {
        student: "Eka",
        course: "Database",
        completed: false,
        score: 60,
        duration: 18
    },
    {
        student: "Fajar",
        course: "Backend",
        completed: true,
        score: 82,
        duration: 35
    },
    {
        student: "Gita",
        course: "TypeScript",
        completed: true,
        score: 88,
        duration: 36
    },
    {
        student: "Hana",
        course: "Backend",
        completed: false,
        score: 70,
        duration: 20
    }
];

function getTotalenrollments(enrollments: Enrollment[]): number {
    return enrollments.length
}

function getCompletedenrollments(enrollments: Enrollment[]): number {
    let count: number = 0
    for (let index = 0; index < enrollments.length; index++) {
        if (enrollments[index].completed) {
            count++
        }
    }
    return count
}

function getIncompleteenrollments(enrollments: Enrollment[]): number {
    let count: number = 0
    for (let index = 0; index < enrollments.length; index++) {
        if (!enrollments[index].completed) {
            count++
        }
    }
    return count
}

function getCompletionpercentage(enrollments: Enrollment[]): number {
    return (getCompletedenrollments(enrollments) / getTotalenrollments(enrollments)) * 100
}

function HighestScore(enrollments: Enrollment[]): number {
    let Highest: number = enrollments[0].score
    for (let index = 0; index < enrollments.length; index++) {
        if (enrollments[index].score > Highest) {
            Highest = enrollments[index].score
        }
    }
    return Highest
}

function LowestScore(enrollments: Enrollment[]): number {
    let Lowest: number = enrollments[0].score
    for (let index = 0; index < enrollments.length; index++) {
        if (enrollments[index].score < Lowest) {
            Lowest = enrollments[index].score
        }
    }
    return Lowest
}

function getTotalScore(enrollments: Enrollment[]): number {
    let total: number = 0
    for (let index = 0; index < enrollments.length; index++) {
        total += enrollments[index].score
    }
    return total
}

function Averagescore(enrollments: Enrollment[]): number {
    return getTotalScore(enrollments) / getTotalenrollments(enrollments)
}

function getPassingScore(enrollments: Enrollment[]): number {
    let count: number = 0
    for (let index = 0; index < enrollments.length; index++) {
        if (enrollments[index].score >= 75) {
            count++
        }
    }
    return count
}

function filterByCourse(enrollments: Enrollment[], courseName: string): Enrollment[] {
    let result: Enrollment[] = []
    for (let index = 0; index < enrollments.length; index++) {
        if (enrollments[index].course === courseName) {
            result.push(enrollments[index]) 
        }
    }
    return result
}
function countStudentBycourse(enrollments: Enrollment[], courseName: string): number {
    const courseData = filterByCourse(enrollments, courseName)
    return getTotalenrollments(courseData)
}

function getaverageBycourse(enrollments: Enrollment[], courseName: string): number {
    const courseData = filterByCourse(enrollments, courseName)
    return Averagescore(courseData)
}

function getTotalLearningHours(enrollments: Enrollment[]): number {
    let total: number = 0
    for (let index = 0; index < enrollments.length; index++) {
        total += enrollments[index].duration
    }
    return total
}

function getAverageLearningDuration(enrollments: Enrollment[]): number {
    return getTotalLearningHours(enrollments) / getTotalenrollments(enrollments)
}
function printCourseStatistic(enrollments: Enrollment[], courses: string[]): void {
    for (let index = 0; index < courses.length; index++) {
        const courseName = courses[index];
        const studentCount = countStudentBycourse(enrollments, courseName);
        const avgScore = getaverageBycourse(enrollments, courseName);
        console.log(`${courseName.padEnd(12)} : ${studentCount} students | Avg Score: ${avgScore.toFixed(2)}`)

    }
}

function PrintAcademyDashboard(enrollments: Enrollment[]): void {
    console.log(`=== Task 10 ===`)
    console.log(`--- Completion Statistic ---`)
    console.log(`Total enrollments : ${getTotalenrollments(enrollments)}`)
    console.log(`Completed enrollments : ${getCompletedenrollments(enrollments)}`)
    console.log(`Incomplete enrollments : ${getIncompleteenrollments(enrollments)}`)
    console.log(`Completion percentage : ${getCompletionpercentage(enrollments)}`)
    console.log(`--- Academic Statistics ---`)
    console.log(`Highest Score : ${HighestScore(enrollments)}`);
    console.log(`Lowest Score  : ${LowestScore(enrollments)}`);
    console.log(`Average Score : ${Averagescore(enrollments)}`);
    console.log(`Passing Students : ${getPassingScore(enrollments)} students`);
    console.log(`--- Learning Statistics ---`)
    console.log(`Total Learning Hours  : ${getTotalLearningHours(enrollments)} hours`);
    console.log(`Avg Learning Duration : ${getAverageLearningDuration(enrollments)} hours\n`);

    const courselist = ["TypeScript", "Database", "Backend"]
    printCourseStatistic(enrollments,courselist)
}

PrintAcademyDashboard(enrollments)