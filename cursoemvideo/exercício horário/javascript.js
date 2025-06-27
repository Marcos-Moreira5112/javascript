function carregar() {

    let msg = document.querySelector('#msg')
    let imagem = document.querySelector('#imagem')
    let data = new Date()
    let hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 23) {
        imagem.src = 'imagens/imagem-manhã-redonda.png'
        document.body.style.background = 'rgb(243, 223, 109)'

    } else if (hora >= 12 && hora < 18) {
        imagem.src = 'imagens/imagem-tarde-redonda.png'
        document.body.style.background = 'rgb(243, 223, 109)'
        
    } else {
        imagem.src = 'imagens/imagem-noite-redonda.png'
        document.body.style.background = 'rgb(9, 4, 36)' 
    }
}