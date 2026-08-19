/**
 * An online store wants to generate a daily sales dashboard. All transaction amounts are stored in an array.
 * Instead of writing one long program, the development team decides to split the calculations into reusable functions.
 * The dashboard should display:
 * - Total sales
 * - Highest transaction
 * - Lowest transaction
 * - Average transaction
 * - Number of transactions above Rp500,000
 * 
 * Student Tasks
 * Create the following functions:
 */

const sales = [
  125000,
  780000,
  250000,
  99000,
  540000,
  670000,
  180000,
  450000,
  310000,
  820000
];

function calculateTotalSales(sales: number[]): number {
  let TotalSales: number = 0
  for (let index = 0; index < sales.length; index++) {
    TotalSales += sales[index]
  }
  return TotalSales
}

function findHighestTransaction(sales: number[]): number {
  let HighestTransaction: number = sales[0]
  for (let index = 0; index < sales.length; index++) {
    if (sales[index] > HighestTransaction) {
      HighestTransaction = sales[index]
    }

  }
  return HighestTransaction
}

function findLowestTransaction(sales: number[]): number {
  let LowestTransaction: number = sales[0]
  for (let index = 0; index < sales.length; index++) {
    if (sales[index] < LowestTransaction) {
      LowestTransaction = sales[index]
    }
  }
  return LowestTransaction
}

function calculateAverageSale(sales: number[]): number {
  const average: number = calculateTotalSales(sales)
  return average / sales.length
}



function countLargeTransactions(sales: number[], minimumAmount: number): number {
  let count: number = 0
  for (let index = 0; index < sales.length; index++) {
    if (sales[index] > minimumAmount) {
      count++
    }

  }
  return count
}

function printSalesDashboard(sales: number[]): void {
  const total = calculateTotalSales(sales);
  const highest = findHighestTransaction(sales);
  const lowest = findLowestTransaction(sales);
  const average = calculateAverageSale(sales);
  const largeCount = countLargeTransactions(sales, 500000);

  console.log(`=== Task 06 ===`)
  console.log(`Total sales : ${total}`)
  console.log(`Highest transaction : ${highest}`)
  console.log(`Lowest transaction : ${lowest}`)
  console.log(`Average transaction : ${average}`)
  console.log(`Number of transactions : ${largeCount}`)
}

printSalesDashboard(sales)

