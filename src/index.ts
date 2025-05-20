import { account } from './models/account';
import { savingsAccount } from './models/savingsAccount';
import { currentAccount } from './models/currentAccount';

function printAccountDetails(accounts: account[]): void {
    console.log("\n--- All Account Details ---");
    for (const account of accounts) {
        account.displayAccountDetails();
    }
    console.log("---------------------------\n");
}

console.log("Creating accounts...");
const savingsAcc = new savingsAccount("S12345", "Susan Kanana", 1000000, 0.2);
const currentAcc = new currentAccount("C98765", "Naaman Omare", 5000000, 250000);

printAccountDetails([savingsAcc, currentAcc]); //before transactions

console.log("\n--- Performing Transactions ---");

console.log("\nSavings Account Transactions:");
savingsAcc.deposit(20000);
savingsAcc.withdraw(500000);
savingsAcc.addInterest();
savingsAcc.withdraw(150000000); // Should fail

console.log("\nCurrent Account Transactions:");
currentAcc.deposit(100000);
currentAcc.withdraw(5350000); // Uses overdraft
currentAcc.withdraw(7000000); // Should fail (exceeds limit)

printAccountDetails([savingsAcc, currentAcc]); // after transactions

// savingsAcc.accountNumber = "S112233";
console.log(`\nAccount number for savingsAcc (readonly): ${savingsAcc.getAccountNumber()}`);

console.log("\nBank system demonstration complete.");