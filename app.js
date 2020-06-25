let library = []

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
  let table = document.getElementById("myTable");
  let row = table.insertRow(library.length + 1)
  let cell1 = row.insertCell(0)
  let cell2 = row.insertCell(1)
  let cell3 = row.insertCell(2)
  let cell4 = row.insertCell(3)
  let cell5 = row.insertCell(4)

  let bookTitle = document.getElementsByTagName('input')[0].value
  let author = document.getElementsByTagName('input')[1].value
  let numPages = document.getElementsByTagName('input')[2].value

  cell1.innerHTML = bookTitle
  cell2.innerHTML = author
  cell3.innerHTML = numPages
  cell4.innerHTML = "cell 4"
  cell5.innerHTML = "<button class='remove-btn' onclick='deleteBook(this)'>X</button>"
}

function deleteBook(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("myTable").deleteRow(i);
}

function addLibrary(book) {
  library.append(book)
}
