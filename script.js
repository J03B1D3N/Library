const form1 = document.getElementById('form1')
const form2 = document.getElementById('form2')
const main = document.querySelector('main')
const books = document.querySelector('#books')

const inputTitle1 = document.getElementById('title1')
const inputAuthor1 = document.getElementById('author1')
const inputYearOfPub1 = document.getElementById('yearOfPublication1')
const inputEdition1 = document.getElementById('edition1')
const inputPublisher1 = document.getElementById('publisher1')
const inputPlaceOfPub1 = document.getElementById('placeOfPublication1')

const inputTitle2 = document.getElementById('title2')
const inputAuthor2 = document.getElementById('author2')
const inputYearOfPub2 = document.getElementById('yearOfPublication2')
const inputEdition2 = document.getElementById('edition2')
const inputPublisher2 = document.getElementById('publisher2')
const inputPlaceOfPub2 = document.getElementById('placeOfPublication2')

const exitBtn1 = document.getElementById('exit1')
const exitBtn2 = document.getElementById('exit2')


exitBtn1.addEventListener('click', (e) => {
    e.preventDefault();
    closeForm1();
})
exitBtn2.addEventListener('click', (e) => {
    e.preventDefault();
    closeForm2();
})

let myLibrary = [];

function openForm() {
    form1.style.display = "block";
    inputTitle1.value = ""
    inputAuthor1.value = ""
    inputYearOfPub1.value = ""
    inputEdition1.value = ""
    inputPublisher1.value = ""
    inputPlaceOfPub1.value = ""
}

function addBookToLibrary (n) {
    myLibrary.push(n)
}

function closeForm1() {
    form1.style.display = "none";
}

function closeForm2() {
    form2.style.display = "none";
}


class createBook1 {
    constructor (inputTitle1, inputAuthor1, inputYearOfPub1, inputEdition1, inputPublisher1, inputPlaceOfPub1) {
        this.title = inputTitle1
        this.author = inputAuthor1
        this.yearOfPub = inputYearOfPub1
        this.edition = inputEdition1
        this.publisher = inputPublisher1
        this.placeOfPub = inputPlaceOfPub1
    }
}


function addInfo () {
    
    const newBook1 = new createBook1(inputTitle1.value, inputAuthor1.value, inputYearOfPub1.value, inputEdition1.value, inputPublisher1.value, inputPlaceOfPub1.value)

    addBookToLibrary(newBook1)
    
    
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
    citation.textContent = 'C';
    citation.setAttribute('class', 'btn cite')
    citation.setAttribute('onclick', 'citeThis(event);')

    const edit = document.createElement('button')
    edit.textContent = 'E';
    edit.setAttribute('class', 'btn edit')
    edit.setAttribute('onclick', 'openEdit(event)')
    
    
    btns.appendChild(deleteCardBtn)
    btns.appendChild(citation)
    btns.appendChild(edit)

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

class createBook2 {
    constructor (inputTitle2, inputAuthor2, inputYearOfPub2, inputEdition2, inputPublisher2, inputPlaceOfPub2) {
        this.title = inputTitle2
        this.author = inputAuthor2
        this.yearOfPub = inputYearOfPub2
        this.edition = inputEdition2
        this.publisher = inputPublisher2
        this.placeOfPub = inputPlaceOfPub2
    }
}

form2.addEventListener('submit', (e) => {
    e.preventDefault();
  })

function openEdit(event) {
    const target = event.currentTarget.parentNode.parentNode
    let bookTitle = target.querySelector('.title').textContent
    let bookAuthor = target.querySelector('.author').textContent
    let bookYearOfPub = target.querySelector('.yearOfPublication').textContent
    let bookEdition = target.querySelector('.edition').textContent
    let bookPublisher = target.querySelector('.publisher').textContent
    let bookPlaceOfPub = target.querySelector('.placeOfPublication').textContent;
 
     form2.style.display = "block";
     inputTitle2.value = bookTitle;
     inputAuthor2.value = bookAuthor;
     inputYearOfPub2.value = bookYearOfPub;
     inputEdition2.value = bookEdition;
     inputPublisher2.value = bookPublisher;
     inputPlaceOfPub2.value = bookPlaceOfPub;
    
     
      form2.addEventListener('submit', () => {
        console.log(target.dataset.number)
        const newBook2 = new createBook2(inputTitle2.value, inputAuthor2.value, inputYearOfPub2.value, inputEdition2.value, inputPublisher2.value, inputPlaceOfPub2.value)
        myLibrary.splice(target.dataset.number, 1, newBook2);
        createCard();
        closeEditForm();
      },{once: true})
 }

 function closeEditForm() {
    form2.style.display = 'none'
 }

    

    


   

    

