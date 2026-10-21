 let string1 = "I am an : excellent : Automation 123 tester !! ";
let reverseString ="";
 console.log(string1);
 console.log(string1.length);
 console.log(string1.charAt(3));
 //reverse string
 for(let i:number = string1.length-1; i>=0; i--){
    reverseString = reverseString + string1.charAt(i);
 }
 console.log(reverseString);
 //remove spaces
 console.log(string1.trim());
 //remove all spaces from string
 console.log(string1.replace(/ /g,""));
 //remove all a from the string
 console.log(string1.replace(/a/g,""));
//remove all alphabets from the string
console.log(string1.replace(/[a-zA-Z]/g, ""));
//remove all numbers from the string
console.log(string1.replace(/[0-9]/g, ""));
//upperCase
console.log(string1.toUpperCase());
//lowercase
console.log(string1.toLocaleLowerCase());
//extract pasrt of the string - substring
console.log(string1.substring(10,30));
//extract part os string from dynamic string
let splitted_text = string1.split(" ");
console.log(splitted_text[4]);
console.log(splitted_text[6]);
console.log(splitted_text[8]);
//compare two strings
//== //=== //includes() //startsWith()  //endsWith()
let name:string = "Shaista Fakhi";
console.log(name.includes("sta"));
console.log(name.startsWith("Shai"));
console.log(name.endsWith("khi"));

//convert data from number to string
let phone: number = 1234;
let num:number = 76888;
console.log(phone+num);
let str:string = String(num);
console.log(phone+str);
//convert data from string to number
let actbalance : string = "account balance is 9988770.87897";
actbalance = actbalance.replace(/[^0-9.]/g,"");
console.log(actbalance);
let balace:number = parseInt(actbalance);
console.log(balace);