/**
 * SMK Telkom Malang is developing a new Student Information System. 
 * Before students can use the system, the administrator must record each student's basic information. 
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 * 
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 * 
 * display the student data using console.log.
 */
// npm run example src/01-data-types/tasks/task-03.ts

interface student {
   studentID: string
   name: string
   age: number
   status: boolean

}

const student1: student = {
   studentID: "RPL-01",
   name: "Achmad",
   age: 17,
   status: true


}

const student2: student = {
   studentID: "TKJ-02",
   name: "Lionel Messi",
   age: 18,
   status: false
}

const student3: student = {
   studentID: "PG-03",
   name: "Bagio Muhammad",
   age: 16,
   status: true

}

const studentlist: student[] = [student1, student2, student3]
console.log(`=== task 03 ===`)
studentlist.forEach((student, index) => {
   console.log(`\nstudent ke ${index + 1}`)
   console.log("student id :", student.studentID)
   console.log("student name :", student.name)
   console.log("student age :", student.age)
   console.log("student status :",student.status ? "active student" : "inacvtive student")
})

