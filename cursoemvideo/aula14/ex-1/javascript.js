let inicio = document.querySelector('#inicio')
let fim = document.querySelector('#fim')
let passos = document.querySelector('#passos')
let res = document.querySelector('#res')

function contar() {
   let V_inicio = Number(inicio.value)
   let V_fim = Number(fim.value)
   let V_passos = Number(passos.value)
   
   if (inicio.value.length ==  0 || fim.value.length == 0 || passos.value.length == 0) {
      
      window.alert(`Preencha todos os campos antes de continuar`)
   } else {
      
      res.innerHTML = ``
      
      for (let cont = V_inicio; cont <= V_fim; cont += V_passos) {
         
         res.innerHTML += `${cont}, `
      }
   }
}