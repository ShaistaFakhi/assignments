
let studentNames: string[] = ["Suresh","Mahesh","Naresh"];
let studentMarks: number[]= [75, 80, 82];
let updatedMarks: number[] = [];
 let i:number ;
 let sum: number = 0 ; 
 let avg:number = 0;
// for(let i:number = 0 ; i< studentNames.length ; i++){
//     console.log(studentNames[i])
// }
 
for(i = 0 ; i< studentMarks.length ; i++){
    updatedMarks[i] = (studentMarks[i])!+10;
    sum = sum + updatedMarks[i]! ; 
    console.log(studentNames[i], updatedMarks[i]);
    //addmarks=0;
}
avg = (sum / updatedMarks.length);
console.log("average marks are: ", avg);

