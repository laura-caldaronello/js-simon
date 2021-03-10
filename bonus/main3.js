$(document).ready(function() {

    // predispongo parte scrittura
    $('body').append('<h1 id=\'text\'></h1>');
    // /predispongo parte scrittura

    var numbers = nRandMinToMax(5,1,500);
    console.log(numbers);

    // prima cosa: deve comparire il primo testo
    document.getElementById('text').innerHTML = 'ricorda: ' + numbers;

    // dopo un tot il testo deve scomparire
    var s = setTimeout(function() {
        document.getElementById('text').innerHTML = '';
        clearTimeout(s);
    },3000);

    // successivamente deve apparire il prompt (non lo metto con la function precedente perchè altrimenti appare prima il prompt)
    var t = setTimeout(function() {
        var user = [];
        var i = 0;
        do {
            user[i] = parseInt(prompt('inserisci numero'));
            i++;
        } while (i < numbers.length && user[i - 1] == numbers[i - 1]);
        if (i != numbers.length) {
            alert('hai perso!');
        }
        else {
            alert('hai vinto! Livello successivo...')
        }
        clearTimeout(t);
    },4000);

});

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
