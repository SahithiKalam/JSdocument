var x=5;
var y=x;
console.log(x); 
console.log(y); 

var obj1={name:"Alice"};
var obj2=obj1;
obj1.name="Bob";
console.log(obj1.name);
console.log(obj2.name);

var a="hello";
var b=42;
var c=true;
var d={key:"value"};
var e=null;
var f=undefined;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);

var numbers=[10,20,30,40,50];
console.log(numbers[2]);
console.log(numbers[0]);
console.log(numbers[numbers.length-1]);

var fruits=["apple","banana","mango"];
fruits[1]="orange";
console.log(fruits);

var matrix=[[1,2,3],[4,5,6],[7,8,9]];
console.log(matrix[1][2]);
console.log(matrix[2][0]);

var person={name:"John",age:25,city:"New York"};
console.log(person.name);
console.log(person.age);

var car={make:"Toyota",model:"Corolla",year:2021};
console.log(car["make"]);
console.log(car["model"]);

var book={title:"The Great Gatsby",author:"F. Scott Fitzgerald"};
book.author="Anonymous";
console.log(book.author);

var student={name:"Alice",grade:"A"};
student.age=20;
console.log(student);