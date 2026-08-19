/**
 * A hospital stores patient information in the following array.
 * The hospital director requests a daily report containing:
 * - Total patients
 * - Total admitted patients
 * - Total discharged patients
 * - Number of patients in each department
 * - Highest hospital bill
 * - Lowest hospital bill
 * - Average hospital bill
 * - Total hospital revenue
 * - Names of admitted patients
 * 
 * Student Tasks
 * Design a program using multiple reusable functions.
 * 
 * Requirements
 * - Create at least 8 non-void functions.
 * - Create 1 void function to print the report.
 * - Each function should perform only one responsibility.
 * - printHospitalReport() must only display results.
 * - No duplicated calculations.
 */

import { futimes } from "node:fs"

type Patient = {
    id: string
    name: string
    age: number
    department: string
    admitted: boolean
    bill: number

}
const patients = [
    {
        id: "PT001",
        name: "Alya",
        age: 17,
        department: "Pediatrics",
        admitted: true,
        bill: 850000
    },
    {
        id: "PT002",
        name: "Budi",
        age: 45,
        department: "Cardiology",
        admitted: false,
        bill: 1200000
    },
    {
        id: "PT003",
        name: "Citra",
        age: 68,
        department: "Cardiology",
        admitted: true,
        bill: 2500000
    },
    {
        id: "PT004",
        name: "Dimas",
        age: 33,
        department: "Orthopedics",
        admitted: true,
        bill: 640000
    },
    {
        id: "PT005",
        name: "Eka",
        age: 14,
        department: "Pediatrics",
        admitted: false,
        bill: 350000
    }
];

function totalPatients(patients: Patient[]): number {
    return patients.length
}

function getTotalAdmitted(patients: Patient[]): number {
    let count: number = 0
    for (let index = 0; index < patients.length; index++) {
        if (patients[index].admitted) {
            count++
        }
    }
    return count
}

function getTotalDischarged(patients: Patient[]): number {
    let count: number = 0
    for (let index = 0; index < patients.length; index++) {
        if (!patients[index].admitted) {
            count++
        }
    }
    return count
}
function countPatiensbyDepartement(patients: Patient[], deptName: string): number {
    let count: number = 0
    for (let index = 0; index < patients.length; index++) {
        if (patients[index].department === deptName) {
            count++
        }
    }
    return count
}
function getTotalRevenue(patients: Patient[]): number {
    let TotalRevenue: number = 0
    for (let index = 0; index < patients.length; index++) {
        TotalRevenue += patients[index].bill
    }
    return TotalRevenue
}

function getaverage(patients: Patient[]): number {
    return getTotalRevenue(patients) / patients.length
}

function countHighestBill(patients: Patient[]): number {
    let Highest: number = 0
    for (let index = 0; index < patients.length; index++) {
        if (patients[index].bill > Highest) {
            Highest = patients[index].bill
        }
    }
    return Highest
}

function countLowestBill(patients: Patient[]): number {
    let Lowest: number = patients[0].bill
    for (let index = 0; index < patients.length; index++) {
        if (patients[index].bill < Lowest) {
            Lowest = patients[index].bill
        }
    }
    return Lowest
}

function getNamesOFadmitted(patients: Patient[]): string[] {
    let names: string[] = []
    for (let index = 0; index < patients.length; index++) {
        if (patients[index].admitted) {
            names.push(patients[index].name)
        }

    }
    return names
}

function printHospitalReport(patients: Patient[]): void {
    console.log("=== Task 09 ===");
    console.log(`Total Patients           : ${totalPatients(patients)}`)
    console.log(`Total Admitted Patients  : ${getTotalAdmitted(patients)}`)
    console.log(`Total Discharged Patients: ${getTotalDischarged(patients)}`)
    console.log("-----------------------------------")
    console.log(`Pediatrics Patients      : ${countPatiensbyDepartement(patients, "Pediatrics")}`)
    console.log(`Cardiology Patients      : ${countPatiensbyDepartement(patients, "Cardiology")}`)
    console.log(`Orthopedics Patients     : ${countPatiensbyDepartement(patients, "Orthopedics")}`)
    console.log("-----------------------------------")
    console.log(`Highest Hospital Bill    : Rp ${countHighestBill(patients)}`)
    console.log(`Lowest Hospital Bill     : Rp ${countLowestBill(patients)}`)
    console.log(`Average Hospital Bill    : Rp ${getaverage(patients)}`)
    console.log(`Total Revenue            : Rp ${getTotalRevenue(patients)}`)
    console.log("-----------------------------------");
    console.log(`Admitted Patient Names   : ${getNamesOFadmitted(patients)}`);
}

printHospitalReport(patients)