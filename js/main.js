$(document).ready(function() {

    numbers = nRandMinToMax(5,1,500);
    alert('ricorda: ' + numbers);
    
    var start;
    function startFun() {
        start = setTimeout(userPrompt,3000,numbers);
    };
    startFun();

});

function userPrompt(array) {
    var howMany = array.length;
    var user = [];
    var ok = [];
    for (var i = 0; i < howMany; i++) {
        user[i] = prompt('inserire numero');
        var is = whereIsInArray(user[i],array);
        if (is != -1) {
            ok.push(user[i]);
        }
    }
    
    console.log('hai indovinato ' + ok.length + ' numeri: ' + ok);
};

function whereIsInArray(value,array) {
    var index = -1;
    var i = 0;
    while (i < array.length) {
        if (array[i] == value) {
            index = i;
            break;
        }
        else {
            i++;
        }
    }
    return index;
};

function nRandMinToMax(n,min,max) {

    var array = [];

    if (max - min + 1 >= n) {
        for (var i = 0; i < n; i++) {
            array[i] = Math.floor(Math.random() * (max - min + 1)) + min;
            while (array.indexOf(array[i]) != -1 && array.indexOf(array[i]) < i) { /* per assicurarsi che siano tutti diversi */
                array[i] = Math.floor(Math.random() * (max - min + 1)) + min;
            }
        }
    }
    else if (max - min + 1 < n) {
        alert('impossibile generare numeri diversi tra loro');
    }

    return array;

};
