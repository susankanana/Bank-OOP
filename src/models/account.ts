export class account {
    private readonly accountNumber: string;
    private accountHolderName: string;
    //private balance: number;
    protected balance: number;

    constructor(accountNumber: string, accountHolderName: string, initialBalance: number) {
        this.accountNumber = accountNumber; // Readonly set here
        this.accountHolderName = accountHolderName;
        this.balance = initialBalance;
    }

    public deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ${amount}. New balance: ${this.balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    // This method will be overridden in CurrentAccount
    public withdraw(amount: number): boolean {
        if (amount > 0 && this.balance >= amount) {
            this.balance -= amount;
            console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
            return true;
        } else if (amount <= 0) {
            console.log("Withdrawal amount must be positive.");
            return false;
        } else {
            console.log("Insufficient funds.");
            return false;
        }
    }

    public getBalance(): number {
        return this.balance;
    }

    public getAccountHolderName(): string {
        return this.accountHolderName;
    }

    public getAccountNumber(): string {
        return this.accountNumber;
    }

    public displayAccountDetails(): void {
        console.log(`
            Account Number: ${this.accountNumber}
            Account Holder: ${this.accountHolderName}
            Balance: ${this.balance.toFixed(2)}
        `);
    }
}