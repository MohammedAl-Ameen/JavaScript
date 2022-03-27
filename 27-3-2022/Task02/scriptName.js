

choice = [];
function myfunction(){
    x = document.getElementById("name1");
    sessionStorage.setItem(x.id, x.value);
    x = document.getElementById("age");
    sessionStorage.setItem(x.id, x.value);
    x = document.getElementById("gender");
    sessionStorage.setItem(x.id, x.value);
    x = document.getElementById("brief");
    sessionStorage.setItem(x.id, x.value);
    x = document.getElementById("major");
    sessionStorage.setItem(x.id, x.value);
    x = document.getElementById("birthday");
    sessionStorage.setItem(x.id, x.value);
    x = document.getElementById("siblings");
    sessionStorage.setItem(x.id, x.value);
    
    sessionStorage.setItem("choice", JSON.stringify(choice));
    
    
    
}



document.getElementById("myFile").addEventListener("change" , function(){
    const reader = new FileReader();

    reader.addEventListener("load" , ()=>{
        sessionStorage.setItem("image" , reader.result);
    });

    reader.readAsDataURL(this.files[0]);
});


 img = sessionStorage.getItem("image");

 if(img){
     document.getElementById("myimg").setAttribute("src" , img)
 }

function checkbox(num){

    if(num == 1){
        choice.push('C#');
    }else if(num == 2){
        choice.push('C++');
    }else if(num == 3){
        choice.push('JS');
    }
}


name1 = sessionStorage.getItem('name1');
document.getElementById("info").innerHTML +=" " + name1;

age = sessionStorage.getItem('age');
document.getElementById("info").innerHTML += " "  + age;

gender = sessionStorage.getItem('gender');
document.getElementById("info").innerHTML += " " +gender;

brief = sessionStorage.getItem('brief');
document.getElementById("info").innerHTML +=" " + brief;

major = sessionStorage.getItem('major');
document.getElementById("info").innerHTML += " " +major;

birthday = sessionStorage.getItem('birthday');
document.getElementById("info").innerHTML += " " +birthday;

siblings = sessionStorage.getItem('siblings');
document.getElementById("info").innerHTML += " " +siblings;

choice = sessionStorage.getItem('choice');
document.getElementById("info").innerHTML += " " +choice;

