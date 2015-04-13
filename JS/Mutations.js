function mutation(arr) {
  com=arr[1].split('');
  //console.log(com);
  var c;
  for(var i in com)
    {
   //console.log(com[i]);
  if(arr[0].toLowerCase().indexOf(com[i])>-1)
  c=1;
  else
  c=0;
    }
  if(c===1) return true;
  else return false;
}

mutation(['hello', 'hey']);
