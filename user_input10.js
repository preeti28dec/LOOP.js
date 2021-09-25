// Create a loop that takes 10 numbers as input from the user find the total sum.
var n=require("readline-sync");
var sum=0;
for(var i = 1; i <= 10; i++){
    var number=n.questionInt("enter the number: ")
    sum+=number
}
console.log(sum)