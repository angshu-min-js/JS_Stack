function translate(str) {
 var index;
 index = str.search(/[aeiouAEIOU]/);
 if (index <= 0) { return str + "way"; }
            else { return str.substring(index, str.length) + str.substring(0,index) + "ay"; }
}
translate("glove");
/**Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.**/
