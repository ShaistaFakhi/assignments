// let credit_score:number  ;
// let income : number = 45000;
// let emp_status: string = "employeed";
// let DTI : number = 30;

function customerInfo(custName:string, credit_score: number, income : number, isEmployed: string, DTI_ratio:number): void {
    
if(credit_score>750){
    console.log("loan is approved")
}  else if (credit_score>=650){
     if(income >= 50000){
        if(isEmployed=="employed"){
            if(DTI_ratio<40){
                console.log("loan is approved!!");
                } else {
                    console.log("loan is denied!! DTI ratio is very high");
                    } 
                }  else {
                console.log("the loan is denied!!Customer is not employed");
                } 
             }  else {
                console.log("employee income is low!! loan denied");
                }  
}  else if(credit_score<650){
        console.log("loan is denied!! Credit score is low") 
        }
    console.log("Customer name is: "+custName);
    console.log("Credit score is: "+credit_score);
    console.log("Income is: "+income);
    console.log("isEmployed status is: "+isEmployed);
    console.log("debtToIncomeRatio is: "+DTI_ratio);
 }


  customerInfo("Shaista", 655, 51000, "emp", 42);   
    
