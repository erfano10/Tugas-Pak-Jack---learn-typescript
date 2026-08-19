/**
 * A university wants to analyze the scores of students enrolled in Backend Development.
 * The dean requests several statistics.
 * Instead of writing one long program, the developer decides to divide the work into reusable functions.
 * Required calculations:
 * Highest score
 * Lowest score
 * Average score
 * Number of students who passed (passing score = 75)
 * 
 * Finally, another function should display the complete report.
 * Student Tasks
 * 1. Create function to find highest value.
 * 2. Create function to find lowest value.
 * 3. Create function to find average value.
 * 4. Create function to return number of passing students.
 */

const scores = [
  82,
  91,
  76,
  88,
  69,
  94,
  73,
  85,
  79,
  97
];

function findHighestScore(scores: number[]): number {
  let Highest: number = scores[0]
  for (let index = 0; index < scores.length; index++) {
    if (scores[index] > Highest) {
      Highest = scores[index]
    }
  }
  return Highest
}

function findLowestScore(scores: number[]): number {
  let Lowest: number = scores[0]
  for (let index = 0; index < scores.length; index++) {
    if (scores[index] < Lowest) {
      Lowest = scores[index]
    }
  }
  return Lowest
}

function calculateAverage(scores: number[]): number {
  let total: number = 0
  for (let index = 0; index < scores.length; index++) {
    total += scores[index]
  }
  return total / scores.length
}

function countPassedStudents(scores: number[]): number {
  let count: number = 0
  for (let index = 0; index < scores.length; index++) {
    if (scores[index] >= 75) {
      count++
    }
  }
  return count
}

function printReport(scores: number[]): void {
  const Highest: number = findHighestScore(scores)
  const Lowest: number = findLowestScore(scores)
  const total: number = calculateAverage(scores)
  const count: number = countPassedStudents(scores)

  console.log(`=== Task 05 ===`)
  console.log(`Highest value : ${Highest}`)
  console.log(`Lowest Value : ${Lowest}`)
  console.log(`Average : ${total.toFixed(2)}`)
  console.log(`Passed Students : ${count} of ${scores.length} students`)
}

printReport(scores)


