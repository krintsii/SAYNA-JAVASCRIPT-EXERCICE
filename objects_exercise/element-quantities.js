function elementQuantities(params) {
    let result = [];
   for (const key in params) {
    for (let i = 0; i < params[key]; i++) {
        result.push(key)
    }
   }
      return result 
};


let quantities1 = { cat : 3, oiseau : 1, chien : 2 } ;
console.log(elementQuantities(quantities1)) ; // ['cat', 'cat', 'cat', 'oiseau', 'chien', 'chien']
let quantities2 = { blue : 3, marron : 1 } ;
console.log(elementQuantities(quantities2)) ; // ['blue', 'blue', 'blue', 'brown']