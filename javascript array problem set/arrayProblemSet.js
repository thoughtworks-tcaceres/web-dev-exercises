function printReverse(array) {
    for (var i=array.length-1;i>=0;i--)
    {
        console.log(array[i]);
    }
}

function isUniform(array) {
    var checkUniform = true;

    for(var i=1;i<array.length;i++) {
        if (array[i]!==array[i-1]) {
            return false
        }
    }
    return true;
}

function sumArray(array) {
    var sum=0;

    array.forEach(function(value) {
        sum+=value;
    });
    return sum;
}

function max(array) {
    var maxValue=0;
    array.forEach(function(value) {
        if(value>maxValue) {
            maxValue = value;
        }
    });
    return maxValue;
}