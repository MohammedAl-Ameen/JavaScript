function addSong() { 
    let add = document.createElement("li");
    let inputValue = document.getElementById('box').value;
    var text = document.createTextNode(inputValue);
    add.appendChild(text);
    if (inputValue === '') {
        alert("You must write a song name!");
    } else {
        document.getElementById("list").appendChild(add);
    }

    document.getElementById("box").value = "";

}


function getfocus() {
    document.getElementById("box").focus();
  }