let library = []

addLibrary('s')
addLibrary('s')

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function bookObj(title, author, pages, haveRead) {
  this.title = title
  this.author = author
  this.pages = pages
  this.haveRead = haveRead
}

function insertBook() {
  let bookTitle = document.getElementsByTagName('input')[0].value
  let author = document.getElementsByTagName('input')[1].value
  let numPages = document.getElementsByTagName('input')[2].value
  let haveRead = document.querySelector('input[name="read"]:checked').value

  let new_book = new bookObj(bookTitle, author, numPages, haveRead)
  addLibrary(new_book)

  let table = document.getElementById("myTable")
  let row = table.insertRow(library.length)
  let cell1 = row.insertCell(0)
  let cell2 = row.insertCell(1)
  let cell3 = row.insertCell(2)
  let cell4 = row.insertCell(3)
  let cell5 = row.insertCell(4)

  cell1.innerHTML = bookTitle
  cell2.innerHTML = author
  cell3.innerHTML = numPages
  cell4.innerHTML = haveRead == 'read' ? "<button class='yes-btn' onclick='switchButton(this)'>Yes</button>"
  : "<button class='no-btn' onclick='switchButton(this)'>No</button>"
  cell5.innerHTML = "<button class='remove-btn' onclick='deleteBook(this)'>X</button>"
}

function deleteBook(r) {
  let i = r.parentNode.parentNode.rowIndex;
  library.splice(i - 1)
  document.getElementById("myTable").deleteRow(i);
}

function addLibrary(book) {
  library.push(book)
}

function switchButton(e) {
  if (e.innerHTML == 'Yes') {
    e.innerHTML = 'No'
  }
  else {
    e.innerHTML = 'Yes'
  }
}
