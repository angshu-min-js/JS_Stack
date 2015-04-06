function pair(str) {

 
    var dnapair = [];
    for(var i = 0; i < str.length; i++) {
         var dna = [];
         dna.push(str[i]); 
         if(str[i].indexOf('G') === 0) {
         dna.push('C');
         }
         if(str[i].indexOf('C') === 0) {
         dna.push('G');
         }
         if(str[i].indexOf('A') === 0) {
         dna.push('T');
         }
         if(str[i].indexOf('T') === 0) {
         dna.push('A');
         }
         dnapair.push(dna); 
         }
    return dnapair;
}

pair("ATGCG");
