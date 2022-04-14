function fizzBuzz(max) {
    for (let i = 1; i <= max; i++) {
       if (i%3===0 || i%5===0){
           if (i%3===0 && i%5===0){
               continue
           } else {
               console.log(i);
           } 
           

       }
        
    }
    
};
//fizzBuzz(18) ;
fizzBuzz(18) ;