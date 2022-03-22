let i = 0;
let len = cars.length;
let text = "";
for (; i < len; ) {
  text += cars[i] + "<br>";
  i++;
}


const cars = [1, 2, 3, 4];
let len = cars.length;

for (let i = 0; i < len; i++) {
  cars[i] = cars[i] * 4 ;
}