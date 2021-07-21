let myLibrary = [];

function Book(title,year,haveRead){
    this.title = title;
    this.year = year;
    this.haveRead = haveRead;
}

function addBookToLibrary(){
    const title = document.querySelector('.newTitle').value
    const year = document.querySelector('.newYear').value
    const haveRead = document.querySelector('.newHaveRead').checked
    const newBook = new Book (title,year,haveRead)
    myLibrary.push(newBook)
    displayMyLibrary()
}

const addBtn = document.querySelector('.addBook')
addBtn.addEventListener('click', addBookToLibrary)

const hobbit = new Book("hobbit","1912",true);
myLibrary.push(hobbit);
const gatsby = new Book("gatsby","1950",false);
myLibrary.push(gatsby);

const list = document.querySelector('.booksContainer')

function displayMyLibrary(){
    console.log('library displayed')
    while (list.firstChild) {
        list.removeChild(list.lastChild);
      }
    myLibrary.forEach((book,index)=>{
        list.appendChild(bookCard(book,index))
    })
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
        //or use this.dataset.index
          myLibrary[this.getAttribute('data-index')].haveRead = !myLibrary[this.getAttribute('data-index')].haveRead
      })

    
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Delete'
    deleteBtn.setAttribute('data-index',index) 
    deleteBtn.addEventListener('click', function() {
        //or use this.dataset.index
        myLibrary.splice(this.dataset.index,1) 
        displayMyLibrary()
      })

    card.append(title)
    card.append(year)
    card.append(haveRead)
    card.append(deleteBtn)
    console.log(card)
    return card
}

displayMyLibrary()