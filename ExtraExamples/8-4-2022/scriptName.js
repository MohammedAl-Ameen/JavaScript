
btn = document.getElementById("btn");


function createElement(){
    newDiv = document.createElement("div");
    newDiv.classList.add("mydiv");
    parentDiv = document.getElementById("outside");
    parentDiv.appendChild(newDiv);
    header = document.createElement("header");
    section = document.createElement("section")
    footer = document.createElement("footer")
    newDiv.appendChild(header);
    newDiv.appendChild(section);
    newDiv.appendChild(footer);
   

    console.log("here")

    return newDiv;
}

newDiv = createElement();

btn.addEventListener("click" , function(){
   

      newDiv.remove();
      newDiv = createElement();
      setTimeout(function() {
        newDiv.classList.add("active");
      }, 100);

})

// btn.addEventListener("click" , function(){

//     document.getElementsByClassName[0]("mydiv").classList.add("active");
// })
