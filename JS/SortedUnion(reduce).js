function unite(arr1, arr2, arr3) {
  return arr1.concat(arr2).concat(arr3).reduce(function(a,b){if(a.indexOf(b)<0)a.push(b);return a;},[]);
}

unite([1, 2, 3], [5, 2, 1, 4], [2, 1]);
