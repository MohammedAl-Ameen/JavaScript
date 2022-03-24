function addSong() { 
    let add = document.createElement("li");
    let inputValue = document.getElementById('write').value;
    var t = document.createTextNode(inputValue);
    add.appendChild(t);
    if (inputValue === '') {
        alert("You must write a song name!");
    } else {
        document.getElementById("song").appendChild(add);
    }

    document.getElementById("write").value = "";

}

function bcolor() {
    document.getElementById("write").className = document.getElementById("write")+"write";

}