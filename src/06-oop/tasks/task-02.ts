/**
 * A digital wallet application stores information about a user's account.
 * 
 * A wallet has:
 * - Owner name
 * - Wallet ID
 * - Balance
 * 
 * For example, Jude Bellingham creates a wallet with:
 * | Property        | Value           |
 * | --------------- | --------------- |
 * | Wallet ID       | WAL001          |
 * | Owner           | Harry Maguire   |
 * | Initial Balance | Rp500,000       |
 * 
 * The application allows the user to:
 * - Deposit money
 * - Withdraw money
 * - Check the current balance
 * However, the balance must not be changed directly from outside the class.
 * 
 * Student Tasks:
 * Create: class DigitalWallet
 * Use:
 * - private balance: number;
 * 
 * The class should provide public methods:
 * - deposit(amount)
 * - withdraw(amount)
 * - getBalance()
 * - showWalletInfo()
 * 
 * Business Rules
 * deposit():
 * - Amount must be greater than 0.
 * 
 * withdraw():
 * - Amount must be greater than 0.
 * - Amount cannot exceed the current balance.
 */


class DigitalWallet {
    constructor(private balance: number,
        public walletID: string,
        public owner: string
    ) {
    }
    public deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount
        }
    }
    public withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount
        }
    }

    public getBalance(): number {
        return this.balance
    }
    public showWalletInfo(): void {
        console.log(this.walletID)
        console.log(this.owner)
        console.log(this.balance)
    }
}

const akun = new DigitalWallet(10000000, "WALL002", "Supri")
akun.deposit(400000)
akun.withdraw(210000)
akun.showWalletInfo()


