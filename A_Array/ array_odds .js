

function arrayOdds (impaire) {
    let elements = 0; 
    for (let i = 0; i < impaire.length; i++) {
        const element = impaire[i];
        if (element % 2 !== 0 ) {
            elements++;
        }
    }
    return elements
    
    
    
}


console.log(arrayOdds([4, 7, 2, 5, 9])) ; // 3
console.log(arrayOdds([11, 31, 58, 99, 21, 60])) ; // 4
console.log(arrayOdds([100, 40, 4])) ; // 0
