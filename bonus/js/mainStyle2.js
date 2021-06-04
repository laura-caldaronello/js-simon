$(document).ready(function() {

// setTimeout(writeSomething,3000);
var t = 0;
var sequence = nRandMinToMax(5,0,4);
$('button#play').click(function() {setInterval(function animation() {
    $('button:not(#play)').click(function() {
        $('#info1').text('Devi aspettare la fine della sequenza...');
        $(this).removeClass('active');
    });

    if (t < sequence.length) {
        if (t > 0) {
            $('.button-container').children().eq(sequence[t - 1]).removeClass('active');
        }
        $('.button-container').children().eq(sequence[t]).addClass('active');
        console.log(t);
        t++;
    }
    else {
        $('.button-container').children().eq(sequence[sequence.length - 1]).removeClass('active');
        clearInterval(animation);
    }

},1000)});

var counter = 0;
$('button:not(#play)').click(function() {
    if (t == 0) { /* solo se non sono nell'animazione */
        var saved = $(this)[0].id[$(this)[0].id.length - 1];
        console.log(saved);
    
        if (saved == sequence[counter] + 1) {
            counter++;
        }
        else {
            alert('Sbagliato. La pagina verrà ricaricata.');
            location.reload();
        }
        console.log(counter);
    
        if (counter == sequence.length) {
            alert('Hai vinto!');
        }
    }
});


});

function writeSomething() {
    $('#info1').text('prima parte');
}

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

