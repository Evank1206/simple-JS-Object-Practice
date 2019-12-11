// oject арга №2

/* ex1 */

let person = {
    name: "Evank",
    eyeColor:"brown",
    age: 29,
 // or Chnage:   
    updateAge: function(){
        return ++person.age;
    },
};
// console.log(person.name);

person.updateAge();
// console.log(person.age);

/* ex2 */

var car = {
    brand: "Toyota",
    name: "Corolla s",
    year: 2013,
    color: "black",
    door: 4,
    change: function(){
        
        return "Infiniti-Q50";      
    }
};
// console.log(car.change());

/* ex3 */

var dog = {
    raining: true,
    noise: "WOOOOOOOOOF",
    makeNoise: function(){
        if(dog.raining == true){
            console.log(dog.noise);
        }    
    }
}
dog.makeNoise();

var cat = {
    raining: false,
    noise: "MEEEEAAAOOO",
    makeNoise: function(){
        if(cat.raining == false){
            console.log(cat.noise);
        }    
    }
}
cat.makeNoise();

function bothTogether(dog, cat){
    return "They are happy together now";

}
console.log(bothTogether(dog.noise, cat.noise));









