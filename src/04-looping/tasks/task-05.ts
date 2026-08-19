/**
 * A programming competition stores participants' scores in the following array.
 * 
 * 
 * Competition Rules
 * Gold Medal : score ≥ 95
 * Silver Medal : score 85–94
 * Bronze Medal : score 75–84
 * No Medal : below 75
 * 
 * 
 * Student Tasks
 * Using a loop, calculate:
 * - Number of Gold Medal winners
 * - Number of Silver Medal winners
 * - Number of Bronze Medal winners
 * - Number of students without medals
 * - Average competition score
 */


const scores = [
    98, 76, 85, 62, 91,
    73, 88, 59, 100, 81,
    67, 79, 94, 83, 71,
    96, 65, 87, 74, 90
];

let GMWin = 0
let SMWin = 0
let BMWin = 0
let StudentWithoutMedal = 0
let totalscore = 0

for(const score of scores){
    totalscore += score
    if(score >= 95){
        GMWin++
    }else if(score >= 85){
        SMWin++
    }else if(score >= 75){
        BMWin++
    }else{
        StudentWithoutMedal++
    }

}

const average = totalscore / scores.length

console.log(`=== Task 05 ===`)
console.log(`Gold medal winner : ${GMWin}`)
console.log(`Silver medal winner : ${SMWin}`)
console.log(`Bronze Medal Winner : ${BMWin}`)
console.log(`Student Without Medal : ${StudentWithoutMedal}`)
console.log(`Average competition score : ${average}`)