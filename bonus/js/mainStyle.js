$(document).ready(function() {

    var param = 0;
    var maxParam = 5;
    var seq = nRandMinToMax(maxParam,param,maxParam - 1);
    console.log(seq);
    sequence(param,maxParam,seq);
    // cliccati(seq);
    
});

// utilities
function sequence(t,max,sequenza) {setInterval(function() {
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
        $('#info1').html('ciao');



        console.log(t);
        t++;
    }
    else {
        $('#info1').html('');
        clearInterval(sequence);
    }
},1000)};

// da riguardare qui: separare sequenza da verifica?
// function cliccati(sequenza) {setTimeout(function() {
//     var bool = 0;
//     for (var i = 0; i < sequenza.length; i++) {
//         $('.btn-container').children().eq(sequenza[i]).click(function() {
//             bool = i + 1;
//         });    
//     }
//     if (bool == sequenza.length) {
//         alert('hai vinto');
//     }
//     else {
//         alert('hai perso');
//     }
// },10000);};

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
