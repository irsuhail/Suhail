function Person(name, age) {
    this.name = name; 
    this.age = age;   
  }
  
 
  Person.prototype.introduce = function () {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  };
  
 
  function Employee(name, age, jobTitle) {
    
    Person.call(this, name, age);
    this.jobTitle = jobTitle; 
  }
  
  
  Employee.prototype = Object.create(Person.prototype);
  
  
  Employee.prototype.constructor = Employee;
  
  
  Employee.prototype.work = function () {
    console.log(`${this.name} is working as a ${this.jobTitle}.`);
  };
  
  
  const person1 = new Person("Alice", 25);
  
  
  const employee1 = new Employee("Bob", 30, "Software Developer");
  
  
  person1.introduce(); 
  employee1.introduce(); 
  
  
  employee1.work(); 
  
 
  console.log(employee1 instanceof Employee); 
  console.log(employee1 instanceof Person); 
  console.log(person1 instanceof Employee); 
  console.log(person1 instanceof Person); 
  
