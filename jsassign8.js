var age=20;
var citizenship=true;
if(age>=15 && citizenship==true){
    console.log("Can Vote")
}
else{
    console.log("Cannot Vote")
}

var age=20;
var hasInvitation=true
if(age>=21 || hasInvitation==true){
    console.log("Can enter the club")
}
else{
    console.log("Cannot enter the club")
}

var isMember=false;
var age=7;
if(age>=65 || isMember==true){
    console.log("Is eligible for discount")
}
else{
    console.log("Is not eligible for discount")
}

var gpa=3.6;
var extracurriculars=true;
var recommendation=true;
if((gpa>=3.5) && (extracurriculars==true || recommendation==true)){
    console.log("Is eligible for the scholarship")
}
else{
    console.log("Is not eligible for the scholarship")
}