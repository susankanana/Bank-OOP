import {account} from "./account";

export class currentAccount extends account {
    private overdraftLimit: number;

    constructor(accountNumber: string, accountHolderName: string, initialBalance: number, overdraftLimit: number) {
        super(accountNumber, accountHolderName, initialBalance); // Call the parent constructor
        this.overdraftLimit = overdraftLimit;
    }

    public withdraw(amount: number): boolean {
        //const currentBalance = this.getBalance();
        // const availableFunds = currentBalance + this.overdraftLimit;
        // if (amount > 0 && amount <= availableFunds) {
        //      return super.withdraw(amount);
        const currentBalance = this.balance;
        const availableFunds = currentBalance + this.overdraftLimit;

        if (amount > 0 && amount <= availableFunds) {
            this.balance -= amount; 
            console.log(`Withdrew ${amount}. New balance: ${this.balance.toFixed(2)}`);
            return true;
        } else if (amount <= 0) {
            console.log("Withdrawal amount must be positive.");
            return false;
        } else {
            console.log(`Withdrawal amount exceeds overdraft limit. Available: ${availableFunds}`);
            return false;
        }
    }

    public displayAccountDetails(): void {
        super.displayAccountDetails();
        console.log(`Overdraft Limit: ${this.overdraftLimit.toFixed(2)}`);
    }
}