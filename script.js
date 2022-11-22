const form = document.getElementById('form')
const main = document.querySelector('main')
const books = document.querySelector('#books')


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
    const inputTitle = document.getElementById('title').value
    const inputAuthor = document.getElementById('author').value
    const inputYearOfPub = document.getElementById('yearOfPublication').value
    const inputEdition = document.getElementById('edition').value
    const inputPublisher = document.getElementById('publisher').value
    const inputPlaceOfPub = document.getElementById('placeOfPublication').value

    const newBook = new createBook(inputTitle, inputAuthor, inputYearOfPub, inputEdition, inputPublisher, inputPlaceOfPub)

    addBookToLibrary(newBook)
    
    console.log(myLibrary)

}
    function deleteCard() {
        const index = myLibrary.findIndex(object => {
            return object.title = inputTitle;
        });

        myLibrary.splice(index, 1)
        console.log(myLibrary)
        const removeCard = document.querySelector(`#books`)[index]
        console.log(index)
    }

    function createCard() {

    const book = document.createElement('div')
    book.setAttribute('class', 'book')

    const title = document.createElement('div')
    title.setAttribute('class','title')
    title.textContent = myLibrary[myLibrary.length -1].title

    const author = document.createElement('div')
    author.setAttribute('class','author')
    author.textContent = myLibrary[myLibrary.length -1].author

    const yearOfPub = document.createElement('div')
    yearOfPub.setAttribute('class','yearOfPublication')
    yearOfPub.textContent = myLibrary[myLibrary.length -1].yearOfPub

    const edition = document.createElement('div')
    edition.setAttribute('class','edition')
    title.textContent = myLibrary[myLibrary.length -1].title

    const publisher = document.createElement('div')
    publisher.setAttribute('class','publisher')
    edition.textContent = myLibrary[myLibrary.length -1].edition

    const placeOfPub = document.createElement('div')
    placeOfPub.setAttribute('class','placeOfPublication')
    placeOfPub.textContent = myLibrary[myLibrary.length -1].placeOfPub

    const btns = document.createElement('div')
    btns.setAttribute('class', 'btns')

    const deleteCardBtn = document.createElement('button')
    deleteCardBtn.textContent = 'Delete';
    deleteCardBtn.setAttribute('onclick', 'deleteCard();')
    deleteCardBtn.setAttribute('class', 'btn')

    const citation = document.createElement('button')
    citation.textContent = 'Citation';
    citation.setAttribute('class', 'btn')

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
    
    function addCard() {
        myLibrary.map(x => createCard(x))
        }

    


   

    

