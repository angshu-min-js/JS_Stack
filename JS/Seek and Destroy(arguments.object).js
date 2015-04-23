function destroyer(arr) {
  for (var i=1;i<arguments.length;i++){
    for (var j=0;j<arr.length;j++){
      if (arr[j]===arguments[i]) arr.splice(j,1);
    }
  }
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//The arguments object is an Array-like object corresponding to the arguments passed to a function.
