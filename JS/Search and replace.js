function replace(str, before, after) {
 if(before[0]===before[0].toUpperCase())
 {after=after.charAt(0).toUpperCase() + after.slice(1);
 console.log(after);}
 return str.replace(before,after);
}

replace("His name is Tom", "Tom", "john");
