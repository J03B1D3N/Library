const form = document.getElementById('form')
const main = document.querySelector('main')


function openForm() {
    form.style.display = "block";
    
}

let myLibrary = [];

function addBookToLibrary (n) {
    myLibrary.push(n)
}

function closeForm() {
    form.style.display = "none";
}

function createBook(title, author, yearOfPub, edition, publisher, placeOfPub) {
    this.title = title
    this.author = author
    this.yearOfPub = yearOfPub
    this.edition = edition
    this.publisher = publisher
    this.placeOfPub = placeOfPub
}

function getInfo () {
    const author = document.getElementById('author').value
    const yearOfPub = document.getElementById('yearOfPublication').value
    const title = document.getElementById('title').value
    const edition = document.getElementById('edition').value
    const publisher = document.getElementById('publisher').value
    const placeOfPub = document.getElementById('placeOfPublication').value

    const book = new createBook(title, author, yearOfPub, edition, publisher, placeOfPub)

    addBookToLibrary(book)
    for (let i = 0; i < myLibrary.length; i ++) {
        console.log(myLibrary[i])
    }
    document.getElementById("arrPrint").innerHTML = JSON.stringify(myLibrary, null, 2);
}

   

    

