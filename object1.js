// oject арга №1

// --array method--
/* ex1 */
var person = new Object;

person.name = "Evank";
person.eyeColor = "Brown";
person.age = 29;
person.changeAddress = function(){
    return ++person.age;
}

// console.log(person.name);
person.changeAddress();
// console.log(person.age);

/* ex2 */

var car = new Object;

car.brand = "AUDI";
car.model = "A7";
car.year = 2017;
car.color = "black";
car.door = 4;

// console.log(car);
car.change = function(){
    return "white";

};
// хуучин өнгө нь
// console.log(car.color);
// calling the function and returing it for "white"
// шинэ өнгө
// console.log(car.change());


/* ex3 */

var fruit = new Object;

fruit.name = ["Apple", "Orange", "Bannana", "Lemon", "Grape"];
fruit.color = "red";
fruit.number = 2;
fruit.changeNum = function(){
    return "green";
}

console.log(fruit.name);

// console.log(fruit.name[4]);
console.log(fruit.changeNum());

/* ex4 */

var x = new Object;

x.name = "Ocean Beach";
x.name = "Golden Gate Park";
x.name = "Bay Bridge";
x.name = "Alcatras";

x.currentCity = function(){
    return x.name[0];
}

console.log(x.currentCity());








