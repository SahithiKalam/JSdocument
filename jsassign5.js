var arr=[1,2,3,4,5,6]
for(x in arr){
    console.log(`2x${arr[x]}=${arr[x]*2}`)
}

var obj={"name":"23r","strength":"55","session":"js"}
for(j in obj){
    console.log(`${j} is ${obj[j]}`)
}

var car={brand: 'Toyota', model: 'Corolla', year: 2020}
for(i in car){
console.log(`${i}: ${(car[i].toUpperCase())}`)
    console.log(i);
}

var numbers=[1,2,3,4,5]
for(i in numbers){
    console.log(`${numbers[i]}-HI`)
}

var fruits=['Apple','Banana','Cherry','Date']
for(x in fruits){
    console.log(`${x}-${fruits[x].toUpperCase()}`)
}

var obj={name:'John',age:30,address:{city:'Los Angeles',state:'CA'}};
obj.address.city='San Franscisco';
console.log(obj);

var car={brand: 'Toyota',model: 'Camry',year: 2020};
car.model='Corolla';
car.year=2022;
console.log(car);

var recipe={name: 'Pasta',servings: 2,ingredients: ['noodles','sauce']};
recipe.ingredients.push('cheese');
console.log(recipe);


var car={brand:"Toyota",model:"Corolla",year:"2020"};
for(x in car){
    console.log(`${x}:${car[x].toUpperCase()}`);
}