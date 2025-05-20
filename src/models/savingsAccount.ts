import {account} from "./account";

export class  savingsAccount extends account{
  private interestRate: number; // e.g., 0.01 for 1%

    constructor(accountNumber: string, accountHolderName: string, initialBalance: number, interestRate: number) {
        super(accountNumber, accountHolderName, initialBalance); 
        this.interestRate = interestRate;
    }

    public addInterest(): void {
        const currentBalance = this.getBalance();
        const interestAmount = currentBalance * this.interestRate;
        this.deposit(interestAmount); 
        console.log(`Interest added: ${interestAmount}. New balance: ${this.getBalance().toFixed(2)}`); // Use getter here too
    }

    public displayAccountDetails(): void {
        super.displayAccountDetails();
        console.log(`Interest Rate: ${this.interestRate * 100}%`);
    }
}