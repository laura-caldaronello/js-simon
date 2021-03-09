$(document).ready(function() {

    // predispongo parte scrittura
    $('body').append('<h1 id=\'text\'></h1>');
    // /predispongo parte scrittura

    var numbersTot = nRandMinToMax(5,1,500);
    console.log(numbersTot);
    var numbers = [];

    for (var i = 0; i < numbersTot.length; i++) {
        var start1, start2, start3;
        function startTextAppear() {
            start1 = setTimeout(textAppear,10000 * i,numbers,numbersTot,'text',i);
            start2 = setTimeout(textDisappear,(10000 * i) + 3000,'text');
            start3 = setTimeout(inputFun,(10000 * i) + 4000,numbers);
        };
        startTextAppear();
    }


});

function textAppear(arraySmall,arrayBig,idElement,ind) {
    for (var j = 0; j <= ind; j++) {
        arraySmall[ind] = arrayBig[j];
    }
    document.getElementById(idElement).innerHTML = 'ricorda: ' + arraySmall;
    console.log(arraySmall);
    console.log('inserire numero e controllare');
}
function textDisappear(idElement) {
    document.getElementById(idElement).innerHTML = '';
}
function inputFun(arraySmall) {
    var howMany = arraySmall.length;
    var user = [];
    var ok = [];
    for (var i = 0; i < howMany; i++) {
        user[i] = prompt('inserire numero');
        var is = whereIsInArray(user[i],arraySmall);
        if (is != -1) {
            ok.push(user[i]);
        }
    }
    
    console.log('hai indovinato ' + ok.length + ' numeri: ' + ok);

}

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
