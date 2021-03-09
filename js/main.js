$(document).ready(function() {

    var numbers = [1,2,3,4,5];
    alert(numbers);
    
    var start;
    function startFun() {
        start = setTimeout(userPrompt(numbers),3000);
    };
    startFun();

});

function userPrompt(arr) {
    var howMany = 5;
    var user = [];
    var ok = [];
    for (var i = 0; i < howMany; i++) {
        user[i] = prompt('inserire numero');
        var is = whereIsInArray(user[i],arr);
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
}