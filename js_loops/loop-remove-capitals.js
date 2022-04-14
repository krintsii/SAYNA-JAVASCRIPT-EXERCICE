function removeCapitals(params) {
     let value = params.split("");
    const filtre = value.filter(char => char !== char.toUpperCase());
    const NoMaj = filtre.join("");
    return NoMaj;
}   


console.log(removeCapitals("fOrEver")) ; // 'frver'.
console.log(removeCapitals("raiNCoat")) ; // "raioat".
console.log(removeCapitals("clr Door")) ; // "clr oor
