function stringSize(params) {
    if(params.length < 5){
        return "small"
    } else if (params.length == 5){
        return "medium"
    } else if  (params.length > 5){
        return "large"
    } 

        
}

console.log(stringSize("cat")) ; // 'small' (petit)
console.log(stringSize("bell")) ; // 'small' (petit)
console.log(stringSize("ready")) ; // 'medium' (moyen)
console.log(stringSize("shirt")) ; // 'medium' (moyen)
console.log(stringSize("shallow")) ; // 'large' (grand)
console.log(stringSize("intelligence")) ; // 'large' (grand)