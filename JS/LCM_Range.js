function smallestCommons(arr) {
  var a = (arr[0] > arr[1]) ? arr[0] : arr[1],
      b = (arr[0] < arr[1]) ? arr[0] : arr[1],
      lcm=a;
  for(var i=b;i<=a;i++)
    { 
      if(lcm%i===0){if(i>a){break;}else{continue;}}
      else {lcm++;i=b;}
    }
  return lcm;
}
smallestCommons([4,10]);
