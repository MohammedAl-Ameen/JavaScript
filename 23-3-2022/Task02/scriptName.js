flag = false;
function changecolor(){
    if(!flag){
    document.querySelector("div").style.backgroundColor = "red";
    flag = !flag;
    }else{
    document.querySelector("div").style.backgroundColor = "blue";
    flag = !flag;
    }
}