const form = document.getElementById('campos');
const valor1 = document.getElementById('valor1')
const valor2 = document.getElementById('valor2')

const mensagemCerto = "O valor B é maior que o valor A"
const mensagemErrado = "O valor B não é maior que o valor A"

function comparaValor () {
    compara = valor1.value > valor2.value;
    return compara
}

form.addEventListener('submit', function(e){
    e.preventDefault();

if (valor1.value > valor2.value) {
    alert(mensagemErrado);
} 
else {
    alert(mensagemCerto);
    }

})