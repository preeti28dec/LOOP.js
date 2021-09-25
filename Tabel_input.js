var user=require("readline-sync");
var num=(user.questionInt("enter number: "));
var n=(user.questionInt("enter number: "));
while (num<=n){
    var i=1
    while (i<=10){
        console.log(num,"X",i,"=",num*i)
        i+=1
    }
    console.log()
    num+=1
}

// var user=require("readline-sync");
// var num=(user.question("enter number: "));
// var n=(user.question("enter number: "));
// for (var i=0;num <= n; num++) {
//     for (var j=1;j<=10;j++){ 
//         console.log(num + " *" + j + "=" + num*j)
//     }
//     console.log()
// }
