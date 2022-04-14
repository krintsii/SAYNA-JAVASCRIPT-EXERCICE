function keyPair(obj1, obj2, key){
     let tab = [];
     tab.push(obj1[key],obj2[key])
     return tab
};

let cat1 = { name : "jinkee", breed : "calico" } ;
let cat2 = { name : "garfield", breed : "red tabby" } ;
console.log(keyPair(cat1, cat2, "breed")) ; // [ 'calico', 'redtabby' ]
console.log(keyPair(cat1, cat2, "name")) ; // [ 'jinkee', 'garfield' ]
let sport1 = { nom : "volleyball", équipe : true } ;
let sport2 = { nom : "golf", équipe : false } ;
console.log(keyPair(sport1, sport2, "équipe")) ; // [ true, false ]