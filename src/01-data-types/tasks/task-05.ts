/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */
//npm run example src/01-data-types/tasks/task-05.ts


interface employee {
    employeeID: string
    employeeName: string
    date: string
    checkinTime: string
    checkoutTime: string
    totalWorkingHours: number
    IsPresent: boolean

}

const employe1: employee = {
    employeeID: "EMP-001",
    employeeName: "Alfarrizi Faix",
    date: "2026-07-26",
    checkinTime: "08.00",
    checkoutTime: "18.00",
    totalWorkingHours: 10,
    IsPresent: true
}


const employe2: employee = {
    employeeID: "EMP-002",
    employeeName: "Haidar Kurnia",
    date: "2026-07-26",
    checkinTime: "-",
    checkoutTime: "-",
    totalWorkingHours: 0,
    IsPresent: false
}

const employe3: employee = {
    employeeID: "EMP-003",
    employeeName: "Javier Praba",
    date: "2026-07-26",
    checkinTime: "07.00",
    checkoutTime: "18.00",
    totalWorkingHours: 11,
    IsPresent: true
}
const employelist: employee[] = [employe1, employe2, employe3]
console.log("=== Task 05 ===")
employelist.forEach((employee, index) => {
    console.log(`\nemploye ke ${index + 1}`)
    console.log("employee ID  :", employee.employeeID)
    console.log("employee name :", employee.employeeName)
    console.log("date :", employee.date)
    console.log("check-in-time :", employee.checkinTime)
    console.log("check-out-time :", employee.checkoutTime)
    console.log("total working hours :", employee.totalWorkingHours)
    console.log("Employee present :", employee.IsPresent ? "employe is present" : "employee not present")
})

