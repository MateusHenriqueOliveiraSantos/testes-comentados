function exibirOlaNome(nome) {
    //exibir um comprimento!
    console.log(`Olá, ${nome}!`);
  }
  
  exibirOlaNome("joao");

function dobroDoNumero(numero){
    //retorna o dobro do número!
    return numero * 2;
}
let dobro = dobroDoNumero(5);
console.log(dobro);

function mediaDeTres(nm1,nm2,nm3){
    //retorna a média entre 3 números!
    return (nm1 + nm2 + nm3) /3;
}
let media = mediaDeTres(5,7,3);
console.log(media);

function maiorNumero(a,b){
    //retorna qual dos dois números é maior!
    return a > b ? a : b;
}
let maior = maiorNumero(9,7);
console.log(maior);

function numeroPorEleMesmo(numero){
    //retorna o número vezes ele mesmo!
    return numero * numero;
}
let resultado = numeroPorEleMesmo(7);
console.log(resultado);

function calculoIndiceMassaCorporal(peso,altura){
    //calcula o indice de massa corporal pra saber se a pessoa está acima do peso ou não!
    return peso / (altura * altura);
}
let indiceDeMassaCorporal = calculoIndiceMassaCorporal(82,1.70);
console.log(indiceDeMassaCorporal);

function calculoFatorial(numero){
    //calculo fatorial!
    if(numero === 0 || numero === 1){
    return 1;
}
let fatorial = 1;
for(i = 2 ; i <= numero ; i++){
    fatorial *= i;
}
return fatorial;
}
let numero = 6;
let resultadoDoCalculoFatorial = calculoFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultadoDoCalculoFatorial}`);

function conversorDeValor(valorEmDolar){
    //conversor de valores em dólar para real!
    let cotacao = 4.80;
    return valorEmDolar * cotacao;
}
let valor = 10;
let convertido = conversorDeValor(valor).toFixed(2);
console.log(`A quantia de ${valor} equivale a ${convertido} em reais!`);

function calculoDeAreaEPerimetro(altura,largura){
    //cálculo de um retangulo!
    let area = altura * largura;
    let perimetro = 2*(altura + largura);
    console.log(`A area da sala é ${area}`);
    console.log(`O perimetro da sala é ${perimetro}`);
}
calculoDeAreaEPerimetro(10,5);

function calculoDeAreaEPerimetroCirculo(raio){
    //cálculo de um círculo!
    let area = 3.14 * (raio*raio).toFixed(2);
    let perimetro = 2*(3.14 * raio).toFixed(2);
    console.log(`A area do circulo é ${area}`);
    console.log(`O perimetro do circulo é ${perimetro}`);
}
calculoDeAreaEPerimetroCirculo(5);

function calculoTabuada(numero){
    //transforma o número adicionado em uma tabuada de 1 a 10!
    for(i = 1; i <= 10; i++){
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}
calculoTabuada(7);

let listaGenerica = [];
let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Phyton'];
console.log(linguagensDeProgramacao);
linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');
//aqui está adicionando elementos em um array!

let listaDeNomes = ['Gabriel','Joao','Ana'];
console.log(listaDeNomes[0]);
console.log(listaDeNomes[1]);
console.log(listaDeNomes[2]);
//aqui está pesquisando dentro de um array pelo índice!

function APalavraEUmPalindromo(){
    //Verifica se a palavra é um palíndromo ou seja é a mesma coisa se lida de traz pra frente!
    let palavra = 'arvore';
    let palavraSeparada = palavra.split('');
    let palavraInvertida = palavraSeparada.reverse();
    palavraInvertida = palavraInvertida.join('');
    if(palavra == palavraInvertida){
        console.log('A palavra é um palindromo!');
    }else{
        console.log('A palavra não é um palindromo');
    }
}
APalavraEUmPalindromo();

function numerosCrescentes(a,b,c,d,e,f,g){
    //ordena os números em ordem crescente!
    const numeros = [a,b,c,d,e,f,g].sort((x,y) => x - y);
    console.log(`Os números em ordem crescente são ${numeros}`);
}
numerosCrescentes(5,2,4,6,7,3,1);

function qualEONumero(){
    //verifica se o número e positivo, negativo ou zero!
    let numero = 5;
    if(numero > 0){
        console.log('O número é positivo!');
    } else if(numero < 0){
        console.log('O número é negativo!');
    }if(numero == 0){
        console.log('O número é zero!');
    }
}
qualEONumero();

function maioridade(idade){
    //verifica se a pessoa é maior de idade!
    if(idade >= 18){
        console.log('Você é maior de idade!');
    }else {
        console.log('Você não é maior de idade!');
    }
}
maioridade(19);

function string(frase){
    //verifica se a string é vazia!
    if(frase == ''){
        console.log('A string está vazia!');
    }else {
        console.log(frase);
    }
}
string('');

function verificarAnoBissexto(ano) {
    //verifica se um ano é bissexto!
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        return "Ano bissexto";
    } else {
        return "Não é bissexto";
    }
}

console.log(verificarAnoBissexto(2025));

function MediaDeDois(number1,number2){
    //verifica os dois numeros se são válidos!
    if(isNaN(number1) || isNaN(number2)){
        console.log('Digite um número válido!')
        
    }
    let result = (number1 + number2) / 2;
    console.log(result);
}
MediaDeDois(7,5);

function recebeArray (){
    //verifica quantos itens existem em um array!
    let listaDeCompras = [];
    listaDeCompras.push('abobora','arroz');
    console.log(listaDeCompras.length);
}
recebeArray();

function testarIncludes(){
    //verifica com a função includes se já existe aquele item dentro do array!
    let listaDePlantas = [];
    listaDePlantas.push('Jabuticaba','Manga','Oiti','Quaresmeira');
    console.log(listaDePlantas.includes('Oiti'));
}
testarIncludes();

function verificarArray(arr,elemento){
    //verifica se já existe os elementos no array através dos elementos passados como parâmetro.
    return arr.includes(elemento);
}
let listaDeObjetos = ['colher','cadeira','notebook'];
let verificaobjeto = 'colher';
const verificacao = verificarArray(listaDeObjetos, verificaobjeto);
console.log(verificacao);

function calcularSomaProduto(soma){
    let somaPares = 0;
    let produtoImpares = 1;

    for(let produto of soma){
        if(produto % 2 === 0){
            somaPares += produto;
        }else {
            produtoImpares *= produto;
        }
    }
        return {somaPares,produtoImpares};   
}
const numbers = [1,2,3,4,5,6,7,8,9];
const resultadoDoCalculo = calcularSomaProduto(numbers);
console.log(resultadoDoCalculo);

