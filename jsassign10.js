var score=75;
(score>=60)?(score>=90)?console.log("Excellent"):console.log("Good"):console.log("Needs Improvement")

var day="Saturday";
(day=="Saturday"||day=="Sunday")?console.log("weekend"):console.log("weekday")

var str="HELLO";
var op=[""];
for(i=0;i<=str.length-1;i++){
    op+=str[i];
    console.log(op)
}

var str="madam";
var str1="";
for(i=str.length-1;i>=0;i--){
    str1=str1+str[i];
}
str==str1?console.log("Palindrome"):console.log("Not a Palindrome")