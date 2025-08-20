function getMin(n1, n2) {
    if (n1 > n2) {
        return `${n1} é o menor número!`
    } else if (n2 > n1) {
        return `${n2} é o maior número`
    }
}

console.log(getMin(-3, -15))