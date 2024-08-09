//executado pelo node.js


//função que junta os elementos de duas ou mais arrays
const numero = [4.5, 10, 8, 7];
const numero1 = [6.5, 7, 6, 7];
const numero2 = [8.5, 9, 8, 7, 4];

function juntarNumeros(...arrays){
    return [].concat(...arrays);
}

const arrayJuntos = juntarNumeros(numero,numero1,numero2)
console.log(arrayJuntos);

//junta todos os elementos atravéz do metodo reduce() e soma
const valores = [4, 6, 7, 10, 8];

const somarElementos = valores.reduce((elementos, soma) => elementos + soma, 0);
console.log(somarElementos);

//une os dois arrays e remove os elementos duplicados 
const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']
const listasUnificadas = new Set([...coresLista1,...coresLista2]);

console.log(listasUnificadas);

//filtra e retorna somente os números pares
const numeros = [1, 2, 5, 7, 8, 10, 12];
function numerosPares(arr){
    return arr.filter(num => num %2 === 0);
}
const resultado = numerosPares(numeros);
console.log(resultado);

//filtra e retorna os números multiplos de 3 e maiores que 5
const numbers = [1, 3, 6, 5, 7, 9, 10, 15];
function numerosMultiplosDeTres(arr){
    return arr.filter(num => num %3 === 0 && num > 5);
}
const result = numerosMultiplosDeTres(numbers);
console.log(result);