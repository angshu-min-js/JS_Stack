/*jshint multistr:true */
var text = "Ang Ang";
var myName = "Ang";
var hits = [];
for(var i=0;i<text.length;i++)
{
    if(text[i]==="A")
    {
        for(var j=i;j<(myName.length+i);j++)
        {
            hits.push(text[j]);
        }
    }
}
if(hits.length===0)
console.log("Your name wasn't found!");
else
console.log(hits);
