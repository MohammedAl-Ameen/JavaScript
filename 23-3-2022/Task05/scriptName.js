tooshort1 = false;
tooshort2 = false;


function check(){
    var str1 = document.getElementById("firstpass").value;
    var str2 = document.getElementById("secondpass").value;
    
   

    if(str1.length < 6){
        document.getElementById("warning1").innerHTML = "too short";
        tooshort1 = true;
        
    }else{
        document.getElementById("warning1").innerHTML = "";
        tooshort1 = false;
    }

    if((str2.length < 6)){
        document.getElementById("warning2").innerHTML = "too short";
        tooshort2 = true;
    }else{ 
        document.getElementById("warning2").innerHTML = "";
        tooshort2 = false;
    }

    if(str2.length == 0){
        document.getElementById("warning2").innerHTML = "";
        tooshort2 = false;
    }

    if(str1.length == 0){
        document.getElementById("warning1").innerHTML = "";
        tooshort1 = false;
    }

    tooshort = tooshort1 && tooshort2;

     if((str1 != str2) && (str1.length != 0) && (str2.length != 0) && !tooshort){
        document.getElementById("warning2").innerHTML = "the two passwords don't match";
    }

    if((str1 == str2) && (!tooshort) && (str1.length != 0) && (str2.length != 0)){
        document.getElementById("btn").style.display ="block";
    }else{
        document.getElementById("btn").style.display ="none";
    }
    

   
    
}