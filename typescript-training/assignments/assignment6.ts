
//Given a number n, determine whether it is a prime number or not. 
//A prime number is a number greater than 1 that has no positive divisors other than 1 and itself.
let no :number = 21;
let prime : boolean = true;

    if(no<=1){
        console.log("1 is not a prime number");
        prime = false;
    } 

    for(let i: number =2; i<no; i++){
        if(no%i==0){       
         prime = false;  
         break;     
             }
        }
if(prime==true){
console.log("Given number is prime");
}else{
console.log(no +": is not a prime number. ");
}
