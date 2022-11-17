var intToRoman = function (n) {
    j = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
    z = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    r = '';

   // Run until we have converted the full nber
   while (n !== 0) {
       // Loop though the available nerals
       for ( i = 0; i < j.length; i++) {
           // Check if the outstanding nber is greater than the current neral
           if (n >= z[i]) {
               // If so, add this neral to the r and subtract its value from the outstanding nber
               r += j[i];
               n -= z[i];
               break;
           }
       }
   }
   return r;
};

//one line:
intToRoman=n=>{j=['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];z=[1000,900,500,400,100,90,50,40,10,9,5,4,1];r='';while(n!==0){for(i=0;i<j.length;i++){if(n>=z[i]){r+=j[i];n-=z[i];break}}}return r}