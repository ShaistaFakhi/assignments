// First Store all the transactions in any data structure of Your Choice from collections, and by using Loops and conditional statements
// 1. Print total number of credit and debit transactions completed
// 2. Print the total amount credited and debited in account
// 3. Print total amount remaining at the end in Bank Account

let transactions: number[] = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];
let totalCreditTrn:number = 0;
let totalDebitTrn:number = 0;
let debitamt : number = 0;
let creditamt : number = 0;
let balance: number = 0;
let suspiciousCreditTrn:number = 0;
let suspiciousDebitTrn:number = 0;

for(let i :number =0; i<transactions.length; i++){
    if(transactions[i]!>0){
        totalCreditTrn ++;
        creditamt += transactions[i]!
        if(transactions[i]!>10000){
            console.log("Suspicious credit Transaction with Amount");
            suspiciousCreditTrn++;
        }
    }else{
        totalDebitTrn ++;
        debitamt += transactions[i]!;
        if(transactions[i]!<-10000){
            console.log("Suspicious debit Transaction with Amount");
            suspiciousDebitTrn++;
        }
    }
   
}
    console.log(transactions);
    balance = creditamt + debitamt;
    console.log("Total credit amount" , creditamt);
    console.log("Total debit amount" , debitamt);
    console.log("Total balance pending" , balance);
    console.log("Total suspicious credit transactions:" , suspiciousCreditTrn);
     console.log("Total suspicious debit transactions:" , suspiciousDebitTrn);
