function keepItQuiet(params) {
    
    return params.toLowerCase() + "...";
}

console.log(keepItQuiet("HOORAY")) ; // 'hooray...' (en anglais)
console.log(keepItQuiet("Doggo")) ; // 'doggo...' (en anglais)
console.log(keepItQuiet("WHAT ?!?!")) ; // 'what ?!?!...' (quoi ?!!...)