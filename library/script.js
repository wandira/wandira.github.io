//INIT
let myLibrary = [];
function Book(title,year,haveRead){
    this.title = title;
    this.year = year;
    this.haveRead = haveRead;
}
Book.prototype.toggleRead = function (){
    this.haveRead = !this.haveRead
}

if(localStorage.getItem('myLibrary')){
    getLibraryFromLocalStorage()
} else {
    //push dummy books
    const hobbit = new Book("hobbit","1912",true);
    myLibrary.push(hobbit);
    const gatsby = new Book("gatsby","1950",false);
    myLibrary.push(gatsby);
}

displayMyLibrary()

const addBtn = document.querySelector('.addBook')
addBtn.addEventListener('click', addBookToLibrary)


//FUNCTIONS
function getLibraryFromLocalStorage(){
    const localLibrary = JSON.parse(localStorage.getItem('myLibrary'))
    localLibrary.forEach((book)=>{
        const { title,year,haveRead } = book
        myLibrary.push(new Book(title,year,haveRead)) //for prototypal inheritance (toggleRead function)
    })
}

function addBookToLibrary(){
    const title = document.querySelector('.newTitle').value
    const year = document.querySelector('.newYear').value
    const haveRead = document.querySelector('.newHaveRead').checked
    //if inputs valid, save to myLibrary and localStorage then display library and reset inputs
    if(title && year){
        const newBook = new Book (title,year,haveRead)
        myLibrary.push(newBook)
        localStorage.setItem('myLibrary',JSON.stringify(myLibrary))
        resetDisplay()
        displayMyLibrary()
        resetInputs()
    }
}

function resetDisplay(){
    const bookList = document.querySelector('.booksContainer')
    while (bookList.firstChild) {
        bookList.removeChild(bookList.lastChild);
      }
}

function displayMyLibrary(){
    const bookList = document.querySelector('.booksContainer')
    if(myLibrary.length==0){
        bookList.textContent = "Currently the library is empty. Please add some books. The books will be saved to your local storage. Enjoy!"
    }
    else{
        bookList.append(getFieldsCard())
        myLibrary.forEach((book,index)=>{
            bookList.appendChild(getBookCard(book,index))
        })
    }
}

function resetInputs(){
    document.querySelector('.newTitle').value = ''
    document.querySelector('.newYear').value = ''
    document.querySelector('.newHaveRead').checked = false
}

function getFieldsCard(){
    const fields = document.createElement('div')

    const title = document.createElement('div')
    title.textContent = 'Title'
    const year = document.createElement('div')
    year.textContent =   'Year'
    const haveRead = document.createElement('div')
    haveRead.textContent = 'Have read'

    fields.append(title)
    fields.append(year)
    fields.append(haveRead)
    fields.setAttribute('class','div-card')
    fields.setAttribute('style','font-weight: 600; border-top: 1px solid rgba(0, 0, 0, 0.316)')
    return fields
}

function getBookCard(book,index){
    const card = document.createElement('div')
    card.setAttribute('class','div-card')

    const title = document.createElement('div')
    title.textContent = book.title

    const year = document.createElement('div')
    year.textContent = book.year

    const haveRead = document.createElement('input')
    haveRead.setAttribute('type','checkbox')
    if(book.haveRead){
        haveRead.setAttribute('checked',book.haveRead)
    }
    haveRead.setAttribute('data-index',index)

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Delete'
    deleteBtn.setAttribute('data-index',index)

    title.setAttribute('class','bookTitles')
    year.setAttribute('class', 'bookYears')
    haveRead.setAttribute('class','bookHaveReads')
    deleteBtn.setAttribute('class','deleteButtons')

    card.append(title)
    card.append(year)
    card.append(haveRead)
    card.append(deleteBtn)
    card.addEventListener('click', (e)=>{
        if(e.target.className =='deleteButtons'){
            myLibrary.splice(e.target.dataset.index,1)
            localStorage.setItem('myLibrary',JSON.stringify(myLibrary))
            resetDisplay()
            displayMyLibrary()
        }else if(e.target.className == 'bookHaveReads'){
            myLibrary[e.target.dataset.index].toggleRead()
            localStorage.setItem('myLibrary',JSON.stringify(myLibrary))
        }
    })
    return card
}