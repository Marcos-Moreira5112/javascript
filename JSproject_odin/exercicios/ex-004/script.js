let contador = document.querySelector("#contador")

function iniciar() {

    contador.innerHTML = ''

    for (let i = 10; i >= 0; i--) {
        if (i === 0) {
            contador.innerHTML += 'Boommm!'
        } else {
            contador.innerHTML += `${i}, `
        }
    }
}