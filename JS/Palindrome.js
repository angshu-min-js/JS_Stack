function palindrome(str) {
  // Good luck!
  str=str.replace(/\s/g,'').replace(/\W/g,'').toLowerCase();
  return str===str.split('').reverse().join('');
}



palindrome("eye");
