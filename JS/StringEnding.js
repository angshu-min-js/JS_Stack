function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  result=str.substring((str.length-1)-(target.length-1));
  console.log(target);
  if(result===target)
  return true;
  else
    return false;
}

end('He has to give me a new name', 'name');
