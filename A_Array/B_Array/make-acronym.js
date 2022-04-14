


 function firstLetter(word) {
     return word[0]; // love 
  };

function makeAcronym(value){
    let array = [];
    let words = value.split(" "); 
    let acr = words.map(firstLetter); 
    return acr.join("").toUpperCase();
  };
  

console.log(makeAcronym("los Angeles")) ; // LA
console.log(makeAcronym("same stuff different day")) ; // SSDD
console.log(makeAcronym("Laugh out loud")) ; // LOL
console.log(makeAcronym("don't over think stuff")) ; // DOTS


// var value = "for your information";
// var acronym = makeAcronym(value);
// console.log(acronym);