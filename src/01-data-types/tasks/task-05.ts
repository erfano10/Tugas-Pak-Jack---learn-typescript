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
employeeName:"Alfarrizi Faix",
date:"2026-07-26",
checkinTime:"08:00",
checkoutTime:"18.00",
totalWorkingHours: 10,
IsPresent: true
}


const employe2: employee = {
    employeeID: "EMP-002",
    employeeName: "Haidar Kurnia",
    date:"2026-07-26",
    checkinTime:"-",
    checkoutTime: "-",
    totalWorkingHours: 0,
    IsPresent: false
}

const employe3: employee = {
    employeeID: "EMP-003",
    employeeName:"Javier Praba",
    date:"2026-07-26",
    checkinTime:"07.00",
    checkoutTime:"18.00",
    totalWorkingHours: 11,
    IsPresent:true
}

console.log("employee ID 1 :",employe1.employeeID)
console.log("employee name :", employe1.employeeName)
console.log("date :", employe1.date)
console.log("check-in-time :",employe1.checkinTime)
console.log("check-out-time :",employe1.checkoutTime)
console.log("total working hours :",employe1.totalWorkingHours)
if(employe1.IsPresent){
console.log("Status : is present")
}else{
    console.log("Status : not present")
}
console.log("employee ID 2 :",employe2.employeeID)
console.log("employee name :", employe2.employeeName)
console.log("date :", employe2.date)
console.log("check-in-time :",employe2.checkinTime)
console.log("check-out-time :",employe2.checkoutTime)
console.log("total working hours :",employe2.totalWorkingHours)
if(employe2.IsPresent){
console.log("Status : is present")
}else{
    console.log("Status : not present")
}
console.log("employee ID 3 :",employe3.employeeID)
console.log("employee name :", employe3.employeeName)
console.log("date :", employe3.date)
console.log("check-in-time :",employe3.checkinTime)
console.log("check-out-time :",employe3.checkoutTime)
console.log("total working hours :",employe3.totalWorkingHours)
if(employe3.IsPresent){
console.log("Status : is present")
}else{
    console.log("Status : not present")
}

