
/* 1. Write a JavaScript program that accept two integers and
 * display the larger. Go to the editor */
/******* Start Your Code *********/
var num1 = window. prompt("Enter your number: ");
var num2 = window. prompt("Enter your number: ");


if(num1 > num2){
    alert(num1);

}else{

    alert(num2);

}

 /******* End Your Code ********* */








/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
num1 = 3;
num2 = -7;
num3 = -8;
product = 0;
product = num1 * num2 * num3;
if(product < 0){
Alert("the sign is -"); 
}else{
 alert("the sign is (“+”)");
}

 /******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/









if(num1 > num2 && num1 > num3){
	if(num2 > num3){
	Alert(num1 + " " + num2 +" " + num3);	
}else{
}
Alert(num1 + " " + num3 +" " + num2);	
}else if(num2 > num1 && num2 > num3){
if(num1 > num3){
	Alert(num2 + " " + num1 +" " + num3);	
}else{
    Alert(num2 + " " + num3 +" " + num1);	

}
	

}else{

if(num1 > num2){
    Alert(num3 + " " + num1 +" " + num2);	
}else{
    Alert(num3 + " " + num2 +" " + num1);	

}

}
 /******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
  if(num1 > num2 || num1 > num3 ||  num1 > num4 ||  num1 > num5){
	alert("number"  +  num1 +  "is the biggest")
}else   if(num2 > num1 || num2 > num3 ||  num2 > num4 ||  num2 > num5){
    alert("number"  +  num2 +  "is the biggest")
}else   if(num3 > num2 || num3 > num1 ||  num3 > num4 ||  num3 > num5){
    alert("number"  +  num3 +  "is the biggest")
} else   if(num4 > num2 || num4 > num3 ||  num4> num1||  num4 > num5){
    alert("number"  +  num4 +  "is the biggest")
}else   if(num5 > num2 || num5 > num3 ||  num5 > num4 ||  num5 > num1){
    alert("number"  +  num5 +  "is the biggest")
}
 /******* End Your Code ********* */

 /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
  if(x > y){
Alert("hello world");
}else{
Alert("Goodbye")
}
 /******* End Your Code ********* */










