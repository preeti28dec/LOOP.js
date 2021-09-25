// Write a program where it will do the following things with 1 to 20 numbers:
// When number is divisible by 3 print “Nav”
// When number is divisible by 7 print “Gurukul”
// The numbers which is divisible by 3 and 7 print “NavGurukul”
for(var i = 1; i <= 20; i++){
    if (i%3==0){
        console.log("nav")
    }
    else if (i%7==0){
        console.log("Gurukul")
    }
    else{
        console.log(i)
    }
}