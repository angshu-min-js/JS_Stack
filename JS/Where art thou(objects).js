function where(collection, source) {
var arr = [];
var sourceProp = Object.keys(source)[0]; 
for (var i in collection){
if (collection[i].hasOwnProperty(sourceProp) && collection[i][sourceProp] == source[sourceProp])
{
  arr.push(collection[i]);
    }
  }

  return arr;
}

where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });
