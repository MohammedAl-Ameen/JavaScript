document.getElementById("list").onchange = function(){ChangePicture()};

function ChangePicture(){
  var x =  document.getElementById('list').value;

  if(x == "sudan"){
    document.querySelector("img").src = 'Images/Sudan.svg.png'
  }else if( x == "pakistan"){
    document.querySelector("img").src = 'Images/Pakistan.svg.webp'
  }else{
    document.querySelector("img").src = 'Images/switzerland.svg.webp'
  }

  console.log(x)
}




