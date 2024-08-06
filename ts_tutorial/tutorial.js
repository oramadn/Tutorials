function multiplyAll(values, factor) {
    if (!values) {
        return values;
    }
    else {
        return values.map(function (x) { return x * factor; });
    }
}
var x = multiplyAll([2, 3], 3);
console.log(x);
