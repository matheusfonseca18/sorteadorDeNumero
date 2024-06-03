let numeroSorteado;
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function sortear() {
  event.preventDefault();

  let numero1 = parseInt(document.querySelector(".inputNumero1").value);
  let numero2 = parseInt(document.querySelector(".inputNumero2").value);

let numeroMaior = Math.max(numero1, numero2)
let numeroMenor = Math.min(numero1, numero2)

  exibirTextoNaTela(
    ".intervaloSorteado",
    `O número sorteado está entre ${numeroMenor} e ${numeroMaior}`
  );

  console.log(`numero1 = ${numero1}, numero2 = ${numero2}`);
  console.log(`número menor = ${numeroMenor}, número maior = ${numeroMaior}`);

  numeroSorteado =
    parseInt(Math.random() * (numeroMaior - numeroMenor + 1)) + numeroMenor;

  exibirTextoNaTela(
    "#numeroSorteado",
    "Já temos o número sorteado, faça seu chute!"
  );

  console.log(numeroSorteado);

  document.querySelector(".testaChute").removeAttribute('disabled')

  tentativas = 1;

  document.querySelector('.chute').value = '';
}

function testarChute() {
  event.preventDefault();

  let chute = parseInt(document.querySelector(".chute").value);

  let palavraTentativa = tentativas === 1 ? 'tentativa' : 'tentativas'

  if (chute === numeroSorteado) {
    exibirTextoNaTela(
      "#numeroSorteado",
      `Você acertou! O número sorteado é ${numeroSorteado}, você precisou de ${tentativas} ${palavraTentativa}`
    );
    document.querySelector(".testaChute").setAttribute('disabled', true)
  } else {
    if (chute > numeroSorteado) {
      exibirTextoNaTela(
        "#numeroSorteado",
        `O número sorteado é menor que ${chute}`
      );
    } else {
      exibirTextoNaTela(
        "#numeroSorteado",
        `O número sorteado é maior que ${chute}`
      );
    }
    tentativas++;
    document.querySelector('.chute').value = '';
  }
}