let foo = function () {
        for (let i = 10 ; i > 0 ; i -= 2) {
            console.log(i) ;
        }
    };
    console.log("début") ;
    foo() ;
    console.log("end") ;
    foo() ;