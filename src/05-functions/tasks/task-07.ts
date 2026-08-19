/**
 * A university stores enrollment information at following array
 * The university needs a report containing:
 * - Total students
 * - Active students
 * - Inactive students
 * - Software Engineering students
 * - Networking students
 * - Multimedia students
 * 
 * Complete following functions!
 */

type Student = {
  name: string
  major: string
  active: boolean

}

const students = [
  {
    name: "Alya",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Budi",
    major: "Networking",
    active: false
  },
  {
    name: "Citra",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Dimas",
    major: "Multimedia",
    active: true
  },
  {
    name: "Eka",
    major: "Networking",
    active: false
  }
];

function countActiveStudents(students: Student[]): number {
  let count: number = 0
  for (let index = 0; index < students.length; index++) {
    if (students[index].active) {
      count++
    }
  }
  return count
}

function countInactiveStudents(students: Student[]): number {
  let count: number = 0
  for (let index = 0; index < students.length; index++) {
    if (!students[index].active) {
      count++
    }
  }
  return count
}

function countStudentsByMajor(students: Student[], targetMajor: string): number {
  let count: number = 0
  for (let index = 0; index < students.length; index++) {
    if (students[index].major === targetMajor) {
      count++
    }
  }
  return count
}

function printEnrollmentReport(students: Student[]): void {
  const totalStudent: number = students.length
  const activestudent: number = countActiveStudents(students)
  const InactiveStudent: number = countInactiveStudents(students)
  const Secount: number = countStudentsByMajor(students, "Software Engineering");
  const Networkingcount: number = countStudentsByMajor(students, "Networking")
  const Multimediacount: number = countStudentsByMajor(students, "Multimedia")

  console.log(`=== Task 07 ===`)
  console.log(`total student : ${totalStudent}`)
  console.log(`active student : ${activestudent}`)
  console.log(`Inactive student : ${InactiveStudent}`)
  console.log(`Software Engineering : ${Secount}`)
  console.log(`Networking student : ${Networkingcount}`)
  console.log(`Multimedia student : ${Multimediacount}`)

}
printEnrollmentReport(students)