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
  let row = table.insertRow(2)
  let cell1 = row.insertCell(0)
  let cell2 = row.insertCell(1)
  let cell3 = row.insertCell(2)
  
  cell1.innerHTML = "NEW C2LL1";
  cell2.innerHTML = "NEW CELL2";
}

function addLibrary(book) {
  library.append(book)
}

function render() {

}
