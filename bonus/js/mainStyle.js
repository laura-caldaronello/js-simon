$(document).ready(function() {

    var t2 = 10;
    var param = 0;
    var maxParam = 5;
    var seq = nRandMinToMax(maxParam,param,maxParam - 1);
    console.log(seq);

    sequence(param,maxParam,seq,t2);
    cliccati(seq);
    
});

// utilities
function sequence(t,max,sequenza,t2) {setInterval(function() {
    if (t < max) { /* creazione sequenza */
        if (t > 0) {
            $('.button-container').children().eq(sequenza[t - 1]).removeClass('active');
        }
        $('.button-container').children().eq(sequenza[t]).addClass('active');
        console.log(t);
        t++;
    }
    else if (max <= t && t < max + 10) { /* controllo sequenza */

        $('.button-container').children().eq(sequenza[t - 1]).removeClass('active');

        $('#info1').html('Hai ancora ' + t2 + ' secondi');
        t2--;

        if (max == t) {
            var c = 0;
            var v = 0;
        }
        cliccati(sequenza,c,v);

        console.log(t);
        t++;
    }
    else {
        $('#info1').html('Hai perso!');
        clearInterval(sequence);
        location.reload();
    }
},1000)};

// functions
function cliccati(sequenza,c,v) {
    $('button').click(function() {
        if (c < sequenza.length) {
            if ($(this).index() == sequenza[c]) {
                v++;
            }
            else {
                $('#info1').html('Hai perso!');
                location.reload();
            }
            c++;
        }
        if (c == sequenza.length && v == sequenza.length) {
            $('#info1').html('Hai vinto!');
            location.reload();
        }
    });
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
