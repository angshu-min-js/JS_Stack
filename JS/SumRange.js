function sumAll(arr) {
    var numbers = [];

    var lowerlimit = Math.min(arr[0], arr[1]);
    var upperlimit = Math.max(arr[0], arr[1]);

    var total = 0;

    for (var i = lowerlimit; i <= upperlimit; i++) {
        total += i;
    }

    return total;
} sumAll([1, 4]);
