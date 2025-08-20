function pow(x, n) {
    return x ** n
}

let a = prompt('Digite o valor que vc quer multiplicar')
let b = prompt('Digite o valor pelo qual vc vai multiplicar')

if (a < 1) {
    alert('digite um número maior que 0')
} else {
    alert(pow(a, b))
}