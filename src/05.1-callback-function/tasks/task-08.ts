/**
 * A company has a simple data-processing engine used to analyze transaction records.
 */


type Transaksi = {
    id: string
    customer: string
    amount: number
    status: string
}
const transactions = [
    {
        id: "TRX001",
        customer: "Alya",
        amount: 850000,
        status: "paid"
    },
    {
        id: "TRX002",
        customer: "Budi",
        amount: 1250000,
        status: "pending"
    },
    {
        id: "TRX003",
        customer: "Citra",
        amount: 450000,
        status: "paid"
    },
    {
        id: "TRX004",
        customer: "Dimas",
        amount: 2100000,
        status: "paid"
    },
    {
        id: "TRX005",
        customer: "Eka",
        amount: 780000,
        status: "cancelled"
    }
];

/** TASKS:
 * - Extract customer's name only in array
 * - Determine Transaction Category with rules below:
 *   - ≥ Rp2,000,000 → HIGH VALUE
 *   - ≥ Rp1,000,000 → MEDIUM VALUE
 *   - < Rp1,000,000 → LOW VALUE
 * - Calculate platform fee:
 *   - Paid transactions → 2%
 *   - Pending transactions → 1%
 *   - Cancelled transactions → 0%
 */

type DETERMINETRANSACTION = "HIGH VALUE" | "MEDIUM VALUE" | "LOW VALUE"
type TransactionCategory = Transaksi & { category: DETERMINETRANSACTION }
type TransactionFee = Transaksi & { fee: number }

function getName(item: Transaksi): string {
    return item.customer
}

function DetermineTransaction(item: Transaksi): TransactionCategory {
    let resultTransaksi: DETERMINETRANSACTION
    if (item.amount >= 2000000) {
        resultTransaksi = "HIGH VALUE"
    } else if (item.amount >= 1000000) {
        resultTransaksi = "MEDIUM VALUE"
    } else {
        resultTransaksi = "LOW VALUE"
    }
    return {
        ...item,
        category: resultTransaksi
    }
}

function transactionFee(item : Transaksi) : TransactionFee {
    let FeeAmount : number
    if (item.status === "paid") {
       FeeAmount = item.amount * 0.02
    }else if (item.status === "pending"){
        FeeAmount = item.amount * 0.01
    }else {
        FeeAmount = 0
    }
    
    return{
        ...item, fee:FeeAmount
    }
}


function proccesTransaction<T>(arr: Transaksi[], callback: (item: Transaksi) => T): T[] {
    const result: T[] = []

    for (let index = 0; index < arr.length; index++) {
        result.push(callback(arr[index]))
    }
    return result
}
const costumerName = proccesTransaction(transactions,getName)
console.log({transactions: costumerName})
const determineTransaction = proccesTransaction(transactions, DetermineTransaction)
console.log({transactions: determineTransaction})
const TransactionwithFees = proccesTransaction(transactions, transactionFee)
console.log({transactions: TransactionwithFees})