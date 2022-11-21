function book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

book.prototype.print = function () {
  
    console.log(this.title + ", " + this.author + ", " + this.pages + ", " + this.read +".")
}

const baltaDrobule = new book("Balta drobule", "Antanas Skema", 123, "Not read")

const altoriuSeselis = new book("Altoriu Sesely", "Mykolaitis Putinas", 1025, "Read")

let myLibrary = [];

function addBookToLibrary (n) {
    myLibrary.push(n)
}

addBookToLibrary(baltaDrobule)
addBookToLibrary(altoriuSeselis)

console.log(myLibrary)
