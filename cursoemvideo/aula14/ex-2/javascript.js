let numero = document.querySelector("#numero")
let tabuada = document.querySelector("#tabuada")

function calcular() {

   if (numero.value.length == 0) {

      alert("Por favor, digite um número!")

   } else {

      let V_numero = Number(numero.value)

      tabuada.innerHTML = ""

      for (c = 1; c <= 10; c++) {
         let item = document.createElement("option")
         item.text = `${V_numero} x ${c} = ${V_numero * c}`
         tabuada.appendChild(item)
      }
   }
}