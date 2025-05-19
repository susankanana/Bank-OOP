OOP-Based bank system
Bank System using OOP concepts
Question:
Create a simple Bank System in TypeScript using Object-Oriented Programming (OOP) concepts. Your solution should demonstrate the use of classes, access modifiers (public, private, protected, readonly), inheritance, encapsulation, and polymorphism.
Requirements:
1.	Account Class
o	Represents a bank account.
o	Has private properties for account number, account holder name, and balance.
o	Provides public methods to deposit and withdraw money.
o	Provides a method to display account details (account number, holder name, balance).
o	Use encapsulation to protect sensitive data.
2.	SavingsAccount and CurrentAccount Classes
o	Both inherit from Account.
o	SavingsAccount should have an additional property for interest rate and a method to add interest.
o	CurrentAccount should have an overdraft limit and allow withdrawals up to that limit.
3.	Access Modifiers
o	Use appropriate access modifiers for properties and methods to demonstrate encapsulation and data protection.
4.	Polymorphism
o	Create a function that accepts an array of accounts (both SavingsAccount and CurrentAccount) and prints their details using a common interface or method.
5.	Readonly
o	Make the account number readonly after creation.
6.	Demonstration
o	Create instances of both account types, perform deposits, withdrawals, and show how interest and overdraft work.
o	Print account details before and after transactions.

