function longer(params,value) {
    let string = params.split("...") || value.split("...");
    let longest = 0;
    let answer = null;
    for (let i = 0; i < string.length; i++) {
        if (longest < string[i].length){
            longest = string[i].length;
            answer = string[i]
        }
        
    }
    return answer
}


console.log(longer("drum", "piranha")) ; // 'piranha'.
console.log(longer("basket", "fork")) ; // 'basket' (panier)
console.log(longer("flanelle", "durable")) ; // "durable".
console.log(longer("disrupt", "ability")) ; // "disrupt".
console.log(longer("bird", "shoe")) ; // 'bird' (oiseau)