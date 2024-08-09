let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio!';

function exibirNoConsole(){
    console.log('Olá mundo!');
};
function exibirAlerta(){
    let nome = prompt('Digite seu nome:');
    console.log(`Olá ${nome}!`);
};
function nomeDaCidade(){
    let numero = prompt('Digite o número desejado:');
    let dobroDoNumero = numero * 2;
    console.log(`o dobro do número desejado é: ${dobroDoNumero}`);
};
function media(){
    let nm1 = parseInt(prompt('Digite o primeiro número:'));
    let nm2 = parseInt(prompt('Digite o segundo número:'));
    let nm3 = parseInt(prompt('Digite o terceiro número:'));

    let media = (nm1 + nm2 + nm3) / 3;
    alert(`O resultado da media é: ${media}`);
};
