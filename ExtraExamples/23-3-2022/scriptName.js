function sort(a) {
    var max = Number.NEGATIVE_INFINITY;
    var sorted = [];
    var index = 0;

    for (i = 0; i < a.length; i++) {
        for (j = 0; j < a.length; j++) {
            if (max < a[j]) {
                max = a[j];
                index = j;
            }
        }
        document.write('am activ <br>' + a);
        sorted[i] = max;
        a[index] = Number.NEGATIVE_INFINITY;
        max = Number.NEGATIVE_INFINITY;
    }

    return sorted;
}
var nums = [-2, -100, 6, 9, 10, 1, 15];


let x = document.getElementsByClassName('name');
document.getElementById('result').innerHTML = x[1].innerHTML;
document.querySelector("p").style.backgroundColor = "red";
