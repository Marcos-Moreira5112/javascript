let inicio = document.querySelector('#inicio')
let fim = document.querySelector('#fim')
let passos = document.querySelector('#passos')
let res = document.querySelector('#res')

function contar() {
   let V_inicio = Number(inicio.value)
   let V_fim = Number(fim.value)
   let V_passos = Number(passos.value)
   
   if (V_passos <= 0) {
      window.alert(`Passo inválido! Considerando passos = 1`)
      V_passos = 1
   }
   
   if (inicio.value.length ==  0 || fim.value.length == 0 || passos.value.length == 0) {
      
      window.alert(`Preencha todos os campos antes de continuar`)
   } else {
      
      res.innerHTML = `resultado: <br>`
      
         if (V_inicio < V_fim) {
            
            //Contagem Crescente
            
            for (let cont = V_inicio; cont <= V_fim; cont += V_passos) {
               if (cont + V_passos > V_fim) {
                  res.innerHTML += `${cont}`
               } else {
                  res.innerHTML += `${cont}, `
               }
            }
         } else if (V_inicio > V_fim) { 
            
            //Contagem decrescente
            
            for (let cont = V_inicio; cont>= V_fim; cont -= V_passos){
               if (cont - V_passos < V_fim) {
                  res.innerHTML += `${cont}`
               } else {
                  res.innerHTML += `${cont}, `
               }
            }
         }
      }
   }