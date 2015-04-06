var slaying = true;
var youHit=Math.floor(Math.random()*2);
var damageThisRound=Math.floor(Math.random()*5+1);
var totalDamage = 0;

while(slaying)
{
    if(youHit)
    {
    console.log("You hit the dragon and did " + damageThisRound + " damage!");
    totalDamage += damageThisRound;
    if(totalDamage>=4)
    console.log("You did it! You slew the dragon!");
    else
    youHit = Math.floor(Math.random() * 2);
    }
    else
    console.log("You have been defeated, Loser!");
    slaying = false;
}
