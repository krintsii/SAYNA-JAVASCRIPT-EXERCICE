function objectAdd(obj1,obj2) {
  const zvtr = {};
  const toutKey = new Set(Object.keys(obj1).concat(Object.keys(obj2)));
//   addition de tous les cle de obj1 et obj2 dans un nouveau cle 
// concat addition 
// set pour ajouter un objet dans un nouveau objet 
    toutKey.forEach(key => {
        zvtr[key] = 0;

        if (key in obj1 && key in obj2){
            zvtr[key] = obj1[key] + obj2[key];
        } else if (key in obj1 && !(key in obj2)){
            zvtr[key] = obj1[key];
        } else if (key in obj2 && !(key in obj1)){
            zvtr[key] = obj2[key];
        }
    })
  
   return zvtr
};


let obj1 = { x : 3, y : 10} ;
let obj2 = { y : 2, x : 1} ;
console.log(objectAdd(obj1, obj2)) ; // { x : 4, y : 12 }
let obj3 = { a : 3, b : 2, c : -1} ;
let obj4 = { b : 5, c : 1, e : 4} ;
console.log(objectAdd(obj3, obj4)) ; // { a : 3, b : 7, c : 0, e : 4




