// Step 1: Base constructor function for Product
function Product(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

// Add a method to Product.prototype to display product details
Product.prototype.displayDetails = function () {
    console.log(`Name: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}`);
};

// Step 2: Constructor function for Electronics
function Electronics(name, price, quantity, brand, model) {
    Product.call(this, name, price, quantity); // Inherit properties from Product
    this.brand = brand;
    this.model = model;
}

// Inherit Product's prototype
Electronics.prototype = Object.create(Product.prototype);
Electronics.prototype.constructor = Electronics;

// Add methods specific to Electronics
Electronics.prototype.powerOn = function () {
    console.log(`${this.name} is now powered on.`);
};

Electronics.prototype.powerOff = function () {
    console.log(`${this.name} is now powered off.`);
};

// Step 3: Constructor function for Clothing
function Clothing(name, price, quantity, size, material) {
    Product.call(this, name, price, quantity); // Inherit properties from Product
    this.size = size;
    this.material = material;
}

// Inherit Product's prototype
Clothing.prototype = Object.create(Product.prototype);
Clothing.prototype.constructor = Clothing;

// Add methods specific to Clothing
Clothing.prototype.tryOn = function () {
    console.log(`Trying on ${this.name}, size ${this.size}.`);
};

// Step 4: Constructor function for Books
function Book(name, price, quantity, author, genre) {
    Product.call(this, name, price, quantity); // Inherit properties from Product
    this.author = author;
    this.genre = genre;
}

// Inherit Product's prototype
Book.prototype = Object.create(Product.prototype);
Book.prototype.constructor = Book;

// Add methods specific to Books
Book.prototype.read = function () {
    console.log(`Reading "${this.name}" by ${this.author}.`);
};

// Step 5: Demonstrate functionality

const laptop = new Electronics("Laptop", 1500, 10, "Dell", "XPS 13");
const shirt = new Clothing("T-Shirt", 20, 50, "M", "Cotton");
const novel = new Book("1984", 15, 30, "George Orwell", "Dystopian");

// Display details of each product
laptop.displayDetails();
shirt.displayDetails();
novel.displayDetails();

// Call category-specific methods
laptop.powerOn();
laptop.powerOff();

shirt.tryOn();

novel.read();

// Additional Testing
console.log(`Brand of laptop: ${laptop.brand}`);
console.log(`Material of shirt: ${shirt.material}`);
console.log(`Genre of book: ${novel.genre}`);
