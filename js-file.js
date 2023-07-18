let myLibrary = [];

let contain = document.getElementById('container')
document.getElementById('frm').style.visibility = "hidden";
document.getElementById('sub').style.visibility = "hidden";

myLibrary.forEach(function(item) {
    var div = document.createElement('div');
    contain.appendChild(div);
    div.className = "book";
    div.innerHTML += item;
})
//Displays Book Card

let button = document.getElementById('btn')

button.onclick = function() {
    if (document.getElementById('frm').style.visibility ==  "visible") {
        document.getElementById('frm').style.visibility = "hidden";
        document.getElementById('sub').style.visibility = "hidden";
    } else if (document.getElementById('frm').style.visibility ==  "hidden") {
        document.getElementById('frm').style.visibility = "visible";
        document.getElementById('sub').style.visibility = "visible";
    }
}
//Displays Book Submission

let submit = document.getElementById('sub')

submit.onclick = function() {

    if (document.getElementById("fname").value == "" || document.getElementById("lname").value == "" || document.getElementById("nname").value == "") {
        alert("enter text in each box")
    } else {
        var div = document.createElement('div');
        contain.appendChild(div);
        div.className = "book";

        var div1 = document.createElement('div');
        div.appendChild(div1);
        div1.innerHTML += document.getElementById("fname").value;
        div1.className = "card-text";

        var div2 = document.createElement('div');
        div.appendChild(div2);
        div2.innerHTML += document.getElementById("lname").value;
        div2.className = "card-text";

        var div3 = document.createElement('div');
        div.appendChild(div3);
        div3.innerHTML += document.getElementById("nname").value;
        div3.className = "card-text";

        //Delete Button
        var btn1 = document.createElement('button')
        div.appendChild(btn1);
        btn1.innerHTML += "delete";
        btn1.className = "card-delete";
        btn1.onclick = function() {
            div.remove()
        }

        //Read Butotn
        var btn2 = document.createElement('button')
        div.appendChild(btn2);
        btn2.innerHTML += "read";
        btn2.className = "card-read";
        btn2.onclick = function() {
            if (div.className == "book") {
                div.className = "readbook";
            } else {
                div.className = "book";
            }
        }
    }
}
//Submits Book


function Book() {

}

function addBookToLibrary() {

}