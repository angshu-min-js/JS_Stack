vvar friends = {};
friends.bill = {
  firstName: "Bill",
  lastName: "Gates",
  number: "(206) 555-5555",
  address: ['One Microsoft Way','Redmond','WA','98052']
};
friends.steve = {
  firstName: "Steve",
  lastName: "Jobs",
  number: "(408) 555-5555",
  address: ['1 Infinite Loop','Cupertino','CA','95014']
};
function list(obj)
{
    for(var key in obj)
    {
        console.log(key);
    }
};
function search(name)
{
    for(var key in friends)
    {
     if(friends[key].firstname===name)
     console.log(friends[key]);
     return friends[key];
    }
};
list(friends);
search("steve");        


