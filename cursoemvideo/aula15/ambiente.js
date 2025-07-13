let num = [5, 8, 2]
num[3] = 6
num.push(7)
num.sort()

for (let pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
}

for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

let of = num.indexOf(8)
console.log(`O valor 8 está na posição ${of}`)