class Book {
    constructor(title, pages, isbn){
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;
    }

    toString(){
        return `Title: ${this.title}, Pages: ${this.pages}, ISBN: ${this.isbn}`;
    }
}

class ITBook extends Book {
    constructor(title, pages, isbn, technology){
        super(title, pages, isbn)
        this.technology = technology;
    }

    toString(){
        return `Title: ${this.title}, Pages: ${this.pages}, ISBN: ${this.isbn}, Technology: ${this.technology}`;
    }
}


let book1 = new Book('JS now!', 666, '12345678-9');
console.log(book1.title);
console.log(book1.toString());

let book2 = new ITBook('Joy of Clojure', 999, '3456789-0', 'Clojure');
console.log(book2.title);
console.log(book2.toString());
