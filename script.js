const form = document.getElementById('form')
const main = document.querySelector('main')
const books = document.querySelector('#books')

const inputTitle = document.getElementById('title')
const inputAuthor = document.getElementById('author')
const inputYearOfPub = document.getElementById('yearOfPublication')
const inputEdition = document.getElementById('edition')
const inputPublisher = document.getElementById('publisher')
const inputPlaceOfPub = document.getElementById('placeOfPublication')
const exitBtn = document.getElementById('exit')


exitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    closeForm();
})

let myLibrary = [];

function openForm() {
    form.style.display = "block";
    inputTitle.value = ""
    inputAuthor.value = ""
    inputYearOfPub.value = ""
    inputEdition.value = ""
    inputPublisher.value = ""
    inputPlaceOfPub.value = ""
}

function addBookToLibrary (n) {
    myLibrary.push(n)
}

function closeForm() {
    form.style.display = "none";
}


class createBook {
    constructor (inputTitle, inputAuthor, inputYearOfPub, inputEdition, inputPublisher, inputPlaceOfPub) {
        this.title = inputTitle
        this.author = inputAuthor
        this.yearOfPub = inputYearOfPub
        this.edition = inputEdition
        this.publisher = inputPublisher
        this.placeOfPub = inputPlaceOfPub
    }
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
 
    const titleItalics = document.createElement('i')
    const title = document.createElement('div')
    title.setAttribute('class','title')
    title.appendChild(titleItalics)
    titleItalics.textContent = myLibrary[i].title

    const author = document.createElement('div')
    author.setAttribute('class','author')
    author.textContent = myLibrary[i].author

    const yearOfPub = document.createElement('div')
    yearOfPub.setAttribute('class','yearOfPublication')
    yearOfPub.textContent = myLibrary[i].yearOfPub

    const edition = document.createElement('div')
    edition.setAttribute('class','edition')
    edition.textContent = myLibrary[i].edition

    const publisher = document.createElement('div')
    publisher.setAttribute('class','publisher')
    publisher.textContent = myLibrary[i].publisher

    const placeOfPub = document.createElement('div')
    placeOfPub.setAttribute('class','placeOfPublication')
    placeOfPub.textContent = myLibrary[i].placeOfPub

    const btns = document.createElement('div')
    btns.setAttribute('class', 'btns')

    const deleteCardBtn = document.createElement('button')
    deleteCardBtn.setAttribute('onclick', 'deleteCard(event);')
    deleteCardBtn.setAttribute('class', 'btn delete')
    deleteCardBtn.setAttribute('id', 'delete')
    deleteCardBtn.setAttribute('data-attribute', `${[i]}`)

    const citation = document.createElement('button')
    citation.textContent = 'Cite';
    citation.setAttribute('class', 'btn')
    citation.setAttribute('data-number', `${[i]}`)
    citation.setAttribute('onclick', 'citeThis(event);')

    btns.appendChild(deleteCardBtn)
    btns.appendChild(citation)

    book.appendChild(btns)
    book.appendChild(title)
    book.appendChild(author)
    book.appendChild(yearOfPub)
    book.appendChild(edition)
    book.appendChild(publisher)
    book.appendChild(placeOfPub)

    books.appendChild(book)
    
    
    }
}


function deleteCard(event){

const deletebtn = event.currentTarget.parentNode.parentNode
deletebtn.remove()
myLibrary.splice(deletebtn.dataset.number, 1)
createCard()
}

function citeThis(event) {
   const bookDiv =  event.currentTarget.parentNode.parentNode
   let bookTitle = bookDiv.querySelector('.title').innerHTML
   let bookAuthor = bookDiv.querySelector('.author').textContent
   let bookYearOfPub = bookDiv.querySelector('.yearOfPublication').textContent
   let bookEdition = bookDiv.querySelector('.edition').textContent
   let bookPublisher = bookDiv.querySelector('.publisher').textContent
   let bookPlaceOfPub = bookDiv.querySelector('.placeOfPublication').textContent

   let harvardRefference = "";
   if( bookAuthor != "") {
    harvardRefference = bookAuthor
   }  if(bookYearOfPub != "") {
    harvardRefference = harvardRefference + " (" + bookYearOfPub + ") "
   }  if( bookTitle != "") {
    harvardRefference = harvardRefference + bookTitle + ", "
   }  if(bookEdition != "") {
    harvardRefference = harvardRefference + bookEdition + ", "
   }  if(bookPublisher != "") {
    harvardRefference = harvardRefference + bookPublisher + ", "
   } if(bookPlaceOfPub != ""){
    harvardRefference = harvardRefference + bookPlaceOfPub + "."
   }



   try {
    
    const blobInput = new Blob([harvardRefference], {type: 'text/html'});
    const clipboardItemInput = new ClipboardItem({'text/html' : blobInput});
    navigator.clipboard.write([clipboardItemInput]);
  } catch(e) {
    alert('copy failed!')
    console.log(e);
  } alert('copied!')


   
  
   
   

}
    


   

    

