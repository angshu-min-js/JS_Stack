function sumFibs(num) {
  var cur = 1,
            last = 1,
            odds = 0;
        for(var i = 1; cur<num; i++)
        {   
            var tlast = i > 1 ? cur : last;
            cur = cur + last;
            last = tlast;
            //console.log(cur);
            if(cur % 2 !==0)
            {   if(cur>num) {break;}
                console.log(cur);
                odds += cur;                
            }
           //console.log(cur);
           
        }
      // console.log(cur);
       return odds+2;
}

sumFibs(4);
