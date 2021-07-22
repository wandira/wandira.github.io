let myLibrary = [];

function Book(title,year,haveRead){
    this.title = title;
    this.year = year;
    this.haveRead = haveRead;
}

const hobbit = new Book("hobbit","1912",true);
myLibrary.push(hobbit);
const gatsby = new Book("gatsby","1950",false);
myLibrary.push(gatsby);

getLibraryFromLocalStorage()
displayMyLibrary()

function getLibraryFromLocalStorage(){
    if(localStorage.getItem('myLibrary')){
        myLibrary = JSON.parse(localStorage.getItem('myLibrary'))
    }
}

function displayMyLibrary(){
    document.querySelector('.newTitle').value = ''
    document.querySelector('.newYear').value = ''
    document.querySelector('.newHaveRead').checked = false

    const bookList = document.querySelector('.booksContainer')
    while (bookList.firstChild) {
        bookList.removeChild(bookList.lastChild);
      }
    if(myLibrary.length==0){
        bookList.textContent = "Currently the library is empty. Please add some books. The books will be saved to your local storage. Enjoy!"
    }
    else{
        myLibrary.forEach((book,index)=>{
            bookList.appendChild(bookCard(book,index))
        })
        console.log('library displayed')
    }
}

const addBtn = document.querySelector('.addBook')
addBtn.addEventListener('click', addBookToLibrary)

function addBookToLibrary(){
    const title = document.querySelector('.newTitle').value
    const year = document.querySelector('.newYear').value
    const haveRead = document.querySelector('.newHaveRead').checked
    if(title && year){
        const newBook = new Book (title,year,haveRead)
        myLibrary.push(newBook)
        localStorage.setItem('myLibrary',JSON.stringify(myLibrary))
        displayMyLibrary()
    }
}

function bookCard(book,index){
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
    haveRead.addEventListener('change', function() {
        myLibrary[this.getAttribute('data-index')].haveRead = !myLibrary[this.getAttribute('data-index')].haveRead
        localStorage.setItem('myLibrary',JSON.stringify(myLibrary))
     })

    
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Delete'
    deleteBtn.setAttribute('data-index',index) 
    deleteBtn.addEventListener('click', function() {
        myLibrary.splice(this.dataset.index,1)
        localStorage.setItem('myLibrary',JSON.stringify(myLibrary))
        displayMyLibrary()
      })

    title.setAttribute('class','bookTitles')
    year.setAttribute('class', 'bookYears')
    haveRead.setAttribute('class','bookHaveReads')

    card.append(title)
    card.append(year)
    card.append(haveRead)
    card.append(deleteBtn)
    console.log(card)
    return card
}
