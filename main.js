const form = document.getElementById('campos');
const valor1 = document.getElementById('valor1')
const valor2 = document.getElementById('valor2')

const mensagemCerto = `O valor B é maior que o valor A`
const mensagemErrado = `O valor B não é maior que o valor A`

function comparaValor(valor) {
    valor = valor1.value < valor2.value;
    return valor
}

form.addEventListener('submit', function(e){
    e.preventDefault();

if (comparaValor(valor1.value < valor2.value)) {
    document.querySelector('#mensagem').innerHTML = mensagemCerto;
    document.getElementsByName('mensagemCerto').Style.color= 'green';
} 
else {
    document.querySelector('#mensagem').innerHTML = mensagemErrado;
    document.getElementsByName('mensagemErrado').style.color= 'red';
    }

})