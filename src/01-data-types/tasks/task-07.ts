/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */
// 
interface course {
    courseID: string
    courseTittle: string
    instructorName: string
    totalLearningHours: number
}

interface student {
    studentID: string
    name: string
    gradeLevel: number
}

interface registration {
    course: course
    student: student
    registrasionDate: string
    payment: boolean
}

const reg1: registration = {

    course: {
        courseID: "CRS-101",
        courseTittle: "TypeScript & Web Development",
        instructorName: "Pak Jack",
        totalLearningHours: 24
    },
    student: {
        studentID: "STD-001",
        name: "Ahmad Dahlan",
        gradeLevel: 4
    },
    registrasionDate: "2026-07-27",
    payment: true
}
const reg2: registration = {
    course: {
        courseID: "CRS-102",
        courseTittle: "UI/UX Design Fundamental",
        instructorName: "Bu Sarah",
        totalLearningHours: 18
    },
    student: {
        studentID: "STD-002",
        name: "Siti Nurhaliza",
        gradeLevel: 5
    },
    registrasionDate: "2026-07-26",
    payment: false
};
const reg3: registration = {
    course: {
        courseID: "CRS-101",
        courseTittle: "TypeScript & Web Development",
        instructorName: "Pak Jack",
        totalLearningHours: 24
    },
    student: {
        studentID: "STD-003",
        name: "Budi Pratama",
        gradeLevel: 6
    },
    registrasionDate: "2026-07-25",
    payment: true
};

const registrasionlist : registration[] = [reg1, reg2, reg3]
console.log("--- Task 07 ---")
registrasionlist.forEach((registration, index) => {
console.log(`\nregistration ke ${index + 1}`)
console.log("course ID :", registration.course.courseID)
console.log("Course Title :", registration.course.courseTittle)
console.log("Instructor name :", registration.course.instructorName)
console.log("total learning :", registration.course.totalLearningHours)
console.log("student ID :", registration.student.studentID)
console.log("Student name :", registration.student.name)
console.log("Student Grade :", registration.student.gradeLevel)
console.log("registration date :",registration.registrasionDate)
console.log("registration payment :", registration.payment ? "paid in full" : "not yet paid off")

})


