/**
 * An LMS stores student performance data below.
 * The school wants to analyze students using different criteria.
 * A student is considered academically successful if:
 * - Score ≥ 75
 * - Attendance ≥ 90%
 * 
 * 
 * The teacher wants to generate:
 *  - Pass/fail status.
 *  - Academic performance category.
 *  - Attendance status.
 *  - Final recommendation.
 * 
 * Recommendation Rules:
 * ----------------------------------------------------------------|
 * | Condition                      | Recommendation               |
 * | ------------------------------ | ---------------------------- |
 * | Score ≥ 90 AND attendance ≥ 90 | Excellent                    |
 * | Score ≥ 75 AND attendance ≥ 90 | Good                         |
 * | Score ≥ 75 BUT attendance < 90 | Improve Attendance           |
 * | Score < 75                     | Improve Academic Performance |
 * ----------------------------------------------------------------|
 * 
 * Challenge:
 * - processStudents() should know nothing about these rules.
 * - It should only process the students and execute the callback.
 */

type Student = {
    name: string
    score: number
    attendance: number

}

const students = [
    { name: "Alya", score: 92, attendance: 96 },
    { name: "Budi", score: 68, attendance: 88 },
    { name: "Citra", score: 84, attendance: 91 },
    { name: "Dimas", score: 73, attendance: 95 },
    { name: "Eka", score: 95, attendance: 82 },
    { name: "Fajar", score: 79, attendance: 97 }
];

type ACADEMIC_PERFOMANCE = "Excellent" | "Good" | "Improve Academic Performance" | "Improve Attendance"
type Student_Recommendation = Student & { recommendation: ACADEMIC_PERFOMANCE }


function getRecommendation(student: Student): Student_Recommendation {
    let ResultStatus: ACADEMIC_PERFOMANCE
    if (student.score >= 90 && student.attendance >= 90) {
        ResultStatus = "Excellent"
    } else if (student.score >= 75 && student.attendance >= 90) {
        ResultStatus = "Good"
    } else if (student.score >= 75 && student.attendance < 90) {
        ResultStatus = "Improve Attendance"
    } else {
        ResultStatus = "Improve Academic Performance"
    }
    return {
        ...student,
        recommendation: ResultStatus
    }
}






function processStudents<T>(arr: Student[], callback: (student: Student) => T): T[] {
    const result: T[] = []
    for (let index = 0; index < arr.length; index++) {
        result.push(callback(arr[index]))

    }
    return result
}

const StudentRecommendation = processStudents(students, getRecommendation)
console.log({students : StudentRecommendation})