$(document).ready(function() {
    
    // regole del gioco
    $('body').append('<h1 id=\'rules\'></h1>');
    document.getElementById('rules').innerHTML = 'Scrivi ciò che ti viene chiesto di ricordare entro 10 secondi senza premere invio';
    // /regole del gioco

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
    $('body').append('<h2 id=\'input-time\'></h2>');

    $('body').append('<h2 id=\'time1\'></h2>');
    $('body').append('<h2 id=\'time2\'></h2>');

    document.getElementById('input-time').innerHTML = '';
    
    document.getElementById('time1').innerHTML = 'Secondi trascorsi: ';
    document.getElementById('time2').innerHTML = 'Livello: ';
    
    var c = 30;
    var t = 0;
    var q = 0;
    var seconds = setInterval(function() {
        
        document.getElementById('input-time').innerHTML = 'Hai ancora ' + c + ' secondi per scrivere';

        document.getElementById('time1').innerHTML = 'Secondi trascorsi: ' + t;
        document.getElementById('time2').innerHTML = 'Livello: ' + (q + 1);

        if (c == 30) {
            $('#input-time').hide();
            document.getElementById('text').innerHTML = 'ricorda: ' + currentNumbersArray[q];
        }
        else if (c == 20) {
            document.getElementById('text').innerHTML = 'Continua a ricordare...';
        }
        else if (c == 10) {
            document.getElementById('text').innerHTML = '';
            $('#text').append('<input type="text"></input>');
            $('#input-time').show();
            document.getElementById('input-time').style.color = 'red';
        }
        else if (c == 0) {
            
            if (q == 4) {
                alert('Hai vinto!');
                clearInterval(seconds);
            }
            
            if ($('#text input').val() != String(currentNumbersArray[q])) {
                alert('Hai perso!');
                clearInterval(seconds);
            }
            
            c = 30;
            q++;
            
            $('#input-time').hide();
            document.getElementById('text').innerHTML = 'ricorda: ' + currentNumbersArray[q];
            
        }
        
        c--;
        t++;
        
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
