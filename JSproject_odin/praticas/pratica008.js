const scores = [95, 88, 70, -5, 76, 59, 92];

let scoresPositivos = scores.filter(n => n > 0)

let scoresBonus = scoresPositivos.map( n => {
    if (n + 5 >= 100) {
        return 100

    } else if (n > 90) {
        return n + 5

    } else if (n >= 75) {
        return n + 3

    } else {
        return n
    }
})

let scoresAprovados = scoresBonus.filter(n => n >= 60)

console.log(scores)
console.log(scoresPositivos)
console.log(scoresBonus)
console.log(scoresAprovados)