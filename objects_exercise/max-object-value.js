function maxObjectValue(objet){
    let max = 0;
    let returnkey = ""
    for (const cle in objet) {
        const valeur = objet[cle];
        if (valeur > max) {
            max = valeur;
            returnkey = cle;
        }
    }
    return [returnkey, max];
}

console.log(maxObjectValue({ a : 5, b : 2, c : 6, d : 7, e : 4 })) ; // ['d', 7]
console.log(maxObjectValue({ litchi : 11, ramboutan : 13, papaye : 9 })) ; // ['ramboutan', 13]