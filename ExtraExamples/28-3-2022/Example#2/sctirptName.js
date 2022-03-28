

function storage() {
    
    var name = document.getElementById("fname").value;
    localStorage.setItem("My name", name);

    var age = document.getElementById("age").value;
    localStorage.setItem("age", age);

    var g1 = document.querySelector('input[name=gender]:checked').value;
    localStorage.setItem("gender", g1);

    var brief = document.getElementById("brief").value;
    localStorage.setItem("Description", brief);

    var major = document.getElementById("major").value;
    localStorage.setItem("major", major);
   
    var uni = document.getElementById("uni").value;
    localStorage.setItem("University", uni);

    var ch1 = document.getElementById("ch1").checked;
    console.log(ch1);
    localStorage.setItem('Java', ch1);

    var ch2 = document.getElementById("ch2").checked;
    console.log(ch2);
    localStorage.setItem('C#', ch2);

    var ch3 = document.getElementById("ch3").checked;
    console.log(ch3);
    localStorage.setItem('Python', ch3);

    var ch4 = document.getElementById("ch4").checked;
    console.log(ch4);
    localStorage.setItem('C++', ch4);

    var sib = document.getElementById("sib").value;
    console.log(sib);
    localStorage.setItem('number of siblings', sib);
    var sibBr = document.getElementById("sibBr").value;
    console.log(sibBr);
    localStorage.setItem('Sibling Description', sibBr);



    document.getElementById("d1").innerHTML = "Name: " + localStorage.getItem("My name") + "<br>" + "Age: " + localStorage.getItem("age") + "<br>" + "Gender: " + localStorage.getItem("gender") + "<br>" + "Brief Discription: " + localStorage.getItem("Description") + "<br>" + "Number of Siblings: " + localStorage.getItem("number of siblings") + "<br>" + "Sibling Description: " + localStorage.getItem("Sibling Description");

    document.getElementById("d2").innerHTML = "Major: " + localStorage.getItem("major") + "<br>" + "University: " + localStorage.getItem("University") + "<br>" + "Programing Language: " + localStorage.getItem("Java") + "," + localStorage.getItem("C#") + "," + localStorage.getItem('Python') + "," + localStorage.getItem("C++")
    
    img = localStorage.getItem("image");

if(img){
    document.getElementById("myimg").setAttribute("src" , img)
}


}


document.getElementById("myfile").addEventListener("change", function () {

    const reader = new FileReader();

    reader.addEventListener("load", () => {
        localStorage.setItem("image", reader.result);
    });

    reader.readAsDataURL(this.files[0]);
});





