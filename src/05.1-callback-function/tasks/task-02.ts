/**
 * Teacher has list of student score:
 */
const scores = [85, 72, 91, 64, 88];

/**
 * The teacher wants to process the scores in different ways.
 * One report should simply display each score:
 * 
 * Score: 85
 * Score: 72
 * Score: 91
 * ...
 * 
 * Second report should determine whether each student passed.
 * Third report should determine grade of score with rules below.
 * | Score | Grade |
 * | ----- | ----- |
 * | ≥ 90  | A     |
 * | ≥ 80  | B     |
 * | ≥ 70  | C     |
 * | < 70  | D     |

 * Instead of creating different looping functions, create one reusable 
 * function that receives the processing logic as a callback.
 */

function processScores(
    scores: number[],
    callback: (score: number) => void
): void {
    // implementation
    for (let index = 0; index < scores.length; index++) {
        callback(scores[index])
    }
}

function printScore(score: number): void {
    // implementation
    console.log(`Score : ${score}`)

}

function checkpass(score: number): void {
    if (score >= 70) {
        console.log(`Score : ${score} - Passed`)
    } else {
        console.log(`Score : ${score} - failed`)
    }

}

function showGrade(score: number) {
    // implementation
    let grade: string;

    if (score >= 90) {
        grade = "A";
    } else if (score >= 80) {
        grade = "B";
    } else if (score >= 70) {
        grade = "C";
    } else {
        grade = "D";
    }

    console.log(`Score: ${score} -> Grade: ${grade}`);
}


// implementation of callback function
console.log(`=== Task 02 ===`)
console.log("\nReport 1: Print Score")
processScores(scores, printScore)
console.log("\nReport 2: Pass/Fail Status")
processScores(scores, checkpass)
console.log("\nReport 3: Grade Report")
processScores(scores, showGrade)