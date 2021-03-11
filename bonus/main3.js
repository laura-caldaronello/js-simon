$(document).ready(function() {
    
    // predispongo parte scrittura
    $('body').append('<h1 id=\'text\'></h1>');
    document.getElementById('text').innerHTML = 'ricorda: ';
    // /predispongo parte scrittura
    
    var numbers = nRandMinToMax(5,1,500);
    console.log(numbers);

    var currentNumbersArray = [];
    for (var j = 0; j < numbers.length; j++) {
        var currentNumbers = [];
        for (var i = 0; i <= j; i++) {
            currentNumbers[i] = numbers[i];
        }
        currentNumbersArray[j] = currentNumbers;
    }
    console.log(currentNumbersArray);

    // predispongo un orologio
    $('body').append('<h1 id=\'time1\'></h1>');
    $('body').append('<h1 id=\'time2\'></h1>');
    $('body').append('<h1 id=\'time3\'></h1>');

    document.getElementById('time1').innerHTML = 'tempo reale (secondi): ';
    document.getElementById('time2').innerHTML = 'contatore 10 secondi: ';
    document.getElementById('time3').innerHTML = 'quanti giri da 10 secondi sono stati completati: ';

    var c = 10;
    var t = 0;
    var q = 0;
    var seconds = setInterval(function() {
        document.getElementById('time1').innerHTML = 'tempo reale (secondi): ' + t;
        document.getElementById('time2').innerHTML = 'contatore 10 secondi: ' + c;
        document.getElementById('time3').innerHTML = 'quanti giri da 10 secondi sono stati completati: ' + q;

        c--;
        t++;

        if (c == 0) {
            c = 10;
            q++;
        }

        if (c >= 5) {
            document.getElementById('text').innerHTML = 'ricorda: ' + currentNumbersArray[q];
        }
        else if (c == 4) {
            document.getElementById('text').innerHTML = '';
            $('#text').append('<input type="text"></input>');
        }
        else if (c == 1) {
            if ($('#text input').val() != String(currentNumbersArray[q])) {
                alert('Hai perso!');
                clearInterval(seconds);
            }
        }
                
    },1000);
            

});

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
