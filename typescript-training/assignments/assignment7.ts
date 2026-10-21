// Assignment: Write a program to perform the following tasks:
// 1. Count the total number of words in the sentence.
// 2. Print the sentence words in reverse order.
// 3. Convert the first character of each word to uppercase and print original sentence

let sentence : string = "Java programming is fun and challenging";
let totalwords: string[] = sentence.split(" ");
let word: string="";
console.log("1. Total number of words in the sentence are: " +totalwords.length);

for(let i = 0; i< totalwords.length ; i++){
    for(let j:number =totalwords.length-1; j>=0; j-- ){
      word += totalwords[j]+ " ";    
    } 
    console.log("2. "+word);   
}

