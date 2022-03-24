


/*
1
Create an object represents you
have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)
*/


var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];




persons[5] = { name: { first: 'Mohammed-Ameen', last: 'Ababneh' }, age: 25 , favorite_food: ['Magloba' , 'Mansaf' , 'Shawrma' ] , favorite_movie: ['Your name' , 'Harry Potter' , '1' , '2' , '3'] };

  
persons[6] =  { name: { first: 'Lujain', last: 'Ababneh' }, age: 25 , favorite_food: ['Magloba' , 'Mansaf' , 'Shawrma' ] , favorite_movie: ['Your name' , 'Harry Potter' , '1' , '2' , '3'] };
size = Object.keys(persons).length;



/*
2
Using the varabile persons
Create a function called firstName
that accept an object
and return all the first name of the person insides

Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']
*/

function firstName(person){
    let array = [];

    size = Object.keys(person).length;
    console.log(size)
    for(i = 0; i < size; i++){
        array[i] = person[i].name.first}

    return array;
}

console.log(firstName(persons));

/*
3
Using the varabile persons
Create a function called averageAge
that accept an object
and return the average age of those persons

Ex: averageAge(persons) => 41.2
*/
function averageAge(person){
    sum = 0;
    size = Object.keys(person).length;
    for(let i = 0; i < size; i++){
        sum += person[i].age;
    }

    return sum/size;
}

console.log(averageAge(persons));


/*
4
Using the varabile persons
Create a function called olderPerson
that accept an object
and return the full name of the older person

Ex: olderPerson(persons) => "Soso Al-Amora"
*/

function olderPerson(person){
    let max = person[0].age;
    string = person[0].name.first + ' ' + person[0].name.last;
    
    for(i=1 ;i < size ; i++){
        if(max < person[i].age){
            max = person[i].age;
            string = person[i].name.first + ' ' + person[i].name.last;

        }
    }

    return string;
}

console.log(olderPerson(persons));

/*
5
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"
*/

function longestName(person){
    maxOverAll = person[0].name.last.length + person[0].name.first.length;
    temp = 0; //Name Length
    string = person[0].name.last + ' ' + person[0].name.first;
    for(i = 1; i < size ; i++){
        temp = person[i].name.last.length + person[i].name.first.length;
        if(temp > maxOverAll){
            maxOverAll = temp;
            string = person[i].name.first + ' ' + person[i].name.last;
        }
    }

    return string;
}

console.log(longestName(persons));

/*
6
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"
*/

function longestName(person){
    maxOverAll = person[0].name.last.length + person[0].name.first.length;
    temp = 0; //Name Length
    string = person[0].name.last + ' ' + person[0].name.first;
    for(i = 1; i < size ; i++){
        temp = person[i].name.last.length + person[i].name.first.length;
        if(temp > maxOverAll){
            maxOverAll = temp;
            string = person[i].name.first + ' ' + person[i].name.last;
        }
    }

    return string;
}

console.log(longestName(persons));


//////////////////////////////////////////////////////////////////

/*
7
Create a function called repeatWord
that accept a string
and return an object that represents how many times each word repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to words??

Ex: repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
=> {
  my:1,
  name:2,
  is:1,
  alex:1,
  mercer:1,
  class:1,
  b:1,
  baba:1,
  mama:1,
  hello:3
}
*/


function repeatWord(string){
   var words = string.split(' ');
   object = {};
   for(i = 0 ; i < words.length; i++){
       words[i] = words[i].toLowerCase();
    if(!object.hasOwnProperty(words[i])){
        object[`${words[i]}`] = 1;
     
   }else{
    object[`${words[i]}`]++;
   }

   
}

return object;
}

console.log(repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO"));

/*
8
Create a function called repeatChar
that accept a string
and return an object that represents how many times each char repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to char??

Ex: repeatChar("mamababatetacedo")
=> { m:2,  a:5, b:2, t2:, e:2, c:1, d:1, o:1}
*/

function repeatChar(string){
    string = string.toLowerCase();
    object = {};
    for(i = 0 ; i < string.length; i++){
     if(!object.hasOwnProperty(string[i])){ 
         object[`${string[i]}`] = 1;
      
    }else{
     object[`${string[i]}`]++;
    }
 
    
 }
 
 return object;
}

console.log(repeatChar("maMababatetacedo"));


/*
9
Create a function called selectFromObject
that accept an object and an array
and return an object have the key that inside the array

Ex: selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd'])
=>  {a: 1, cat: 3}
*/


function selectFromObject(object , array){
    result = {};
    for(i = 0; i < array.length; i++){
        for (const [key , val] of Object.entries(object)) {
        if(key == array[i]){
            result[`${array[i]}`] = val;
        
    }}}

    return result;
  
}
console.log(selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd']));