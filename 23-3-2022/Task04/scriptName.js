Italic = false;
Bold = false;
Underline = false;

function checkbox(num){
    if(num == 1){
       if(!Italic){
        document.querySelector("textarea").style.fontStyle = "Italic";
        Italic = true;
       }else{
        document.querySelector("textarea").style.fontStyle = "normal";
        Italic = false;
       }
    }else if(num == 2){
        if(!Bold){
        document.querySelector("textarea").style.fontWeight = "Bold";
        Bold = true;
        }else{
        document.querySelector("textarea").style.fontWeight = "normal";
        Bold = false;
        }
    }else if(num == 3){
        if(!Underline){
        document.querySelector("textarea").style.textDecoration = "Underline"; 
        Underline = true;
        }else{
        document.querySelector("textarea").style.textDecoration = "none"; 
        Underline = false;
        }
       
    }
}


function font(){
   var x = document.getElementById('font').value;

   if(x == "arial"){
    document.querySelector("textarea").style.fontFamily = "arial";
   }else if(x == "calibri"){
    document.querySelector("textarea").style.fontFamily = "calibri";
   }else if(x == "corbel"){
    document.querySelector("textarea").style.fontFamily = "corbel";
   }
}


function font_size(){
    var x = document.getElementById('size').value;
    console.log(3);
   if(x == "10px"){
       console.log(3);
    document.querySelector("textarea").style.fontSize = "10px";
   }else if(x == "12px"){
    document.querySelector("textarea").style.fontSize = "12px";
   }else if(x == "30px"){
    document.querySelector("textarea").style.fontSize = "30px";
   }
}

