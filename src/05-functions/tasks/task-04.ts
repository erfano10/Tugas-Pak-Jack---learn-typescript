/**
 * The homeroom teacher stores attendance information as follows.
 * The school wants to display an attendance report.
 * The report should include:
 * - Total Present
 * - Total Absent
 * - Names of absent students
 * The report is displayed directly on the console.
 * Student Tasks:
 * - Create a function named printAttendanceReport.
 * - The function receives the attendance array.
 * - Use looping and conditions.
 * - Display the report inside the function.
 * - The function should not return any value.
 */

type attendance = {
    name: string
    present: boolean
}
const attendances = [
    { name: "Alya", present: true },
    { name: "Budi", present: false },
    { name: "Citra", present: true },
    { name: "Dimas", present: true },
    { name: "Eka", present: false }
];

function printAttendanceReport(
    attendanceList: attendance[]
): void {
    let TotalPresent: number = 0
    let TotalAbsent: number = 0
    let absentNames: string[] = []

    for (let index = 0; index < attendanceList.length; index++) {
        const student = attendanceList[index];
        if (student.present) {
            TotalPresent++
        } else {
            TotalAbsent++
            absentNames.push(student.name)
        }
    }
    console.log(`=== Task 04 ===`)
    console.log(`Total Present : ${TotalPresent}`)
    console.log(`Total Absent : ${TotalAbsent}`)
    console.log(`Names of absent students :${absentNames}`)

}

printAttendanceReport(attendances)