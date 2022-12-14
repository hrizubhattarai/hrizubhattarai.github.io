// Creating "close" button

var list = document.getElementsByTagName("list");

var i;

for (i = 0; i < list.length; i++) {

  var s = document.createElement("SPAN");

  var txt = document.createTextNode("\u00D7");

  s.className = "close";

  s.appendChild(txt);

  list[i].appendChild(s);

}



// Click on close button to hide list element

var c = document.getElementsByClassName("close");

var i;

for (i = 0; i < c.length; i++) {

  c[i].onclick = function() {

    var d = this.parentElement;

    d.style.display = "none";

  }

}



// Creating new list item when clicking on "Add" button

function newElement() {

  var a = document.createElement("li");

  var Value = document.getElementById("myInput").value;

  var t = document.createTextNode(Value);

  a.appendChild(t);

  if (Value === '') {

    alert("The task cannot be empty");

  } else {

    document.getElementById("myUL").appendChild(a);

  }

  document.getElementById("myInput").value = "";

  var s = document.createElement("SPAN");

  var txt = document.createTextNode("\u00D7");

  s.className = "close";

  s.appendChild(txt);

  a.appendChild(s);



  for (i = 0; i < c.length; i++) {

    c[i].onclick = function() {

      var d = this.parentElement;

      d.style.display = "none";

    }

  }

}


