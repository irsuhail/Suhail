
function Animal() {
    this.type = "Animal";
}

Animal.prototype.sound = function () {
    console.log("Animal sound");
};


function Dog(name) {
    // Call the Animal constructor to inherit its properties
    Animal.call(this);
    this.name = name; // Add an additional property `name` for Dog
}


Dog.prototype = Object.create(Animal.prototype);


Dog.prototype.constructor = Dog;


Dog.prototype.sound = function () {
    console.log("Bark");
};


const myDog = new Dog("Buddy");


myDog.sound(); // Output: "Bark"
