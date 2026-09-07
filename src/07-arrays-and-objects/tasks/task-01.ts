/**
 * A teacher has a list of students and their exam scores below.
 * The teacher wants to analyze the exam results.
 * Tasks:
 * 1. Get an array containing only the student names.
 * expected array: ["Andi", "Budi", "Citra", "Deni", "Eka"]
 * 2. Get students who passed. Passing score is >= 70. 
 * expected array: [
 * { name: "Andi", score: 85 },
 * { name: "Citra", score: 91 },
 * { name: "Deni", score: 74 }
 * ]
 * 
 * 3. Find the student named "Citra".
 * 4. Calculate the average score.
 */

const students = [
  { name: "Andi", score: 85 },
  { name: "Budi", score: 62 },
  { name: "Citra", score: 91 },
  { name: "Deni", score: 74 },
  { name: "Eka", score: 55 },
];

const studentName = students.map((student) => student.name)

console.log(studentName)

const passedStudent = students.filter((student) => student.score >= 70)
console.log(passedStudent)
const findCitra = students.find((student) => student.name === "Citra")

if(findCitra){
   console.log(`${findCitra.name} | ${findCitra.score}`)
}

const totalScore = students.reduce((sum, n) => sum + n.score,0)

const average = totalScore / students.length

console.log(`average score : ${average}`)