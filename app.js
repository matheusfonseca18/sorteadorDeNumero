let numero1;
let numero2;
let numeroMaior;
let numeroMenor;

function exibirTextoNaTela (tag, texto) {
    let campo  = document.querySelector(tag);
    campo.innerHTML = texto;
}

function sortear() {

event.preventDefault();

numero1 = parseInt(document.querySelector('.inputNumero1').value);
numero2 = parseInt(document.querySelector('.inputNumero2').value);

document.querySelector('.sortearNumero').setAttribute('disabled', 'disabled')

if (numero1 > numero2) {
    numeroMaior = numero1
    numeroMenor = numero2;
} else {
    numeroMaior = numero2
    numeroMenor = numero1;
};

exibirTextoNaTela ('.intervaloSorteado', `O número sorteado está entre ${numeroMenor} e ${numeroMaior}`)

console.log(`numero1 = ${numero1}, numero2 = ${numero2}`);
console.log(`numeroMaior = ${numeroMaior}, numeroMenor = ${numeroMenor}`);

let sorteador = parseInt(Math.random() * numeroMaior + 1);

while (sorteador < numeroMenor) {
    console.log(`Número sorteado ${sorteador}, menor que ${numeroMenor}. Sortear novamente`)
    sorteador = parseInt(Math.random() * numeroMaior + 1 );
 
}

exibirTextoNaTela('#numeroSorteado', `já temos o número sorteado, faça seu chute!`)

console.log(sorteador);

}

