const form = document.getElementById('form')
const main = document.querySelector('main')
const books = document.querySelector('#books')

const inputTitle = document.getElementById('title')
const inputAuthor = document.getElementById('author')
const inputYearOfPub = document.getElementById('yearOfPublication')
const inputEdition = document.getElementById('edition')
const inputPublisher = document.getElementById('publisher')
const inputPlaceOfPub = document.getElementById('placeOfPublication')


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

function createBook(inputTitle, inputAuthor, inputYearOfPub, inputEdition, inputPublisher, inputPlaceOfPub) {
    this.title = inputTitle
    this.author = inputAuthor
    this.yearOfPub = inputYearOfPub
    this.edition = inputEdition
    this.publisher = inputPublisher
    this.placeOfPub = inputPlaceOfPub
}



function addInfo () {
    
    const newBook = new createBook(inputTitle.value, inputAuthor.value, inputYearOfPub.value, inputEdition.value, inputPublisher.value, inputPlaceOfPub.value)

    addBookToLibrary(newBook)
    
    
}
    
function createCard() {

    while (books.firstChild) {
        books.removeChild(books.firstChild);
    }

    for(i = 0; i < myLibrary.length; i++) {
    const book = document.createElement('div')
    book.setAttribute('class', 'book')
    book.setAttribute('data-number', `${[i]}`)
 
    const title = document.createElement('div')
    title.setAttribute('class','title')
    title.textContent = myLibrary[i].title

    const author = document.createElement('div')
    author.setAttribute('class','author')
    author.textContent = myLibrary[i].author

    const yearOfPub = document.createElement('div')
    yearOfPub.setAttribute('class','yearOfPublication')
    yearOfPub.textContent = myLibrary[i].yearOfPub

    const edition = document.createElement('div')
    edition.setAttribute('class','edition')
    title.textContent = myLibrary[i].title

    const publisher = document.createElement('div')
    publisher.setAttribute('class','publisher')
    edition.textContent = myLibrary[i].edition

    const placeOfPub = document.createElement('div')
    placeOfPub.setAttribute('class','placeOfPublication')
    placeOfPub.textContent = myLibrary[i].placeOfPub

    const btns = document.createElement('div')
    btns.setAttribute('class', 'btns')

    const deleteCardBtn = document.createElement('button')
    deleteCardBtn.textContent = 'Delete';
    deleteCardBtn.setAttribute('onclick', 'deleteCard(event);')
    deleteCardBtn.setAttribute('class', 'btn')
    deleteCardBtn.setAttribute('id', 'delete')
    deleteCardBtn.setAttribute('data-attribute', `${[i]}`)

    const citation = document.createElement('button')
    citation.textContent = 'Citation';
    citation.setAttribute('class', 'btn')
    // citation.setAttribute('data-number', `${[i]}`)

    btns.appendChild(deleteCardBtn)
    btns.appendChild(citation)

    book.appendChild(title)
    book.appendChild(author)
    book.appendChild(yearOfPub)
    book.appendChild(edition)
    book.appendChild(publisher)
    book.appendChild(placeOfPub)
    book.appendChild(btns)

    books.appendChild(book)
    
    
    }
}


function deleteCard(event){

const deletebtn = event.currentTarget.parentNode.parentNode
deletebtn.remove()
myLibrary.splice(deletebtn.dataset.number, 1)
createCard()
}


    


   

    

