/**
 * A company evaluates employees based on several projects.
 * Tasks:
 * 1. Calculate each employee's average score format {name, averageScore}
 * 2. Find employees whose average score is above 85.
 * 3. Find employees who have at least one project with a score below 80.
 */
const employees = [
    {
        name: "Andi",
        department: "Backend",
        projects: [
            { name: "LMS", score: 90 },
            { name: "Payment", score: 85 },
            { name: "API", score: 95 },
        ],
    },
    {
        name: "Budi",
        department: "Frontend",
        projects: [
            { name: "Dashboard", score: 80 },
            { name: "Landing Page", score: 75 },
        ],
    },
    {
        name: "Citra",
        department: "Backend",
        projects: [
            { name: "LMS", score: 95 },
            { name: "API", score: 88 },
        ],
    },
];

const employeAverage = employees.map((emp) => {
    const totalScore = emp.projects.reduce((sum, p) => sum + p.score, 0)
    const averageScore = totalScore / emp.projects.length
    return {
        name: emp.name,
        averageScore: averageScore
    }
})

const topPerformers = employeAverage.filter((emp) => emp.averageScore > 85)
// fungsi flat map untuk mengambil semua item
const employesWithLowProject = employees.flatMap((emp) =>
  emp.projects
    .filter((p) => p.score < 80)
    .map((p) => ({ employee: emp.name, project: p.name, score: p.score }))
)


console.log(employeAverage)
console.log(topPerformers)
console.log(employesWithLowProject)