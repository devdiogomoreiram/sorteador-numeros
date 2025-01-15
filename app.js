function sortear() {
  let quantidade = parseInt(document.getElementById('quantidade').value)
  let de = parseInt(document.getElementById('de').value)
  let ate = parseInt(document.getElementById('ate').value)

  if (de >= ate) {
    alert(
      'Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!'
    )
    return
  }

  if (quantidade > ate - de + 1) {
    alert(
      'Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!'
    )
    return
  }

  let numerosSorteados = []
  let numero

  for (let i = 0; i < quantidade; i++) {
    numero = obterNumeroAleatorio(de, ate)

    while (numerosSorteados.includes(numero)) {
      numero = obterNumeroAleatorio(de, ate)
    }

    numerosSorteados.push(numero)
  }

  let resultado = document.getElementById('resultado')
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${numerosSorteados}</label>`

  // Habilitar o botão "Reiniciar" após o sorteio
  habilitarBotaoReiniciar()
}

function obterNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function habilitarBotaoReiniciar() {
  let botao = document.getElementById('btn-reiniciar')
  botao.classList.remove('container__botao-desabilitado')
  botao.classList.add('container__botao')
  botao.disabled = false // Habilitar o botão funcionalmente
}

function reiniciar() {
  document.getElementById('quantidade').value = ''
  document.getElementById('de').value = ''
  document.getElementById('ate').value = ''
  document.getElementById('resultado').innerHTML =
    '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'

  // Desabilitar o botão "Reiniciar"
  desabilitarBotaoReiniciar()
}

function desabilitarBotaoReiniciar() {
  let botao = document.getElementById('btn-reiniciar')
  botao.classList.remove('container__botao')
  botao.classList.add('container__botao-desabilitado')
  botao.disabled = true // Desabilitar o botão funcionalmente
}

// Estado inicial do botão "Reiniciar" desabilitado
document.addEventListener('DOMContentLoaded', () => {
  desabilitarBotaoReiniciar()
})
