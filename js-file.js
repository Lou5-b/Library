let myLibrary = ["The Giver", "Scythe", "Book 3"];

let contain = document.getElementById('container')

myLibrary.forEach(function(item) {
    var div = document.createElement('div');
    contain.appendChild(div);
    div.className = "book";
    div.innerHTML += item;
})

function Book() {

}

function addBookToLibrary() {

}