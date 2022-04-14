

function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    let text = str.reverse();
    for (var i = 0; i < str.length; i++) {
       
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        } 
            
        
    }
    return word;
}



console.log(longestWord("I am pretty hungry")) ; // 'hungry' (faim)
console.log(longestWord("nous devrions penser en dehors de la boîte")) ; // "à l'extérieur".
console.log(longestWord("down the rabbit hole")) ; // "rabbit" (lapin)
console.log(longestWord("elephant down")) ; // "elephant".