// oject арга №3
// object constructor арга энэ нь олон мэдээллийг зэрэг агуулах боломжтой
// object name must start capital latter!!!

/* ex1 */
function Person(name, eyeColor, age){
    this.name = name;
    this.eyeColor = eyeColor;
    this.age = age;
    this.updateAge = function(){
        return ++ this.age;
    };
}
var p1 = new Person("Evank", "brown", 29);
var p2 = new Person("Anara", "brown", 26);
var p3 = new Person("Nara", "blue", 12);
var p4 = new Person("James", "black", 10);
var p5 = new Person("John", "green", 22);
var p6 = new Person("Jania", "green", 18);
var p7 = new Person("Anton", "blue", 5);
var p8 = new Person("Catty", "back", 9);
var p9 = new Person("Azik", "blue", 15);

console.log(p1.name, p1.age, p1.eyeColor);

// function call
console.log(p1.updateAge());







