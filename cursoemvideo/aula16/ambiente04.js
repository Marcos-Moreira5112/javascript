function fatorial(x=0) {
    let fat = 1
    for (let cont = x; cont > 1; cont--) {
        fat *= cont
    }
    return fat
}

console.log( fatorial(2) )