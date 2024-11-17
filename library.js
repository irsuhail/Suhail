function Book(title, author, isAvailable = true) {
    this.title = title;
    this.author = author;
    this.isAvailable = isAvailable;
  }
  
  
  function Member(name) {
    this.name = name;
    this.borrowedBooks = [];
  }
  
  
  Member.prototype.borrowBook = function (book) {
    if (!book.isAvailable) {
      console.log(`${book.title} is already borrowed.`);
      return;
    }
  
    if (this.borrowedBooks.length >= 3) {
      console.log(`${this.name} cannot borrow more than 3 books.`);
      return;
    }
  
    book.isAvailable = false;
    this.borrowedBooks.push(book.title);
    console.log(`${this.name} borrowed "${book.title}".`);
  };
  
  
  function PremiumMember(name) {
    Member.call(this, name); 
    this.specialCollectionAccess = true;
  }
  
  
  PremiumMember.prototype = Object.create(Member.prototype);
  PremiumMember.prototype.constructor = PremiumMember;
  
  
  PremiumMember.prototype.borrowBook = function (book) {
    if (this.borrowedBooks.length >= 5) {
      console.log(`${this.name} cannot borrow more than 5 books.`);
      return;
    }
  
   
    Member.prototype.borrowBook.call(this, book);
  };
  
  
  const book1 = new Book("1984", "George Orwell");
  const book2 = new Book("To Kill a Mockingbird", "Harper Lee");
  const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
  const book4 = new Book("Pride and Prejudice", "Jane Austen");
  const book5 = new Book("Moby Dick", "Herman Melville");
  
  const member = new Member("Alice");
  const premiumMember = new PremiumMember("Bob");
  
 
  member.borrowBook(book1); 
  member.borrowBook(book2); 
  member.borrowBook(book3); 
  member.borrowBook(book4); 
  
  
  premiumMember.borrowBook(book1); 
  premiumMember.borrowBook(book4); 
  premiumMember.borrowBook(book5); 
  
  
  const boundBorrowBook = member.borrowBook.bind(member);
  boundBorrowBook(book4); 
  