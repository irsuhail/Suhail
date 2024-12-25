// Step 1: Create the Car constructor function
function Car(make, model, year, type, isAvailable = true) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.type = type; // e.g., SUV, Sedan
    this.isAvailable = isAvailable;
}

// Step 2: Create the Customer constructor function
function Customer(name) {
    this.name = name;
    this.rentedCars = [];
}

// Step 3: Add rentCar method to Customer prototype
Customer.prototype.rentCar = function (car) {
    if (car.isAvailable) {
        car.isAvailable = false;
        this.rentedCars.push(car);
        console.log(`${this.name} rented a ${car.make} ${car.model}.`);
    } else {
        console.log(`The ${car.make} ${car.model} is already rented.`);
    }
};

// Step 4: Add returnCar method to Customer prototype
Customer.prototype.returnCar = function (car) {
    const index = this.rentedCars.indexOf(car);
    if (index !== -1) {
        this.rentedCars.splice(index, 1);
        setTimeout(() => {
            car.isAvailable = true;
            console.log(`${this.name} returned the ${car.make} ${car.model}.`);
        }, 2000); // Simulating delay
    } else {
        console.log(`${this.name} does not have this car rented.`);
    }
};

// Step 5: Create PremiumCustomer constructor function
function PremiumCustomer(name, discountRate) {
    Customer.call(this, name); // Inherit properties from Customer
    this.discountRate = discountRate; // Additional property for PremiumCustomer
}

// Ensure PremiumCustomer prototype inherits from Customer prototype
PremiumCustomer.prototype = Object.create(Customer.prototype);
PremiumCustomer.prototype.constructor = PremiumCustomer;

// Step 6: Add calculateRentalPrice function
function calculateRentalPrice(car, days, customer) {
    const basePrice = 50;
    let typeMultiplier = 1;

    if (car.type === "SUV") typeMultiplier = 1.5;
    if (car.type === "Sedan") typeMultiplier = 1.2;

    let price = basePrice * typeMultiplier * days;

    if (customer instanceof PremiumCustomer) {
        price *= 1 - customer.discountRate / 100;
    }

    console.log(`Rental price for ${days} days: $${price.toFixed(2)}`);
    return price;
}

// Step 7: Maintenance function
function Maintenance(car, delay) {
    console.log(`Maintenance started for ${car.make} ${car.model}.`);
    setTimeout(() => {
        car.isAvailable = true;
        console.log(`Maintenance completed for ${car.make} ${car.model}.`);
    }, delay);
}

// Demonstrate functionality
// Create cars
const car1 = new Car("Toyota", "Corolla", 2020, "Sedan");
const car2 = new Car("Honda", "CR-V", 2021, "SUV");
const car3 = new Car("Ford", "Focus", 2019, "Sedan");

// Create customers
const customer1 = new Customer("Alice");
const premiumCustomer = new PremiumCustomer("Bob", 10);

// Rent cars
customer1.rentCar(car1);
premiumCustomer.rentCar(car2);

// Calculate rental prices
calculateRentalPrice(car1, 3, customer1); // Regular customer
calculateRentalPrice(car2, 5, premiumCustomer); // Premium customer with discount

// Return cars
customer1.returnCar(car1);
premiumCustomer.returnCar(car2);

// Maintenance
Maintenance(car3, 3000);
