    let recette = {
    nom : "Crêpes à l'ancienne",
    difficulty : "facile",
    savoureux : true,
    ingrédients : ["œufs", "lait", "beurre", "farine", "sucre"],
    } ;
    console.log(recette.nom) ;
    console.log(recette["nom"]) ;
    console.log(recette.ingrédients.length) ;
    console.log(recette.calories) ;
    let someVariable = "difficulty" ;
    console.log(recette[someVariable]) ;
    console.log(recette.someVariable) ;
    for (let i = 0 ; i < recette.ingrédients.length ; i++) {
    console.log(recette.ingrédients[i]) ;
    }
    