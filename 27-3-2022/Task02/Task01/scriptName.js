

choice = [];
function myfunction(){
    x = document.getElementById("name1");
    localStorage.setItem(x.id, x.value);
    x = document.getElementById("age");
    localStorage.setItem(x.id, x.value);
    x = document.getElementById("gender");
    localStorage.setItem(x.id, x.value);
    x = document.getElementById("brief");
    localStorage.setItem(x.id, x.value);
    x = document.getElementById("major");
    localStorage.setItem(x.id, x.value);
    x = document.getElementById("birthday");
    localStorage.setItem(x.id, x.value);
    x = document.getElementById("siblings");
    localStorage.setItem(x.id, x.value);
    
    localStorage.setItem("choice", JSON.stringify(choice));
    
    
    
}



document.getElementById("myFile").addEventListener("change" , function(){
    const reader = new FileReader();

    reader.addEventListener("load" , ()=>{
       localStorage.setItem("image" , reader.result);
    });

    reader.readAsDataURL(this.files[0]);
});


 img = localStorage.getItem("image");

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


name1 = localStorage.getItem('name1');
document.getElementById("info").innerHTML +=" " + name1;

age = localStorage.getItem('age');
document.getElementById("info").innerHTML += " "  + age;

gender = localStorage.getItem('gender');
document.getElementById("info").innerHTML += " " +gender;

brief = localStorage.getItem('brief');
document.getElementById("info").innerHTML +=" " + brief;

major = localStorage.getItem('major');
document.getElementById("info").innerHTML += " " +major;

birthday = localStorage.getItem('birthday');
document.getElementById("info").innerHTML += " " +birthday;

siblings = localStorage.getItem('siblings');
document.getElementById("info").innerHTML += " " +siblings;

choice = localStorage.getItem('choice');
document.getElementById("info").innerHTML += " " +choice;

