

function wordCount(text) {
    let word = text[0];
    let texte = text[1];
    let isa = 0; 
    for (let i = 0; i < texte.length; i++) {
       if (word.includes(texte[i])) {
           isa = isa+1
       }
     
    }
    
    return isa   
}


console.log(wordCount(["ouvrez la fenêtre s'il vous plaît", ["s'il vous plaît", "ouvrez", "désolé"]])) ; // 2
console.log(wordCount(["conduire au cinéma", ["le", "conduire"]])) ; // 1
console.log(wordCount(["puis-je avoir cette canette", ["puis", "je"]])) ; // 3