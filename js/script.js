let num = document.querySelector('input#txtnum')
let list = document.querySelector('div#flist')
let res = document.querySelector('div#res')
let ano = document.getElementById('ano')
let soma = 0
let valores = []
let date = new Date()
let year = date.getFullYear()


// Verificar número 1-100
function isNumber(n){
  if(Number(n) >= 1 && Number(n) <= 100){
    return true
  } else {
    return false
  }
}

// Verificar se número está na lista
function inList(n, l){
  if(l.includes(n)){
    return true
  } else{
    return false
  }
}

// adicionar números
function adicionar(){
  // Obter o número do campo de entrada(num) e remover zeros à esquerda
  let number = num.value.trim().replace(/^0+/, ''); 

  if(isNumber(number) && inList(number, valores)){
    alert(`O número ${num.value} já foi adicionado a lista!`)
  } else if (isNumber(number) && !inList(number, valores)){
    let item = document.createElement('p')
    item.textContent = `O valor ${number} foi adicionado.`
    list.appendChild(item)
    valores.push(number)
  } else{
    alert('[ERRO] Valor inválido!')
  }
}

// finalizar
function finalizar(){
  
  if(valores == ''){
    alert('Por favor, adicione valores antes de finalizar!')
  } else{
    res.innerHTML = ''

    soma = 0
  for(let c = 0; c < valores.length; c++){
    soma += Number(valores[c])
  }

  let check = document.createElement('p')
  res.appendChild(check)

  check.innerHTML = `
        <p>Ao todo, temos ${valores.length} números cadastrados.</p>
        <p>O MAIOR valor informado foi ${Math.max(...valores)}. </p>
        <p>O menor valor informado foi ${Math.min(...valores)}.</p>
        <p>Somando todos os valores, temos ${soma}.</p>
        <p>A média dos valores digitados é ${(soma/valores.length).toFixed(2)}</p>
  `
  }
}

// Limpar valores
function clean(){
  num.value = ''
  list.innerHTML = ''
  res.innerHTML = ''
  valores = []
}

// Ano atual
ano.innerText = year

// Verificar se o navegador é o Firefox e adicionar uma classe ao corpo do documento
if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
  document.body.classList.add('firefox');
}
