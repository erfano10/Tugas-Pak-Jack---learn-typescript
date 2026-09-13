/**
 * A school wants to create a simple student profile system. 
 * Every student has a student ID, name, age, major, and current grade level. 
 * The school also wants the system to display a student's profile.
 * For example, a student named Lionel Messi has the following information:
 * | Property   | Value                |
 * | ---------- | -------------------- |
 * | Student ID | ST001                |
 * | Name       | Lionel Messi         |
 * | Age        | 17                   |
 * | Major      | Software Engineering |
 * | Grade      | 11                   |
 * 
 * The program should allow the school to create multiple student objects with different information.
 * Student Tasks
 * Create a class named with "Student"
 * 
 * The class should have:
 * studentId
 * name
 * age
 * major
 * grade
 * 
 * Use a constructor to initialize all properties.
 * Create a method: showProfile()
 * that displays the student's information.
 * Then create at least three student objects.
 */

class Student {
    constructor(
        public studentID: string,
        public name: string,
        public age: number,
        public major: string,
        public grade: number
    ) {
    }
    public showProfile(): void {
        console.log(`studentID : ${this.studentID}`)
        console.log(`student Name : ${this.name}`)
        console.log(`student age : ${this.age}`)
        console.log(`student Major : ${this.major}`)
        console.log(`student Grade : ${this.grade}`)
    }
}


const student1 = new Student("ST002", "Haidar", 18, "Software Engeenering", 12)
const student2 = new Student("ST003", "Hafizh", 15, "TKJ", 10)
const student3 = new Student("ST004", "Rakha", 16, "PG", 11)

console.log(student1)
student1.showProfile

console.log(student2)
student2.showProfile

console.log(student3)
student3.showProfile