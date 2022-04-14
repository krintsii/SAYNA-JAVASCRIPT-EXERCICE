    let greet = function () {
        console.log("hello") ;
        console.log("programmeurs") ;
    } ;
    


    let whistle = function () {
        console.log("doot") ;
    } ;

    console.log("premier") ;
    console.log("second") ;
    //saluer() ;

    console.log("third") ;
    console.log("quatrième") ;
    //siffler() ;

    //fonction-0-2.js
    let exclaim = function (str) {
        let capitalized = str.toUpperCase() ;
        return capitalized + " !!";
    } ;
    let result = exclaim("potato") ;
    console.log(result) ;
    console.log(result.length) ;
    console.log(result[0]) ;
    console.log(result[result.length - 1]) ;
    
    
    //fonction-0-3.js
    let moyenne = function (num1, num2) {
        console.log("calcul...") ;
        return (num1 + num2) /2 ;
    } ;

    console.log(moyenne(5, 10,)) ;
    console.log(moyenne(20, 26)) ;
    console.log(moyenne(50, 100) + 2) ;
    let a = 21 + 3 ;
    let b = 20 ;
    let n = moyenne(a, b) ;
    console.log(moyenne(n, 18)) ;
    