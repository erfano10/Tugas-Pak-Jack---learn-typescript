/**
 * The homeroom teacher receives attendance data for one class at following array.
 * 
 * Using a loop:
 * - Count present students.
 * - Count absent students.
 * - Display the names of absent students.
 * - Calculate the attendance percentage.
 */

type attendance = {
  name: string
  present: boolean
}

const attendances = [
  { name: "Alya", present: true },
  { name: "Budi", present: true },
  { name: "Citra", present: false },
  { name: "Dimas", present: true },
  { name: "Eka", present: false },
  { name: "Fajar", present: true },
  { name: "Gita", present: true },
  { name: "Hana", present: false }
];

let Countpresentstudents: number = 0
let Countabsentstudents: number = 0
let Namesofabsentstudents: string[] = []

for (let index = 0; index < attendances.length; index++) {
  const student = attendances[index];
  if (student.present) {
    Countabsentstudents++
  } else {
    Countpresentstudents++
    Namesofabsentstudents.push(attendances[index].name)
  }

}
console.log(`=== Task 07 ===`)
console.log(`Count Present Students : ${Countpresentstudents}`)
console.log(` Count absent Students : ${Countabsentstudents}`)
console.log(`Names of absent student`)
console.log(Namesofabsentstudents)
console.log(` Attendance Percentage : ${(Countabsentstudents / attendances.length) * 100}%`)