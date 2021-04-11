function calcular (){
  let dolar = document.getElementById('dolar')
let real = document.getElementById('real')
let totaldolar = ('5.5')
 dolar = parseFloat(dolar.value)
resultado = dolar * 5.5


real.innerHTML = `o valor convertido sera de ${resultado.toFixed(2)} reais!`
}

  //revisao
//variaveis var int - floot - string
//alert - porseInt - parseFloot - prompt
//operaçoes + somar * multiplicar 
