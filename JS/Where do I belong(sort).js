function where(arr, num) {
  // Find my place in this sorted array.
  arr=arr.sort();
  for(var i in arr)
  {
    console.log(arr[i]);
    if(num<=arr[i]) 
    {
     return Number(i);
     }
  }

  
}

where([40, 60], 50);
