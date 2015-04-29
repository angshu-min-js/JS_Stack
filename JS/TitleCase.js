function titleCase(str) {

  str=str.toLowerCase().split(' ');
  var results = [];
  for(var i in str)
  {
    console.log(str[i]) ;
    var letter = str[i].charAt(0).toUpperCase();
    console.log(letter);
    results.push(letter + str[i].slice(1));
  }
  return results.join(' ');
  
  
}

titleCase("I'm a little tea pot");
