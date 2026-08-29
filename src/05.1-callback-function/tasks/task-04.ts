/**
 * An LMS stores assignment scores:
 */
/**
 * The LMS needs to perform different analyses:
 * 1. Determine whether each student passed. Passing grade is 70.
 * 2. Convert each score into a grade.
 * | Score | Grade |
 * | ----- | ----- |
 * | ≥ 90  | A     |
 * | ≥ 80  | B     |
 * | ≥ 70  | C     |
 * | < 70  | D     |
 * 
 * 3. Calculate a score after adding 5 bonus points.
 * 4. Determine whether the score is considered excellent. 
 * Score with more than 90 will be "Excellent", otherwise "Reguler".
 * 
 * 
 * Instead of creating four separate loops, create a reusable function that receives a callback responsible for transforming a score.
 */

const scores = [92, 68, 84, 73, 95, 61, 88];
function transformScores<T>(scores: number[], callback: (score: number) => T): T[] {
    const result: T[] = []
    for (let index = 0; index < scores.length; index++) {
        result.push(callback(scores[index]))
    }
    return result
}

function checkPassStatus(score: number): string {
    return score >= 70 ? "Passed" : "Failed"
}

function convertTOGrade(score: number): string {
    if (score >= 90) "return A"
    if (score >= 80) "return B"
    if (score >= 70) "return C"
    return "D"
}

function addBonusPoint(score: number): number {
    return score + 5
}

function checkExcelent(score: number): string {
    return score > 90 ? "Excellent" : "Reguler"
}

const passStatus = transformScores(scores, checkPassStatus)
const grades = transformScores(scores, convertTOGrade)
const bonusScore = transformScores(scores, addBonusPoint)
const excellentCategories = transformScores(scores, checkExcelent)

console.log('=== Task 04 ===')
console.log("Original Score :", scores)
console.log("Pass Status :", passStatus)
console.log("Letter grades :", grades)
console.log("With Bonus (+5) :", bonusScore)
console.log("Excellent Categories :", excellentCategories)
