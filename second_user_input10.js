// Write a program to take 10 user input, and print the sum of that 10 inputs.
var n=require("readline-sync");
var sum=0;
for(var i = 50; i > 40; i--){
    var number=n.questionInt("enter the number: ")
    sum+=number
}
console.log(sum)